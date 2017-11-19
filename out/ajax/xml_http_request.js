// Compiled by ClojureScript 1.9.946 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.call(null,(function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__49175,handler){
var map__49176 = p__49175;
var map__49176__$1 = ((((!((map__49176 == null)))?((((map__49176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49176.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49176):map__49176);
var uri = cljs.core.get.call(null,map__49176__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__49176__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__49176__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__49176__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__49176__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__49176__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__49176__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__49176,map__49176__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__49174_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__49174_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__49176,map__49176__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___49188 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___49188)){
var response_type_49189 = temp__4657__auto___49188;
this$__$1.responseType = cljs.core.name.call(null,response_type_49189);
} else {
}

var seq__49178_49190 = cljs.core.seq.call(null,headers);
var chunk__49179_49191 = null;
var count__49180_49192 = (0);
var i__49181_49193 = (0);
while(true){
if((i__49181_49193 < count__49180_49192)){
var vec__49182_49194 = cljs.core._nth.call(null,chunk__49179_49191,i__49181_49193);
var k_49195 = cljs.core.nth.call(null,vec__49182_49194,(0),null);
var v_49196 = cljs.core.nth.call(null,vec__49182_49194,(1),null);
this$__$1.setRequestHeader(k_49195,v_49196);

var G__49197 = seq__49178_49190;
var G__49198 = chunk__49179_49191;
var G__49199 = count__49180_49192;
var G__49200 = (i__49181_49193 + (1));
seq__49178_49190 = G__49197;
chunk__49179_49191 = G__49198;
count__49180_49192 = G__49199;
i__49181_49193 = G__49200;
continue;
} else {
var temp__4657__auto___49201 = cljs.core.seq.call(null,seq__49178_49190);
if(temp__4657__auto___49201){
var seq__49178_49202__$1 = temp__4657__auto___49201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49178_49202__$1)){
var c__44195__auto___49203 = cljs.core.chunk_first.call(null,seq__49178_49202__$1);
var G__49204 = cljs.core.chunk_rest.call(null,seq__49178_49202__$1);
var G__49205 = c__44195__auto___49203;
var G__49206 = cljs.core.count.call(null,c__44195__auto___49203);
var G__49207 = (0);
seq__49178_49190 = G__49204;
chunk__49179_49191 = G__49205;
count__49180_49192 = G__49206;
i__49181_49193 = G__49207;
continue;
} else {
var vec__49185_49208 = cljs.core.first.call(null,seq__49178_49202__$1);
var k_49209 = cljs.core.nth.call(null,vec__49185_49208,(0),null);
var v_49210 = cljs.core.nth.call(null,vec__49185_49208,(1),null);
this$__$1.setRequestHeader(k_49209,v_49210);

var G__49211 = cljs.core.next.call(null,seq__49178_49202__$1);
var G__49212 = null;
var G__49213 = (0);
var G__49214 = (0);
seq__49178_49190 = G__49211;
chunk__49179_49191 = G__49212;
count__49180_49192 = G__49213;
i__49181_49193 = G__49214;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__43356__auto__ = body;
if(cljs.core.truth_(or__43356__auto__)){
return or__43356__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});
