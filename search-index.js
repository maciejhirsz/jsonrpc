var searchIndex = {};
searchIndex["jsonrpc"] = {"doc":"Ethcore JSON-RPC 2.0 Implementation","items":[],"paths":[]};
searchIndex["jsonrpc_core"] = {"doc":"### Transport agnostic jsonrpc library.","items":[[3,"IoHandler","jsonrpc_core","Simplified `IoHandler` with no `Metadata` associated with each request.",null,null],[3,"MetaIoHandler","","Request handler",null,null],[3,"NoopMiddleware","","No-op middleware implementation",null,null],[4,"RemoteProcedure","","Possible Remote Procedures with Metadata",null,null],[13,"Method","","A method call",0,null],[13,"Notification","","A notification",0,null],[4,"Compatibility","","`IoHandler` json-rpc protocol compatibility",null,null],[13,"V1","","Compatible only with JSON-RPC 1.x",1,null],[13,"V2","","Compatible only with JSON-RPC 2.0",1,null],[13,"Both","","Compatible with both",1,null],[11,"clone","","",1,null],[11,"default","","",1,{"inputs":[],"output":{"name":"self"}}],[11,"default","","",2,{"inputs":[],"output":{"name":"self"}}],[11,"with_compatibility","","Creates new `MetaIoHandler` compatible with specified protocol version.",2,{"inputs":[{"name":"compatibility"}],"output":{"name":"self"}}],[11,"new","","Creates new `MetaIoHandler`",2,{"inputs":[{"name":"compatibility"},{"name":"s"}],"output":{"name":"self"}}],[11,"with_middleware","","Creates new `MetaIoHandler` with specified middleware.",2,{"inputs":[{"name":"s"}],"output":{"name":"self"}}],[11,"add_method","","Adds new supported synchronous method",2,null],[11,"add_async_method","","Adds new supported asynchronous method",2,null],[11,"add_notification","","Adds new supported notification",2,null],[11,"add_method_with_meta","","Adds new supported asynchronous method with metadata support.",2,null],[11,"add_notification_with_meta","","Adds new supported notification with metadata support.",2,null],[11,"extend_with","","Extend this `MetaIoHandler` with methods defined elsewhere.",2,null],[11,"handle_request_sync","","Handle given request synchronously - will block until response is available.\nIf you have any asynchronous methods in your RPC it is much wiser to use\n`handle_request` instead and deal with asynchronous requests in a non-blocking fashion.",2,null],[11,"handle_request","","Handle given request asynchronously.",2,null],[11,"default","","",3,{"inputs":[],"output":{"name":"iohandler"}}],[11,"new","","Creates new `IoHandler` without any metadata.",3,{"inputs":[],"output":{"name":"self"}}],[11,"with_compatibility","","Creates new `IoHandler` without any metadata compatible with specified protocol version.",3,{"inputs":[{"name":"compatibility"}],"output":{"name":"self"}}],[11,"handle_request","","Handle given request asynchronously.",3,null],[11,"handle_request_sync","","Handle given request synchronously - will block until response is available.\nIf you have any asynchronous methods in your RPC it is much wiser to use\n`handle_request` instead and deal with asynchronous requests in a non-blocking fashion.",3,null],[11,"deref","","",3,null],[11,"deref_mut","","",3,null],[11,"from","","",2,{"inputs":[{"name":"iohandler"}],"output":{"name":"self"}}],[11,"default","","",4,{"inputs":[],"output":{"name":"noop"}}],[11,"on_request","","",4,null],[0,"types","","JSON-RPC types",null,null],[4,"Value","jsonrpc_core::types","Represents any valid JSON value.",null,null],[13,"Null","","Represents a JSON null value.",5,null],[13,"Bool","","Represents a JSON boolean.",5,null],[13,"Number","","Represents a JSON number, whether integer or floating point.",5,null],[13,"String","","Represents a JSON string.",5,null],[13,"Array","","Represents a JSON array.",5,null],[13,"Object","","Represents a JSON object.",5,null],[5,"to_value","","Convert a `T` into `serde_json::Value` which is an enum that can represent\nany valid JSON data.",null,{"inputs":[{"name":"t"}],"output":{"name":"result"}}],[0,"error","","jsonrpc errors",null,null],[3,"Error","jsonrpc_core::types::error","Error object as defined in Spec",null,null],[12,"code","","Code",6,null],[12,"message","","Message",6,null],[12,"data","","Optional data",6,null],[4,"ErrorCode","","JSONRPC error code",null,null],[13,"ParseError","","Invalid JSON was received by the server.\nAn error occurred on the server while parsing the JSON text.",7,null],[13,"InvalidRequest","","The JSON sent is not a valid Request object.",7,null],[13,"MethodNotFound","","The method does not exist / is not available.",7,null],[13,"InvalidParams","","Invalid method parameter(s).",7,null],[13,"InternalError","","Internal JSON-RPC error.",7,null],[13,"ServerError","","Reserved for implementation-defined server-errors.",7,null],[11,"fmt","","",7,null],[11,"eq","","",7,null],[11,"ne","","",7,null],[11,"clone","","",7,null],[11,"code","","Returns integer code value",7,null],[11,"description","","Returns human-readable description",7,null],[11,"deserialize","","",7,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[11,"serialize","","",7,null],[11,"fmt","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"clone","","",6,null],[11,"new","","Wraps given `ErrorCode`",6,{"inputs":[{"name":"errorcode"}],"output":{"name":"self"}}],[11,"parse_error","","Creates new `ParseError`",6,{"inputs":[],"output":{"name":"self"}}],[11,"invalid_request","","Creates new `InvalidRequest`",6,{"inputs":[],"output":{"name":"self"}}],[11,"method_not_found","","Creates new `MethodNotFound`",6,{"inputs":[],"output":{"name":"self"}}],[11,"invalid_params","","Creates new `InvalidParams`",6,{"inputs":[{"name":"m"}],"output":{"name":"self"}}],[11,"internal_error","","Creates new `InternalError`",6,{"inputs":[],"output":{"name":"self"}}],[11,"invalid_version","","Creates new `InvalidRequest` with invalid version description",6,{"inputs":[],"output":{"name":"self"}}],[0,"id","jsonrpc_core::types","jsonrpc id field",null,null],[4,"Id","jsonrpc_core::types::id","Request Id",null,null],[13,"Null","","No id (notification)",8,null],[13,"Str","","String id",8,null],[13,"Num","","Numeric id",8,null],[11,"fmt","","",8,null],[11,"eq","","",8,null],[11,"ne","","",8,null],[11,"clone","","",8,null],[11,"serialize","","",8,null],[11,"deserialize","","",8,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[0,"params","jsonrpc_core::types","jsonrpc params field",null,null],[4,"Params","jsonrpc_core::types::params","Request parameters",null,null],[13,"Array","","Array of values",9,null],[13,"Map","","Map of values",9,null],[13,"None","","No parameters",9,null],[11,"fmt","","",9,null],[11,"eq","","",9,null],[11,"ne","","",9,null],[11,"parse","","Parse incoming `Params` into expected types.",9,null],[11,"serialize","","",9,null],[11,"deserialize","","",9,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[0,"request","jsonrpc_core::types","jsonrpc request",null,null],[3,"MethodCall","jsonrpc_core::types::request","Represents jsonrpc request which is a method call.",null,null],[12,"jsonrpc","","A String specifying the version of the JSON-RPC protocol.",10,null],[12,"method","","A String containing the name of the method to be invoked.",10,null],[12,"params","","A Structured value that holds the parameter values to be used\nduring the invocation of the method. This member MAY be omitted.",10,null],[12,"id","","An identifier established by the Client that MUST contain a String,\nNumber, or NULL value if included. If it is not included it is assumed\nto be a notification.",10,null],[3,"Notification","","Represents jsonrpc request which is a notification.",null,null],[12,"jsonrpc","","A String specifying the version of the JSON-RPC protocol.",11,null],[12,"method","","A String containing the name of the method to be invoked.",11,null],[12,"params","","A Structured value that holds the parameter values to be used\nduring the invocation of the method. This member MAY be omitted.",11,null],[4,"Call","","Represents single jsonrpc call.",null,null],[13,"MethodCall","","Call method",12,null],[13,"Notification","","Fire notification",12,null],[13,"Invalid","","Invalid call",12,null],[4,"Request","","Represents jsonrpc request.",null,null],[13,"Single","","Single request (call)",13,null],[13,"Batch","","Batch of requests (calls)",13,null],[11,"fmt","","",10,null],[11,"eq","","",10,null],[11,"ne","","",10,null],[11,"fmt","","",11,null],[11,"eq","","",11,null],[11,"ne","","",11,null],[11,"fmt","","",12,null],[11,"eq","","",12,null],[11,"ne","","",12,null],[11,"serialize","","",12,null],[11,"deserialize","","",12,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[11,"fmt","","",13,null],[11,"eq","","",13,null],[11,"ne","","",13,null],[11,"serialize","","",13,null],[11,"deserialize","","",13,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[0,"response","jsonrpc_core::types","jsonrpc response",null,null],[3,"Success","jsonrpc_core::types::response","Successful response",null,null],[12,"jsonrpc","","Protocol version",14,null],[12,"result","","Result",14,null],[12,"id","","Correlation id",14,null],[3,"Failure","","Unsuccessful response",null,null],[12,"jsonrpc","","Protocol Version",15,null],[12,"error","","Error",15,null],[12,"id","","Correlation id",15,null],[4,"Output","","Represents output - failure or success",null,null],[13,"Success","","Success",16,null],[13,"Failure","","Failure",16,null],[4,"Response","","Synchronous response",null,null],[13,"Single","","Single response",17,null],[13,"Batch","","Response to batch request (batch of responses)",17,null],[11,"fmt","","",14,null],[11,"eq","","",14,null],[11,"ne","","",14,null],[11,"fmt","","",15,null],[11,"eq","","",15,null],[11,"ne","","",15,null],[11,"fmt","","",16,null],[11,"eq","","",16,null],[11,"ne","","",16,null],[11,"from","","Creates new output given `Result`, `Id` and `Version`.",16,{"inputs":[{"name":"result"},{"name":"id"},{"name":"option"}],"output":{"name":"self"}}],[11,"invalid_request","","Creates new failure output indicating malformed request.",16,{"inputs":[{"name":"id"},{"name":"option"}],"output":{"name":"self"}}],[11,"deserialize","","",16,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[11,"serialize","","",16,null],[11,"fmt","","",17,null],[11,"eq","","",17,null],[11,"ne","","",17,null],[11,"deserialize","","",17,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[11,"serialize","","",17,null],[11,"from","","Creates new `Response` with given error and `Version`",17,{"inputs":[{"name":"error"},{"name":"option"}],"output":{"name":"self"}}],[11,"from","","",17,{"inputs":[{"name":"failure"}],"output":{"name":"self"}}],[11,"from","","",17,{"inputs":[{"name":"success"}],"output":{"name":"self"}}],[0,"version","jsonrpc_core::types","jsonrpc version field",null,null],[4,"Version","jsonrpc_core::types::version","Protocol Version",null,null],[13,"V2","","JSONRPC 2.0",18,null],[11,"fmt","","",18,null],[11,"eq","","",18,null],[11,"clone","","",18,null],[11,"serialize","","",18,null],[11,"deserialize","","",18,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[0,"reactor","jsonrpc_core","Implementation of transport-agnostic Core Event Loop.",null,null],[3,"Remote","jsonrpc_core::reactor","Handle to an event loop, used to construct I/O objects, send messages, and\notherwise interact indirectly with the event loop itself.",null,null],[3,"RpcEventLoop","","EventLoop for all request to `jsonrpc-core`.\nNOTE: This is more-less temporary solution until we find a good way of integrating with event loops of particular\ntransports.",null,null],[3,"RpcEventLoopHandle","","A handle to running event loop. Dropping the handle will cause event loop to finish.",null,null],[3,"RpcHandler","","RPC Core Event Loop Handler.",null,null],[11,"spawn","","Spawns a new thread with `EventLoop` with given handler.",19,{"inputs":[],"output":{"name":"self"}}],[11,"handler","","Returns an RPC handler to process requests.",19,null],[11,"remote","","Returns event loop remote.",19,null],[11,"from","","",20,{"inputs":[{"name":"rpceventloop"}],"output":{"name":"self"}}],[11,"drop","","",20,null],[11,"wait","","Blocks current thread and waits until the event loop is finished.",20,null],[11,"close","","Finishes this event loop.",20,null],[11,"clone","","",21,null],[11,"new","","Creates new `RpcHandler` for existing `EventLoop`",21,{"inputs":[{"name":"arc"},{"name":"remote"}],"output":{"name":"self"}}],[11,"handle_request","","Handles the request and returns to a closure response when it&#39;s ready.",21,null],[11,"handle_request_sync","","Handles the request synchronously (not recommended)",21,null],[6,"FutureResponse","jsonrpc_core","Type representing middleware or RPC response before serialization.",null,null],[8,"Metadata","","Metadata marker trait",null,null],[8,"RpcMethodSync","","Synchronous Method",null,null],[10,"call","","Call method",22,null],[8,"RpcMethodSimple","","Asynchronous Method",null,null],[10,"call","","Call method",23,null],[8,"RpcMethod","","Asynchronous Method with Metadata",null,null],[10,"call","","Call method",24,null],[8,"RpcNotificationSimple","","Notification",null,null],[10,"execute","","Execute notification",25,null],[8,"RpcNotification","","Notification with Metadata",null,null],[10,"execute","","Execute notification",26,null],[8,"Middleware","","RPC middleware",null,null],[10,"on_request","","Method invoked on each request.\nAllows you to either respond directly (without executing RPC call)\nor do any additional work before and/or after processing the request.",27,null],[11,"get","jsonrpc_core::types","Index into a JSON array or map. A string index can be used to access a\nvalue in a map, and a usize index can be used to access an element of an\narray.",5,null],[11,"get_mut","","Mutably index into a JSON array or map. A string index can be used to\naccess a value in a map, and a usize index can be used to access an\nelement of an array.",5,null],[11,"is_object","","Returns true if the `Value` is an Object. Returns false otherwise.",5,null],[11,"as_object","","If the `Value` is an Object, returns the associated Map.\nReturns None otherwise.",5,null],[11,"as_object_mut","","If the `Value` is an Object, returns the associated mutable Map.\nReturns None otherwise.",5,null],[11,"is_array","","Returns true if the `Value` is an Array. Returns false otherwise.",5,null],[11,"as_array","","If the `Value` is an Array, returns the associated vector.\nReturns None otherwise.",5,null],[11,"as_array_mut","","If the `Value` is an Array, returns the associated mutable vector.\nReturns None otherwise.",5,null],[11,"is_string","","Returns true if the `Value` is a String. Returns false otherwise.",5,null],[11,"as_str","","If the `Value` is a String, returns the associated str.\nReturns None otherwise.",5,null],[11,"is_number","","Returns true if the `Value` is a Number. Returns false otherwise.",5,null],[11,"is_i64","","Returns true if the `Value` is a number that can be represented by i64.",5,null],[11,"is_u64","","Returns true if the `Value` is a number that can be represented by u64.",5,null],[11,"is_f64","","Returns true if the `Value` is a number that can be represented by f64.",5,null],[11,"as_i64","","If the `Value` is a number, represent it as i64 if possible.\nReturns None otherwise.",5,null],[11,"as_u64","","If the `Value` is a number, represent it as u64 if possible.\nReturns None otherwise.",5,null],[11,"as_f64","","If the `Value` is a number, represent it as f64 if possible.\nReturns None otherwise.",5,null],[11,"is_boolean","","Returns true if the `Value` is a Boolean. Returns false otherwise.",5,null],[11,"as_bool","","If the `Value` is a Boolean, returns the associated bool.\nReturns None otherwise.",5,null],[11,"is_null","","Returns true if the `Value` is a Null. Returns false otherwise.",5,null],[11,"as_null","","If the `Value` is a Null, returns ().\nReturns None otherwise.",5,null],[11,"pointer","","Looks up a value by a JSON Pointer.",5,null],[11,"pointer_mut","","Looks up a value by a JSON Pointer and returns a mutable reference to\nthat value.",5,null],[11,"clone","jsonrpc_core::reactor","",28,null],[11,"fmt","jsonrpc_core::types","Serializes a json value into a string",5,null],[11,"eq","","",5,null],[11,"eq","","",5,null],[11,"eq","","",5,null],[11,"eq","","",5,null],[11,"ne","","",5,null],[11,"eq","","",5,null],[11,"eq","","",5,null],[11,"eq","","",5,null],[11,"eq","","",5,null],[11,"eq","","",5,null],[11,"eq","","",5,null],[11,"eq","","",5,null],[11,"eq","","",5,null],[11,"eq","","",5,null],[11,"eq","","",5,null],[11,"eq","","",5,null],[11,"eq","","",5,null],[11,"clone","","",5,null],[11,"default","","",5,{"inputs":[],"output":{"name":"value"}}],[11,"fmt","","",5,null],[11,"deserialize","","",5,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[11,"from_str","","",5,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"index","","Index into a `serde_json::Value` using the syntax `value[0]` or\n`value[&quot;k&quot;]`.",5,null],[11,"index_mut","","Write into a `serde_json::Value` using the syntax `value[0] = ...` or\n`value[&quot;k&quot;] = ...`.",5,null],[11,"deserialize","","",5,null],[11,"deserialize_option","","",5,null],[11,"deserialize_enum","","",5,null],[11,"deserialize_newtype_struct","","",5,null],[11,"deserialize_bool","","",5,null],[11,"deserialize_u8","","",5,null],[11,"deserialize_u16","","",5,null],[11,"deserialize_u32","","",5,null],[11,"deserialize_u64","","",5,null],[11,"deserialize_i8","","",5,null],[11,"deserialize_i16","","",5,null],[11,"deserialize_i32","","",5,null],[11,"deserialize_i64","","",5,null],[11,"deserialize_f32","","",5,null],[11,"deserialize_f64","","",5,null],[11,"deserialize_char","","",5,null],[11,"deserialize_str","","",5,null],[11,"deserialize_string","","",5,null],[11,"deserialize_unit","","",5,null],[11,"deserialize_seq","","",5,null],[11,"deserialize_seq_fixed_size","","",5,null],[11,"deserialize_bytes","","",5,null],[11,"deserialize_byte_buf","","",5,null],[11,"deserialize_map","","",5,null],[11,"deserialize_unit_struct","","",5,null],[11,"deserialize_tuple_struct","","",5,null],[11,"deserialize_struct","","",5,null],[11,"deserialize_struct_field","","",5,null],[11,"deserialize_tuple","","",5,null],[11,"deserialize_ignored_any","","",5,null],[11,"serialize","","",5,null],[11,"from","","Convert 32-bit floating point number to `Value`",5,{"inputs":[{"name":"f32"}],"output":{"name":"value"}}],[11,"from","","Convert 64-bit floating point number to `Value`",5,{"inputs":[{"name":"f64"}],"output":{"name":"value"}}],[11,"from","","Convert boolean to `Value`",5,{"inputs":[{"name":"bool"}],"output":{"name":"value"}}],[11,"from","","Convert `String` to `Value`",5,{"inputs":[{"name":"string"}],"output":{"name":"value"}}],[11,"from","","Convert string slice to `Value`",5,{"inputs":[{"name":"str"}],"output":{"name":"value"}}],[11,"from","","Convert copy-on-write string to `Value`",5,{"inputs":[{"name":"cow"}],"output":{"name":"value"}}],[11,"from","","Convert map (with string keys) to `Value`",5,{"inputs":[{"name":"map"}],"output":{"name":"value"}}],[11,"from","","Convert a `Vec` to `Value`",5,{"inputs":[{"name":"vec"}],"output":{"name":"value"}}],[11,"from","","Convert a slice to `Value`",5,null],[11,"from","","",5,{"inputs":[{"name":"i8"}],"output":{"name":"value"}}],[11,"from","","",5,{"inputs":[{"name":"i16"}],"output":{"name":"value"}}],[11,"from","","",5,{"inputs":[{"name":"i32"}],"output":{"name":"value"}}],[11,"from","","",5,{"inputs":[{"name":"i64"}],"output":{"name":"value"}}],[11,"from","","",5,{"inputs":[{"name":"isize"}],"output":{"name":"value"}}],[11,"from","","",5,{"inputs":[{"name":"u8"}],"output":{"name":"value"}}],[11,"from","","",5,{"inputs":[{"name":"u16"}],"output":{"name":"value"}}],[11,"from","","",5,{"inputs":[{"name":"u32"}],"output":{"name":"value"}}],[11,"from","","",5,{"inputs":[{"name":"u64"}],"output":{"name":"value"}}],[11,"from","","",5,{"inputs":[{"name":"usize"}],"output":{"name":"value"}}],[11,"from_iter","","Convert an iteratable type to a `Value`",5,{"inputs":[{"name":"i"}],"output":{"name":"value"}}],[11,"spawn","jsonrpc_core::reactor","Spawns a new future into the event loop this remote is associated with.",28,null],[11,"id","","Return the ID of the represented Core",28,null],[11,"handle","","Attempts to &quot;promote&quot; this remote to a handle, if possible.",28,null]],"paths":[[4,"RemoteProcedure"],[4,"Compatibility"],[3,"MetaIoHandler"],[3,"IoHandler"],[3,"NoopMiddleware"],[4,"Value"],[3,"Error"],[4,"ErrorCode"],[4,"Id"],[4,"Params"],[3,"MethodCall"],[3,"Notification"],[4,"Call"],[4,"Request"],[3,"Success"],[3,"Failure"],[4,"Output"],[4,"Response"],[4,"Version"],[3,"RpcEventLoop"],[3,"RpcEventLoopHandle"],[3,"RpcHandler"],[8,"RpcMethodSync"],[8,"RpcMethodSimple"],[8,"RpcMethod"],[8,"RpcNotificationSimple"],[8,"RpcNotification"],[8,"Middleware"],[3,"Remote"]]};
searchIndex["jsonrpc_http_server"] = {"doc":"jsonrpc http server.","items":[[4,"AccessControlAllowOrigin","jsonrpc_http_server","The `Access-Control-Allow-Origin` response header,\npart of [CORS](http://www.w3.org/TR/cors/#access-control-allow-origin-response-header)",null,null],[13,"Any","","Allow all origins",0,null],[13,"Null","","A hidden origin",0,null],[13,"Value","","Allow one particular origin",0,null],[3,"PanicHandler","","PanicHandling function",null,null],[12,"handler","","Actual handler",1,null],[3,"ServerHandler","","jsonrpc http request handler.",null,null],[3,"Rpc","","RPC Handler bundled with metadata extractor.",null,null],[12,"handler","","RPC Handler",2,null],[12,"extractor","","Metadata extractor",2,null],[3,"ServerBuilder","","Convenient JSON-RPC HTTP Server builder.",null,null],[3,"Server","","jsonrpc http server instance",null,null],[4,"RpcServerError","","RPC Server startup error.",null,null],[13,"IoError","","IO Error",3,null],[13,"Other","","Other Error (hyper)",3,null],[4,"DomainsValidation","","Specifies if domains should be validated.",null,null],[13,"AllowOnly","","Allow only domains on the list.",4,null],[13,"Disabled","","Disable domains validation completely.",4,null],[5,"is_host_header_valid","","Returns `true` when `Host` header in provided `Request` is whitelisted in `allowed_hosts`.",null,null],[0,"request_response","","Basic Request/Response structures used internally.",null,null],[4,"StatusCode","jsonrpc_http_server::request_response","An HTTP status code (`status-code` in RFC 7230 et al.).",null,null],[13,"Continue","","100 Continue\n[[RFC7231, Section 6.2.1](https://tools.ietf.org/html/rfc7231#section-6.2.1)]",5,null],[13,"SwitchingProtocols","","101 Switching Protocols\n[[RFC7231, Section 6.2.2](https://tools.ietf.org/html/rfc7231#section-6.2.2)]",5,null],[13,"Processing","","102 Processing\n[[RFC2518](https://tools.ietf.org/html/rfc2518)]",5,null],[13,"Ok","","200 OK\n[[RFC7231, Section 6.3.1](https://tools.ietf.org/html/rfc7231#section-6.3.1)]",5,null],[13,"Created","","201 Created\n[[RFC7231, Section 6.3.2](https://tools.ietf.org/html/rfc7231#section-6.3.2)]",5,null],[13,"Accepted","","202 Accepted\n[[RFC7231, Section 6.3.3](https://tools.ietf.org/html/rfc7231#section-6.3.3)]",5,null],[13,"NonAuthoritativeInformation","","203 Non-Authoritative Information\n[[RFC7231, Section 6.3.4](https://tools.ietf.org/html/rfc7231#section-6.3.4)]",5,null],[13,"NoContent","","204 No Content\n[[RFC7231, Section 6.3.5](https://tools.ietf.org/html/rfc7231#section-6.3.5)]",5,null],[13,"ResetContent","","205 Reset Content\n[[RFC7231, Section 6.3.6](https://tools.ietf.org/html/rfc7231#section-6.3.6)]",5,null],[13,"PartialContent","","206 Partial Content\n[[RFC7233, Section 4.1](https://tools.ietf.org/html/rfc7233#section-4.1)]",5,null],[13,"MultiStatus","","207 Multi-Status\n[[RFC4918](https://tools.ietf.org/html/rfc4918)]",5,null],[13,"AlreadyReported","","208 Already Reported\n[[RFC5842](https://tools.ietf.org/html/rfc5842)]",5,null],[13,"ImUsed","","226 IM Used\n[[RFC3229](https://tools.ietf.org/html/rfc3229)]",5,null],[13,"MultipleChoices","","300 Multiple Choices\n[[RFC7231, Section 6.4.1](https://tools.ietf.org/html/rfc7231#section-6.4.1)]",5,null],[13,"MovedPermanently","","301 Moved Permanently\n[[RFC7231, Section 6.4.2](https://tools.ietf.org/html/rfc7231#section-6.4.2)]",5,null],[13,"Found","","302 Found\n[[RFC7231, Section 6.4.3](https://tools.ietf.org/html/rfc7231#section-6.4.3)]",5,null],[13,"SeeOther","","303 See Other\n[[RFC7231, Section 6.4.4](https://tools.ietf.org/html/rfc7231#section-6.4.4)]",5,null],[13,"NotModified","","304 Not Modified\n[[RFC7232, Section 4.1](https://tools.ietf.org/html/rfc7232#section-4.1)]",5,null],[13,"UseProxy","","305 Use Proxy\n[[RFC7231, Section 6.4.5](https://tools.ietf.org/html/rfc7231#section-6.4.5)]",5,null],[13,"TemporaryRedirect","","307 Temporary Redirect\n[[RFC7231, Section 6.4.7](https://tools.ietf.org/html/rfc7231#section-6.4.7)]",5,null],[13,"PermanentRedirect","","308 Permanent Redirect\n[[RFC7238](https://tools.ietf.org/html/rfc7238)]",5,null],[13,"BadRequest","","400 Bad Request\n[[RFC7231, Section 6.5.1](https://tools.ietf.org/html/rfc7231#section-6.5.1)]",5,null],[13,"Unauthorized","","401 Unauthorized\n[[RFC7235, Section 3.1](https://tools.ietf.org/html/rfc7235#section-3.1)]",5,null],[13,"PaymentRequired","","402 Payment Required\n[[RFC7231, Section 6.5.2](https://tools.ietf.org/html/rfc7231#section-6.5.2)]",5,null],[13,"Forbidden","","403 Forbidden\n[[RFC7231, Section 6.5.3](https://tools.ietf.org/html/rfc7231#section-6.5.3)]",5,null],[13,"NotFound","","404 Not Found\n[[RFC7231, Section 6.5.4](https://tools.ietf.org/html/rfc7231#section-6.5.4)]",5,null],[13,"MethodNotAllowed","","405 Method Not Allowed\n[[RFC7231, Section 6.5.5](https://tools.ietf.org/html/rfc7231#section-6.5.5)]",5,null],[13,"NotAcceptable","","406 Not Acceptable\n[[RFC7231, Section 6.5.6](https://tools.ietf.org/html/rfc7231#section-6.5.6)]",5,null],[13,"ProxyAuthenticationRequired","","407 Proxy Authentication Required\n[[RFC7235, Section 3.2](https://tools.ietf.org/html/rfc7235#section-3.2)]",5,null],[13,"RequestTimeout","","408 Request Timeout\n[[RFC7231, Section 6.5.7](https://tools.ietf.org/html/rfc7231#section-6.5.7)]",5,null],[13,"Conflict","","409 Conflict\n[[RFC7231, Section 6.5.8](https://tools.ietf.org/html/rfc7231#section-6.5.8)]",5,null],[13,"Gone","","410 Gone\n[[RFC7231, Section 6.5.9](https://tools.ietf.org/html/rfc7231#section-6.5.9)]",5,null],[13,"LengthRequired","","411 Length Required\n[[RFC7231, Section 6.5.10](https://tools.ietf.org/html/rfc7231#section-6.5.10)]",5,null],[13,"PreconditionFailed","","412 Precondition Failed\n[[RFC7232, Section 4.2](https://tools.ietf.org/html/rfc7232#section-4.2)]",5,null],[13,"PayloadTooLarge","","413 Payload Too Large\n[[RFC7231, Section 6.5.11](https://tools.ietf.org/html/rfc7231#section-6.5.11)]",5,null],[13,"UriTooLong","","414 URI Too Long\n[[RFC7231, Section 6.5.12](https://tools.ietf.org/html/rfc7231#section-6.5.12)]",5,null],[13,"UnsupportedMediaType","","415 Unsupported Media Type\n[[RFC7231, Section 6.5.13](https://tools.ietf.org/html/rfc7231#section-6.5.13)]",5,null],[13,"RangeNotSatisfiable","","416 Range Not Satisfiable\n[[RFC7233, Section 4.4](https://tools.ietf.org/html/rfc7233#section-4.4)]",5,null],[13,"ExpectationFailed","","417 Expectation Failed\n[[RFC7231, Section 6.5.14](https://tools.ietf.org/html/rfc7231#section-6.5.14)]",5,null],[13,"ImATeapot","","418 I&#39;m a teapot\n[curiously, not registered by IANA, but [RFC2324](https://tools.ietf.org/html/rfc2324)]",5,null],[13,"MisdirectedRequest","","421 Misdirected Request\n[RFC7540, Section 9.1.2](http://tools.ietf.org/html/rfc7540#section-9.1.2)",5,null],[13,"UnprocessableEntity","","422 Unprocessable Entity\n[[RFC4918](https://tools.ietf.org/html/rfc4918)]",5,null],[13,"Locked","","423 Locked\n[[RFC4918](https://tools.ietf.org/html/rfc4918)]",5,null],[13,"FailedDependency","","424 Failed Dependency\n[[RFC4918](https://tools.ietf.org/html/rfc4918)]",5,null],[13,"UpgradeRequired","","426 Upgrade Required\n[[RFC7231, Section 6.5.15](https://tools.ietf.org/html/rfc7231#section-6.5.15)]",5,null],[13,"PreconditionRequired","","428 Precondition Required\n[[RFC6585](https://tools.ietf.org/html/rfc6585)]",5,null],[13,"TooManyRequests","","429 Too Many Requests\n[[RFC6585](https://tools.ietf.org/html/rfc6585)]",5,null],[13,"RequestHeaderFieldsTooLarge","","431 Request Header Fields Too Large\n[[RFC6585](https://tools.ietf.org/html/rfc6585)]",5,null],[13,"UnavailableForLegalReasons","","451 Unavailable For Legal Reasons\n[[RFC7725](http://tools.ietf.org/html/rfc7725)]",5,null],[13,"InternalServerError","","500 Internal Server Error\n[[RFC7231, Section 6.6.1](https://tools.ietf.org/html/rfc7231#section-6.6.1)]",5,null],[13,"NotImplemented","","501 Not Implemented\n[[RFC7231, Section 6.6.2](https://tools.ietf.org/html/rfc7231#section-6.6.2)]",5,null],[13,"BadGateway","","502 Bad Gateway\n[[RFC7231, Section 6.6.3](https://tools.ietf.org/html/rfc7231#section-6.6.3)]",5,null],[13,"ServiceUnavailable","","503 Service Unavailable\n[[RFC7231, Section 6.6.4](https://tools.ietf.org/html/rfc7231#section-6.6.4)]",5,null],[13,"GatewayTimeout","","504 Gateway Timeout\n[[RFC7231, Section 6.6.5](https://tools.ietf.org/html/rfc7231#section-6.6.5)]",5,null],[13,"HttpVersionNotSupported","","505 HTTP Version Not Supported\n[[RFC7231, Section 6.6.6](https://tools.ietf.org/html/rfc7231#section-6.6.6)]",5,null],[13,"VariantAlsoNegotiates","","506 Variant Also Negotiates\n[[RFC2295](https://tools.ietf.org/html/rfc2295)]",5,null],[13,"InsufficientStorage","","507 Insufficient Storage\n[[RFC4918](https://tools.ietf.org/html/rfc4918)]",5,null],[13,"LoopDetected","","508 Loop Detected\n[[RFC5842](https://tools.ietf.org/html/rfc5842)]",5,null],[13,"NotExtended","","510 Not Extended\n[[RFC2774](https://tools.ietf.org/html/rfc2774)]",5,null],[13,"NetworkAuthenticationRequired","","511 Network Authentication Required\n[[RFC6585](https://tools.ietf.org/html/rfc6585)]",5,null],[13,"Unregistered","","A status code not in the IANA HTTP status code registry or very well known",5,null],[3,"ContentType","","`Content-Type` header, defined in\n[RFC7231](http://tools.ietf.org/html/rfc7231#section-3.1.1.5)",null,null],[12,"0","","",6,null],[3,"Request","","Simple client Request structure",null,null],[12,"content","","Request content",7,null],[12,"origin","","Request origin (if any)",7,null],[3,"Response","","Simple server response structure",null,null],[12,"code","","Response code",8,null],[12,"content_type","","Response content type",8,null],[12,"content","","Response body",8,null],[12,"write_pos","","Number of bytes already written",8,null],[11,"empty","","Create empty `Request`",7,{"inputs":[],"output":{"name":"self"}}],[11,"empty","","Create response with empty body and 200 OK status code.",8,{"inputs":[],"output":{"name":"self"}}],[11,"ok","","Create response with given body and 200 OK status code.",8,{"inputs":[{"name":"string"}],"output":{"name":"self"}}],[11,"host_not_allowed","","Create response for not allowed hosts.",8,{"inputs":[],"output":{"name":"self"}}],[11,"unsupported_content_type","","Create response for unsupported content type.",8,{"inputs":[],"output":{"name":"self"}}],[11,"method_not_allowed","","Create response for disallowed method used.",8,{"inputs":[],"output":{"name":"self"}}],[0,"cors","jsonrpc_http_server","CORS handling utility functions",null,null],[5,"read_origin","jsonrpc_http_server::cors","Reads Origin header from the request.",null,{"inputs":[{"name":"request"}],"output":{"name":"option"}}],[5,"get_cors_header","","Returns correct CORS header (if any) given list of allowed origins and current origin.",null,{"inputs":[{"name":"option"},{"name":"option"}],"output":{"name":"option"}}],[11,"drop","jsonrpc_http_server","",9,null],[11,"new","","Create new request handler.",9,{"inputs":[{"name":"rpc"},{"name":"option"},{"name":"option"},{"name":"panichandler"},{"name":"control"}],"output":{"name":"self"}}],[11,"on_request","","",9,null],[11,"on_request_readable","","This event occurs each time the `Request` is ready to be read from.",9,null],[11,"on_response","","This event occurs after the first time this handled signals `Next::write()`.",9,null],[11,"on_response_writable","","This event occurs each time the `Response` is ready to be written to.",9,null],[6,"ServerResult","","Result of starting the Server.",null,null],[8,"HttpMetaExtractor","","Extracts metadata from the HTTP request.",null,null],[11,"read_metadata","","Read the metadata from the request",10,null],[11,"fmt","","",3,null],[11,"from","","",3,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[11,"into","","",4,null],[11,"from","","",4,{"inputs":[{"name":"option"}],"output":{"name":"self"}}],[11,"clone","","",2,null],[11,"new","","Creates new RPC with extractor",2,{"inputs":[{"name":"rpchandler"},{"name":"arc"}],"output":{"name":"self"}}],[11,"from","","",2,{"inputs":[{"name":"rpchandler"}],"output":{"name":"self"}}],[11,"deref","","",2,null],[11,"new","","Creates new `ServerBuilder` for given `IoHandler`.",11,{"inputs":[{"name":"t"}],"output":{"name":"self"}}],[11,"with_rpc_handler","","Creates new `ServerBuilder` given access to the event loop `Remote`.",11,{"inputs":[{"name":"rpchandler"}],"output":{"name":"self"}}],[11,"panic_handler","","Sets handler invoked in case of server panic.",11,null],[11,"cors","","Configures a list of allowed CORS origins.",11,null],[11,"meta_extractor","","Configures metadata extractor",11,null],[11,"allow_only_bind_host","","Allow connections only with `Host` header set to binding address.",11,null],[11,"allowed_hosts","","Specify a list of valid `Host` headers. Binding address is allowed automatically.",11,null],[11,"start_http","","Start this JSON-RPC HTTP server trying to bind to specified `SocketAddr`.",11,null],[11,"addrs","","Returns addresses of this server",12,null],[11,"close","","Closes the server.",12,null],[11,"wait","","Will block, waiting for the server to finish.",12,null],[11,"drop","","",12,null],[11,"fmt","","",0,null],[11,"fmt","jsonrpc_http_server::request_response","",5,null],[11,"fmt","","",6,null],[11,"deref_mut","","",6,null],[11,"eq","","",5,null],[11,"eq","jsonrpc_http_server","",0,null],[11,"ne","","",0,null],[11,"eq","jsonrpc_http_server::request_response","",6,null],[11,"ne","","",6,null],[11,"clone","","",5,null],[11,"clone","jsonrpc_http_server","",0,null],[11,"clone","jsonrpc_http_server::request_response","",6,null],[11,"deref","","",6,null],[11,"default","","",5,{"inputs":[],"output":{"name":"statuscode"}}],[11,"fmt","jsonrpc_http_server","",0,null],[11,"fmt","jsonrpc_http_server::request_response","",6,null],[11,"fmt","","",5,null],[11,"cmp","","",5,null],[11,"hash","","",5,null],[11,"partial_cmp","","",5,null],[11,"header_name","jsonrpc_http_server","",0,{"inputs":[],"output":{"name":"str"}}],[11,"parse_header","","",0,{"inputs":[{"name":"raw"}],"output":{"name":"result"}}],[11,"fmt_header","","",0,null],[11,"header_name","jsonrpc_http_server::request_response","",6,{"inputs":[],"output":{"name":"str"}}],[11,"parse_header","","",6,{"inputs":[{"name":"raw"}],"output":{"name":"result"}}],[11,"fmt_header","","",6,null],[11,"canonical_reason","","Get the standardised `reason-phrase` for this status code.",5,null],[11,"class","","Determine the class of a status code, based on its first digit.",5,null],[11,"is_informational","","Check if class is Informational.",5,null],[11,"is_success","","Check if class is Success.",5,null],[11,"is_redirection","","Check if class is Redirection.",5,null],[11,"is_client_error","","Check if class is ClientError.",5,null],[11,"is_server_error","","Check if class is ServerError.",5,null],[11,"is_strange_status","","Check if class is NoClass",5,null],[11,"json","","A constructor  to easily create a `Content-Type: application/json` header.",6,{"inputs":[],"output":{"name":"contenttype"}}],[11,"plaintext","","A constructor  to easily create a `Content-Type: text/plain; charset=utf-8` header.",6,{"inputs":[],"output":{"name":"contenttype"}}],[11,"html","","A constructor  to easily create a `Content-Type: text/html; charset=utf-8` header.",6,{"inputs":[],"output":{"name":"contenttype"}}],[11,"form_url_encoded","","A constructor  to easily create a `Content-Type: application/www-form-url-encoded` header.",6,{"inputs":[],"output":{"name":"contenttype"}}],[11,"jpeg","","A constructor  to easily create a `Content-Type: image/jpeg` header.",6,{"inputs":[],"output":{"name":"contenttype"}}],[11,"png","","A constructor  to easily create a `Content-Type: image/png` header.",6,{"inputs":[],"output":{"name":"contenttype"}}]],"paths":[[4,"AccessControlAllowOrigin"],[3,"PanicHandler"],[3,"Rpc"],[4,"RpcServerError"],[4,"DomainsValidation"],[4,"StatusCode"],[3,"ContentType"],[3,"Request"],[3,"Response"],[3,"ServerHandler"],[8,"HttpMetaExtractor"],[3,"ServerBuilder"],[3,"Server"]]};
searchIndex["jsonrpc_ipc_server"] = {"doc":"","items":[[3,"Server","jsonrpc_ipc_server","",null,null],[4,"Error","","",null,null],[13,"Io","","",0,null],[13,"NotStarted","","",0,null],[13,"AlreadyStopping","","",0,null],[13,"NotStopped","","",0,null],[13,"IsStopping","","",0,null],[5,"init_log","","Intialize log with default settings",null,{"inputs":[],"output":null}],[11,"fmt","","",0,null],[11,"from","","",0,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"new","","New server",1,{"inputs":[{"name":"str"},{"name":"t"}],"output":{"name":"result"}}],[11,"with_rpc_handler","","",1,{"inputs":[{"name":"str"},{"name":"rpchandler"}],"output":{"name":"result"}}],[11,"run","","Run server (in current thread)",1,null],[11,"poll","","Poll server requests (for manual async scenarios)",1,null],[11,"run_async","","Run server (in separate thread)",1,null],[11,"stop_async","","",1,null],[11,"stop","","",1,null],[11,"drop","","",1,null]],"paths":[[4,"Error"],[3,"Server"]]};
searchIndex["jsonrpc_macros"] = {"doc":"","items":[[3,"Trailing","jsonrpc_macros","A wrapper type without an implementation of `Deserialize`\nwhich allows a special implementation of `Wrap` for functions\nthat take a trailing default parameter.",null,null],[12,"0","","",0,null],[3,"IoDelegate","","A set of RPC methods and notifications tied to single `delegate` struct.",null,null],[11,"new","","Creates new `IoDelegate`",1,{"inputs":[{"name":"arc"}],"output":{"name":"self"}}],[11,"add_method","","",1,null],[11,"add_async_method","","",1,null],[11,"add_method_with_meta","","",1,null],[11,"add_notification","","",1,null],[11,"into","","",1,null],[14,"build_rpc_trait","","Auto-generates an RPC trait from trait definition.",null,null]],"paths":[[3,"Trailing"],[3,"IoDelegate"]]};
searchIndex["jsonrpc_tcp_server"] = {"doc":"jsonrpc server over tcp/ip","items":[[3,"Server","jsonrpc_tcp_server","",null,null],[3,"Dispatcher","","",null,null],[3,"RequestContext","","",null,null],[12,"peer_addr","","",0,null],[4,"PushMessageError","","",null,null],[13,"NoSuchPeer","","",1,null],[13,"Send","","",1,null],[11,"new","","",2,{"inputs":[{"name":"socketaddr"},{"name":"arc"}],"output":{"name":"self"}}],[11,"extractor","","",2,null],[11,"run","","",2,null],[11,"dispatcher","","",2,null],[11,"fmt","","",1,null],[11,"from","","",1,{"inputs":[{"name":"senderror"}],"output":{"name":"self"}}],[11,"new","","",3,{"inputs":[{"name":"arc"}],"output":{"name":"self"}}],[11,"push_message","","",3,null],[11,"is_connected","","",3,null],[11,"peer_count","","",3,null],[8,"MetaExtractor","","",null,null],[10,"extract","","",4,null]],"paths":[[3,"RequestContext"],[4,"PushMessageError"],[3,"Server"],[3,"Dispatcher"],[8,"MetaExtractor"]]};
initSearch(searchIndex);
