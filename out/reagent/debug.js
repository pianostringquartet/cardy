// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__48316__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__48316 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48317__i = 0, G__48317__a = new Array(arguments.length -  0);
while (G__48317__i < G__48317__a.length) {G__48317__a[G__48317__i] = arguments[G__48317__i + 0]; ++G__48317__i;}
  args = new cljs.core.IndexedSeq(G__48317__a,0,null);
} 
return G__48316__delegate.call(this,args);};
G__48316.cljs$lang$maxFixedArity = 0;
G__48316.cljs$lang$applyTo = (function (arglist__48318){
var args = cljs.core.seq(arglist__48318);
return G__48316__delegate(args);
});
G__48316.cljs$core$IFn$_invoke$arity$variadic = G__48316__delegate;
return G__48316;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__48319__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__48319 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48320__i = 0, G__48320__a = new Array(arguments.length -  0);
while (G__48320__i < G__48320__a.length) {G__48320__a[G__48320__i] = arguments[G__48320__i + 0]; ++G__48320__i;}
  args = new cljs.core.IndexedSeq(G__48320__a,0,null);
} 
return G__48319__delegate.call(this,args);};
G__48319.cljs$lang$maxFixedArity = 0;
G__48319.cljs$lang$applyTo = (function (arglist__48321){
var args = cljs.core.seq(arglist__48321);
return G__48319__delegate(args);
});
G__48319.cljs$core$IFn$_invoke$arity$variadic = G__48319__delegate;
return G__48319;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});