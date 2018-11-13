#ifdef __cplusplus
#define EXTERNC extern "C"
#else
#define EXTERNC
#endif

#include "annoylib.h"

EXTERNC typedef void *rust_annoy_index_t;
EXTERNC struct f_vector;
EXTERNC struct i_vector;

EXTERNC i_vector *i_vector_init();
EXTERNC f_vector *f_vector_init();
EXTERNC void i_vector_destroy(i_vector *vec);
EXTERNC void f_vector_destroy(f_vector *vec);
EXTERNC rust_annoy_index_t rust_annoy_index_angular_init(int f);
EXTERNC rust_annoy_index_t rust_annoy_index_euclidian_init(int f);
EXTERNC rust_annoy_index_t rust_annoy_index_manhattan_init(int f);

EXTERNC void rust_annoy_index_destroy(rust_annoy_index_t self);
EXTERNC void rust_annoy_index_add_item(rust_annoy_index_t self, int item, const float *w);
EXTERNC void rust_annoy_index_build(rust_annoy_index_t self, int q);
EXTERNC bool rust_annoy_index_save1(rust_annoy_index_t self, const char *filename);
EXTERNC bool rust_annoy_index_save2(rust_annoy_index_t self, const char *filename, bool prefault);
EXTERNC void rust_annoy_index_unload(rust_annoy_index_t self);
EXTERNC bool rust_annoy_index_load1(rust_annoy_index_t self, const char *filename);
EXTERNC bool rust_annoy_index_load2(rust_annoy_index_t self, const char *filename, bool prefault);

EXTERNC float rust_annoy_index_get_distance(rust_annoy_index_t self, int i, int j);

EXTERNC void rust_annoy_index_get_nns_by_item(rust_annoy_index_t self, int item, int n, int search_k, i_vector *result, f_vector *distances);
EXTERNC void rust_annoy_index_get_nns_by_vector(rust_annoy_index_t self, const float *w, int n, int search_k, i_vector *result, f_vector *distances);
EXTERNC int rust_annoy_index_get_n_item(rust_annoy_index_t self);
EXTERNC void rust_annoy_index_verbose(rust_annoy_index_t self, bool v);
EXTERNC void rust_annoy_index_get_item(rust_annoy_index_t self, int item, float **v);
