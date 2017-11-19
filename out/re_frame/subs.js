// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
goog.require('re_frame.trace');
re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Causes all subscriptions to be removed from the cache.
 *   Does this by:
 *   1. running on-dispose on all cached subscriptions
 *   2. These on-dispose will then do the removal of themselves.
 * 
 *   This is a development time tool. Useful when reloading Figwheel code
 *   after a React exception, because React components won't have been
 *   cleaned up properly. And this, in turn, means the subscriptions within those
 *   components won't have been cleaned up correctly. So this forces the issue.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__49943_49953 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
var chunk__49944_49954 = null;
var count__49945_49955 = (0);
var i__49946_49956 = (0);
while(true){
if((i__49946_49956 < count__49945_49955)){
var vec__49947_49957 = cljs.core._nth.call(null,chunk__49944_49954,i__49946_49956);
var k_49958 = cljs.core.nth.call(null,vec__49947_49957,(0),null);
var rxn_49959 = cljs.core.nth.call(null,vec__49947_49957,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_49959);

var G__49960 = seq__49943_49953;
var G__49961 = chunk__49944_49954;
var G__49962 = count__49945_49955;
var G__49963 = (i__49946_49956 + (1));
seq__49943_49953 = G__49960;
chunk__49944_49954 = G__49961;
count__49945_49955 = G__49962;
i__49946_49956 = G__49963;
continue;
} else {
var temp__4657__auto___49964 = cljs.core.seq.call(null,seq__49943_49953);
if(temp__4657__auto___49964){
var seq__49943_49965__$1 = temp__4657__auto___49964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49943_49965__$1)){
var c__44195__auto___49966 = cljs.core.chunk_first.call(null,seq__49943_49965__$1);
var G__49967 = cljs.core.chunk_rest.call(null,seq__49943_49965__$1);
var G__49968 = c__44195__auto___49966;
var G__49969 = cljs.core.count.call(null,c__44195__auto___49966);
var G__49970 = (0);
seq__49943_49953 = G__49967;
chunk__49944_49954 = G__49968;
count__49945_49955 = G__49969;
i__49946_49956 = G__49970;
continue;
} else {
var vec__49950_49971 = cljs.core.first.call(null,seq__49943_49965__$1);
var k_49972 = cljs.core.nth.call(null,vec__49950_49971,(0),null);
var rxn_49973 = cljs.core.nth.call(null,vec__49950_49971,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_49973);

var G__49974 = cljs.core.next.call(null,seq__49943_49965__$1);
var G__49975 = null;
var G__49976 = (0);
var G__49977 = (0);
seq__49943_49953 = G__49974;
chunk__49944_49954 = G__49975;
count__49945_49955 = G__49976;
i__49946_49956 = G__49977;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Subscription cache should be empty after clearing it.");
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.call(null,re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_.call(null);
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_49978 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__49646__auto___49991 = re_frame.interop.now.call(null);
var duration__49647__auto___49992 = (end__49646__auto___49991 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__49979_49993 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__49980_49994 = null;
var count__49981_49995 = (0);
var i__49982_49996 = (0);
while(true){
if((i__49982_49996 < count__49981_49995)){
var vec__49983_49997 = cljs.core._nth.call(null,chunk__49980_49994,i__49982_49996);
var k__49648__auto___49998 = cljs.core.nth.call(null,vec__49983_49997,(0),null);
var cb__49649__auto___49999 = cljs.core.nth.call(null,vec__49983_49997,(1),null);
try{cb__49649__auto___49999.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__49647__auto___49992,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e49986){if((e49986 instanceof java.lang.Exception)){
var e__49650__auto___50000 = e49986;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__49648__auto___49998,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__49650__auto___50000);
} else {
throw e49986;

}
}
var G__50001 = seq__49979_49993;
var G__50002 = chunk__49980_49994;
var G__50003 = count__49981_49995;
var G__50004 = (i__49982_49996 + (1));
seq__49979_49993 = G__50001;
chunk__49980_49994 = G__50002;
count__49981_49995 = G__50003;
i__49982_49996 = G__50004;
continue;
} else {
var temp__4657__auto___50005 = cljs.core.seq.call(null,seq__49979_49993);
if(temp__4657__auto___50005){
var seq__49979_50006__$1 = temp__4657__auto___50005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49979_50006__$1)){
var c__44195__auto___50007 = cljs.core.chunk_first.call(null,seq__49979_50006__$1);
var G__50008 = cljs.core.chunk_rest.call(null,seq__49979_50006__$1);
var G__50009 = c__44195__auto___50007;
var G__50010 = cljs.core.count.call(null,c__44195__auto___50007);
var G__50011 = (0);
seq__49979_49993 = G__50008;
chunk__49980_49994 = G__50009;
count__49981_49995 = G__50010;
i__49982_49996 = G__50011;
continue;
} else {
var vec__49987_50012 = cljs.core.first.call(null,seq__49979_50006__$1);
var k__49648__auto___50013 = cljs.core.nth.call(null,vec__49987_50012,(0),null);
var cb__49649__auto___50014 = cljs.core.nth.call(null,vec__49987_50012,(1),null);
try{cb__49649__auto___50014.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__49647__auto___49992,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e49990){if((e49990 instanceof java.lang.Exception)){
var e__49650__auto___50015 = e49990;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__49648__auto___50013,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__49650__auto___50015);
} else {
throw e49990;

}
}
var G__50016 = cljs.core.next.call(null,seq__49979_50006__$1);
var G__50017 = null;
var G__50018 = (0);
var G__50019 = (0);
seq__49979_49993 = G__50016;
chunk__49980_49994 = G__50017;
count__49981_49995 = G__50018;
i__49982_49996 = G__50019;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_49978;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__49651__auto___50020 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__49651__auto___50020;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var G__50022 = arguments.length;
switch (G__50022) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Given a `query`, returns a Reagent `reaction` which, over
 *   time, reactively delivers a stream of values. So in FRP-ish terms,
 *   it returns a Signal.
 * 
 *   To obtain the returned Signal/Stream's current value, it must be `deref`ed.
 * 
 *   `query` is a vector of at least one element. The first element is the
 *   `query-id`, typically a namespaced keyword. The rest of the vector's
 *   elements are optional, additional values which parameterise the query
 *   performed.
 * 
 *   `dynv` is an optional 3rd argument, `which is a vector of further input
 *   signals (atoms, reactions, etc), NOT values. This argument exists for
 *   historical reasons and is borderline deprecated these days.
 * 
 *   Example Usage:
 *   --------------
 * 
 *  (subscribe [:items])
 *  (subscribe [:items "blue" :small])
 *  (subscribe [:items {:colour "blue"  :size :small}])
 * 
 *   Note: for any given call to `subscribe` there must have been a previous call
 *   to `reg-sub`, registering the query handler (function) for the `query-id` given.
 * 
 *   Hint
 *   ----
 * 
 *   When used in a view function BE SURE to `deref` the returned value.
 *   In fact, to avoid any mistakes, some prefer to define:
 * 
 *   (def <sub  (comp deref re-frame.core/subscribe))
 * 
 *   And then, within their views, they call  `(<sub [:items :small])` rather
 *   than using `subscribe` directly.
 * 
 *   De-duplication
 *   --------------
 * 
 *   XXX
 *   
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var G__50025 = arguments.length;
switch (G__50025) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_50026 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__49651__auto___50053 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__49651__auto___50053;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__49651__auto___50054 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__49651__auto___50054;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__49651__auto___50055 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__49651__auto___50055;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__49646__auto___50056 = re_frame.interop.now.call(null);
var duration__49647__auto___50057 = (end__49646__auto___50056 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__50027_50058 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__50028_50059 = null;
var count__50029_50060 = (0);
var i__50030_50061 = (0);
while(true){
if((i__50030_50061 < count__50029_50060)){
var vec__50031_50062 = cljs.core._nth.call(null,chunk__50028_50059,i__50030_50061);
var k__49648__auto___50063 = cljs.core.nth.call(null,vec__50031_50062,(0),null);
var cb__49649__auto___50064 = cljs.core.nth.call(null,vec__50031_50062,(1),null);
try{cb__49649__auto___50064.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__49647__auto___50057,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e50034){if((e50034 instanceof java.lang.Exception)){
var e__49650__auto___50065 = e50034;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__49648__auto___50063,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__49650__auto___50065);
} else {
throw e50034;

}
}
var G__50066 = seq__50027_50058;
var G__50067 = chunk__50028_50059;
var G__50068 = count__50029_50060;
var G__50069 = (i__50030_50061 + (1));
seq__50027_50058 = G__50066;
chunk__50028_50059 = G__50067;
count__50029_50060 = G__50068;
i__50030_50061 = G__50069;
continue;
} else {
var temp__4657__auto___50070 = cljs.core.seq.call(null,seq__50027_50058);
if(temp__4657__auto___50070){
var seq__50027_50071__$1 = temp__4657__auto___50070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50027_50071__$1)){
var c__44195__auto___50072 = cljs.core.chunk_first.call(null,seq__50027_50071__$1);
var G__50073 = cljs.core.chunk_rest.call(null,seq__50027_50071__$1);
var G__50074 = c__44195__auto___50072;
var G__50075 = cljs.core.count.call(null,c__44195__auto___50072);
var G__50076 = (0);
seq__50027_50058 = G__50073;
chunk__50028_50059 = G__50074;
count__50029_50060 = G__50075;
i__50030_50061 = G__50076;
continue;
} else {
var vec__50035_50077 = cljs.core.first.call(null,seq__50027_50071__$1);
var k__49648__auto___50078 = cljs.core.nth.call(null,vec__50035_50077,(0),null);
var cb__49649__auto___50079 = cljs.core.nth.call(null,vec__50035_50077,(1),null);
try{cb__49649__auto___50079.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__49647__auto___50057,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e50038){if((e50038 instanceof java.lang.Exception)){
var e__49650__auto___50080 = e50038;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__49648__auto___50078,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__49650__auto___50080);
} else {
throw e50038;

}
}
var G__50081 = cljs.core.next.call(null,seq__50027_50071__$1);
var G__50082 = null;
var G__50083 = (0);
var G__50084 = (0);
seq__50027_50058 = G__50081;
chunk__50028_50059 = G__50082;
count__50029_50060 = G__50083;
i__50030_50061 = G__50084;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_50026;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__49651__auto___50085 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__49651__auto___50085;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__49651__auto___50086 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__49651__auto___50086;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__49651__auto___50087 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__49651__auto___50087;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query));
}
}
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (query,dynv){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_50039 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__49651__auto___50088 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__49651__auto___50088;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__49651__auto___50089 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__49651__auto___50089;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___50090 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___50090)){
var not_reactive_50091 = temp__4657__auto___50090;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_50091);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__49651__auto___50092 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__49651__auto___50092;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_50039){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_50039))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_50039){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_50039))
);
return re_frame.subs.cache_and_return.call(null,query,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_50039){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_50039))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__49646__auto___50093 = re_frame.interop.now.call(null);
var duration__49647__auto___50094 = (end__49646__auto___50093 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__50040_50095 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__50041_50096 = null;
var count__50042_50097 = (0);
var i__50043_50098 = (0);
while(true){
if((i__50043_50098 < count__50042_50097)){
var vec__50044_50099 = cljs.core._nth.call(null,chunk__50041_50096,i__50043_50098);
var k__49648__auto___50100 = cljs.core.nth.call(null,vec__50044_50099,(0),null);
var cb__49649__auto___50101 = cljs.core.nth.call(null,vec__50044_50099,(1),null);
try{cb__49649__auto___50101.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__49647__auto___50094,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e50047){if((e50047 instanceof java.lang.Exception)){
var e__49650__auto___50102 = e50047;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__49648__auto___50100,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__49650__auto___50102);
} else {
throw e50047;

}
}
var G__50103 = seq__50040_50095;
var G__50104 = chunk__50041_50096;
var G__50105 = count__50042_50097;
var G__50106 = (i__50043_50098 + (1));
seq__50040_50095 = G__50103;
chunk__50041_50096 = G__50104;
count__50042_50097 = G__50105;
i__50043_50098 = G__50106;
continue;
} else {
var temp__4657__auto___50107 = cljs.core.seq.call(null,seq__50040_50095);
if(temp__4657__auto___50107){
var seq__50040_50108__$1 = temp__4657__auto___50107;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50040_50108__$1)){
var c__44195__auto___50109 = cljs.core.chunk_first.call(null,seq__50040_50108__$1);
var G__50110 = cljs.core.chunk_rest.call(null,seq__50040_50108__$1);
var G__50111 = c__44195__auto___50109;
var G__50112 = cljs.core.count.call(null,c__44195__auto___50109);
var G__50113 = (0);
seq__50040_50095 = G__50110;
chunk__50041_50096 = G__50111;
count__50042_50097 = G__50112;
i__50043_50098 = G__50113;
continue;
} else {
var vec__50048_50114 = cljs.core.first.call(null,seq__50040_50108__$1);
var k__49648__auto___50115 = cljs.core.nth.call(null,vec__50048_50114,(0),null);
var cb__49649__auto___50116 = cljs.core.nth.call(null,vec__50048_50114,(1),null);
try{cb__49649__auto___50116.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__49647__auto___50094,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e50051){if((e50051 instanceof java.lang.Exception)){
var e__49650__auto___50117 = e50051;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__49648__auto___50115,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__49650__auto___50117);
} else {
throw e50051;

}
}
var G__50118 = cljs.core.next.call(null,seq__50040_50108__$1);
var G__50119 = null;
var G__50120 = (0);
var G__50121 = (0);
seq__50040_50095 = G__50118;
chunk__50041_50096 = G__50119;
count__50042_50097 = G__50120;
i__50043_50098 = G__50121;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_50039;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__49651__auto___50122 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__49651__auto___50122;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__49651__auto___50123 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__49651__auto___50123;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___50124 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___50124)){
var not_reactive_50125 = temp__4657__auto___50124;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_50125);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__49651__auto___50126 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__49651__auto___50126;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return re_frame.subs.cache_and_return.call(null,query,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__))
));
}
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__50127){
var vec__50128 = p__50127;
var k = cljs.core.nth.call(null,vec__50128,(0),null);
var v = cljs.core.nth.call(null,vec__50128,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__49651__auto___50131 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__49651__auto___50131;

} else {
}

return signals__$1;
});
/**
 * For a given `query-id`, register a `computation` function and input `signals`.
 * 
 *   At an abstract level, a call to this function allows you to register 'the mechanism'
 *   to later fulfil a call to `(subscribe [query-id ...])`.
 * 
 *   To say that another way, reg-sub allows you to create a template for a node
 *   in the signal graph. But note: reg-sub does not cause a node to be created.
 *   It simply allows you to register the template from which such a
 *   node could be created, if it were needed, sometime later, when the call
 *   to `subscribe` is made.
 * 
 *   reg-sub needs three things:
 *  - a `query-id`
 *  - the required inputs for this node
 *  - a computation function for this node
 * 
 *   The `query-id` is always the 1st argument to reg-sub and it is typically
 *   a namespaced keyword.
 * 
 *   A computation function is always the last argument and it has this general form:
 *  `(input-signals, query-vector) -> a-value`
 * 
 *   What goes in between the 1st and last args can vary, but whatever is there will
 *   define the input signals part of the template, and, as a result, it will control
 *   what values the computation functions gets as a first argument.
 * 
 *   There's 3 ways this function can be called - 3 ways to supply input signals:
 * 
 *   1. No input signals given:
 * 
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; (fn [db v]  ... a-value)
 * 
 *   The node's input signal defaults to `app-db`, and the value within `app-db` is
 *   is given as the 1st argument to the computation function.
 * 
 *   2. A signal function is supplied:
 * 
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here
 *     computation-fn)
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many, or a map with the signals as the values.
 * 
 *   The values from the nominated signals will be supplied as the 1st argument to the
 *   computation function - either a singleton, sequence or map of them, paralleling
 *   the structure returned by the signal function.
 * 
 *   Here, is an example signal-fn, which returns a vector of input signals.
 * 
 *     (fn [query-vec dynamic-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 * 
 *   For that signal function, the computation function must be written
 *   to expect a vector of values for its first argument.
 *     (fn [[a b] _] ....)
 * 
 *   If the signal function was simpler and returned a singleton, like this:
 *      (fn [query-vec dynamic-vec]
 *        (subscribe [:a-sub]))
 * 
 *   then the computation function must be written to expect a single value
 *   as the 1st argument:
 * 
 *      (fn [a _] ...)
 * 
 *   3. Syntax Sugar
 * 
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   This 3rd variation is syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. Each pair starts with a `:<-` and a subscription
 *   vector follows.
 * 
 *   For further understanding, read `/docs`, and look at the detailed comments in
 *   /examples/todomvc/src/subs.cljs
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__44534__auto__ = [];
var len__44527__auto___50164 = arguments.length;
var i__44528__auto___50165 = (0);
while(true){
if((i__44528__auto___50165 < len__44527__auto___50164)){
args__44534__auto__.push((arguments[i__44528__auto___50165]));

var G__50166 = (i__44528__auto___50165 + (1));
i__44528__auto___50165 = G__50166;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((1) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44535__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = ["re-frame: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__50134 = cljs.core.count.call(null,input_args);
switch (G__50134) {
case (0):
return ((function (G__50134,computation_fn,input_args,err_header){
return (function() {
var G__50168 = null;
var G__50168__1 = (function (_){
return re_frame.db.app_db;
});
var G__50168__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__50168 = function(_,___$1){
switch(arguments.length){
case 1:
return G__50168__1.call(this,_);
case 2:
return G__50168__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__50168.cljs$core$IFn$_invoke$arity$1 = G__50168__1;
G__50168.cljs$core$IFn$_invoke$arity$2 = G__50168__2;
return G__50168;
})()
;})(G__50134,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
var vec__50135 = input_args;
var marker = cljs.core.nth.call(null,vec__50135,(0),null);
var vec = cljs.core.nth.call(null,vec__50135,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected :<-, got:",marker);
}

return ((function (vec__50135,marker,vec,G__50134,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.call(null,vec);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.call(null,vec);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(vec__50135,marker,vec,G__50134,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var markers = cljs.core.map.call(null,cljs.core.first,pairs);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if((cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs))){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,markers,vecs,G__50134,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__50134,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler.call(null,re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_50138 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{var subscription = computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__49651__auto___50169 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__49651__auto___50169;

} else {
}

return subscription;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__49646__auto___50170 = re_frame.interop.now.call(null);
var duration__49647__auto___50171 = (end__49646__auto___50170 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__50139_50172 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__50140_50173 = null;
var count__50141_50174 = (0);
var i__50142_50175 = (0);
while(true){
if((i__50142_50175 < count__50141_50174)){
var vec__50143_50176 = cljs.core._nth.call(null,chunk__50140_50173,i__50142_50175);
var k__49648__auto___50177 = cljs.core.nth.call(null,vec__50143_50176,(0),null);
var cb__49649__auto___50178 = cljs.core.nth.call(null,vec__50143_50176,(1),null);
try{cb__49649__auto___50178.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__49647__auto___50171,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e50146){if((e50146 instanceof java.lang.Exception)){
var e__49650__auto___50179 = e50146;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__49648__auto___50177,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__49650__auto___50179);
} else {
throw e50146;

}
}
var G__50180 = seq__50139_50172;
var G__50181 = chunk__50140_50173;
var G__50182 = count__50141_50174;
var G__50183 = (i__50142_50175 + (1));
seq__50139_50172 = G__50180;
chunk__50140_50173 = G__50181;
count__50141_50174 = G__50182;
i__50142_50175 = G__50183;
continue;
} else {
var temp__4657__auto___50184 = cljs.core.seq.call(null,seq__50139_50172);
if(temp__4657__auto___50184){
var seq__50139_50185__$1 = temp__4657__auto___50184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50139_50185__$1)){
var c__44195__auto___50186 = cljs.core.chunk_first.call(null,seq__50139_50185__$1);
var G__50187 = cljs.core.chunk_rest.call(null,seq__50139_50185__$1);
var G__50188 = c__44195__auto___50186;
var G__50189 = cljs.core.count.call(null,c__44195__auto___50186);
var G__50190 = (0);
seq__50139_50172 = G__50187;
chunk__50140_50173 = G__50188;
count__50141_50174 = G__50189;
i__50142_50175 = G__50190;
continue;
} else {
var vec__50147_50191 = cljs.core.first.call(null,seq__50139_50185__$1);
var k__49648__auto___50192 = cljs.core.nth.call(null,vec__50147_50191,(0),null);
var cb__49649__auto___50193 = cljs.core.nth.call(null,vec__50147_50191,(1),null);
try{cb__49649__auto___50193.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__49647__auto___50171,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e50150){if((e50150 instanceof java.lang.Exception)){
var e__49650__auto___50194 = e50150;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__49648__auto___50192,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__49650__auto___50194);
} else {
throw e50150;

}
}
var G__50195 = cljs.core.next.call(null,seq__50139_50185__$1);
var G__50196 = null;
var G__50197 = (0);
var G__50198 = (0);
seq__50139_50172 = G__50195;
chunk__50140_50173 = G__50196;
count__50141_50174 = G__50197;
i__50142_50175 = G__50198;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_50138;
}} else {
var subscription = computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__49651__auto___50199 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__49651__auto___50199;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_50151 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{var subscription = computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__49651__auto___50200 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__49651__auto___50200;

} else {
}

return subscription;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__49646__auto___50201 = re_frame.interop.now.call(null);
var duration__49647__auto___50202 = (end__49646__auto___50201 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__50152_50203 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__50153_50204 = null;
var count__50154_50205 = (0);
var i__50155_50206 = (0);
while(true){
if((i__50155_50206 < count__50154_50205)){
var vec__50156_50207 = cljs.core._nth.call(null,chunk__50153_50204,i__50155_50206);
var k__49648__auto___50208 = cljs.core.nth.call(null,vec__50156_50207,(0),null);
var cb__49649__auto___50209 = cljs.core.nth.call(null,vec__50156_50207,(1),null);
try{cb__49649__auto___50209.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__49647__auto___50202,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e50159){if((e50159 instanceof java.lang.Exception)){
var e__49650__auto___50210 = e50159;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__49648__auto___50208,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__49650__auto___50210);
} else {
throw e50159;

}
}
var G__50211 = seq__50152_50203;
var G__50212 = chunk__50153_50204;
var G__50213 = count__50154_50205;
var G__50214 = (i__50155_50206 + (1));
seq__50152_50203 = G__50211;
chunk__50153_50204 = G__50212;
count__50154_50205 = G__50213;
i__50155_50206 = G__50214;
continue;
} else {
var temp__4657__auto___50215 = cljs.core.seq.call(null,seq__50152_50203);
if(temp__4657__auto___50215){
var seq__50152_50216__$1 = temp__4657__auto___50215;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50152_50216__$1)){
var c__44195__auto___50217 = cljs.core.chunk_first.call(null,seq__50152_50216__$1);
var G__50218 = cljs.core.chunk_rest.call(null,seq__50152_50216__$1);
var G__50219 = c__44195__auto___50217;
var G__50220 = cljs.core.count.call(null,c__44195__auto___50217);
var G__50221 = (0);
seq__50152_50203 = G__50218;
chunk__50153_50204 = G__50219;
count__50154_50205 = G__50220;
i__50155_50206 = G__50221;
continue;
} else {
var vec__50160_50222 = cljs.core.first.call(null,seq__50152_50216__$1);
var k__49648__auto___50223 = cljs.core.nth.call(null,vec__50160_50222,(0),null);
var cb__49649__auto___50224 = cljs.core.nth.call(null,vec__50160_50222,(1),null);
try{cb__49649__auto___50224.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__49647__auto___50202,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e50163){if((e50163 instanceof java.lang.Exception)){
var e__49650__auto___50225 = e50163;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__49648__auto___50223,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__49650__auto___50225);
} else {
throw e50163;

}
}
var G__50226 = cljs.core.next.call(null,seq__50152_50216__$1);
var G__50227 = null;
var G__50228 = (0);
var G__50229 = (0);
seq__50152_50203 = G__50226;
chunk__50153_50204 = G__50227;
count__50154_50205 = G__50228;
i__50155_50206 = G__50229;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_50151;
}} else {
var subscription = computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__49651__auto___50230 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__49651__auto___50230;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq50132){
var G__50133 = cljs.core.first.call(null,seq50132);
var seq50132__$1 = cljs.core.next.call(null,seq50132);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__50133,seq50132__$1);
});

