// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__54406 = arguments.length;
switch (G__54406) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async54407 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54407 = (function (f,blockable,meta54408){
this.f = f;
this.blockable = blockable;
this.meta54408 = meta54408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async54407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54409,meta54408__$1){
var self__ = this;
var _54409__$1 = this;
return (new cljs.core.async.t_cljs$core$async54407(self__.f,self__.blockable,meta54408__$1));
});

cljs.core.async.t_cljs$core$async54407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54409){
var self__ = this;
var _54409__$1 = this;
return self__.meta54408;
});

cljs.core.async.t_cljs$core$async54407.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54407.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async54407.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async54407.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async54407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta54408","meta54408",1459605727,null)], null);
});

cljs.core.async.t_cljs$core$async54407.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54407.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54407";

cljs.core.async.t_cljs$core$async54407.cljs$lang$ctorPrWriter = (function (this__43981__auto__,writer__43982__auto__,opt__43983__auto__){
return cljs.core._write.call(null,writer__43982__auto__,"cljs.core.async/t_cljs$core$async54407");
});

cljs.core.async.__GT_t_cljs$core$async54407 = (function cljs$core$async$__GT_t_cljs$core$async54407(f__$1,blockable__$1,meta54408){
return (new cljs.core.async.t_cljs$core$async54407(f__$1,blockable__$1,meta54408));
});

}

return (new cljs.core.async.t_cljs$core$async54407(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__54413 = arguments.length;
switch (G__54413) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__54416 = arguments.length;
switch (G__54416) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__54419 = arguments.length;
switch (G__54419) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_54421 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_54421);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_54421,ret){
return (function (){
return fn1.call(null,val_54421);
});})(val_54421,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__54423 = arguments.length;
switch (G__54423) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__44303__auto___54425 = n;
var x_54426 = (0);
while(true){
if((x_54426 < n__44303__auto___54425)){
(a[x_54426] = (0));

var G__54427 = (x_54426 + (1));
x_54426 = G__54427;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__54428 = (i + (1));
i = G__54428;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async54429 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54429 = (function (flag,meta54430){
this.flag = flag;
this.meta54430 = meta54430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async54429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_54431,meta54430__$1){
var self__ = this;
var _54431__$1 = this;
return (new cljs.core.async.t_cljs$core$async54429(self__.flag,meta54430__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async54429.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_54431){
var self__ = this;
var _54431__$1 = this;
return self__.meta54430;
});})(flag))
;

cljs.core.async.t_cljs$core$async54429.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54429.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async54429.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async54429.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async54429.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta54430","meta54430",1406267655,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async54429.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54429";

cljs.core.async.t_cljs$core$async54429.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__43981__auto__,writer__43982__auto__,opt__43983__auto__){
return cljs.core._write.call(null,writer__43982__auto__,"cljs.core.async/t_cljs$core$async54429");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async54429 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async54429(flag__$1,meta54430){
return (new cljs.core.async.t_cljs$core$async54429(flag__$1,meta54430));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async54429(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async54432 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54432 = (function (flag,cb,meta54433){
this.flag = flag;
this.cb = cb;
this.meta54433 = meta54433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async54432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54434,meta54433__$1){
var self__ = this;
var _54434__$1 = this;
return (new cljs.core.async.t_cljs$core$async54432(self__.flag,self__.cb,meta54433__$1));
});

cljs.core.async.t_cljs$core$async54432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54434){
var self__ = this;
var _54434__$1 = this;
return self__.meta54433;
});

cljs.core.async.t_cljs$core$async54432.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54432.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async54432.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async54432.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async54432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta54433","meta54433",735809707,null)], null);
});

cljs.core.async.t_cljs$core$async54432.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54432";

cljs.core.async.t_cljs$core$async54432.cljs$lang$ctorPrWriter = (function (this__43981__auto__,writer__43982__auto__,opt__43983__auto__){
return cljs.core._write.call(null,writer__43982__auto__,"cljs.core.async/t_cljs$core$async54432");
});

cljs.core.async.__GT_t_cljs$core$async54432 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async54432(flag__$1,cb__$1,meta54433){
return (new cljs.core.async.t_cljs$core$async54432(flag__$1,cb__$1,meta54433));
});

}

return (new cljs.core.async.t_cljs$core$async54432(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__54435_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54435_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__54436_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54436_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__43356__auto__ = wport;
if(cljs.core.truth_(or__43356__auto__)){
return or__43356__auto__;
} else {
return port;
}
})()], null));
} else {
var G__54437 = (i + (1));
i = G__54437;
continue;
}
} else {
return null;
}
break;
}
})();
var or__43356__auto__ = ret;
if(cljs.core.truth_(or__43356__auto__)){
return or__43356__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__43344__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__43344__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__43344__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__44534__auto__ = [];
var len__44527__auto___54443 = arguments.length;
var i__44528__auto___54444 = (0);
while(true){
if((i__44528__auto___54444 < len__44527__auto___54443)){
args__44534__auto__.push((arguments[i__44528__auto___54444]));

var G__54445 = (i__44528__auto___54444 + (1));
i__44528__auto___54444 = G__54445;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((1) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__54440){
var map__54441 = p__54440;
var map__54441__$1 = ((((!((map__54441 == null)))?((((map__54441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54441):map__54441);
var opts = map__54441__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq54438){
var G__54439 = cljs.core.first.call(null,seq54438);
var seq54438__$1 = cljs.core.next.call(null,seq54438);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__54439,seq54438__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__54447 = arguments.length;
switch (G__54447) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__54360__auto___54493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54360__auto___54493){
return (function (){
var f__54361__auto__ = (function (){var switch__54272__auto__ = ((function (c__54360__auto___54493){
return (function (state_54471){
var state_val_54472 = (state_54471[(1)]);
if((state_val_54472 === (7))){
var inst_54467 = (state_54471[(2)]);
var state_54471__$1 = state_54471;
var statearr_54473_54494 = state_54471__$1;
(statearr_54473_54494[(2)] = inst_54467);

(statearr_54473_54494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (1))){
var state_54471__$1 = state_54471;
var statearr_54474_54495 = state_54471__$1;
(statearr_54474_54495[(2)] = null);

(statearr_54474_54495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (4))){
var inst_54450 = (state_54471[(7)]);
var inst_54450__$1 = (state_54471[(2)]);
var inst_54451 = (inst_54450__$1 == null);
var state_54471__$1 = (function (){var statearr_54475 = state_54471;
(statearr_54475[(7)] = inst_54450__$1);

return statearr_54475;
})();
if(cljs.core.truth_(inst_54451)){
var statearr_54476_54496 = state_54471__$1;
(statearr_54476_54496[(1)] = (5));

} else {
var statearr_54477_54497 = state_54471__$1;
(statearr_54477_54497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (13))){
var state_54471__$1 = state_54471;
var statearr_54478_54498 = state_54471__$1;
(statearr_54478_54498[(2)] = null);

(statearr_54478_54498[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (6))){
var inst_54450 = (state_54471[(7)]);
var state_54471__$1 = state_54471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54471__$1,(11),to,inst_54450);
} else {
if((state_val_54472 === (3))){
var inst_54469 = (state_54471[(2)]);
var state_54471__$1 = state_54471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54471__$1,inst_54469);
} else {
if((state_val_54472 === (12))){
var state_54471__$1 = state_54471;
var statearr_54479_54499 = state_54471__$1;
(statearr_54479_54499[(2)] = null);

(statearr_54479_54499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (2))){
var state_54471__$1 = state_54471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54471__$1,(4),from);
} else {
if((state_val_54472 === (11))){
var inst_54460 = (state_54471[(2)]);
var state_54471__$1 = state_54471;
if(cljs.core.truth_(inst_54460)){
var statearr_54480_54500 = state_54471__$1;
(statearr_54480_54500[(1)] = (12));

} else {
var statearr_54481_54501 = state_54471__$1;
(statearr_54481_54501[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (9))){
var state_54471__$1 = state_54471;
var statearr_54482_54502 = state_54471__$1;
(statearr_54482_54502[(2)] = null);

(statearr_54482_54502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (5))){
var state_54471__$1 = state_54471;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54483_54503 = state_54471__$1;
(statearr_54483_54503[(1)] = (8));

} else {
var statearr_54484_54504 = state_54471__$1;
(statearr_54484_54504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (14))){
var inst_54465 = (state_54471[(2)]);
var state_54471__$1 = state_54471;
var statearr_54485_54505 = state_54471__$1;
(statearr_54485_54505[(2)] = inst_54465);

(statearr_54485_54505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (10))){
var inst_54457 = (state_54471[(2)]);
var state_54471__$1 = state_54471;
var statearr_54486_54506 = state_54471__$1;
(statearr_54486_54506[(2)] = inst_54457);

(statearr_54486_54506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (8))){
var inst_54454 = cljs.core.async.close_BANG_.call(null,to);
var state_54471__$1 = state_54471;
var statearr_54487_54507 = state_54471__$1;
(statearr_54487_54507[(2)] = inst_54454);

(statearr_54487_54507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__54360__auto___54493))
;
return ((function (switch__54272__auto__,c__54360__auto___54493){
return (function() {
var cljs$core$async$state_machine__54273__auto__ = null;
var cljs$core$async$state_machine__54273__auto____0 = (function (){
var statearr_54488 = [null,null,null,null,null,null,null,null];
(statearr_54488[(0)] = cljs$core$async$state_machine__54273__auto__);

(statearr_54488[(1)] = (1));

return statearr_54488;
});
var cljs$core$async$state_machine__54273__auto____1 = (function (state_54471){
while(true){
var ret_value__54274__auto__ = (function (){try{while(true){
var result__54275__auto__ = switch__54272__auto__.call(null,state_54471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54275__auto__;
}
break;
}
}catch (e54489){if((e54489 instanceof Object)){
var ex__54276__auto__ = e54489;
var statearr_54490_54508 = state_54471;
(statearr_54490_54508[(5)] = ex__54276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54509 = state_54471;
state_54471 = G__54509;
continue;
} else {
return ret_value__54274__auto__;
}
break;
}
});
cljs$core$async$state_machine__54273__auto__ = function(state_54471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54273__auto____1.call(this,state_54471);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54273__auto____0;
cljs$core$async$state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54273__auto____1;
return cljs$core$async$state_machine__54273__auto__;
})()
;})(switch__54272__auto__,c__54360__auto___54493))
})();
var state__54362__auto__ = (function (){var statearr_54491 = f__54361__auto__.call(null);
(statearr_54491[(6)] = c__54360__auto___54493);

return statearr_54491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54362__auto__);
});})(c__54360__auto___54493))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__54510){
var vec__54511 = p__54510;
var v = cljs.core.nth.call(null,vec__54511,(0),null);
var p = cljs.core.nth.call(null,vec__54511,(1),null);
var job = vec__54511;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__54360__auto___54682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54360__auto___54682,res,vec__54511,v,p,job,jobs,results){
return (function (){
var f__54361__auto__ = (function (){var switch__54272__auto__ = ((function (c__54360__auto___54682,res,vec__54511,v,p,job,jobs,results){
return (function (state_54518){
var state_val_54519 = (state_54518[(1)]);
if((state_val_54519 === (1))){
var state_54518__$1 = state_54518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54518__$1,(2),res,v);
} else {
if((state_val_54519 === (2))){
var inst_54515 = (state_54518[(2)]);
var inst_54516 = cljs.core.async.close_BANG_.call(null,res);
var state_54518__$1 = (function (){var statearr_54520 = state_54518;
(statearr_54520[(7)] = inst_54515);

return statearr_54520;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54518__$1,inst_54516);
} else {
return null;
}
}
});})(c__54360__auto___54682,res,vec__54511,v,p,job,jobs,results))
;
return ((function (switch__54272__auto__,c__54360__auto___54682,res,vec__54511,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____0 = (function (){
var statearr_54521 = [null,null,null,null,null,null,null,null];
(statearr_54521[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__);

(statearr_54521[(1)] = (1));

return statearr_54521;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____1 = (function (state_54518){
while(true){
var ret_value__54274__auto__ = (function (){try{while(true){
var result__54275__auto__ = switch__54272__auto__.call(null,state_54518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54275__auto__;
}
break;
}
}catch (e54522){if((e54522 instanceof Object)){
var ex__54276__auto__ = e54522;
var statearr_54523_54683 = state_54518;
(statearr_54523_54683[(5)] = ex__54276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54684 = state_54518;
state_54518 = G__54684;
continue;
} else {
return ret_value__54274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__ = function(state_54518){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____1.call(this,state_54518);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__;
})()
;})(switch__54272__auto__,c__54360__auto___54682,res,vec__54511,v,p,job,jobs,results))
})();
var state__54362__auto__ = (function (){var statearr_54524 = f__54361__auto__.call(null);
(statearr_54524[(6)] = c__54360__auto___54682);

return statearr_54524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54362__auto__);
});})(c__54360__auto___54682,res,vec__54511,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__54525){
var vec__54526 = p__54525;
var v = cljs.core.nth.call(null,vec__54526,(0),null);
var p = cljs.core.nth.call(null,vec__54526,(1),null);
var job = vec__54526;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__44303__auto___54685 = n;
var __54686 = (0);
while(true){
if((__54686 < n__44303__auto___54685)){
var G__54529_54687 = type;
var G__54529_54688__$1 = (((G__54529_54687 instanceof cljs.core.Keyword))?G__54529_54687.fqn:null);
switch (G__54529_54688__$1) {
case "compute":
var c__54360__auto___54690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__54686,c__54360__auto___54690,G__54529_54687,G__54529_54688__$1,n__44303__auto___54685,jobs,results,process,async){
return (function (){
var f__54361__auto__ = (function (){var switch__54272__auto__ = ((function (__54686,c__54360__auto___54690,G__54529_54687,G__54529_54688__$1,n__44303__auto___54685,jobs,results,process,async){
return (function (state_54542){
var state_val_54543 = (state_54542[(1)]);
if((state_val_54543 === (1))){
var state_54542__$1 = state_54542;
var statearr_54544_54691 = state_54542__$1;
(statearr_54544_54691[(2)] = null);

(statearr_54544_54691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54543 === (2))){
var state_54542__$1 = state_54542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54542__$1,(4),jobs);
} else {
if((state_val_54543 === (3))){
var inst_54540 = (state_54542[(2)]);
var state_54542__$1 = state_54542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54542__$1,inst_54540);
} else {
if((state_val_54543 === (4))){
var inst_54532 = (state_54542[(2)]);
var inst_54533 = process.call(null,inst_54532);
var state_54542__$1 = state_54542;
if(cljs.core.truth_(inst_54533)){
var statearr_54545_54692 = state_54542__$1;
(statearr_54545_54692[(1)] = (5));

} else {
var statearr_54546_54693 = state_54542__$1;
(statearr_54546_54693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54543 === (5))){
var state_54542__$1 = state_54542;
var statearr_54547_54694 = state_54542__$1;
(statearr_54547_54694[(2)] = null);

(statearr_54547_54694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54543 === (6))){
var state_54542__$1 = state_54542;
var statearr_54548_54695 = state_54542__$1;
(statearr_54548_54695[(2)] = null);

(statearr_54548_54695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54543 === (7))){
var inst_54538 = (state_54542[(2)]);
var state_54542__$1 = state_54542;
var statearr_54549_54696 = state_54542__$1;
(statearr_54549_54696[(2)] = inst_54538);

(statearr_54549_54696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__54686,c__54360__auto___54690,G__54529_54687,G__54529_54688__$1,n__44303__auto___54685,jobs,results,process,async))
;
return ((function (__54686,switch__54272__auto__,c__54360__auto___54690,G__54529_54687,G__54529_54688__$1,n__44303__auto___54685,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____0 = (function (){
var statearr_54550 = [null,null,null,null,null,null,null];
(statearr_54550[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__);

(statearr_54550[(1)] = (1));

return statearr_54550;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____1 = (function (state_54542){
while(true){
var ret_value__54274__auto__ = (function (){try{while(true){
var result__54275__auto__ = switch__54272__auto__.call(null,state_54542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54275__auto__;
}
break;
}
}catch (e54551){if((e54551 instanceof Object)){
var ex__54276__auto__ = e54551;
var statearr_54552_54697 = state_54542;
(statearr_54552_54697[(5)] = ex__54276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54698 = state_54542;
state_54542 = G__54698;
continue;
} else {
return ret_value__54274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__ = function(state_54542){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____1.call(this,state_54542);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__;
})()
;})(__54686,switch__54272__auto__,c__54360__auto___54690,G__54529_54687,G__54529_54688__$1,n__44303__auto___54685,jobs,results,process,async))
})();
var state__54362__auto__ = (function (){var statearr_54553 = f__54361__auto__.call(null);
(statearr_54553[(6)] = c__54360__auto___54690);

return statearr_54553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54362__auto__);
});})(__54686,c__54360__auto___54690,G__54529_54687,G__54529_54688__$1,n__44303__auto___54685,jobs,results,process,async))
);


break;
case "async":
var c__54360__auto___54699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__54686,c__54360__auto___54699,G__54529_54687,G__54529_54688__$1,n__44303__auto___54685,jobs,results,process,async){
return (function (){
var f__54361__auto__ = (function (){var switch__54272__auto__ = ((function (__54686,c__54360__auto___54699,G__54529_54687,G__54529_54688__$1,n__44303__auto___54685,jobs,results,process,async){
return (function (state_54566){
var state_val_54567 = (state_54566[(1)]);
if((state_val_54567 === (1))){
var state_54566__$1 = state_54566;
var statearr_54568_54700 = state_54566__$1;
(statearr_54568_54700[(2)] = null);

(statearr_54568_54700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54567 === (2))){
var state_54566__$1 = state_54566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54566__$1,(4),jobs);
} else {
if((state_val_54567 === (3))){
var inst_54564 = (state_54566[(2)]);
var state_54566__$1 = state_54566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54566__$1,inst_54564);
} else {
if((state_val_54567 === (4))){
var inst_54556 = (state_54566[(2)]);
var inst_54557 = async.call(null,inst_54556);
var state_54566__$1 = state_54566;
if(cljs.core.truth_(inst_54557)){
var statearr_54569_54701 = state_54566__$1;
(statearr_54569_54701[(1)] = (5));

} else {
var statearr_54570_54702 = state_54566__$1;
(statearr_54570_54702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54567 === (5))){
var state_54566__$1 = state_54566;
var statearr_54571_54703 = state_54566__$1;
(statearr_54571_54703[(2)] = null);

(statearr_54571_54703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54567 === (6))){
var state_54566__$1 = state_54566;
var statearr_54572_54704 = state_54566__$1;
(statearr_54572_54704[(2)] = null);

(statearr_54572_54704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54567 === (7))){
var inst_54562 = (state_54566[(2)]);
var state_54566__$1 = state_54566;
var statearr_54573_54705 = state_54566__$1;
(statearr_54573_54705[(2)] = inst_54562);

(statearr_54573_54705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__54686,c__54360__auto___54699,G__54529_54687,G__54529_54688__$1,n__44303__auto___54685,jobs,results,process,async))
;
return ((function (__54686,switch__54272__auto__,c__54360__auto___54699,G__54529_54687,G__54529_54688__$1,n__44303__auto___54685,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____0 = (function (){
var statearr_54574 = [null,null,null,null,null,null,null];
(statearr_54574[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__);

(statearr_54574[(1)] = (1));

return statearr_54574;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____1 = (function (state_54566){
while(true){
var ret_value__54274__auto__ = (function (){try{while(true){
var result__54275__auto__ = switch__54272__auto__.call(null,state_54566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54275__auto__;
}
break;
}
}catch (e54575){if((e54575 instanceof Object)){
var ex__54276__auto__ = e54575;
var statearr_54576_54706 = state_54566;
(statearr_54576_54706[(5)] = ex__54276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54707 = state_54566;
state_54566 = G__54707;
continue;
} else {
return ret_value__54274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__ = function(state_54566){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____1.call(this,state_54566);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__;
})()
;})(__54686,switch__54272__auto__,c__54360__auto___54699,G__54529_54687,G__54529_54688__$1,n__44303__auto___54685,jobs,results,process,async))
})();
var state__54362__auto__ = (function (){var statearr_54577 = f__54361__auto__.call(null);
(statearr_54577[(6)] = c__54360__auto___54699);

return statearr_54577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54362__auto__);
});})(__54686,c__54360__auto___54699,G__54529_54687,G__54529_54688__$1,n__44303__auto___54685,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54529_54688__$1)].join('')));

}

var G__54708 = (__54686 + (1));
__54686 = G__54708;
continue;
} else {
}
break;
}

var c__54360__auto___54709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54360__auto___54709,jobs,results,process,async){
return (function (){
var f__54361__auto__ = (function (){var switch__54272__auto__ = ((function (c__54360__auto___54709,jobs,results,process,async){
return (function (state_54599){
var state_val_54600 = (state_54599[(1)]);
if((state_val_54600 === (1))){
var state_54599__$1 = state_54599;
var statearr_54601_54710 = state_54599__$1;
(statearr_54601_54710[(2)] = null);

(statearr_54601_54710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54600 === (2))){
var state_54599__$1 = state_54599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54599__$1,(4),from);
} else {
if((state_val_54600 === (3))){
var inst_54597 = (state_54599[(2)]);
var state_54599__$1 = state_54599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54599__$1,inst_54597);
} else {
if((state_val_54600 === (4))){
var inst_54580 = (state_54599[(7)]);
var inst_54580__$1 = (state_54599[(2)]);
var inst_54581 = (inst_54580__$1 == null);
var state_54599__$1 = (function (){var statearr_54602 = state_54599;
(statearr_54602[(7)] = inst_54580__$1);

return statearr_54602;
})();
if(cljs.core.truth_(inst_54581)){
var statearr_54603_54711 = state_54599__$1;
(statearr_54603_54711[(1)] = (5));

} else {
var statearr_54604_54712 = state_54599__$1;
(statearr_54604_54712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54600 === (5))){
var inst_54583 = cljs.core.async.close_BANG_.call(null,jobs);
var state_54599__$1 = state_54599;
var statearr_54605_54713 = state_54599__$1;
(statearr_54605_54713[(2)] = inst_54583);

(statearr_54605_54713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54600 === (6))){
var inst_54580 = (state_54599[(7)]);
var inst_54585 = (state_54599[(8)]);
var inst_54585__$1 = cljs.core.async.chan.call(null,(1));
var inst_54586 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54587 = [inst_54580,inst_54585__$1];
var inst_54588 = (new cljs.core.PersistentVector(null,2,(5),inst_54586,inst_54587,null));
var state_54599__$1 = (function (){var statearr_54606 = state_54599;
(statearr_54606[(8)] = inst_54585__$1);

return statearr_54606;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54599__$1,(8),jobs,inst_54588);
} else {
if((state_val_54600 === (7))){
var inst_54595 = (state_54599[(2)]);
var state_54599__$1 = state_54599;
var statearr_54607_54714 = state_54599__$1;
(statearr_54607_54714[(2)] = inst_54595);

(statearr_54607_54714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54600 === (8))){
var inst_54585 = (state_54599[(8)]);
var inst_54590 = (state_54599[(2)]);
var state_54599__$1 = (function (){var statearr_54608 = state_54599;
(statearr_54608[(9)] = inst_54590);

return statearr_54608;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54599__$1,(9),results,inst_54585);
} else {
if((state_val_54600 === (9))){
var inst_54592 = (state_54599[(2)]);
var state_54599__$1 = (function (){var statearr_54609 = state_54599;
(statearr_54609[(10)] = inst_54592);

return statearr_54609;
})();
var statearr_54610_54715 = state_54599__$1;
(statearr_54610_54715[(2)] = null);

(statearr_54610_54715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__54360__auto___54709,jobs,results,process,async))
;
return ((function (switch__54272__auto__,c__54360__auto___54709,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____0 = (function (){
var statearr_54611 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54611[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__);

(statearr_54611[(1)] = (1));

return statearr_54611;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____1 = (function (state_54599){
while(true){
var ret_value__54274__auto__ = (function (){try{while(true){
var result__54275__auto__ = switch__54272__auto__.call(null,state_54599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54275__auto__;
}
break;
}
}catch (e54612){if((e54612 instanceof Object)){
var ex__54276__auto__ = e54612;
var statearr_54613_54716 = state_54599;
(statearr_54613_54716[(5)] = ex__54276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54717 = state_54599;
state_54599 = G__54717;
continue;
} else {
return ret_value__54274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__ = function(state_54599){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____1.call(this,state_54599);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__;
})()
;})(switch__54272__auto__,c__54360__auto___54709,jobs,results,process,async))
})();
var state__54362__auto__ = (function (){var statearr_54614 = f__54361__auto__.call(null);
(statearr_54614[(6)] = c__54360__auto___54709);

return statearr_54614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54362__auto__);
});})(c__54360__auto___54709,jobs,results,process,async))
);


var c__54360__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54360__auto__,jobs,results,process,async){
return (function (){
var f__54361__auto__ = (function (){var switch__54272__auto__ = ((function (c__54360__auto__,jobs,results,process,async){
return (function (state_54652){
var state_val_54653 = (state_54652[(1)]);
if((state_val_54653 === (7))){
var inst_54648 = (state_54652[(2)]);
var state_54652__$1 = state_54652;
var statearr_54654_54718 = state_54652__$1;
(statearr_54654_54718[(2)] = inst_54648);

(statearr_54654_54718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (20))){
var state_54652__$1 = state_54652;
var statearr_54655_54719 = state_54652__$1;
(statearr_54655_54719[(2)] = null);

(statearr_54655_54719[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (1))){
var state_54652__$1 = state_54652;
var statearr_54656_54720 = state_54652__$1;
(statearr_54656_54720[(2)] = null);

(statearr_54656_54720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (4))){
var inst_54617 = (state_54652[(7)]);
var inst_54617__$1 = (state_54652[(2)]);
var inst_54618 = (inst_54617__$1 == null);
var state_54652__$1 = (function (){var statearr_54657 = state_54652;
(statearr_54657[(7)] = inst_54617__$1);

return statearr_54657;
})();
if(cljs.core.truth_(inst_54618)){
var statearr_54658_54721 = state_54652__$1;
(statearr_54658_54721[(1)] = (5));

} else {
var statearr_54659_54722 = state_54652__$1;
(statearr_54659_54722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (15))){
var inst_54630 = (state_54652[(8)]);
var state_54652__$1 = state_54652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54652__$1,(18),to,inst_54630);
} else {
if((state_val_54653 === (21))){
var inst_54643 = (state_54652[(2)]);
var state_54652__$1 = state_54652;
var statearr_54660_54723 = state_54652__$1;
(statearr_54660_54723[(2)] = inst_54643);

(statearr_54660_54723[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (13))){
var inst_54645 = (state_54652[(2)]);
var state_54652__$1 = (function (){var statearr_54661 = state_54652;
(statearr_54661[(9)] = inst_54645);

return statearr_54661;
})();
var statearr_54662_54724 = state_54652__$1;
(statearr_54662_54724[(2)] = null);

(statearr_54662_54724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (6))){
var inst_54617 = (state_54652[(7)]);
var state_54652__$1 = state_54652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54652__$1,(11),inst_54617);
} else {
if((state_val_54653 === (17))){
var inst_54638 = (state_54652[(2)]);
var state_54652__$1 = state_54652;
if(cljs.core.truth_(inst_54638)){
var statearr_54663_54725 = state_54652__$1;
(statearr_54663_54725[(1)] = (19));

} else {
var statearr_54664_54726 = state_54652__$1;
(statearr_54664_54726[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (3))){
var inst_54650 = (state_54652[(2)]);
var state_54652__$1 = state_54652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54652__$1,inst_54650);
} else {
if((state_val_54653 === (12))){
var inst_54627 = (state_54652[(10)]);
var state_54652__$1 = state_54652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54652__$1,(14),inst_54627);
} else {
if((state_val_54653 === (2))){
var state_54652__$1 = state_54652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54652__$1,(4),results);
} else {
if((state_val_54653 === (19))){
var state_54652__$1 = state_54652;
var statearr_54665_54727 = state_54652__$1;
(statearr_54665_54727[(2)] = null);

(statearr_54665_54727[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (11))){
var inst_54627 = (state_54652[(2)]);
var state_54652__$1 = (function (){var statearr_54666 = state_54652;
(statearr_54666[(10)] = inst_54627);

return statearr_54666;
})();
var statearr_54667_54728 = state_54652__$1;
(statearr_54667_54728[(2)] = null);

(statearr_54667_54728[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (9))){
var state_54652__$1 = state_54652;
var statearr_54668_54729 = state_54652__$1;
(statearr_54668_54729[(2)] = null);

(statearr_54668_54729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (5))){
var state_54652__$1 = state_54652;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54669_54730 = state_54652__$1;
(statearr_54669_54730[(1)] = (8));

} else {
var statearr_54670_54731 = state_54652__$1;
(statearr_54670_54731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (14))){
var inst_54632 = (state_54652[(11)]);
var inst_54630 = (state_54652[(8)]);
var inst_54630__$1 = (state_54652[(2)]);
var inst_54631 = (inst_54630__$1 == null);
var inst_54632__$1 = cljs.core.not.call(null,inst_54631);
var state_54652__$1 = (function (){var statearr_54671 = state_54652;
(statearr_54671[(11)] = inst_54632__$1);

(statearr_54671[(8)] = inst_54630__$1);

return statearr_54671;
})();
if(inst_54632__$1){
var statearr_54672_54732 = state_54652__$1;
(statearr_54672_54732[(1)] = (15));

} else {
var statearr_54673_54733 = state_54652__$1;
(statearr_54673_54733[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (16))){
var inst_54632 = (state_54652[(11)]);
var state_54652__$1 = state_54652;
var statearr_54674_54734 = state_54652__$1;
(statearr_54674_54734[(2)] = inst_54632);

(statearr_54674_54734[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (10))){
var inst_54624 = (state_54652[(2)]);
var state_54652__$1 = state_54652;
var statearr_54675_54735 = state_54652__$1;
(statearr_54675_54735[(2)] = inst_54624);

(statearr_54675_54735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (18))){
var inst_54635 = (state_54652[(2)]);
var state_54652__$1 = state_54652;
var statearr_54676_54736 = state_54652__$1;
(statearr_54676_54736[(2)] = inst_54635);

(statearr_54676_54736[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (8))){
var inst_54621 = cljs.core.async.close_BANG_.call(null,to);
var state_54652__$1 = state_54652;
var statearr_54677_54737 = state_54652__$1;
(statearr_54677_54737[(2)] = inst_54621);

(statearr_54677_54737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__54360__auto__,jobs,results,process,async))
;
return ((function (switch__54272__auto__,c__54360__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____0 = (function (){
var statearr_54678 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54678[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__);

(statearr_54678[(1)] = (1));

return statearr_54678;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____1 = (function (state_54652){
while(true){
var ret_value__54274__auto__ = (function (){try{while(true){
var result__54275__auto__ = switch__54272__auto__.call(null,state_54652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54275__auto__;
}
break;
}
}catch (e54679){if((e54679 instanceof Object)){
var ex__54276__auto__ = e54679;
var statearr_54680_54738 = state_54652;
(statearr_54680_54738[(5)] = ex__54276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54739 = state_54652;
state_54652 = G__54739;
continue;
} else {
return ret_value__54274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__ = function(state_54652){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____1.call(this,state_54652);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54273__auto__;
})()
;})(switch__54272__auto__,c__54360__auto__,jobs,results,process,async))
})();
var state__54362__auto__ = (function (){var statearr_54681 = f__54361__auto__.call(null);
(statearr_54681[(6)] = c__54360__auto__);

return statearr_54681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54362__auto__);
});})(c__54360__auto__,jobs,results,process,async))
);

return c__54360__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__54741 = arguments.length;
switch (G__54741) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__54744 = arguments.length;
switch (G__54744) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__54747 = arguments.length;
switch (G__54747) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__54360__auto___54796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54360__auto___54796,tc,fc){
return (function (){
var f__54361__auto__ = (function (){var switch__54272__auto__ = ((function (c__54360__auto___54796,tc,fc){
return (function (state_54773){
var state_val_54774 = (state_54773[(1)]);
if((state_val_54774 === (7))){
var inst_54769 = (state_54773[(2)]);
var state_54773__$1 = state_54773;
var statearr_54775_54797 = state_54773__$1;
(statearr_54775_54797[(2)] = inst_54769);

(statearr_54775_54797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54774 === (1))){
var state_54773__$1 = state_54773;
var statearr_54776_54798 = state_54773__$1;
(statearr_54776_54798[(2)] = null);

(statearr_54776_54798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54774 === (4))){
var inst_54750 = (state_54773[(7)]);
var inst_54750__$1 = (state_54773[(2)]);
var inst_54751 = (inst_54750__$1 == null);
var state_54773__$1 = (function (){var statearr_54777 = state_54773;
(statearr_54777[(7)] = inst_54750__$1);

return statearr_54777;
})();
if(cljs.core.truth_(inst_54751)){
var statearr_54778_54799 = state_54773__$1;
(statearr_54778_54799[(1)] = (5));

} else {
var statearr_54779_54800 = state_54773__$1;
(statearr_54779_54800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54774 === (13))){
var state_54773__$1 = state_54773;
var statearr_54780_54801 = state_54773__$1;
(statearr_54780_54801[(2)] = null);

(statearr_54780_54801[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54774 === (6))){
var inst_54750 = (state_54773[(7)]);
var inst_54756 = p.call(null,inst_54750);
var state_54773__$1 = state_54773;
if(cljs.core.truth_(inst_54756)){
var statearr_54781_54802 = state_54773__$1;
(statearr_54781_54802[(1)] = (9));

} else {
var statearr_54782_54803 = state_54773__$1;
(statearr_54782_54803[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54774 === (3))){
var inst_54771 = (state_54773[(2)]);
var state_54773__$1 = state_54773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54773__$1,inst_54771);
} else {
if((state_val_54774 === (12))){
var state_54773__$1 = state_54773;
var statearr_54783_54804 = state_54773__$1;
(statearr_54783_54804[(2)] = null);

(statearr_54783_54804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54774 === (2))){
var state_54773__$1 = state_54773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54773__$1,(4),ch);
} else {
if((state_val_54774 === (11))){
var inst_54750 = (state_54773[(7)]);
var inst_54760 = (state_54773[(2)]);
var state_54773__$1 = state_54773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54773__$1,(8),inst_54760,inst_54750);
} else {
if((state_val_54774 === (9))){
var state_54773__$1 = state_54773;
var statearr_54784_54805 = state_54773__$1;
(statearr_54784_54805[(2)] = tc);

(statearr_54784_54805[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54774 === (5))){
var inst_54753 = cljs.core.async.close_BANG_.call(null,tc);
var inst_54754 = cljs.core.async.close_BANG_.call(null,fc);
var state_54773__$1 = (function (){var statearr_54785 = state_54773;
(statearr_54785[(8)] = inst_54753);

return statearr_54785;
})();
var statearr_54786_54806 = state_54773__$1;
(statearr_54786_54806[(2)] = inst_54754);

(statearr_54786_54806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54774 === (14))){
var inst_54767 = (state_54773[(2)]);
var state_54773__$1 = state_54773;
var statearr_54787_54807 = state_54773__$1;
(statearr_54787_54807[(2)] = inst_54767);

(statearr_54787_54807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54774 === (10))){
var state_54773__$1 = state_54773;
var statearr_54788_54808 = state_54773__$1;
(statearr_54788_54808[(2)] = fc);

(statearr_54788_54808[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54774 === (8))){
var inst_54762 = (state_54773[(2)]);
var state_54773__$1 = state_54773;
if(cljs.core.truth_(inst_54762)){
var statearr_54789_54809 = state_54773__$1;
(statearr_54789_54809[(1)] = (12));

} else {
var statearr_54790_54810 = state_54773__$1;
(statearr_54790_54810[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__54360__auto___54796,tc,fc))
;
return ((function (switch__54272__auto__,c__54360__auto___54796,tc,fc){
return (function() {
var cljs$core$async$state_machine__54273__auto__ = null;
var cljs$core$async$state_machine__54273__auto____0 = (function (){
var statearr_54791 = [null,null,null,null,null,null,null,null,null];
(statearr_54791[(0)] = cljs$core$async$state_machine__54273__auto__);

(statearr_54791[(1)] = (1));

return statearr_54791;
});
var cljs$core$async$state_machine__54273__auto____1 = (function (state_54773){
while(true){
var ret_value__54274__auto__ = (function (){try{while(true){
var result__54275__auto__ = switch__54272__auto__.call(null,state_54773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54275__auto__;
}
break;
}
}catch (e54792){if((e54792 instanceof Object)){
var ex__54276__auto__ = e54792;
var statearr_54793_54811 = state_54773;
(statearr_54793_54811[(5)] = ex__54276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54812 = state_54773;
state_54773 = G__54812;
continue;
} else {
return ret_value__54274__auto__;
}
break;
}
});
cljs$core$async$state_machine__54273__auto__ = function(state_54773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54273__auto____1.call(this,state_54773);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54273__auto____0;
cljs$core$async$state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54273__auto____1;
return cljs$core$async$state_machine__54273__auto__;
})()
;})(switch__54272__auto__,c__54360__auto___54796,tc,fc))
})();
var state__54362__auto__ = (function (){var statearr_54794 = f__54361__auto__.call(null);
(statearr_54794[(6)] = c__54360__auto___54796);

return statearr_54794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54362__auto__);
});})(c__54360__auto___54796,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__54360__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54360__auto__){
return (function (){
var f__54361__auto__ = (function (){var switch__54272__auto__ = ((function (c__54360__auto__){
return (function (state_54833){
var state_val_54834 = (state_54833[(1)]);
if((state_val_54834 === (7))){
var inst_54829 = (state_54833[(2)]);
var state_54833__$1 = state_54833;
var statearr_54835_54853 = state_54833__$1;
(statearr_54835_54853[(2)] = inst_54829);

(statearr_54835_54853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (1))){
var inst_54813 = init;
var state_54833__$1 = (function (){var statearr_54836 = state_54833;
(statearr_54836[(7)] = inst_54813);

return statearr_54836;
})();
var statearr_54837_54854 = state_54833__$1;
(statearr_54837_54854[(2)] = null);

(statearr_54837_54854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (4))){
var inst_54816 = (state_54833[(8)]);
var inst_54816__$1 = (state_54833[(2)]);
var inst_54817 = (inst_54816__$1 == null);
var state_54833__$1 = (function (){var statearr_54838 = state_54833;
(statearr_54838[(8)] = inst_54816__$1);

return statearr_54838;
})();
if(cljs.core.truth_(inst_54817)){
var statearr_54839_54855 = state_54833__$1;
(statearr_54839_54855[(1)] = (5));

} else {
var statearr_54840_54856 = state_54833__$1;
(statearr_54840_54856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (6))){
var inst_54813 = (state_54833[(7)]);
var inst_54820 = (state_54833[(9)]);
var inst_54816 = (state_54833[(8)]);
var inst_54820__$1 = f.call(null,inst_54813,inst_54816);
var inst_54821 = cljs.core.reduced_QMARK_.call(null,inst_54820__$1);
var state_54833__$1 = (function (){var statearr_54841 = state_54833;
(statearr_54841[(9)] = inst_54820__$1);

return statearr_54841;
})();
if(inst_54821){
var statearr_54842_54857 = state_54833__$1;
(statearr_54842_54857[(1)] = (8));

} else {
var statearr_54843_54858 = state_54833__$1;
(statearr_54843_54858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (3))){
var inst_54831 = (state_54833[(2)]);
var state_54833__$1 = state_54833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54833__$1,inst_54831);
} else {
if((state_val_54834 === (2))){
var state_54833__$1 = state_54833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54833__$1,(4),ch);
} else {
if((state_val_54834 === (9))){
var inst_54820 = (state_54833[(9)]);
var inst_54813 = inst_54820;
var state_54833__$1 = (function (){var statearr_54844 = state_54833;
(statearr_54844[(7)] = inst_54813);

return statearr_54844;
})();
var statearr_54845_54859 = state_54833__$1;
(statearr_54845_54859[(2)] = null);

(statearr_54845_54859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (5))){
var inst_54813 = (state_54833[(7)]);
var state_54833__$1 = state_54833;
var statearr_54846_54860 = state_54833__$1;
(statearr_54846_54860[(2)] = inst_54813);

(statearr_54846_54860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (10))){
var inst_54827 = (state_54833[(2)]);
var state_54833__$1 = state_54833;
var statearr_54847_54861 = state_54833__$1;
(statearr_54847_54861[(2)] = inst_54827);

(statearr_54847_54861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (8))){
var inst_54820 = (state_54833[(9)]);
var inst_54823 = cljs.core.deref.call(null,inst_54820);
var state_54833__$1 = state_54833;
var statearr_54848_54862 = state_54833__$1;
(statearr_54848_54862[(2)] = inst_54823);

(statearr_54848_54862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__54360__auto__))
;
return ((function (switch__54272__auto__,c__54360__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__54273__auto__ = null;
var cljs$core$async$reduce_$_state_machine__54273__auto____0 = (function (){
var statearr_54849 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54849[(0)] = cljs$core$async$reduce_$_state_machine__54273__auto__);

(statearr_54849[(1)] = (1));

return statearr_54849;
});
var cljs$core$async$reduce_$_state_machine__54273__auto____1 = (function (state_54833){
while(true){
var ret_value__54274__auto__ = (function (){try{while(true){
var result__54275__auto__ = switch__54272__auto__.call(null,state_54833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54275__auto__;
}
break;
}
}catch (e54850){if((e54850 instanceof Object)){
var ex__54276__auto__ = e54850;
var statearr_54851_54863 = state_54833;
(statearr_54851_54863[(5)] = ex__54276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54864 = state_54833;
state_54833 = G__54864;
continue;
} else {
return ret_value__54274__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__54273__auto__ = function(state_54833){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__54273__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__54273__auto____1.call(this,state_54833);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__54273__auto____0;
cljs$core$async$reduce_$_state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__54273__auto____1;
return cljs$core$async$reduce_$_state_machine__54273__auto__;
})()
;})(switch__54272__auto__,c__54360__auto__))
})();
var state__54362__auto__ = (function (){var statearr_54852 = f__54361__auto__.call(null);
(statearr_54852[(6)] = c__54360__auto__);

return statearr_54852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54362__auto__);
});})(c__54360__auto__))
);

return c__54360__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__54360__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54360__auto__,f__$1){
return (function (){
var f__54361__auto__ = (function (){var switch__54272__auto__ = ((function (c__54360__auto__,f__$1){
return (function (state_54870){
var state_val_54871 = (state_54870[(1)]);
if((state_val_54871 === (1))){
var inst_54865 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_54870__$1 = state_54870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54870__$1,(2),inst_54865);
} else {
if((state_val_54871 === (2))){
var inst_54867 = (state_54870[(2)]);
var inst_54868 = f__$1.call(null,inst_54867);
var state_54870__$1 = state_54870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54870__$1,inst_54868);
} else {
return null;
}
}
});})(c__54360__auto__,f__$1))
;
return ((function (switch__54272__auto__,c__54360__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__54273__auto__ = null;
var cljs$core$async$transduce_$_state_machine__54273__auto____0 = (function (){
var statearr_54872 = [null,null,null,null,null,null,null];
(statearr_54872[(0)] = cljs$core$async$transduce_$_state_machine__54273__auto__);

(statearr_54872[(1)] = (1));

return statearr_54872;
});
var cljs$core$async$transduce_$_state_machine__54273__auto____1 = (function (state_54870){
while(true){
var ret_value__54274__auto__ = (function (){try{while(true){
var result__54275__auto__ = switch__54272__auto__.call(null,state_54870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54275__auto__;
}
break;
}
}catch (e54873){if((e54873 instanceof Object)){
var ex__54276__auto__ = e54873;
var statearr_54874_54876 = state_54870;
(statearr_54874_54876[(5)] = ex__54276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54877 = state_54870;
state_54870 = G__54877;
continue;
} else {
return ret_value__54274__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__54273__auto__ = function(state_54870){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__54273__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__54273__auto____1.call(this,state_54870);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__54273__auto____0;
cljs$core$async$transduce_$_state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__54273__auto____1;
return cljs$core$async$transduce_$_state_machine__54273__auto__;
})()
;})(switch__54272__auto__,c__54360__auto__,f__$1))
})();
var state__54362__auto__ = (function (){var statearr_54875 = f__54361__auto__.call(null);
(statearr_54875[(6)] = c__54360__auto__);

return statearr_54875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54362__auto__);
});})(c__54360__auto__,f__$1))
);

return c__54360__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__54879 = arguments.length;
switch (G__54879) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__54360__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54360__auto__){
return (function (){
var f__54361__auto__ = (function (){var switch__54272__auto__ = ((function (c__54360__auto__){
return (function (state_54904){
var state_val_54905 = (state_54904[(1)]);
if((state_val_54905 === (7))){
var inst_54886 = (state_54904[(2)]);
var state_54904__$1 = state_54904;
var statearr_54906_54927 = state_54904__$1;
(statearr_54906_54927[(2)] = inst_54886);

(statearr_54906_54927[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54905 === (1))){
var inst_54880 = cljs.core.seq.call(null,coll);
var inst_54881 = inst_54880;
var state_54904__$1 = (function (){var statearr_54907 = state_54904;
(statearr_54907[(7)] = inst_54881);

return statearr_54907;
})();
var statearr_54908_54928 = state_54904__$1;
(statearr_54908_54928[(2)] = null);

(statearr_54908_54928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54905 === (4))){
var inst_54881 = (state_54904[(7)]);
var inst_54884 = cljs.core.first.call(null,inst_54881);
var state_54904__$1 = state_54904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54904__$1,(7),ch,inst_54884);
} else {
if((state_val_54905 === (13))){
var inst_54898 = (state_54904[(2)]);
var state_54904__$1 = state_54904;
var statearr_54909_54929 = state_54904__$1;
(statearr_54909_54929[(2)] = inst_54898);

(statearr_54909_54929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54905 === (6))){
var inst_54889 = (state_54904[(2)]);
var state_54904__$1 = state_54904;
if(cljs.core.truth_(inst_54889)){
var statearr_54910_54930 = state_54904__$1;
(statearr_54910_54930[(1)] = (8));

} else {
var statearr_54911_54931 = state_54904__$1;
(statearr_54911_54931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54905 === (3))){
var inst_54902 = (state_54904[(2)]);
var state_54904__$1 = state_54904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54904__$1,inst_54902);
} else {
if((state_val_54905 === (12))){
var state_54904__$1 = state_54904;
var statearr_54912_54932 = state_54904__$1;
(statearr_54912_54932[(2)] = null);

(statearr_54912_54932[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54905 === (2))){
var inst_54881 = (state_54904[(7)]);
var state_54904__$1 = state_54904;
if(cljs.core.truth_(inst_54881)){
var statearr_54913_54933 = state_54904__$1;
(statearr_54913_54933[(1)] = (4));

} else {
var statearr_54914_54934 = state_54904__$1;
(statearr_54914_54934[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54905 === (11))){
var inst_54895 = cljs.core.async.close_BANG_.call(null,ch);
var state_54904__$1 = state_54904;
var statearr_54915_54935 = state_54904__$1;
(statearr_54915_54935[(2)] = inst_54895);

(statearr_54915_54935[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54905 === (9))){
var state_54904__$1 = state_54904;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54916_54936 = state_54904__$1;
(statearr_54916_54936[(1)] = (11));

} else {
var statearr_54917_54937 = state_54904__$1;
(statearr_54917_54937[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54905 === (5))){
var inst_54881 = (state_54904[(7)]);
var state_54904__$1 = state_54904;
var statearr_54918_54938 = state_54904__$1;
(statearr_54918_54938[(2)] = inst_54881);

(statearr_54918_54938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54905 === (10))){
var inst_54900 = (state_54904[(2)]);
var state_54904__$1 = state_54904;
var statearr_54919_54939 = state_54904__$1;
(statearr_54919_54939[(2)] = inst_54900);

(statearr_54919_54939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54905 === (8))){
var inst_54881 = (state_54904[(7)]);
var inst_54891 = cljs.core.next.call(null,inst_54881);
var inst_54881__$1 = inst_54891;
var state_54904__$1 = (function (){var statearr_54920 = state_54904;
(statearr_54920[(7)] = inst_54881__$1);

return statearr_54920;
})();
var statearr_54921_54940 = state_54904__$1;
(statearr_54921_54940[(2)] = null);

(statearr_54921_54940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__54360__auto__))
;
return ((function (switch__54272__auto__,c__54360__auto__){
return (function() {
var cljs$core$async$state_machine__54273__auto__ = null;
var cljs$core$async$state_machine__54273__auto____0 = (function (){
var statearr_54922 = [null,null,null,null,null,null,null,null];
(statearr_54922[(0)] = cljs$core$async$state_machine__54273__auto__);

(statearr_54922[(1)] = (1));

return statearr_54922;
});
var cljs$core$async$state_machine__54273__auto____1 = (function (state_54904){
while(true){
var ret_value__54274__auto__ = (function (){try{while(true){
var result__54275__auto__ = switch__54272__auto__.call(null,state_54904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54275__auto__;
}
break;
}
}catch (e54923){if((e54923 instanceof Object)){
var ex__54276__auto__ = e54923;
var statearr_54924_54941 = state_54904;
(statearr_54924_54941[(5)] = ex__54276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54942 = state_54904;
state_54904 = G__54942;
continue;
} else {
return ret_value__54274__auto__;
}
break;
}
});
cljs$core$async$state_machine__54273__auto__ = function(state_54904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54273__auto____1.call(this,state_54904);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54273__auto____0;
cljs$core$async$state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54273__auto____1;
return cljs$core$async$state_machine__54273__auto__;
})()
;})(switch__54272__auto__,c__54360__auto__))
})();
var state__54362__auto__ = (function (){var statearr_54925 = f__54361__auto__.call(null);
(statearr_54925[(6)] = c__54360__auto__);

return statearr_54925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54362__auto__);
});})(c__54360__auto__))
);

return c__54360__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__44039__auto__ = (((_ == null))?null:_);
var m__44040__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,_);
} else {
var m__44040__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__44039__auto__ = (((m == null))?null:m);
var m__44040__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__44040__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__44039__auto__ = (((m == null))?null:m);
var m__44040__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,m,ch);
} else {
var m__44040__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__44039__auto__ = (((m == null))?null:m);
var m__44040__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,m);
} else {
var m__44040__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async54943 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54943 = (function (ch,cs,meta54944){
this.ch = ch;
this.cs = cs;
this.meta54944 = meta54944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async54943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_54945,meta54944__$1){
var self__ = this;
var _54945__$1 = this;
return (new cljs.core.async.t_cljs$core$async54943(self__.ch,self__.cs,meta54944__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async54943.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_54945){
var self__ = this;
var _54945__$1 = this;
return self__.meta54944;
});})(cs))
;

cljs.core.async.t_cljs$core$async54943.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54943.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async54943.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54943.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async54943.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async54943.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async54943.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta54944","meta54944",-77053533,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async54943.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54943";

cljs.core.async.t_cljs$core$async54943.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__43981__auto__,writer__43982__auto__,opt__43983__auto__){
return cljs.core._write.call(null,writer__43982__auto__,"cljs.core.async/t_cljs$core$async54943");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async54943 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async54943(ch__$1,cs__$1,meta54944){
return (new cljs.core.async.t_cljs$core$async54943(ch__$1,cs__$1,meta54944));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async54943(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__54360__auto___55165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54360__auto___55165,cs,m,dchan,dctr,done){
return (function (){
var f__54361__auto__ = (function (){var switch__54272__auto__ = ((function (c__54360__auto___55165,cs,m,dchan,dctr,done){
return (function (state_55080){
var state_val_55081 = (state_55080[(1)]);
if((state_val_55081 === (7))){
var inst_55076 = (state_55080[(2)]);
var state_55080__$1 = state_55080;
var statearr_55082_55166 = state_55080__$1;
(statearr_55082_55166[(2)] = inst_55076);

(statearr_55082_55166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (20))){
var inst_54979 = (state_55080[(7)]);
var inst_54991 = cljs.core.first.call(null,inst_54979);
var inst_54992 = cljs.core.nth.call(null,inst_54991,(0),null);
var inst_54993 = cljs.core.nth.call(null,inst_54991,(1),null);
var state_55080__$1 = (function (){var statearr_55083 = state_55080;
(statearr_55083[(8)] = inst_54992);

return statearr_55083;
})();
if(cljs.core.truth_(inst_54993)){
var statearr_55084_55167 = state_55080__$1;
(statearr_55084_55167[(1)] = (22));

} else {
var statearr_55085_55168 = state_55080__$1;
(statearr_55085_55168[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (27))){
var inst_55021 = (state_55080[(9)]);
var inst_55028 = (state_55080[(10)]);
var inst_54948 = (state_55080[(11)]);
var inst_55023 = (state_55080[(12)]);
var inst_55028__$1 = cljs.core._nth.call(null,inst_55021,inst_55023);
var inst_55029 = cljs.core.async.put_BANG_.call(null,inst_55028__$1,inst_54948,done);
var state_55080__$1 = (function (){var statearr_55086 = state_55080;
(statearr_55086[(10)] = inst_55028__$1);

return statearr_55086;
})();
if(cljs.core.truth_(inst_55029)){
var statearr_55087_55169 = state_55080__$1;
(statearr_55087_55169[(1)] = (30));

} else {
var statearr_55088_55170 = state_55080__$1;
(statearr_55088_55170[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (1))){
var state_55080__$1 = state_55080;
var statearr_55089_55171 = state_55080__$1;
(statearr_55089_55171[(2)] = null);

(statearr_55089_55171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (24))){
var inst_54979 = (state_55080[(7)]);
var inst_54998 = (state_55080[(2)]);
var inst_54999 = cljs.core.next.call(null,inst_54979);
var inst_54957 = inst_54999;
var inst_54958 = null;
var inst_54959 = (0);
var inst_54960 = (0);
var state_55080__$1 = (function (){var statearr_55090 = state_55080;
(statearr_55090[(13)] = inst_54959);

(statearr_55090[(14)] = inst_54998);

(statearr_55090[(15)] = inst_54958);

(statearr_55090[(16)] = inst_54957);

(statearr_55090[(17)] = inst_54960);

return statearr_55090;
})();
var statearr_55091_55172 = state_55080__$1;
(statearr_55091_55172[(2)] = null);

(statearr_55091_55172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (39))){
var state_55080__$1 = state_55080;
var statearr_55095_55173 = state_55080__$1;
(statearr_55095_55173[(2)] = null);

(statearr_55095_55173[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (4))){
var inst_54948 = (state_55080[(11)]);
var inst_54948__$1 = (state_55080[(2)]);
var inst_54949 = (inst_54948__$1 == null);
var state_55080__$1 = (function (){var statearr_55096 = state_55080;
(statearr_55096[(11)] = inst_54948__$1);

return statearr_55096;
})();
if(cljs.core.truth_(inst_54949)){
var statearr_55097_55174 = state_55080__$1;
(statearr_55097_55174[(1)] = (5));

} else {
var statearr_55098_55175 = state_55080__$1;
(statearr_55098_55175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (15))){
var inst_54959 = (state_55080[(13)]);
var inst_54958 = (state_55080[(15)]);
var inst_54957 = (state_55080[(16)]);
var inst_54960 = (state_55080[(17)]);
var inst_54975 = (state_55080[(2)]);
var inst_54976 = (inst_54960 + (1));
var tmp55092 = inst_54959;
var tmp55093 = inst_54958;
var tmp55094 = inst_54957;
var inst_54957__$1 = tmp55094;
var inst_54958__$1 = tmp55093;
var inst_54959__$1 = tmp55092;
var inst_54960__$1 = inst_54976;
var state_55080__$1 = (function (){var statearr_55099 = state_55080;
(statearr_55099[(13)] = inst_54959__$1);

(statearr_55099[(15)] = inst_54958__$1);

(statearr_55099[(18)] = inst_54975);

(statearr_55099[(16)] = inst_54957__$1);

(statearr_55099[(17)] = inst_54960__$1);

return statearr_55099;
})();
var statearr_55100_55176 = state_55080__$1;
(statearr_55100_55176[(2)] = null);

(statearr_55100_55176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (21))){
var inst_55002 = (state_55080[(2)]);
var state_55080__$1 = state_55080;
var statearr_55104_55177 = state_55080__$1;
(statearr_55104_55177[(2)] = inst_55002);

(statearr_55104_55177[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (31))){
var inst_55028 = (state_55080[(10)]);
var inst_55032 = done.call(null,null);
var inst_55033 = cljs.core.async.untap_STAR_.call(null,m,inst_55028);
var state_55080__$1 = (function (){var statearr_55105 = state_55080;
(statearr_55105[(19)] = inst_55032);

return statearr_55105;
})();
var statearr_55106_55178 = state_55080__$1;
(statearr_55106_55178[(2)] = inst_55033);

(statearr_55106_55178[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (32))){
var inst_55021 = (state_55080[(9)]);
var inst_55022 = (state_55080[(20)]);
var inst_55020 = (state_55080[(21)]);
var inst_55023 = (state_55080[(12)]);
var inst_55035 = (state_55080[(2)]);
var inst_55036 = (inst_55023 + (1));
var tmp55101 = inst_55021;
var tmp55102 = inst_55022;
var tmp55103 = inst_55020;
var inst_55020__$1 = tmp55103;
var inst_55021__$1 = tmp55101;
var inst_55022__$1 = tmp55102;
var inst_55023__$1 = inst_55036;
var state_55080__$1 = (function (){var statearr_55107 = state_55080;
(statearr_55107[(9)] = inst_55021__$1);

(statearr_55107[(22)] = inst_55035);

(statearr_55107[(20)] = inst_55022__$1);

(statearr_55107[(21)] = inst_55020__$1);

(statearr_55107[(12)] = inst_55023__$1);

return statearr_55107;
})();
var statearr_55108_55179 = state_55080__$1;
(statearr_55108_55179[(2)] = null);

(statearr_55108_55179[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (40))){
var inst_55048 = (state_55080[(23)]);
var inst_55052 = done.call(null,null);
var inst_55053 = cljs.core.async.untap_STAR_.call(null,m,inst_55048);
var state_55080__$1 = (function (){var statearr_55109 = state_55080;
(statearr_55109[(24)] = inst_55052);

return statearr_55109;
})();
var statearr_55110_55180 = state_55080__$1;
(statearr_55110_55180[(2)] = inst_55053);

(statearr_55110_55180[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (33))){
var inst_55039 = (state_55080[(25)]);
var inst_55041 = cljs.core.chunked_seq_QMARK_.call(null,inst_55039);
var state_55080__$1 = state_55080;
if(inst_55041){
var statearr_55111_55181 = state_55080__$1;
(statearr_55111_55181[(1)] = (36));

} else {
var statearr_55112_55182 = state_55080__$1;
(statearr_55112_55182[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (13))){
var inst_54969 = (state_55080[(26)]);
var inst_54972 = cljs.core.async.close_BANG_.call(null,inst_54969);
var state_55080__$1 = state_55080;
var statearr_55113_55183 = state_55080__$1;
(statearr_55113_55183[(2)] = inst_54972);

(statearr_55113_55183[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (22))){
var inst_54992 = (state_55080[(8)]);
var inst_54995 = cljs.core.async.close_BANG_.call(null,inst_54992);
var state_55080__$1 = state_55080;
var statearr_55114_55184 = state_55080__$1;
(statearr_55114_55184[(2)] = inst_54995);

(statearr_55114_55184[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (36))){
var inst_55039 = (state_55080[(25)]);
var inst_55043 = cljs.core.chunk_first.call(null,inst_55039);
var inst_55044 = cljs.core.chunk_rest.call(null,inst_55039);
var inst_55045 = cljs.core.count.call(null,inst_55043);
var inst_55020 = inst_55044;
var inst_55021 = inst_55043;
var inst_55022 = inst_55045;
var inst_55023 = (0);
var state_55080__$1 = (function (){var statearr_55115 = state_55080;
(statearr_55115[(9)] = inst_55021);

(statearr_55115[(20)] = inst_55022);

(statearr_55115[(21)] = inst_55020);

(statearr_55115[(12)] = inst_55023);

return statearr_55115;
})();
var statearr_55116_55185 = state_55080__$1;
(statearr_55116_55185[(2)] = null);

(statearr_55116_55185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (41))){
var inst_55039 = (state_55080[(25)]);
var inst_55055 = (state_55080[(2)]);
var inst_55056 = cljs.core.next.call(null,inst_55039);
var inst_55020 = inst_55056;
var inst_55021 = null;
var inst_55022 = (0);
var inst_55023 = (0);
var state_55080__$1 = (function (){var statearr_55117 = state_55080;
(statearr_55117[(9)] = inst_55021);

(statearr_55117[(27)] = inst_55055);

(statearr_55117[(20)] = inst_55022);

(statearr_55117[(21)] = inst_55020);

(statearr_55117[(12)] = inst_55023);

return statearr_55117;
})();
var statearr_55118_55186 = state_55080__$1;
(statearr_55118_55186[(2)] = null);

(statearr_55118_55186[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (43))){
var state_55080__$1 = state_55080;
var statearr_55119_55187 = state_55080__$1;
(statearr_55119_55187[(2)] = null);

(statearr_55119_55187[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (29))){
var inst_55064 = (state_55080[(2)]);
var state_55080__$1 = state_55080;
var statearr_55120_55188 = state_55080__$1;
(statearr_55120_55188[(2)] = inst_55064);

(statearr_55120_55188[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (44))){
var inst_55073 = (state_55080[(2)]);
var state_55080__$1 = (function (){var statearr_55121 = state_55080;
(statearr_55121[(28)] = inst_55073);

return statearr_55121;
})();
var statearr_55122_55189 = state_55080__$1;
(statearr_55122_55189[(2)] = null);

(statearr_55122_55189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (6))){
var inst_55012 = (state_55080[(29)]);
var inst_55011 = cljs.core.deref.call(null,cs);
var inst_55012__$1 = cljs.core.keys.call(null,inst_55011);
var inst_55013 = cljs.core.count.call(null,inst_55012__$1);
var inst_55014 = cljs.core.reset_BANG_.call(null,dctr,inst_55013);
var inst_55019 = cljs.core.seq.call(null,inst_55012__$1);
var inst_55020 = inst_55019;
var inst_55021 = null;
var inst_55022 = (0);
var inst_55023 = (0);
var state_55080__$1 = (function (){var statearr_55123 = state_55080;
(statearr_55123[(30)] = inst_55014);

(statearr_55123[(9)] = inst_55021);

(statearr_55123[(20)] = inst_55022);

(statearr_55123[(21)] = inst_55020);

(statearr_55123[(29)] = inst_55012__$1);

(statearr_55123[(12)] = inst_55023);

return statearr_55123;
})();
var statearr_55124_55190 = state_55080__$1;
(statearr_55124_55190[(2)] = null);

(statearr_55124_55190[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (28))){
var inst_55039 = (state_55080[(25)]);
var inst_55020 = (state_55080[(21)]);
var inst_55039__$1 = cljs.core.seq.call(null,inst_55020);
var state_55080__$1 = (function (){var statearr_55125 = state_55080;
(statearr_55125[(25)] = inst_55039__$1);

return statearr_55125;
})();
if(inst_55039__$1){
var statearr_55126_55191 = state_55080__$1;
(statearr_55126_55191[(1)] = (33));

} else {
var statearr_55127_55192 = state_55080__$1;
(statearr_55127_55192[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (25))){
var inst_55022 = (state_55080[(20)]);
var inst_55023 = (state_55080[(12)]);
var inst_55025 = (inst_55023 < inst_55022);
var inst_55026 = inst_55025;
var state_55080__$1 = state_55080;
if(cljs.core.truth_(inst_55026)){
var statearr_55128_55193 = state_55080__$1;
(statearr_55128_55193[(1)] = (27));

} else {
var statearr_55129_55194 = state_55080__$1;
(statearr_55129_55194[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (34))){
var state_55080__$1 = state_55080;
var statearr_55130_55195 = state_55080__$1;
(statearr_55130_55195[(2)] = null);

(statearr_55130_55195[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (17))){
var state_55080__$1 = state_55080;
var statearr_55131_55196 = state_55080__$1;
(statearr_55131_55196[(2)] = null);

(statearr_55131_55196[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (3))){
var inst_55078 = (state_55080[(2)]);
var state_55080__$1 = state_55080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55080__$1,inst_55078);
} else {
if((state_val_55081 === (12))){
var inst_55007 = (state_55080[(2)]);
var state_55080__$1 = state_55080;
var statearr_55132_55197 = state_55080__$1;
(statearr_55132_55197[(2)] = inst_55007);

(statearr_55132_55197[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (2))){
var state_55080__$1 = state_55080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55080__$1,(4),ch);
} else {
if((state_val_55081 === (23))){
var state_55080__$1 = state_55080;
var statearr_55133_55198 = state_55080__$1;
(statearr_55133_55198[(2)] = null);

(statearr_55133_55198[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (35))){
var inst_55062 = (state_55080[(2)]);
var state_55080__$1 = state_55080;
var statearr_55134_55199 = state_55080__$1;
(statearr_55134_55199[(2)] = inst_55062);

(statearr_55134_55199[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (19))){
var inst_54979 = (state_55080[(7)]);
var inst_54983 = cljs.core.chunk_first.call(null,inst_54979);
var inst_54984 = cljs.core.chunk_rest.call(null,inst_54979);
var inst_54985 = cljs.core.count.call(null,inst_54983);
var inst_54957 = inst_54984;
var inst_54958 = inst_54983;
var inst_54959 = inst_54985;
var inst_54960 = (0);
var state_55080__$1 = (function (){var statearr_55135 = state_55080;
(statearr_55135[(13)] = inst_54959);

(statearr_55135[(15)] = inst_54958);

(statearr_55135[(16)] = inst_54957);

(statearr_55135[(17)] = inst_54960);

return statearr_55135;
})();
var statearr_55136_55200 = state_55080__$1;
(statearr_55136_55200[(2)] = null);

(statearr_55136_55200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (11))){
var inst_54979 = (state_55080[(7)]);
var inst_54957 = (state_55080[(16)]);
var inst_54979__$1 = cljs.core.seq.call(null,inst_54957);
var state_55080__$1 = (function (){var statearr_55137 = state_55080;
(statearr_55137[(7)] = inst_54979__$1);

return statearr_55137;
})();
if(inst_54979__$1){
var statearr_55138_55201 = state_55080__$1;
(statearr_55138_55201[(1)] = (16));

} else {
var statearr_55139_55202 = state_55080__$1;
(statearr_55139_55202[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (9))){
var inst_55009 = (state_55080[(2)]);
var state_55080__$1 = state_55080;
var statearr_55140_55203 = state_55080__$1;
(statearr_55140_55203[(2)] = inst_55009);

(statearr_55140_55203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (5))){
var inst_54955 = cljs.core.deref.call(null,cs);
var inst_54956 = cljs.core.seq.call(null,inst_54955);
var inst_54957 = inst_54956;
var inst_54958 = null;
var inst_54959 = (0);
var inst_54960 = (0);
var state_55080__$1 = (function (){var statearr_55141 = state_55080;
(statearr_55141[(13)] = inst_54959);

(statearr_55141[(15)] = inst_54958);

(statearr_55141[(16)] = inst_54957);

(statearr_55141[(17)] = inst_54960);

return statearr_55141;
})();
var statearr_55142_55204 = state_55080__$1;
(statearr_55142_55204[(2)] = null);

(statearr_55142_55204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (14))){
var state_55080__$1 = state_55080;
var statearr_55143_55205 = state_55080__$1;
(statearr_55143_55205[(2)] = null);

(statearr_55143_55205[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (45))){
var inst_55070 = (state_55080[(2)]);
var state_55080__$1 = state_55080;
var statearr_55144_55206 = state_55080__$1;
(statearr_55144_55206[(2)] = inst_55070);

(statearr_55144_55206[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (26))){
var inst_55012 = (state_55080[(29)]);
var inst_55066 = (state_55080[(2)]);
var inst_55067 = cljs.core.seq.call(null,inst_55012);
var state_55080__$1 = (function (){var statearr_55145 = state_55080;
(statearr_55145[(31)] = inst_55066);

return statearr_55145;
})();
if(inst_55067){
var statearr_55146_55207 = state_55080__$1;
(statearr_55146_55207[(1)] = (42));

} else {
var statearr_55147_55208 = state_55080__$1;
(statearr_55147_55208[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (16))){
var inst_54979 = (state_55080[(7)]);
var inst_54981 = cljs.core.chunked_seq_QMARK_.call(null,inst_54979);
var state_55080__$1 = state_55080;
if(inst_54981){
var statearr_55148_55209 = state_55080__$1;
(statearr_55148_55209[(1)] = (19));

} else {
var statearr_55149_55210 = state_55080__$1;
(statearr_55149_55210[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (38))){
var inst_55059 = (state_55080[(2)]);
var state_55080__$1 = state_55080;
var statearr_55150_55211 = state_55080__$1;
(statearr_55150_55211[(2)] = inst_55059);

(statearr_55150_55211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (30))){
var state_55080__$1 = state_55080;
var statearr_55151_55212 = state_55080__$1;
(statearr_55151_55212[(2)] = null);

(statearr_55151_55212[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (10))){
var inst_54958 = (state_55080[(15)]);
var inst_54960 = (state_55080[(17)]);
var inst_54968 = cljs.core._nth.call(null,inst_54958,inst_54960);
var inst_54969 = cljs.core.nth.call(null,inst_54968,(0),null);
var inst_54970 = cljs.core.nth.call(null,inst_54968,(1),null);
var state_55080__$1 = (function (){var statearr_55152 = state_55080;
(statearr_55152[(26)] = inst_54969);

return statearr_55152;
})();
if(cljs.core.truth_(inst_54970)){
var statearr_55153_55213 = state_55080__$1;
(statearr_55153_55213[(1)] = (13));

} else {
var statearr_55154_55214 = state_55080__$1;
(statearr_55154_55214[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (18))){
var inst_55005 = (state_55080[(2)]);
var state_55080__$1 = state_55080;
var statearr_55155_55215 = state_55080__$1;
(statearr_55155_55215[(2)] = inst_55005);

(statearr_55155_55215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (42))){
var state_55080__$1 = state_55080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55080__$1,(45),dchan);
} else {
if((state_val_55081 === (37))){
var inst_55039 = (state_55080[(25)]);
var inst_55048 = (state_55080[(23)]);
var inst_54948 = (state_55080[(11)]);
var inst_55048__$1 = cljs.core.first.call(null,inst_55039);
var inst_55049 = cljs.core.async.put_BANG_.call(null,inst_55048__$1,inst_54948,done);
var state_55080__$1 = (function (){var statearr_55156 = state_55080;
(statearr_55156[(23)] = inst_55048__$1);

return statearr_55156;
})();
if(cljs.core.truth_(inst_55049)){
var statearr_55157_55216 = state_55080__$1;
(statearr_55157_55216[(1)] = (39));

} else {
var statearr_55158_55217 = state_55080__$1;
(statearr_55158_55217[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55081 === (8))){
var inst_54959 = (state_55080[(13)]);
var inst_54960 = (state_55080[(17)]);
var inst_54962 = (inst_54960 < inst_54959);
var inst_54963 = inst_54962;
var state_55080__$1 = state_55080;
if(cljs.core.truth_(inst_54963)){
var statearr_55159_55218 = state_55080__$1;
(statearr_55159_55218[(1)] = (10));

} else {
var statearr_55160_55219 = state_55080__$1;
(statearr_55160_55219[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__54360__auto___55165,cs,m,dchan,dctr,done))
;
return ((function (switch__54272__auto__,c__54360__auto___55165,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__54273__auto__ = null;
var cljs$core$async$mult_$_state_machine__54273__auto____0 = (function (){
var statearr_55161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55161[(0)] = cljs$core$async$mult_$_state_machine__54273__auto__);

(statearr_55161[(1)] = (1));

return statearr_55161;
});
var cljs$core$async$mult_$_state_machine__54273__auto____1 = (function (state_55080){
while(true){
var ret_value__54274__auto__ = (function (){try{while(true){
var result__54275__auto__ = switch__54272__auto__.call(null,state_55080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54275__auto__;
}
break;
}
}catch (e55162){if((e55162 instanceof Object)){
var ex__54276__auto__ = e55162;
var statearr_55163_55220 = state_55080;
(statearr_55163_55220[(5)] = ex__54276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55221 = state_55080;
state_55080 = G__55221;
continue;
} else {
return ret_value__54274__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__54273__auto__ = function(state_55080){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__54273__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__54273__auto____1.call(this,state_55080);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__54273__auto____0;
cljs$core$async$mult_$_state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__54273__auto____1;
return cljs$core$async$mult_$_state_machine__54273__auto__;
})()
;})(switch__54272__auto__,c__54360__auto___55165,cs,m,dchan,dctr,done))
})();
var state__54362__auto__ = (function (){var statearr_55164 = f__54361__auto__.call(null);
(statearr_55164[(6)] = c__54360__auto___55165);

return statearr_55164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54362__auto__);
});})(c__54360__auto___55165,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__55223 = arguments.length;
switch (G__55223) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__44039__auto__ = (((m == null))?null:m);
var m__44040__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,m,ch);
} else {
var m__44040__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__44039__auto__ = (((m == null))?null:m);
var m__44040__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,m,ch);
} else {
var m__44040__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__44039__auto__ = (((m == null))?null:m);
var m__44040__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,m);
} else {
var m__44040__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__44039__auto__ = (((m == null))?null:m);
var m__44040__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,m,state_map);
} else {
var m__44040__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__44039__auto__ = (((m == null))?null:m);
var m__44040__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,m,mode);
} else {
var m__44040__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__44534__auto__ = [];
var len__44527__auto___55235 = arguments.length;
var i__44528__auto___55236 = (0);
while(true){
if((i__44528__auto___55236 < len__44527__auto___55235)){
args__44534__auto__.push((arguments[i__44528__auto___55236]));

var G__55237 = (i__44528__auto___55236 + (1));
i__44528__auto___55236 = G__55237;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((3) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__44535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__55229){
var map__55230 = p__55229;
var map__55230__$1 = ((((!((map__55230 == null)))?((((map__55230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55230.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55230):map__55230);
var opts = map__55230__$1;
var statearr_55232_55238 = state;
(statearr_55232_55238[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__55230,map__55230__$1,opts){
return (function (val){
var statearr_55233_55239 = state;
(statearr_55233_55239[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__55230,map__55230__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_55234_55240 = state;
(statearr_55234_55240[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq55225){
var G__55226 = cljs.core.first.call(null,seq55225);
var seq55225__$1 = cljs.core.next.call(null,seq55225);
var G__55227 = cljs.core.first.call(null,seq55225__$1);
var seq55225__$2 = cljs.core.next.call(null,seq55225__$1);
var G__55228 = cljs.core.first.call(null,seq55225__$2);
var seq55225__$3 = cljs.core.next.call(null,seq55225__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__55226,G__55227,G__55228,seq55225__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async55241 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55241 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta55242){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta55242 = meta55242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async55241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_55243,meta55242__$1){
var self__ = this;
var _55243__$1 = this;
return (new cljs.core.async.t_cljs$core$async55241(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta55242__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55241.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_55243){
var self__ = this;
var _55243__$1 = this;
return self__.meta55242;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55241.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55241.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55241.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55241.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55241.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55241.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55241.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55241.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55241.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta55242","meta55242",1441500903,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55241.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55241.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55241";

cljs.core.async.t_cljs$core$async55241.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__43981__auto__,writer__43982__auto__,opt__43983__auto__){
return cljs.core._write.call(null,writer__43982__auto__,"cljs.core.async/t_cljs$core$async55241");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async55241 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async55241(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta55242){
return (new cljs.core.async.t_cljs$core$async55241(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta55242));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async55241(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__54360__auto___55405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54360__auto___55405,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__54361__auto__ = (function (){var switch__54272__auto__ = ((function (c__54360__auto___55405,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_55345){
var state_val_55346 = (state_55345[(1)]);
if((state_val_55346 === (7))){
var inst_55260 = (state_55345[(2)]);
var state_55345__$1 = state_55345;
var statearr_55347_55406 = state_55345__$1;
(statearr_55347_55406[(2)] = inst_55260);

(statearr_55347_55406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (20))){
var inst_55272 = (state_55345[(7)]);
var state_55345__$1 = state_55345;
var statearr_55348_55407 = state_55345__$1;
(statearr_55348_55407[(2)] = inst_55272);

(statearr_55348_55407[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (27))){
var state_55345__$1 = state_55345;
var statearr_55349_55408 = state_55345__$1;
(statearr_55349_55408[(2)] = null);

(statearr_55349_55408[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (1))){
var inst_55247 = (state_55345[(8)]);
var inst_55247__$1 = calc_state.call(null);
var inst_55249 = (inst_55247__$1 == null);
var inst_55250 = cljs.core.not.call(null,inst_55249);
var state_55345__$1 = (function (){var statearr_55350 = state_55345;
(statearr_55350[(8)] = inst_55247__$1);

return statearr_55350;
})();
if(inst_55250){
var statearr_55351_55409 = state_55345__$1;
(statearr_55351_55409[(1)] = (2));

} else {
var statearr_55352_55410 = state_55345__$1;
(statearr_55352_55410[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (24))){
var inst_55319 = (state_55345[(9)]);
var inst_55296 = (state_55345[(10)]);
var inst_55305 = (state_55345[(11)]);
var inst_55319__$1 = inst_55296.call(null,inst_55305);
var state_55345__$1 = (function (){var statearr_55353 = state_55345;
(statearr_55353[(9)] = inst_55319__$1);

return statearr_55353;
})();
if(cljs.core.truth_(inst_55319__$1)){
var statearr_55354_55411 = state_55345__$1;
(statearr_55354_55411[(1)] = (29));

} else {
var statearr_55355_55412 = state_55345__$1;
(statearr_55355_55412[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (4))){
var inst_55263 = (state_55345[(2)]);
var state_55345__$1 = state_55345;
if(cljs.core.truth_(inst_55263)){
var statearr_55356_55413 = state_55345__$1;
(statearr_55356_55413[(1)] = (8));

} else {
var statearr_55357_55414 = state_55345__$1;
(statearr_55357_55414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (15))){
var inst_55290 = (state_55345[(2)]);
var state_55345__$1 = state_55345;
if(cljs.core.truth_(inst_55290)){
var statearr_55358_55415 = state_55345__$1;
(statearr_55358_55415[(1)] = (19));

} else {
var statearr_55359_55416 = state_55345__$1;
(statearr_55359_55416[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (21))){
var inst_55295 = (state_55345[(12)]);
var inst_55295__$1 = (state_55345[(2)]);
var inst_55296 = cljs.core.get.call(null,inst_55295__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55297 = cljs.core.get.call(null,inst_55295__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55298 = cljs.core.get.call(null,inst_55295__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_55345__$1 = (function (){var statearr_55360 = state_55345;
(statearr_55360[(13)] = inst_55297);

(statearr_55360[(10)] = inst_55296);

(statearr_55360[(12)] = inst_55295__$1);

return statearr_55360;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_55345__$1,(22),inst_55298);
} else {
if((state_val_55346 === (31))){
var inst_55327 = (state_55345[(2)]);
var state_55345__$1 = state_55345;
if(cljs.core.truth_(inst_55327)){
var statearr_55361_55417 = state_55345__$1;
(statearr_55361_55417[(1)] = (32));

} else {
var statearr_55362_55418 = state_55345__$1;
(statearr_55362_55418[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (32))){
var inst_55304 = (state_55345[(14)]);
var state_55345__$1 = state_55345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55345__$1,(35),out,inst_55304);
} else {
if((state_val_55346 === (33))){
var inst_55295 = (state_55345[(12)]);
var inst_55272 = inst_55295;
var state_55345__$1 = (function (){var statearr_55363 = state_55345;
(statearr_55363[(7)] = inst_55272);

return statearr_55363;
})();
var statearr_55364_55419 = state_55345__$1;
(statearr_55364_55419[(2)] = null);

(statearr_55364_55419[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (13))){
var inst_55272 = (state_55345[(7)]);
var inst_55279 = inst_55272.cljs$lang$protocol_mask$partition0$;
var inst_55280 = (inst_55279 & (64));
var inst_55281 = inst_55272.cljs$core$ISeq$;
var inst_55282 = (cljs.core.PROTOCOL_SENTINEL === inst_55281);
var inst_55283 = (inst_55280) || (inst_55282);
var state_55345__$1 = state_55345;
if(cljs.core.truth_(inst_55283)){
var statearr_55365_55420 = state_55345__$1;
(statearr_55365_55420[(1)] = (16));

} else {
var statearr_55366_55421 = state_55345__$1;
(statearr_55366_55421[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (22))){
var inst_55304 = (state_55345[(14)]);
var inst_55305 = (state_55345[(11)]);
var inst_55303 = (state_55345[(2)]);
var inst_55304__$1 = cljs.core.nth.call(null,inst_55303,(0),null);
var inst_55305__$1 = cljs.core.nth.call(null,inst_55303,(1),null);
var inst_55306 = (inst_55304__$1 == null);
var inst_55307 = cljs.core._EQ_.call(null,inst_55305__$1,change);
var inst_55308 = (inst_55306) || (inst_55307);
var state_55345__$1 = (function (){var statearr_55367 = state_55345;
(statearr_55367[(14)] = inst_55304__$1);

(statearr_55367[(11)] = inst_55305__$1);

return statearr_55367;
})();
if(cljs.core.truth_(inst_55308)){
var statearr_55368_55422 = state_55345__$1;
(statearr_55368_55422[(1)] = (23));

} else {
var statearr_55369_55423 = state_55345__$1;
(statearr_55369_55423[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (36))){
var inst_55295 = (state_55345[(12)]);
var inst_55272 = inst_55295;
var state_55345__$1 = (function (){var statearr_55370 = state_55345;
(statearr_55370[(7)] = inst_55272);

return statearr_55370;
})();
var statearr_55371_55424 = state_55345__$1;
(statearr_55371_55424[(2)] = null);

(statearr_55371_55424[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (29))){
var inst_55319 = (state_55345[(9)]);
var state_55345__$1 = state_55345;
var statearr_55372_55425 = state_55345__$1;
(statearr_55372_55425[(2)] = inst_55319);

(statearr_55372_55425[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (6))){
var state_55345__$1 = state_55345;
var statearr_55373_55426 = state_55345__$1;
(statearr_55373_55426[(2)] = false);

(statearr_55373_55426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (28))){
var inst_55315 = (state_55345[(2)]);
var inst_55316 = calc_state.call(null);
var inst_55272 = inst_55316;
var state_55345__$1 = (function (){var statearr_55374 = state_55345;
(statearr_55374[(7)] = inst_55272);

(statearr_55374[(15)] = inst_55315);

return statearr_55374;
})();
var statearr_55375_55427 = state_55345__$1;
(statearr_55375_55427[(2)] = null);

(statearr_55375_55427[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (25))){
var inst_55341 = (state_55345[(2)]);
var state_55345__$1 = state_55345;
var statearr_55376_55428 = state_55345__$1;
(statearr_55376_55428[(2)] = inst_55341);

(statearr_55376_55428[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (34))){
var inst_55339 = (state_55345[(2)]);
var state_55345__$1 = state_55345;
var statearr_55377_55429 = state_55345__$1;
(statearr_55377_55429[(2)] = inst_55339);

(statearr_55377_55429[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (17))){
var state_55345__$1 = state_55345;
var statearr_55378_55430 = state_55345__$1;
(statearr_55378_55430[(2)] = false);

(statearr_55378_55430[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (3))){
var state_55345__$1 = state_55345;
var statearr_55379_55431 = state_55345__$1;
(statearr_55379_55431[(2)] = false);

(statearr_55379_55431[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (12))){
var inst_55343 = (state_55345[(2)]);
var state_55345__$1 = state_55345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55345__$1,inst_55343);
} else {
if((state_val_55346 === (2))){
var inst_55247 = (state_55345[(8)]);
var inst_55252 = inst_55247.cljs$lang$protocol_mask$partition0$;
var inst_55253 = (inst_55252 & (64));
var inst_55254 = inst_55247.cljs$core$ISeq$;
var inst_55255 = (cljs.core.PROTOCOL_SENTINEL === inst_55254);
var inst_55256 = (inst_55253) || (inst_55255);
var state_55345__$1 = state_55345;
if(cljs.core.truth_(inst_55256)){
var statearr_55380_55432 = state_55345__$1;
(statearr_55380_55432[(1)] = (5));

} else {
var statearr_55381_55433 = state_55345__$1;
(statearr_55381_55433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (23))){
var inst_55304 = (state_55345[(14)]);
var inst_55310 = (inst_55304 == null);
var state_55345__$1 = state_55345;
if(cljs.core.truth_(inst_55310)){
var statearr_55382_55434 = state_55345__$1;
(statearr_55382_55434[(1)] = (26));

} else {
var statearr_55383_55435 = state_55345__$1;
(statearr_55383_55435[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (35))){
var inst_55330 = (state_55345[(2)]);
var state_55345__$1 = state_55345;
if(cljs.core.truth_(inst_55330)){
var statearr_55384_55436 = state_55345__$1;
(statearr_55384_55436[(1)] = (36));

} else {
var statearr_55385_55437 = state_55345__$1;
(statearr_55385_55437[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (19))){
var inst_55272 = (state_55345[(7)]);
var inst_55292 = cljs.core.apply.call(null,cljs.core.hash_map,inst_55272);
var state_55345__$1 = state_55345;
var statearr_55386_55438 = state_55345__$1;
(statearr_55386_55438[(2)] = inst_55292);

(statearr_55386_55438[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (11))){
var inst_55272 = (state_55345[(7)]);
var inst_55276 = (inst_55272 == null);
var inst_55277 = cljs.core.not.call(null,inst_55276);
var state_55345__$1 = state_55345;
if(inst_55277){
var statearr_55387_55439 = state_55345__$1;
(statearr_55387_55439[(1)] = (13));

} else {
var statearr_55388_55440 = state_55345__$1;
(statearr_55388_55440[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (9))){
var inst_55247 = (state_55345[(8)]);
var state_55345__$1 = state_55345;
var statearr_55389_55441 = state_55345__$1;
(statearr_55389_55441[(2)] = inst_55247);

(statearr_55389_55441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (5))){
var state_55345__$1 = state_55345;
var statearr_55390_55442 = state_55345__$1;
(statearr_55390_55442[(2)] = true);

(statearr_55390_55442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (14))){
var state_55345__$1 = state_55345;
var statearr_55391_55443 = state_55345__$1;
(statearr_55391_55443[(2)] = false);

(statearr_55391_55443[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (26))){
var inst_55305 = (state_55345[(11)]);
var inst_55312 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_55305);
var state_55345__$1 = state_55345;
var statearr_55392_55444 = state_55345__$1;
(statearr_55392_55444[(2)] = inst_55312);

(statearr_55392_55444[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (16))){
var state_55345__$1 = state_55345;
var statearr_55393_55445 = state_55345__$1;
(statearr_55393_55445[(2)] = true);

(statearr_55393_55445[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (38))){
var inst_55335 = (state_55345[(2)]);
var state_55345__$1 = state_55345;
var statearr_55394_55446 = state_55345__$1;
(statearr_55394_55446[(2)] = inst_55335);

(statearr_55394_55446[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (30))){
var inst_55297 = (state_55345[(13)]);
var inst_55296 = (state_55345[(10)]);
var inst_55305 = (state_55345[(11)]);
var inst_55322 = cljs.core.empty_QMARK_.call(null,inst_55296);
var inst_55323 = inst_55297.call(null,inst_55305);
var inst_55324 = cljs.core.not.call(null,inst_55323);
var inst_55325 = (inst_55322) && (inst_55324);
var state_55345__$1 = state_55345;
var statearr_55395_55447 = state_55345__$1;
(statearr_55395_55447[(2)] = inst_55325);

(statearr_55395_55447[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (10))){
var inst_55247 = (state_55345[(8)]);
var inst_55268 = (state_55345[(2)]);
var inst_55269 = cljs.core.get.call(null,inst_55268,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55270 = cljs.core.get.call(null,inst_55268,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55271 = cljs.core.get.call(null,inst_55268,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_55272 = inst_55247;
var state_55345__$1 = (function (){var statearr_55396 = state_55345;
(statearr_55396[(7)] = inst_55272);

(statearr_55396[(16)] = inst_55269);

(statearr_55396[(17)] = inst_55271);

(statearr_55396[(18)] = inst_55270);

return statearr_55396;
})();
var statearr_55397_55448 = state_55345__$1;
(statearr_55397_55448[(2)] = null);

(statearr_55397_55448[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (18))){
var inst_55287 = (state_55345[(2)]);
var state_55345__$1 = state_55345;
var statearr_55398_55449 = state_55345__$1;
(statearr_55398_55449[(2)] = inst_55287);

(statearr_55398_55449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (37))){
var state_55345__$1 = state_55345;
var statearr_55399_55450 = state_55345__$1;
(statearr_55399_55450[(2)] = null);

(statearr_55399_55450[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55346 === (8))){
var inst_55247 = (state_55345[(8)]);
var inst_55265 = cljs.core.apply.call(null,cljs.core.hash_map,inst_55247);
var state_55345__$1 = state_55345;
var statearr_55400_55451 = state_55345__$1;
(statearr_55400_55451[(2)] = inst_55265);

(statearr_55400_55451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__54360__auto___55405,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__54272__auto__,c__54360__auto___55405,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__54273__auto__ = null;
var cljs$core$async$mix_$_state_machine__54273__auto____0 = (function (){
var statearr_55401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55401[(0)] = cljs$core$async$mix_$_state_machine__54273__auto__);

(statearr_55401[(1)] = (1));

return statearr_55401;
});
var cljs$core$async$mix_$_state_machine__54273__auto____1 = (function (state_55345){
while(true){
var ret_value__54274__auto__ = (function (){try{while(true){
var result__54275__auto__ = switch__54272__auto__.call(null,state_55345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54275__auto__;
}
break;
}
}catch (e55402){if((e55402 instanceof Object)){
var ex__54276__auto__ = e55402;
var statearr_55403_55452 = state_55345;
(statearr_55403_55452[(5)] = ex__54276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55453 = state_55345;
state_55345 = G__55453;
continue;
} else {
return ret_value__54274__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__54273__auto__ = function(state_55345){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__54273__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__54273__auto____1.call(this,state_55345);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__54273__auto____0;
cljs$core$async$mix_$_state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__54273__auto____1;
return cljs$core$async$mix_$_state_machine__54273__auto__;
})()
;})(switch__54272__auto__,c__54360__auto___55405,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__54362__auto__ = (function (){var statearr_55404 = f__54361__auto__.call(null);
(statearr_55404[(6)] = c__54360__auto___55405);

return statearr_55404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54362__auto__);
});})(c__54360__auto___55405,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__44039__auto__ = (((p == null))?null:p);
var m__44040__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__44040__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__44039__auto__ = (((p == null))?null:p);
var m__44040__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,p,v,ch);
} else {
var m__44040__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__55455 = arguments.length;
switch (G__55455) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__44039__auto__ = (((p == null))?null:p);
var m__44040__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,p);
} else {
var m__44040__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__44039__auto__ = (((p == null))?null:p);
var m__44040__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__44039__auto__)]);
if(!((m__44040__auto__ == null))){
return m__44040__auto__.call(null,p,v);
} else {
var m__44040__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__44040__auto____$1 == null))){
return m__44040__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__55459 = arguments.length;
switch (G__55459) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__43356__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__43356__auto__)){
return or__43356__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__43356__auto__,mults){
return (function (p1__55457_SHARP_){
if(cljs.core.truth_(p1__55457_SHARP_.call(null,topic))){
return p1__55457_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__55457_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__43356__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async55460 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55460 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta55461){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta55461 = meta55461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async55460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_55462,meta55461__$1){
var self__ = this;
var _55462__$1 = this;
return (new cljs.core.async.t_cljs$core$async55460(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta55461__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55460.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_55462){
var self__ = this;
var _55462__$1 = this;
return self__.meta55461;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55460.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55460.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55460.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55460.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55460.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55460.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55460.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55460.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta55461","meta55461",-1685796331,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55460.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55460";

cljs.core.async.t_cljs$core$async55460.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__43981__auto__,writer__43982__auto__,opt__43983__auto__){
return cljs.core._write.call(null,writer__43982__auto__,"cljs.core.async/t_cljs$core$async55460");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async55460 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async55460(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta55461){
return (new cljs.core.async.t_cljs$core$async55460(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta55461));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async55460(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__54360__auto___55580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54360__auto___55580,mults,ensure_mult,p){
return (function (){
var f__54361__auto__ = (function (){var switch__54272__auto__ = ((function (c__54360__auto___55580,mults,ensure_mult,p){
return (function (state_55534){
var state_val_55535 = (state_55534[(1)]);
if((state_val_55535 === (7))){
var inst_55530 = (state_55534[(2)]);
var state_55534__$1 = state_55534;
var statearr_55536_55581 = state_55534__$1;
(statearr_55536_55581[(2)] = inst_55530);

(statearr_55536_55581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (20))){
var state_55534__$1 = state_55534;
var statearr_55537_55582 = state_55534__$1;
(statearr_55537_55582[(2)] = null);

(statearr_55537_55582[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (1))){
var state_55534__$1 = state_55534;
var statearr_55538_55583 = state_55534__$1;
(statearr_55538_55583[(2)] = null);

(statearr_55538_55583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (24))){
var inst_55513 = (state_55534[(7)]);
var inst_55522 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_55513);
var state_55534__$1 = state_55534;
var statearr_55539_55584 = state_55534__$1;
(statearr_55539_55584[(2)] = inst_55522);

(statearr_55539_55584[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (4))){
var inst_55465 = (state_55534[(8)]);
var inst_55465__$1 = (state_55534[(2)]);
var inst_55466 = (inst_55465__$1 == null);
var state_55534__$1 = (function (){var statearr_55540 = state_55534;
(statearr_55540[(8)] = inst_55465__$1);

return statearr_55540;
})();
if(cljs.core.truth_(inst_55466)){
var statearr_55541_55585 = state_55534__$1;
(statearr_55541_55585[(1)] = (5));

} else {
var statearr_55542_55586 = state_55534__$1;
(statearr_55542_55586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (15))){
var inst_55507 = (state_55534[(2)]);
var state_55534__$1 = state_55534;
var statearr_55543_55587 = state_55534__$1;
(statearr_55543_55587[(2)] = inst_55507);

(statearr_55543_55587[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (21))){
var inst_55527 = (state_55534[(2)]);
var state_55534__$1 = (function (){var statearr_55544 = state_55534;
(statearr_55544[(9)] = inst_55527);

return statearr_55544;
})();
var statearr_55545_55588 = state_55534__$1;
(statearr_55545_55588[(2)] = null);

(statearr_55545_55588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (13))){
var inst_55489 = (state_55534[(10)]);
var inst_55491 = cljs.core.chunked_seq_QMARK_.call(null,inst_55489);
var state_55534__$1 = state_55534;
if(inst_55491){
var statearr_55546_55589 = state_55534__$1;
(statearr_55546_55589[(1)] = (16));

} else {
var statearr_55547_55590 = state_55534__$1;
(statearr_55547_55590[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (22))){
var inst_55519 = (state_55534[(2)]);
var state_55534__$1 = state_55534;
if(cljs.core.truth_(inst_55519)){
var statearr_55548_55591 = state_55534__$1;
(statearr_55548_55591[(1)] = (23));

} else {
var statearr_55549_55592 = state_55534__$1;
(statearr_55549_55592[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (6))){
var inst_55515 = (state_55534[(11)]);
var inst_55513 = (state_55534[(7)]);
var inst_55465 = (state_55534[(8)]);
var inst_55513__$1 = topic_fn.call(null,inst_55465);
var inst_55514 = cljs.core.deref.call(null,mults);
var inst_55515__$1 = cljs.core.get.call(null,inst_55514,inst_55513__$1);
var state_55534__$1 = (function (){var statearr_55550 = state_55534;
(statearr_55550[(11)] = inst_55515__$1);

(statearr_55550[(7)] = inst_55513__$1);

return statearr_55550;
})();
if(cljs.core.truth_(inst_55515__$1)){
var statearr_55551_55593 = state_55534__$1;
(statearr_55551_55593[(1)] = (19));

} else {
var statearr_55552_55594 = state_55534__$1;
(statearr_55552_55594[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (25))){
var inst_55524 = (state_55534[(2)]);
var state_55534__$1 = state_55534;
var statearr_55553_55595 = state_55534__$1;
(statearr_55553_55595[(2)] = inst_55524);

(statearr_55553_55595[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (17))){
var inst_55489 = (state_55534[(10)]);
var inst_55498 = cljs.core.first.call(null,inst_55489);
var inst_55499 = cljs.core.async.muxch_STAR_.call(null,inst_55498);
var inst_55500 = cljs.core.async.close_BANG_.call(null,inst_55499);
var inst_55501 = cljs.core.next.call(null,inst_55489);
var inst_55475 = inst_55501;
var inst_55476 = null;
var inst_55477 = (0);
var inst_55478 = (0);
var state_55534__$1 = (function (){var statearr_55554 = state_55534;
(statearr_55554[(12)] = inst_55476);

(statearr_55554[(13)] = inst_55475);

(statearr_55554[(14)] = inst_55477);

(statearr_55554[(15)] = inst_55500);

(statearr_55554[(16)] = inst_55478);

return statearr_55554;
})();
var statearr_55555_55596 = state_55534__$1;
(statearr_55555_55596[(2)] = null);

(statearr_55555_55596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (3))){
var inst_55532 = (state_55534[(2)]);
var state_55534__$1 = state_55534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55534__$1,inst_55532);
} else {
if((state_val_55535 === (12))){
var inst_55509 = (state_55534[(2)]);
var state_55534__$1 = state_55534;
var statearr_55556_55597 = state_55534__$1;
(statearr_55556_55597[(2)] = inst_55509);

(statearr_55556_55597[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (2))){
var state_55534__$1 = state_55534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55534__$1,(4),ch);
} else {
if((state_val_55535 === (23))){
var state_55534__$1 = state_55534;
var statearr_55557_55598 = state_55534__$1;
(statearr_55557_55598[(2)] = null);

(statearr_55557_55598[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (19))){
var inst_55515 = (state_55534[(11)]);
var inst_55465 = (state_55534[(8)]);
var inst_55517 = cljs.core.async.muxch_STAR_.call(null,inst_55515);
var state_55534__$1 = state_55534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55534__$1,(22),inst_55517,inst_55465);
} else {
if((state_val_55535 === (11))){
var inst_55475 = (state_55534[(13)]);
var inst_55489 = (state_55534[(10)]);
var inst_55489__$1 = cljs.core.seq.call(null,inst_55475);
var state_55534__$1 = (function (){var statearr_55558 = state_55534;
(statearr_55558[(10)] = inst_55489__$1);

return statearr_55558;
})();
if(inst_55489__$1){
var statearr_55559_55599 = state_55534__$1;
(statearr_55559_55599[(1)] = (13));

} else {
var statearr_55560_55600 = state_55534__$1;
(statearr_55560_55600[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (9))){
var inst_55511 = (state_55534[(2)]);
var state_55534__$1 = state_55534;
var statearr_55561_55601 = state_55534__$1;
(statearr_55561_55601[(2)] = inst_55511);

(statearr_55561_55601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (5))){
var inst_55472 = cljs.core.deref.call(null,mults);
var inst_55473 = cljs.core.vals.call(null,inst_55472);
var inst_55474 = cljs.core.seq.call(null,inst_55473);
var inst_55475 = inst_55474;
var inst_55476 = null;
var inst_55477 = (0);
var inst_55478 = (0);
var state_55534__$1 = (function (){var statearr_55562 = state_55534;
(statearr_55562[(12)] = inst_55476);

(statearr_55562[(13)] = inst_55475);

(statearr_55562[(14)] = inst_55477);

(statearr_55562[(16)] = inst_55478);

return statearr_55562;
})();
var statearr_55563_55602 = state_55534__$1;
(statearr_55563_55602[(2)] = null);

(statearr_55563_55602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (14))){
var state_55534__$1 = state_55534;
var statearr_55567_55603 = state_55534__$1;
(statearr_55567_55603[(2)] = null);

(statearr_55567_55603[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (16))){
var inst_55489 = (state_55534[(10)]);
var inst_55493 = cljs.core.chunk_first.call(null,inst_55489);
var inst_55494 = cljs.core.chunk_rest.call(null,inst_55489);
var inst_55495 = cljs.core.count.call(null,inst_55493);
var inst_55475 = inst_55494;
var inst_55476 = inst_55493;
var inst_55477 = inst_55495;
var inst_55478 = (0);
var state_55534__$1 = (function (){var statearr_55568 = state_55534;
(statearr_55568[(12)] = inst_55476);

(statearr_55568[(13)] = inst_55475);

(statearr_55568[(14)] = inst_55477);

(statearr_55568[(16)] = inst_55478);

return statearr_55568;
})();
var statearr_55569_55604 = state_55534__$1;
(statearr_55569_55604[(2)] = null);

(statearr_55569_55604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (10))){
var inst_55476 = (state_55534[(12)]);
var inst_55475 = (state_55534[(13)]);
var inst_55477 = (state_55534[(14)]);
var inst_55478 = (state_55534[(16)]);
var inst_55483 = cljs.core._nth.call(null,inst_55476,inst_55478);
var inst_55484 = cljs.core.async.muxch_STAR_.call(null,inst_55483);
var inst_55485 = cljs.core.async.close_BANG_.call(null,inst_55484);
var inst_55486 = (inst_55478 + (1));
var tmp55564 = inst_55476;
var tmp55565 = inst_55475;
var tmp55566 = inst_55477;
var inst_55475__$1 = tmp55565;
var inst_55476__$1 = tmp55564;
var inst_55477__$1 = tmp55566;
var inst_55478__$1 = inst_55486;
var state_55534__$1 = (function (){var statearr_55570 = state_55534;
(statearr_55570[(12)] = inst_55476__$1);

(statearr_55570[(17)] = inst_55485);

(statearr_55570[(13)] = inst_55475__$1);

(statearr_55570[(14)] = inst_55477__$1);

(statearr_55570[(16)] = inst_55478__$1);

return statearr_55570;
})();
var statearr_55571_55605 = state_55534__$1;
(statearr_55571_55605[(2)] = null);

(statearr_55571_55605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (18))){
var inst_55504 = (state_55534[(2)]);
var state_55534__$1 = state_55534;
var statearr_55572_55606 = state_55534__$1;
(statearr_55572_55606[(2)] = inst_55504);

(statearr_55572_55606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (8))){
var inst_55477 = (state_55534[(14)]);
var inst_55478 = (state_55534[(16)]);
var inst_55480 = (inst_55478 < inst_55477);
var inst_55481 = inst_55480;
var state_55534__$1 = state_55534;
if(cljs.core.truth_(inst_55481)){
var statearr_55573_55607 = state_55534__$1;
(statearr_55573_55607[(1)] = (10));

} else {
var statearr_55574_55608 = state_55534__$1;
(statearr_55574_55608[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__54360__auto___55580,mults,ensure_mult,p))
;
return ((function (switch__54272__auto__,c__54360__auto___55580,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__54273__auto__ = null;
var cljs$core$async$state_machine__54273__auto____0 = (function (){
var statearr_55575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55575[(0)] = cljs$core$async$state_machine__54273__auto__);

(statearr_55575[(1)] = (1));

return statearr_55575;
});
var cljs$core$async$state_machine__54273__auto____1 = (function (state_55534){
while(true){
var ret_value__54274__auto__ = (function (){try{while(true){
var result__54275__auto__ = switch__54272__auto__.call(null,state_55534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54275__auto__;
}
break;
}
}catch (e55576){if((e55576 instanceof Object)){
var ex__54276__auto__ = e55576;
var statearr_55577_55609 = state_55534;
(statearr_55577_55609[(5)] = ex__54276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55610 = state_55534;
state_55534 = G__55610;
continue;
} else {
return ret_value__54274__auto__;
}
break;
}
});
cljs$core$async$state_machine__54273__auto__ = function(state_55534){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54273__auto____1.call(this,state_55534);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54273__auto____0;
cljs$core$async$state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54273__auto____1;
return cljs$core$async$state_machine__54273__auto__;
})()
;})(switch__54272__auto__,c__54360__auto___55580,mults,ensure_mult,p))
})();
var state__54362__auto__ = (function (){var statearr_55578 = f__54361__auto__.call(null);
(statearr_55578[(6)] = c__54360__auto___55580);

return statearr_55578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54362__auto__);
});})(c__54360__auto___55580,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__55612 = arguments.length;
switch (G__55612) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__55615 = arguments.length;
switch (G__55615) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__55618 = arguments.length;
switch (G__55618) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__54360__auto___55685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54360__auto___55685,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__54361__auto__ = (function (){var switch__54272__auto__ = ((function (c__54360__auto___55685,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_55657){
var state_val_55658 = (state_55657[(1)]);
if((state_val_55658 === (7))){
var state_55657__$1 = state_55657;
var statearr_55659_55686 = state_55657__$1;
(statearr_55659_55686[(2)] = null);

(statearr_55659_55686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55658 === (1))){
var state_55657__$1 = state_55657;
var statearr_55660_55687 = state_55657__$1;
(statearr_55660_55687[(2)] = null);

(statearr_55660_55687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55658 === (4))){
var inst_55621 = (state_55657[(7)]);
var inst_55623 = (inst_55621 < cnt);
var state_55657__$1 = state_55657;
if(cljs.core.truth_(inst_55623)){
var statearr_55661_55688 = state_55657__$1;
(statearr_55661_55688[(1)] = (6));

} else {
var statearr_55662_55689 = state_55657__$1;
(statearr_55662_55689[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55658 === (15))){
var inst_55653 = (state_55657[(2)]);
var state_55657__$1 = state_55657;
var statearr_55663_55690 = state_55657__$1;
(statearr_55663_55690[(2)] = inst_55653);

(statearr_55663_55690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55658 === (13))){
var inst_55646 = cljs.core.async.close_BANG_.call(null,out);
var state_55657__$1 = state_55657;
var statearr_55664_55691 = state_55657__$1;
(statearr_55664_55691[(2)] = inst_55646);

(statearr_55664_55691[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55658 === (6))){
var state_55657__$1 = state_55657;
var statearr_55665_55692 = state_55657__$1;
(statearr_55665_55692[(2)] = null);

(statearr_55665_55692[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55658 === (3))){
var inst_55655 = (state_55657[(2)]);
var state_55657__$1 = state_55657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55657__$1,inst_55655);
} else {
if((state_val_55658 === (12))){
var inst_55643 = (state_55657[(8)]);
var inst_55643__$1 = (state_55657[(2)]);
var inst_55644 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_55643__$1);
var state_55657__$1 = (function (){var statearr_55666 = state_55657;
(statearr_55666[(8)] = inst_55643__$1);

return statearr_55666;
})();
if(cljs.core.truth_(inst_55644)){
var statearr_55667_55693 = state_55657__$1;
(statearr_55667_55693[(1)] = (13));

} else {
var statearr_55668_55694 = state_55657__$1;
(statearr_55668_55694[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55658 === (2))){
var inst_55620 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_55621 = (0);
var state_55657__$1 = (function (){var statearr_55669 = state_55657;
(statearr_55669[(9)] = inst_55620);

(statearr_55669[(7)] = inst_55621);

return statearr_55669;
})();
var statearr_55670_55695 = state_55657__$1;
(statearr_55670_55695[(2)] = null);

(statearr_55670_55695[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55658 === (11))){
var inst_55621 = (state_55657[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_55657,(10),Object,null,(9));
var inst_55630 = chs__$1.call(null,inst_55621);
var inst_55631 = done.call(null,inst_55621);
var inst_55632 = cljs.core.async.take_BANG_.call(null,inst_55630,inst_55631);
var state_55657__$1 = state_55657;
var statearr_55671_55696 = state_55657__$1;
(statearr_55671_55696[(2)] = inst_55632);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55657__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55658 === (9))){
var inst_55621 = (state_55657[(7)]);
var inst_55634 = (state_55657[(2)]);
var inst_55635 = (inst_55621 + (1));
var inst_55621__$1 = inst_55635;
var state_55657__$1 = (function (){var statearr_55672 = state_55657;
(statearr_55672[(7)] = inst_55621__$1);

(statearr_55672[(10)] = inst_55634);

return statearr_55672;
})();
var statearr_55673_55697 = state_55657__$1;
(statearr_55673_55697[(2)] = null);

(statearr_55673_55697[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55658 === (5))){
var inst_55641 = (state_55657[(2)]);
var state_55657__$1 = (function (){var statearr_55674 = state_55657;
(statearr_55674[(11)] = inst_55641);

return statearr_55674;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55657__$1,(12),dchan);
} else {
if((state_val_55658 === (14))){
var inst_55643 = (state_55657[(8)]);
var inst_55648 = cljs.core.apply.call(null,f,inst_55643);
var state_55657__$1 = state_55657;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55657__$1,(16),out,inst_55648);
} else {
if((state_val_55658 === (16))){
var inst_55650 = (state_55657[(2)]);
var state_55657__$1 = (function (){var statearr_55675 = state_55657;
(statearr_55675[(12)] = inst_55650);

return statearr_55675;
})();
var statearr_55676_55698 = state_55657__$1;
(statearr_55676_55698[(2)] = null);

(statearr_55676_55698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55658 === (10))){
var inst_55625 = (state_55657[(2)]);
var inst_55626 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_55657__$1 = (function (){var statearr_55677 = state_55657;
(statearr_55677[(13)] = inst_55625);

return statearr_55677;
})();
var statearr_55678_55699 = state_55657__$1;
(statearr_55678_55699[(2)] = inst_55626);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55657__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55658 === (8))){
var inst_55639 = (state_55657[(2)]);
var state_55657__$1 = state_55657;
var statearr_55679_55700 = state_55657__$1;
(statearr_55679_55700[(2)] = inst_55639);

(statearr_55679_55700[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__54360__auto___55685,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__54272__auto__,c__54360__auto___55685,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__54273__auto__ = null;
var cljs$core$async$state_machine__54273__auto____0 = (function (){
var statearr_55680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55680[(0)] = cljs$core$async$state_machine__54273__auto__);

(statearr_55680[(1)] = (1));

return statearr_55680;
});
var cljs$core$async$state_machine__54273__auto____1 = (function (state_55657){
while(true){
var ret_value__54274__auto__ = (function (){try{while(true){
var result__54275__auto__ = switch__54272__auto__.call(null,state_55657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54275__auto__;
}
break;
}
}catch (e55681){if((e55681 instanceof Object)){
var ex__54276__auto__ = e55681;
var statearr_55682_55701 = state_55657;
(statearr_55682_55701[(5)] = ex__54276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55702 = state_55657;
state_55657 = G__55702;
continue;
} else {
return ret_value__54274__auto__;
}
break;
}
});
cljs$core$async$state_machine__54273__auto__ = function(state_55657){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54273__auto____1.call(this,state_55657);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54273__auto____0;
cljs$core$async$state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54273__auto____1;
return cljs$core$async$state_machine__54273__auto__;
})()
;})(switch__54272__auto__,c__54360__auto___55685,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__54362__auto__ = (function (){var statearr_55683 = f__54361__auto__.call(null);
(statearr_55683[(6)] = c__54360__auto___55685);

return statearr_55683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54362__auto__);
});})(c__54360__auto___55685,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__55705 = arguments.length;
switch (G__55705) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__54360__auto___55759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54360__auto___55759,out){
return (function (){
var f__54361__auto__ = (function (){var switch__54272__auto__ = ((function (c__54360__auto___55759,out){
return (function (state_55737){
var state_val_55738 = (state_55737[(1)]);
if((state_val_55738 === (7))){
var inst_55716 = (state_55737[(7)]);
var inst_55717 = (state_55737[(8)]);
var inst_55716__$1 = (state_55737[(2)]);
var inst_55717__$1 = cljs.core.nth.call(null,inst_55716__$1,(0),null);
var inst_55718 = cljs.core.nth.call(null,inst_55716__$1,(1),null);
var inst_55719 = (inst_55717__$1 == null);
var state_55737__$1 = (function (){var statearr_55739 = state_55737;
(statearr_55739[(7)] = inst_55716__$1);

(statearr_55739[(8)] = inst_55717__$1);

(statearr_55739[(9)] = inst_55718);

return statearr_55739;
})();
if(cljs.core.truth_(inst_55719)){
var statearr_55740_55760 = state_55737__$1;
(statearr_55740_55760[(1)] = (8));

} else {
var statearr_55741_55761 = state_55737__$1;
(statearr_55741_55761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55738 === (1))){
var inst_55706 = cljs.core.vec.call(null,chs);
var inst_55707 = inst_55706;
var state_55737__$1 = (function (){var statearr_55742 = state_55737;
(statearr_55742[(10)] = inst_55707);

return statearr_55742;
})();
var statearr_55743_55762 = state_55737__$1;
(statearr_55743_55762[(2)] = null);

(statearr_55743_55762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55738 === (4))){
var inst_55707 = (state_55737[(10)]);
var state_55737__$1 = state_55737;
return cljs.core.async.ioc_alts_BANG_.call(null,state_55737__$1,(7),inst_55707);
} else {
if((state_val_55738 === (6))){
var inst_55733 = (state_55737[(2)]);
var state_55737__$1 = state_55737;
var statearr_55744_55763 = state_55737__$1;
(statearr_55744_55763[(2)] = inst_55733);

(statearr_55744_55763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55738 === (3))){
var inst_55735 = (state_55737[(2)]);
var state_55737__$1 = state_55737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55737__$1,inst_55735);
} else {
if((state_val_55738 === (2))){
var inst_55707 = (state_55737[(10)]);
var inst_55709 = cljs.core.count.call(null,inst_55707);
var inst_55710 = (inst_55709 > (0));
var state_55737__$1 = state_55737;
if(cljs.core.truth_(inst_55710)){
var statearr_55746_55764 = state_55737__$1;
(statearr_55746_55764[(1)] = (4));

} else {
var statearr_55747_55765 = state_55737__$1;
(statearr_55747_55765[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55738 === (11))){
var inst_55707 = (state_55737[(10)]);
var inst_55726 = (state_55737[(2)]);
var tmp55745 = inst_55707;
var inst_55707__$1 = tmp55745;
var state_55737__$1 = (function (){var statearr_55748 = state_55737;
(statearr_55748[(10)] = inst_55707__$1);

(statearr_55748[(11)] = inst_55726);

return statearr_55748;
})();
var statearr_55749_55766 = state_55737__$1;
(statearr_55749_55766[(2)] = null);

(statearr_55749_55766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55738 === (9))){
var inst_55717 = (state_55737[(8)]);
var state_55737__$1 = state_55737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55737__$1,(11),out,inst_55717);
} else {
if((state_val_55738 === (5))){
var inst_55731 = cljs.core.async.close_BANG_.call(null,out);
var state_55737__$1 = state_55737;
var statearr_55750_55767 = state_55737__$1;
(statearr_55750_55767[(2)] = inst_55731);

(statearr_55750_55767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55738 === (10))){
var inst_55729 = (state_55737[(2)]);
var state_55737__$1 = state_55737;
var statearr_55751_55768 = state_55737__$1;
(statearr_55751_55768[(2)] = inst_55729);

(statearr_55751_55768[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55738 === (8))){
var inst_55716 = (state_55737[(7)]);
var inst_55707 = (state_55737[(10)]);
var inst_55717 = (state_55737[(8)]);
var inst_55718 = (state_55737[(9)]);
var inst_55721 = (function (){var cs = inst_55707;
var vec__55712 = inst_55716;
var v = inst_55717;
var c = inst_55718;
return ((function (cs,vec__55712,v,c,inst_55716,inst_55707,inst_55717,inst_55718,state_val_55738,c__54360__auto___55759,out){
return (function (p1__55703_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__55703_SHARP_);
});
;})(cs,vec__55712,v,c,inst_55716,inst_55707,inst_55717,inst_55718,state_val_55738,c__54360__auto___55759,out))
})();
var inst_55722 = cljs.core.filterv.call(null,inst_55721,inst_55707);
var inst_55707__$1 = inst_55722;
var state_55737__$1 = (function (){var statearr_55752 = state_55737;
(statearr_55752[(10)] = inst_55707__$1);

return statearr_55752;
})();
var statearr_55753_55769 = state_55737__$1;
(statearr_55753_55769[(2)] = null);

(statearr_55753_55769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__54360__auto___55759,out))
;
return ((function (switch__54272__auto__,c__54360__auto___55759,out){
return (function() {
var cljs$core$async$state_machine__54273__auto__ = null;
var cljs$core$async$state_machine__54273__auto____0 = (function (){
var statearr_55754 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55754[(0)] = cljs$core$async$state_machine__54273__auto__);

(statearr_55754[(1)] = (1));

return statearr_55754;
});
var cljs$core$async$state_machine__54273__auto____1 = (function (state_55737){
while(true){
var ret_value__54274__auto__ = (function (){try{while(true){
var result__54275__auto__ = switch__54272__auto__.call(null,state_55737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54275__auto__;
}
break;
}
}catch (e55755){if((e55755 instanceof Object)){
var ex__54276__auto__ = e55755;
var statearr_55756_55770 = state_55737;
(statearr_55756_55770[(5)] = ex__54276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55771 = state_55737;
state_55737 = G__55771;
continue;
} else {
return ret_value__54274__auto__;
}
break;
}
});
cljs$core$async$state_machine__54273__auto__ = function(state_55737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54273__auto____1.call(this,state_55737);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54273__auto____0;
cljs$core$async$state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54273__auto____1;
return cljs$core$async$state_machine__54273__auto__;
})()
;})(switch__54272__auto__,c__54360__auto___55759,out))
})();
var state__54362__auto__ = (function (){var statearr_55757 = f__54361__auto__.call(null);
(statearr_55757[(6)] = c__54360__auto___55759);

return statearr_55757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54362__auto__);
});})(c__54360__auto___55759,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__55773 = arguments.length;
switch (G__55773) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__54360__auto___55818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54360__auto___55818,out){
return (function (){
var f__54361__auto__ = (function (){var switch__54272__auto__ = ((function (c__54360__auto___55818,out){
return (function (state_55797){
var state_val_55798 = (state_55797[(1)]);
if((state_val_55798 === (7))){
var inst_55779 = (state_55797[(7)]);
var inst_55779__$1 = (state_55797[(2)]);
var inst_55780 = (inst_55779__$1 == null);
var inst_55781 = cljs.core.not.call(null,inst_55780);
var state_55797__$1 = (function (){var statearr_55799 = state_55797;
(statearr_55799[(7)] = inst_55779__$1);

return statearr_55799;
})();
if(inst_55781){
var statearr_55800_55819 = state_55797__$1;
(statearr_55800_55819[(1)] = (8));

} else {
var statearr_55801_55820 = state_55797__$1;
(statearr_55801_55820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55798 === (1))){
var inst_55774 = (0);
var state_55797__$1 = (function (){var statearr_55802 = state_55797;
(statearr_55802[(8)] = inst_55774);

return statearr_55802;
})();
var statearr_55803_55821 = state_55797__$1;
(statearr_55803_55821[(2)] = null);

(statearr_55803_55821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55798 === (4))){
var state_55797__$1 = state_55797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55797__$1,(7),ch);
} else {
if((state_val_55798 === (6))){
var inst_55792 = (state_55797[(2)]);
var state_55797__$1 = state_55797;
var statearr_55804_55822 = state_55797__$1;
(statearr_55804_55822[(2)] = inst_55792);

(statearr_55804_55822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55798 === (3))){
var inst_55794 = (state_55797[(2)]);
var inst_55795 = cljs.core.async.close_BANG_.call(null,out);
var state_55797__$1 = (function (){var statearr_55805 = state_55797;
(statearr_55805[(9)] = inst_55794);

return statearr_55805;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55797__$1,inst_55795);
} else {
if((state_val_55798 === (2))){
var inst_55774 = (state_55797[(8)]);
var inst_55776 = (inst_55774 < n);
var state_55797__$1 = state_55797;
if(cljs.core.truth_(inst_55776)){
var statearr_55806_55823 = state_55797__$1;
(statearr_55806_55823[(1)] = (4));

} else {
var statearr_55807_55824 = state_55797__$1;
(statearr_55807_55824[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55798 === (11))){
var inst_55774 = (state_55797[(8)]);
var inst_55784 = (state_55797[(2)]);
var inst_55785 = (inst_55774 + (1));
var inst_55774__$1 = inst_55785;
var state_55797__$1 = (function (){var statearr_55808 = state_55797;
(statearr_55808[(10)] = inst_55784);

(statearr_55808[(8)] = inst_55774__$1);

return statearr_55808;
})();
var statearr_55809_55825 = state_55797__$1;
(statearr_55809_55825[(2)] = null);

(statearr_55809_55825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55798 === (9))){
var state_55797__$1 = state_55797;
var statearr_55810_55826 = state_55797__$1;
(statearr_55810_55826[(2)] = null);

(statearr_55810_55826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55798 === (5))){
var state_55797__$1 = state_55797;
var statearr_55811_55827 = state_55797__$1;
(statearr_55811_55827[(2)] = null);

(statearr_55811_55827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55798 === (10))){
var inst_55789 = (state_55797[(2)]);
var state_55797__$1 = state_55797;
var statearr_55812_55828 = state_55797__$1;
(statearr_55812_55828[(2)] = inst_55789);

(statearr_55812_55828[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55798 === (8))){
var inst_55779 = (state_55797[(7)]);
var state_55797__$1 = state_55797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55797__$1,(11),out,inst_55779);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__54360__auto___55818,out))
;
return ((function (switch__54272__auto__,c__54360__auto___55818,out){
return (function() {
var cljs$core$async$state_machine__54273__auto__ = null;
var cljs$core$async$state_machine__54273__auto____0 = (function (){
var statearr_55813 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55813[(0)] = cljs$core$async$state_machine__54273__auto__);

(statearr_55813[(1)] = (1));

return statearr_55813;
});
var cljs$core$async$state_machine__54273__auto____1 = (function (state_55797){
while(true){
var ret_value__54274__auto__ = (function (){try{while(true){
var result__54275__auto__ = switch__54272__auto__.call(null,state_55797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54275__auto__;
}
break;
}
}catch (e55814){if((e55814 instanceof Object)){
var ex__54276__auto__ = e55814;
var statearr_55815_55829 = state_55797;
(statearr_55815_55829[(5)] = ex__54276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55830 = state_55797;
state_55797 = G__55830;
continue;
} else {
return ret_value__54274__auto__;
}
break;
}
});
cljs$core$async$state_machine__54273__auto__ = function(state_55797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54273__auto____1.call(this,state_55797);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54273__auto____0;
cljs$core$async$state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54273__auto____1;
return cljs$core$async$state_machine__54273__auto__;
})()
;})(switch__54272__auto__,c__54360__auto___55818,out))
})();
var state__54362__auto__ = (function (){var statearr_55816 = f__54361__auto__.call(null);
(statearr_55816[(6)] = c__54360__auto___55818);

return statearr_55816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54362__auto__);
});})(c__54360__auto___55818,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async55832 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55832 = (function (f,ch,meta55833){
this.f = f;
this.ch = ch;
this.meta55833 = meta55833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async55832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55834,meta55833__$1){
var self__ = this;
var _55834__$1 = this;
return (new cljs.core.async.t_cljs$core$async55832(self__.f,self__.ch,meta55833__$1));
});

cljs.core.async.t_cljs$core$async55832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55834){
var self__ = this;
var _55834__$1 = this;
return self__.meta55833;
});

cljs.core.async.t_cljs$core$async55832.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55832.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55832.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55832.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55832.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async55835 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55835 = (function (f,ch,meta55833,_,fn1,meta55836){
this.f = f;
this.ch = ch;
this.meta55833 = meta55833;
this._ = _;
this.fn1 = fn1;
this.meta55836 = meta55836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async55835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_55837,meta55836__$1){
var self__ = this;
var _55837__$1 = this;
return (new cljs.core.async.t_cljs$core$async55835(self__.f,self__.ch,self__.meta55833,self__._,self__.fn1,meta55836__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async55835.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_55837){
var self__ = this;
var _55837__$1 = this;
return self__.meta55836;
});})(___$1))
;

cljs.core.async.t_cljs$core$async55835.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55835.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async55835.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async55835.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__55831_SHARP_){
return f1.call(null,(((p1__55831_SHARP_ == null))?null:self__.f.call(null,p1__55831_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async55835.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55833","meta55833",1317272542,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async55832","cljs.core.async/t_cljs$core$async55832",-904739827,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta55836","meta55836",1047118945,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async55835.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55835";

cljs.core.async.t_cljs$core$async55835.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__43981__auto__,writer__43982__auto__,opt__43983__auto__){
return cljs.core._write.call(null,writer__43982__auto__,"cljs.core.async/t_cljs$core$async55835");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async55835 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async55835(f__$1,ch__$1,meta55833__$1,___$2,fn1__$1,meta55836){
return (new cljs.core.async.t_cljs$core$async55835(f__$1,ch__$1,meta55833__$1,___$2,fn1__$1,meta55836));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async55835(self__.f,self__.ch,self__.meta55833,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__43344__auto__ = ret;
if(cljs.core.truth_(and__43344__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__43344__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async55832.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55832.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async55832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55833","meta55833",1317272542,null)], null);
});

cljs.core.async.t_cljs$core$async55832.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55832";

cljs.core.async.t_cljs$core$async55832.cljs$lang$ctorPrWriter = (function (this__43981__auto__,writer__43982__auto__,opt__43983__auto__){
return cljs.core._write.call(null,writer__43982__auto__,"cljs.core.async/t_cljs$core$async55832");
});

cljs.core.async.__GT_t_cljs$core$async55832 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async55832(f__$1,ch__$1,meta55833){
return (new cljs.core.async.t_cljs$core$async55832(f__$1,ch__$1,meta55833));
});

}

return (new cljs.core.async.t_cljs$core$async55832(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async55838 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55838 = (function (f,ch,meta55839){
this.f = f;
this.ch = ch;
this.meta55839 = meta55839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async55838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55840,meta55839__$1){
var self__ = this;
var _55840__$1 = this;
return (new cljs.core.async.t_cljs$core$async55838(self__.f,self__.ch,meta55839__$1));
});

cljs.core.async.t_cljs$core$async55838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55840){
var self__ = this;
var _55840__$1 = this;
return self__.meta55839;
});

cljs.core.async.t_cljs$core$async55838.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55838.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55838.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55838.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async55838.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55838.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async55838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55839","meta55839",-111356982,null)], null);
});

cljs.core.async.t_cljs$core$async55838.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55838";

cljs.core.async.t_cljs$core$async55838.cljs$lang$ctorPrWriter = (function (this__43981__auto__,writer__43982__auto__,opt__43983__auto__){
return cljs.core._write.call(null,writer__43982__auto__,"cljs.core.async/t_cljs$core$async55838");
});

cljs.core.async.__GT_t_cljs$core$async55838 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async55838(f__$1,ch__$1,meta55839){
return (new cljs.core.async.t_cljs$core$async55838(f__$1,ch__$1,meta55839));
});

}

return (new cljs.core.async.t_cljs$core$async55838(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async55841 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55841 = (function (p,ch,meta55842){
this.p = p;
this.ch = ch;
this.meta55842 = meta55842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async55841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55843,meta55842__$1){
var self__ = this;
var _55843__$1 = this;
return (new cljs.core.async.t_cljs$core$async55841(self__.p,self__.ch,meta55842__$1));
});

cljs.core.async.t_cljs$core$async55841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55843){
var self__ = this;
var _55843__$1 = this;
return self__.meta55842;
});

cljs.core.async.t_cljs$core$async55841.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55841.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55841.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55841.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55841.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async55841.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55841.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async55841.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55842","meta55842",594922426,null)], null);
});

cljs.core.async.t_cljs$core$async55841.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55841.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55841";

cljs.core.async.t_cljs$core$async55841.cljs$lang$ctorPrWriter = (function (this__43981__auto__,writer__43982__auto__,opt__43983__auto__){
return cljs.core._write.call(null,writer__43982__auto__,"cljs.core.async/t_cljs$core$async55841");
});

cljs.core.async.__GT_t_cljs$core$async55841 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async55841(p__$1,ch__$1,meta55842){
return (new cljs.core.async.t_cljs$core$async55841(p__$1,ch__$1,meta55842));
});

}

return (new cljs.core.async.t_cljs$core$async55841(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__55845 = arguments.length;
switch (G__55845) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__54360__auto___55885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54360__auto___55885,out){
return (function (){
var f__54361__auto__ = (function (){var switch__54272__auto__ = ((function (c__54360__auto___55885,out){
return (function (state_55866){
var state_val_55867 = (state_55866[(1)]);
if((state_val_55867 === (7))){
var inst_55862 = (state_55866[(2)]);
var state_55866__$1 = state_55866;
var statearr_55868_55886 = state_55866__$1;
(statearr_55868_55886[(2)] = inst_55862);

(statearr_55868_55886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55867 === (1))){
var state_55866__$1 = state_55866;
var statearr_55869_55887 = state_55866__$1;
(statearr_55869_55887[(2)] = null);

(statearr_55869_55887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55867 === (4))){
var inst_55848 = (state_55866[(7)]);
var inst_55848__$1 = (state_55866[(2)]);
var inst_55849 = (inst_55848__$1 == null);
var state_55866__$1 = (function (){var statearr_55870 = state_55866;
(statearr_55870[(7)] = inst_55848__$1);

return statearr_55870;
})();
if(cljs.core.truth_(inst_55849)){
var statearr_55871_55888 = state_55866__$1;
(statearr_55871_55888[(1)] = (5));

} else {
var statearr_55872_55889 = state_55866__$1;
(statearr_55872_55889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55867 === (6))){
var inst_55848 = (state_55866[(7)]);
var inst_55853 = p.call(null,inst_55848);
var state_55866__$1 = state_55866;
if(cljs.core.truth_(inst_55853)){
var statearr_55873_55890 = state_55866__$1;
(statearr_55873_55890[(1)] = (8));

} else {
var statearr_55874_55891 = state_55866__$1;
(statearr_55874_55891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55867 === (3))){
var inst_55864 = (state_55866[(2)]);
var state_55866__$1 = state_55866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55866__$1,inst_55864);
} else {
if((state_val_55867 === (2))){
var state_55866__$1 = state_55866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55866__$1,(4),ch);
} else {
if((state_val_55867 === (11))){
var inst_55856 = (state_55866[(2)]);
var state_55866__$1 = state_55866;
var statearr_55875_55892 = state_55866__$1;
(statearr_55875_55892[(2)] = inst_55856);

(statearr_55875_55892[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55867 === (9))){
var state_55866__$1 = state_55866;
var statearr_55876_55893 = state_55866__$1;
(statearr_55876_55893[(2)] = null);

(statearr_55876_55893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55867 === (5))){
var inst_55851 = cljs.core.async.close_BANG_.call(null,out);
var state_55866__$1 = state_55866;
var statearr_55877_55894 = state_55866__$1;
(statearr_55877_55894[(2)] = inst_55851);

(statearr_55877_55894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55867 === (10))){
var inst_55859 = (state_55866[(2)]);
var state_55866__$1 = (function (){var statearr_55878 = state_55866;
(statearr_55878[(8)] = inst_55859);

return statearr_55878;
})();
var statearr_55879_55895 = state_55866__$1;
(statearr_55879_55895[(2)] = null);

(statearr_55879_55895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55867 === (8))){
var inst_55848 = (state_55866[(7)]);
var state_55866__$1 = state_55866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55866__$1,(11),out,inst_55848);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__54360__auto___55885,out))
;
return ((function (switch__54272__auto__,c__54360__auto___55885,out){
return (function() {
var cljs$core$async$state_machine__54273__auto__ = null;
var cljs$core$async$state_machine__54273__auto____0 = (function (){
var statearr_55880 = [null,null,null,null,null,null,null,null,null];
(statearr_55880[(0)] = cljs$core$async$state_machine__54273__auto__);

(statearr_55880[(1)] = (1));

return statearr_55880;
});
var cljs$core$async$state_machine__54273__auto____1 = (function (state_55866){
while(true){
var ret_value__54274__auto__ = (function (){try{while(true){
var result__54275__auto__ = switch__54272__auto__.call(null,state_55866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54275__auto__;
}
break;
}
}catch (e55881){if((e55881 instanceof Object)){
var ex__54276__auto__ = e55881;
var statearr_55882_55896 = state_55866;
(statearr_55882_55896[(5)] = ex__54276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55897 = state_55866;
state_55866 = G__55897;
continue;
} else {
return ret_value__54274__auto__;
}
break;
}
});
cljs$core$async$state_machine__54273__auto__ = function(state_55866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54273__auto____1.call(this,state_55866);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54273__auto____0;
cljs$core$async$state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54273__auto____1;
return cljs$core$async$state_machine__54273__auto__;
})()
;})(switch__54272__auto__,c__54360__auto___55885,out))
})();
var state__54362__auto__ = (function (){var statearr_55883 = f__54361__auto__.call(null);
(statearr_55883[(6)] = c__54360__auto___55885);

return statearr_55883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54362__auto__);
});})(c__54360__auto___55885,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__55899 = arguments.length;
switch (G__55899) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__54360__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54360__auto__){
return (function (){
var f__54361__auto__ = (function (){var switch__54272__auto__ = ((function (c__54360__auto__){
return (function (state_55962){
var state_val_55963 = (state_55962[(1)]);
if((state_val_55963 === (7))){
var inst_55958 = (state_55962[(2)]);
var state_55962__$1 = state_55962;
var statearr_55964_56002 = state_55962__$1;
(statearr_55964_56002[(2)] = inst_55958);

(statearr_55964_56002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55963 === (20))){
var inst_55928 = (state_55962[(7)]);
var inst_55939 = (state_55962[(2)]);
var inst_55940 = cljs.core.next.call(null,inst_55928);
var inst_55914 = inst_55940;
var inst_55915 = null;
var inst_55916 = (0);
var inst_55917 = (0);
var state_55962__$1 = (function (){var statearr_55965 = state_55962;
(statearr_55965[(8)] = inst_55939);

(statearr_55965[(9)] = inst_55915);

(statearr_55965[(10)] = inst_55914);

(statearr_55965[(11)] = inst_55917);

(statearr_55965[(12)] = inst_55916);

return statearr_55965;
})();
var statearr_55966_56003 = state_55962__$1;
(statearr_55966_56003[(2)] = null);

(statearr_55966_56003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55963 === (1))){
var state_55962__$1 = state_55962;
var statearr_55967_56004 = state_55962__$1;
(statearr_55967_56004[(2)] = null);

(statearr_55967_56004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55963 === (4))){
var inst_55903 = (state_55962[(13)]);
var inst_55903__$1 = (state_55962[(2)]);
var inst_55904 = (inst_55903__$1 == null);
var state_55962__$1 = (function (){var statearr_55968 = state_55962;
(statearr_55968[(13)] = inst_55903__$1);

return statearr_55968;
})();
if(cljs.core.truth_(inst_55904)){
var statearr_55969_56005 = state_55962__$1;
(statearr_55969_56005[(1)] = (5));

} else {
var statearr_55970_56006 = state_55962__$1;
(statearr_55970_56006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55963 === (15))){
var state_55962__$1 = state_55962;
var statearr_55974_56007 = state_55962__$1;
(statearr_55974_56007[(2)] = null);

(statearr_55974_56007[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55963 === (21))){
var state_55962__$1 = state_55962;
var statearr_55975_56008 = state_55962__$1;
(statearr_55975_56008[(2)] = null);

(statearr_55975_56008[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55963 === (13))){
var inst_55915 = (state_55962[(9)]);
var inst_55914 = (state_55962[(10)]);
var inst_55917 = (state_55962[(11)]);
var inst_55916 = (state_55962[(12)]);
var inst_55924 = (state_55962[(2)]);
var inst_55925 = (inst_55917 + (1));
var tmp55971 = inst_55915;
var tmp55972 = inst_55914;
var tmp55973 = inst_55916;
var inst_55914__$1 = tmp55972;
var inst_55915__$1 = tmp55971;
var inst_55916__$1 = tmp55973;
var inst_55917__$1 = inst_55925;
var state_55962__$1 = (function (){var statearr_55976 = state_55962;
(statearr_55976[(14)] = inst_55924);

(statearr_55976[(9)] = inst_55915__$1);

(statearr_55976[(10)] = inst_55914__$1);

(statearr_55976[(11)] = inst_55917__$1);

(statearr_55976[(12)] = inst_55916__$1);

return statearr_55976;
})();
var statearr_55977_56009 = state_55962__$1;
(statearr_55977_56009[(2)] = null);

(statearr_55977_56009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55963 === (22))){
var state_55962__$1 = state_55962;
var statearr_55978_56010 = state_55962__$1;
(statearr_55978_56010[(2)] = null);

(statearr_55978_56010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55963 === (6))){
var inst_55903 = (state_55962[(13)]);
var inst_55912 = f.call(null,inst_55903);
var inst_55913 = cljs.core.seq.call(null,inst_55912);
var inst_55914 = inst_55913;
var inst_55915 = null;
var inst_55916 = (0);
var inst_55917 = (0);
var state_55962__$1 = (function (){var statearr_55979 = state_55962;
(statearr_55979[(9)] = inst_55915);

(statearr_55979[(10)] = inst_55914);

(statearr_55979[(11)] = inst_55917);

(statearr_55979[(12)] = inst_55916);

return statearr_55979;
})();
var statearr_55980_56011 = state_55962__$1;
(statearr_55980_56011[(2)] = null);

(statearr_55980_56011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55963 === (17))){
var inst_55928 = (state_55962[(7)]);
var inst_55932 = cljs.core.chunk_first.call(null,inst_55928);
var inst_55933 = cljs.core.chunk_rest.call(null,inst_55928);
var inst_55934 = cljs.core.count.call(null,inst_55932);
var inst_55914 = inst_55933;
var inst_55915 = inst_55932;
var inst_55916 = inst_55934;
var inst_55917 = (0);
var state_55962__$1 = (function (){var statearr_55981 = state_55962;
(statearr_55981[(9)] = inst_55915);

(statearr_55981[(10)] = inst_55914);

(statearr_55981[(11)] = inst_55917);

(statearr_55981[(12)] = inst_55916);

return statearr_55981;
})();
var statearr_55982_56012 = state_55962__$1;
(statearr_55982_56012[(2)] = null);

(statearr_55982_56012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55963 === (3))){
var inst_55960 = (state_55962[(2)]);
var state_55962__$1 = state_55962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55962__$1,inst_55960);
} else {
if((state_val_55963 === (12))){
var inst_55948 = (state_55962[(2)]);
var state_55962__$1 = state_55962;
var statearr_55983_56013 = state_55962__$1;
(statearr_55983_56013[(2)] = inst_55948);

(statearr_55983_56013[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55963 === (2))){
var state_55962__$1 = state_55962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55962__$1,(4),in$);
} else {
if((state_val_55963 === (23))){
var inst_55956 = (state_55962[(2)]);
var state_55962__$1 = state_55962;
var statearr_55984_56014 = state_55962__$1;
(statearr_55984_56014[(2)] = inst_55956);

(statearr_55984_56014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55963 === (19))){
var inst_55943 = (state_55962[(2)]);
var state_55962__$1 = state_55962;
var statearr_55985_56015 = state_55962__$1;
(statearr_55985_56015[(2)] = inst_55943);

(statearr_55985_56015[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55963 === (11))){
var inst_55928 = (state_55962[(7)]);
var inst_55914 = (state_55962[(10)]);
var inst_55928__$1 = cljs.core.seq.call(null,inst_55914);
var state_55962__$1 = (function (){var statearr_55986 = state_55962;
(statearr_55986[(7)] = inst_55928__$1);

return statearr_55986;
})();
if(inst_55928__$1){
var statearr_55987_56016 = state_55962__$1;
(statearr_55987_56016[(1)] = (14));

} else {
var statearr_55988_56017 = state_55962__$1;
(statearr_55988_56017[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55963 === (9))){
var inst_55950 = (state_55962[(2)]);
var inst_55951 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_55962__$1 = (function (){var statearr_55989 = state_55962;
(statearr_55989[(15)] = inst_55950);

return statearr_55989;
})();
if(cljs.core.truth_(inst_55951)){
var statearr_55990_56018 = state_55962__$1;
(statearr_55990_56018[(1)] = (21));

} else {
var statearr_55991_56019 = state_55962__$1;
(statearr_55991_56019[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55963 === (5))){
var inst_55906 = cljs.core.async.close_BANG_.call(null,out);
var state_55962__$1 = state_55962;
var statearr_55992_56020 = state_55962__$1;
(statearr_55992_56020[(2)] = inst_55906);

(statearr_55992_56020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55963 === (14))){
var inst_55928 = (state_55962[(7)]);
var inst_55930 = cljs.core.chunked_seq_QMARK_.call(null,inst_55928);
var state_55962__$1 = state_55962;
if(inst_55930){
var statearr_55993_56021 = state_55962__$1;
(statearr_55993_56021[(1)] = (17));

} else {
var statearr_55994_56022 = state_55962__$1;
(statearr_55994_56022[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55963 === (16))){
var inst_55946 = (state_55962[(2)]);
var state_55962__$1 = state_55962;
var statearr_55995_56023 = state_55962__$1;
(statearr_55995_56023[(2)] = inst_55946);

(statearr_55995_56023[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55963 === (10))){
var inst_55915 = (state_55962[(9)]);
var inst_55917 = (state_55962[(11)]);
var inst_55922 = cljs.core._nth.call(null,inst_55915,inst_55917);
var state_55962__$1 = state_55962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55962__$1,(13),out,inst_55922);
} else {
if((state_val_55963 === (18))){
var inst_55928 = (state_55962[(7)]);
var inst_55937 = cljs.core.first.call(null,inst_55928);
var state_55962__$1 = state_55962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55962__$1,(20),out,inst_55937);
} else {
if((state_val_55963 === (8))){
var inst_55917 = (state_55962[(11)]);
var inst_55916 = (state_55962[(12)]);
var inst_55919 = (inst_55917 < inst_55916);
var inst_55920 = inst_55919;
var state_55962__$1 = state_55962;
if(cljs.core.truth_(inst_55920)){
var statearr_55996_56024 = state_55962__$1;
(statearr_55996_56024[(1)] = (10));

} else {
var statearr_55997_56025 = state_55962__$1;
(statearr_55997_56025[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__54360__auto__))
;
return ((function (switch__54272__auto__,c__54360__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__54273__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__54273__auto____0 = (function (){
var statearr_55998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55998[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__54273__auto__);

(statearr_55998[(1)] = (1));

return statearr_55998;
});
var cljs$core$async$mapcat_STAR__$_state_machine__54273__auto____1 = (function (state_55962){
while(true){
var ret_value__54274__auto__ = (function (){try{while(true){
var result__54275__auto__ = switch__54272__auto__.call(null,state_55962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54275__auto__;
}
break;
}
}catch (e55999){if((e55999 instanceof Object)){
var ex__54276__auto__ = e55999;
var statearr_56000_56026 = state_55962;
(statearr_56000_56026[(5)] = ex__54276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56027 = state_55962;
state_55962 = G__56027;
continue;
} else {
return ret_value__54274__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__54273__auto__ = function(state_55962){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__54273__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__54273__auto____1.call(this,state_55962);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__54273__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__54273__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__54273__auto__;
})()
;})(switch__54272__auto__,c__54360__auto__))
})();
var state__54362__auto__ = (function (){var statearr_56001 = f__54361__auto__.call(null);
(statearr_56001[(6)] = c__54360__auto__);

return statearr_56001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54362__auto__);
});})(c__54360__auto__))
);

return c__54360__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__56029 = arguments.length;
switch (G__56029) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__56032 = arguments.length;
switch (G__56032) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__56035 = arguments.length;
switch (G__56035) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__54360__auto___56082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54360__auto___56082,out){
return (function (){
var f__54361__auto__ = (function (){var switch__54272__auto__ = ((function (c__54360__auto___56082,out){
return (function (state_56059){
var state_val_56060 = (state_56059[(1)]);
if((state_val_56060 === (7))){
var inst_56054 = (state_56059[(2)]);
var state_56059__$1 = state_56059;
var statearr_56061_56083 = state_56059__$1;
(statearr_56061_56083[(2)] = inst_56054);

(statearr_56061_56083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56060 === (1))){
var inst_56036 = null;
var state_56059__$1 = (function (){var statearr_56062 = state_56059;
(statearr_56062[(7)] = inst_56036);

return statearr_56062;
})();
var statearr_56063_56084 = state_56059__$1;
(statearr_56063_56084[(2)] = null);

(statearr_56063_56084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56060 === (4))){
var inst_56039 = (state_56059[(8)]);
var inst_56039__$1 = (state_56059[(2)]);
var inst_56040 = (inst_56039__$1 == null);
var inst_56041 = cljs.core.not.call(null,inst_56040);
var state_56059__$1 = (function (){var statearr_56064 = state_56059;
(statearr_56064[(8)] = inst_56039__$1);

return statearr_56064;
})();
if(inst_56041){
var statearr_56065_56085 = state_56059__$1;
(statearr_56065_56085[(1)] = (5));

} else {
var statearr_56066_56086 = state_56059__$1;
(statearr_56066_56086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56060 === (6))){
var state_56059__$1 = state_56059;
var statearr_56067_56087 = state_56059__$1;
(statearr_56067_56087[(2)] = null);

(statearr_56067_56087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56060 === (3))){
var inst_56056 = (state_56059[(2)]);
var inst_56057 = cljs.core.async.close_BANG_.call(null,out);
var state_56059__$1 = (function (){var statearr_56068 = state_56059;
(statearr_56068[(9)] = inst_56056);

return statearr_56068;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56059__$1,inst_56057);
} else {
if((state_val_56060 === (2))){
var state_56059__$1 = state_56059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56059__$1,(4),ch);
} else {
if((state_val_56060 === (11))){
var inst_56039 = (state_56059[(8)]);
var inst_56048 = (state_56059[(2)]);
var inst_56036 = inst_56039;
var state_56059__$1 = (function (){var statearr_56069 = state_56059;
(statearr_56069[(7)] = inst_56036);

(statearr_56069[(10)] = inst_56048);

return statearr_56069;
})();
var statearr_56070_56088 = state_56059__$1;
(statearr_56070_56088[(2)] = null);

(statearr_56070_56088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56060 === (9))){
var inst_56039 = (state_56059[(8)]);
var state_56059__$1 = state_56059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56059__$1,(11),out,inst_56039);
} else {
if((state_val_56060 === (5))){
var inst_56036 = (state_56059[(7)]);
var inst_56039 = (state_56059[(8)]);
var inst_56043 = cljs.core._EQ_.call(null,inst_56039,inst_56036);
var state_56059__$1 = state_56059;
if(inst_56043){
var statearr_56072_56089 = state_56059__$1;
(statearr_56072_56089[(1)] = (8));

} else {
var statearr_56073_56090 = state_56059__$1;
(statearr_56073_56090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56060 === (10))){
var inst_56051 = (state_56059[(2)]);
var state_56059__$1 = state_56059;
var statearr_56074_56091 = state_56059__$1;
(statearr_56074_56091[(2)] = inst_56051);

(statearr_56074_56091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56060 === (8))){
var inst_56036 = (state_56059[(7)]);
var tmp56071 = inst_56036;
var inst_56036__$1 = tmp56071;
var state_56059__$1 = (function (){var statearr_56075 = state_56059;
(statearr_56075[(7)] = inst_56036__$1);

return statearr_56075;
})();
var statearr_56076_56092 = state_56059__$1;
(statearr_56076_56092[(2)] = null);

(statearr_56076_56092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__54360__auto___56082,out))
;
return ((function (switch__54272__auto__,c__54360__auto___56082,out){
return (function() {
var cljs$core$async$state_machine__54273__auto__ = null;
var cljs$core$async$state_machine__54273__auto____0 = (function (){
var statearr_56077 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56077[(0)] = cljs$core$async$state_machine__54273__auto__);

(statearr_56077[(1)] = (1));

return statearr_56077;
});
var cljs$core$async$state_machine__54273__auto____1 = (function (state_56059){
while(true){
var ret_value__54274__auto__ = (function (){try{while(true){
var result__54275__auto__ = switch__54272__auto__.call(null,state_56059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54275__auto__;
}
break;
}
}catch (e56078){if((e56078 instanceof Object)){
var ex__54276__auto__ = e56078;
var statearr_56079_56093 = state_56059;
(statearr_56079_56093[(5)] = ex__54276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56094 = state_56059;
state_56059 = G__56094;
continue;
} else {
return ret_value__54274__auto__;
}
break;
}
});
cljs$core$async$state_machine__54273__auto__ = function(state_56059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54273__auto____1.call(this,state_56059);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54273__auto____0;
cljs$core$async$state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54273__auto____1;
return cljs$core$async$state_machine__54273__auto__;
})()
;})(switch__54272__auto__,c__54360__auto___56082,out))
})();
var state__54362__auto__ = (function (){var statearr_56080 = f__54361__auto__.call(null);
(statearr_56080[(6)] = c__54360__auto___56082);

return statearr_56080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54362__auto__);
});})(c__54360__auto___56082,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__56096 = arguments.length;
switch (G__56096) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__54360__auto___56162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54360__auto___56162,out){
return (function (){
var f__54361__auto__ = (function (){var switch__54272__auto__ = ((function (c__54360__auto___56162,out){
return (function (state_56134){
var state_val_56135 = (state_56134[(1)]);
if((state_val_56135 === (7))){
var inst_56130 = (state_56134[(2)]);
var state_56134__$1 = state_56134;
var statearr_56136_56163 = state_56134__$1;
(statearr_56136_56163[(2)] = inst_56130);

(statearr_56136_56163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (1))){
var inst_56097 = (new Array(n));
var inst_56098 = inst_56097;
var inst_56099 = (0);
var state_56134__$1 = (function (){var statearr_56137 = state_56134;
(statearr_56137[(7)] = inst_56099);

(statearr_56137[(8)] = inst_56098);

return statearr_56137;
})();
var statearr_56138_56164 = state_56134__$1;
(statearr_56138_56164[(2)] = null);

(statearr_56138_56164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (4))){
var inst_56102 = (state_56134[(9)]);
var inst_56102__$1 = (state_56134[(2)]);
var inst_56103 = (inst_56102__$1 == null);
var inst_56104 = cljs.core.not.call(null,inst_56103);
var state_56134__$1 = (function (){var statearr_56139 = state_56134;
(statearr_56139[(9)] = inst_56102__$1);

return statearr_56139;
})();
if(inst_56104){
var statearr_56140_56165 = state_56134__$1;
(statearr_56140_56165[(1)] = (5));

} else {
var statearr_56141_56166 = state_56134__$1;
(statearr_56141_56166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (15))){
var inst_56124 = (state_56134[(2)]);
var state_56134__$1 = state_56134;
var statearr_56142_56167 = state_56134__$1;
(statearr_56142_56167[(2)] = inst_56124);

(statearr_56142_56167[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (13))){
var state_56134__$1 = state_56134;
var statearr_56143_56168 = state_56134__$1;
(statearr_56143_56168[(2)] = null);

(statearr_56143_56168[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (6))){
var inst_56099 = (state_56134[(7)]);
var inst_56120 = (inst_56099 > (0));
var state_56134__$1 = state_56134;
if(cljs.core.truth_(inst_56120)){
var statearr_56144_56169 = state_56134__$1;
(statearr_56144_56169[(1)] = (12));

} else {
var statearr_56145_56170 = state_56134__$1;
(statearr_56145_56170[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (3))){
var inst_56132 = (state_56134[(2)]);
var state_56134__$1 = state_56134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56134__$1,inst_56132);
} else {
if((state_val_56135 === (12))){
var inst_56098 = (state_56134[(8)]);
var inst_56122 = cljs.core.vec.call(null,inst_56098);
var state_56134__$1 = state_56134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56134__$1,(15),out,inst_56122);
} else {
if((state_val_56135 === (2))){
var state_56134__$1 = state_56134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56134__$1,(4),ch);
} else {
if((state_val_56135 === (11))){
var inst_56114 = (state_56134[(2)]);
var inst_56115 = (new Array(n));
var inst_56098 = inst_56115;
var inst_56099 = (0);
var state_56134__$1 = (function (){var statearr_56146 = state_56134;
(statearr_56146[(10)] = inst_56114);

(statearr_56146[(7)] = inst_56099);

(statearr_56146[(8)] = inst_56098);

return statearr_56146;
})();
var statearr_56147_56171 = state_56134__$1;
(statearr_56147_56171[(2)] = null);

(statearr_56147_56171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (9))){
var inst_56098 = (state_56134[(8)]);
var inst_56112 = cljs.core.vec.call(null,inst_56098);
var state_56134__$1 = state_56134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56134__$1,(11),out,inst_56112);
} else {
if((state_val_56135 === (5))){
var inst_56107 = (state_56134[(11)]);
var inst_56102 = (state_56134[(9)]);
var inst_56099 = (state_56134[(7)]);
var inst_56098 = (state_56134[(8)]);
var inst_56106 = (inst_56098[inst_56099] = inst_56102);
var inst_56107__$1 = (inst_56099 + (1));
var inst_56108 = (inst_56107__$1 < n);
var state_56134__$1 = (function (){var statearr_56148 = state_56134;
(statearr_56148[(11)] = inst_56107__$1);

(statearr_56148[(12)] = inst_56106);

return statearr_56148;
})();
if(cljs.core.truth_(inst_56108)){
var statearr_56149_56172 = state_56134__$1;
(statearr_56149_56172[(1)] = (8));

} else {
var statearr_56150_56173 = state_56134__$1;
(statearr_56150_56173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (14))){
var inst_56127 = (state_56134[(2)]);
var inst_56128 = cljs.core.async.close_BANG_.call(null,out);
var state_56134__$1 = (function (){var statearr_56152 = state_56134;
(statearr_56152[(13)] = inst_56127);

return statearr_56152;
})();
var statearr_56153_56174 = state_56134__$1;
(statearr_56153_56174[(2)] = inst_56128);

(statearr_56153_56174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (10))){
var inst_56118 = (state_56134[(2)]);
var state_56134__$1 = state_56134;
var statearr_56154_56175 = state_56134__$1;
(statearr_56154_56175[(2)] = inst_56118);

(statearr_56154_56175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (8))){
var inst_56107 = (state_56134[(11)]);
var inst_56098 = (state_56134[(8)]);
var tmp56151 = inst_56098;
var inst_56098__$1 = tmp56151;
var inst_56099 = inst_56107;
var state_56134__$1 = (function (){var statearr_56155 = state_56134;
(statearr_56155[(7)] = inst_56099);

(statearr_56155[(8)] = inst_56098__$1);

return statearr_56155;
})();
var statearr_56156_56176 = state_56134__$1;
(statearr_56156_56176[(2)] = null);

(statearr_56156_56176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__54360__auto___56162,out))
;
return ((function (switch__54272__auto__,c__54360__auto___56162,out){
return (function() {
var cljs$core$async$state_machine__54273__auto__ = null;
var cljs$core$async$state_machine__54273__auto____0 = (function (){
var statearr_56157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56157[(0)] = cljs$core$async$state_machine__54273__auto__);

(statearr_56157[(1)] = (1));

return statearr_56157;
});
var cljs$core$async$state_machine__54273__auto____1 = (function (state_56134){
while(true){
var ret_value__54274__auto__ = (function (){try{while(true){
var result__54275__auto__ = switch__54272__auto__.call(null,state_56134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54275__auto__;
}
break;
}
}catch (e56158){if((e56158 instanceof Object)){
var ex__54276__auto__ = e56158;
var statearr_56159_56177 = state_56134;
(statearr_56159_56177[(5)] = ex__54276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56178 = state_56134;
state_56134 = G__56178;
continue;
} else {
return ret_value__54274__auto__;
}
break;
}
});
cljs$core$async$state_machine__54273__auto__ = function(state_56134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54273__auto____1.call(this,state_56134);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54273__auto____0;
cljs$core$async$state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54273__auto____1;
return cljs$core$async$state_machine__54273__auto__;
})()
;})(switch__54272__auto__,c__54360__auto___56162,out))
})();
var state__54362__auto__ = (function (){var statearr_56160 = f__54361__auto__.call(null);
(statearr_56160[(6)] = c__54360__auto___56162);

return statearr_56160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54362__auto__);
});})(c__54360__auto___56162,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__56180 = arguments.length;
switch (G__56180) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__54360__auto___56250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54360__auto___56250,out){
return (function (){
var f__54361__auto__ = (function (){var switch__54272__auto__ = ((function (c__54360__auto___56250,out){
return (function (state_56222){
var state_val_56223 = (state_56222[(1)]);
if((state_val_56223 === (7))){
var inst_56218 = (state_56222[(2)]);
var state_56222__$1 = state_56222;
var statearr_56224_56251 = state_56222__$1;
(statearr_56224_56251[(2)] = inst_56218);

(statearr_56224_56251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56223 === (1))){
var inst_56181 = [];
var inst_56182 = inst_56181;
var inst_56183 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_56222__$1 = (function (){var statearr_56225 = state_56222;
(statearr_56225[(7)] = inst_56183);

(statearr_56225[(8)] = inst_56182);

return statearr_56225;
})();
var statearr_56226_56252 = state_56222__$1;
(statearr_56226_56252[(2)] = null);

(statearr_56226_56252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56223 === (4))){
var inst_56186 = (state_56222[(9)]);
var inst_56186__$1 = (state_56222[(2)]);
var inst_56187 = (inst_56186__$1 == null);
var inst_56188 = cljs.core.not.call(null,inst_56187);
var state_56222__$1 = (function (){var statearr_56227 = state_56222;
(statearr_56227[(9)] = inst_56186__$1);

return statearr_56227;
})();
if(inst_56188){
var statearr_56228_56253 = state_56222__$1;
(statearr_56228_56253[(1)] = (5));

} else {
var statearr_56229_56254 = state_56222__$1;
(statearr_56229_56254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56223 === (15))){
var inst_56212 = (state_56222[(2)]);
var state_56222__$1 = state_56222;
var statearr_56230_56255 = state_56222__$1;
(statearr_56230_56255[(2)] = inst_56212);

(statearr_56230_56255[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56223 === (13))){
var state_56222__$1 = state_56222;
var statearr_56231_56256 = state_56222__$1;
(statearr_56231_56256[(2)] = null);

(statearr_56231_56256[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56223 === (6))){
var inst_56182 = (state_56222[(8)]);
var inst_56207 = inst_56182.length;
var inst_56208 = (inst_56207 > (0));
var state_56222__$1 = state_56222;
if(cljs.core.truth_(inst_56208)){
var statearr_56232_56257 = state_56222__$1;
(statearr_56232_56257[(1)] = (12));

} else {
var statearr_56233_56258 = state_56222__$1;
(statearr_56233_56258[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56223 === (3))){
var inst_56220 = (state_56222[(2)]);
var state_56222__$1 = state_56222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56222__$1,inst_56220);
} else {
if((state_val_56223 === (12))){
var inst_56182 = (state_56222[(8)]);
var inst_56210 = cljs.core.vec.call(null,inst_56182);
var state_56222__$1 = state_56222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56222__$1,(15),out,inst_56210);
} else {
if((state_val_56223 === (2))){
var state_56222__$1 = state_56222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56222__$1,(4),ch);
} else {
if((state_val_56223 === (11))){
var inst_56186 = (state_56222[(9)]);
var inst_56190 = (state_56222[(10)]);
var inst_56200 = (state_56222[(2)]);
var inst_56201 = [];
var inst_56202 = inst_56201.push(inst_56186);
var inst_56182 = inst_56201;
var inst_56183 = inst_56190;
var state_56222__$1 = (function (){var statearr_56234 = state_56222;
(statearr_56234[(11)] = inst_56200);

(statearr_56234[(7)] = inst_56183);

(statearr_56234[(12)] = inst_56202);

(statearr_56234[(8)] = inst_56182);

return statearr_56234;
})();
var statearr_56235_56259 = state_56222__$1;
(statearr_56235_56259[(2)] = null);

(statearr_56235_56259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56223 === (9))){
var inst_56182 = (state_56222[(8)]);
var inst_56198 = cljs.core.vec.call(null,inst_56182);
var state_56222__$1 = state_56222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56222__$1,(11),out,inst_56198);
} else {
if((state_val_56223 === (5))){
var inst_56186 = (state_56222[(9)]);
var inst_56190 = (state_56222[(10)]);
var inst_56183 = (state_56222[(7)]);
var inst_56190__$1 = f.call(null,inst_56186);
var inst_56191 = cljs.core._EQ_.call(null,inst_56190__$1,inst_56183);
var inst_56192 = cljs.core.keyword_identical_QMARK_.call(null,inst_56183,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_56193 = (inst_56191) || (inst_56192);
var state_56222__$1 = (function (){var statearr_56236 = state_56222;
(statearr_56236[(10)] = inst_56190__$1);

return statearr_56236;
})();
if(cljs.core.truth_(inst_56193)){
var statearr_56237_56260 = state_56222__$1;
(statearr_56237_56260[(1)] = (8));

} else {
var statearr_56238_56261 = state_56222__$1;
(statearr_56238_56261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56223 === (14))){
var inst_56215 = (state_56222[(2)]);
var inst_56216 = cljs.core.async.close_BANG_.call(null,out);
var state_56222__$1 = (function (){var statearr_56240 = state_56222;
(statearr_56240[(13)] = inst_56215);

return statearr_56240;
})();
var statearr_56241_56262 = state_56222__$1;
(statearr_56241_56262[(2)] = inst_56216);

(statearr_56241_56262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56223 === (10))){
var inst_56205 = (state_56222[(2)]);
var state_56222__$1 = state_56222;
var statearr_56242_56263 = state_56222__$1;
(statearr_56242_56263[(2)] = inst_56205);

(statearr_56242_56263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56223 === (8))){
var inst_56186 = (state_56222[(9)]);
var inst_56190 = (state_56222[(10)]);
var inst_56182 = (state_56222[(8)]);
var inst_56195 = inst_56182.push(inst_56186);
var tmp56239 = inst_56182;
var inst_56182__$1 = tmp56239;
var inst_56183 = inst_56190;
var state_56222__$1 = (function (){var statearr_56243 = state_56222;
(statearr_56243[(14)] = inst_56195);

(statearr_56243[(7)] = inst_56183);

(statearr_56243[(8)] = inst_56182__$1);

return statearr_56243;
})();
var statearr_56244_56264 = state_56222__$1;
(statearr_56244_56264[(2)] = null);

(statearr_56244_56264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__54360__auto___56250,out))
;
return ((function (switch__54272__auto__,c__54360__auto___56250,out){
return (function() {
var cljs$core$async$state_machine__54273__auto__ = null;
var cljs$core$async$state_machine__54273__auto____0 = (function (){
var statearr_56245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56245[(0)] = cljs$core$async$state_machine__54273__auto__);

(statearr_56245[(1)] = (1));

return statearr_56245;
});
var cljs$core$async$state_machine__54273__auto____1 = (function (state_56222){
while(true){
var ret_value__54274__auto__ = (function (){try{while(true){
var result__54275__auto__ = switch__54272__auto__.call(null,state_56222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54275__auto__;
}
break;
}
}catch (e56246){if((e56246 instanceof Object)){
var ex__54276__auto__ = e56246;
var statearr_56247_56265 = state_56222;
(statearr_56247_56265[(5)] = ex__54276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56266 = state_56222;
state_56222 = G__56266;
continue;
} else {
return ret_value__54274__auto__;
}
break;
}
});
cljs$core$async$state_machine__54273__auto__ = function(state_56222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54273__auto____1.call(this,state_56222);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54273__auto____0;
cljs$core$async$state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54273__auto____1;
return cljs$core$async$state_machine__54273__auto__;
})()
;})(switch__54272__auto__,c__54360__auto___56250,out))
})();
var state__54362__auto__ = (function (){var statearr_56248 = f__54361__auto__.call(null);
(statearr_56248[(6)] = c__54360__auto___56250);

return statearr_56248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54362__auto__);
});})(c__54360__auto___56250,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

