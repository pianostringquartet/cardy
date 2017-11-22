// Compiled by ClojureScript 1.9.946 {}
goog.provide('day8.re_frame.test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('re_frame.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interop');
/**
 * Dequeue an item from a persistent queue which is stored as the value in
 *   queue-atom. Returns the item, and updates the atom with the new queue
 *   value. If the queue is empty, does not alter it and returns nil.
 */
day8.re_frame.test.dequeue_BANG_ = (function day8$re_frame$test$dequeue_BANG_(queue_atom){
while(true){
var queue = cljs.core.deref.call(null,queue_atom);
if(cljs.core.seq.call(null,queue)){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,queue_atom,queue,cljs.core.pop.call(null,queue)))){
return cljs.core.peek.call(null,queue);
} else {
var G__53493 = queue_atom;
queue_atom = G__53493;
continue;
}
} else {
return null;
}
break;
}
});
day8.re_frame.test._STAR_test_timeout_STAR_ = (5000);
/**
 * `*test-context*` is used to communicate internal details of the test between
 *   `run-test-async*` and `wait-for*`. It is dynamically bound so that it doesn't
 *   need to appear as a lexical argument to a `wait-for` block, since we don't
 *   want it to be visible when you're writing tests.  But care must be taken to
 *   pass it around lexically across callbacks, since ClojureScript doesn't have
 *   `bound-fn`.
 */
day8.re_frame.test._STAR_test_context_STAR_ = null;
day8.re_frame.test.run_test_async_STAR_ = (function day8$re_frame$test$run_test_async_STAR_(f){
var test_context = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"wait-for-depth","wait-for-depth",-1366777331),(0),new cljs.core.Keyword(null,"max-wait-for-depth","max-wait-for-depth",639503457),cljs.core.atom.call(null,(0)),new cljs.core.Keyword(null,"now-waiting-for","now-waiting-for",322402761),cljs.core.atom.call(null,null)], null);
if(typeof day8.re_frame.test.t_day8$re_frame$test53495 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
day8.re_frame.test.t_day8$re_frame$test53495 = (function (f,test_context,meta53496){
this.f = f;
this.test_context = test_context;
this.meta53496 = meta53496;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
day8.re_frame.test.t_day8$re_frame$test53495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (test_context){
return (function (_53497,meta53496__$1){
var self__ = this;
var _53497__$1 = this;
return (new day8.re_frame.test.t_day8$re_frame$test53495(self__.f,self__.test_context,meta53496__$1));
});})(test_context))
;

day8.re_frame.test.t_day8$re_frame$test53495.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (test_context){
return (function (_53497){
var self__ = this;
var _53497__$1 = this;
return self__.meta53496;
});})(test_context))
;

day8.re_frame.test.t_day8$re_frame$test53495.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame.test.t_day8$re_frame$test53495.prototype.call = ((function (test_context){
return (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___52426__auto__ = self____$1;
var restore_fn = re_frame.core.make_restore_fn.call(null);
var _STAR_test_context_STAR_53499 = day8.re_frame.test._STAR_test_context_STAR_;
day8.re_frame.test._STAR_test_context_STAR_ = cljs.core.assoc.call(null,self__.test_context,new cljs.core.Keyword(null,"done","done",-889844188),((function (_STAR_test_context_STAR_53499,restore_fn,___52426__auto__,self____$1,test_context){
return (function (){
restore_fn.call(null);

return done.call(null);
});})(_STAR_test_context_STAR_53499,restore_fn,___52426__auto__,self____$1,test_context))
);

try{return self__.f.call(null);
}finally {day8.re_frame.test._STAR_test_context_STAR_ = _STAR_test_context_STAR_53499;
}});})(test_context))
;

day8.re_frame.test.t_day8$re_frame$test53495.prototype.apply = ((function (test_context){
return (function (self__,args53498){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args53498)));
});})(test_context))
;

day8.re_frame.test.t_day8$re_frame$test53495.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (test_context){
return (function (done){
var self__ = this;
var ___52426__auto__ = this;
var restore_fn = re_frame.core.make_restore_fn.call(null);
var _STAR_test_context_STAR_53500 = day8.re_frame.test._STAR_test_context_STAR_;
day8.re_frame.test._STAR_test_context_STAR_ = cljs.core.assoc.call(null,self__.test_context,new cljs.core.Keyword(null,"done","done",-889844188),((function (_STAR_test_context_STAR_53500,restore_fn,___52426__auto__,test_context){
return (function (){
restore_fn.call(null);

return done.call(null);
});})(_STAR_test_context_STAR_53500,restore_fn,___52426__auto__,test_context))
);

try{return self__.f.call(null);
}finally {day8.re_frame.test._STAR_test_context_STAR_ = _STAR_test_context_STAR_53500;
}});})(test_context))
;

day8.re_frame.test.t_day8$re_frame$test53495.getBasis = ((function (test_context){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"test-context","test-context",-2049932830,null),new cljs.core.Symbol(null,"meta53496","meta53496",100544013,null)], null);
});})(test_context))
;

day8.re_frame.test.t_day8$re_frame$test53495.cljs$lang$type = true;

day8.re_frame.test.t_day8$re_frame$test53495.cljs$lang$ctorStr = "day8.re-frame.test/t_day8$re_frame$test53495";

day8.re_frame.test.t_day8$re_frame$test53495.cljs$lang$ctorPrWriter = ((function (test_context){
return (function (this__43981__auto__,writer__43982__auto__,opt__43983__auto__){
return cljs.core._write.call(null,writer__43982__auto__,"day8.re-frame.test/t_day8$re_frame$test53495");
});})(test_context))
;

day8.re_frame.test.__GT_t_day8$re_frame$test53495 = ((function (test_context){
return (function day8$re_frame$test$run_test_async_STAR__$___GT_t_day8$re_frame$test53495(f__$1,test_context__$1,meta53496){
return (new day8.re_frame.test.t_day8$re_frame$test53495(f__$1,test_context__$1,meta53496));
});})(test_context))
;

}

return (new day8.re_frame.test.t_day8$re_frame$test53495(f,test_context,null));
});
var ret__44567__auto___53504 = (function (){
/**
 * Run `body` as an async re-frame test. The async nature means you'll need to
 *   use `wait-for` any time you want to make any assertions that should be true
 *   *after* an event has been handled.  It's assumed that there will be at least
 *   one `wait-for` in the body of your test (otherwise you don't need this macro
 *   at all).
 * 
 *   Note: unlike regular ClojureScript `cljs.test/async` tests, `wait-for` takes
 *   care of calling `(done)` for you: you don't need to do anything specific to
 *   handle the fact that your test is asynchronous, other than make sure that all
 *   your assertions happen with `wait-for` blocks.
 * 
 *   This macro will automatically clean up any changes to re-frame state made
 *   within the test body, as per `with-temp-re-frame-state` (except that the way
 *   it's done here *does* work for async tests, whereas that macro used by itself
 *   doesn't).
 */
day8.re_frame.test.run_test_async = (function day8$re_frame$test$run_test_async(var_args){
var args__44534__auto__ = [];
var len__44527__auto___53505 = arguments.length;
var i__44528__auto___53506 = (0);
while(true){
if((i__44528__auto___53506 < len__44527__auto___53505)){
args__44534__auto__.push((arguments[i__44528__auto___53506]));

var G__53507 = (i__44528__auto___53506 + (1));
i__44528__auto___53506 = G__53507;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((2) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((2)),(0),null)):null);
return day8.re_frame.test.run_test_async.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__44535__auto__);
});

day8.re_frame.test.run_test_async.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("day8.re-frame.test","run-test-async*","day8.re-frame.test/run-test-async*",-694638677,null)),(function (){var x__44218__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__44218__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})())));
});

day8.re_frame.test.run_test_async.cljs$lang$maxFixedArity = (2);

day8.re_frame.test.run_test_async.cljs$lang$applyTo = (function (seq53501){
var G__53502 = cljs.core.first.call(null,seq53501);
var seq53501__$1 = cljs.core.next.call(null,seq53501);
var G__53503 = cljs.core.first.call(null,seq53501__$1);
var seq53501__$2 = cljs.core.next.call(null,seq53501__$1);
return day8.re_frame.test.run_test_async.cljs$core$IFn$_invoke$arity$variadic(G__53502,G__53503,seq53501__$2);
});

return null;
})()
;
day8.re_frame.test.run_test_async.cljs$lang$macro = true;

/**
 * Interprets the acceptable input values for `wait-for`'s `ok-ids` and
 *   `failure-ids` params to produce a predicate function on an event.  See
 *   `wait-for` for details.
 */
day8.re_frame.test.as_callback_pred = (function day8$re_frame$test$as_callback_pred(callback_pred){
if(cljs.core.truth_(callback_pred)){
if((cljs.core.set_QMARK_.call(null,callback_pred)) || (cljs.core.vector_QMARK_.call(null,callback_pred))){
return (function (event){
return cljs.core.some.call(null,(function (pred){
return pred.call(null,event);
}),cljs.core.map.call(null,day8.re_frame.test.as_callback_pred,cljs.core.seq.call(null,callback_pred)));
});
} else {
if(cljs.core.fn_QMARK_.call(null,callback_pred)){
return callback_pred;
} else {
if((callback_pred instanceof cljs.core.Keyword)){
return (function (p__53508){
var vec__53509 = p__53508;
var event_id = cljs.core.nth.call(null,vec__53509,(0),null);
var _ = cljs.core.nth.call(null,vec__53509,(1),null);
return cljs.core._EQ_.call(null,callback_pred,event_id);
});
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,callback_pred))," isn't an event predicate"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback-pred","callback-pred",90867475),callback_pred], null));

}
}
}
} else {
return null;
}
});
/**
 * This function is an implementation detail: in your async tests (within a
 *   `run-test-async`), you should use the `wait-for` macro instead.  (For
 *   synchronous tests within `run-test-sync`, you don't need this capability at
 *   all.)
 * 
 *   Installs `callback` as a re-frame post-event callback handler, called as soon
 *   as any event matching `ok-ids` is handled.  Aborts the test as a failure if
 *   any event matching `failure-ids` is handled.
 * 
 *   Since this is intended for use in asynchronous tests: it will return
 *   immediately after installing the callback -- it doesn't *actually* wait.
 * 
 *   Note that `wait-for*` tracks whether, during your callback, you call
 *   `wait-for*` again.  If you *don't*, then, given the way asynchronous tests
 *   work, your test must necessarily be finished.  So `wait-for*` will
 *   call `(done)` for you.
 */
day8.re_frame.test.wait_for_STAR_ = (function day8$re_frame$test$wait_for_STAR_(ok_ids,failure_ids,callback){
var map__53512 = cljs.core.update.call(null,day8.re_frame.test._STAR_test_context_STAR_,new cljs.core.Keyword(null,"wait-for-depth","wait-for-depth",-1366777331),cljs.core.inc);
var map__53512__$1 = ((((!((map__53512 == null)))?((((map__53512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53512):map__53512);
var test_context = map__53512__$1;
var done = cljs.core.get.call(null,map__53512__$1,new cljs.core.Keyword(null,"done","done",-889844188));
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"max-wait-for-depth","max-wait-for-depth",639503457).cljs$core$IFn$_invoke$arity$1(test_context),cljs.core.inc);

var ok_pred = day8.re_frame.test.as_callback_pred.call(null,ok_ids);
var fail_pred = day8.re_frame.test.as_callback_pred.call(null,failure_ids);
var cb_id = cljs.core.gensym.call(null,"wait-for-cb-fn");
re_frame.core.add_post_event_callback.call(null,cb_id,((function (ok_pred,fail_pred,cb_id,map__53512,map__53512__$1,test_context,done){
return (function (event,_){
if(cljs.core.truth_((function (){var and__43344__auto__ = fail_pred;
if(cljs.core.truth_(and__43344__auto__)){
return cljs.core.not.call(null,(function (){try{var values__52351__auto__ = (function (){var x__44218__auto__ = fail_pred.call(null,event);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})();
var result__52352__auto__ = cljs.core.apply.call(null,cljs.core.not,values__52351__auto__);
if(cljs.core.truth_(result__52352__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"fail-pred","fail-pred",518790579,null),new cljs.core.Symbol(null,"event","event",1941966969,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__52351__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"Received failure event"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"fail-pred","fail-pred",518790579,null),new cljs.core.Symbol(null,"event","event",1941966969,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__52351__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Received failure event"], null));
}

return result__52352__auto__;
}catch (e53514){var t__52396__auto__ = e53514;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"fail-pred","fail-pred",518790579,null),new cljs.core.Symbol(null,"event","event",1941966969,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"Received failure event"], null));
}})());
} else {
return and__43344__auto__;
}
})())){
re_frame.core.remove_post_event_callback.call(null,cb_id);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"now-waiting-for","now-waiting-for",322402761).cljs$core$IFn$_invoke$arity$1(test_context),null);

return done.call(null);
} else {
if(cljs.core.truth_(ok_pred.call(null,event))){
re_frame.core.remove_post_event_callback.call(null,cb_id);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"now-waiting-for","now-waiting-for",322402761).cljs$core$IFn$_invoke$arity$1(test_context),null);

var _STAR_test_context_STAR_53515_53516 = day8.re_frame.test._STAR_test_context_STAR_;
day8.re_frame.test._STAR_test_context_STAR_ = test_context;

try{callback.call(null,event);
}finally {day8.re_frame.test._STAR_test_context_STAR_ = _STAR_test_context_STAR_53515_53516;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"wait-for-depth","wait-for-depth",-1366777331).cljs$core$IFn$_invoke$arity$1(test_context),cljs.core.deref.call(null,new cljs.core.Keyword(null,"max-wait-for-depth","max-wait-for-depth",639503457).cljs$core$IFn$_invoke$arity$1(test_context)))){
return done.call(null);
} else {
return null;
}
} else {
return null;

}
}
});})(ok_pred,fail_pred,cb_id,map__53512,map__53512__$1,test_context,done))
);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"now-waiting-for","now-waiting-for",322402761).cljs$core$IFn$_invoke$arity$1(test_context),ok_ids);
});
var ret__44567__auto___53529 = (function (){
/**
 * Execute `body` once an event identified by the predicate(s) `ids` has been handled.
 * 
 *   `ids` and `failure-ids` are means to identify an event. Normally, each would
 *   be a simple keyword or a set of keywords.  If an event with event-id of (or
 *   in) `ids` is handled, the test will continue by executing the body. If an
 *   event with an event-id of (or in) `failure-ids` is handled, the test will
 *   abort and fail.
 * 
 *   IMPORTANT NOTE: due to the way async tests in re-frame work, code you want
 *   executed after the event you're waiting for has to happen in the `body` of the
 *   `wait-for` (in an implicit callback), not just lexically after the the
 *   `wait-for` call. In practice, this means `wait-for` must always be in a tail
 *   position.
 * 
 *   Eg:
 *    (run-test-async
 *      (dispatch [:get-user 2])
 *      (wait-for [#{:got-user} #{:no-such-user :system-unavailable} event]
 *        (is (= (:username @(subscribe [:user])) "johnny")))
 *      ;; Don't put code here, it will run *before* the event you're waiting
 *      ;; for.
 *      )
 * 
 *   Acceptable inputs for `ids` and `failure-ids` are:
 *  - `:some-event-id` => matches an event with that ID
 * 
 *  - `#{:some-event-id :other-event-id}` => matches an event with any of the
 *                                           given IDs
 * 
 *  - `[:some-event-id :other-event-id]` => ditto (checks in order)
 * 
 *  - `(fn [event] ,,,) => uses the function as a predicate
 * 
 *  - `[(fn [event] ,,,) (fn [event] ,,,)]` => tries each predicate in turn,
 *                                             matching an event which matches
 *                                             at least one predicate
 * 
 *  - `#{:some-event-id (fn [event] ,,,)}` => tries each
 * 
 *   Note that because we're liberal about whether you supply `failure-ids` and/or
 *   `event-sym`, if you do choose to supply only one, and you want that one to be
 *   `event-sym`, you can't supply it as a destructuring form (because we can't
 *   disambiguate that from a vector of `failure-ids`).  You can just supply `nil`
 *   as `failure-ids` in this case, and then you'll be able to destructure.
 */
day8.re_frame.test.wait_for = (function day8$re_frame$test$wait_for(var_args){
var args__44534__auto__ = [];
var len__44527__auto___53530 = arguments.length;
var i__44528__auto___53531 = (0);
while(true){
if((i__44528__auto___53531 < len__44527__auto___53530)){
args__44534__auto__.push((arguments[i__44528__auto___53531]));

var G__53532 = (i__44528__auto___53531 + (1));
i__44528__auto___53531 = G__53532;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((3) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((3)),(0),null)):null);
return day8.re_frame.test.wait_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__44535__auto__);
});

day8.re_frame.test.wait_for.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__53521,body){
var vec__53522 = p__53521;
var ids = cljs.core.nth.call(null,vec__53522,(0),null);
var failure_ids = cljs.core.nth.call(null,vec__53522,(1),null);
var event_sym = cljs.core.nth.call(null,vec__53522,(2),null);
var argv = vec__53522;
var vec__53525 = (function (){var G__53528 = cljs.core.count.call(null,argv);
switch (G__53528) {
case (3):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [failure_ids,event_sym], null);

break;
case (2):
if((cljs.core.second.call(null,argv) instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.second.call(null,argv)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,argv),cljs.core.gensym.call(null,"event")], null);
}

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.gensym.call(null,"event")], null);

break;
case (0):
throw cljs.core.ex_info.call(null,"wait-for needs to know what to wait for!",cljs.core.PersistentArrayMap.EMPTY);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53528)].join('')));

}
})();
var failure_ids__$1 = cljs.core.nth.call(null,vec__53525,(0),null);
var event_sym__$1 = cljs.core.nth.call(null,vec__53525,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("day8.re-frame.test","wait-for*","day8.re-frame.test/wait-for*",526325482,null)),(function (){var x__44218__auto__ = ids;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),(function (){var x__44218__auto__ = failure_ids__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),(function (){var x__44218__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__44218__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__44218__auto__ = event_sym__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})())));
});

day8.re_frame.test.wait_for.cljs$lang$maxFixedArity = (3);

day8.re_frame.test.wait_for.cljs$lang$applyTo = (function (seq53517){
var G__53518 = cljs.core.first.call(null,seq53517);
var seq53517__$1 = cljs.core.next.call(null,seq53517);
var G__53519 = cljs.core.first.call(null,seq53517__$1);
var seq53517__$2 = cljs.core.next.call(null,seq53517__$1);
var G__53520 = cljs.core.first.call(null,seq53517__$2);
var seq53517__$3 = cljs.core.next.call(null,seq53517__$2);
return day8.re_frame.test.wait_for.cljs$core$IFn$_invoke$arity$variadic(G__53518,G__53519,G__53520,seq53517__$3);
});

return null;
})()
;
day8.re_frame.test.wait_for.cljs$lang$macro = true;

day8.re_frame.test._STAR_handling_STAR_ = false;
day8.re_frame.test.run_test_sync_STAR_ = (function day8$re_frame$test$run_test_sync_STAR_(f){
var restore_fn__53424__auto__ = re_frame.core.make_restore_fn.call(null);
try{var my_queue = cljs.core.atom.call(null,re_frame.interop.empty_queue);
var new_dispatch = ((function (my_queue,restore_fn__53424__auto__){
return (function (argv){
cljs.core.swap_BANG_.call(null,my_queue,cljs.core.conj,argv);

if(day8.re_frame.test._STAR_handling_STAR_){
return null;
} else {
var _STAR_handling_STAR_53534 = day8.re_frame.test._STAR_handling_STAR_;
day8.re_frame.test._STAR_handling_STAR_ = true;

try{while(true){
var temp__4657__auto__ = day8.re_frame.test.dequeue_BANG_.call(null,my_queue);
if(cljs.core.truth_(temp__4657__auto__)){
var queue_head = temp__4657__auto__;
re_frame.router.dispatch_sync.call(null,queue_head);

continue;
} else {
return null;
}
break;
}
}finally {day8.re_frame.test._STAR_handling_STAR_ = _STAR_handling_STAR_53534;
}}
});})(my_queue,restore_fn__53424__auto__))
;
var dispatch53535 = re_frame.core.dispatch;
var dispatch53536 = re_frame.router.dispatch;
re_frame.core.dispatch = new_dispatch;

re_frame.router.dispatch = new_dispatch;

try{return f.call(null);
}finally {re_frame.router.dispatch = dispatch53536;

re_frame.core.dispatch = dispatch53535;
}}finally {restore_fn__53424__auto__.call(null);
}});
var ret__44567__auto___53540 = (function (){
/**
 * Execute `body` as a test, where each `dispatch` call is executed
 *   synchronously (via `dispatch-sync`), and any subsequent dispatches which are
 *   caused by that dispatch are also fully handled/executed prior to control flow
 *   returning to your test.
 * 
 *   Think of it kind of as though every `dispatch` in your app had been magically
 *   turned into `dispatch-sync`, and re-frame had lifted the restriction that says
 *   you can't call `dispatch-sync` from within an event handler.
 * 
 *   Note that this is *not* achieved with blocking.  It relies on you not doing
 *   anything asynchronous (such as an actual AJAX call or `js/setTimeout`)
 *   directly in your event handlers.  In a real app running in the real browser,
 *   of course that won't apply, so this might seem useless at first.  But if
 *   you're a well-behaved re-framer, all of your asynchronous stuff (which is by
 *   definition side-effecty) will happen in effectful event handlers installed
 *   with `reg-fx`.  Which works very nicely: in your tests, install an alternative
 *   version of those effectful event handlers which behaves synchronously.  For
 *   maximum coolness, you might want to consider running your tests on the JVM and
 *   installing a `reg-fx` handler which actually invokes your JVM Clojure
 *   server-side Ring handler where your in-browser code would make an AJAX call.
 */
day8.re_frame.test.run_test_sync = (function day8$re_frame$test$run_test_sync(var_args){
var args__44534__auto__ = [];
var len__44527__auto___53541 = arguments.length;
var i__44528__auto___53542 = (0);
while(true){
if((i__44528__auto___53542 < len__44527__auto___53541)){
args__44534__auto__.push((arguments[i__44528__auto___53542]));

var G__53543 = (i__44528__auto___53542 + (1));
i__44528__auto___53542 = G__53543;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((2) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((2)),(0),null)):null);
return day8.re_frame.test.run_test_sync.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__44535__auto__);
});

day8.re_frame.test.run_test_sync.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("day8.re-frame.test","run-test-sync*","day8.re-frame.test/run-test-sync*",1693776500,null)),(function (){var x__44218__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__44218__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})())));
});

day8.re_frame.test.run_test_sync.cljs$lang$maxFixedArity = (2);

day8.re_frame.test.run_test_sync.cljs$lang$applyTo = (function (seq53537){
var G__53538 = cljs.core.first.call(null,seq53537);
var seq53537__$1 = cljs.core.next.call(null,seq53537);
var G__53539 = cljs.core.first.call(null,seq53537__$1);
var seq53537__$2 = cljs.core.next.call(null,seq53537__$1);
return day8.re_frame.test.run_test_sync.cljs$core$IFn$_invoke$arity$variadic(G__53538,G__53539,seq53537__$2);
});

return null;
})()
;
day8.re_frame.test.run_test_sync.cljs$lang$macro = true;

