// Compiled by ClojureScript 1.9.946 {}
goog.provide('cardy.events');
goog.require('cljs.core');
goog.require('cardy.db');
goog.require('re_frame.core');
goog.require('clairvoyant.core');
goog.require('re_frame_tracer.core');
goog.require('ajax.core');
if(clairvoyant.core.devmode){
cardy.events.input_to_keyword = (function cardy$events$input_to_keyword(a_50652){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"input-to-keyword","input-to-keyword",-410870276,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a-string","a-string",-821119238,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"input-to-keyword","input-to-keyword",-410870276,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a-string","a-string",-821119238,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"a-string in input-to-keyword is: ",new cljs.core.Symbol(null,"a-string","a-string",-821119238,null)),cljs.core.list(new cljs.core.Symbol(null,"keyword","keyword",-1843046022,null),cljs.core.list(new cljs.core.Symbol("clojure.string","trim","clojure.string/trim",-1498124613,null),new cljs.core.Symbol(null,"a-string","a-string",-821119238,null)))))], null);
if((function (){var G__50699 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50699 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50699.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50699.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50699);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50699);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_50652__$1){
var a_string = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50652__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"a-string","a-string",-821119238,null)], null);
if((function (){var G__50700 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50700 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50700.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50700.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50700);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50700);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50652__$1;
if((function (){var G__50701 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50701 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50701.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50701.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50701);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50701);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__50702 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50702 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50702.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50702.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50702);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50702);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50703){if((e50703 instanceof Object)){
var e__50375__auto__ = e50703;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50703;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (a_string,trace_data__50372__auto__){
return (function (){

console.log("a-string in input-to-keyword is: ",a_string);

return cljs.core.keyword.call(null,clojure.string.trim.call(null,a_string));
});})(a_string,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_50652);
if((function (){var G__50704 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50704 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50704.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50704.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50704);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50704);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__50705 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50705 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50705.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50705.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50705);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50705);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50706){if((e50706 instanceof Object)){
var e__50375__auto__ = e50706;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50706;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.events.input_to_card = (function cardy$events$input_to_card(a_50654){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"input-to-card","input-to-card",-1851962871,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__50653","p__50653",323153275,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"input-to-card","input-to-card",-1851962871,null),"Accepts input (a string), returns a card (a map).",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"a-string","a-string",-821119238,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),"a-string in input-to-card: ",new cljs.core.Symbol(null,"a-string","a-string",-821119238,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"words","words",-729502768,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol("clojure.string","trim","clojure.string/trim",-1498124613,null),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"a-string","a-string",-821119238,null),/;/))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"words","words",-729502768,null)),new cljs.core.Keyword(null,"back","back",-417520012),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"words","words",-729502768,null))], null))))], null);
if((function (){var G__50707 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50707 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50707.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50707.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50707);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50707);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_50654__$1){
var p__50653 = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50654__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p__50653","p__50653",323153275,null)], null);
if((function (){var G__50708 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50708 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50708.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50708.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50708);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50708);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50654__$1;
if((function (){var G__50709 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50709 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50709.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50709.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50709);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50709);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__50710 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50710 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50710.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50710.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50710);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50710);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50711){if((e50711 instanceof Object)){
var e__50375__auto__ = e50711;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50711;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (p__50653,trace_data__50372__auto__){
return (function (){

var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"a-string","a-string",-821119238,null)], null),new cljs.core.Symbol(null,"p__50653","p__50653",323153275,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),"a-string in input-to-card: ",new cljs.core.Symbol(null,"a-string","a-string",-821119238,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"words","words",-729502768,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol("clojure.string","trim","clojure.string/trim",-1498124613,null),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"a-string","a-string",-821119238,null),/;/))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"words","words",-729502768,null)),new cljs.core.Keyword(null,"back","back",-417520012),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"words","words",-729502768,null))], null))))], null);
if((function (){var G__50712 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50712 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50712.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50712.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50712);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50712);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,p__50653,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = (function (){var vec__50713 = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Symbol(null,"p__50653","p__50653",323153275,null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"a-string","a-string",-821119238,null)], null)], null);
if((function (){var G__50716 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50716 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50716.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50716.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50716);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50716);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,trace_data__50372__auto____$1,p__50653,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = p__50653;
if((function (){var G__50717 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50717 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50717.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50717.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50717);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50717);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,trace_data__50372__auto____$1,p__50653,trace_data__50372__auto__))
;
if((function (){var G__50718 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50718 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50718.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50718.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50718);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50718);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50719){if((e50719 instanceof Object)){
var e__50375__auto__ = e50719;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50719;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var event_id_to_ignore = cljs.core.nth.call(null,vec__50713,(0),null);
var a_string = cljs.core.nth.call(null,vec__50713,(1),null);
cljs.core.println.call(null,"a-string in input-to-card: ",a_string);

var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"words","words",-729502768,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol("clojure.string","trim","clojure.string/trim",-1498124613,null),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"a-string","a-string",-821119238,null),/;/))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"words","words",-729502768,null)),new cljs.core.Keyword(null,"back","back",-417520012),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"words","words",-729502768,null))], null))], null);
if((function (){var G__50720 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50720 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50720.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50720.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50720);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50720);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,vec__50713,event_id_to_ignore,a_string,trace_data__50372__auto____$1,p__50653,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = (function (){var words = (function (){var trace_data__50372__auto____$3 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol("clojure.string","trim","clojure.string/trim",-1498124613,null),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"a-string","a-string",-821119238,null),/;/)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"words","words",-729502768,null)], null);
if((function (){var G__50721 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50721 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50721.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50721.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50721);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50721);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$3);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$3,trace_data__50372__auto____$2,vec__50713,event_id_to_ignore,a_string,trace_data__50372__auto____$1,p__50653,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,a_string,/;/));
if((function (){var G__50722 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50722 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50722.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50722.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50722);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50722);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$3,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$3,trace_data__50372__auto____$2,vec__50713,event_id_to_ignore,a_string,trace_data__50372__auto____$1,p__50653,trace_data__50372__auto__))
;
if((function (){var G__50723 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50723 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50723.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50723.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50723);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50723);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50724){if((e50724 instanceof Object)){
var e__50375__auto__ = e50724;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$3,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50724;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),cljs.core.first.call(null,words),new cljs.core.Keyword(null,"back","back",-417520012),cljs.core.second.call(null,words)], null);
})();
if((function (){var G__50725 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50725 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50725.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50725.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50725);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50725);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,vec__50713,event_id_to_ignore,a_string,trace_data__50372__auto____$1,p__50653,trace_data__50372__auto__))
;
if((function (){var G__50726 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50726 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50726.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50726.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50726);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50726);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50727){if((e50727 instanceof Object)){
var e__50375__auto__ = e50727;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50727;

}
}} else {
return f__50373__auto__.call(null);
}
})();
if((function (){var G__50728 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50728 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50728.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50728.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50728);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50728);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,p__50653,trace_data__50372__auto__))
;
if((function (){var G__50729 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50729 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50729.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50729.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50729);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50729);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50730){if((e50730 instanceof Object)){
var e__50375__auto__ = e50730;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50730;

}
}} else {
return f__50373__auto__.call(null);
}
});})(p__50653,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_50654);
if((function (){var G__50731 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50731 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50731.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50731.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50731);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50731);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__50732 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50732 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50732.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50732.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50732);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50732);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50733){if((e50733 instanceof Object)){
var e__50375__auto__ = e50733;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50733;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.events.dissoc_in = (function cardy$events$dissoc_in(a_50656,a_50657){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"dissoc-in","dissoc-in",-249353279,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"p__50655","p__50655",168323827,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"dissoc-in","dissoc-in",-249353279,null),"Dissociates an entry from a nested associative structure returning a new\n  nested structure. keys is a sequence of keys. Any empty maps that result\n  will not be present in the new structure.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"keys","keys",-1586012071,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nextmap","nextmap",236312542,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null))], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newmap","newmap",1211861451,null),cljs.core.list(new cljs.core.Symbol(null,"dissoc-in","dissoc-in",-249353279,null),new cljs.core.Symbol(null,"nextmap","nextmap",236312542,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"newmap","newmap",1211861451,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"newmap","newmap",1211861451,null)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null)))),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null))))], null);
if((function (){var G__50734 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50734 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50734.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50734.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50734);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50734);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_50656__$1,a_50657__$1){
var m = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50656__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null);
if((function (){var G__50735 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50735 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50735.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50735.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50735);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50735);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50656__$1;
if((function (){var G__50736 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50736 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50736.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50736.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50736);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50736);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__50737 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50737 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50737.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50737.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50737);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50737);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50738){if((e50738 instanceof Object)){
var e__50375__auto__ = e50738;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50738;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var p__50655 = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50657__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p__50655","p__50655",168323827,null)], null);
if((function (){var G__50739 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50739 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50739.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50739.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50739);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50739);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,m,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50657__$1;
if((function (){var G__50740 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50740 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50740.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50740.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50740);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50740);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,m,trace_data__50372__auto__))
;
if((function (){var G__50741 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50741 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50741.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50741.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50741);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50741);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50742){if((e50742 instanceof Object)){
var e__50375__auto__ = e50742;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50742;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (m,p__50655,trace_data__50372__auto__){
return (function (){

var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"keys","keys",-1586012071,null)], null),new cljs.core.Symbol(null,"p__50655","p__50655",168323827,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nextmap","nextmap",236312542,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null))], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newmap","newmap",1211861451,null),cljs.core.list(new cljs.core.Symbol(null,"dissoc-in","dissoc-in",-249353279,null),new cljs.core.Symbol(null,"nextmap","nextmap",236312542,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"newmap","newmap",1211861451,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"newmap","newmap",1211861451,null)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null)))),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null))))], null);
if((function (){var G__50743 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50743 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50743.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50743.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50743);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50743);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,m,p__50655,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = (function (){var vec__50744 = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Symbol(null,"p__50655","p__50655",168323827,null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"keys","keys",-1586012071,null)], null)], null);
if((function (){var G__50747 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50747 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50747.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50747.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50747);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50747);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,trace_data__50372__auto____$1,m,p__50655,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = p__50655;
if((function (){var G__50748 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50748 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50748.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50748.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50748);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50748);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,trace_data__50372__auto____$1,m,p__50655,trace_data__50372__auto__))
;
if((function (){var G__50749 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50749 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50749.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50749.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50749);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50749);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50750){if((e50750 instanceof Object)){
var e__50375__auto__ = e50750;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50750;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var seq__50745 = cljs.core.seq.call(null,vec__50744);
var first__50746 = cljs.core.first.call(null,seq__50745);
var seq__50745__$1 = cljs.core.next.call(null,seq__50745);
var k = first__50746;
var ks = seq__50745__$1;
var keys = vec__50744;
if(ks){
var temp__4655__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var nextmap = temp__4655__auto__;
var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newmap","newmap",1211861451,null),cljs.core.list(new cljs.core.Symbol(null,"dissoc-in","dissoc-in",-249353279,null),new cljs.core.Symbol(null,"nextmap","nextmap",236312542,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"newmap","newmap",1211861451,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"newmap","newmap",1211861451,null)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null))))], null);
if((function (){var G__50751 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50751 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50751.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50751.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50751);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50751);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,nextmap,temp__4655__auto__,vec__50744,seq__50745,first__50746,seq__50745__$1,k,ks,keys,trace_data__50372__auto____$1,m,p__50655,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = (function (){var newmap = (function (){var trace_data__50372__auto____$3 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol(null,"dissoc-in","dissoc-in",-249353279,null),new cljs.core.Symbol(null,"nextmap","nextmap",236312542,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"newmap","newmap",1211861451,null)], null);
if((function (){var G__50752 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50752 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50752.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50752.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50752);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50752);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$3);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$3,trace_data__50372__auto____$2,nextmap,temp__4655__auto__,vec__50744,seq__50745,first__50746,seq__50745__$1,k,ks,keys,trace_data__50372__auto____$1,m,p__50655,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = cardy.events.dissoc_in.call(null,nextmap,ks);
if((function (){var G__50753 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50753 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50753.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50753.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50753);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50753);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$3,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$3,trace_data__50372__auto____$2,nextmap,temp__4655__auto__,vec__50744,seq__50745,first__50746,seq__50745__$1,k,ks,keys,trace_data__50372__auto____$1,m,p__50655,trace_data__50372__auto__))
;
if((function (){var G__50754 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50754 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50754.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50754.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50754);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50754);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50755){if((e50755 instanceof Object)){
var e__50375__auto__ = e50755;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$3,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50755;

}
}} else {
return f__50373__auto__.call(null);
}
})();
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
})();
if((function (){var G__50756 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50756 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50756.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50756.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50756);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50756);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,nextmap,temp__4655__auto__,vec__50744,seq__50745,first__50746,seq__50745__$1,k,ks,keys,trace_data__50372__auto____$1,m,p__50655,trace_data__50372__auto__))
;
if((function (){var G__50757 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50757 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50757.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50757.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50757);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50757);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50758){if((e50758 instanceof Object)){
var e__50375__auto__ = e50758;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50758;

}
}} else {
return f__50373__auto__.call(null);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
})();
if((function (){var G__50759 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50759 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50759.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50759.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50759);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50759);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,m,p__50655,trace_data__50372__auto__))
;
if((function (){var G__50760 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50760 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50760.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50760.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50760);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50760);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50761){if((e50761 instanceof Object)){
var e__50375__auto__ = e50761;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50761;

}
}} else {
return f__50373__auto__.call(null);
}
});})(m,p__50655,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_50656,a_50657);
if((function (){var G__50762 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50762 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50762.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50762.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50762);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50762);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__50763 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50763 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50763.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50763.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50763);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50763);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50764){if((e50764 instanceof Object)){
var e__50375__auto__ = e50764;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50764;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.events.drop_nth = (function cardy$events$drop_nth(a_50661,a_50662){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"drop-nth","drop-nth",-1477008594,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"drop-nth","drop-nth",-1477008594,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null),cljs.core.list(new cljs.core.Symbol(null,"keep-indexed","keep-indexed",-2020916352,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50648#","p1__50648#",-1867180490,null),new cljs.core.Symbol(null,"p2__50649#","p2__50649#",-1727498181,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"p1__50648#","p1__50648#",-1867180490,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)),new cljs.core.Symbol(null,"p2__50649#","p2__50649#",-1727498181,null))),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)))], null);
if((function (){var G__50765 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50765 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50765.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50765.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50765);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50765);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_50661__$1,a_50662__$1){
var n = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50661__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"n","n",-2092305744,null)], null);
if((function (){var G__50766 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50766 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50766.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50766.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50766);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50766);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50661__$1;
if((function (){var G__50767 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50767 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50767.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50767.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50767);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50767);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__50768 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50768 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50768.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50768.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50768);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50768);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50769){if((e50769 instanceof Object)){
var e__50375__auto__ = e50769;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50769;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var coll = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50662__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
if((function (){var G__50770 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50770 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50770.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50770.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50770);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50770);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,n,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50662__$1;
if((function (){var G__50771 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50771 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50771.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50771.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50771);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50771);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,n,trace_data__50372__auto__))
;
if((function (){var G__50772 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50772 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50772.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50772.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50772);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50772);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50773){if((e50773 instanceof Object)){
var e__50375__auto__ = e50773;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50773;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (n,coll,trace_data__50372__auto__){
return (function (){

return cljs.core.keep_indexed.call(null,((function (n,coll,trace_data__50372__auto__){
return (function cardy$events$drop_nth_$_fn_50658(a_50659,a_50660){
var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fn_50658","fn_50658",1587003957,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50648#","p1__50648#",-1867180490,null),new cljs.core.Symbol(null,"p2__50649#","p2__50649#",-1727498181,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50648#","p1__50648#",-1867180490,null),new cljs.core.Symbol(null,"p2__50649#","p2__50649#",-1727498181,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"p1__50648#","p1__50648#",-1867180490,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)),new cljs.core.Symbol(null,"p2__50649#","p2__50649#",-1727498181,null)))], null);
if((function (){var G__50774 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50774 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50774.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50774.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50774);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50774);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,n,coll,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto____$1,n,coll,trace_data__50372__auto__){
return (function (a_50659__$1,a_50660__$1){
var p1__50648_SHARP_ = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50659__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__50648#","p1__50648#",-1867180490,null)], null);
if((function (){var G__50775 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50775 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50775.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50775.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50775);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50775);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,trace_data__50372__auto____$1,n,coll,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50659__$1;
if((function (){var G__50776 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50776 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50776.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50776.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50776);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50776);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,trace_data__50372__auto____$1,n,coll,trace_data__50372__auto__))
;
if((function (){var G__50777 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50777 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50777.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50777.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50777);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50777);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50778){if((e50778 instanceof Object)){
var e__50375__auto__ = e50778;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50778;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var p2__50649_SHARP_ = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50660__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p2__50649#","p2__50649#",-1727498181,null)], null);
if((function (){var G__50779 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50779 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50779.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50779.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50779);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50779);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,p1__50648_SHARP_,trace_data__50372__auto____$1,n,coll,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50660__$1;
if((function (){var G__50780 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50780 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50780.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50780.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50780);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50780);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,p1__50648_SHARP_,trace_data__50372__auto____$1,n,coll,trace_data__50372__auto__))
;
if((function (){var G__50781 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50781 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50781.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50781.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50781);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50781);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50782){if((e50782 instanceof Object)){
var e__50375__auto__ = e50782;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50782;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (p1__50648_SHARP_,p2__50649_SHARP_,trace_data__50372__auto____$1,n,coll,trace_data__50372__auto__){
return (function (){

if(cljs.core.not_EQ_.call(null,p1__50648_SHARP_,n)){
return p2__50649_SHARP_;
} else {
return null;
}
});})(p1__50648_SHARP_,p2__50649_SHARP_,trace_data__50372__auto____$1,n,coll,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto____$1,n,coll,trace_data__50372__auto__))
.call(null,a_50659,a_50660);
if((function (){var G__50783 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50783 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50783.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50783.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50783);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50783);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,n,coll,trace_data__50372__auto__))
;
if((function (){var G__50784 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50784 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50784.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50784.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50784);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50784);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50785){if((e50785 instanceof Object)){
var e__50375__auto__ = e50785;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50785;

}
}} else {
return f__50373__auto__.call(null);
}
});})(n,coll,trace_data__50372__auto__))
,coll);
});})(n,coll,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_50661,a_50662);
if((function (){var G__50786 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50786 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50786.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50786.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50786);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50786);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__50787 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50787 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50787.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50787.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50787);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50787);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50788){if((e50788 instanceof Object)){
var e__50375__auto__ = e50788;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50788;

}
}} else {
return f__50373__auto__.call(null);
}
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","initialize-db","cardy.events/initialize-db",1650796766),(function cardy$events$fn_50663(a_50664,a_50665){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fn_50663","fn_50663",-1358496305,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null))], null);
if((function (){var G__50789 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50789 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50789.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50789.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50789);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50789);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_50664__$1,a_50665__$1){
var _ = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50664__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
if((function (){var G__50790 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50790 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50790.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50790.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50790);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50790);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50664__$1;
if((function (){var G__50791 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50791 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50791.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50791.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50791);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50791);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__50792 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50792 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50792.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50792.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50792);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50792);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50793){if((e50793 instanceof Object)){
var e__50375__auto__ = e50793;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50793;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var ___$1 = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50665__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
if((function (){var G__50794 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50794 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50794.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50794.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50794);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50794);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,_,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50665__$1;
if((function (){var G__50795 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50795 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50795.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50795.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50795);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50795);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,_,trace_data__50372__auto__))
;
if((function (){var G__50796 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50796 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50796.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50796.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50796);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50796);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50797){if((e50797 instanceof Object)){
var e__50375__auto__ = e50797;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50797;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (_,___$1,trace_data__50372__auto__){
return (function (){

return cardy.db.default_db;
});})(_,___$1,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_50664,a_50665);
if((function (){var G__50798 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50798 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50798.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50798.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50798);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50798);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__50799 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50799 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50799.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50799.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50799);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50799);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50800){if((e50800 instanceof Object)){
var e__50375__auto__ = e50800;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50800;

}
}} else {
return f__50373__auto__.call(null);
}
}));

re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("cardy.events","pull-decks","cardy.events/pull-decks",-274600551),(function cardy$events$pull_deck_handler(a_50666,a_50667){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"pull-deck-handler","pull-deck-handler",367093808,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cofx","cofx",-641232862,null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"pull-deck-handler","pull-deck-handler",367093808,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cofx","cofx",-641232862,null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pull-decks-fx","pull-decks-fx",-69608820),null], null))], null);
if((function (){var G__50801 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50801 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50801.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50801.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50801);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50801);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_50666__$1,a_50667__$1){
var cofx = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50666__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"cofx","cofx",-641232862,null)], null);
if((function (){var G__50802 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50802 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50802.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50802.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50802);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50802);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50666__$1;
if((function (){var G__50803 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50803 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50803.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50803.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50803);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50803);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__50804 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50804 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50804.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50804.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50804);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50804);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50805){if((e50805 instanceof Object)){
var e__50375__auto__ = e50805;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50805;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var event = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50667__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"event","event",1941966969,null)], null);
if((function (){var G__50806 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50806 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50806.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50806.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50806);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50806);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,cofx,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50667__$1;
if((function (){var G__50807 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50807 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50807.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50807.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50807);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50807);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,cofx,trace_data__50372__auto__))
;
if((function (){var G__50808 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50808 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50808.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50808.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50808);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50808);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50809){if((e50809 instanceof Object)){
var e__50375__auto__ = e50809;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50809;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (cofx,event,trace_data__50372__auto__){
return (function (){

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pull-decks-fx","pull-decks-fx",-69608820),null], null);
});})(cofx,event,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_50666,a_50667);
if((function (){var G__50810 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50810 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50810.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50810.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50810);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50810);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__50811 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50811 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50811.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50811.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50811);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50811);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50812){if((e50812 instanceof Object)){
var e__50375__auto__ = e50812;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50812;

}
}} else {
return f__50373__auto__.call(null);
}
}));

re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"pull-decks-fx","pull-decks-fx",-69608820),(function cardy$events$pull_decks_ajax(){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"pull-decks-ajax","pull-decks-ajax",-613793070,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"pull-decks-ajax","pull-decks-ajax",-613793070,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"GET","GET",-917844743,null),"/pull-decks",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50650#","p1__50650#",145318940,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","set-decks","cardy.events/set-decks",1797217231),new cljs.core.Symbol(null,"p1__50650#","p1__50650#",145318940,null)], null)))], null)))], null);
if((function (){var G__50813 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50813 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50813.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50813.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50813);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50813);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto__){
return (function (){

return ajax.core.GET.call(null,"/pull-decks",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (trace_data__50372__auto__){
return (function (p1__50650_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","set-decks","cardy.events/set-decks",1797217231),p1__50650_SHARP_], null));
});})(trace_data__50372__auto__))
], null));
});})(trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null);
if((function (){var G__50814 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50814 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50814.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50814.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50814);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50814);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__50815 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50815 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50815.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50815.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50815);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50815);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50816){if((e50816 instanceof Object)){
var e__50375__auto__ = e50816;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50816;

}
}} else {
return f__50373__auto__.call(null);
}
}));

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","set-decks","cardy.events/set-decks",1797217231),(function cardy$events$set_decks_handler(a_50668,a_50669){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"set-decks-handler","set-decks-handler",-1838805387,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"decks","decks",-99773969,null)], null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"set-decks-handler","set-decks-handler",-1838805387,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"decks","decks",-99773969,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"decks","decks",-99773969,null)))], null);
if((function (){var G__50817 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50817 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50817.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50817.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50817);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50817);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_50668__$1,a_50669__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50668__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__50821 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50821 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50821.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50821.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50821);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50821);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50668__$1;
if((function (){var G__50822 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50822 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50822.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50822.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50822);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50822);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__50823 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50823 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50823.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50823.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50823);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50823);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50824){if((e50824 instanceof Object)){
var e__50375__auto__ = e50824;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50824;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var vec__50818 = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50669__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"decks","decks",-99773969,null)], null)], null);
if((function (){var G__50825 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50825 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50825.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50825.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50825);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50825);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50669__$1;
if((function (){var G__50826 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50826 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50826.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50826.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50826);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50826);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__50827 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50827 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50827.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50827.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50827);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50827);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50828){if((e50828 instanceof Object)){
var e__50375__auto__ = e50828;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50828;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var event_id_to_ignore = cljs.core.nth.call(null,vec__50818,(0),null);
var decks = cljs.core.nth.call(null,vec__50818,(1),null);
return ((function (db,vec__50818,event_id_to_ignore,decks,trace_data__50372__auto__){
return (function (){

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"decks","decks",-1740305496),decks);
});})(db,vec__50818,event_id_to_ignore,decks,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_50668,a_50669);
if((function (){var G__50829 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50829 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50829.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50829.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50829);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50829);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__50830 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50830 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50830.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50830.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50830);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50830);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50831){if((e50831 instanceof Object)){
var e__50375__auto__ = e50831;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50831;

}
}} else {
return f__50373__auto__.call(null);
}
}));

re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("cardy.events","push-decks","cardy.events/push-decks",-1525716789),(function cardy$events$push_decks_handler(a_50670,a_50671){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"push-decks-handler","push-decks-handler",-1539520733,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cofx","cofx",-641232862,null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"push-decks-handler","push-decks-handler",-1539520733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cofx","cofx",-641232862,null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"push-decks-fx","push-decks-fx",473832076),cljs.core.list(new cljs.core.Keyword(null,"decks","decks",-1740305496),cljs.core.list(new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"cofx","cofx",-641232862,null)))], null))], null);
if((function (){var G__50832 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50832 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50832.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50832.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50832);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50832);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_50670__$1,a_50671__$1){
var cofx = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50670__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"cofx","cofx",-641232862,null)], null);
if((function (){var G__50833 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50833 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50833.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50833.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50833);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50833);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50670__$1;
if((function (){var G__50834 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50834 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50834.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50834.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50834);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50834);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__50835 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50835 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50835.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50835.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50835);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50835);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50836){if((e50836 instanceof Object)){
var e__50375__auto__ = e50836;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50836;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var event = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50671__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"event","event",1941966969,null)], null);
if((function (){var G__50837 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50837 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50837.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50837.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50837);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50837);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,cofx,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50671__$1;
if((function (){var G__50838 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50838 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50838.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50838.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50838);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50838);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,cofx,trace_data__50372__auto__))
;
if((function (){var G__50839 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50839 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50839.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50839.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50839);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50839);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50840){if((e50840 instanceof Object)){
var e__50375__auto__ = e50840;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50840;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (cofx,event,trace_data__50372__auto__){
return (function (){

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"push-decks-fx","push-decks-fx",473832076),new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx))], null);
});})(cofx,event,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_50670,a_50671);
if((function (){var G__50841 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50841 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50841.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50841.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50841);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50841);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__50842 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50842 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50842.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50842.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50842);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50842);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50843){if((e50843 instanceof Object)){
var e__50375__auto__ = e50843;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50843;

}
}} else {
return f__50373__auto__.call(null);
}
}));

re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"push-decks-fx","push-decks-fx",473832076),(function cardy$events$push_decks_ajax(a_50672){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"push-decks-ajax","push-decks-ajax",-321223881,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"decks","decks",-99773969,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"push-decks-ajax","push-decks-ajax",-321223881,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"decks","decks",-99773969,null)], null),cljs.core.list(new cljs.core.Symbol(null,"POST","POST",1750988384,null),"/push-decks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"decks","decks",-99773969,null)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50651#","p1__50651#",1741134063,null)], null),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"push-decks-ajax response was: ",new cljs.core.Symbol(null,"p1__50651#","p1__50651#",1741134063,null)))], null)))], null);
if((function (){var G__50844 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50844 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50844.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50844.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50844);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50844);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_50672__$1){
var decks = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50672__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"decks","decks",-99773969,null)], null);
if((function (){var G__50845 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50845 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50845.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50845.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50845);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50845);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50672__$1;
if((function (){var G__50846 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50846 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50846.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50846.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50846);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50846);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__50847 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50847 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50847.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50847.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50847);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50847);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50848){if((e50848 instanceof Object)){
var e__50375__auto__ = e50848;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50848;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (decks,trace_data__50372__auto__){
return (function (){

return ajax.core.POST.call(null,"/push-decks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"decks","decks",-1740305496),decks], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (decks,trace_data__50372__auto__){
return (function (p1__50651_SHARP_){
return console.log("push-decks-ajax response was: ",p1__50651_SHARP_);
});})(decks,trace_data__50372__auto__))
], null));
});})(decks,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_50672);
if((function (){var G__50849 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50849 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50849.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50849.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50849);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50849);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__50850 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50850 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50850.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50850.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50850);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50850);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50851){if((e50851 instanceof Object)){
var e__50375__auto__ = e50851;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50851;

}
}} else {
return f__50373__auto__.call(null);
}
}));

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","flip","cardy.events/flip",484024968),(function cardy$events$flip(a_50673){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"flip","flip",-620564467,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"flip","flip",-620564467,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),cljs.core.list(new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),new cljs.core.Keyword(null,"front","front",-1523508988)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Keyword(null,"back","back",-417520012)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Keyword(null,"front","front",-1523508988)))))], null);
if((function (){var G__50852 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50852 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50852.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50852.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50852);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50852);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_50673__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50673__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__50853 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50853 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50853.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50853.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50853);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50853);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50673__$1;
if((function (){var G__50854 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50854 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50854.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50854.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50854);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50854);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__50855 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50855 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50855.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50855.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50855);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50855);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50856){if((e50856 instanceof Object)){
var e__50375__auto__ = e50856;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50856;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db,trace_data__50372__auto__){
return (function (){

var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),cljs.core.list(new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),new cljs.core.Keyword(null,"front","front",-1523508988)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Keyword(null,"back","back",-417520012)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Keyword(null,"front","front",-1523508988))))], null);
if((function (){var G__50857 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50857 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50857.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50857.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50857);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50857);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = (function (){var current_face = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null)], null);
if((function (){var G__50858 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50858 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50858.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50858.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50858);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50858);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = new cljs.core.Keyword(null,"current-face","current-face",1615966840).cljs$core$IFn$_invoke$arity$1(db);
if((function (){var G__50859 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50859 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50859.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50859.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50859);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50859);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__50860 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50860 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50860.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50860.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50860);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50860);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50861){if((e50861 instanceof Object)){
var e__50375__auto__ = e50861;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50861;

}
}} else {
return f__50373__auto__.call(null);
}
})();
if(cljs.core._EQ_.call(null,current_face,new cljs.core.Keyword(null,"front","front",-1523508988))){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Keyword(null,"back","back",-417520012));
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Keyword(null,"front","front",-1523508988));
}
})();
if((function (){var G__50862 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50862 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50862.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50862.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50862);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50862);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__50863 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50863 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50863.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50863.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50863);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50863);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50864){if((e50864 instanceof Object)){
var e__50375__auto__ = e50864;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50864;

}
}} else {
return f__50373__auto__.call(null);
}
});})(db,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_50673);
if((function (){var G__50865 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50865 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50865.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50865.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50865);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50865);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__50866 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50866 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50866.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50866.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50866);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50866);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50867){if((e50867 instanceof Object)){
var e__50375__auto__ = e50867;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50867;

}
}} else {
return f__50373__auto__.call(null);
}
}));

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","next","cardy.events/next",-1017307955),(function cardy$events$next(a_50674){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"next","next",1522830042,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"next","next",1522830042,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null),cljs.core.list(new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"next-index","next-index",928687633,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null)),new cljs.core.Symbol(null,"cards","cards",1809705565,null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"next-index","next-index",928687633,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"current","current",-1088038603),(0)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Symbol(null,"next-index","next-index",928687633,null)))))], null);
if((function (){var G__50868 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50868 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50868.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50868.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50868);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50868);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_50674__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50674__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__50869 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50869 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50869.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50869.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50869);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50869);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50674__$1;
if((function (){var G__50870 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50870 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50870.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50870.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50870);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50870);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__50871 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50871 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50871.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50871.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50871);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50871);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50872){if((e50872 instanceof Object)){
var e__50375__auto__ = e50872;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50872;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db,trace_data__50372__auto__){
return (function (){

var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null),cljs.core.list(new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"next-index","next-index",928687633,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null)),new cljs.core.Symbol(null,"cards","cards",1809705565,null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"next-index","next-index",928687633,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"current","current",-1088038603),(0)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Symbol(null,"next-index","next-index",928687633,null))))], null);
if((function (){var G__50873 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50873 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50873.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50873.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50873);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50873);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = (function (){var current_index = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null)], null);
if((function (){var G__50874 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50874 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50874.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50874.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50874);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50874);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(db);
if((function (){var G__50875 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50875 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50875.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50875.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50875);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50875);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__50876 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50876 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50876.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50876.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50876);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50876);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50877){if((e50877 instanceof Object)){
var e__50375__auto__ = e50877;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50877;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var next_index = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"next-index","next-index",928687633,null)], null);
if((function (){var G__50878 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50878 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50878.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50878.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50878);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50878);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,current_index,trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = (current_index + (1));
if((function (){var G__50879 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50879 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50879.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50879.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50879);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50879);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,current_index,trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__50880 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50880 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50880.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50880.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50880);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50880);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50881){if((e50881 instanceof Object)){
var e__50375__auto__ = e50881;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50881;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var cards = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"cards","cards",1809705565,null)], null);
if((function (){var G__50882 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50882 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50882.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50882.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50882);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50882);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,current_index,next_index,trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(db);
if((function (){var G__50883 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50883 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50883.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50883.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50883);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50883);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,current_index,next_index,trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__50884 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50884 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50884.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50884.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50884);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50884);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50885){if((e50885 instanceof Object)){
var e__50375__auto__ = e50885;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50885;

}
}} else {
return f__50373__auto__.call(null);
}
})();
if(cljs.core._EQ_.call(null,next_index,cljs.core.count.call(null,cards))){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current","current",-1088038603),(0));
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current","current",-1088038603),next_index);
}
})();
if((function (){var G__50886 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50886 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50886.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50886.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50886);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50886);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__50887 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50887 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50887.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50887.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50887);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50887);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50888){if((e50888 instanceof Object)){
var e__50375__auto__ = e50888;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50888;

}
}} else {
return f__50373__auto__.call(null);
}
});})(db,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_50674);
if((function (){var G__50889 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50889 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50889.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50889.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50889);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50889);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__50890 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50890 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50890.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50890.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50890);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50890);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50891){if((e50891 instanceof Object)){
var e__50375__auto__ = e50891;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50891;

}
}} else {
return f__50373__auto__.call(null);
}
}));

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","prev","cardy.events/prev",107868180),(function cardy$events$prev(a_50675){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null),cljs.core.list(new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null)))))], null);
if((function (){var G__50892 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50892 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50892.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50892.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50892);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50892);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_50675__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50675__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__50893 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50893 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50893.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50893.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50893);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50893);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50675__$1;
if((function (){var G__50894 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50894 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50894.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50894.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50894);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50894);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__50895 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50895 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50895.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50895.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50895);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50895);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50896){if((e50896 instanceof Object)){
var e__50375__auto__ = e50896;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50896;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db,trace_data__50372__auto__){
return (function (){

var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null),cljs.core.list(new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null))))], null);
if((function (){var G__50897 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50897 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50897.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50897.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50897);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50897);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = (function (){var current_index = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null)], null);
if((function (){var G__50898 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50898 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50898.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50898.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50898);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50898);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(db);
if((function (){var G__50899 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50899 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50899.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50899.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50899);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50899);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__50900 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50900 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50900.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50900.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50900);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50900);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50901){if((e50901 instanceof Object)){
var e__50375__auto__ = e50901;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50901;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current","current",-1088038603),(current_index - (1)));
})();
if((function (){var G__50902 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50902 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50902.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50902.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50902);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50902);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__50903 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50903 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50903.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50903.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50903);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50903);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50904){if((e50904 instanceof Object)){
var e__50375__auto__ = e50904;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50904;

}
}} else {
return f__50373__auto__.call(null);
}
});})(db,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_50675);
if((function (){var G__50905 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50905 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50905.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50905.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50905);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50905);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__50906 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50906 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50906.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50906.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50906);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50906);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50907){if((e50907 instanceof Object)){
var e__50375__auto__ = e50907;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50907;

}
}} else {
return f__50373__auto__.call(null);
}
}));

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","add-card","cardy.events/add-card",-479246421),(function cardy$events$add_card(a_50676,a_50677){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"add-card","add-card",781628592,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"input","input",-2097503808,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"add-card","add-card",781628592,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"input","input",-2097503808,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"new-card","new-card",464705065,null),cljs.core.list(new cljs.core.Symbol(null,"input-to-card","input-to-card",-1851962871,null),new cljs.core.Symbol(null,"input","input",-2097503808,null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null),new cljs.core.Symbol(null,"new-card","new-card",464705065,null)))))], null);
if((function (){var G__50908 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50908 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50908.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50908.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50908);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50908);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_50676__$1,a_50677__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50676__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__50909 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50909 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50909.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50909.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50909);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50909);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50676__$1;
if((function (){var G__50910 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50910 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50910.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50910.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50910);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50910);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__50911 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50911 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50911.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50911.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50911);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50911);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50912){if((e50912 instanceof Object)){
var e__50375__auto__ = e50912;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50912;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var input = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50677__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"input","input",-2097503808,null)], null);
if((function (){var G__50913 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50913 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50913.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50913.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50913);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50913);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50677__$1;
if((function (){var G__50914 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50914 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50914.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50914.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50914);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50914);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__50915 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50915 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50915.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50915.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50915);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50915);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50916){if((e50916 instanceof Object)){
var e__50375__auto__ = e50916;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50916;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db,input,trace_data__50372__auto__){
return (function (){

var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"new-card","new-card",464705065,null),cljs.core.list(new cljs.core.Symbol(null,"input-to-card","input-to-card",-1851962871,null),new cljs.core.Symbol(null,"input","input",-2097503808,null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null),new cljs.core.Symbol(null,"new-card","new-card",464705065,null))))], null);
if((function (){var G__50917 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50917 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50917.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50917.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50917);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50917);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,db,input,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = (function (){var current_cards = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null)], null);
if((function (){var G__50918 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50918 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50918.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50918.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50918);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50918);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,trace_data__50372__auto____$1,db,input,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(db);
if((function (){var G__50919 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50919 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50919.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50919.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50919);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50919);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,trace_data__50372__auto____$1,db,input,trace_data__50372__auto__))
;
if((function (){var G__50920 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50920 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50920.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50920.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50920);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50920);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50921){if((e50921 instanceof Object)){
var e__50375__auto__ = e50921;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50921;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var new_card = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol(null,"input-to-card","input-to-card",-1851962871,null),new cljs.core.Symbol(null,"input","input",-2097503808,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-card","new-card",464705065,null)], null);
if((function (){var G__50922 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50922 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50922.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50922.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50922);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50922);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,current_cards,trace_data__50372__auto____$1,db,input,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = cardy.events.input_to_card.call(null,input);
if((function (){var G__50923 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50923 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50923.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50923.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50923);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50923);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,current_cards,trace_data__50372__auto____$1,db,input,trace_data__50372__auto__))
;
if((function (){var G__50924 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50924 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50924.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50924.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50924);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50924);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50925){if((e50925 instanceof Object)){
var e__50375__auto__ = e50925;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50925;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.conj.call(null,current_cards,new_card));
})();
if((function (){var G__50926 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50926 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50926.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50926.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50926);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50926);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,db,input,trace_data__50372__auto__))
;
if((function (){var G__50927 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50927 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50927.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50927.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50927);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50927);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50928){if((e50928 instanceof Object)){
var e__50375__auto__ = e50928;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50928;

}
}} else {
return f__50373__auto__.call(null);
}
});})(db,input,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_50676,a_50677);
if((function (){var G__50929 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50929 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50929.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50929.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50929);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50929);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__50930 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50930 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50930.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50930.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50930);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50930);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50931){if((e50931 instanceof Object)){
var e__50375__auto__ = e50931;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50931;

}
}} else {
return f__50373__auto__.call(null);
}
}));

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","remove-card","cardy.events/remove-card",758557629),(function cardy$events$remove_card(a_50678){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"remove-card","remove-card",895478082,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"remove-card","remove-card",895478082,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null),cljs.core.list(new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.list(new cljs.core.Symbol(null,"drop-nth","drop-nth",-1477008594,null),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null),new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null)))))], null);
if((function (){var G__50932 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50932 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50932.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50932.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50932);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50932);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_50678__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50678__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__50933 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50933 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50933.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50933.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50933);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50933);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50678__$1;
if((function (){var G__50934 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50934 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50934.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50934.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50934);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50934);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__50935 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50935 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50935.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50935.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50935);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50935);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50936){if((e50936 instanceof Object)){
var e__50375__auto__ = e50936;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50936;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db,trace_data__50372__auto__){
return (function (){

var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null),cljs.core.list(new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.list(new cljs.core.Symbol(null,"drop-nth","drop-nth",-1477008594,null),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null),new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null))))], null);
if((function (){var G__50937 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50937 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50937.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50937.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50937);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50937);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = (function (){var current_index = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null)], null);
if((function (){var G__50938 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50938 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50938.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50938.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50938);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50938);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(db);
if((function (){var G__50939 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50939 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50939.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50939.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50939);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50939);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__50940 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50940 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50940.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50940.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50940);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50940);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50941){if((e50941 instanceof Object)){
var e__50375__auto__ = e50941;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50941;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var current_cards = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null)], null);
if((function (){var G__50942 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50942 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50942.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50942.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50942);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50942);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,current_index,trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(db);
if((function (){var G__50943 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50943 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50943.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50943.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50943);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50943);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,current_index,trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__50944 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50944 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50944.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50944.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50944);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50944);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50945){if((e50945 instanceof Object)){
var e__50375__auto__ = e50945;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50945;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"cards","cards",169174038),cardy.events.drop_nth.call(null,current_index,current_cards));
})();
if((function (){var G__50946 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50946 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50946.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50946.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50946);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50946);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__50947 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50947 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50947.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50947.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50947);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50947);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50948){if((e50948 instanceof Object)){
var e__50375__auto__ = e50948;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50948;

}
}} else {
return f__50373__auto__.call(null);
}
});})(db,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_50678);
if((function (){var G__50949 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50949 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50949.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50949.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50949);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50949);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__50950 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50950 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50950.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50950.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50950);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50950);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50951){if((e50951 instanceof Object)){
var e__50375__auto__ = e50951;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50951;

}
}} else {
return f__50373__auto__.call(null);
}
}));

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","exclude-card","cardy.events/exclude-card",-1424283307),(function cardy$events$exclude_card(a_50679){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"exclude-card","exclude-card",-1589491874,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"exclude-card","exclude-card",-1589491874,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null),cljs.core.list(new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"current-excluded","current-excluded",-1075034939,null),cljs.core.list(new cljs.core.Keyword(null,"excluded","excluded",-715952088),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"current-card","current-card",-2056991290,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"excluded","excluded",-715952088),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"current-excluded","current-excluded",-1075034939,null),new cljs.core.Symbol(null,"current-card","current-card",-2056991290,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.list(new cljs.core.Symbol(null,"drop-nth","drop-nth",-1477008594,null),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null),new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null))))))], null);
if((function (){var G__50952 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50952 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50952.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50952.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50952);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50952);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_50679__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50679__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__50953 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50953 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50953.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50953.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50953);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50953);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50679__$1;
if((function (){var G__50954 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50954 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50954.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50954.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50954);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50954);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__50955 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50955 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50955.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50955.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50955);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50955);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50956){if((e50956 instanceof Object)){
var e__50375__auto__ = e50956;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50956;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db,trace_data__50372__auto__){
return (function (){

var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null),cljs.core.list(new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"current-excluded","current-excluded",-1075034939,null),cljs.core.list(new cljs.core.Keyword(null,"excluded","excluded",-715952088),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"current-card","current-card",-2056991290,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"excluded","excluded",-715952088),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"current-excluded","current-excluded",-1075034939,null),new cljs.core.Symbol(null,"current-card","current-card",-2056991290,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.list(new cljs.core.Symbol(null,"drop-nth","drop-nth",-1477008594,null),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null),new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null)))))], null);
if((function (){var G__50957 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50957 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50957.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50957.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50957);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50957);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = (function (){var current_index = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null)], null);
if((function (){var G__50958 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50958 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50958.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50958.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50958);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50958);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(db);
if((function (){var G__50959 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50959 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50959.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50959.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50959);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50959);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__50960 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50960 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50960.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50960.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50960);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50960);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50961){if((e50961 instanceof Object)){
var e__50375__auto__ = e50961;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50961;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var current_cards = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null)], null);
if((function (){var G__50962 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50962 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50962.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50962.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50962);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50962);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,current_index,trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(db);
if((function (){var G__50963 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50963 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50963.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50963.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50963);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50963);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,current_index,trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__50964 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50964 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50964.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50964.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50964);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50964);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50965){if((e50965 instanceof Object)){
var e__50375__auto__ = e50965;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50965;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var current_excluded = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Keyword(null,"excluded","excluded",-715952088),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-excluded","current-excluded",-1075034939,null)], null);
if((function (){var G__50966 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50966 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50966.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50966.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50966);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50966);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,current_index,current_cards,trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = new cljs.core.Keyword(null,"excluded","excluded",-715952088).cljs$core$IFn$_invoke$arity$1(db);
if((function (){var G__50967 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50967 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50967.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50967.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50967);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50967);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,current_index,current_cards,trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__50968 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50968 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50968.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50968.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50968);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50968);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50969){if((e50969 instanceof Object)){
var e__50375__auto__ = e50969;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50969;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var current_card = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-card","current-card",-2056991290,null)], null);
if((function (){var G__50970 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50970 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50970.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50970.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50970);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50970);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,current_index,current_cards,current_excluded,trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = cljs.core.nth.call(null,current_cards,current_index);
if((function (){var G__50971 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50971 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50971.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50971.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50971);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50971);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,current_index,current_cards,current_excluded,trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__50972 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50972 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50972.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50972.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50972);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50972);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50973){if((e50973 instanceof Object)){
var e__50375__auto__ = e50973;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50973;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"excluded","excluded",-715952088),cljs.core.conj.call(null,current_excluded,current_card)),new cljs.core.Keyword(null,"cards","cards",169174038),cardy.events.drop_nth.call(null,current_index,current_cards));
})();
if((function (){var G__50974 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50974 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50974.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50974.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50974);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50974);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__50975 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50975 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50975.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50975.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50975);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50975);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50976){if((e50976 instanceof Object)){
var e__50375__auto__ = e50976;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50976;

}
}} else {
return f__50373__auto__.call(null);
}
});})(db,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_50679);
if((function (){var G__50977 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50977 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50977.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50977.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50977);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50977);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__50978 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50978 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50978.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50978.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50978);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50978);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50979){if((e50979 instanceof Object)){
var e__50375__auto__ = e50979;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50979;

}
}} else {
return f__50373__auto__.call(null);
}
}));

cardy.events.add_back_excluded = (function cardy$events$add_back_excluded(a_50680){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"add-back-excluded","add-back-excluded",-497646162,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"add-back-excluded","add-back-excluded",-497646162,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-excluded","current-excluded",-1075034939,null),cljs.core.list(new cljs.core.Keyword(null,"excluded","excluded",-715952088),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.list(new cljs.core.Symbol(null,"flatten","flatten",-1441633353,null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null),new cljs.core.Symbol(null,"current-excluded","current-excluded",-1075034939,null)))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"excluded","excluded",-715952088),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.List.EMPTY)))))], null);
if((function (){var G__50980 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50980 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50980.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50980.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50980);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50980);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_50680__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50680__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__50981 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50981 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50981.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50981.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50981);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50981);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50680__$1;
if((function (){var G__50982 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50982 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50982.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50982.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50982);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50982);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__50983 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50983 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50983.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50983.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50983);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50983);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50984){if((e50984 instanceof Object)){
var e__50375__auto__ = e50984;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50984;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db,trace_data__50372__auto__){
return (function (){

var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-excluded","current-excluded",-1075034939,null),cljs.core.list(new cljs.core.Keyword(null,"excluded","excluded",-715952088),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.list(new cljs.core.Symbol(null,"flatten","flatten",-1441633353,null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null),new cljs.core.Symbol(null,"current-excluded","current-excluded",-1075034939,null)))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"excluded","excluded",-715952088),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.List.EMPTY))))], null);
if((function (){var G__50985 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50985 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50985.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50985.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50985);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50985);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = (function (){var current_excluded = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Keyword(null,"excluded","excluded",-715952088),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-excluded","current-excluded",-1075034939,null)], null);
if((function (){var G__50986 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50986 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50986.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50986.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50986);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50986);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = new cljs.core.Keyword(null,"excluded","excluded",-715952088).cljs$core$IFn$_invoke$arity$1(db);
if((function (){var G__50987 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50987 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50987.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50987.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50987);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50987);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__50988 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50988 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50988.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50988.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50988);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50988);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50989){if((e50989 instanceof Object)){
var e__50375__auto__ = e50989;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50989;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var current_cards = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null)], null);
if((function (){var G__50990 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50990 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50990.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__50990.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50990);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__50990);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,current_excluded,trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(db);
if((function (){var G__50991 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50991 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50991.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50991.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50991);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50991);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,current_excluded,trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__50992 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50992 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50992.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50992.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50992);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50992);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50993){if((e50993 instanceof Object)){
var e__50375__auto__ = e50993;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50993;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.flatten.call(null,cljs.core.conj.call(null,current_cards,current_excluded))),new cljs.core.Keyword(null,"excluded","excluded",-715952088),cljs.core.list(null));
})();
if((function (){var G__50994 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50994 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50994.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50994.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50994);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50994);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__50995 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50995 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50995.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50995.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50995);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50995);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50996){if((e50996 instanceof Object)){
var e__50375__auto__ = e50996;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50996;

}
}} else {
return f__50373__auto__.call(null);
}
});})(db,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_50680);
if((function (){var G__50997 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50997 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50997.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__50997.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50997);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__50997);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__50998 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__50998 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__50998.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__50998.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50998);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__50998);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e50999){if((e50999 instanceof Object)){
var e__50375__auto__ = e50999;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e50999;

}
}} else {
return f__50373__auto__.call(null);
}
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","add-back-excluded","cardy.events/add-back-excluded",443491881),cardy.events.add_back_excluded);

cardy.events.add_deck = (function cardy$events$add_deck(a_50681,a_50682){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"add-deck","add-deck",1670913591,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"add-deck","add-deck",1670913591,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null),"Assumes deck-name is :keyword",cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.List.EMPTY)))], null);
if((function (){var G__51000 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51000 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51000.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51000.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51000);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51000);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_50681__$1,a_50682__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50681__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__51001 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51001 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51001.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51001.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51001);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51001);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50681__$1;
if((function (){var G__51002 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51002 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51002.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51002.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51002);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51002);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__51003 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51003 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51003.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51003.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51003);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51003);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51004){if((e51004 instanceof Object)){
var e__50375__auto__ = e51004;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51004;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var deck_name = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50682__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null);
if((function (){var G__51005 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51005 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51005.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51005.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51005);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51005);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50682__$1;
if((function (){var G__51006 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51006 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51006.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51006.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51006);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51006);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__51007 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51007 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51007.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51007.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51007);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51007);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51008){if((e51008 instanceof Object)){
var e__50375__auto__ = e51008;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51008;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db,deck_name,trace_data__50372__auto__){
return (function (){


return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),deck_name], null),cljs.core.list(null));
});})(db,deck_name,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_50681,a_50682);
if((function (){var G__51009 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51009 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51009.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51009.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51009);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51009);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__51010 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51010 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51010.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51010.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51010);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51010);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51011){if((e51011 instanceof Object)){
var e__50375__auto__ = e51011;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51011;

}
}} else {
return f__50373__auto__.call(null);
}
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","add-deck","cardy.events/add-deck",1748167474),(function cardy$events$add_deck_handler(a_50683,a_50684){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"add-deck-handler","add-deck-handler",-2125715265,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"name-for-new-deck","name-for-new-deck",1099212925,null)], null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"add-deck-handler","add-deck-handler",-2125715265,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"name-for-new-deck","name-for-new-deck",1099212925,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"add-deck","add-deck",1670913591,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"input-to-keyword","input-to-keyword",-410870276,null),new cljs.core.Symbol(null,"name-for-new-deck","name-for-new-deck",1099212925,null))))], null);
if((function (){var G__51012 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51012 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51012.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51012.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51012);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51012);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_50683__$1,a_50684__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50683__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__51016 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51016 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51016.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51016.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51016);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51016);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50683__$1;
if((function (){var G__51017 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51017 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51017.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51017.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51017);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51017);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__51018 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51018 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51018.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51018.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51018);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51018);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51019){if((e51019 instanceof Object)){
var e__50375__auto__ = e51019;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51019;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var vec__51013 = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50684__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"name-for-new-deck","name-for-new-deck",1099212925,null)], null)], null);
if((function (){var G__51020 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51020 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51020.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51020.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51020);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51020);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50684__$1;
if((function (){var G__51021 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51021 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51021.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51021.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51021);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51021);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__51022 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51022 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51022.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51022.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51022);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51022);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51023){if((e51023 instanceof Object)){
var e__50375__auto__ = e51023;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51023;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var event_id_to_ignore = cljs.core.nth.call(null,vec__51013,(0),null);
var name_for_new_deck = cljs.core.nth.call(null,vec__51013,(1),null);
return ((function (db,vec__51013,event_id_to_ignore,name_for_new_deck,trace_data__50372__auto__){
return (function (){

return cardy.events.add_deck.call(null,db,cardy.events.input_to_keyword.call(null,name_for_new_deck));
});})(db,vec__51013,event_id_to_ignore,name_for_new_deck,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_50683,a_50684);
if((function (){var G__51024 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51024 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51024.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51024.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51024);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51024);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__51025 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51025 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51025.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51025.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51025);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51025);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51026){if((e51026 instanceof Object)){
var e__50375__auto__ = e51026;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51026;

}
}} else {
return f__50373__auto__.call(null);
}
}));

cardy.events.put_back_old_deck = (function cardy$events$put_back_old_deck(a_50685){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"put-back-old-deck","put-back-old-deck",-1554014026,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"put-back-old-deck","put-back-old-deck",-1554014026,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-deck","current-deck",183285050,null),cljs.core.list(new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"add-back-excluded","add-back-excluded",-497646162,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"current-deck","current-deck",183285050,null)], null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"app-state","app-state",130568249,null))))))], null);
if((function (){var G__51027 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51027 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51027.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51027.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51027);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51027);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_50685__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50685__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__51028 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51028 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51028.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51028.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51028);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51028);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50685__$1;
if((function (){var G__51029 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51029 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51029.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51029.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51029);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51029);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__51030 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51030 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51030.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51030.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51030);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51030);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51031){if((e51031 instanceof Object)){
var e__50375__auto__ = e51031;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51031;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db,trace_data__50372__auto__){
return (function (){

var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-deck","current-deck",183285050,null),cljs.core.list(new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"add-back-excluded","add-back-excluded",-497646162,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"current-deck","current-deck",183285050,null)], null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)))))], null);
if((function (){var G__51032 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51032 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51032.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51032.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51032);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51032);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = (function (){var current_deck = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-deck","current-deck",183285050,null)], null);
if((function (){var G__51033 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51033 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51033.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51033.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51033);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51033);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477).cljs$core$IFn$_invoke$arity$1(db);
if((function (){var G__51034 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51034 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51034.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51034.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51034);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51034);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__51035 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51035 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51035.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51035.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51035);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51035);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51036){if((e51036 instanceof Object)){
var e__50375__auto__ = e51036;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51036;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var app_state = db;
var app_state__$1 = cardy.events.add_back_excluded.call(null,app_state);
return cljs.core.assoc_in.call(null,app_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),current_deck], null),new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(app_state__$1));
})();
if((function (){var G__51037 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51037 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51037.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51037.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51037);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51037);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__51038 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51038 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51038.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51038.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51038);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51038);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51039){if((e51039 instanceof Object)){
var e__50375__auto__ = e51039;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51039;

}
}} else {
return f__50373__auto__.call(null);
}
});})(db,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_50685);
if((function (){var G__51040 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51040 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51040.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51040.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51040);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51040);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__51041 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51041 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51041.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51041.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51041);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51041);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51042){if((e51042 instanceof Object)){
var e__50375__auto__ = e51042;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51042;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.events.bring_in_new_deck = (function cardy$events$bring_in_new_deck(a_50686,a_50687){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"bring-in-new-deck","bring-in-new-deck",995767043,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"bring-in-new-deck","bring-in-new-deck",995767043,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"desired-deck","desired-deck",1235199831,null),cljs.core.list(new cljs.core.Symbol(null,"input-to-keyword","input-to-keyword",-410870276,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null))], null),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.list(new cljs.core.Symbol(null,"desired-deck","desired-deck",1235199831,null),cljs.core.list(new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477),new cljs.core.Symbol(null,"desired-deck","desired-deck",1235199831,null)))))], null);
if((function (){var G__51043 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51043 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51043.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51043.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51043);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51043);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_50686__$1,a_50687__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50686__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__51044 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51044 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51044.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51044.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51044);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51044);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50686__$1;
if((function (){var G__51045 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51045 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51045.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51045.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51045);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51045);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__51046 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51046 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51046.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51046.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51046);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51046);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51047){if((e51047 instanceof Object)){
var e__50375__auto__ = e51047;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51047;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var user_input = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50687__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null)], null);
if((function (){var G__51048 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51048 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51048.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51048.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51048);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51048);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50687__$1;
if((function (){var G__51049 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51049 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51049.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51049.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51049);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51049);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__51050 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51050 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51050.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51050.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51050);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51050);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51051){if((e51051 instanceof Object)){
var e__50375__auto__ = e51051;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51051;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db,user_input,trace_data__50372__auto__){
return (function (){

var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"desired-deck","desired-deck",1235199831,null),cljs.core.list(new cljs.core.Symbol(null,"input-to-keyword","input-to-keyword",-410870276,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null))], null),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.list(new cljs.core.Symbol(null,"desired-deck","desired-deck",1235199831,null),cljs.core.list(new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477),new cljs.core.Symbol(null,"desired-deck","desired-deck",1235199831,null))))], null);
if((function (){var G__51052 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51052 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51052.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51052.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51052);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51052);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,db,user_input,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = (function (){var desired_deck = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol(null,"input-to-keyword","input-to-keyword",-410870276,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"desired-deck","desired-deck",1235199831,null)], null);
if((function (){var G__51053 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51053 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51053.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51053.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51053);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51053);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,trace_data__50372__auto____$1,db,user_input,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = cardy.events.input_to_keyword.call(null,user_input);
if((function (){var G__51054 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51054 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51054.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51054.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51054);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51054);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,trace_data__50372__auto____$1,db,user_input,trace_data__50372__auto__))
;
if((function (){var G__51055 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51055 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51055.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51055.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51055);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51055);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51056){if((e51056 instanceof Object)){
var e__50375__auto__ = e51056;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51056;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var app_state = db;
var app_state__$1 = cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"cards","cards",169174038),desired_deck.call(null,new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(app_state)));
return cljs.core.assoc.call(null,app_state__$1,new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477),desired_deck);
})();
if((function (){var G__51057 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51057 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51057.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51057.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51057);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51057);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,db,user_input,trace_data__50372__auto__))
;
if((function (){var G__51058 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51058 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51058.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51058.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51058);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51058);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51059){if((e51059 instanceof Object)){
var e__50375__auto__ = e51059;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51059;

}
}} else {
return f__50373__auto__.call(null);
}
});})(db,user_input,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_50686,a_50687);
if((function (){var G__51060 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51060 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51060.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51060.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51060);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51060);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__51061 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51061 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51061.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51061.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51061);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51061);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51062){if((e51062 instanceof Object)){
var e__50375__auto__ = e51062;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51062;

}
}} else {
return f__50373__auto__.call(null);
}
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","change-deck","cardy.events/change-deck",-1660930769),(function cardy$events$change_deck(a_50688,a_50689){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"change-deck","change-deck",346575416,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null)], null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"change-deck","change-deck",346575416,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"bring-in-new-deck","bring-in-new-deck",995767043,null),cljs.core.list(new cljs.core.Symbol(null,"put-back-old-deck","put-back-old-deck",-1554014026,null),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null)))], null);
if((function (){var G__51063 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51063 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51063.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51063.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51063);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51063);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_50688__$1,a_50689__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50688__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__51067 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51067 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51067.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51067.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51067);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51067);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50688__$1;
if((function (){var G__51068 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51068 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51068.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51068.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51068);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51068);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__51069 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51069 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51069.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51069.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51069);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51069);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51070){if((e51070 instanceof Object)){
var e__50375__auto__ = e51070;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51070;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var vec__51064 = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50689__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null)], null)], null);
if((function (){var G__51071 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51071 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51071.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51071.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51071);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51071);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50689__$1;
if((function (){var G__51072 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51072 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51072.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51072.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51072);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51072);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__51073 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51073 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51073.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51073.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51073);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51073);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51074){if((e51074 instanceof Object)){
var e__50375__auto__ = e51074;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51074;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var event_id_to_ignore = cljs.core.nth.call(null,vec__51064,(0),null);
var user_input = cljs.core.nth.call(null,vec__51064,(1),null);
return ((function (db,vec__51064,event_id_to_ignore,user_input,trace_data__50372__auto__){
return (function (){

return cardy.events.bring_in_new_deck.call(null,cardy.events.put_back_old_deck.call(null,db),user_input);
});})(db,vec__51064,event_id_to_ignore,user_input,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_50688,a_50689);
if((function (){var G__51075 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51075 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51075.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51075.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51075);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51075);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__51076 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51076 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51076.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51076.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51076);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51076);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51077){if((e51077 instanceof Object)){
var e__50375__auto__ = e51077;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51077;

}
}} else {
return f__50373__auto__.call(null);
}
}));

cardy.events.removing_current_deck_QMARK_ = (function cardy$events$removing_current_deck_QMARK_(a_50690,a_50691){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"removing-current-deck?","removing-current-deck?",-702286002,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"removing-current-deck?","removing-current-deck?",-702286002,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null)], null),"Expects deck-to-remove to be a :keyword.",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null),cljs.core.list(new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477),new cljs.core.Symbol(null,"db","db",-1661185010,null))))], null);
if((function (){var G__51078 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51078 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51078.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51078.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51078);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51078);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_50690__$1,a_50691__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50690__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__51079 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51079 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51079.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51079.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51079);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51079);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50690__$1;
if((function (){var G__51080 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51080 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51080.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51080.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51080);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51080);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__51081 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51081 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51081.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51081.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51081);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51081);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51082){if((e51082 instanceof Object)){
var e__50375__auto__ = e51082;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51082;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var deck_to_remove = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50691__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null)], null);
if((function (){var G__51083 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51083 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51083.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51083.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51083);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51083);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50691__$1;
if((function (){var G__51084 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51084 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51084.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51084.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51084);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51084);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__51085 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51085 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51085.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51085.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51085);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51085);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51086){if((e51086 instanceof Object)){
var e__50375__auto__ = e51086;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51086;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db,deck_to_remove,trace_data__50372__auto__){
return (function (){


return cljs.core._EQ_.call(null,deck_to_remove,new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477).cljs$core$IFn$_invoke$arity$1(db));
});})(db,deck_to_remove,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_50690,a_50691);
if((function (){var G__51087 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51087 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51087.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51087.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51087);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51087);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__51088 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51088 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51088.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51088.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51088);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51088);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51089){if((e51089 instanceof Object)){
var e__50375__auto__ = e51089;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51089;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.events.placeholder_card = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),"This deck has no cards yet. Add one!",new cljs.core.Keyword(null,"back","back",-417520012),"You can flip me. But you really should add a card!"], null);

cardy.events.placeholder_deck = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder-deck","placeholder-deck",1147906209),cljs.core.list(new cljs.core.Symbol(null,"placeholder-card","placeholder-card",-941510735,null))], null);

cardy.events.no_decks_QMARK_ = (function cardy$events$no_decks_QMARK_(a_50692){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"no-decks?","no-decks?",534834393,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"no-decks?","no-decks?",534834393,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"db","db",-1661185010,null))))], null);
if((function (){var G__51090 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51090 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51090.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51090.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51090);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51090);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_50692__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50692__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__51091 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51091 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51091.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51091.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51091);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51091);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50692__$1;
if((function (){var G__51092 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51092 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51092.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51092.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51092);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51092);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__51093 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51093 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51093.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51093.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51093);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51093);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51094){if((e51094 instanceof Object)){
var e__50375__auto__ = e51094;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51094;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db,trace_data__50372__auto__){
return (function (){

return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(db));
});})(db,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_50692);
if((function (){var G__51095 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51095 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51095.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51095.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51095);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51095);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__51096 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51096 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51096.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51096.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51096);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51096);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51097){if((e51097 instanceof Object)){
var e__50375__auto__ = e51097;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51097;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.events.last_deck_QMARK_ = (function cardy$events$last_deck_QMARK_(a_50693){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"last-deck?","last-deck?",1055659515,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"last-deck?","last-deck?",1055659515,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"db","db",-1661185010,null)))))], null);
if((function (){var G__51098 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51098 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51098.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51098.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51098);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51098);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_50693__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50693__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__51099 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51099 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51099.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51099.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51099);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51099);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50693__$1;
if((function (){var G__51100 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51100 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51100.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51100.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51100);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51100);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__51101 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51101 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51101.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51101.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51101);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51101);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51102){if((e51102 instanceof Object)){
var e__50375__auto__ = e51102;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51102;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db,trace_data__50372__auto__){
return (function (){

return cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(db)));
});})(db,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_50693);
if((function (){var G__51103 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51103 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51103.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51103.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51103);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51103);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__51104 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51104 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51104.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51104.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51104);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51104);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51105){if((e51105 instanceof Object)){
var e__50375__auto__ = e51105;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51105;

}
}} else {
return f__50373__auto__.call(null);
}
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","remove-deck","cardy.events/remove-deck",-1965096554),(function cardy$events$remove_deck(a_50697,a_50698){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"remove-deck","remove-deck",1111906463,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"name-of-deck-to-remove","name-of-deck-to-remove",-507914988,null)], null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"remove-deck","remove-deck",1111906463,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"name-of-deck-to-remove","name-of-deck-to-remove",-507914988,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null),cljs.core.list(new cljs.core.Symbol(null,"input-to-keyword","input-to-keyword",-410870276,null),new cljs.core.Symbol(null,"name-of-deck-to-remove","name-of-deck-to-remove",-507914988,null)),new cljs.core.Symbol(null,"remove-deck","remove-deck",1111906463,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null),cljs.core.list(new cljs.core.Symbol(null,"dissoc-in","dissoc-in",-249353279,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"last-deck?","last-deck?",1055659515,null),new cljs.core.Symbol(null,"db","db",-1661185010,null)),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"add-deck","add-deck",1670913591,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083)),cljs.core.list(new cljs.core.Symbol(null,"bring-in-new-deck","bring-in-new-deck",995767043,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),"placeholder")),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"removing-current-deck?","removing-current-deck?",-702286002,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null)),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"remove-deck","remove-deck",1111906463,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null)),cljs.core.list(new cljs.core.Symbol(null,"bring-in-new-deck","bring-in-new-deck",995767043,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"app-state","app-state",130568249,null))))))),cljs.core.list(new cljs.core.Symbol(null,"remove-deck","remove-deck",1111906463,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null))))))], null);
if((function (){var G__51106 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51106 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51106.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51106.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51106);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51106);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_50697__$1,a_50698__$1){
var db = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50697__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__51110 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51110 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51110.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51110.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51110);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51110);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50697__$1;
if((function (){var G__51111 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51111 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51111.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51111.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51111);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51111);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__51112 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51112 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51112.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51112.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51112);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51112);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51113){if((e51113 instanceof Object)){
var e__50375__auto__ = e51113;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51113;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var vec__51107 = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50698__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"name-of-deck-to-remove","name-of-deck-to-remove",-507914988,null)], null)], null);
if((function (){var G__51114 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51114 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51114.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51114.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51114);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51114);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,db,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50698__$1;
if((function (){var G__51115 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51115 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51115.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51115.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51115);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51115);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,db,trace_data__50372__auto__))
;
if((function (){var G__51116 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51116 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51116.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51116.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51116);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51116);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51117){if((e51117 instanceof Object)){
var e__50375__auto__ = e51117;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51117;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var event_id_to_ignore = cljs.core.nth.call(null,vec__51107,(0),null);
var name_of_deck_to_remove = cljs.core.nth.call(null,vec__51107,(1),null);
return ((function (db,vec__51107,event_id_to_ignore,name_of_deck_to_remove,trace_data__50372__auto__){
return (function (){

var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null),cljs.core.list(new cljs.core.Symbol(null,"input-to-keyword","input-to-keyword",-410870276,null),new cljs.core.Symbol(null,"name-of-deck-to-remove","name-of-deck-to-remove",-507914988,null)),new cljs.core.Symbol(null,"remove-deck","remove-deck",1111906463,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null),cljs.core.list(new cljs.core.Symbol(null,"dissoc-in","dissoc-in",-249353279,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"last-deck?","last-deck?",1055659515,null),new cljs.core.Symbol(null,"db","db",-1661185010,null)),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"add-deck","add-deck",1670913591,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083)),cljs.core.list(new cljs.core.Symbol(null,"bring-in-new-deck","bring-in-new-deck",995767043,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),"placeholder")),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"removing-current-deck?","removing-current-deck?",-702286002,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null)),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"remove-deck","remove-deck",1111906463,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null)),cljs.core.list(new cljs.core.Symbol(null,"bring-in-new-deck","bring-in-new-deck",995767043,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"app-state","app-state",130568249,null))))))),cljs.core.list(new cljs.core.Symbol(null,"remove-deck","remove-deck",1111906463,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null)))))], null);
if((function (){var G__51118 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51118 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51118.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51118.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51118);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51118);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,db,vec__51107,event_id_to_ignore,name_of_deck_to_remove,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = (function (){var deck_to_remove = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol(null,"input-to-keyword","input-to-keyword",-410870276,null),new cljs.core.Symbol(null,"name-of-deck-to-remove","name-of-deck-to-remove",-507914988,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null)], null);
if((function (){var G__51119 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51119 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51119.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51119.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51119);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51119);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,trace_data__50372__auto____$1,db,vec__51107,event_id_to_ignore,name_of_deck_to_remove,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = cardy.events.input_to_keyword.call(null,name_of_deck_to_remove);
if((function (){var G__51120 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51120 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51120.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51120.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51120);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51120);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,trace_data__50372__auto____$1,db,vec__51107,event_id_to_ignore,name_of_deck_to_remove,trace_data__50372__auto__))
;
if((function (){var G__51121 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51121 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51121.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51121.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51121);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51121);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51122){if((e51122 instanceof Object)){
var e__50375__auto__ = e51122;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51122;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var remove_deck__$1 = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null),cljs.core.list(new cljs.core.Symbol(null,"dissoc-in","dissoc-in",-249353279,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null))),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"remove-deck","remove-deck",1111906463,null)], null);
if((function (){var G__51123 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51123 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51123.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51123.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51123);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51123);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,deck_to_remove,trace_data__50372__auto____$1,db,vec__51107,event_id_to_ignore,name_of_deck_to_remove,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto____$2,deck_to_remove,trace_data__50372__auto____$1,db,vec__51107,event_id_to_ignore,name_of_deck_to_remove,trace_data__50372__auto__){
return (function cardy$events$remove_deck_$_fn_50694(a_50695,a_50696){
var trace_data__50372__auto____$3 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fn_50694","fn_50694",1313995042,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null),cljs.core.list(new cljs.core.Symbol(null,"dissoc-in","dissoc-in",-249353279,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null)))], null);
if((function (){var G__51124 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51124 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51124.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51124.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51124);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51124);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$3);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$3,trace_data__50372__auto____$2,deck_to_remove,trace_data__50372__auto____$1,db,vec__51107,event_id_to_ignore,name_of_deck_to_remove,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto____$3,trace_data__50372__auto____$2,deck_to_remove,trace_data__50372__auto____$1,db,vec__51107,event_id_to_ignore,name_of_deck_to_remove,trace_data__50372__auto__){
return (function (a_50695__$1,a_50696__$1){
var db__$1 = (function (){var trace_data__50372__auto____$4 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50695__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__51125 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51125 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51125.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51125.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51125);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51125);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$4);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$4,trace_data__50372__auto____$3,trace_data__50372__auto____$2,deck_to_remove,trace_data__50372__auto____$1,db,vec__51107,event_id_to_ignore,name_of_deck_to_remove,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50695__$1;
if((function (){var G__51126 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51126 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51126.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51126.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51126);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51126);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$4,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$4,trace_data__50372__auto____$3,trace_data__50372__auto____$2,deck_to_remove,trace_data__50372__auto____$1,db,vec__51107,event_id_to_ignore,name_of_deck_to_remove,trace_data__50372__auto__))
;
if((function (){var G__51127 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51127 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51127.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51127.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51127);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51127);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51128){if((e51128 instanceof Object)){
var e__50375__auto__ = e51128;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$4,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51128;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var deck_name = (function (){var trace_data__50372__auto____$4 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_50696__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null);
if((function (){var G__51129 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51129 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51129.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__51129.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51129);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__51129);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__50372__auto____$4);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$4,db__$1,trace_data__50372__auto____$3,trace_data__50372__auto____$2,deck_to_remove,trace_data__50372__auto____$1,db,vec__51107,event_id_to_ignore,name_of_deck_to_remove,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_50696__$1;
if((function (){var G__51130 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51130 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51130.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51130.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51130);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51130);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$4,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$4,db__$1,trace_data__50372__auto____$3,trace_data__50372__auto____$2,deck_to_remove,trace_data__50372__auto____$1,db,vec__51107,event_id_to_ignore,name_of_deck_to_remove,trace_data__50372__auto__))
;
if((function (){var G__51131 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51131 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51131.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51131.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51131);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51131);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51132){if((e51132 instanceof Object)){
var e__50375__auto__ = e51132;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$4,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51132;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (db__$1,deck_name,trace_data__50372__auto____$3,trace_data__50372__auto____$2,deck_to_remove,trace_data__50372__auto____$1,db,vec__51107,event_id_to_ignore,name_of_deck_to_remove,trace_data__50372__auto__){
return (function (){

return cardy.events.dissoc_in.call(null,db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),deck_name], null));
});})(db__$1,deck_name,trace_data__50372__auto____$3,trace_data__50372__auto____$2,deck_to_remove,trace_data__50372__auto____$1,db,vec__51107,event_id_to_ignore,name_of_deck_to_remove,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto____$3,trace_data__50372__auto____$2,deck_to_remove,trace_data__50372__auto____$1,db,vec__51107,event_id_to_ignore,name_of_deck_to_remove,trace_data__50372__auto__))
.call(null,a_50695,a_50696);
if((function (){var G__51133 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51133 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51133.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51133.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51133);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51133);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$3,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$3,trace_data__50372__auto____$2,deck_to_remove,trace_data__50372__auto____$1,db,vec__51107,event_id_to_ignore,name_of_deck_to_remove,trace_data__50372__auto__))
;
if((function (){var G__51134 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51134 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51134.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51134.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51134);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51134);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51135){if((e51135 instanceof Object)){
var e__50375__auto__ = e51135;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$3,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51135;

}
}} else {
return f__50373__auto__.call(null);
}
});})(trace_data__50372__auto____$2,deck_to_remove,trace_data__50372__auto____$1,db,vec__51107,event_id_to_ignore,name_of_deck_to_remove,trace_data__50372__auto__))
;
if((function (){var G__51136 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51136 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51136.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51136.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51136);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51136);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,deck_to_remove,trace_data__50372__auto____$1,db,vec__51107,event_id_to_ignore,name_of_deck_to_remove,trace_data__50372__auto__))
;
if((function (){var G__51137 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51137 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51137.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51137.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51137);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51137);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51138){if((e51138 instanceof Object)){
var e__50375__auto__ = e51138;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51138;

}
}} else {
return f__50373__auto__.call(null);
}
})();
if(cljs.core.truth_(cardy.events.last_deck_QMARK_.call(null,db))){
var app_state = db;
var app_state__$1 = cardy.events.add_deck.call(null,app_state,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
return cardy.events.bring_in_new_deck.call(null,app_state__$1,"placeholder");
} else {
if(cljs.core.truth_(cardy.events.removing_current_deck_QMARK_.call(null,db,deck_to_remove))){
var app_state = db;
var app_state__$1 = remove_deck__$1.call(null,app_state,deck_to_remove);
return cardy.events.bring_in_new_deck.call(null,app_state__$1,cljs.core.name.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(app_state__$1)))));
} else {
return remove_deck__$1.call(null,db,deck_to_remove);
}
}
})();
if((function (){var G__51139 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51139 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51139.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51139.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51139);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51139);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,db,vec__51107,event_id_to_ignore,name_of_deck_to_remove,trace_data__50372__auto__))
;
if((function (){var G__51140 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51140 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51140.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51140.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51140);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51140);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51141){if((e51141 instanceof Object)){
var e__50375__auto__ = e51141;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51141;

}
}} else {
return f__50373__auto__.call(null);
}
});})(db,vec__51107,event_id_to_ignore,name_of_deck_to_remove,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_50697,a_50698);
if((function (){var G__51142 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51142 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51142.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__51142.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51142);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__51142);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__51143 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__51143 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__51143.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__51143.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51143);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__51143);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e51144){if((e51144 instanceof Object)){
var e__50375__auto__ = e51144;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e51144;

}
}} else {
return f__50373__auto__.call(null);
}
}));
} else {
cardy.events.input_to_keyword = (function cardy$events$input_to_keyword(a_string){
console.log("a-string in input-to-keyword is: ",a_string);

return cljs.core.keyword.call(null,clojure.string.trim.call(null,a_string));
});

/**
 * Accepts input (a string), returns a card (a map).
 */
cardy.events.input_to_card = (function cardy$events$input_to_card(p__51145){
var vec__51146 = p__51145;
var event_id_to_ignore = cljs.core.nth.call(null,vec__51146,(0),null);
var a_string = cljs.core.nth.call(null,vec__51146,(1),null);
cljs.core.println.call(null,"a-string in input-to-card: ",a_string);

var words = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,a_string,/;/));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),cljs.core.first.call(null,words),new cljs.core.Keyword(null,"back","back",-417520012),cljs.core.second.call(null,words)], null);
});

/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
cardy.events.dissoc_in = (function cardy$events$dissoc_in(m,p__51149){
var vec__51150 = p__51149;
var seq__51151 = cljs.core.seq.call(null,vec__51150);
var first__51152 = cljs.core.first.call(null,seq__51151);
var seq__51151__$1 = cljs.core.next.call(null,seq__51151);
var k = first__51152;
var ks = seq__51151__$1;
var keys = vec__51150;
if(ks){
var temp__4655__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var nextmap = temp__4655__auto__;
var newmap = cardy.events.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});

cardy.events.drop_nth = (function cardy$events$drop_nth(n,coll){
return cljs.core.keep_indexed.call(null,(function (p1__50648_SHARP_,p2__50649_SHARP_){
if(cljs.core.not_EQ_.call(null,p1__50648_SHARP_,n)){
return p2__50649_SHARP_;
} else {
return null;
}
}),coll);
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","initialize-db","cardy.events/initialize-db",1650796766),(function (_,___$1){
return cardy.db.default_db;
}));

re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("cardy.events","pull-decks","cardy.events/pull-decks",-274600551),(function cardy$events$pull_deck_handler(cofx,event){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pull-decks-fx","pull-decks-fx",-69608820),null], null);
}));

re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"pull-decks-fx","pull-decks-fx",-69608820),(function cardy$events$pull_decks_ajax(){
return ajax.core.GET.call(null,"/pull-decks",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__50650_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","set-decks","cardy.events/set-decks",1797217231),p1__50650_SHARP_], null));
})], null));
}));

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","set-decks","cardy.events/set-decks",1797217231),(function cardy$events$set_decks_handler(db,p__51153){
var vec__51154 = p__51153;
var event_id_to_ignore = cljs.core.nth.call(null,vec__51154,(0),null);
var decks = cljs.core.nth.call(null,vec__51154,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"decks","decks",-1740305496),decks);
}));

re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("cardy.events","push-decks","cardy.events/push-decks",-1525716789),(function cardy$events$push_decks_handler(cofx,event){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"push-decks-fx","push-decks-fx",473832076),new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx))], null);
}));

re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"push-decks-fx","push-decks-fx",473832076),(function cardy$events$push_decks_ajax(decks){
return ajax.core.POST.call(null,"/push-decks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"decks","decks",-1740305496),decks], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__50651_SHARP_){
return console.log("push-decks-ajax response was: ",p1__50651_SHARP_);
})], null));
}));

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","flip","cardy.events/flip",484024968),(function cardy$events$flip(db){
var current_face = new cljs.core.Keyword(null,"current-face","current-face",1615966840).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core._EQ_.call(null,current_face,new cljs.core.Keyword(null,"front","front",-1523508988))){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Keyword(null,"back","back",-417520012));
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Keyword(null,"front","front",-1523508988));
}
}));

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","next","cardy.events/next",-1017307955),(function cardy$events$next(db){
var current_index = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(db);
var next_index = (current_index + (1));
var cards = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core._EQ_.call(null,next_index,cljs.core.count.call(null,cards))){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current","current",-1088038603),(0));
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current","current",-1088038603),next_index);
}
}));

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","prev","cardy.events/prev",107868180),(function cardy$events$prev(db){
var current_index = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current","current",-1088038603),(current_index - (1)));
}));

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","add-card","cardy.events/add-card",-479246421),(function cardy$events$add_card(db,input){
var current_cards = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(db);
var new_card = cardy.events.input_to_card.call(null,input);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.conj.call(null,current_cards,new_card));
}));

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","remove-card","cardy.events/remove-card",758557629),(function cardy$events$remove_card(db){
var current_index = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(db);
var current_cards = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"cards","cards",169174038),cardy.events.drop_nth.call(null,current_index,current_cards));
}));

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","exclude-card","cardy.events/exclude-card",-1424283307),(function cardy$events$exclude_card(db){
var current_index = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(db);
var current_cards = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(db);
var current_excluded = new cljs.core.Keyword(null,"excluded","excluded",-715952088).cljs$core$IFn$_invoke$arity$1(db);
var current_card = cljs.core.nth.call(null,current_cards,current_index);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"excluded","excluded",-715952088),cljs.core.conj.call(null,current_excluded,current_card)),new cljs.core.Keyword(null,"cards","cards",169174038),cardy.events.drop_nth.call(null,current_index,current_cards));
}));

cardy.events.add_back_excluded = (function cardy$events$add_back_excluded(db){
var current_excluded = new cljs.core.Keyword(null,"excluded","excluded",-715952088).cljs$core$IFn$_invoke$arity$1(db);
var current_cards = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.flatten.call(null,cljs.core.conj.call(null,current_cards,current_excluded))),new cljs.core.Keyword(null,"excluded","excluded",-715952088),cljs.core.List.EMPTY);
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","add-back-excluded","cardy.events/add-back-excluded",443491881),cardy.events.add_back_excluded);

cardy.events.add_deck = (function cardy$events$add_deck(db,deck_name){

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),deck_name], null),cljs.core.List.EMPTY);
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","add-deck","cardy.events/add-deck",1748167474),(function cardy$events$add_deck_handler(db,p__51157){
var vec__51158 = p__51157;
var event_id_to_ignore = cljs.core.nth.call(null,vec__51158,(0),null);
var name_for_new_deck = cljs.core.nth.call(null,vec__51158,(1),null);
return cardy.events.add_deck.call(null,db,cardy.events.input_to_keyword.call(null,name_for_new_deck));
}));

cardy.events.put_back_old_deck = (function cardy$events$put_back_old_deck(db){
var current_deck = new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477).cljs$core$IFn$_invoke$arity$1(db);
var app_state = db;
var app_state__$1 = cardy.events.add_back_excluded.call(null,app_state);
return cljs.core.assoc_in.call(null,app_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),current_deck], null),new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(app_state__$1));
});

cardy.events.bring_in_new_deck = (function cardy$events$bring_in_new_deck(db,user_input){
var desired_deck = cardy.events.input_to_keyword.call(null,user_input);
var app_state = db;
var app_state__$1 = cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"cards","cards",169174038),desired_deck.call(null,new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(app_state)));
return cljs.core.assoc.call(null,app_state__$1,new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477),desired_deck);
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","change-deck","cardy.events/change-deck",-1660930769),(function cardy$events$change_deck(db,p__51161){
var vec__51162 = p__51161;
var event_id_to_ignore = cljs.core.nth.call(null,vec__51162,(0),null);
var user_input = cljs.core.nth.call(null,vec__51162,(1),null);
return cardy.events.bring_in_new_deck.call(null,cardy.events.put_back_old_deck.call(null,db),user_input);
}));

cardy.events.removing_current_deck_QMARK_ = (function cardy$events$removing_current_deck_QMARK_(db,deck_to_remove){

return cljs.core._EQ_.call(null,deck_to_remove,new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477).cljs$core$IFn$_invoke$arity$1(db));
});

cardy.events.placeholder_card = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),"This deck has no cards yet. Add one!",new cljs.core.Keyword(null,"back","back",-417520012),"You can flip me. But you really should add a card!"], null);

cardy.events.placeholder_deck = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder-deck","placeholder-deck",1147906209),cljs.core.list(new cljs.core.Symbol(null,"placeholder-card","placeholder-card",-941510735,null))], null);

cardy.events.no_decks_QMARK_ = (function cardy$events$no_decks_QMARK_(db){
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(db));
});

cardy.events.last_deck_QMARK_ = (function cardy$events$last_deck_QMARK_(db){
return cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(db)));
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","remove-deck","cardy.events/remove-deck",-1965096554),(function cardy$events$remove_deck(db,p__51165){
var vec__51166 = p__51165;
var event_id_to_ignore = cljs.core.nth.call(null,vec__51166,(0),null);
var name_of_deck_to_remove = cljs.core.nth.call(null,vec__51166,(1),null);
var deck_to_remove = cardy.events.input_to_keyword.call(null,name_of_deck_to_remove);
var remove_deck__$1 = ((function (deck_to_remove,vec__51166,event_id_to_ignore,name_of_deck_to_remove){
return (function (db__$1,deck_name){
return cardy.events.dissoc_in.call(null,db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),deck_name], null));
});})(deck_to_remove,vec__51166,event_id_to_ignore,name_of_deck_to_remove))
;
if(cljs.core.truth_(cardy.events.last_deck_QMARK_.call(null,db))){
var app_state = db;
var app_state__$1 = cardy.events.add_deck.call(null,app_state,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
return cardy.events.bring_in_new_deck.call(null,app_state__$1,"placeholder");
} else {
if(cljs.core.truth_(cardy.events.removing_current_deck_QMARK_.call(null,db,deck_to_remove))){
var app_state = db;
var app_state__$1 = remove_deck__$1.call(null,app_state,deck_to_remove);
return cardy.events.bring_in_new_deck.call(null,app_state__$1,cljs.core.name.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(app_state__$1)))));
} else {
return remove_deck__$1.call(null,db,deck_to_remove);
}
}
}));
}
