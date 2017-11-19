// Compiled by ClojureScript 1.9.946 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort.call(null,this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__44534__auto__ = [];
var len__44527__auto___49442 = arguments.length;
var i__44528__auto___49443 = (0);
while(true){
if((i__44528__auto___49443 < len__44527__auto___49442)){
args__44534__auto__.push((arguments[i__44528__auto___49443]));

var G__49444 = (i__44528__auto___49443 + (1));
i__44528__auto___49443 = G__49444;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((1) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44535__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__49030__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__49030__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__49030__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq49440){
var G__49441 = cljs.core.first.call(null,seq49440);
var seq49440__$1 = cljs.core.next.call(null,seq49440);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__49441,seq49440__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__44534__auto__ = [];
var len__44527__auto___49447 = arguments.length;
var i__44528__auto___49448 = (0);
while(true){
if((i__44528__auto___49448 < len__44527__auto___49447)){
args__44534__auto__.push((arguments[i__44528__auto___49448]));

var G__49449 = (i__44528__auto___49448 + (1));
i__44528__auto___49448 = G__49449;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((1) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44535__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__49030__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__49030__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__49030__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq49445){
var G__49446 = cljs.core.first.call(null,seq49445);
var seq49445__$1 = cljs.core.next.call(null,seq49445);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__49446,seq49445__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__44534__auto__ = [];
var len__44527__auto___49452 = arguments.length;
var i__44528__auto___49453 = (0);
while(true){
if((i__44528__auto___49453 < len__44527__auto___49452)){
args__44534__auto__.push((arguments[i__44528__auto___49453]));

var G__49454 = (i__44528__auto___49453 + (1));
i__44528__auto___49453 = G__49454;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((1) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44535__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__49030__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__49030__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__49030__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq49450){
var G__49451 = cljs.core.first.call(null,seq49450);
var seq49450__$1 = cljs.core.next.call(null,seq49450);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__49451,seq49450__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__44534__auto__ = [];
var len__44527__auto___49457 = arguments.length;
var i__44528__auto___49458 = (0);
while(true){
if((i__44528__auto___49458 < len__44527__auto___49457)){
args__44534__auto__.push((arguments[i__44528__auto___49458]));

var G__49459 = (i__44528__auto___49458 + (1));
i__44528__auto___49458 = G__49459;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((1) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44535__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__49030__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__49030__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__49030__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq49455){
var G__49456 = cljs.core.first.call(null,seq49455);
var seq49455__$1 = cljs.core.next.call(null,seq49455);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__49456,seq49455__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__44534__auto__ = [];
var len__44527__auto___49462 = arguments.length;
var i__44528__auto___49463 = (0);
while(true){
if((i__44528__auto___49463 < len__44527__auto___49462)){
args__44534__auto__.push((arguments[i__44528__auto___49463]));

var G__49464 = (i__44528__auto___49463 + (1));
i__44528__auto___49463 = G__49464;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((1) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44535__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__49030__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__49030__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__49030__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq49460){
var G__49461 = cljs.core.first.call(null,seq49460);
var seq49460__$1 = cljs.core.next.call(null,seq49460);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__49461,seq49460__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__44534__auto__ = [];
var len__44527__auto___49467 = arguments.length;
var i__44528__auto___49468 = (0);
while(true){
if((i__44528__auto___49468 < len__44527__auto___49467)){
args__44534__auto__.push((arguments[i__44528__auto___49468]));

var G__49469 = (i__44528__auto___49468 + (1));
i__44528__auto___49468 = G__49469;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((1) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44535__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__49030__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__49030__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__49030__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq49465){
var G__49466 = cljs.core.first.call(null,seq49465);
var seq49465__$1 = cljs.core.next.call(null,seq49465);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__49466,seq49465__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__44534__auto__ = [];
var len__44527__auto___49472 = arguments.length;
var i__44528__auto___49473 = (0);
while(true){
if((i__44528__auto___49473 < len__44527__auto___49472)){
args__44534__auto__.push((arguments[i__44528__auto___49473]));

var G__49474 = (i__44528__auto___49473 + (1));
i__44528__auto___49473 = G__49474;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((1) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44535__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__49030__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__49030__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__49030__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq49470){
var G__49471 = cljs.core.first.call(null,seq49470);
var seq49470__$1 = cljs.core.next.call(null,seq49470);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__49471,seq49470__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__44534__auto__ = [];
var len__44527__auto___49477 = arguments.length;
var i__44528__auto___49478 = (0);
while(true){
if((i__44528__auto___49478 < len__44527__auto___49477)){
args__44534__auto__.push((arguments[i__44528__auto___49478]));

var G__49479 = (i__44528__auto___49478 + (1));
i__44528__auto___49478 = G__49479;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((1) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44535__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__49030__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__49030__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__49030__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq49475){
var G__49476 = cljs.core.first.call(null,seq49475);
var seq49475__$1 = cljs.core.next.call(null,seq49475);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__49476,seq49475__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__44534__auto__ = [];
var len__44527__auto___49482 = arguments.length;
var i__44528__auto___49483 = (0);
while(true){
if((i__44528__auto___49483 < len__44527__auto___49482)){
args__44534__auto__.push((arguments[i__44528__auto___49483]));

var G__49484 = (i__44528__auto___49483 + (1));
i__44528__auto___49483 = G__49484;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((1) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44535__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__49030__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__49030__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__49030__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq49480){
var G__49481 = cljs.core.first.call(null,seq49480);
var seq49480__$1 = cljs.core.next.call(null,seq49480);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__49481,seq49480__$1);
});

