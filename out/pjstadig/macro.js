// Compiled by ClojureScript 1.9.946 {}
goog.provide('pjstadig.macro');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('clojure.data');
pjstadig.macro.diff = (function pjstadig$macro$diff(var_args){
var args__44534__auto__ = [];
var len__44527__auto___57561 = arguments.length;
var i__44528__auto___57562 = (0);
while(true){
if((i__44528__auto___57562 < len__44527__auto___57561)){
args__44534__auto__.push((arguments[i__44528__auto___57562]));

var G__57563 = (i__44528__auto___57562 + (1));
i__44528__auto___57562 = G__57563;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((0) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((0)),(0),null)):null);
return pjstadig.macro.diff.cljs$core$IFn$_invoke$arity$variadic(argseq__44535__auto__);
});

pjstadig.macro.diff.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,clojure.data.diff,args);
});

pjstadig.macro.diff.cljs$lang$maxFixedArity = (0);

pjstadig.macro.diff.cljs$lang$applyTo = (function (seq57560){
return pjstadig.macro.diff.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57560));
});

pjstadig.macro.do_report = (function pjstadig$macro$do_report(var_args){
var args__44534__auto__ = [];
var len__44527__auto___57565 = arguments.length;
var i__44528__auto___57566 = (0);
while(true){
if((i__44528__auto___57566 < len__44527__auto___57565)){
args__44534__auto__.push((arguments[i__44528__auto___57566]));

var G__57567 = (i__44528__auto___57566 + (1));
i__44528__auto___57566 = G__57567;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((0) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((0)),(0),null)):null);
return pjstadig.macro.do_report.cljs$core$IFn$_invoke$arity$variadic(argseq__44535__auto__);
});

pjstadig.macro.do_report.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.test.do_report,args);
});

pjstadig.macro.do_report.cljs$lang$maxFixedArity = (0);

pjstadig.macro.do_report.cljs$lang$applyTo = (function (seq57564){
return pjstadig.macro.do_report.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57564));
});

