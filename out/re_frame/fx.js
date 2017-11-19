// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__49816 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__49817 = null;
var count__49818 = (0);
var i__49819 = (0);
while(true){
if((i__49819 < count__49818)){
var vec__49820 = cljs.core._nth.call(null,chunk__49817,i__49819);
var effect_key = cljs.core.nth.call(null,vec__49820,(0),null);
var effect_value = cljs.core.nth.call(null,vec__49820,(1),null);
var temp__4655__auto___49826 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___49826)){
var effect_fn_49827 = temp__4655__auto___49826;
effect_fn_49827.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__49828 = seq__49816;
var G__49829 = chunk__49817;
var G__49830 = count__49818;
var G__49831 = (i__49819 + (1));
seq__49816 = G__49828;
chunk__49817 = G__49829;
count__49818 = G__49830;
i__49819 = G__49831;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49816);
if(temp__4657__auto__){
var seq__49816__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49816__$1)){
var c__44195__auto__ = cljs.core.chunk_first.call(null,seq__49816__$1);
var G__49832 = cljs.core.chunk_rest.call(null,seq__49816__$1);
var G__49833 = c__44195__auto__;
var G__49834 = cljs.core.count.call(null,c__44195__auto__);
var G__49835 = (0);
seq__49816 = G__49832;
chunk__49817 = G__49833;
count__49818 = G__49834;
i__49819 = G__49835;
continue;
} else {
var vec__49823 = cljs.core.first.call(null,seq__49816__$1);
var effect_key = cljs.core.nth.call(null,vec__49823,(0),null);
var effect_value = cljs.core.nth.call(null,vec__49823,(1),null);
var temp__4655__auto___49836 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___49836)){
var effect_fn_49837 = temp__4655__auto___49836;
effect_fn_49837.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__49838 = cljs.core.next.call(null,seq__49816__$1);
var G__49839 = null;
var G__49840 = (0);
var G__49841 = (0);
seq__49816 = G__49838;
chunk__49817 = G__49839;
count__49818 = G__49840;
i__49819 = G__49841;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__49842 = cljs.core.seq.call(null,value);
var chunk__49843 = null;
var count__49844 = (0);
var i__49845 = (0);
while(true){
if((i__49845 < count__49844)){
var map__49846 = cljs.core._nth.call(null,chunk__49843,i__49845);
var map__49846__$1 = ((((!((map__49846 == null)))?((((map__49846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49846):map__49846);
var effect = map__49846__$1;
var ms = cljs.core.get.call(null,map__49846__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__49846__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__49842,chunk__49843,count__49844,i__49845,map__49846,map__49846__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__49842,chunk__49843,count__49844,i__49845,map__49846,map__49846__$1,effect,ms,dispatch))
,ms);
}

var G__49850 = seq__49842;
var G__49851 = chunk__49843;
var G__49852 = count__49844;
var G__49853 = (i__49845 + (1));
seq__49842 = G__49850;
chunk__49843 = G__49851;
count__49844 = G__49852;
i__49845 = G__49853;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49842);
if(temp__4657__auto__){
var seq__49842__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49842__$1)){
var c__44195__auto__ = cljs.core.chunk_first.call(null,seq__49842__$1);
var G__49854 = cljs.core.chunk_rest.call(null,seq__49842__$1);
var G__49855 = c__44195__auto__;
var G__49856 = cljs.core.count.call(null,c__44195__auto__);
var G__49857 = (0);
seq__49842 = G__49854;
chunk__49843 = G__49855;
count__49844 = G__49856;
i__49845 = G__49857;
continue;
} else {
var map__49848 = cljs.core.first.call(null,seq__49842__$1);
var map__49848__$1 = ((((!((map__49848 == null)))?((((map__49848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49848.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49848):map__49848);
var effect = map__49848__$1;
var ms = cljs.core.get.call(null,map__49848__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__49848__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__49842,chunk__49843,count__49844,i__49845,map__49848,map__49848__$1,effect,ms,dispatch,seq__49842__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__49842,chunk__49843,count__49844,i__49845,map__49848,map__49848__$1,effect,ms,dispatch,seq__49842__$1,temp__4657__auto__))
,ms);
}

var G__49858 = cljs.core.next.call(null,seq__49842__$1);
var G__49859 = null;
var G__49860 = (0);
var G__49861 = (0);
seq__49842 = G__49858;
chunk__49843 = G__49859;
count__49844 = G__49860;
i__49845 = G__49861;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__49862 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__49863 = null;
var count__49864 = (0);
var i__49865 = (0);
while(true){
if((i__49865 < count__49864)){
var event = cljs.core._nth.call(null,chunk__49863,i__49865);
re_frame.router.dispatch.call(null,event);

var G__49866 = seq__49862;
var G__49867 = chunk__49863;
var G__49868 = count__49864;
var G__49869 = (i__49865 + (1));
seq__49862 = G__49866;
chunk__49863 = G__49867;
count__49864 = G__49868;
i__49865 = G__49869;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49862);
if(temp__4657__auto__){
var seq__49862__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49862__$1)){
var c__44195__auto__ = cljs.core.chunk_first.call(null,seq__49862__$1);
var G__49870 = cljs.core.chunk_rest.call(null,seq__49862__$1);
var G__49871 = c__44195__auto__;
var G__49872 = cljs.core.count.call(null,c__44195__auto__);
var G__49873 = (0);
seq__49862 = G__49870;
chunk__49863 = G__49871;
count__49864 = G__49872;
i__49865 = G__49873;
continue;
} else {
var event = cljs.core.first.call(null,seq__49862__$1);
re_frame.router.dispatch.call(null,event);

var G__49874 = cljs.core.next.call(null,seq__49862__$1);
var G__49875 = null;
var G__49876 = (0);
var G__49877 = (0);
seq__49862 = G__49874;
chunk__49863 = G__49875;
count__49864 = G__49876;
i__49865 = G__49877;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__49878 = cljs.core.seq.call(null,value);
var chunk__49879 = null;
var count__49880 = (0);
var i__49881 = (0);
while(true){
if((i__49881 < count__49880)){
var event = cljs.core._nth.call(null,chunk__49879,i__49881);
clear_event.call(null,event);

var G__49882 = seq__49878;
var G__49883 = chunk__49879;
var G__49884 = count__49880;
var G__49885 = (i__49881 + (1));
seq__49878 = G__49882;
chunk__49879 = G__49883;
count__49880 = G__49884;
i__49881 = G__49885;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49878);
if(temp__4657__auto__){
var seq__49878__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49878__$1)){
var c__44195__auto__ = cljs.core.chunk_first.call(null,seq__49878__$1);
var G__49886 = cljs.core.chunk_rest.call(null,seq__49878__$1);
var G__49887 = c__44195__auto__;
var G__49888 = cljs.core.count.call(null,c__44195__auto__);
var G__49889 = (0);
seq__49878 = G__49886;
chunk__49879 = G__49887;
count__49880 = G__49888;
i__49881 = G__49889;
continue;
} else {
var event = cljs.core.first.call(null,seq__49878__$1);
clear_event.call(null,event);

var G__49890 = cljs.core.next.call(null,seq__49878__$1);
var G__49891 = null;
var G__49892 = (0);
var G__49893 = (0);
seq__49878 = G__49890;
chunk__49879 = G__49891;
count__49880 = G__49892;
i__49881 = G__49893;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));
