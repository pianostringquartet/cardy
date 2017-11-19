// Compiled by ClojureScript 1.9.946 {}
goog.provide('cardy.ajax');
goog.require('cljs.core');
goog.require('ajax.core');
cardy.ajax.local_uri_QMARK_ = (function cardy$ajax$local_uri_QMARK_(p__57570){
var map__57571 = p__57570;
var map__57571__$1 = ((((!((map__57571 == null)))?((((map__57571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57571.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57571):map__57571);
var uri = cljs.core.get.call(null,map__57571__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
return cljs.core.not.call(null,cljs.core.re_find.call(null,/^\w+?:\/\//,uri));
});
cardy.ajax.default_headers = (function cardy$ajax$default_headers(request){
if(cljs.core.truth_(cardy.ajax.local_uri_QMARK_.call(null,request))){
return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),(function (p1__57573_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__57573_SHARP_)].join('');
})),new cljs.core.Keyword(null,"headers","headers",-835030129),(function (p1__57574_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["x-csrf-token",csrfToken], null),p1__57574_SHARP_);
}));
} else {
return request;
}
});
cardy.ajax.load_interceptors_BANG_ = (function cardy$ajax$load_interceptors_BANG_(){
return cljs.core.swap_BANG_.call(null,ajax.core.default_interceptors,cljs.core.conj,ajax.core.to_interceptor.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"default headers",new cljs.core.Keyword(null,"request","request",1772954723),cardy.ajax.default_headers], null)));
});
