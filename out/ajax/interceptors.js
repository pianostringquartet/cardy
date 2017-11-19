// Compiled by ClojureScript 1.9.946 {}
goog.provide('ajax.interceptors');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.util');
goog.require('ajax.url');
goog.require('ajax.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__43996__auto__,k__43997__auto__){
var self__ = this;
var this__43996__auto____$1 = this;
return this__43996__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__43997__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__43998__auto__,k49039,else__43999__auto__){
var self__ = this;
var this__43998__auto____$1 = this;
var G__49043 = k49039;
var G__49043__$1 = (((G__49043 instanceof cljs.core.Keyword))?G__49043.fqn:null);
switch (G__49043__$1) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49039,else__43999__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__49044,opts){
var self__ = this;
var map__49045 = p__49044;
var map__49045__$1 = ((((!((map__49045 == null)))?((((map__49045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49045.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49045):map__49045);
var request__$1 = cljs.core.get.call(null,map__49045__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__49047 = this;
var map__49047__$1 = ((((!((map__49047 == null)))?((((map__49047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49047):map__49047);
var request__$2 = cljs.core.get.call(null,map__49047__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__49049,xhrio){
var self__ = this;
var map__49050 = p__49049;
var map__49050__$1 = ((((!((map__49050 == null)))?((((map__49050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49050.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49050):map__49050);
var response__$1 = cljs.core.get.call(null,map__49050__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__49052 = this;
var map__49052__$1 = ((((!((map__49052 == null)))?((((map__49052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49052.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49052):map__49052);
var response__$2 = cljs.core.get.call(null,map__49052__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__44010__auto__,writer__44011__auto__,opts__44012__auto__){
var self__ = this;
var this__44010__auto____$1 = this;
var pr_pair__44013__auto__ = ((function (this__44010__auto____$1){
return (function (keyval__44014__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__44011__auto__,cljs.core.pr_writer,""," ","",opts__44012__auto__,keyval__44014__auto__);
});})(this__44010__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__44011__auto__,pr_pair__44013__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__44012__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49038){
var self__ = this;
var G__49038__$1 = this;
return (new cljs.core.RecordIter((0),G__49038__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__43994__auto__){
var self__ = this;
var this__43994__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__43991__auto__){
var self__ = this;
var this__43991__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__44000__auto__){
var self__ = this;
var this__44000__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__43992__auto__){
var self__ = this;
var this__43992__auto____$1 = this;
var h__43810__auto__ = self__.__hash;
if(!((h__43810__auto__ == null))){
return h__43810__auto__;
} else {
var h__43810__auto____$1 = ((function (h__43810__auto__,this__43992__auto____$1){
return (function (coll__43993__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll.call(null,coll__43993__auto__));
});})(h__43810__auto__,this__43992__auto____$1))
.call(null,this__43992__auto____$1);
self__.__hash = h__43810__auto____$1;

return h__43810__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49040,other49041){
var self__ = this;
var this49040__$1 = this;
return (!((other49041 == null))) && ((this49040__$1.constructor === other49041.constructor)) && (cljs.core._EQ_.call(null,this49040__$1.name,other49041.name)) && (cljs.core._EQ_.call(null,this49040__$1.request,other49041.request)) && (cljs.core._EQ_.call(null,this49040__$1.response,other49041.response)) && (cljs.core._EQ_.call(null,this49040__$1.__extmap,other49041.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__44005__auto__,k__44006__auto__){
var self__ = this;
var this__44005__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__44006__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__44005__auto____$1),self__.__meta),k__44006__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__44006__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__44003__auto__,k__44004__auto__,G__49038){
var self__ = this;
var this__44003__auto____$1 = this;
var pred__49054 = cljs.core.keyword_identical_QMARK_;
var expr__49055 = k__44004__auto__;
if(cljs.core.truth_(pred__49054.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__49055))){
return (new ajax.interceptors.StandardInterceptor(G__49038,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49054.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__49055))){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__49038,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49054.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__49055))){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__49038,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__44004__auto__,G__49038),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__44008__auto__){
var self__ = this;
var this__44008__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__43995__auto__,G__49038){
var self__ = this;
var this__43995__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__49038,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__44001__auto__,entry__44002__auto__){
var self__ = this;
var this__44001__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__44002__auto__)){
return this__44001__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__44002__auto__,(0)),cljs.core._nth.call(null,entry__44002__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__44001__auto____$1,entry__44002__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__44032__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__44032__auto__,writer__44033__auto__){
return cljs.core._write.call(null,writer__44033__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__49042){
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__49042),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__49042),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__49042),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__49042,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192))),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.interceptors.success_QMARK_ = (function ajax$interceptors$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([status]),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__49058,xhrio){
var map__49059 = p__49058;
var map__49059__$1 = ((((!((map__49059 == null)))?((((map__49059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49059.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49059):map__49059);
var description = cljs.core.get.call(null,map__49059__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message.call(null,e)),"  Format should have been ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__44534__auto__ = [];
var len__44527__auto___49065 = arguments.length;
var i__44528__auto___49066 = (0);
while(true){
if((i__44528__auto___49066 < len__44527__auto___49065)){
args__44534__auto__.push((arguments[i__44528__auto___49066]));

var G__49067 = (i__44528__auto___49066 + (1));
i__44528__auto___49066 = G__49067;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((3) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__44535__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq49061){
var G__49062 = cljs.core.first.call(null,seq49061);
var seq49061__$1 = cljs.core.next.call(null,seq49061);
var G__49063 = cljs.core.first.call(null,seq49061__$1);
var seq49061__$2 = cljs.core.next.call(null,seq49061__$1);
var G__49064 = cljs.core.first.call(null,seq49061__$2);
var seq49061__$3 = cljs.core.next.call(null,seq49061__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__49062,G__49063,G__49064,seq49061__$3);
});

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__43996__auto__,k__43997__auto__){
var self__ = this;
var this__43996__auto____$1 = this;
return this__43996__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__43997__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__43998__auto__,k49070,else__43999__auto__){
var self__ = this;
var this__43998__auto____$1 = this;
var G__49074 = k49070;
var G__49074__$1 = (((G__49074 instanceof cljs.core.Keyword))?G__49074.fqn:null);
switch (G__49074__$1) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49070,else__43999__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__49075,request){
var self__ = this;
var map__49076 = p__49075;
var map__49076__$1 = ((((!((map__49076 == null)))?((((map__49076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49076.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49076):map__49076);
var content_type__$1 = cljs.core.get.call(null,map__49076__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__49078 = this;
var map__49078__$1 = ((((!((map__49078 == null)))?((((map__49078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49078):map__49078);
var content_type__$2 = cljs.core.get.call(null,map__49078__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__49078,map__49078__$1,content_type__$2,map__49076,map__49076__$1,content_type__$1){
return (function (p1__49068_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__43356__auto__ = p1__49068_SHARP_;
if(cljs.core.truth_(or__43356__auto__)){
return or__43356__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__49078,map__49078__$1,content_type__$2,map__49076,map__49076__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__49080,xhrio){
var self__ = this;
var map__49081 = p__49080;
var map__49081__$1 = ((((!((map__49081 == null)))?((((map__49081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49081.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49081):map__49081);
var format = map__49081__$1;
var read__$1 = cljs.core.get.call(null,map__49081__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__49083 = this;
var map__49083__$1 = ((((!((map__49083 == null)))?((((map__49083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49083):map__49083);
var format__$1 = map__49083__$1;
var read__$2 = cljs.core.get.call(null,map__49083__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.interceptors.fail,status);
var G__49086 = status;
switch (G__49086) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e49087){if((e49087 instanceof Object)){
var e = e49087;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e49087;

}
}
}
}catch (e49085){if((e49085 instanceof Object)){
var e = e49085;
var message = e.message;
return ajax.interceptors.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e49085;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__44010__auto__,writer__44011__auto__,opts__44012__auto__){
var self__ = this;
var this__44010__auto____$1 = this;
var pr_pair__44013__auto__ = ((function (this__44010__auto____$1){
return (function (keyval__44014__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__44011__auto__,cljs.core.pr_writer,""," ","",opts__44012__auto__,keyval__44014__auto__);
});})(this__44010__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__44011__auto__,pr_pair__44013__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__44012__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49069){
var self__ = this;
var G__49069__$1 = this;
return (new cljs.core.RecordIter((0),G__49069__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__43994__auto__){
var self__ = this;
var this__43994__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__43991__auto__){
var self__ = this;
var this__43991__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__44000__auto__){
var self__ = this;
var this__44000__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__43992__auto__){
var self__ = this;
var this__43992__auto____$1 = this;
var h__43810__auto__ = self__.__hash;
if(!((h__43810__auto__ == null))){
return h__43810__auto__;
} else {
var h__43810__auto____$1 = ((function (h__43810__auto__,this__43992__auto____$1){
return (function (coll__43993__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll.call(null,coll__43993__auto__));
});})(h__43810__auto__,this__43992__auto____$1))
.call(null,this__43992__auto____$1);
self__.__hash = h__43810__auto____$1;

return h__43810__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49071,other49072){
var self__ = this;
var this49071__$1 = this;
return (!((other49072 == null))) && ((this49071__$1.constructor === other49072.constructor)) && (cljs.core._EQ_.call(null,this49071__$1.read,other49072.read)) && (cljs.core._EQ_.call(null,this49071__$1.description,other49072.description)) && (cljs.core._EQ_.call(null,this49071__$1.content_type,other49072.content_type)) && (cljs.core._EQ_.call(null,this49071__$1.__extmap,other49072.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__44005__auto__,k__44006__auto__){
var self__ = this;
var this__44005__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__44006__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__44005__auto____$1),self__.__meta),k__44006__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__44006__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__44003__auto__,k__44004__auto__,G__49069){
var self__ = this;
var this__44003__auto____$1 = this;
var pred__49088 = cljs.core.keyword_identical_QMARK_;
var expr__49089 = k__44004__auto__;
if(cljs.core.truth_(pred__49088.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__49089))){
return (new ajax.interceptors.ResponseFormat(G__49069,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49088.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__49089))){
return (new ajax.interceptors.ResponseFormat(self__.read,G__49069,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49088.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__49089))){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__49069,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__44004__auto__,G__49069),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__44008__auto__){
var self__ = this;
var this__44008__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__43995__auto__,G__49069){
var self__ = this;
var this__43995__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__49069,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__44001__auto__,entry__44002__auto__){
var self__ = this;
var this__44001__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__44002__auto__)){
return this__44001__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__44002__auto__,(0)),cljs.core._nth.call(null,entry__44002__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__44001__auto____$1,entry__44002__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__44032__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__44032__auto__,writer__44033__auto__){
return cljs.core._write.call(null,writer__44033__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__49073){
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__49073),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__49073),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__49073),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__49073,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634))),null));
});

ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){

if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__43996__auto__,k__43997__auto__){
var self__ = this;
var this__43996__auto____$1 = this;
return this__43996__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__43997__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__43998__auto__,k49094,else__43999__auto__){
var self__ = this;
var this__43998__auto____$1 = this;
var G__49098 = k49094;
switch (G__49098) {
default:
return cljs.core.get.call(null,self__.__extmap,k49094,else__43999__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__49099){
var self__ = this;
var map__49100 = p__49099;
var map__49100__$1 = ((((!((map__49100 == null)))?((((map__49100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49100):map__49100);
var request = map__49100__$1;
var uri = cljs.core.get.call(null,map__49100__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__49100__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__49100__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__49100__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__49100__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__49102 = ajax.interceptors.get_request_format.call(null,format);
var map__49102__$1 = ((((!((map__49102 == null)))?((((map__49102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49102.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49102):map__49102);
var write = cljs.core.get.call(null,map__49102__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__49102__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.interceptors.apply_request_format.call(null,write,params):ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__43356__auto__ = headers;
if(cljs.core.truth_(or__43356__auto__)){
return or__43356__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__44010__auto__,writer__44011__auto__,opts__44012__auto__){
var self__ = this;
var this__44010__auto____$1 = this;
var pr_pair__44013__auto__ = ((function (this__44010__auto____$1){
return (function (keyval__44014__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__44011__auto__,cljs.core.pr_writer,""," ","",opts__44012__auto__,keyval__44014__auto__);
});})(this__44010__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__44011__auto__,pr_pair__44013__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__44012__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49093){
var self__ = this;
var G__49093__$1 = this;
return (new cljs.core.RecordIter((0),G__49093__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__43994__auto__){
var self__ = this;
var this__43994__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__43991__auto__){
var self__ = this;
var this__43991__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__44000__auto__){
var self__ = this;
var this__44000__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__43992__auto__){
var self__ = this;
var this__43992__auto____$1 = this;
var h__43810__auto__ = self__.__hash;
if(!((h__43810__auto__ == null))){
return h__43810__auto__;
} else {
var h__43810__auto____$1 = ((function (h__43810__auto__,this__43992__auto____$1){
return (function (coll__43993__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll.call(null,coll__43993__auto__));
});})(h__43810__auto__,this__43992__auto____$1))
.call(null,this__43992__auto____$1);
self__.__hash = h__43810__auto____$1;

return h__43810__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49095,other49096){
var self__ = this;
var this49095__$1 = this;
return (!((other49096 == null))) && ((this49095__$1.constructor === other49096.constructor)) && (cljs.core._EQ_.call(null,this49095__$1.__extmap,other49096.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__44005__auto__,k__44006__auto__){
var self__ = this;
var this__44005__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__44006__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__44005__auto____$1),self__.__meta),k__44006__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__44006__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__44003__auto__,k__44004__auto__,G__49093){
var self__ = this;
var this__44003__auto____$1 = this;
var pred__49104 = cljs.core.keyword_identical_QMARK_;
var expr__49105 = k__44004__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__44004__auto__,G__49093),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__44008__auto__){
var self__ = this;
var this__44008__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__43995__auto__,G__49093){
var self__ = this;
var this__43995__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__49093,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__44001__auto__,entry__44002__auto__){
var self__ = this;
var this__44001__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__44002__auto__)){
return this__44001__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__44002__auto__,(0)),cljs.core._nth.call(null,entry__44002__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__44001__auto____$1,entry__44002__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__44032__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__44032__auto__,writer__44033__auto__){
return cljs.core._write.call(null,writer__44033__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__49097){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__49097)),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__49109 = arguments.length;
switch (G__49109) {
case 2:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__49110,uri){
var map__49111 = p__49110;
var map__49111__$1 = ((((!((map__49111 == null)))?((((map__49111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49111.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49111):map__49111);
var vec_strategy = cljs.core.get.call(null,map__49111__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__49111__$1,new cljs.core.Keyword(null,"params","params",710516235));

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__49113){
var map__49114 = p__49113;
var map__49114__$1 = ((((!((map__49114 == null)))?((((map__49114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49114.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49114):map__49114);
var vec_strategy = cljs.core.get.call(null,map__49114__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__49114__$1,new cljs.core.Keyword(null,"params","params",710516235));
return ((function (map__49114,map__49114__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__49114,map__49114__$1,vec_strategy,params))
});

ajax.interceptors.uri_with_params.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__43996__auto__,k__43997__auto__){
var self__ = this;
var this__43996__auto____$1 = this;
return this__43996__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__43997__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__43998__auto__,k49118,else__43999__auto__){
var self__ = this;
var this__43998__auto____$1 = this;
var G__49122 = k49118;
switch (G__49122) {
default:
return cljs.core.get.call(null,self__.__extmap,k49118,else__43999__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__49123){
var self__ = this;
var map__49124 = p__49123;
var map__49124__$1 = ((((!((map__49124 == null)))?((((map__49124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49124):map__49124);
var request = map__49124__$1;
var method = cljs.core.get.call(null,map__49124__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.interceptors.uri_with_params.call(null,request)));
} else {
return request;
}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__44010__auto__,writer__44011__auto__,opts__44012__auto__){
var self__ = this;
var this__44010__auto____$1 = this;
var pr_pair__44013__auto__ = ((function (this__44010__auto____$1){
return (function (keyval__44014__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__44011__auto__,cljs.core.pr_writer,""," ","",opts__44012__auto__,keyval__44014__auto__);
});})(this__44010__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__44011__auto__,pr_pair__44013__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__44012__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49117){
var self__ = this;
var G__49117__$1 = this;
return (new cljs.core.RecordIter((0),G__49117__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__43994__auto__){
var self__ = this;
var this__43994__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__43991__auto__){
var self__ = this;
var this__43991__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__44000__auto__){
var self__ = this;
var this__44000__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__43992__auto__){
var self__ = this;
var this__43992__auto____$1 = this;
var h__43810__auto__ = self__.__hash;
if(!((h__43810__auto__ == null))){
return h__43810__auto__;
} else {
var h__43810__auto____$1 = ((function (h__43810__auto__,this__43992__auto____$1){
return (function (coll__43993__auto__){
return (1135316249 ^ cljs.core.hash_unordered_coll.call(null,coll__43993__auto__));
});})(h__43810__auto__,this__43992__auto____$1))
.call(null,this__43992__auto____$1);
self__.__hash = h__43810__auto____$1;

return h__43810__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49119,other49120){
var self__ = this;
var this49119__$1 = this;
return (!((other49120 == null))) && ((this49119__$1.constructor === other49120.constructor)) && (cljs.core._EQ_.call(null,this49119__$1.__extmap,other49120.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__44005__auto__,k__44006__auto__){
var self__ = this;
var this__44005__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__44006__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__44005__auto____$1),self__.__meta),k__44006__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__44006__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__44003__auto__,k__44004__auto__,G__49117){
var self__ = this;
var this__44003__auto____$1 = this;
var pred__49126 = cljs.core.keyword_identical_QMARK_;
var expr__49127 = k__44004__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__44004__auto__,G__49117),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__44008__auto__){
var self__ = this;
var this__44008__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__43995__auto__,G__49117){
var self__ = this;
var this__43995__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__49117,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__44001__auto__,entry__44002__auto__){
var self__ = this;
var this__44001__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__44002__auto__)){
return this__44001__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__44002__auto__,(0)),cljs.core._nth.call(null,entry__44002__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__44001__auto____$1,entry__44002__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__44032__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__44032__auto__,writer__44033__auto__){
return cljs.core._write.call(null,writer__44033__auto__,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__49121){
return (new ajax.interceptors.ProcessGet(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__49121)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__43996__auto__,k__43997__auto__){
var self__ = this;
var this__43996__auto____$1 = this;
return this__43996__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__43997__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__43998__auto__,k49131,else__43999__auto__){
var self__ = this;
var this__43998__auto____$1 = this;
var G__49135 = k49131;
switch (G__49135) {
default:
return cljs.core.get.call(null,self__.__extmap,k49131,else__43999__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__49136){
var self__ = this;
var map__49137 = p__49136;
var map__49137__$1 = ((((!((map__49137 == null)))?((((map__49137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49137):map__49137);
var request = map__49137__$1;
var body = cljs.core.get.call(null,map__49137__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__44010__auto__,writer__44011__auto__,opts__44012__auto__){
var self__ = this;
var this__44010__auto____$1 = this;
var pr_pair__44013__auto__ = ((function (this__44010__auto____$1){
return (function (keyval__44014__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__44011__auto__,cljs.core.pr_writer,""," ","",opts__44012__auto__,keyval__44014__auto__);
});})(this__44010__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__44011__auto__,pr_pair__44013__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__44012__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49130){
var self__ = this;
var G__49130__$1 = this;
return (new cljs.core.RecordIter((0),G__49130__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__43994__auto__){
var self__ = this;
var this__43994__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__43991__auto__){
var self__ = this;
var this__43991__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__44000__auto__){
var self__ = this;
var this__44000__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__43992__auto__){
var self__ = this;
var this__43992__auto____$1 = this;
var h__43810__auto__ = self__.__hash;
if(!((h__43810__auto__ == null))){
return h__43810__auto__;
} else {
var h__43810__auto____$1 = ((function (h__43810__auto__,this__43992__auto____$1){
return (function (coll__43993__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll.call(null,coll__43993__auto__));
});})(h__43810__auto__,this__43992__auto____$1))
.call(null,this__43992__auto____$1);
self__.__hash = h__43810__auto____$1;

return h__43810__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49132,other49133){
var self__ = this;
var this49132__$1 = this;
return (!((other49133 == null))) && ((this49132__$1.constructor === other49133.constructor)) && (cljs.core._EQ_.call(null,this49132__$1.__extmap,other49133.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__44005__auto__,k__44006__auto__){
var self__ = this;
var this__44005__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__44006__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__44005__auto____$1),self__.__meta),k__44006__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__44006__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__44003__auto__,k__44004__auto__,G__49130){
var self__ = this;
var this__44003__auto____$1 = this;
var pred__49139 = cljs.core.keyword_identical_QMARK_;
var expr__49140 = k__44004__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__44004__auto__,G__49130),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__44008__auto__){
var self__ = this;
var this__44008__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__43995__auto__,G__49130){
var self__ = this;
var this__43995__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__49130,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__44001__auto__,entry__44002__auto__){
var self__ = this;
var this__44001__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__44002__auto__)){
return this__44001__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__44002__auto__,(0)),cljs.core._nth.call(null,entry__44002__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__44001__auto____$1,entry__44002__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__44032__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__44032__auto__,writer__44033__auto__){
return cljs.core._write.call(null,writer__44033__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__49134){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__49134)),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__49143){
var map__49144 = p__49143;
var map__49144__$1 = ((((!((map__49144 == null)))?((((map__49144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49144):map__49144);
var opts = map__49144__$1;
var response_format = cljs.core.get.call(null,map__49144__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.truth_(ajax.interceptors.is_response_format_QMARK_.call(null,response_format))){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return interpret_vector.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});
