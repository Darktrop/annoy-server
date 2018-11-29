(function() {var implementors = {};
implementors["capnp"] = [{text:"impl&lt;T, E&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"capnp/capability/struct.Promise.html\" title=\"struct capnp::capability::Promise\">Promise</a>&lt;T, E&gt;",synthetic:false,types:["capnp::capability::Promise"]},];
implementors["capnp_futures"] = [{text:"impl&lt;R&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"capnp_futures/serialize/struct.Read.html\" title=\"struct capnp_futures::serialize::Read\">Read</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>",synthetic:false,types:["capnp_futures::serialize::Read"]},{text:"impl&lt;W, M&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"capnp_futures/serialize/struct.Write.html\" title=\"struct capnp_futures::serialize::Write\">Write</a>&lt;W, M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"capnp_futures/serialize/trait.AsOutputSegments.html\" title=\"trait capnp_futures::serialize::AsOutputSegments\">AsOutputSegments</a>,&nbsp;</span>",synthetic:false,types:["capnp_futures::serialize::Write"]},{text:"impl&lt;W, M&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"capnp_futures/struct.WriteQueue.html\" title=\"struct capnp_futures::WriteQueue\">WriteQueue</a>&lt;W, M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"capnp_futures/serialize/trait.AsOutputSegments.html\" title=\"trait capnp_futures::serialize::AsOutputSegments\">AsOutputSegments</a>,&nbsp;</span>",synthetic:false,types:["capnp_futures::write_queue::WriteQueue"]},];
implementors["capnp_rpc"] = [{text:"impl&lt;VatId&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"capnp_rpc/struct.RpcSystem.html\" title=\"struct capnp_rpc::RpcSystem\">RpcSystem</a>&lt;VatId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;VatId: 'static,&nbsp;</span>",synthetic:false,types:["capnp_rpc::RpcSystem"]},];
implementors["futures"] = [];
implementors["futures_cpupool"] = [{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static, E:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_cpupool/struct.CpuFuture.html\" title=\"struct futures_cpupool::CpuFuture\">CpuFuture</a>&lt;T, E&gt;",synthetic:false,types:["futures_cpupool::CpuFuture"]},];
implementors["h2"] = [{text:"impl&lt;B&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"h2/client/struct.ReadySendRequest.html\" title=\"struct h2::client::ReadySendRequest\">ReadySendRequest</a>&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"bytes/buf/into_buf/trait.IntoBuf.html\" title=\"trait bytes::buf::into_buf::IntoBuf\">IntoBuf</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"type\" href=\"bytes/buf/into_buf/trait.IntoBuf.html#associatedtype.Buf\" title=\"type bytes::buf::into_buf::IntoBuf::Buf\">Buf</a>: 'static,&nbsp;</span>",synthetic:false,types:["h2::client::ReadySendRequest"]},{text:"impl&lt;T, B&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"h2/client/struct.Connection.html\" title=\"struct h2::client::Connection\">Connection</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"bytes/buf/into_buf/trait.IntoBuf.html\" title=\"trait bytes::buf::into_buf::IntoBuf\">IntoBuf</a>,&nbsp;</span>",synthetic:false,types:["h2::client::Connection"]},{text:"impl&lt;T, B&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"h2/client/struct.Handshake.html\" title=\"struct h2::client::Handshake\">Handshake</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"bytes/buf/into_buf/trait.IntoBuf.html\" title=\"trait bytes::buf::into_buf::IntoBuf\">IntoBuf</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"type\" href=\"bytes/buf/into_buf/trait.IntoBuf.html#associatedtype.Buf\" title=\"type bytes::buf::into_buf::IntoBuf::Buf\">Buf</a>: 'static,&nbsp;</span>",synthetic:false,types:["h2::client::Handshake"]},{text:"impl <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"h2/client/struct.ResponseFuture.html\" title=\"struct h2::client::ResponseFuture\">ResponseFuture</a>",synthetic:false,types:["h2::client::ResponseFuture"]},{text:"impl <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"h2/client/struct.PushedResponseFuture.html\" title=\"struct h2::client::PushedResponseFuture\">PushedResponseFuture</a>",synthetic:false,types:["h2::client::PushedResponseFuture"]},{text:"impl&lt;T, B:&nbsp;<a class=\"trait\" href=\"bytes/buf/into_buf/trait.IntoBuf.html\" title=\"trait bytes::buf::into_buf::IntoBuf\">IntoBuf</a>&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"h2/server/struct.Handshake.html\" title=\"struct h2::server::Handshake\">Handshake</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"bytes/buf/into_buf/trait.IntoBuf.html\" title=\"trait bytes::buf::into_buf::IntoBuf\">IntoBuf</a>,&nbsp;</span>",synthetic:false,types:["h2::server::Handshake"]},];
implementors["tokio_core"] = [{text:"impl <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_core/net/struct.TcpStreamNew.html\" title=\"struct tokio_core::net::TcpStreamNew\">TcpStreamNew</a>",synthetic:false,types:["tokio_core::net::tcp::TcpStreamNew"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_core/net/struct.SendDgram.html\" title=\"struct tokio_core::net::SendDgram\">SendDgram</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;,&nbsp;</span>",synthetic:false,types:["tokio_core::net::udp::SendDgram"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_core/net/struct.RecvDgram.html\" title=\"struct tokio_core::net::RecvDgram\">RecvDgram</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsMut.html\" title=\"trait core::convert::AsMut\">AsMut</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;,&nbsp;</span>",synthetic:false,types:["tokio_core::net::udp::RecvDgram"]},{text:"impl <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_core/reactor/struct.Timeout.html\" title=\"struct tokio_core::reactor::Timeout\">Timeout</a>",synthetic:false,types:["tokio_core::reactor::timeout::Timeout"]},];
implementors["tokio_curl"] = [{text:"impl <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_curl/struct.Perform.html\" title=\"struct tokio_curl::Perform\">Perform</a>",synthetic:false,types:["tokio_curl::Perform"]},];
implementors["tokio_fs"] = [{text:"impl&lt;P&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_fs/struct.CreateDirFuture.html\" title=\"struct tokio_fs::CreateDirFuture\">CreateDirFuture</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;,&nbsp;</span>",synthetic:false,types:["tokio_fs::create_dir::CreateDirFuture"]},{text:"impl&lt;P&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_fs/struct.CreateDirAllFuture.html\" title=\"struct tokio_fs::CreateDirAllFuture\">CreateDirAllFuture</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;,&nbsp;</span>",synthetic:false,types:["tokio_fs::create_dir_all::CreateDirAllFuture"]},{text:"impl&lt;P&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_fs/file/struct.CreateFuture.html\" title=\"struct tokio_fs::file::CreateFuture\">CreateFuture</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>",synthetic:false,types:["tokio_fs::file::create::CreateFuture"]},{text:"impl <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_fs/file/struct.MetadataFuture.html\" title=\"struct tokio_fs::file::MetadataFuture\">MetadataFuture</a>",synthetic:false,types:["tokio_fs::file::metadata::MetadataFuture"]},{text:"impl&lt;P&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_fs/file/struct.OpenFuture.html\" title=\"struct tokio_fs::file::OpenFuture\">OpenFuture</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>",synthetic:false,types:["tokio_fs::file::open::OpenFuture"]},{text:"impl <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_fs/file/struct.SeekFuture.html\" title=\"struct tokio_fs::file::SeekFuture\">SeekFuture</a>",synthetic:false,types:["tokio_fs::file::seek::SeekFuture"]},{text:"impl&lt;P, Q&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_fs/struct.HardLinkFuture.html\" title=\"struct tokio_fs::HardLinkFuture\">HardLinkFuture</a>&lt;P, Q&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Q: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;,&nbsp;</span>",synthetic:false,types:["tokio_fs::hard_link::HardLinkFuture"]},{text:"impl&lt;P&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_fs/struct.MetadataFuture.html\" title=\"struct tokio_fs::MetadataFuture\">MetadataFuture</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>",synthetic:false,types:["tokio_fs::metadata::MetadataFuture"]},{text:"impl&lt;P, Q&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_fs/os/unix/struct.SymlinkFuture.html\" title=\"struct tokio_fs::os::unix::SymlinkFuture\">SymlinkFuture</a>&lt;P, Q&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Q: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;,&nbsp;</span>",synthetic:false,types:["tokio_fs::os::unix::SymlinkFuture"]},{text:"impl&lt;P&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_fs/struct.ReadDirFuture.html\" title=\"struct tokio_fs::ReadDirFuture\">ReadDirFuture</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>",synthetic:false,types:["tokio_fs::read_dir::ReadDirFuture"]},{text:"impl&lt;P&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_fs/struct.ReadLinkFuture.html\" title=\"struct tokio_fs::ReadLinkFuture\">ReadLinkFuture</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;,&nbsp;</span>",synthetic:false,types:["tokio_fs::read_link::ReadLinkFuture"]},{text:"impl&lt;P&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_fs/struct.RemoveDirFuture.html\" title=\"struct tokio_fs::RemoveDirFuture\">RemoveDirFuture</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;,&nbsp;</span>",synthetic:false,types:["tokio_fs::remove_dir::RemoveDirFuture"]},{text:"impl&lt;P&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_fs/struct.RemoveFileFuture.html\" title=\"struct tokio_fs::RemoveFileFuture\">RemoveFileFuture</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;,&nbsp;</span>",synthetic:false,types:["tokio_fs::remove_file::RemoveFileFuture"]},{text:"impl&lt;P, Q&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_fs/struct.RenameFuture.html\" title=\"struct tokio_fs::RenameFuture\">RenameFuture</a>&lt;P, Q&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Q: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;,&nbsp;</span>",synthetic:false,types:["tokio_fs::rename::RenameFuture"]},{text:"impl&lt;P&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_fs/struct.SetPermissionsFuture.html\" title=\"struct tokio_fs::SetPermissionsFuture\">SetPermissionsFuture</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;,&nbsp;</span>",synthetic:false,types:["tokio_fs::set_permissions::SetPermissionsFuture"]},{text:"impl&lt;P&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_fs/struct.SymlinkMetadataFuture.html\" title=\"struct tokio_fs::SymlinkMetadataFuture\">SymlinkMetadataFuture</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>",synthetic:false,types:["tokio_fs::symlink_metadata::SymlinkMetadataFuture"]},];
implementors["tokio_io"] = [{text:"impl&lt;R, W&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_io/io/struct.Copy.html\" title=\"struct tokio_io::io::Copy\">Copy</a>&lt;R, W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;W: <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a>,&nbsp;</span>",synthetic:false,types:["tokio_io::io::copy::Copy"]},{text:"impl&lt;A&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_io/io/struct.Flush.html\" title=\"struct tokio_io::io::Flush\">Flush</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a>,&nbsp;</span>",synthetic:false,types:["tokio_io::io::flush::Flush"]},{text:"impl&lt;R, T&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_io/io/struct.Read.html\" title=\"struct tokio_io::io::Read\">Read</a>&lt;R, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsMut.html\" title=\"trait core::convert::AsMut\">AsMut</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;,&nbsp;</span>",synthetic:false,types:["tokio_io::io::read::Read"]},{text:"impl&lt;A, T&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_io/io/struct.ReadExact.html\" title=\"struct tokio_io::io::ReadExact\">ReadExact</a>&lt;A, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsMut.html\" title=\"trait core::convert::AsMut\">AsMut</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;,&nbsp;</span>",synthetic:false,types:["tokio_io::io::read_exact::ReadExact"]},{text:"impl&lt;A&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_io/io/struct.ReadToEnd.html\" title=\"struct tokio_io::io::ReadToEnd\">ReadToEnd</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a>,&nbsp;</span>",synthetic:false,types:["tokio_io::io::read_to_end::ReadToEnd"]},{text:"impl&lt;A&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_io/io/struct.ReadUntil.html\" title=\"struct tokio_io::io::ReadUntil\">ReadUntil</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>,&nbsp;</span>",synthetic:false,types:["tokio_io::io::read_until::ReadUntil"]},{text:"impl&lt;A&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_io/io/struct.Shutdown.html\" title=\"struct tokio_io::io::Shutdown\">Shutdown</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a>,&nbsp;</span>",synthetic:false,types:["tokio_io::io::shutdown::Shutdown"]},{text:"impl&lt;A, T&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_io/io/struct.WriteAll.html\" title=\"struct tokio_io::io::WriteAll\">WriteAll</a>&lt;A, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;,&nbsp;</span>",synthetic:false,types:["tokio_io::io::write_all::WriteAll"]},];
implementors["tokio_reactor"] = [{text:"impl <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_reactor/struct.Shutdown.html\" title=\"struct tokio_reactor::Shutdown\">Shutdown</a>",synthetic:false,types:["tokio_reactor::background::Shutdown"]},];
implementors["tokio_tcp"] = [{text:"impl <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_tcp/struct.ConnectFuture.html\" title=\"struct tokio_tcp::ConnectFuture\">ConnectFuture</a>",synthetic:false,types:["tokio_tcp::stream::ConnectFuture"]},];
implementors["tokio_threadpool"] = [{text:"impl <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_threadpool/struct.Shutdown.html\" title=\"struct tokio_threadpool::Shutdown\">Shutdown</a>",synthetic:false,types:["tokio_threadpool::shutdown::Shutdown"]},{text:"impl&lt;T, E&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_threadpool/struct.SpawnHandle.html\" title=\"struct tokio_threadpool::SpawnHandle\">SpawnHandle</a>&lt;T, E&gt;",synthetic:false,types:["tokio_threadpool::thread_pool::SpawnHandle"]},];
implementors["tokio_timer"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_timer/timeout/struct.Timeout.html\" title=\"struct tokio_timer::timeout::Timeout\">Timeout</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>,&nbsp;</span>",synthetic:false,types:["tokio_timer::timeout::Timeout"]},{text:"impl <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_timer/struct.Delay.html\" title=\"struct tokio_timer::Delay\">Delay</a>",synthetic:false,types:["tokio_timer::delay::Delay"]},];
implementors["tokio_udp"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_udp/struct.SendDgram.html\" title=\"struct tokio_udp::SendDgram\">SendDgram</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;,&nbsp;</span>",synthetic:false,types:["tokio_udp::send_dgram::SendDgram"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_udp/struct.RecvDgram.html\" title=\"struct tokio_udp::RecvDgram\">RecvDgram</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsMut.html\" title=\"trait core::convert::AsMut\">AsMut</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;,&nbsp;</span>",synthetic:false,types:["tokio_udp::recv_dgram::RecvDgram"]},];
implementors["tokio_uds"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_uds/struct.RecvDgram.html\" title=\"struct tokio_uds::RecvDgram\">RecvDgram</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsMut.html\" title=\"trait core::convert::AsMut\">AsMut</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;,&nbsp;</span>",synthetic:false,types:["tokio_uds::recv_dgram::RecvDgram"]},{text:"impl&lt;T, P&gt; <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_uds/struct.SendDgram.html\" title=\"struct tokio_uds::SendDgram\">SendDgram</a>&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;,&nbsp;</span>",synthetic:false,types:["tokio_uds::send_dgram::SendDgram"]},{text:"impl <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio_uds/struct.ConnectFuture.html\" title=\"struct tokio_uds::ConnectFuture\">ConnectFuture</a>",synthetic:false,types:["tokio_uds::stream::ConnectFuture"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
