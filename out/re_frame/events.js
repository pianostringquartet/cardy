// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__49696_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__49696_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__4657__auto___49697 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___49697)){
var not_i_49698 = temp__4657__auto___49697;
if(cljs.core.fn_QMARK_.call(null,not_i_49698)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_49698);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_49698);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_49699 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_49700 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__49646__auto___49713 = re_frame.interop.now.call(null);
var duration__49647__auto___49714 = (end__49646__auto___49713 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__49701_49715 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__49702_49716 = null;
var count__49703_49717 = (0);
var i__49704_49718 = (0);
while(true){
if((i__49704_49718 < count__49703_49717)){
var vec__49705_49719 = cljs.core._nth.call(null,chunk__49702_49716,i__49704_49718);
var k__49648__auto___49720 = cljs.core.nth.call(null,vec__49705_49719,(0),null);
var cb__49649__auto___49721 = cljs.core.nth.call(null,vec__49705_49719,(1),null);
try{cb__49649__auto___49721.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__49647__auto___49714,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e49708){if((e49708 instanceof java.lang.Exception)){
var e__49650__auto___49722 = e49708;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__49648__auto___49720,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__49650__auto___49722);
} else {
throw e49708;

}
}
var G__49723 = seq__49701_49715;
var G__49724 = chunk__49702_49716;
var G__49725 = count__49703_49717;
var G__49726 = (i__49704_49718 + (1));
seq__49701_49715 = G__49723;
chunk__49702_49716 = G__49724;
count__49703_49717 = G__49725;
i__49704_49718 = G__49726;
continue;
} else {
var temp__4657__auto___49727 = cljs.core.seq.call(null,seq__49701_49715);
if(temp__4657__auto___49727){
var seq__49701_49728__$1 = temp__4657__auto___49727;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49701_49728__$1)){
var c__44195__auto___49729 = cljs.core.chunk_first.call(null,seq__49701_49728__$1);
var G__49730 = cljs.core.chunk_rest.call(null,seq__49701_49728__$1);
var G__49731 = c__44195__auto___49729;
var G__49732 = cljs.core.count.call(null,c__44195__auto___49729);
var G__49733 = (0);
seq__49701_49715 = G__49730;
chunk__49702_49716 = G__49731;
count__49703_49717 = G__49732;
i__49704_49718 = G__49733;
continue;
} else {
var vec__49709_49734 = cljs.core.first.call(null,seq__49701_49728__$1);
var k__49648__auto___49735 = cljs.core.nth.call(null,vec__49709_49734,(0),null);
var cb__49649__auto___49736 = cljs.core.nth.call(null,vec__49709_49734,(1),null);
try{cb__49649__auto___49736.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__49647__auto___49714,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e49712){if((e49712 instanceof java.lang.Exception)){
var e__49650__auto___49737 = e49712;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__49648__auto___49735,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__49650__auto___49737);
} else {
throw e49712;

}
}
var G__49738 = cljs.core.next.call(null,seq__49701_49728__$1);
var G__49739 = null;
var G__49740 = (0);
var G__49741 = (0);
seq__49701_49715 = G__49738;
chunk__49702_49716 = G__49739;
count__49703_49717 = G__49740;
i__49704_49718 = G__49741;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_49700;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_49699;
}}
} else {
return null;
}
});
