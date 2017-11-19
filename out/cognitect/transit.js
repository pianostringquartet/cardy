// Compiled by ClojureScript 1.9.946 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,["#uuid \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid__$1.toString()),"\""].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__49217_49221 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__49218_49222 = null;
var count__49219_49223 = (0);
var i__49220_49224 = (0);
while(true){
if((i__49220_49224 < count__49219_49223)){
var k_49225 = cljs.core._nth.call(null,chunk__49218_49222,i__49220_49224);
var v_49226 = (b[k_49225]);
(a[k_49225] = v_49226);

var G__49227 = seq__49217_49221;
var G__49228 = chunk__49218_49222;
var G__49229 = count__49219_49223;
var G__49230 = (i__49220_49224 + (1));
seq__49217_49221 = G__49227;
chunk__49218_49222 = G__49228;
count__49219_49223 = G__49229;
i__49220_49224 = G__49230;
continue;
} else {
var temp__4657__auto___49231 = cljs.core.seq.call(null,seq__49217_49221);
if(temp__4657__auto___49231){
var seq__49217_49232__$1 = temp__4657__auto___49231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49217_49232__$1)){
var c__44195__auto___49233 = cljs.core.chunk_first.call(null,seq__49217_49232__$1);
var G__49234 = cljs.core.chunk_rest.call(null,seq__49217_49232__$1);
var G__49235 = c__44195__auto___49233;
var G__49236 = cljs.core.count.call(null,c__44195__auto___49233);
var G__49237 = (0);
seq__49217_49221 = G__49234;
chunk__49218_49222 = G__49235;
count__49219_49223 = G__49236;
i__49220_49224 = G__49237;
continue;
} else {
var k_49238 = cljs.core.first.call(null,seq__49217_49232__$1);
var v_49239 = (b[k_49238]);
(a[k_49238] = v_49239);

var G__49240 = cljs.core.next.call(null,seq__49217_49232__$1);
var G__49241 = null;
var G__49242 = (0);
var G__49243 = (0);
seq__49217_49221 = G__49240;
chunk__49218_49222 = G__49241;
count__49219_49223 = G__49242;
i__49220_49224 = G__49243;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
});
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__43981__auto__,writer__43982__auto__,opt__43983__auto__){
return cljs.core._write.call(null,writer__43982__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__43981__auto__,writer__43982__auto__,opt__43983__auto__){
return cljs.core._write.call(null,writer__43982__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var G__49245 = arguments.length;
switch (G__49245) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader(cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__49247 = (i + (2));
var G__49248 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__49247;
ret = G__49248;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__43981__auto__,writer__43982__auto__,opt__43983__auto__){
return cljs.core._write.call(null,writer__43982__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__43981__auto__,writer__43982__auto__,opt__43983__auto__){
return cljs.core._write.call(null,writer__43982__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
});
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__49249_49253 = cljs.core.seq.call(null,v);
var chunk__49250_49254 = null;
var count__49251_49255 = (0);
var i__49252_49256 = (0);
while(true){
if((i__49252_49256 < count__49251_49255)){
var x_49257 = cljs.core._nth.call(null,chunk__49250_49254,i__49252_49256);
ret.push(x_49257);

var G__49258 = seq__49249_49253;
var G__49259 = chunk__49250_49254;
var G__49260 = count__49251_49255;
var G__49261 = (i__49252_49256 + (1));
seq__49249_49253 = G__49258;
chunk__49250_49254 = G__49259;
count__49251_49255 = G__49260;
i__49252_49256 = G__49261;
continue;
} else {
var temp__4657__auto___49262 = cljs.core.seq.call(null,seq__49249_49253);
if(temp__4657__auto___49262){
var seq__49249_49263__$1 = temp__4657__auto___49262;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49249_49263__$1)){
var c__44195__auto___49264 = cljs.core.chunk_first.call(null,seq__49249_49263__$1);
var G__49265 = cljs.core.chunk_rest.call(null,seq__49249_49263__$1);
var G__49266 = c__44195__auto___49264;
var G__49267 = cljs.core.count.call(null,c__44195__auto___49264);
var G__49268 = (0);
seq__49249_49253 = G__49265;
chunk__49250_49254 = G__49266;
count__49251_49255 = G__49267;
i__49252_49256 = G__49268;
continue;
} else {
var x_49269 = cljs.core.first.call(null,seq__49249_49263__$1);
ret.push(x_49269);

var G__49270 = cljs.core.next.call(null,seq__49249_49263__$1);
var G__49271 = null;
var G__49272 = (0);
var G__49273 = (0);
seq__49249_49253 = G__49270;
chunk__49250_49254 = G__49271;
count__49251_49255 = G__49272;
i__49252_49256 = G__49273;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__43981__auto__,writer__43982__auto__,opt__43983__auto__){
return cljs.core._write.call(null,writer__43982__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
});
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__43981__auto__,writer__43982__auto__,opt__43983__auto__){
return cljs.core._write.call(null,writer__43982__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
});
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__49274_49278 = cljs.core.seq.call(null,v);
var chunk__49275_49279 = null;
var count__49276_49280 = (0);
var i__49277_49281 = (0);
while(true){
if((i__49277_49281 < count__49276_49280)){
var x_49282 = cljs.core._nth.call(null,chunk__49275_49279,i__49277_49281);
ret.push(x_49282);

var G__49283 = seq__49274_49278;
var G__49284 = chunk__49275_49279;
var G__49285 = count__49276_49280;
var G__49286 = (i__49277_49281 + (1));
seq__49274_49278 = G__49283;
chunk__49275_49279 = G__49284;
count__49276_49280 = G__49285;
i__49277_49281 = G__49286;
continue;
} else {
var temp__4657__auto___49287 = cljs.core.seq.call(null,seq__49274_49278);
if(temp__4657__auto___49287){
var seq__49274_49288__$1 = temp__4657__auto___49287;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49274_49288__$1)){
var c__44195__auto___49289 = cljs.core.chunk_first.call(null,seq__49274_49288__$1);
var G__49290 = cljs.core.chunk_rest.call(null,seq__49274_49288__$1);
var G__49291 = c__44195__auto___49289;
var G__49292 = cljs.core.count.call(null,c__44195__auto___49289);
var G__49293 = (0);
seq__49274_49278 = G__49290;
chunk__49275_49279 = G__49291;
count__49276_49280 = G__49292;
i__49277_49281 = G__49293;
continue;
} else {
var x_49294 = cljs.core.first.call(null,seq__49274_49288__$1);
ret.push(x_49294);

var G__49295 = cljs.core.next.call(null,seq__49274_49288__$1);
var G__49296 = null;
var G__49297 = (0);
var G__49298 = (0);
seq__49274_49278 = G__49295;
chunk__49275_49279 = G__49296;
count__49276_49280 = G__49297;
i__49277_49281 = G__49298;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__43981__auto__,writer__43982__auto__,opt__43983__auto__){
return cljs.core._write.call(null,writer__43982__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__49299_49303 = cljs.core.seq.call(null,v);
var chunk__49300_49304 = null;
var count__49301_49305 = (0);
var i__49302_49306 = (0);
while(true){
if((i__49302_49306 < count__49301_49305)){
var x_49307 = cljs.core._nth.call(null,chunk__49300_49304,i__49302_49306);
ret.push(x_49307);

var G__49308 = seq__49299_49303;
var G__49309 = chunk__49300_49304;
var G__49310 = count__49301_49305;
var G__49311 = (i__49302_49306 + (1));
seq__49299_49303 = G__49308;
chunk__49300_49304 = G__49309;
count__49301_49305 = G__49310;
i__49302_49306 = G__49311;
continue;
} else {
var temp__4657__auto___49312 = cljs.core.seq.call(null,seq__49299_49303);
if(temp__4657__auto___49312){
var seq__49299_49313__$1 = temp__4657__auto___49312;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49299_49313__$1)){
var c__44195__auto___49314 = cljs.core.chunk_first.call(null,seq__49299_49313__$1);
var G__49315 = cljs.core.chunk_rest.call(null,seq__49299_49313__$1);
var G__49316 = c__44195__auto___49314;
var G__49317 = cljs.core.count.call(null,c__44195__auto___49314);
var G__49318 = (0);
seq__49299_49303 = G__49315;
chunk__49300_49304 = G__49316;
count__49301_49305 = G__49317;
i__49302_49306 = G__49318;
continue;
} else {
var x_49319 = cljs.core.first.call(null,seq__49299_49313__$1);
ret.push(x_49319);

var G__49320 = cljs.core.next.call(null,seq__49299_49313__$1);
var G__49321 = null;
var G__49322 = (0);
var G__49323 = (0);
seq__49299_49303 = G__49320;
chunk__49300_49304 = G__49321;
count__49301_49305 = G__49322;
i__49302_49306 = G__49323;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__43981__auto__,writer__43982__auto__,opt__43983__auto__){
return cljs.core._write.call(null,writer__43982__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
});
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__43981__auto__,writer__43982__auto__,opt__43983__auto__){
return cljs.core._write.call(null,writer__43982__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var G__49325 = arguments.length;
switch (G__49325) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer(cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__49326 = obj;
G__49326.push(kfn.call(null,k),vfn.call(null,v));

return G__49326;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x49327 = cljs.core.clone.call(null,handlers);
x49327.forEach = ((function (x49327,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__49328 = cljs.core.seq.call(null,coll);
var chunk__49329 = null;
var count__49330 = (0);
var i__49331 = (0);
while(true){
if((i__49331 < count__49330)){
var vec__49332 = cljs.core._nth.call(null,chunk__49329,i__49331);
var k = cljs.core.nth.call(null,vec__49332,(0),null);
var v = cljs.core.nth.call(null,vec__49332,(1),null);
f.call(null,v,k);

var G__49339 = seq__49328;
var G__49340 = chunk__49329;
var G__49341 = count__49330;
var G__49342 = (i__49331 + (1));
seq__49328 = G__49339;
chunk__49329 = G__49340;
count__49330 = G__49341;
i__49331 = G__49342;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49328);
if(temp__4657__auto__){
var seq__49328__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49328__$1)){
var c__44195__auto__ = cljs.core.chunk_first.call(null,seq__49328__$1);
var G__49343 = cljs.core.chunk_rest.call(null,seq__49328__$1);
var G__49344 = c__44195__auto__;
var G__49345 = cljs.core.count.call(null,c__44195__auto__);
var G__49346 = (0);
seq__49328 = G__49343;
chunk__49329 = G__49344;
count__49330 = G__49345;
i__49331 = G__49346;
continue;
} else {
var vec__49335 = cljs.core.first.call(null,seq__49328__$1);
var k = cljs.core.nth.call(null,vec__49335,(0),null);
var v = cljs.core.nth.call(null,vec__49335,(1),null);
f.call(null,v,k);

var G__49347 = cljs.core.next.call(null,seq__49328__$1);
var G__49348 = null;
var G__49349 = (0);
var G__49350 = (0);
seq__49328 = G__49347;
chunk__49329 = G__49348;
count__49330 = G__49349;
i__49331 = G__49350;
continue;
}
} else {
return null;
}
}
break;
}
});})(x49327,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x49327;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var G__49352 = arguments.length;
switch (G__49352) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit49353 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit49353 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta49354){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta49354 = meta49354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cognitect.transit.t_cognitect$transit49353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49355,meta49354__$1){
var self__ = this;
var _49355__$1 = this;
return (new cognitect.transit.t_cognitect$transit49353(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta49354__$1));
});

cognitect.transit.t_cognitect$transit49353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49355){
var self__ = this;
var _49355__$1 = this;
return self__.meta49354;
});

cognitect.transit.t_cognitect$transit49353.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit49353.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit49353.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit49353.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit49353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta49354","meta49354",110094588,null)], null);
});

cognitect.transit.t_cognitect$transit49353.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit49353.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit49353";

cognitect.transit.t_cognitect$transit49353.cljs$lang$ctorPrWriter = (function (this__43981__auto__,writer__43982__auto__,opt__43983__auto__){
return cljs.core._write.call(null,writer__43982__auto__,"cognitect.transit/t_cognitect$transit49353");
});

cognitect.transit.__GT_t_cognitect$transit49353 = (function cognitect$transit$__GT_t_cognitect$transit49353(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta49354){
return (new cognitect.transit.t_cognitect$transit49353(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta49354));
});

}

return (new cognitect.transit.t_cognitect$transit49353(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue(tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue(x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue(s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger(x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger(s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger(x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue(s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal(x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri(s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI(x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid(s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__43356__auto__ = com.cognitect.transit.types.isUUID(x);
if(cljs.core.truth_(or__43356__auto__)){
return or__43356__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary(s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary(x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted(x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted(x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link(x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink(x);
});
