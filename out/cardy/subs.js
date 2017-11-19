// Compiled by ClojureScript 1.9.946 {}
goog.provide('cardy.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cardy.events');
goog.require('clairvoyant.core');
goog.require('re_frame_tracer.core');
if(clairvoyant.core.devmode){
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"page","page",849072397),(function cardy$subs$fn_51171(a_51172,a_51173){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fn_51171","fn_51171",-1331011059,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null);
if((function (){var G__51185 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51185 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51185.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51185.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51185);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51185);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_51172__$1,a_51173__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_51172__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__51186 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51186 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51186.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51186.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51186);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51186);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_51172__$1;
if((function (){var G__51187 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51187 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51187.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51187.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51187);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51187);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__51188 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51188 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51188.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51188.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51188);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51188);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51189){if((e51189 instanceof Object)){
var e__50375__auto__ = e51189;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51189;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var _ = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_51173__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
if((function (){var G__51190 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51190 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51190.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51190.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51190);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51190);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_51173__$1;
if((function (){var G__51191 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51191 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51191.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51191.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51191);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51191);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__51192 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51192 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51192.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51192.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51192);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51192);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51193){if((e51193 instanceof Object)){
var e__50375__auto__ = e51193;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51193;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db,_,trace_data__50372__auto__){
return (function (){

return new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(db);
});})(db,_,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_51172,a_51173);
if((function (){var G__51194 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51194 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51194.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51194.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51194);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51194);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__51195 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51195 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51195.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51195.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51195);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51195);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51196){if((e51196 instanceof Object)){
var e__50375__auto__ = e51196;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51196;

}
}} else {
return f__50373__auto__.call(null);
}
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","show-decks","cardy.subs/show-decks",661790866),(function cardy$subs$show_decks(a_51174){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"show-decks","show-decks",365168945,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"show-decks","show-decks",365168945,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null);
if((function (){var G__51197 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51197 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51197.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51197.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51197);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51197);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_51174__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_51174__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__51198 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51198 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51198.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51198.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51198);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51198);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_51174__$1;
if((function (){var G__51199 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51199 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51199.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51199.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51199);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51199);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__51200 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51200 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51200.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51200.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51200);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51200);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51201){if((e51201 instanceof Object)){
var e__50375__auto__ = e51201;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51201;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db,trace_data__50372__auto__){
return (function (){

return new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(db);
});})(db,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_51174);
if((function (){var G__51202 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51202 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51202.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51202.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51202);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51202);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__51203 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51203 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51203.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51203.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51203);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51203);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51204){if((e51204 instanceof Object)){
var e__50375__auto__ = e51204;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51204;

}
}} else {
return f__50373__auto__.call(null);
}
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","cards","cardy.subs/cards",1976170110),(function cardy$subs$cards(a_51175){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cards","cards",1809705565,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null);
if((function (){var G__51205 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51205 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51205.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51205.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51205);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51205);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_51175__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_51175__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__51206 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51206 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51206.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51206.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51206);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51206);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_51175__$1;
if((function (){var G__51207 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51207 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51207.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51207.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51207);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51207);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__51208 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51208 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51208.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51208.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51208);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51208);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51209){if((e51209 instanceof Object)){
var e__50375__auto__ = e51209;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51209;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db,trace_data__50372__auto__){
return (function (){

return new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(db);
});})(db,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_51175);
if((function (){var G__51210 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51210 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51210.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51210.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51210);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51210);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__51211 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51211 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51211.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51211.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51211);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51211);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51212){if((e51212 instanceof Object)){
var e__50375__auto__ = e51212;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51212;

}
}} else {
return f__50373__auto__.call(null);
}
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","current","cardy.subs/current",-354140467),(function cardy$subs$current(a_51176){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null);
if((function (){var G__51213 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51213 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51213.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51213.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51213);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51213);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_51176__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_51176__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__51214 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51214 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51214.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51214.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51214);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51214);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_51176__$1;
if((function (){var G__51215 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51215 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51215.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51215.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51215);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51215);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__51216 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51216 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51216.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51216.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51216);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51216);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51217){if((e51217 instanceof Object)){
var e__50375__auto__ = e51217;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51217;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db,trace_data__50372__auto__){
return (function (){

return new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(db);
});})(db,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_51176);
if((function (){var G__51218 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51218 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51218.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51218.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51218);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51218);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__51219 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51219 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51219.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51219.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51219);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51219);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51220){if((e51220 instanceof Object)){
var e__50375__auto__ = e51220;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51220;

}
}} else {
return f__50373__auto__.call(null);
}
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","current-face","cardy.subs/current-face",101779168),(function cardy$subs$current_face(a_51177){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null);
if((function (){var G__51221 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51221 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51221.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51221.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51221);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51221);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_51177__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_51177__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__51222 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51222 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51222.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51222.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51222);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51222);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_51177__$1;
if((function (){var G__51223 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51223 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51223.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51223.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51223);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51223);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__51224 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51224 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51224.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51224.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51224);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51224);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51225){if((e51225 instanceof Object)){
var e__50375__auto__ = e51225;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51225;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db,trace_data__50372__auto__){
return (function (){

return new cljs.core.Keyword(null,"current-face","current-face",1615966840).cljs$core$IFn$_invoke$arity$1(db);
});})(db,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_51177);
if((function (){var G__51226 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51226 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51226.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51226.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51226);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51226);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__51227 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51227 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51227.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51227.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51227);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51227);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51228){if((e51228 instanceof Object)){
var e__50375__auto__ = e51228;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51228;

}
}} else {
return f__50373__auto__.call(null);
}
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","excluded","cardy.subs/excluded",839965248),(function cardy$subs$excluded(a_51178){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"excluded","excluded",924579439,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"excluded","excluded",924579439,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Keyword(null,"excluded","excluded",-715952088),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null);
if((function (){var G__51229 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51229 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51229.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51229.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51229);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51229);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_51178__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_51178__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__51230 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51230 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51230.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51230.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51230);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51230);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_51178__$1;
if((function (){var G__51231 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51231 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51231.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51231.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51231);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51231);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__51232 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51232 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51232.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51232.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51232);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51232);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51233){if((e51233 instanceof Object)){
var e__50375__auto__ = e51233;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51233;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db,trace_data__50372__auto__){
return (function (){

return new cljs.core.Keyword(null,"excluded","excluded",-715952088).cljs$core$IFn$_invoke$arity$1(db);
});})(db,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_51178);
if((function (){var G__51234 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51234 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51234.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51234.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51234);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51234);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__51235 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51235 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51235.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51235.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51235);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51235);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51236){if((e51236 instanceof Object)){
var e__50375__auto__ = e51236;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51236;

}
}} else {
return f__50373__auto__.call(null);
}
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","decks","cardy.subs/decks",-1123699440),(function cardy$subs$decks(a_51179){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"decks","decks",-99773969,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"decks","decks",-99773969,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null);
if((function (){var G__51237 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51237 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51237.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51237.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51237);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51237);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_51179__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_51179__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__51238 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51238 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51238.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51238.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51238);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51238);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_51179__$1;
if((function (){var G__51239 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51239 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51239.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51239.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51239);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51239);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__51240 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51240 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51240.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51240.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51240);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51240);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51241){if((e51241 instanceof Object)){
var e__50375__auto__ = e51241;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51241;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db,trace_data__50372__auto__){
return (function (){

return new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(db);
});})(db,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_51179);
if((function (){var G__51242 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51242 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51242.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51242.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51242);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51242);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__51243 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51243 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51243.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51243.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51243);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51243);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51244){if((e51244 instanceof Object)){
var e__50375__auto__ = e51244;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51244;

}
}} else {
return f__50373__auto__.call(null);
}
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","current-deck","cardy.subs/current-deck",73777723),(function cardy$subs$current_deck(a_51180){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"current-deck","current-deck",183285050,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"current-deck","current-deck",183285050,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null);
if((function (){var G__51245 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51245 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51245.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51245.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51245);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51245);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_51180__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_51180__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__51246 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51246 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51246.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51246.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51246);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51246);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_51180__$1;
if((function (){var G__51247 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51247 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51247.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51247.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51247);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51247);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__51248 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51248 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51248.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51248.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51248);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51248);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51249){if((e51249 instanceof Object)){
var e__50375__auto__ = e51249;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51249;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db,trace_data__50372__auto__){
return (function (){

return new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477).cljs$core$IFn$_invoke$arity$1(db);
});})(db,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_51180);
if((function (){var G__51250 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51250 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51250.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51250.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51250);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51250);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__51251 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51251 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51251.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51251.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51251);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51251);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51252){if((e51252 instanceof Object)){
var e__50375__auto__ = e51252;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51252;

}
}} else {
return f__50373__auto__.call(null);
}
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","starter-deck","cardy.subs/starter-deck",37296555),(function cardy$subs$starter_deck(a_51181){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"starter-deck","starter-deck",4653162,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"starter-deck","starter-deck",4653162,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Keyword(null,"starter","starter",1015679147),cljs.core.list(new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"db","db",-1661185010,null))))], null);
if((function (){var G__51253 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51253 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51253.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51253.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51253);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51253);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_51181__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_51181__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__51254 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51254 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51254.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51254.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51254);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51254);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_51181__$1;
if((function (){var G__51255 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51255 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51255.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51255.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51255);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51255);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__51256 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51256 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51256.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51256.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51256);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51256);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51257){if((e51257 instanceof Object)){
var e__50375__auto__ = e51257;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51257;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db,trace_data__50372__auto__){
return (function (){

return new cljs.core.Keyword(null,"starter","starter",1015679147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(db));
});})(db,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_51181);
if((function (){var G__51258 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51258 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51258.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51258.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51258);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51258);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__51259 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51259 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51259.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51259.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51259);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51259);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51260){if((e51260 instanceof Object)){
var e__50375__auto__ = e51260;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51260;

}
}} else {
return f__50373__auto__.call(null);
}
}));

cardy.subs.placeholder_card = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),"This deck has no cards yet. Add one!",new cljs.core.Keyword(null,"back","back",-417520012),"You can flip me. But you really should add a card!"], null);

cardy.subs.empty_cards_QMARK_ = (function cardy$subs$empty_cards_QMARK_(){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"empty-cards?","empty-cards?",512084759,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"empty-cards?","empty-cards?",512084759,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","cards","cardy.subs/cards",1976170110)], null)))))], null);
if((function (){var G__51261 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51261 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51261.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51261.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51261);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51261);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto__){
return (function (){

return cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","cards","cardy.subs/cards",1976170110)], null))));
});})(trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null);
if((function (){var G__51262 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51262 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51262.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51262.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51262);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51262);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__51263 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51263 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51263.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51263.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51263);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51263);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51264){if((e51264 instanceof Object)){
var e__50375__auto__ = e51264;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51264;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.subs.cards_excluded_QMARK_ = (function cardy$subs$cards_excluded_QMARK_(){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cards-excluded?","cards-excluded?",111202493,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"cards-excluded?","cards-excluded?",111202493,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","excluded","cardy.subs/excluded",839965248)], null))))))], null);
if((function (){var G__51265 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51265 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51265.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51265.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51265);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51265);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto__){
return (function (){

return !(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","excluded","cardy.subs/excluded",839965248)], null)))));
});})(trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null);
if((function (){var G__51266 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51266 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51266.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51266.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51266);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51266);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__51267 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51267 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51267.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51267.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51267);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51267);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51268){if((e51268 instanceof Object)){
var e__50375__auto__ = e51268;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51268;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.subs.all_cards_removed_QMARK_ = (function cardy$subs$all_cards_removed_QMARK_(){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"all-cards-removed?","all-cards-removed?",-1143293991,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"all-cards-removed?","all-cards-removed?",-1143293991,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"empty-cards?","empty-cards?",512084759,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"cards-excluded?","cards-excluded?",111202493,null)))))], null);
if((function (){var G__51269 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51269 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51269.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51269.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51269);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51269);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto__){
return (function (){

var and__43344__auto__ = cardy.subs.empty_cards_QMARK_;
if(cljs.core.truth_(and__43344__auto__)){
return cljs.core.not.call(null,cardy.subs.cards_excluded_QMARK_.call(null));
} else {
return and__43344__auto__;
}
});})(trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null);
if((function (){var G__51270 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51270 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51270.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51270.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51270);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51270);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__51271 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51271 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51271.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51271.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51271);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51271);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51272){if((e51272 instanceof Object)){
var e__50375__auto__ = e51272;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51272;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.subs.determine_current_card = (function cardy$subs$determine_current_card(a_51182){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"determine-current-card","determine-current-card",-1439868860,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"determine-current-card","determine-current-card",-1439868860,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null),cljs.core.list(new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"cards","cards",1809705565,null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty-cards?","empty-cards?",512084759,null))),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"empty-cards?","empty-cards?",512084759,null)),cljs.core.list(new cljs.core.Symbol(null,"cards-excluded?","cards-excluded?",111202493,null))),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-back-excluded","cardy.events/add-back-excluded",443491881)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),"This deck has no cards yet. Add one!",new cljs.core.Keyword(null,"back","back",-417520012),"You can flip me. But you really should add a card!"], null)))))], null);
if((function (){var G__51273 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51273 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51273.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51273.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51273);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51273);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_51182__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_51182__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__51274 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51274 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51274.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51274.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51274);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51274);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_51182__$1;
if((function (){var G__51275 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51275 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51275.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51275.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51275);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51275);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__51276 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51276 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51276.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51276.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51276);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51276);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51277){if((e51277 instanceof Object)){
var e__50375__auto__ = e51277;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51277;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db,trace_data__50372__auto__){
return (function (){

var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null),cljs.core.list(new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"cards","cards",1809705565,null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty-cards?","empty-cards?",512084759,null))),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"empty-cards?","empty-cards?",512084759,null)),cljs.core.list(new cljs.core.Symbol(null,"cards-excluded?","cards-excluded?",111202493,null))),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-back-excluded","cardy.events/add-back-excluded",443491881)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),"This deck has no cards yet. Add one!",new cljs.core.Keyword(null,"back","back",-417520012),"You can flip me. But you really should add a card!"], null))))], null);
if((function (){var G__51278 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51278 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51278.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51278.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51278);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51278);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = (function (){var current_index = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null)], null);
if((function (){var G__51279 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51279 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51279.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51279.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51279);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51279);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(db);
if((function (){var G__51280 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51280 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51280.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51280.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51280);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51280);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__51281 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51281 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51281.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51281.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51281);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51281);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51282){if((e51282 instanceof Object)){
var e__50375__auto__ = e51282;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51282;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var cards = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"cards","cards",1809705565,null)], null);
if((function (){var G__51283 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51283 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51283.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51283.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51283);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51283);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,current_index,trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(db);
if((function (){var G__51284 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51284 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51284.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51284.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51284);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51284);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,current_index,trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__51285 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51285 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51285.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51285.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51285);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51285);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51286){if((e51286 instanceof Object)){
var e__50375__auto__ = e51286;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51286;

}
}} else {
return f__50373__auto__.call(null);
}
})();
if(cljs.core.not.call(null,cardy.subs.empty_cards_QMARK_.call(null))){
return cljs.core.nth.call(null,cards,current_index);
} else {
if(cljs.core.truth_((function (){var and__43344__auto__ = cardy.subs.empty_cards_QMARK_.call(null);
if(cljs.core.truth_(and__43344__auto__)){
return cardy.subs.cards_excluded_QMARK_.call(null);
} else {
return and__43344__auto__;
}
})())){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-back-excluded","cardy.events/add-back-excluded",443491881)], null));
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),"This deck has no cards yet. Add one!",new cljs.core.Keyword(null,"back","back",-417520012),"You can flip me. But you really should add a card!"], null);
}
}
})();
if((function (){var G__51287 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51287 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51287.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51287.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51287);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51287);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__51288 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51288 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51288.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51288.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51288);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51288);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51289){if((e51289 instanceof Object)){
var e__50375__auto__ = e51289;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51289;

}
}} else {
return f__50373__auto__.call(null);
}
});})(db,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_51182);
if((function (){var G__51290 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51290 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51290.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51290.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51290);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51290);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__51291 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51291 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51291.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51291.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51291);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51291);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51292){if((e51292 instanceof Object)){
var e__50375__auto__ = e51292;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51292;

}
}} else {
return f__50373__auto__.call(null);
}
});

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","current-card","cardy.subs/current-card",-2024236505),(function cardy$subs$current_card(a_51183){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"current-card","current-card",-2056991290,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"current-card","current-card",-2056991290,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Symbol(null,"determine-current-card","determine-current-card",-1439868860,null),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null);
if((function (){var G__51293 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51293 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51293.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51293.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51293);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51293);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_51183__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_51183__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__51294 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51294 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51294.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51294.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51294);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51294);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_51183__$1;
if((function (){var G__51295 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51295 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51295.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51295.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51295);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51295);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__51296 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51296 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51296.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51296.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51296);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51296);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51297){if((e51297 instanceof Object)){
var e__50375__auto__ = e51297;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51297;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db,trace_data__50372__auto__){
return (function (){

return cardy.subs.determine_current_card.call(null,db);
});})(db,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_51183);
if((function (){var G__51298 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51298 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51298.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51298.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51298);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51298);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__51299 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51299 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51299.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51299.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51299);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51299);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51300){if((e51300 instanceof Object)){
var e__50375__auto__ = e51300;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51300;

}
}} else {
return f__50373__auto__.call(null);
}
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","current-phrase","cardy.subs/current-phrase",1832535043),(function cardy$subs$current_phrase(a_51184){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"current-phrase","current-phrase",1791054290,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"current-phrase","current-phrase",1791054290,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),cljs.core.list(new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),cljs.core.list(new cljs.core.Symbol(null,"determine-current-card","determine-current-card",-1439868860,null),new cljs.core.Symbol(null,"db","db",-1661185010,null)))))], null);
if((function (){var G__51301 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51301 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51301.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51301.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51301);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51301);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_51184__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_51184__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__51302 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51302 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51302.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51302.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51302);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51302);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_51184__$1;
if((function (){var G__51303 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51303 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51303.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51303.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51303);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51303);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__51304 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51304 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51304.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51304.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51304);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51304);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51305){if((e51305 instanceof Object)){
var e__50375__auto__ = e51305;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51305;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db,trace_data__50372__auto__){
return (function (){

var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),cljs.core.list(new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),cljs.core.list(new cljs.core.Symbol(null,"determine-current-card","determine-current-card",-1439868860,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))], null);
if((function (){var G__51306 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51306 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51306.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51306.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51306);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51306);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = (function (){var current_face = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null)], null);
if((function (){var G__51307 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51307 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51307.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51307.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51307);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51307);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = new cljs.core.Keyword(null,"current-face","current-face",1615966840).cljs$core$IFn$_invoke$arity$1(db);
if((function (){var G__51308 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51308 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51308.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51308.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51308);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51308);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__51309 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51309 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51309.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51309.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51309);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51309);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51310){if((e51310 instanceof Object)){
var e__50375__auto__ = e51310;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51310;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return current_face.call(null,cardy.subs.determine_current_card.call(null,db));
})();
if((function (){var G__51311 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51311 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51311.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51311.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51311);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51311);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__51312 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51312 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51312.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51312.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51312);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51312);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51313){if((e51313 instanceof Object)){
var e__50375__auto__ = e51313;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51313;

}
}} else {
return f__50373__auto__.call(null);
}
});})(db,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_51184);
if((function (){var G__51314 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51314 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51314.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51314.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51314);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51314);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__51315 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__51315 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51315.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51315.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51315);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51315);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51316){if((e51316 instanceof Object)){
var e__50375__auto__ = e51316;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51316;

}
}} else {
return f__50373__auto__.call(null);
}
}));
} else {
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"page","page",849072397),(function (db,_){
return new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(db);
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","show-decks","cardy.subs/show-decks",661790866),(function cardy$subs$show_decks(db){
return new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(db);
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","cards","cardy.subs/cards",1976170110),(function cardy$subs$cards(db){
return new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(db);
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","current","cardy.subs/current",-354140467),(function cardy$subs$current(db){
return new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(db);
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","current-face","cardy.subs/current-face",101779168),(function cardy$subs$current_face(db){
return new cljs.core.Keyword(null,"current-face","current-face",1615966840).cljs$core$IFn$_invoke$arity$1(db);
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","excluded","cardy.subs/excluded",839965248),(function cardy$subs$excluded(db){
return new cljs.core.Keyword(null,"excluded","excluded",-715952088).cljs$core$IFn$_invoke$arity$1(db);
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","decks","cardy.subs/decks",-1123699440),(function cardy$subs$decks(db){
return new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(db);
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","current-deck","cardy.subs/current-deck",73777723),(function cardy$subs$current_deck(db){
return new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477).cljs$core$IFn$_invoke$arity$1(db);
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","starter-deck","cardy.subs/starter-deck",37296555),(function cardy$subs$starter_deck(db){
return new cljs.core.Keyword(null,"starter","starter",1015679147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(db));
}));

cardy.subs.placeholder_card = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),"This deck has no cards yet. Add one!",new cljs.core.Keyword(null,"back","back",-417520012),"You can flip me. But you really should add a card!"], null);

cardy.subs.empty_cards_QMARK_ = (function cardy$subs$empty_cards_QMARK_(){
return cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","cards","cardy.subs/cards",1976170110)], null))));
});

cardy.subs.cards_excluded_QMARK_ = (function cardy$subs$cards_excluded_QMARK_(){
return !(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","excluded","cardy.subs/excluded",839965248)], null)))));
});

cardy.subs.all_cards_removed_QMARK_ = (function cardy$subs$all_cards_removed_QMARK_(){
var and__43344__auto__ = cardy.subs.empty_cards_QMARK_;
if(cljs.core.truth_(and__43344__auto__)){
return cljs.core.not.call(null,cardy.subs.cards_excluded_QMARK_.call(null));
} else {
return and__43344__auto__;
}
});

cardy.subs.determine_current_card = (function cardy$subs$determine_current_card(db){
var current_index = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(db);
var cards = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.not.call(null,cardy.subs.empty_cards_QMARK_.call(null))){
return cljs.core.nth.call(null,cards,current_index);
} else {
if(cljs.core.truth_((function (){var and__43344__auto__ = cardy.subs.empty_cards_QMARK_.call(null);
if(cljs.core.truth_(and__43344__auto__)){
return cardy.subs.cards_excluded_QMARK_.call(null);
} else {
return and__43344__auto__;
}
})())){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-back-excluded","cardy.events/add-back-excluded",443491881)], null));
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),"This deck has no cards yet. Add one!",new cljs.core.Keyword(null,"back","back",-417520012),"You can flip me. But you really should add a card!"], null);
}
}
});

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","current-card","cardy.subs/current-card",-2024236505),(function cardy$subs$current_card(db){
return cardy.subs.determine_current_card.call(null,db);
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","current-phrase","cardy.subs/current-phrase",1832535043),(function cardy$subs$current_phrase(db){
var current_face = new cljs.core.Keyword(null,"current-face","current-face",1615966840).cljs$core$IFn$_invoke$arity$1(db);
return current_face.call(null,cardy.subs.determine_current_card.call(null,db));
}));
}
