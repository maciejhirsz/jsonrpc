(function() {var implementors = {};
implementors["jsonrpc_core"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='https://docs.serde.rs/serde/de/value/struct.Error.html' title='serde::de::value::Error'>Error</a>","impl&lt;T, E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='https://docs.rs/futures/0.1/futures/stream/channel/struct.SendError.html' title='futures::stream::channel::SendError'>SendError</a>&lt;T, E&gt; <span class='where'>where E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/any/trait.Any.html' title='core::any::Any'>Any</a>, T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/any/trait.Any.html' title='core::any::Any'>Any</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='https://docs.rs/futures/0.1/futures/sync/oneshot/struct.Canceled.html' title='futures::sync::oneshot::Canceled'>Canceled</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='https://docs.rs/futures/0.1/futures/sync/mpsc/struct.SendError.html' title='futures::sync::mpsc::SendError'>SendError</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/any/trait.Any.html' title='core::any::Any'>Any</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='https://docs.rs/futures/0.1/futures/unsync/mpsc/struct.SendError.html' title='futures::unsync::mpsc::SendError'>SendError</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/any/trait.Any.html' title='core::any::Any'>Any</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='https://docs.rs/mio/0.6.1/mio/channel/enum.SendError.html' title='mio::channel::SendError'>SendError</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/any/trait.Any.html' title='core::any::Any'>Any</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='https://docs.rs/mio/0.6.1/mio/channel/enum.TrySendError.html' title='mio::channel::TrySendError'>TrySendError</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/any/trait.Any.html' title='core::any::Any'>Any</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='https://docs.rs/mio/0.6.1/mio/timer/struct.TimerError.html' title='mio::timer::TimerError'>TimerError</a>","impl&lt;M&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='https://docs.rs/mio/0.6.1/mio/deprecated/notify/enum.NotifyError.html' title='mio::deprecated::notify::NotifyError'>NotifyError</a>&lt;M&gt; <span class='where'>where M: <a class='trait' href='https://doc.rust-lang.org/nightly/core/any/trait.Any.html' title='core::any::Any'>Any</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for Error","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='https://doc.rust-lang.org/log/log/struct.SetLoggerError.html' title='log::SetLoggerError'>SetLoggerError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='https://doc.rust-lang.org/log/log/struct.ShutdownLoggerError.html' title='log::ShutdownLoggerError'>ShutdownLoggerError</a>",];
implementors["jsonrpc_http_server"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='https://docs.serde.rs/serde/de/value/struct.Error.html' title='serde::de::value::Error'>Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for Error","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for SpawnError&lt;S&gt; <span class='where'>where S: <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for WakeupError","impl&lt;H&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='https://hyperium.github.io/hyper/hyper/client/struct.ClientError.html' title='hyper::client::ClientError'>ClientError</a>&lt;H&gt; <span class='where'>where H: <a class='trait' href='https://doc.rust-lang.org/nightly/core/any/trait.Any.html' title='core::any::Any'>Any</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='https://hyperium.github.io/hyper/hyper/error/enum.Error.html' title='hyper::error::Error'>Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='https://hyperium.github.io/hyper/hyper/http/struct.ControlError.html' title='hyper::http::ControlError'>ControlError</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='https://docs.rs/mio/0.6.1/mio/channel/enum.SendError.html' title='mio::channel::SendError'>SendError</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/any/trait.Any.html' title='core::any::Any'>Any</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='https://docs.rs/mio/0.6.1/mio/channel/enum.TrySendError.html' title='mio::channel::TrySendError'>TrySendError</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/any/trait.Any.html' title='core::any::Any'>Any</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='https://docs.rs/mio/0.6.1/mio/timer/struct.TimerError.html' title='mio::timer::TimerError'>TimerError</a>","impl&lt;M&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='https://docs.rs/mio/0.6.1/mio/deprecated/notify/enum.NotifyError.html' title='mio::deprecated::notify::NotifyError'>NotifyError</a>&lt;M&gt; <span class='where'>where M: <a class='trait' href='https://doc.rust-lang.org/nightly/core/any/trait.Any.html' title='core::any::Any'>Any</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for Error","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for Errno","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for Error","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for Void","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for ParseError","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='https://doc.rust-lang.org/rustc-serialize/rustc_serialize/base64/enum.FromBase64Error.html' title='rustc_serialize::base64::FromBase64Error'>FromBase64Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='https://doc.rust-lang.org/rustc-serialize/rustc_serialize/hex/enum.FromHexError.html' title='rustc_serialize::hex::FromHexError'>FromHexError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='https://doc.rust-lang.org/rustc-serialize/rustc_serialize/json/enum.DecoderError.html' title='rustc_serialize::json::DecoderError'>DecoderError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='https://doc.rust-lang.org/rustc-serialize/rustc_serialize/json/enum.ParserError.html' title='rustc_serialize::json::ParserError'>ParserError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='https://doc.rust-lang.org/rustc-serialize/rustc_serialize/json/enum.EncoderError.html' title='rustc_serialize::json::EncoderError'>EncoderError</a>","impl&lt;T, E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='https://docs.rs/futures/0.1/futures/stream/channel/struct.SendError.html' title='futures::stream::channel::SendError'>SendError</a>&lt;T, E&gt; <span class='where'>where E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/any/trait.Any.html' title='core::any::Any'>Any</a>, T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/any/trait.Any.html' title='core::any::Any'>Any</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='https://docs.rs/futures/0.1/futures/sync/oneshot/struct.Canceled.html' title='futures::sync::oneshot::Canceled'>Canceled</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='https://docs.rs/futures/0.1/futures/sync/mpsc/struct.SendError.html' title='futures::sync::mpsc::SendError'>SendError</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/any/trait.Any.html' title='core::any::Any'>Any</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='https://docs.rs/futures/0.1/futures/unsync/mpsc/struct.SendError.html' title='futures::unsync::mpsc::SendError'>SendError</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/any/trait.Any.html' title='core::any::Any'>Any</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='https://docs.rs/mio/0.6.1/mio/timer/struct.TimerError.html' title='mio::timer::TimerError'>TimerError</a>","impl&lt;M&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='https://docs.rs/mio/0.6.1/mio/deprecated/notify/enum.NotifyError.html' title='mio::deprecated::notify::NotifyError'>NotifyError</a>&lt;M&gt; <span class='where'>where M: <a class='trait' href='https://doc.rust-lang.org/nightly/core/any/trait.Any.html' title='core::any::Any'>Any</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for Error","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='https://doc.rust-lang.org/time/time/duration/struct.OutOfRangeError.html' title='time::duration::OutOfRangeError'>OutOfRangeError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='https://doc.rust-lang.org/time/time/enum.ParseError.html' title='time::ParseError'>ParseError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='https://doc.rust-lang.org/log/log/struct.SetLoggerError.html' title='log::SetLoggerError'>SetLoggerError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='https://doc.rust-lang.org/log/log/struct.ShutdownLoggerError.html' title='log::ShutdownLoggerError'>ShutdownLoggerError</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
