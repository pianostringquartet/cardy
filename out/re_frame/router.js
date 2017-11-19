// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('re_frame.events');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.router.later_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816),(function (f){
return re_frame.interop.after_render.call(null,(function (){
return re_frame.interop.next_tick.call(null,f);
}));
}),new cljs.core.Keyword(null,"yield","yield",177875009),re_frame.interop.next_tick], null);

/**
 * @interface
 */
re_frame.router.IEventQueue = function(){};

re_frame.router.push = (function re_frame$router$push(this$,event){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$push$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$push$arity$2(this$,event);
} else {
var x__44039__auto__ = (((this$ == null))?null:this$);
var m__44040__auto__ = (re_frame.router.push[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,this$,event);
} else {
var m__44040__auto____$1 = (re_frame.router.push["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.push",this$);
}
}
}
});

re_frame.router.add_post_event_callback = (function re_frame$router$add_post_event_callback(this$,id,callack){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$add_post_event_callback$arity$3 == null)))){
return this$.re_frame$router$IEventQueue$add_post_event_callback$arity$3(this$,id,callack);
} else {
var x__44039__auto__ = (((this$ == null))?null:this$);
var m__44040__auto__ = (re_frame.router.add_post_event_callback[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,this$,id,callack);
} else {
var m__44040__auto____$1 = (re_frame.router.add_post_event_callback["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,this$,id,callack);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.add-post-event-callback",this$);
}
}
}
});

re_frame.router.remove_post_event_callback = (function re_frame$router$remove_post_event_callback(this$,f){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$remove_post_event_callback$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$remove_post_event_callback$arity$2(this$,f);
} else {
var x__44039__auto__ = (((this$ == null))?null:this$);
var m__44040__auto__ = (re_frame.router.remove_post_event_callback[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,this$,f);
} else {
var m__44040__auto____$1 = (re_frame.router.remove_post_event_callback["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,this$,f);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.remove-post-event-callback",this$);
}
}
}
});

re_frame.router._fsm_trigger = (function re_frame$router$_fsm_trigger(this$,trigger,arg){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_fsm_trigger$arity$3 == null)))){
return this$.re_frame$router$IEventQueue$_fsm_trigger$arity$3(this$,trigger,arg);
} else {
var x__44039__auto__ = (((this$ == null))?null:this$);
var m__44040__auto__ = (re_frame.router._fsm_trigger[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,this$,trigger,arg);
} else {
var m__44040__auto____$1 = (re_frame.router._fsm_trigger["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,this$,trigger,arg);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-fsm-trigger",this$);
}
}
}
});

re_frame.router._add_event = (function re_frame$router$_add_event(this$,event){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_add_event$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_add_event$arity$2(this$,event);
} else {
var x__44039__auto__ = (((this$ == null))?null:this$);
var m__44040__auto__ = (re_frame.router._add_event[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,this$,event);
} else {
var m__44040__auto____$1 = (re_frame.router._add_event["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-add-event",this$);
}
}
}
});

re_frame.router._process_1st_event_in_queue = (function re_frame$router$_process_1st_event_in_queue(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(this$);
} else {
var x__44039__auto__ = (((this$ == null))?null:this$);
var m__44040__auto__ = (re_frame.router._process_1st_event_in_queue[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,this$);
} else {
var m__44040__auto____$1 = (re_frame.router._process_1st_event_in_queue["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-process-1st-event-in-queue",this$);
}
}
}
});

re_frame.router._run_next_tick = (function re_frame$router$_run_next_tick(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_run_next_tick$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_run_next_tick$arity$1(this$);
} else {
var x__44039__auto__ = (((this$ == null))?null:this$);
var m__44040__auto__ = (re_frame.router._run_next_tick[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,this$);
} else {
var m__44040__auto____$1 = (re_frame.router._run_next_tick["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-run-next-tick",this$);
}
}
}
});

re_frame.router._run_queue = (function re_frame$router$_run_queue(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_run_queue$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_run_queue$arity$1(this$);
} else {
var x__44039__auto__ = (((this$ == null))?null:this$);
var m__44040__auto__ = (re_frame.router._run_queue[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,this$);
} else {
var m__44040__auto____$1 = (re_frame.router._run_queue["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-run-queue",this$);
}
}
}
});

re_frame.router._exception = (function re_frame$router$_exception(this$,ex){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_exception$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_exception$arity$2(this$,ex);
} else {
var x__44039__auto__ = (((this$ == null))?null:this$);
var m__44040__auto__ = (re_frame.router._exception[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,this$,ex);
} else {
var m__44040__auto____$1 = (re_frame.router._exception["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,this$,ex);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-exception",this$);
}
}
}
});

re_frame.router._pause = (function re_frame$router$_pause(this$,later_fn){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_pause$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_pause$arity$2(this$,later_fn);
} else {
var x__44039__auto__ = (((this$ == null))?null:this$);
var m__44040__auto__ = (re_frame.router._pause[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,this$,later_fn);
} else {
var m__44040__auto____$1 = (re_frame.router._pause["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,this$,later_fn);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-pause",this$);
}
}
}
});

re_frame.router._resume = (function re_frame$router$_resume(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_resume$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_resume$arity$1(this$);
} else {
var x__44039__auto__ = (((this$ == null))?null:this$);
var m__44040__auto__ = (re_frame.router._resume[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,this$);
} else {
var m__44040__auto____$1 = (re_frame.router._resume["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-resume",this$);
}
}
}
});

re_frame.router._call_post_event_callbacks = (function re_frame$router$_call_post_event_callbacks(this$,event){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(this$,event);
} else {
var x__44039__auto__ = (((this$ == null))?null:this$);
var m__44040__auto__ = (re_frame.router._call_post_event_callbacks[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,this$,event);
} else {
var m__44040__auto____$1 = (re_frame.router._call_post_event_callbacks["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-call-post-event-callbacks",this$);
}
}
}
});


/**
* @constructor
 * @implements {re_frame.router.IEventQueue}
*/
re_frame.router.EventQueue = (function (fsm_state,queue,post_event_callback_fns){
this.fsm_state = fsm_state;
this.queue = queue;
this.post_event_callback_fns = post_event_callback_fns;
});
re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$ = cljs.core.PROTOCOL_SENTINEL;

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var n = cljs.core.count.call(null,self__.queue);
while(true){
if((n === (0))){
return re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"finish-run","finish-run",753148477),null);
} else {
var temp__4655__auto__ = cljs.core.some.call(null,re_frame.router.later_fns,cljs.core.keys.call(null,cljs.core.meta.call(null,cljs.core.peek.call(null,self__.queue))));
if(cljs.core.truth_(temp__4655__auto__)){
var later_fn = temp__4655__auto__;
return re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"pause","pause",-2095325672),later_fn);
} else {
re_frame.router._process_1st_event_in_queue.call(null,this$__$1);

var G__49770 = (n - (1));
n = G__49770;
continue;
}
}
break;
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$remove_post_event_callback$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.contains_QMARK_.call(null,self__.post_event_callback_fns,id))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: could not remove post event call back with id:",id);
} else {
return self__.post_event_callback_fns = cljs.core.dissoc.call(null,self__.post_event_callback_fns,id);
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_add_event$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
return self__.queue = cljs.core.conj.call(null,self__.queue,event);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_resume$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
re_frame.router._process_1st_event_in_queue.call(null,this$__$1);

return re_frame.router._run_queue.call(null,this$__$1);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$push$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"add-event","add-event",938429088),event);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_next_tick$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return re_frame.interop.next_tick.call(null,((function (this$__$1){
return (function (){
return re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027),null);
});})(this$__$1))
);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_fsm_trigger$arity$3 = (function (this$,trigger,arg){
var self__ = this;
var this$__$1 = this;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_49744 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("re-frame.router","fsm-trigger","re-frame.router/fsm-trigger",1379787274)], null));

try{try{var vec__49757 = (function (){var G__49760 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__49760)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__49760,_STAR_current_trace_STAR_49744,this$__$1){
return (function (){
re_frame.router._add_event.call(null,this$__$1,arg);

return re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__49760,_STAR_current_trace_STAR_49744,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__49760)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__49760,_STAR_current_trace_STAR_49744,this$__$1){
return (function (){
return re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__49760,_STAR_current_trace_STAR_49744,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027)], null),G__49760)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__49760,_STAR_current_trace_STAR_49744,this$__$1){
return (function (){
return re_frame.router._run_queue.call(null,this$__$1);
});})(G__49760,_STAR_current_trace_STAR_49744,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__49760)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__49760,_STAR_current_trace_STAR_49744,this$__$1){
return (function (){
return re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__49760,_STAR_current_trace_STAR_49744,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"pause","pause",-2095325672)], null),G__49760)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__49760,_STAR_current_trace_STAR_49744,this$__$1){
return (function (){
return re_frame.router._pause.call(null,this$__$1,arg);
});})(G__49760,_STAR_current_trace_STAR_49744,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),G__49760)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),((function (G__49760,_STAR_current_trace_STAR_49744,this$__$1){
return (function (){
return re_frame.router._exception.call(null,this$__$1,arg);
});})(G__49760,_STAR_current_trace_STAR_49744,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"finish-run","finish-run",753148477)], null),G__49760)){
if(cljs.core.empty_QMARK_.call(null,self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__49760,_STAR_current_trace_STAR_49744,this$__$1){
return (function (){
return re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__49760,_STAR_current_trace_STAR_49744,this$__$1))
], null);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__49760)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__49760,_STAR_current_trace_STAR_49744,this$__$1){
return (function (){
return re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__49760,_STAR_current_trace_STAR_49744,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"resume","resume",-118572261)], null),G__49760)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__49760,_STAR_current_trace_STAR_49744,this$__$1){
return (function (){
return re_frame.router._resume.call(null,this$__$1);
});})(G__49760,_STAR_current_trace_STAR_49744,this$__$1))
], null);
} else {
throw cljs.core.ex_info.call(null,["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fsm-state","fsm-state",1656310533),self__.fsm_state,new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.call(null,vec__49757,(0),null);
var action_fn = cljs.core.nth.call(null,vec__49757,(1),null);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__49651__auto___49771 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__49651__auto___49771;

} else {
}

self__.fsm_state = new_fsm_state;

if(cljs.core.truth_(action_fn)){
return action_fn.call(null);
} else {
return null;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__49646__auto___49772 = re_frame.interop.now.call(null);
var duration__49647__auto___49773 = (end__49646__auto___49772 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__49745_49774 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__49746_49775 = null;
var count__49747_49776 = (0);
var i__49748_49777 = (0);
while(true){
if((i__49748_49777 < count__49747_49776)){
var vec__49749_49778 = cljs.core._nth.call(null,chunk__49746_49775,i__49748_49777);
var k__49648__auto___49779 = cljs.core.nth.call(null,vec__49749_49778,(0),null);
var cb__49649__auto___49780 = cljs.core.nth.call(null,vec__49749_49778,(1),null);
try{cb__49649__auto___49780.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__49647__auto___49773,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e49752){if((e49752 instanceof java.lang.Exception)){
var e__49650__auto___49781 = e49752;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__49648__auto___49779,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__49650__auto___49781);
} else {
throw e49752;

}
}
var G__49782 = seq__49745_49774;
var G__49783 = chunk__49746_49775;
var G__49784 = count__49747_49776;
var G__49785 = (i__49748_49777 + (1));
seq__49745_49774 = G__49782;
chunk__49746_49775 = G__49783;
count__49747_49776 = G__49784;
i__49748_49777 = G__49785;
continue;
} else {
var temp__4657__auto___49786 = cljs.core.seq.call(null,seq__49745_49774);
if(temp__4657__auto___49786){
var seq__49745_49787__$1 = temp__4657__auto___49786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49745_49787__$1)){
var c__44195__auto___49788 = cljs.core.chunk_first.call(null,seq__49745_49787__$1);
var G__49789 = cljs.core.chunk_rest.call(null,seq__49745_49787__$1);
var G__49790 = c__44195__auto___49788;
var G__49791 = cljs.core.count.call(null,c__44195__auto___49788);
var G__49792 = (0);
seq__49745_49774 = G__49789;
chunk__49746_49775 = G__49790;
count__49747_49776 = G__49791;
i__49748_49777 = G__49792;
continue;
} else {
var vec__49753_49793 = cljs.core.first.call(null,seq__49745_49787__$1);
var k__49648__auto___49794 = cljs.core.nth.call(null,vec__49753_49793,(0),null);
var cb__49649__auto___49795 = cljs.core.nth.call(null,vec__49753_49793,(1),null);
try{cb__49649__auto___49795.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__49647__auto___49773,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e49756){if((e49756 instanceof java.lang.Exception)){
var e__49650__auto___49796 = e49756;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__49648__auto___49794,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__49650__auto___49796);
} else {
throw e49756;

}
}
var G__49797 = cljs.core.next.call(null,seq__49745_49787__$1);
var G__49798 = null;
var G__49799 = (0);
var G__49800 = (0);
seq__49745_49774 = G__49797;
chunk__49746_49775 = G__49798;
count__49747_49776 = G__49799;
i__49748_49777 = G__49800;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_49744;
}} else {
var vec__49761 = (function (){var G__49764 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__49764)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__49764,this$__$1){
return (function (){
re_frame.router._add_event.call(null,this$__$1,arg);

return re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__49764,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__49764)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__49764,this$__$1){
return (function (){
return re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__49764,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027)], null),G__49764)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__49764,this$__$1){
return (function (){
return re_frame.router._run_queue.call(null,this$__$1);
});})(G__49764,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__49764)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__49764,this$__$1){
return (function (){
return re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__49764,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"pause","pause",-2095325672)], null),G__49764)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__49764,this$__$1){
return (function (){
return re_frame.router._pause.call(null,this$__$1,arg);
});})(G__49764,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),G__49764)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),((function (G__49764,this$__$1){
return (function (){
return re_frame.router._exception.call(null,this$__$1,arg);
});})(G__49764,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"finish-run","finish-run",753148477)], null),G__49764)){
if(cljs.core.empty_QMARK_.call(null,self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__49764,this$__$1){
return (function (){
return re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__49764,this$__$1))
], null);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__49764)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__49764,this$__$1){
return (function (){
return re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__49764,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"resume","resume",-118572261)], null),G__49764)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__49764,this$__$1){
return (function (){
return re_frame.router._resume.call(null,this$__$1);
});})(G__49764,this$__$1))
], null);
} else {
throw cljs.core.ex_info.call(null,["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fsm-state","fsm-state",1656310533),self__.fsm_state,new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.call(null,vec__49761,(0),null);
var action_fn = cljs.core.nth.call(null,vec__49761,(1),null);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__49651__auto___49801 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__49651__auto___49801;

} else {
}

self__.fsm_state = new_fsm_state;

if(cljs.core.truth_(action_fn)){
return action_fn.call(null);
} else {
return null;
}
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_pause$arity$2 = (function (this$,later_fn){
var self__ = this;
var this$__$1 = this;
return later_fn.call(null,((function (this$__$1){
return (function (){
return re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"resume","resume",-118572261),null);
});})(this$__$1))
);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$add_post_event_callback$arity$3 = (function (_,id,callback_fn){
var self__ = this;
var ___$1 = this;
if(cljs.core.contains_QMARK_.call(null,self__.post_event_callback_fns,id)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: overwriting existing post event call back with id:",id);
} else {
}

return self__.post_event_callback_fns = cljs.core.assoc.call(null,self__.post_event_callback_fns,id,callback_fn);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_v = cljs.core.peek.call(null,self__.queue);
try{re_frame.events.handle.call(null,event_v);

self__.queue = cljs.core.pop.call(null,self__.queue);

return re_frame.router._call_post_event_callbacks.call(null,this$__$1,event_v);
}catch (e49765){var ex = e49765;
return re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"exception","exception",-335277064),ex);
}});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 = (function (_,event_v){
var self__ = this;
var ___$1 = this;
var seq__49766 = cljs.core.seq.call(null,cljs.core.vals.call(null,self__.post_event_callback_fns));
var chunk__49767 = null;
var count__49768 = (0);
var i__49769 = (0);
while(true){
if((i__49769 < count__49768)){
var callback = cljs.core._nth.call(null,chunk__49767,i__49769);
callback.call(null,event_v,self__.queue);

var G__49802 = seq__49766;
var G__49803 = chunk__49767;
var G__49804 = count__49768;
var G__49805 = (i__49769 + (1));
seq__49766 = G__49802;
chunk__49767 = G__49803;
count__49768 = G__49804;
i__49769 = G__49805;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49766);
if(temp__4657__auto__){
var seq__49766__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49766__$1)){
var c__44195__auto__ = cljs.core.chunk_first.call(null,seq__49766__$1);
var G__49806 = cljs.core.chunk_rest.call(null,seq__49766__$1);
var G__49807 = c__44195__auto__;
var G__49808 = cljs.core.count.call(null,c__44195__auto__);
var G__49809 = (0);
seq__49766 = G__49806;
chunk__49767 = G__49807;
count__49768 = G__49808;
i__49769 = G__49809;
continue;
} else {
var callback = cljs.core.first.call(null,seq__49766__$1);
callback.call(null,event_v,self__.queue);

var G__49810 = cljs.core.next.call(null,seq__49766__$1);
var G__49811 = null;
var G__49812 = (0);
var G__49813 = (0);
seq__49766 = G__49810;
chunk__49767 = G__49811;
count__49768 = G__49812;
i__49769 = G__49813;
continue;
}
} else {
return null;
}
}
break;
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_exception$arity$2 = (function (_,ex){
var self__ = this;
var ___$1 = this;
self__.queue = re_frame.interop.empty_queue;

throw ex;
});

re_frame.router.EventQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fsm-state","fsm-state",-998125236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"queue","queue",-1198599890,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"post-event-callback-fns","post-event-callback-fns",-297038335,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

re_frame.router.EventQueue.cljs$lang$type = true;

re_frame.router.EventQueue.cljs$lang$ctorStr = "re-frame.router/EventQueue";

re_frame.router.EventQueue.cljs$lang$ctorPrWriter = (function (this__43981__auto__,writer__43982__auto__,opt__43983__auto__){
return cljs.core._write.call(null,writer__43982__auto__,"re-frame.router/EventQueue");
});

re_frame.router.__GT_EventQueue = (function re_frame$router$__GT_EventQueue(fsm_state,queue,post_event_callback_fns){
return (new re_frame.router.EventQueue(fsm_state,queue,post_event_callback_fns));
});

re_frame.router.event_queue = re_frame.router.__GT_EventQueue.call(null,new cljs.core.Keyword(null,"idle","idle",-2007156861),re_frame.interop.empty_queue,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Enqueue `event` for processing by event handling machinery.
 * 
 *   `event` is a vector of length >= 1. The 1st element identifies the kind of event.
 * 
 *   Note: the event handler is not run immediately - it is not run
 *   synchronously. It will likely be run 'very soon', although it may be
 *   added to the end of a FIFO queue which already contain events.
 * 
 *   Usage:
 *   (dispatch [:order-pizza {:supreme 2 :meatlovers 1 :veg 1})
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event){
if((event == null)){
throw cljs.core.ex_info.call(null,"re-frame: you called \"dispatch\" without an event vector.",cljs.core.PersistentArrayMap.EMPTY);
} else {
re_frame.router.push.call(null,re_frame.router.event_queue,event);
}

return null;
});
/**
 * Synchronously (immediately) process `event`. Do not queue.
 * 
 *   Generally, don't use this. Instead use `dispatch`. It is an error
 *   to use `dispatch-sync` within an event handler.
 * 
 *   Useful when any delay in processing is a problem:
 *   1. the `:on-change` handler of a text field where we are expecting fast typing.
 *   2  when initialising your app - see 'main' in todomvc examples
 *   3. in a unit test where we don't want the action 'later'
 * 
 *   Usage:
 *   (dispatch-sync [:sing :falsetto 634])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.events.handle.call(null,event_v);

re_frame.router._call_post_event_callbacks.call(null,re_frame.router.event_queue,event_v);

return null;
});
