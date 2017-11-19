// Compiled by ClojureScript 1.9.946 {}
goog.provide('clairvoyant.core');
goog.require('cljs.core');
goog.require('clojure.walk');

/**
 * @interface
 */
clairvoyant.core.ITraceEnter = function(){};

clairvoyant.core._trace_enter = (function clairvoyant$core$_trace_enter(this$,trace_data){
if((!((this$ == null))) && (!((this$.clairvoyant$core$ITraceEnter$_trace_enter$arity$2 == null)))){
return this$.clairvoyant$core$ITraceEnter$_trace_enter$arity$2(this$,trace_data);
} else {
var x__44039__auto__ = (((this$ == null))?null:this$);
var m__44040__auto__ = (clairvoyant.core._trace_enter[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,this$,trace_data);
} else {
var m__44040__auto____$1 = (clairvoyant.core._trace_enter["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,this$,trace_data);
} else {
throw cljs.core.missing_protocol.call(null,"ITraceEnter.-trace-enter",this$);
}
}
}
});


/**
 * @interface
 */
clairvoyant.core.ITraceError = function(){};

clairvoyant.core._trace_error = (function clairvoyant$core$_trace_error(this$,trace_data){
if((!((this$ == null))) && (!((this$.clairvoyant$core$ITraceError$_trace_error$arity$2 == null)))){
return this$.clairvoyant$core$ITraceError$_trace_error$arity$2(this$,trace_data);
} else {
var x__44039__auto__ = (((this$ == null))?null:this$);
var m__44040__auto__ = (clairvoyant.core._trace_error[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,this$,trace_data);
} else {
var m__44040__auto____$1 = (clairvoyant.core._trace_error["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,this$,trace_data);
} else {
throw cljs.core.missing_protocol.call(null,"ITraceError.-trace-error",this$);
}
}
}
});


/**
 * @interface
 */
clairvoyant.core.ITraceExit = function(){};

clairvoyant.core._trace_exit = (function clairvoyant$core$_trace_exit(this$,trace_data){
if((!((this$ == null))) && (!((this$.clairvoyant$core$ITraceExit$_trace_exit$arity$2 == null)))){
return this$.clairvoyant$core$ITraceExit$_trace_exit$arity$2(this$,trace_data);
} else {
var x__44039__auto__ = (((this$ == null))?null:this$);
var m__44040__auto__ = (clairvoyant.core._trace_exit[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,this$,trace_data);
} else {
var m__44040__auto____$1 = (clairvoyant.core._trace_exit["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,this$,trace_data);
} else {
throw cljs.core.missing_protocol.call(null,"ITraceExit.-trace-exit",this$);
}
}
}
});

/**
 * Call the -trace-enter method for a given tracer with trace-data.
 *   tracer must satisfy ITraceEnter.
 */
clairvoyant.core.trace_enter = (function clairvoyant$core$trace_enter(tracer,trace_data){
return clairvoyant.core._trace_enter.call(null,tracer,trace_data);
});
/**
 * Call the -trace-error method for a given tracer with trace-data.
 *   tracer must satisfy ITraceError.
 */
clairvoyant.core.trace_error = (function clairvoyant$core$trace_error(tracer,trace_data){
return clairvoyant.core._trace_error.call(null,tracer,trace_data);
});
/**
 * Call the -trace-exit method for a given tracer with trace-data.
 *   tracer must satisfy ITraceExit.
 */
clairvoyant.core.trace_exit = (function clairvoyant$core$trace_exit(tracer,trace_data){
return clairvoyant.core._trace_exit.call(null,tracer,trace_data);
});

/** @define {boolean} */
goog.define("clairvoyant.core.devmode",false);
/**
 * Matches the function signature of the result of (str f) where f is a
 *   function. Captures the argument list and identifier (if possible).
 */
clairvoyant.core.fn_re = /function\s+([a-zA-Z0-9_$]+)?\(([a-zA-Z0-9_,\s]+)\)/;
/**
 * Return the function signature of f.
 * 
 *   Example:
 * 
 *  (fn-signature inc)
 *  ;;=> (fn inc [x])
 * 
 *  (fn-signature map)
 *  ;; => (fn [f c1 c2 c3 var_args])
 *   
 */
clairvoyant.core.fn_signature = (function clairvoyant$core$fn_signature(f){
var vec__48789 = cljs.core.re_find.call(null,clairvoyant.core.fn_re,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
var _ = cljs.core.nth.call(null,vec__48789,(0),null);
var name = cljs.core.nth.call(null,vec__48789,(1),null);
var sig = cljs.core.nth.call(null,vec__48789,(2),null);
var arglist = cljs.core.mapv.call(null,cljs.core.symbol,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)].join('').split(","));
if(cljs.core.truth_(name)){
return cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.symbol.call(null,name);
return cljs.core._conj.call(null,(function (){var x__44218__auto____$1 = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto____$1);
})(),x__44218__auto__);
})(),new cljs.core.Symbol(null,"fn","fn",465265323,null));
} else {
return cljs.core._conj.call(null,(function (){var x__44218__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"fn","fn",465265323,null));
}
});
clairvoyant.core.default_tracer = (function (){var pr_val_STAR_ = (function clairvoyant$core$pr_val_STAR_(x){
if(cljs.core.fn_QMARK_.call(null,x)){
return clairvoyant.core.fn_signature.call(null,x);
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return clojure.walk.walk.call(null,clairvoyant$core$pr_val_STAR_,cljs.core.identity,x);
} else {
return x;

}
}
});
var pr_val = ((function (pr_val_STAR_){
return (function (x){
return cljs.core.pr_str.call(null,pr_val_STAR_.call(null,x));
});})(pr_val_STAR_))
;
var log_binding = ((function (pr_val_STAR_,pr_val){
return (function (form,init){
return console.groupCollapsed("%c%s %c%s","font-weight:bold;",cljs.core.pr_str.call(null,form),"font-weight:normal;",pr_val.call(null,init));
});})(pr_val_STAR_,pr_val))
;
var log_exit = ((function (pr_val_STAR_,pr_val,log_binding){
return (function (exit){
console.groupCollapsed("=>",pr_val.call(null,exit));

console.log(exit);

return console.groupEnd();
});})(pr_val_STAR_,pr_val,log_binding))
;
var has_bindings_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 21, [new cljs.core.Symbol("cljs.core","extend-protocol","cljs.core/extend-protocol",-100428625,null),null,new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),null,new cljs.core.Symbol(null,"defmethod","defmethod",-579171823,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,new cljs.core.Symbol(null,"defn","defn",-126010802,null),null,new cljs.core.Symbol(null,"extend-protocol","extend-protocol",306378578,null),null,new cljs.core.Symbol(null,"extend-type","extend-type",1123355921,null),null,new cljs.core.Symbol("cljs.core","defrecord","cljs.core/defrecord",948295858,null),null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,new cljs.core.Symbol(null,"reify","reify",1885539699,null),null,new cljs.core.Symbol(null,"let","let",358118826,null),null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null),null,new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,new cljs.core.Symbol("cljs.core","deftype","cljs.core/deftype",-1630339979,null),null,new cljs.core.Symbol("cljs.core","extend-type","cljs.core/extend-type",2058791100,null),null,new cljs.core.Symbol("cljs.core","reify","cljs.core/reify",463577556,null),null,new cljs.core.Symbol("cljs.core","defn-","cljs.core/defn-",1764521227,null),null], null), null);
var fn_like_QMARK_ = cljs.core.disj.call(null,has_bindings_QMARK_,new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null));
if(typeof clairvoyant.core.t_clairvoyant$core48792 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {clairvoyant.core.ITraceError}
 * @implements {clairvoyant.core.ITraceEnter}
 * @implements {cljs.core.IMeta}
 * @implements {clairvoyant.core.ITraceExit}
 * @implements {cljs.core.IWithMeta}
*/
clairvoyant.core.t_clairvoyant$core48792 = (function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,meta48793){
this.pr_val_STAR_ = pr_val_STAR_;
this.pr_val = pr_val;
this.log_binding = log_binding;
this.log_exit = log_exit;
this.has_bindings_QMARK_ = has_bindings_QMARK_;
this.fn_like_QMARK_ = fn_like_QMARK_;
this.meta48793 = meta48793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
clairvoyant.core.t_clairvoyant$core48792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (_48794,meta48793__$1){
var self__ = this;
var _48794__$1 = this;
return (new clairvoyant.core.t_clairvoyant$core48792(self__.pr_val_STAR_,self__.pr_val,self__.log_binding,self__.log_exit,self__.has_bindings_QMARK_,self__.fn_like_QMARK_,meta48793__$1));
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.t_clairvoyant$core48792.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (_48794){
var self__ = this;
var _48794__$1 = this;
return self__.meta48793;
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.t_clairvoyant$core48792.prototype.clairvoyant$core$ITraceEnter$ = cljs.core.PROTOCOL_SENTINEL;

clairvoyant.core.t_clairvoyant$core48792.prototype.clairvoyant$core$ITraceEnter$_trace_enter$arity$2 = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (_,p__48795){
var self__ = this;
var map__48796 = p__48795;
var map__48796__$1 = ((((!((map__48796 == null)))?((((map__48796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48796):map__48796);
var form = cljs.core.get.call(null,map__48796__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var args = cljs.core.get.call(null,map__48796__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var dispatch_val = cljs.core.get.call(null,map__48796__$1,new cljs.core.Keyword(null,"dispatch-val","dispatch-val",-1571470527));
var protocol = cljs.core.get.call(null,map__48796__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var init = cljs.core.get.call(null,map__48796__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var ns = cljs.core.get.call(null,map__48796__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__48796__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var arglist = cljs.core.get.call(null,map__48796__$1,new cljs.core.Keyword(null,"arglist","arglist",-1808272150));
var op = cljs.core.get.call(null,map__48796__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var anonymous_QMARK_ = cljs.core.get.call(null,map__48796__$1,new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995));
var ___$1 = this;
if(cljs.core.truth_(self__.fn_like_QMARK_.call(null,op))){
var title = (cljs.core.truth_(protocol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arglist)].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(dispatch_val)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,dispatch_val))].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1([" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arglist)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(anonymous_QMARK_)?" (anonymous)":null))].join(''));
var arglist__$1 = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
console.groupCollapsed(title);

return console.groupCollapsed("bindings");
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,new cljs.core.Symbol(null,"let","let",358118826,null),null], null), null).call(null,op))){
var title = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('');
console.groupCollapsed(title);

return console.groupCollapsed("bindings");
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),null], null), null).call(null,op))){
return self__.log_binding.call(null,form,init);
} else {
return null;
}
}
}
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.t_clairvoyant$core48792.prototype.clairvoyant$core$ITraceExit$ = cljs.core.PROTOCOL_SENTINEL;

clairvoyant.core.t_clairvoyant$core48792.prototype.clairvoyant$core$ITraceExit$_trace_exit$arity$2 = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (_,p__48798){
var self__ = this;
var map__48799 = p__48798;
var map__48799__$1 = ((((!((map__48799 == null)))?((((map__48799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48799):map__48799);
var op = cljs.core.get.call(null,map__48799__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var exit = cljs.core.get.call(null,map__48799__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var ___$1 = this;
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),null], null), null).call(null,op))){
self__.log_exit.call(null,exit);

return console.groupEnd();
} else {
if(cljs.core.truth_(self__.has_bindings_QMARK_.call(null,op))){
console.groupEnd();

self__.log_exit.call(null,exit);

return console.groupEnd();
} else {
return null;
}
}
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.t_clairvoyant$core48792.prototype.clairvoyant$core$ITraceError$ = cljs.core.PROTOCOL_SENTINEL;

clairvoyant.core.t_clairvoyant$core48792.prototype.clairvoyant$core$ITraceError$_trace_error$arity$2 = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (_,p__48801){
var self__ = this;
var map__48802 = p__48801;
var map__48802__$1 = ((((!((map__48802 == null)))?((((map__48802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48802.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48802):map__48802);
var op = cljs.core.get.call(null,map__48802__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__48802__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var error = cljs.core.get.call(null,map__48802__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var ex_data = cljs.core.get.call(null,map__48802__$1,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259));
var ___$1 = this;
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),null], null), null).call(null,op))){
console.error(error.stack);

if(cljs.core.truth_(ex_data)){
console.groupCollapsed("ex-data");

console.groupCollapsed(self__.pr_val.call(null,ex_data));

console.log(ex_data);

console.groupEnd();

return console.groupEnd();
} else {
return null;
}
} else {
if(cljs.core.truth_(self__.has_bindings_QMARK_.call(null,op))){
console.groupEnd();

console.error(error.stack);

if(cljs.core.truth_(ex_data)){
console.groupCollapsed("ex-data");

console.groupCollapsed(self__.pr_val.call(null,ex_data));

console.log(ex_data);

console.groupEnd();

console.groupEnd();
} else {
}

return console.groupEnd();
} else {
return null;
}
}
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.t_clairvoyant$core48792.getBasis = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pr-val*","pr-val*",344533536,null),new cljs.core.Symbol(null,"pr-val","pr-val",-289132329,null),new cljs.core.Symbol(null,"log-binding","log-binding",-7452044,null),new cljs.core.Symbol(null,"log-exit","log-exit",-1916806496,null),new cljs.core.Symbol(null,"has-bindings?","has-bindings?",-1143394454,null),new cljs.core.Symbol(null,"fn-like?","fn-like?",312793189,null),new cljs.core.Symbol(null,"meta48793","meta48793",-496324926,null)], null);
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.t_clairvoyant$core48792.cljs$lang$type = true;

clairvoyant.core.t_clairvoyant$core48792.cljs$lang$ctorStr = "clairvoyant.core/t_clairvoyant$core48792";

clairvoyant.core.t_clairvoyant$core48792.cljs$lang$ctorPrWriter = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (this__43981__auto__,writer__43982__auto__,opt__43983__auto__){
return cljs.core._write.call(null,writer__43982__auto__,"clairvoyant.core/t_clairvoyant$core48792");
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.__GT_t_clairvoyant$core48792 = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function clairvoyant$core$__GT_t_clairvoyant$core48792(pr_val_STAR___$1,pr_val__$1,log_binding__$1,log_exit__$1,has_bindings_QMARK___$1,fn_like_QMARK___$1,meta48793){
return (new clairvoyant.core.t_clairvoyant$core48792(pr_val_STAR___$1,pr_val__$1,log_binding__$1,log_exit__$1,has_bindings_QMARK___$1,fn_like_QMARK___$1,meta48793));
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

}

return (new clairvoyant.core.t_clairvoyant$core48792(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
})();
clairvoyant.core.cljs_devtools_tracer = (function clairvoyant$core$cljs_devtools_tracer(var_args){
var args__44534__auto__ = [];
var len__44527__auto___48820 = arguments.length;
var i__44528__auto___48821 = (0);
while(true){
if((i__44528__auto___48821 < len__44527__auto___48820)){
args__44534__auto__.push((arguments[i__44528__auto___48821]));

var G__48822 = (i__44528__auto___48821 + (1));
i__44528__auto___48821 = G__48822;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((0) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((0)),(0),null)):null);
return clairvoyant.core.cljs_devtools_tracer.cljs$core$IFn$_invoke$arity$variadic(argseq__44535__auto__);
});

clairvoyant.core.cljs_devtools_tracer.cljs$core$IFn$_invoke$arity$variadic = (function (p__48805){
var map__48806 = p__48805;
var map__48806__$1 = ((((!((map__48806 == null)))?((((map__48806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48806):map__48806);
var options = map__48806__$1;
var color = cljs.core.get.call(null,map__48806__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var pr_val = ((function (map__48806,map__48806__$1,options,color){
return (function clairvoyant$core$pr_val(x){
return x;
});})(map__48806,map__48806__$1,options,color))
;
var log_binding = ((function (pr_val,map__48806,map__48806__$1,options,color){
return (function (form,init){
return console.groupCollapsed("%c%s","font-weight:bold;",cljs.core.pr_str.call(null,form),pr_val.call(null,init));
});})(pr_val,map__48806,map__48806__$1,options,color))
;
var log_exit = ((function (pr_val,log_binding,map__48806,map__48806__$1,options,color){
return (function (exit){
return console.log("=>",pr_val.call(null,exit));
});})(pr_val,log_binding,map__48806,map__48806__$1,options,color))
;
var has_bindings_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 21, [new cljs.core.Symbol("cljs.core","extend-protocol","cljs.core/extend-protocol",-100428625,null),null,new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),null,new cljs.core.Symbol(null,"defmethod","defmethod",-579171823,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,new cljs.core.Symbol(null,"defn","defn",-126010802,null),null,new cljs.core.Symbol(null,"extend-protocol","extend-protocol",306378578,null),null,new cljs.core.Symbol(null,"extend-type","extend-type",1123355921,null),null,new cljs.core.Symbol("cljs.core","defrecord","cljs.core/defrecord",948295858,null),null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,new cljs.core.Symbol(null,"reify","reify",1885539699,null),null,new cljs.core.Symbol(null,"let","let",358118826,null),null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null),null,new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,new cljs.core.Symbol("cljs.core","deftype","cljs.core/deftype",-1630339979,null),null,new cljs.core.Symbol("cljs.core","extend-type","cljs.core/extend-type",2058791100,null),null,new cljs.core.Symbol("cljs.core","reify","cljs.core/reify",463577556,null),null,new cljs.core.Symbol("cljs.core","defn-","cljs.core/defn-",1764521227,null),null], null), null);
var fn_like_QMARK_ = cljs.core.disj.call(null,has_bindings_QMARK_,new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null));
if(typeof clairvoyant.core.t_clairvoyant$core48808 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {clairvoyant.core.ITraceError}
 * @implements {clairvoyant.core.ITraceEnter}
 * @implements {cljs.core.IMeta}
 * @implements {clairvoyant.core.ITraceExit}
 * @implements {cljs.core.IWithMeta}
*/
clairvoyant.core.t_clairvoyant$core48808 = (function (p__48805,map__48806,options,color,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,meta48809){
this.p__48805 = p__48805;
this.map__48806 = map__48806;
this.options = options;
this.color = color;
this.pr_val = pr_val;
this.log_binding = log_binding;
this.log_exit = log_exit;
this.has_bindings_QMARK_ = has_bindings_QMARK_;
this.fn_like_QMARK_ = fn_like_QMARK_;
this.meta48809 = meta48809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
clairvoyant.core.t_clairvoyant$core48808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__48806,map__48806__$1,options,color){
return (function (_48810,meta48809__$1){
var self__ = this;
var _48810__$1 = this;
return (new clairvoyant.core.t_clairvoyant$core48808(self__.p__48805,self__.map__48806,self__.options,self__.color,self__.pr_val,self__.log_binding,self__.log_exit,self__.has_bindings_QMARK_,self__.fn_like_QMARK_,meta48809__$1));
});})(pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__48806,map__48806__$1,options,color))
;

clairvoyant.core.t_clairvoyant$core48808.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__48806,map__48806__$1,options,color){
return (function (_48810){
var self__ = this;
var _48810__$1 = this;
return self__.meta48809;
});})(pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__48806,map__48806__$1,options,color))
;

clairvoyant.core.t_clairvoyant$core48808.prototype.clairvoyant$core$ITraceEnter$ = cljs.core.PROTOCOL_SENTINEL;

clairvoyant.core.t_clairvoyant$core48808.prototype.clairvoyant$core$ITraceEnter$_trace_enter$arity$2 = ((function (pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__48806,map__48806__$1,options,color){
return (function (_,p__48811){
var self__ = this;
var map__48812 = p__48811;
var map__48812__$1 = ((((!((map__48812 == null)))?((((map__48812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48812.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48812):map__48812);
var form = cljs.core.get.call(null,map__48812__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var args = cljs.core.get.call(null,map__48812__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var dispatch_val = cljs.core.get.call(null,map__48812__$1,new cljs.core.Keyword(null,"dispatch-val","dispatch-val",-1571470527));
var protocol = cljs.core.get.call(null,map__48812__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var init = cljs.core.get.call(null,map__48812__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var ns = cljs.core.get.call(null,map__48812__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__48812__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var arglist = cljs.core.get.call(null,map__48812__$1,new cljs.core.Keyword(null,"arglist","arglist",-1808272150));
var op = cljs.core.get.call(null,map__48812__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var anonymous_QMARK_ = cljs.core.get.call(null,map__48812__$1,new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995));
var ___$1 = this;
if(cljs.core.truth_(self__.fn_like_QMARK_.call(null,op))){
var title = (cljs.core.truth_(protocol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arglist)].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(dispatch_val)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,dispatch_val))].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1([" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arglist)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(anonymous_QMARK_)?" (anonymous)":null))].join(''));
var arglist__$1 = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
console.groupCollapsed("%c%s",["color:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.color),";"].join(''),title);

return console.groupCollapsed("bindings");
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,new cljs.core.Symbol(null,"let","let",358118826,null),null], null), null).call(null,op))){
var title = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('');
console.groupCollapsed(title);

return console.groupCollapsed("bindings");
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),null], null), null).call(null,op))){
return self__.log_binding.call(null,form,init);
} else {
return null;
}
}
}
});})(pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__48806,map__48806__$1,options,color))
;

clairvoyant.core.t_clairvoyant$core48808.prototype.clairvoyant$core$ITraceExit$ = cljs.core.PROTOCOL_SENTINEL;

clairvoyant.core.t_clairvoyant$core48808.prototype.clairvoyant$core$ITraceExit$_trace_exit$arity$2 = ((function (pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__48806,map__48806__$1,options,color){
return (function (_,p__48814){
var self__ = this;
var map__48815 = p__48814;
var map__48815__$1 = ((((!((map__48815 == null)))?((((map__48815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48815):map__48815);
var op = cljs.core.get.call(null,map__48815__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var exit = cljs.core.get.call(null,map__48815__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var ___$1 = this;
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),null], null), null).call(null,op))){
self__.log_exit.call(null,exit);

return console.groupEnd();
} else {
if(cljs.core.truth_(self__.has_bindings_QMARK_.call(null,op))){
console.groupEnd();

self__.log_exit.call(null,exit);

return console.groupEnd();
} else {
return null;
}
}
});})(pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__48806,map__48806__$1,options,color))
;

clairvoyant.core.t_clairvoyant$core48808.prototype.clairvoyant$core$ITraceError$ = cljs.core.PROTOCOL_SENTINEL;

clairvoyant.core.t_clairvoyant$core48808.prototype.clairvoyant$core$ITraceError$_trace_error$arity$2 = ((function (pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__48806,map__48806__$1,options,color){
return (function (_,p__48817){
var self__ = this;
var map__48818 = p__48817;
var map__48818__$1 = ((((!((map__48818 == null)))?((((map__48818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48818):map__48818);
var op = cljs.core.get.call(null,map__48818__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__48818__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var error = cljs.core.get.call(null,map__48818__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var ex_data = cljs.core.get.call(null,map__48818__$1,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259));
var ___$1 = this;
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),null], null), null).call(null,op))){
console.error(error.stack);

if(cljs.core.truth_(ex_data)){
console.groupCollapsed("ex-data");

console.groupCollapsed(self__.pr_val.call(null,ex_data));

console.groupEnd();

return console.groupEnd();
} else {
return null;
}
} else {
if(cljs.core.truth_(self__.has_bindings_QMARK_.call(null,op))){
console.groupEnd();

console.error(error.stack);

if(cljs.core.truth_(ex_data)){
console.groupCollapsed("ex-data");

console.groupCollapsed(self__.pr_val.call(null,ex_data));

console.groupEnd();

console.groupEnd();
} else {
}

return console.groupEnd();
} else {
return null;
}
}
});})(pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__48806,map__48806__$1,options,color))
;

clairvoyant.core.t_clairvoyant$core48808.getBasis = ((function (pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__48806,map__48806__$1,options,color){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__48805","p__48805",199932047,null),new cljs.core.Symbol(null,"map__48806","map__48806",1347396302,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"color","color",-1642760596,null),new cljs.core.Symbol(null,"pr-val","pr-val",-289132329,null),new cljs.core.Symbol(null,"log-binding","log-binding",-7452044,null),new cljs.core.Symbol(null,"log-exit","log-exit",-1916806496,null),new cljs.core.Symbol(null,"has-bindings?","has-bindings?",-1143394454,null),new cljs.core.Symbol(null,"fn-like?","fn-like?",312793189,null),new cljs.core.Symbol(null,"meta48809","meta48809",1379169257,null)], null);
});})(pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__48806,map__48806__$1,options,color))
;

clairvoyant.core.t_clairvoyant$core48808.cljs$lang$type = true;

clairvoyant.core.t_clairvoyant$core48808.cljs$lang$ctorStr = "clairvoyant.core/t_clairvoyant$core48808";

clairvoyant.core.t_clairvoyant$core48808.cljs$lang$ctorPrWriter = ((function (pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__48806,map__48806__$1,options,color){
return (function (this__43981__auto__,writer__43982__auto__,opt__43983__auto__){
return cljs.core._write.call(null,writer__43982__auto__,"clairvoyant.core/t_clairvoyant$core48808");
});})(pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__48806,map__48806__$1,options,color))
;

clairvoyant.core.__GT_t_clairvoyant$core48808 = ((function (pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__48806,map__48806__$1,options,color){
return (function clairvoyant$core$__GT_t_clairvoyant$core48808(p__48805__$1,map__48806__$2,options__$1,color__$1,pr_val__$1,log_binding__$1,log_exit__$1,has_bindings_QMARK___$1,fn_like_QMARK___$1,meta48809){
return (new clairvoyant.core.t_clairvoyant$core48808(p__48805__$1,map__48806__$2,options__$1,color__$1,pr_val__$1,log_binding__$1,log_exit__$1,has_bindings_QMARK___$1,fn_like_QMARK___$1,meta48809));
});})(pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__48806,map__48806__$1,options,color))
;

}

return (new clairvoyant.core.t_clairvoyant$core48808(p__48805,map__48806__$1,options,color,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});

clairvoyant.core.cljs_devtools_tracer.cljs$lang$maxFixedArity = (0);

clairvoyant.core.cljs_devtools_tracer.cljs$lang$applyTo = (function (seq48804){
return clairvoyant.core.cljs_devtools_tracer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48804));
});

