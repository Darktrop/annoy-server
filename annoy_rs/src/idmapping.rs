use annoy::{AnnoyIndex, AnnoyIndexBuilder, Distance};
use err::Error;
use std::collections::hash_map::Entry;
use std::collections::HashMap;
use std::fs::File;
use std::io::{BufRead, BufReader};
use std::path::Path;

pub struct MappingIndexBuilder<T>
where
    T: std::cmp::Eq + std::hash::Hash + Copy + std::str::FromStr,
{
    index_id: String,
    index: AnnoyIndexBuilder,
    map: HashMap<T, i32>,
    inverse_map: HashMap<i32, T>,
}

pub struct MappingIndex<T>
where
    T: std::cmp::Eq + std::hash::Hash + Copy + std::str::FromStr,
{
    index_id: String,
    index: AnnoyIndex,
    map: HashMap<T, i32>,
    inverse_map: HashMap<i32, T>,
}

impl<T> MappingIndexBuilder<T>
where
    T: std::cmp::Eq + std::hash::Hash + Copy + std::str::FromStr,
{
    pub fn new(index_id: &str, dimension: i32, distance: Distance) -> Self {
        let index = AnnoyIndexBuilder::new(dimension, distance);
        let map = HashMap::default();
        let inverse_map = HashMap::default();
        MappingIndexBuilder {
            index_id: index_id.to_owned(),
            index,
            map,
            inverse_map,
        }
    }

    pub fn put(&mut self, item: T, vector: &[f32]) -> Result<(), Error> {
        let entry = self.map.entry(item);
        match entry {
            Entry::Occupied(_) => Err(Error::KeyAlreadyPresent),
            Entry::Vacant(entry) => {
                let id = self.index.add_item(vector);
                entry.insert(id);
                self.inverse_map.insert(id, item);
                Ok(())
            }
        }
    }

    pub fn build(self, n_tree: Option<i32>) -> MappingIndex<T> {
        MappingIndex {
            index_id: self.index_id,
            index: self.index.build(n_tree),
            map: self.map,
            inverse_map: self.inverse_map,
        }
    }
}

impl<T> MappingIndex<T>
where
    T: std::cmp::Eq + std::hash::Hash + Copy + std::str::FromStr,
{
    pub fn get_nns_by_vector(
        &self,
        w: &[f32],
        n: i32,
        search_k: Option<i32>,
    ) -> (Vec<T>, Vec<f32>) {
        let (r, v) = self.index.get_nns_by_vector(w, n, search_k);
        (r.iter().map(|i| self.inverse_map[i]).collect(), v)
    }

    pub fn get_item_vector(&self, item: T) -> Option<Vec<f32>> {
        self.map
            .get(&item)
            .and_then(|key| self.index.get_item(*key))
    }

    pub fn dimension(&self) -> i32 {
        self.index.dimension()
    }

    pub fn len(&self) -> usize {
        self.map.len()
    }

    pub fn is_empty(&self) -> bool {
        self.map.len() == 0
    }

    pub fn load<P: AsRef<Path>>(
        index_id: &str,
        index_file_path: P,
        mapping_file_path: P,
        dimension: i32,
        distance: Distance,
        load_into_ram: bool,
    ) -> Result<MappingIndex<T>, Error> {
        let index = AnnoyIndexBuilder::new(dimension, distance).build(None);
        index.load2(index_file_path, load_into_ram)?;

        let mapping_file: File = File::open(mapping_file_path)?;
        let buf = BufReader::new(mapping_file);
        let mut index_map = HashMap::new();

        let mut reverse_index_map = HashMap::new();

        for (index, line) in buf.lines().enumerate() {
            let line = line?;
            let item = line.parse::<T>().map_err(|_e| Error::ParsingError(line))?;
            index_map.insert(item, index as i32);
            reverse_index_map.insert(index as i32, item);
        }

        Ok(MappingIndex {
            index_id: index_id.to_owned(),
            index,
            map: index_map,
            inverse_map: reverse_index_map,
        })
    }
}

impl<T> PartialEq for MappingIndex<T>
where
    T: std::cmp::Eq + std::hash::Hash + Copy + std::str::FromStr,
{
    fn eq(&self, rhs: &MappingIndex<T>) -> bool {
        self.index_id == rhs.index_id
    }
}

impl<T> Eq for MappingIndex<T> where T: std::cmp::Eq + std::hash::Hash + Copy + std::str::FromStr {}
