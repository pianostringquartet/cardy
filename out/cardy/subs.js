// Compiled by ClojureScript 1.9.946 {}
goog.provide('cardy.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cardy.events');
goog.require('clairvoyant.core');
goog.require('re_frame_tracer.core');
if(clairvoyant.core.devmode){
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"page","page",849072397),(function cardy$subs$fn_102733(a_102734,a_102735){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fn_102733","fn_102733",-1409592947,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null);
if((function (){var G__102748 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102748 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102748.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102748.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102748);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102748);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102734__$1,a_102735__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102734__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102749 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102749 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102749.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102749.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102749);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102749);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102734__$1;
if((function (){var G__102750 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102750 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102750.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102750.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102750);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102750);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102751 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102751 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102751.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102751.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102751);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102751);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102752){if((e102752 instanceof Object)){
var e__46790__auto__ = e102752;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102752;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var _ = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102735__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
if((function (){var G__102753 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102753 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102753.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102753.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102753);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102753);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,db,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102735__$1;
if((function (){var G__102754 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102754 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102754.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102754.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102754);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102754);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,db,trace_data__46787__auto__))
;
if((function (){var G__102755 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102755 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102755.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102755.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102755);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102755);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102756){if((e102756 instanceof Object)){
var e__46790__auto__ = e102756;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102756;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,_,trace_data__46787__auto__){
return (function (){

return new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(db);
});})(db,_,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102734,a_102735);
if((function (){var G__102757 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102757 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102757.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102757.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102757);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102757);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102758 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102758 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102758.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102758.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102758);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102758);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102759){if((e102759 instanceof Object)){
var e__46790__auto__ = e102759;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102759;

}
}} else {
return f__46788__auto__.call(null);
}
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","show-decks","cardy.subs/show-decks",661790866),(function cardy$subs$show_decks(a_102736){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"show-decks","show-decks",365168945,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"show-decks","show-decks",365168945,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null);
if((function (){var G__102760 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102760 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102760.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102760.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102760);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102760);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102736__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102736__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102761 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102761 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102761.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102761.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102761);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102761);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102736__$1;
if((function (){var G__102762 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102762 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102762.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102762.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102762);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102762);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102763 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102763 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102763.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102763.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102763);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102763);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102764){if((e102764 instanceof Object)){
var e__46790__auto__ = e102764;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102764;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,trace_data__46787__auto__){
return (function (){

return new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(db);
});})(db,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102736);
if((function (){var G__102765 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102765 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102765.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102765.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102765);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102765);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102766 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102766 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102766.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102766.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102766);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102766);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102767){if((e102767 instanceof Object)){
var e__46790__auto__ = e102767;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102767;

}
}} else {
return f__46788__auto__.call(null);
}
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","cards","cardy.subs/cards",1976170110),(function cardy$subs$cards(a_102737){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cards","cards",1809705565,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null);
if((function (){var G__102768 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102768 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102768.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102768.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102768);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102768);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102737__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102737__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102769 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102769 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102769.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102769.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102769);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102769);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102737__$1;
if((function (){var G__102770 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102770 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102770.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102770.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102770);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102770);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102771 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102771 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102771.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102771.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102771);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102771);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102772){if((e102772 instanceof Object)){
var e__46790__auto__ = e102772;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102772;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,trace_data__46787__auto__){
return (function (){

return new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(db);
});})(db,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102737);
if((function (){var G__102773 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102773 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102773.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102773.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102773);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102773);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102774 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102774 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102774.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102774.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102774);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102774);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102775){if((e102775 instanceof Object)){
var e__46790__auto__ = e102775;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102775;

}
}} else {
return f__46788__auto__.call(null);
}
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","current","cardy.subs/current",-354140467),(function cardy$subs$current(a_102738){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null);
if((function (){var G__102776 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102776 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102776.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102776.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102776);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102776);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102738__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102738__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102777 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102777 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102777.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102777.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102777);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102777);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102738__$1;
if((function (){var G__102778 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102778 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102778.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102778.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102778);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102778);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102779 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102779 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102779.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102779.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102779);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102779);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102780){if((e102780 instanceof Object)){
var e__46790__auto__ = e102780;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102780;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,trace_data__46787__auto__){
return (function (){

return new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(db);
});})(db,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102738);
if((function (){var G__102781 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102781 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102781.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102781.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102781);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102781);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102782 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102782 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102782.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102782.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102782);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102782);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102783){if((e102783 instanceof Object)){
var e__46790__auto__ = e102783;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102783;

}
}} else {
return f__46788__auto__.call(null);
}
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","current-face","cardy.subs/current-face",101779168),(function cardy$subs$current_face(a_102739){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null);
if((function (){var G__102784 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102784 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102784.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102784.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102784);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102784);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102739__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102739__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102785 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102785 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102785.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102785.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102785);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102785);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102739__$1;
if((function (){var G__102786 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102786 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102786.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102786.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102786);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102786);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102787 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102787 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102787.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102787.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102787);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102787);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102788){if((e102788 instanceof Object)){
var e__46790__auto__ = e102788;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102788;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,trace_data__46787__auto__){
return (function (){

return new cljs.core.Keyword(null,"current-face","current-face",1615966840).cljs$core$IFn$_invoke$arity$1(db);
});})(db,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102739);
if((function (){var G__102789 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102789 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102789.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102789.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102789);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102789);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102790 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102790 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102790.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102790.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102790);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102790);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102791){if((e102791 instanceof Object)){
var e__46790__auto__ = e102791;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102791;

}
}} else {
return f__46788__auto__.call(null);
}
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","excluded","cardy.subs/excluded",839965248),(function cardy$subs$excluded(a_102740){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"excluded","excluded",924579439,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"excluded","excluded",924579439,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Keyword(null,"excluded","excluded",-715952088),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null);
if((function (){var G__102792 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102792 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102792.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102792.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102792);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102792);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102740__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102740__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102793 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102793 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102793.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102793.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102793);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102793);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102740__$1;
if((function (){var G__102794 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102794 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102794.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102794.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102794);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102794);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102795 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102795 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102795.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102795.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102795);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102795);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102796){if((e102796 instanceof Object)){
var e__46790__auto__ = e102796;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102796;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,trace_data__46787__auto__){
return (function (){

return new cljs.core.Keyword(null,"excluded","excluded",-715952088).cljs$core$IFn$_invoke$arity$1(db);
});})(db,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102740);
if((function (){var G__102797 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102797 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102797.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102797.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102797);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102797);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102798 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102798 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102798.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102798.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102798);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102798);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102799){if((e102799 instanceof Object)){
var e__46790__auto__ = e102799;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102799;

}
}} else {
return f__46788__auto__.call(null);
}
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","decks","cardy.subs/decks",-1123699440),(function cardy$subs$decks(a_102741){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"decks","decks",-99773969,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"decks","decks",-99773969,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null);
if((function (){var G__102800 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102800 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102800.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102800.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102800);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102800);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102741__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102741__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102801 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102801 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102801.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102801.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102801);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102801);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102741__$1;
if((function (){var G__102802 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102802 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102802.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102802.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102802);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102802);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102803 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102803 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102803.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102803.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102803);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102803);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102804){if((e102804 instanceof Object)){
var e__46790__auto__ = e102804;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102804;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,trace_data__46787__auto__){
return (function (){

return new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(db);
});})(db,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102741);
if((function (){var G__102805 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102805 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102805.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102805.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102805);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102805);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102806 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102806 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102806.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102806.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102806);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102806);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102807){if((e102807 instanceof Object)){
var e__46790__auto__ = e102807;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102807;

}
}} else {
return f__46788__auto__.call(null);
}
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","current-deck","cardy.subs/current-deck",73777723),(function cardy$subs$current_deck(a_102742){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"current-deck","current-deck",183285050,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"current-deck","current-deck",183285050,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null);
if((function (){var G__102808 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102808 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102808.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102808.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102808);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102808);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102742__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102742__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102809 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102809 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102809.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102809.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102809);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102809);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102742__$1;
if((function (){var G__102810 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102810 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102810.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102810.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102810);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102810);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102811 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102811 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102811.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102811.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102811);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102811);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102812){if((e102812 instanceof Object)){
var e__46790__auto__ = e102812;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102812;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,trace_data__46787__auto__){
return (function (){

return new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477).cljs$core$IFn$_invoke$arity$1(db);
});})(db,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102742);
if((function (){var G__102813 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102813 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102813.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102813.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102813);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102813);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102814 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102814 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102814.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102814.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102814);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102814);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102815){if((e102815 instanceof Object)){
var e__46790__auto__ = e102815;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102815;

}
}} else {
return f__46788__auto__.call(null);
}
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","starter-deck","cardy.subs/starter-deck",37296555),(function cardy$subs$starter_deck(a_102743){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"starter-deck","starter-deck",4653162,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"starter-deck","starter-deck",4653162,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Keyword(null,"starter","starter",1015679147),cljs.core.list(new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"db","db",-1661185010,null))))], null);
if((function (){var G__102816 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102816 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102816.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102816.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102816);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102816);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102743__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102743__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102817 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102817 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102817.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102817.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102817);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102817);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102743__$1;
if((function (){var G__102818 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102818 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102818.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102818.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102818);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102818);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102819 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102819 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102819.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102819.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102819);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102819);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102820){if((e102820 instanceof Object)){
var e__46790__auto__ = e102820;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102820;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,trace_data__46787__auto__){
return (function (){

return new cljs.core.Keyword(null,"starter","starter",1015679147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(db));
});})(db,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102743);
if((function (){var G__102821 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102821 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102821.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102821.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102821);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102821);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102822 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102822 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102822.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102822.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102822);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102822);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102823){if((e102823 instanceof Object)){
var e__46790__auto__ = e102823;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102823;

}
}} else {
return f__46788__auto__.call(null);
}
}));

cardy.subs.placeholder_card = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),"This deck has no cards yet. Add one!",new cljs.core.Keyword(null,"back","back",-417520012),"You can flip me. But you really should add a card!"], null);

cardy.subs.empty_cards_QMARK_ = (function cardy$subs$empty_cards_QMARK_(){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"empty-cards?","empty-cards?",512084759,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"empty-cards?","empty-cards?",512084759,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","cards","cardy.subs/cards",1976170110)], null)))))], null);
if((function (){var G__102824 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102824 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102824.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102824.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102824);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102824);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto__){
return (function (){

return cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","cards","cardy.subs/cards",1976170110)], null))));
});})(trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null);
if((function (){var G__102825 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102825 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102825.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102825.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102825);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102825);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102826 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102826 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102826.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102826.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102826);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102826);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102827){if((e102827 instanceof Object)){
var e__46790__auto__ = e102827;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102827;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.subs.cards_excluded_QMARK_ = (function cardy$subs$cards_excluded_QMARK_(){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cards-excluded?","cards-excluded?",111202493,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"cards-excluded?","cards-excluded?",111202493,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","excluded","cardy.subs/excluded",839965248)], null))))))], null);
if((function (){var G__102828 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102828 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102828.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102828.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102828);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102828);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto__){
return (function (){

return !(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","excluded","cardy.subs/excluded",839965248)], null)))));
});})(trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null);
if((function (){var G__102829 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102829 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102829.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102829.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102829);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102829);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102830 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102830 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102830.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102830.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102830);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102830);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102831){if((e102831 instanceof Object)){
var e__46790__auto__ = e102831;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102831;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.subs.all_cards_removed_QMARK_ = (function cardy$subs$all_cards_removed_QMARK_(){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"all-cards-removed?","all-cards-removed?",-1143293991,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"all-cards-removed?","all-cards-removed?",-1143293991,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"empty-cards?","empty-cards?",512084759,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"cards-excluded?","cards-excluded?",111202493,null)))))], null);
if((function (){var G__102832 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102832 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102832.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102832.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102832);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102832);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto__){
return (function (){

var and__43344__auto__ = cardy.subs.empty_cards_QMARK_;
if(cljs.core.truth_(and__43344__auto__)){
return cljs.core.not.call(null,cardy.subs.cards_excluded_QMARK_.call(null));
} else {
return and__43344__auto__;
}
});})(trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null);
if((function (){var G__102833 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102833 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102833.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102833.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102833);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102833);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102834 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102834 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102834.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102834.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102834);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102834);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102835){if((e102835 instanceof Object)){
var e__46790__auto__ = e102835;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102835;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.subs.determine_current_card = (function cardy$subs$determine_current_card(a_102744){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"determine-current-card","determine-current-card",-1439868860,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"determine-current-card","determine-current-card",-1439868860,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null),cljs.core.list(new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"cards","cards",1809705565,null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty-cards?","empty-cards?",512084759,null))),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"empty-cards?","empty-cards?",512084759,null)),cljs.core.list(new cljs.core.Symbol(null,"cards-excluded?","cards-excluded?",111202493,null))),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-back-excluded","cardy.events/add-back-excluded",443491881)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),"This deck has no cards yet. Add one!",new cljs.core.Keyword(null,"back","back",-417520012),"You can flip me. But you really should add a card!"], null)))))], null);
if((function (){var G__102836 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102836 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102836.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102836.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102836);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102836);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102744__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102744__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102837 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102837 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102837.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102837.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102837);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102837);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102744__$1;
if((function (){var G__102838 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102838 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102838.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102838.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102838);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102838);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102839 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102839 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102839.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102839.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102839);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102839);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102840){if((e102840 instanceof Object)){
var e__46790__auto__ = e102840;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102840;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,trace_data__46787__auto__){
return (function (){

var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null),cljs.core.list(new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"cards","cards",1809705565,null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty-cards?","empty-cards?",512084759,null))),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"empty-cards?","empty-cards?",512084759,null)),cljs.core.list(new cljs.core.Symbol(null,"cards-excluded?","cards-excluded?",111202493,null))),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-back-excluded","cardy.events/add-back-excluded",443491881)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),"This deck has no cards yet. Add one!",new cljs.core.Keyword(null,"back","back",-417520012),"You can flip me. But you really should add a card!"], null))))], null);
if((function (){var G__102841 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102841 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102841.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102841.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102841);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102841);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,db,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = (function (){var current_index = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null)], null);
if((function (){var G__102842 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102842 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102842.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102842.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102842);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102842);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,trace_data__46787__auto____$1,db,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(db);
if((function (){var G__102843 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102843 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102843.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102843.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102843);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102843);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,trace_data__46787__auto____$1,db,trace_data__46787__auto__))
;
if((function (){var G__102844 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102844 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102844.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102844.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102844);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102844);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102845){if((e102845 instanceof Object)){
var e__46790__auto__ = e102845;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102845;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var cards = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"cards","cards",1809705565,null)], null);
if((function (){var G__102846 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102846 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102846.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102846.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102846);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102846);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,current_index,trace_data__46787__auto____$1,db,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(db);
if((function (){var G__102847 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102847 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102847.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102847.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102847);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102847);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,current_index,trace_data__46787__auto____$1,db,trace_data__46787__auto__))
;
if((function (){var G__102848 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102848 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102848.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102848.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102848);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102848);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102849){if((e102849 instanceof Object)){
var e__46790__auto__ = e102849;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102849;

}
}} else {
return f__46788__auto__.call(null);
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
if((function (){var G__102850 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102850 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102850.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102850.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102850);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102850);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,db,trace_data__46787__auto__))
;
if((function (){var G__102851 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102851 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102851.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102851.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102851);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102851);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102852){if((e102852 instanceof Object)){
var e__46790__auto__ = e102852;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102852;

}
}} else {
return f__46788__auto__.call(null);
}
});})(db,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102744);
if((function (){var G__102853 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102853 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102853.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102853.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102853);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102853);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102854 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102854 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102854.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102854.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102854);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102854);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102855){if((e102855 instanceof Object)){
var e__46790__auto__ = e102855;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102855;

}
}} else {
return f__46788__auto__.call(null);
}
});

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","current-card","cardy.subs/current-card",-2024236505),(function cardy$subs$current_card(a_102745){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"current-card","current-card",-2056991290,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"current-card","current-card",-2056991290,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Keyword(null,"current-card","current-card",597444479),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null);
if((function (){var G__102856 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102856 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102856.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102856.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102856);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102856);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102745__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102745__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102857 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102857 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102857.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102857.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102857);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102857);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102745__$1;
if((function (){var G__102858 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102858 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102858.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102858.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102858);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102858);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102859 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102859 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102859.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102859.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102859);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102859);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102860){if((e102860 instanceof Object)){
var e__46790__auto__ = e102860;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102860;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,trace_data__46787__auto__){
return (function (){

return new cljs.core.Keyword(null,"current-card","current-card",597444479).cljs$core$IFn$_invoke$arity$1(db);
});})(db,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102745);
if((function (){var G__102861 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102861 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102861.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102861.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102861);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102861);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102862 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102862 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102862.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102862.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102862);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102862);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102863){if((e102863 instanceof Object)){
var e__46790__auto__ = e102863;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102863;

}
}} else {
return f__46788__auto__.call(null);
}
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","current-phrase","cardy.subs/current-phrase",1832535043),(function cardy$subs$current_phrase(a_102746){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"current-phrase","current-phrase",1791054290,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"current-phrase","current-phrase",1791054290,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),cljs.core.list(new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),cljs.core.list(new cljs.core.Keyword(null,"current-card","current-card",597444479),new cljs.core.Symbol(null,"db","db",-1661185010,null)))))], null);
if((function (){var G__102864 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102864 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102864.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102864.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102864);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102864);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102746__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102746__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102865 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102865 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102865.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102865.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102865);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102865);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102746__$1;
if((function (){var G__102866 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102866 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102866.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102866.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102866);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102866);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102867 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102867 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102867.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102867.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102867);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102867);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102868){if((e102868 instanceof Object)){
var e__46790__auto__ = e102868;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102868;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,trace_data__46787__auto__){
return (function (){

var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),cljs.core.list(new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),cljs.core.list(new cljs.core.Keyword(null,"current-card","current-card",597444479),new cljs.core.Symbol(null,"db","db",-1661185010,null))))], null);
if((function (){var G__102869 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102869 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102869.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102869.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102869);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102869);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,db,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = (function (){var current_face = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null)], null);
if((function (){var G__102870 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102870 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102870.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102870.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102870);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102870);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,trace_data__46787__auto____$1,db,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = new cljs.core.Keyword(null,"current-face","current-face",1615966840).cljs$core$IFn$_invoke$arity$1(db);
if((function (){var G__102871 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102871 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102871.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102871.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102871);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102871);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,trace_data__46787__auto____$1,db,trace_data__46787__auto__))
;
if((function (){var G__102872 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102872 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102872.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102872.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102872);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102872);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102873){if((e102873 instanceof Object)){
var e__46790__auto__ = e102873;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102873;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return current_face.call(null,new cljs.core.Keyword(null,"current-card","current-card",597444479).cljs$core$IFn$_invoke$arity$1(db));
})();
if((function (){var G__102874 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102874 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102874.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102874.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102874);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102874);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,db,trace_data__46787__auto__))
;
if((function (){var G__102875 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102875 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102875.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102875.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102875);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102875);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102876){if((e102876 instanceof Object)){
var e__46790__auto__ = e102876;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102876;

}
}} else {
return f__46788__auto__.call(null);
}
});})(db,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102746);
if((function (){var G__102877 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102877 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102877.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102877.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102877);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102877);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102878 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102878 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102878.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102878.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102878);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102878);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102879){if((e102879 instanceof Object)){
var e__46790__auto__ = e102879;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102879;

}
}} else {
return f__46788__auto__.call(null);
}
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","removed","cardy.subs/removed",-1055681562),(function cardy$subs$removed_cards(a_102747){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.subs","cardy.subs",695939840,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"removed-cards","removed-cards",-1858125617,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"removed-cards","removed-cards",-1858125617,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Keyword(null,"removed","removed",609626430),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null);
if((function (){var G__102880 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102880 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102880.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102880.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102880);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102880);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102747__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102747__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102881 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102881 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102881.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102881.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102881);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102881);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102747__$1;
if((function (){var G__102882 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102882 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102882.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102882.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102882);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102882);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102883 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102883 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102883.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102883.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102883);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102883);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102884){if((e102884 instanceof Object)){
var e__46790__auto__ = e102884;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102884;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,trace_data__46787__auto__){
return (function (){

return new cljs.core.Keyword(null,"removed","removed",609626430).cljs$core$IFn$_invoke$arity$1(db);
});})(db,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102747);
if((function (){var G__102885 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102885 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102885.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102885.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102885);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102885);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102886 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown");
if(!((G__102886 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102886.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102886.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102886);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102886);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102887){if((e102887 instanceof Object)){
var e__46790__auto__ = e102887;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"brown"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102887;

}
}} else {
return f__46788__auto__.call(null);
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
return new cljs.core.Keyword(null,"current-card","current-card",597444479).cljs$core$IFn$_invoke$arity$1(db);
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","current-phrase","cardy.subs/current-phrase",1832535043),(function cardy$subs$current_phrase(db){
var current_face = new cljs.core.Keyword(null,"current-face","current-face",1615966840).cljs$core$IFn$_invoke$arity$1(db);
return current_face.call(null,new cljs.core.Keyword(null,"current-card","current-card",597444479).cljs$core$IFn$_invoke$arity$1(db));
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("cardy.subs","removed","cardy.subs/removed",-1055681562),(function cardy$subs$removed_cards(db){
return new cljs.core.Keyword(null,"removed","removed",609626430).cljs$core$IFn$_invoke$arity$1(db);
}));
}
