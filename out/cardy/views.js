// Compiled by ClojureScript 1.9.946 {}
goog.provide('cardy.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cardy.subs');
goog.require('cardy.events');
goog.require('reagent.core');
goog.require('re_com.core');
goog.require('ajax.core');
goog.require('clairvoyant.core');
goog.require('re_frame_tracer.core');
if(clairvoyant.core.devmode){
cardy.views.new_color_deck_2 = cljs.core.list(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deck","deck",1145325705),"die Farben",new cljs.core.Keyword(null,"front","front",-1523508988),"grau",new cljs.core.Keyword(null,"back","back",-417520012),"grey"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deck","deck",1145325705),"die Farben",new cljs.core.Keyword(null,"front","front",-1523508988),"gelb",new cljs.core.Keyword(null,"back","back",-417520012),"yellow"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deck","deck",1145325705),"die Farben",new cljs.core.Keyword(null,"front","front",-1523508988),"rot",new cljs.core.Keyword(null,"back","back",-417520012),"red"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deck","deck",1145325705),"die Farben",new cljs.core.Keyword(null,"front","front",-1523508988),"violett",new cljs.core.Keyword(null,"back","back",-417520012),"purple"], null));

cardy.views.show_decks = (function cardy$views$show_decks(){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"show-decks","show-decks",365168945,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"show-decks","show-decks",365168945,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Current decks are: ",cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","show-decks","cardy.subs/show-decks",661790866)], null)))], null))], null);
if((function (){var G__57296 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57296 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57296.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57296.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57296);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57296);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Current decks are: ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","show-decks","cardy.subs/show-decks",661790866)], null)))], null);
});})(trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null);
if((function (){var G__57297 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57297 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57297.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57297.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57297);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57297);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__57298 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57298 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57298.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57298.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57298);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57298);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57299){if((e57299 instanceof Object)){
var e__50375__auto__ = e57299;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57299;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.views.push_decks = (function cardy$views$push_decks(){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"push-decks","push-decks",-1653176624,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"push-decks","push-decks",-1653176624,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"sync decks",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","push-decks","cardy.events/push-decks",-1525716789)], null)))], null)], null))], null);
if((function (){var G__57300 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57300 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57300.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57300.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57300);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57300);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"sync decks",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (trace_data__50372__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","push-decks","cardy.events/push-decks",-1525716789)], null));
});})(trace_data__50372__auto__))
], null)], null);
});})(trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null);
if((function (){var G__57301 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57301 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57301.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57301.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57301);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57301);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__57302 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57302 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57302.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57302.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57302);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57302);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57303){if((e57303 instanceof Object)){
var e__50375__auto__ = e57303;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57303;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.views.show_current_phrase = (function cardy$views$show_current_phrase(){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"show-current-phrase","show-current-phrase",778907763,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"show-current-phrase","show-current-phrase",778907763,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","title","re-com/title",-817142947,null),new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current-phrase","cardy.subs/current-phrase",1832535043)], null))),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null))], null);
if((function (){var G__57304 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57304 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57304.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57304.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57304);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57304);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current-phrase","cardy.subs/current-phrase",1832535043)], null))),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null);
});})(trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null);
if((function (){var G__57305 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57305 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57305.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57305.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57305);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57305);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__57306 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57306 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57306.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57306.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57306);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57306);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57307){if((e57307 instanceof Object)){
var e__50375__auto__ = e57307;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57307;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.views.current_flag = (function cardy$views$current_flag(){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"current-flag","current-flag",-1654343492,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"current-flag","current-flag",-1654343492,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current-face","cardy.subs/current-face",101779168)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),new cljs.core.Keyword(null,"front","front",-1523508988)),"german-flag-small.jpg","american-flag-medium.jpg")))], null);
if((function (){var G__57308 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57308 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57308.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57308.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57308);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57308);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto__){
return (function (){

var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current-face","cardy.subs/current-face",101779168)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),new cljs.core.Keyword(null,"front","front",-1523508988)),"german-flag-small.jpg","american-flag-medium.jpg"))], null);
if((function (){var G__57309 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57309 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57309.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57309.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57309);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57309);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = (function (){var current_face = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current-face","cardy.subs/current-face",101779168)], null))),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null)], null);
if((function (){var G__57310 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57310 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57310.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57310.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57310);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57310);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current-face","cardy.subs/current-face",101779168)], null)));
if((function (){var G__57311 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57311 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57311.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57311.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57311);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57311);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57312 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57312 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57312.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57312.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57312);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57312);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57313){if((e57313 instanceof Object)){
var e__50375__auto__ = e57313;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57313;

}
}} else {
return f__50373__auto__.call(null);
}
})();
if(cljs.core._EQ_.call(null,current_face,new cljs.core.Keyword(null,"front","front",-1523508988))){
return "german-flag-small.jpg";
} else {
return "american-flag-medium.jpg";
}
})();
if((function (){var G__57314 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57314 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57314.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57314.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57314);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57314);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57315 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57315 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57315.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57315.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57315);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57315);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57316){if((e57316 instanceof Object)){
var e__50375__auto__ = e57316;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57316;

}
}} else {
return f__50373__auto__.call(null);
}
});})(trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null);
if((function (){var G__57317 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57317 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57317.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57317.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57317);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57317);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__57318 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57318 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57318.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57318.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57318);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57318);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57319){if((e57319 instanceof Object)){
var e__50375__auto__ = e57319;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57319;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.views.show_current_flag = (function cardy$views$show_current_flag(){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"show-current-flag","show-current-flag",719877493,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"show-current-flag","show-current-flag",719877493,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.list(new cljs.core.Symbol(null,"current-flag","current-flag",-1654343492,null))], null)], null))], null);
if((function (){var G__57320 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57320 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57320.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57320.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57320);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57320);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),cardy.views.current_flag.call(null)], null)], null);
});})(trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null);
if((function (){var G__57321 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57321 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57321.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57321.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57321);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57321);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__57322 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57322 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57322.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57322.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57322);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57322);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57323){if((e57323 instanceof Object)){
var e__50375__auto__ = e57323;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57323;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.views.flip_button = (function cardy$views$flip_button(){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"flip-button","flip-button",1026925109,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"flip-button","flip-button",1026925109,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"flip",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","flip","cardy.events/flip",484024968)], null)))], null)], null))], null);
if((function (){var G__57324 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57324 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57324.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57324.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57324);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57324);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"flip",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (trace_data__50372__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","flip","cardy.events/flip",484024968)], null));
});})(trace_data__50372__auto__))
], null)], null);
});})(trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null);
if((function (){var G__57325 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57325 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57325.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57325.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57325);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57325);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__57326 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57326 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57326.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57326.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57326);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57326);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57327){if((e57327 instanceof Object)){
var e__50375__auto__ = e57327;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57327;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.views.next_button = (function cardy$views$next_button(){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"next-button","next-button",-1991108350,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"next-button","next-button",-1991108350,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"I don't know it",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","next","cardy.events/next",-1017307955)], null)))], null)], null))], null);
if((function (){var G__57328 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57328 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57328.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57328.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57328);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57328);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"I don't know it",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (trace_data__50372__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","next","cardy.events/next",-1017307955)], null));
});})(trace_data__50372__auto__))
], null)], null);
});})(trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null);
if((function (){var G__57329 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57329 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57329.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57329.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57329);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57329);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__57330 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57330 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57330.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57330.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57330);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57330);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57331){if((e57331 instanceof Object)){
var e__50375__auto__ = e57331;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57331;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.views.exclude_current_card = (function cardy$views$exclude_current_card(){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"exclude-current-card","exclude-current-card",1872608160,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"exclude-current-card","exclude-current-card",1872608160,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"I know it",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","exclude-card","cardy.events/exclude-card",-1424283307)], null)))], null)], null))], null);
if((function (){var G__57332 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57332 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57332.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57332.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57332);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57332);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"I know it",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (trace_data__50372__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","exclude-card","cardy.events/exclude-card",-1424283307)], null));
});})(trace_data__50372__auto__))
], null)], null);
});})(trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null);
if((function (){var G__57333 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57333 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57333.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57333.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57333);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57333);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__57334 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57334 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57334.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57334.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57334);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57334);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57335){if((e57335 instanceof Object)){
var e__50375__auto__ = e57335;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57335;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.views.deck_choices = (function cardy$views$deck_choices(){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"deck-choices","deck-choices",1346563815,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"deck-choices","deck-choices",1346563815,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"available-decks","available-decks",243510517,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","decks","cardy.subs/decks",-1123699440)], null)))),new cljs.core.Symbol(null,"as-choice","as-choice",920468940,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], null))], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),new cljs.core.Symbol(null,"as-choice","as-choice",920468940,null),new cljs.core.Symbol(null,"available-decks","available-decks",243510517,null))))], null);
if((function (){var G__57336 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57336 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57336.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57336.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57336);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57336);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto__){
return (function (){

var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"available-decks","available-decks",243510517,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","decks","cardy.subs/decks",-1123699440)], null)))),new cljs.core.Symbol(null,"as-choice","as-choice",920468940,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], null))], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),new cljs.core.Symbol(null,"as-choice","as-choice",920468940,null),new cljs.core.Symbol(null,"available-decks","available-decks",243510517,null)))], null);
if((function (){var G__57337 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57337 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57337.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57337.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57337);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57337);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = (function (){var available_decks = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","decks","cardy.subs/decks",-1123699440)], null)))),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"available-decks","available-decks",243510517,null)], null);
if((function (){var G__57338 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57338 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57338.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57338.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57338);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57338);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = cljs.core.keys.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","decks","cardy.subs/decks",-1123699440)], null))));
if((function (){var G__57339 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57339 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57339.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57339.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57339);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57339);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57340 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57340 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57340.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57340.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57340);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57340);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57341){if((e57341 instanceof Object)){
var e__50375__auto__ = e57341;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57341;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var as_choice = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"as-choice","as-choice",920468940,null)], null);
if((function (){var G__57342 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57342 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57342.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57342.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57342);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57342);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,available_decks,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto____$2,available_decks,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function cardy$views$deck_choices_$_fn_57283(a_57284){
var trace_data__50372__auto____$3 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fn_57283","fn_57283",-1525512508,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], null))], null);
if((function (){var G__57343 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57343 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57343.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57343.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57343);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57343);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$3);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$3,trace_data__50372__auto____$2,available_decks,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto____$3,trace_data__50372__auto____$2,available_decks,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (a_57284__$1){
var x = (function (){var trace_data__50372__auto____$4 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_57284__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"x","x",-555367584,null)], null);
if((function (){var G__57344 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57344 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57344.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57344.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57344);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57344);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$4);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$4,trace_data__50372__auto____$3,trace_data__50372__auto____$2,available_decks,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_57284__$1;
if((function (){var G__57345 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57345 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57345.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57345.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57345);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57345);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$4,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$4,trace_data__50372__auto____$3,trace_data__50372__auto____$2,available_decks,trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57346 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57346 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57346.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57346.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57346);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57346);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57347){if((e57347 instanceof Object)){
var e__50375__auto__ = e57347;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$4,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57347;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (x,trace_data__50372__auto____$3,trace_data__50372__auto____$2,available_decks,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name.call(null,x),new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.name.call(null,x)], null);
});})(x,trace_data__50372__auto____$3,trace_data__50372__auto____$2,available_decks,trace_data__50372__auto____$1,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto____$3,trace_data__50372__auto____$2,available_decks,trace_data__50372__auto____$1,trace_data__50372__auto__))
.call(null,a_57284);
if((function (){var G__57348 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57348 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57348.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57348.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57348);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57348);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$3,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$3,trace_data__50372__auto____$2,available_decks,trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57349 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57349 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57349.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57349.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57349);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57349);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57350){if((e57350 instanceof Object)){
var e__50375__auto__ = e57350;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$3,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57350;

}
}} else {
return f__50373__auto__.call(null);
}
});})(trace_data__50372__auto____$2,available_decks,trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57351 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57351 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57351.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57351.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57351);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57351);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,available_decks,trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57352 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57352 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57352.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57352.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57352);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57352);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57353){if((e57353 instanceof Object)){
var e__50375__auto__ = e57353;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57353;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return cljs.core.mapv.call(null,as_choice,available_decks);
})();
if((function (){var G__57354 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57354 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57354.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57354.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57354);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57354);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57355 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57355 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57355.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57355.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57355);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57355);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57356){if((e57356 instanceof Object)){
var e__50375__auto__ = e57356;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57356;

}
}} else {
return f__50373__auto__.call(null);
}
});})(trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null);
if((function (){var G__57357 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57357 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57357.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57357.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57357);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57357);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__57358 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57358 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57358.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57358.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57358);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57358);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57359){if((e57359 instanceof Object)){
var e__50375__auto__ = e57359;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57359;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.views.deck_dropdown = (function cardy$views$deck_dropdown(){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"deck-dropdown","deck-dropdown",1350836815,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"deck-dropdown","deck-dropdown",1350836815,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-deck","selected-deck",139222215,null),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Decks:",new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","single-dropdown","re-com/single-dropdown",1931174161,null),new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.list(new cljs.core.Symbol(null,"deck-choices","deck-choices",1346563815,null)),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Symbol(null,"selected-deck","selected-deck",139222215,null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"select a deck",new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"400px",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57278#","p1__57278#",1202101640,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","change-deck","cardy.events/change-deck",-1660930769),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"selected-deck","selected-deck",139222215,null),new cljs.core.Symbol(null,"p1__57278#","p1__57278#",1202101640,null))], null)))], null)], null))))], null);
if((function (){var G__57360 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57360 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57360.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57360.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57360);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57360);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto__){
return (function (){

var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-deck","selected-deck",139222215,null),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Decks:",new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","single-dropdown","re-com/single-dropdown",1931174161,null),new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.list(new cljs.core.Symbol(null,"deck-choices","deck-choices",1346563815,null)),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Symbol(null,"selected-deck","selected-deck",139222215,null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"select a deck",new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"400px",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57278#","p1__57278#",1202101640,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","change-deck","cardy.events/change-deck",-1660930769),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"selected-deck","selected-deck",139222215,null),new cljs.core.Symbol(null,"p1__57278#","p1__57278#",1202101640,null))], null)))], null)], null)))], null);
if((function (){var G__57361 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57361 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57361.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57361.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57361);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57361);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = (function (){var selected_deck = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected-deck","selected-deck",139222215,null)], null);
if((function (){var G__57362 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57362 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57362.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57362.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57362);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57362);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = reagent.core.atom.call(null,null);
if((function (){var G__57363 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57363 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57363.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57363.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57363);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57363);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57364 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57364 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57364.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57364.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57364);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57364);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57365){if((e57365 instanceof Object)){
var e__50375__auto__ = e57365;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57365;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (selected_deck,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function cardy$views$deck_dropdown_$_fn_57285(){
var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fn_57285","fn_57285",-18401806,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Decks:",new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","single-dropdown","re-com/single-dropdown",1931174161,null),new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.list(new cljs.core.Symbol(null,"deck-choices","deck-choices",1346563815,null)),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Symbol(null,"selected-deck","selected-deck",139222215,null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"select a deck",new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"400px",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57278#","p1__57278#",1202101640,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","change-deck","cardy.events/change-deck",-1660930769),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"selected-deck","selected-deck",139222215,null),new cljs.core.Symbol(null,"p1__57278#","p1__57278#",1202101640,null))], null)))], null)], null))], null);
if((function (){var G__57366 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57366 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57366.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57366.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57366);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57366);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,selected_deck,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto____$2,selected_deck,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto____$2,selected_deck,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Decks:",new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"choices","choices",1385611597),cardy.views.deck_choices.call(null),new cljs.core.Keyword(null,"model","model",331153215),selected_deck,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"select a deck",new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"400px",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (trace_data__50372__auto____$2,selected_deck,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (p1__57278_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","change-deck","cardy.events/change-deck",-1660930769),cljs.core.reset_BANG_.call(null,selected_deck,p1__57278_SHARP_)], null));
});})(trace_data__50372__auto____$2,selected_deck,trace_data__50372__auto____$1,trace_data__50372__auto__))
], null)], null);
});})(trace_data__50372__auto____$2,selected_deck,trace_data__50372__auto____$1,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto____$2,selected_deck,trace_data__50372__auto____$1,trace_data__50372__auto__))
.call(null);
if((function (){var G__57367 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57367 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57367.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57367.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57367);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57367);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,selected_deck,trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57368 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57368 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57368.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57368.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57368);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57368);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57369){if((e57369 instanceof Object)){
var e__50375__auto__ = e57369;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57369;

}
}} else {
return f__50373__auto__.call(null);
}
});
;})(selected_deck,trace_data__50372__auto____$1,trace_data__50372__auto__))
})();
if((function (){var G__57370 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57370 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57370.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57370.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57370);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57370);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57371 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57371 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57371.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57371.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57371);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57371);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57372){if((e57372 instanceof Object)){
var e__50375__auto__ = e57372;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57372;

}
}} else {
return f__50373__auto__.call(null);
}
});})(trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null);
if((function (){var G__57373 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57373 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57373.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57373.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57373);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57373);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__57374 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57374 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57374.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57374.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57374);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57374);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57375){if((e57375 instanceof Object)){
var e__50375__auto__ = e57375;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57375;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.views.add_card = (function cardy$views$add_card(){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"add-card","add-card",781628592,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"add-card","add-card",781628592,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),"")], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","input-text","re-com/input-text",1255467716,null),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"new card: the front ; the back",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57279#","p1__57279#",-1334144023,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-card","cardy.events/add-card",-479246421),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Symbol(null,"p1__57279#","p1__57279#",-1334144023,null))], null)))], null))))], null);
if((function (){var G__57376 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57376 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57376.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57376.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57376);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57376);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto__){
return (function (){

var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),"")], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","input-text","re-com/input-text",1255467716,null),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"new card: the front ; the back",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57279#","p1__57279#",-1334144023,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-card","cardy.events/add-card",-479246421),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Symbol(null,"p1__57279#","p1__57279#",-1334144023,null))], null)))], null)))], null);
if((function (){var G__57377 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57377 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57377.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57377.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57377);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57377);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = (function (){var text_val = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),""),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null)], null);
if((function (){var G__57378 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57378 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57378.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57378.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57378);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57378);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = reagent.core.atom.call(null,"");
if((function (){var G__57379 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57379 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57379.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57379.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57379);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57379);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57380 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57380 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57380.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57380.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57380);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57380);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57381){if((e57381 instanceof Object)){
var e__50375__auto__ = e57381;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57381;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (text_val,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function cardy$views$add_card_$_fn_57286(){
var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fn_57286","fn_57286",-1654880979,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","input-text","re-com/input-text",1255467716,null),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"new card: the front ; the back",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57279#","p1__57279#",-1334144023,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-card","cardy.events/add-card",-479246421),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Symbol(null,"p1__57279#","p1__57279#",-1334144023,null))], null)))], null))], null);
if((function (){var G__57382 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57382 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57382.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57382.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57382);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57382);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,text_val,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto____$2,text_val,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto____$2,text_val,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),text_val,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"new card: the front ; the back",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (trace_data__50372__auto____$2,text_val,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (p1__57279_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-card","cardy.events/add-card",-479246421),cljs.core.reset_BANG_.call(null,text_val,p1__57279_SHARP_)], null));
});})(trace_data__50372__auto____$2,text_val,trace_data__50372__auto____$1,trace_data__50372__auto__))
], null);
});})(trace_data__50372__auto____$2,text_val,trace_data__50372__auto____$1,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto____$2,text_val,trace_data__50372__auto____$1,trace_data__50372__auto__))
.call(null);
if((function (){var G__57383 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57383 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57383.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57383.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57383);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57383);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,text_val,trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57384 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57384 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57384.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57384.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57384);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57384);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57385){if((e57385 instanceof Object)){
var e__50375__auto__ = e57385;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57385;

}
}} else {
return f__50373__auto__.call(null);
}
});
;})(text_val,trace_data__50372__auto____$1,trace_data__50372__auto__))
})();
if((function (){var G__57386 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57386 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57386.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57386.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57386);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57386);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57387 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57387 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57387.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57387.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57387);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57387);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57388){if((e57388 instanceof Object)){
var e__50375__auto__ = e57388;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57388;

}
}} else {
return f__50373__auto__.call(null);
}
});})(trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null);
if((function (){var G__57389 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57389 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57389.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57389.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57389);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57389);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__57390 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57390 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57390.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57390.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57390);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57390);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57391){if((e57391 instanceof Object)){
var e__50375__auto__ = e57391;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57391;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.views.remove_current_card = (function cardy$views$remove_current_card(){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"remove-current-card","remove-current-card",1556129682,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"remove-current-card","remove-current-card",1556129682,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"throw away current card",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","remove-card","cardy.events/remove-card",758557629)], null)))], null)], null))], null);
if((function (){var G__57392 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57392 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57392.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57392.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57392);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57392);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"throw away current card",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (trace_data__50372__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","remove-card","cardy.events/remove-card",758557629)], null));
});})(trace_data__50372__auto__))
], null)], null);
});})(trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null);
if((function (){var G__57393 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57393 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57393.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57393.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57393);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57393);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__57394 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57394 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57394.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57394.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57394);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57394);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57395){if((e57395 instanceof Object)){
var e__50375__auto__ = e57395;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57395;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.views.add_deck = (function cardy$views$add_deck(){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"add-deck","add-deck",1670913591,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"add-deck","add-deck",1670913591,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),"")], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","input-text","re-com/input-text",1255467716,null),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"add a new deck",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57281#","p1__57281#",732648911,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-deck","cardy.events/add-deck",1748167474),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Symbol(null,"p1__57281#","p1__57281#",732648911,null))], null)))], null))))], null);
if((function (){var G__57396 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57396 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57396.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57396.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57396);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57396);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto__){
return (function (){

var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),"")], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","input-text","re-com/input-text",1255467716,null),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"add a new deck",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57281#","p1__57281#",732648911,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-deck","cardy.events/add-deck",1748167474),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Symbol(null,"p1__57281#","p1__57281#",732648911,null))], null)))], null)))], null);
if((function (){var G__57397 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57397 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57397.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57397.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57397);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57397);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = (function (){var text_val = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),""),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null)], null);
if((function (){var G__57398 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57398 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57398.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57398.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57398);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57398);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = reagent.core.atom.call(null,"");
if((function (){var G__57399 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57399 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57399.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57399.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57399);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57399);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57400 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57400 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57400.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57400.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57400);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57400);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57401){if((e57401 instanceof Object)){
var e__50375__auto__ = e57401;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57401;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (text_val,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function cardy$views$add_deck_$_fn_57287(){
var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fn_57287","fn_57287",607847792,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","input-text","re-com/input-text",1255467716,null),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"add a new deck",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57281#","p1__57281#",732648911,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-deck","cardy.events/add-deck",1748167474),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Symbol(null,"p1__57281#","p1__57281#",732648911,null))], null)))], null))], null);
if((function (){var G__57402 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57402 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57402.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57402.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57402);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57402);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,text_val,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto____$2,text_val,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto____$2,text_val,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),text_val,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"add a new deck",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (trace_data__50372__auto____$2,text_val,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (p1__57281_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-deck","cardy.events/add-deck",1748167474),cljs.core.reset_BANG_.call(null,text_val,p1__57281_SHARP_)], null));
});})(trace_data__50372__auto____$2,text_val,trace_data__50372__auto____$1,trace_data__50372__auto__))
], null);
});})(trace_data__50372__auto____$2,text_val,trace_data__50372__auto____$1,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto____$2,text_val,trace_data__50372__auto____$1,trace_data__50372__auto__))
.call(null);
if((function (){var G__57403 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57403 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57403.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57403.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57403);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57403);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,text_val,trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57404 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57404 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57404.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57404.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57404);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57404);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57405){if((e57405 instanceof Object)){
var e__50375__auto__ = e57405;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57405;

}
}} else {
return f__50373__auto__.call(null);
}
});
;})(text_val,trace_data__50372__auto____$1,trace_data__50372__auto__))
})();
if((function (){var G__57406 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57406 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57406.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57406.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57406);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57406);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57407 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57407 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57407.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57407.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57407);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57407);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57408){if((e57408 instanceof Object)){
var e__50375__auto__ = e57408;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57408;

}
}} else {
return f__50373__auto__.call(null);
}
});})(trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null);
if((function (){var G__57409 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57409 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57409.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57409.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57409);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57409);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__57410 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57410 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57410.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57410.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57410);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57410);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57411){if((e57411 instanceof Object)){
var e__50375__auto__ = e57411;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57411;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.views.remove_deck = (function cardy$views$remove_deck(){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"remove-deck","remove-deck",1111906463,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"remove-deck","remove-deck",1111906463,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),"")], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","input-text","re-com/input-text",1255467716,null),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"remove a deck",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57282#","p1__57282#",-829549188,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","remove-deck","cardy.events/remove-deck",-1965096554),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Symbol(null,"p1__57282#","p1__57282#",-829549188,null))], null)))], null))))], null);
if((function (){var G__57412 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57412 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57412.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57412.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57412);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57412);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto__){
return (function (){

var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),"")], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","input-text","re-com/input-text",1255467716,null),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"remove a deck",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57282#","p1__57282#",-829549188,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","remove-deck","cardy.events/remove-deck",-1965096554),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Symbol(null,"p1__57282#","p1__57282#",-829549188,null))], null)))], null)))], null);
if((function (){var G__57413 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57413 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57413.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57413.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57413);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57413);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = (function (){var text_val = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),""),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null)], null);
if((function (){var G__57414 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57414 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57414.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57414.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57414);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57414);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = reagent.core.atom.call(null,"");
if((function (){var G__57415 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57415 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57415.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57415.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57415);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57415);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57416 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57416 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57416.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57416.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57416);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57416);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57417){if((e57417 instanceof Object)){
var e__50375__auto__ = e57417;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57417;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (text_val,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function cardy$views$remove_deck_$_fn_57288(){
var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fn_57288","fn_57288",23128143,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","input-text","re-com/input-text",1255467716,null),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"remove a deck",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57282#","p1__57282#",-829549188,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","remove-deck","cardy.events/remove-deck",-1965096554),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Symbol(null,"p1__57282#","p1__57282#",-829549188,null))], null)))], null))], null);
if((function (){var G__57418 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57418 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57418.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57418.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57418);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57418);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,text_val,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto____$2,text_val,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto____$2,text_val,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),text_val,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"remove a deck",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (trace_data__50372__auto____$2,text_val,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (p1__57282_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","remove-deck","cardy.events/remove-deck",-1965096554),cljs.core.reset_BANG_.call(null,text_val,p1__57282_SHARP_)], null));
});})(trace_data__50372__auto____$2,text_val,trace_data__50372__auto____$1,trace_data__50372__auto__))
], null);
});})(trace_data__50372__auto____$2,text_val,trace_data__50372__auto____$1,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto____$2,text_val,trace_data__50372__auto____$1,trace_data__50372__auto__))
.call(null);
if((function (){var G__57419 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57419 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57419.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57419.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57419);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57419);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,text_val,trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57420 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57420 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57420.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57420.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57420);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57420);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57421){if((e57421 instanceof Object)){
var e__50375__auto__ = e57421;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57421;

}
}} else {
return f__50373__auto__.call(null);
}
});
;})(text_val,trace_data__50372__auto____$1,trace_data__50372__auto__))
})();
if((function (){var G__57422 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57422 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57422.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57422.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57422);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57422);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57423 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57423 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57423.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57423.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57423);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57423);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57424){if((e57424 instanceof Object)){
var e__50375__auto__ = e57424;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57424;

}
}} else {
return f__50373__auto__.call(null);
}
});})(trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null);
if((function (){var G__57425 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57425 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57425.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57425.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57425);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57425);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__57426 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57426 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57426.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57426.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57426);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57426);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57427){if((e57427 instanceof Object)){
var e__50375__auto__ = e57427;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57427;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.views.deck_modal_dialog = (function cardy$views$deck_modal_dialog(a_57289,a_57290){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"deck-modal-dialog","deck-modal-dialog",-2084528159,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"process-ok","process-ok",1636117648,null),new cljs.core.Symbol(null,"process-cancel","process-cancel",260280369,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"deck-modal-dialog","deck-modal-dialog",-2084528159,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"process-ok","process-ok",1636117648,null),new cljs.core.Symbol(null,"process-cancel","process-cancel",260280369,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","v-box","re-com/v-box",-878861859,null),new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backdrop-color","backdrop-color",1921200717),"blue"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","title","re-com/title",-817142947,null),new cljs.core.Keyword(null,"label","label",1718410804),"Change, add or delete a deck"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deck-dropdown","deck-dropdown",1350836815,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"add-deck","add-deck",1670913591,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"remove-deck","remove-deck",1111906463,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","button","re-com/button",1889828023,null),new cljs.core.Keyword(null,"label","label",1718410804),"Done",new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Symbol(null,"process-ok","process-ok",1636117648,null)], null)], null)], null))], null);
if((function (){var G__57428 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57428 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57428.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57428.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57428);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57428);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (a_57289__$1,a_57290__$1){
var process_ok = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_57289__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"process-ok","process-ok",1636117648,null)], null);
if((function (){var G__57429 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57429 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57429.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57429.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57429);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57429);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_57289__$1;
if((function (){var G__57430 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57430 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57430.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57430.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57430);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57430);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57431 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57431 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57431.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57431.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57431);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57431);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57432){if((e57432 instanceof Object)){
var e__50375__auto__ = e57432;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57432;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var process_cancel = (function (){var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_57290__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"process-cancel","process-cancel",260280369,null)], null);
if((function (){var G__57433 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57433 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57433.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57433.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57433);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57433);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,process_ok,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_57290__$1;
if((function (){var G__57434 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57434 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57434.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57434.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57434);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57434);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,process_ok,trace_data__50372__auto__))
;
if((function (){var G__57435 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57435 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57435.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57435.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57435);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57435);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57436){if((e57436 instanceof Object)){
var e__50375__auto__ = e57436;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57436;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (process_ok,process_cancel,trace_data__50372__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backdrop-color","backdrop-color",1921200717),"blue"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Change, add or delete a deck"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.deck_dropdown], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.add_deck], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.remove_deck], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Done",new cljs.core.Keyword(null,"on-click","on-click",1632826543),process_ok], null)], null)], null);
});})(process_ok,process_cancel,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null,a_57289,a_57290);
if((function (){var G__57437 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57437 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57437.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57437.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57437);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57437);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__57438 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57438 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57438.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57438.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57438);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57438);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57439){if((e57439 instanceof Object)){
var e__50375__auto__ = e57439;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57439;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.views.deck_modal = (function cardy$views$deck_modal(){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"deck-modal","deck-modal",507707298,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"deck-modal","deck-modal",507707298,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"show?","show?",-1110593642,null),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),false),new cljs.core.Symbol(null,"process-ok","process-ok",1636117648,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null),false),false),new cljs.core.Symbol(null,"process-cancel","process-cancel",260280369,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null),false),false)], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","button","re-com/button",1889828023,null),new cljs.core.Keyword(null,"label","label",1718410804),"Decks",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-info",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null),true))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null)),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","modal-panel","re-com/modal-panel",-1010230917,null),new cljs.core.Keyword(null,"backdrop-color","backdrop-color",1921200717),"grey",new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653),0.4,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deck-modal-dialog","deck-modal-dialog",-2084528159,null),new cljs.core.Symbol(null,"process-ok","process-ok",1636117648,null),new cljs.core.Symbol(null,"process-cancel","process-cancel",260280369,null)], null)], null))], null))))], null);
if((function (){var G__57440 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57440 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57440.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57440.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57440);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57440);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto__){
return (function (){

var trace_data__50372__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"show?","show?",-1110593642,null),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),false),new cljs.core.Symbol(null,"process-ok","process-ok",1636117648,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null),false),false),new cljs.core.Symbol(null,"process-cancel","process-cancel",260280369,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null),false),false)], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","button","re-com/button",1889828023,null),new cljs.core.Keyword(null,"label","label",1718410804),"Decks",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-info",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null),true))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null)),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","modal-panel","re-com/modal-panel",-1010230917,null),new cljs.core.Keyword(null,"backdrop-color","backdrop-color",1921200717),"grey",new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653),0.4,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deck-modal-dialog","deck-modal-dialog",-2084528159,null),new cljs.core.Symbol(null,"process-ok","process-ok",1636117648,null),new cljs.core.Symbol(null,"process-cancel","process-cancel",260280369,null)], null)], null))], null)))], null);
if((function (){var G__57441 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57441 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57441.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57441.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57441);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57441);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$1);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = (function (){var show_QMARK_ = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),false),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"show?","show?",-1110593642,null)], null);
if((function (){var G__57442 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57442 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57442.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57442.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57442);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57442);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = reagent.core.atom.call(null,false);
if((function (){var G__57443 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57443 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57443.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57443.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57443);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57443);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57444 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57444 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57444.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57444.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57444);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57444);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57445){if((e57445 instanceof Object)){
var e__50375__auto__ = e57445;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57445;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var process_ok = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null),false),false),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"process-ok","process-ok",1636117648,null)], null);
if((function (){var G__57446 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57446 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57446.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57446.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57446);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57446);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,show_QMARK_,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto____$2,show_QMARK_,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function cardy$views$deck_modal_$_fn_57291(a_57292){
var trace_data__50372__auto____$3 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fn_57291","fn_57291",-879125644,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null),false),false)], null);
if((function (){var G__57447 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57447 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57447.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57447.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57447);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57447);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$3);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$3,trace_data__50372__auto____$2,show_QMARK_,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto____$3,trace_data__50372__auto____$2,show_QMARK_,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (a_57292__$1){
var event = (function (){var trace_data__50372__auto____$4 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_57292__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"event","event",1941966969,null)], null);
if((function (){var G__57448 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57448 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57448.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57448.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57448);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57448);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$4);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$4,trace_data__50372__auto____$3,trace_data__50372__auto____$2,show_QMARK_,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_57292__$1;
if((function (){var G__57449 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57449 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57449.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57449.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57449);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57449);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$4,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$4,trace_data__50372__auto____$3,trace_data__50372__auto____$2,show_QMARK_,trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57450 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57450 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57450.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57450.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57450);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57450);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57451){if((e57451 instanceof Object)){
var e__50375__auto__ = e57451;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$4,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57451;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (event,trace_data__50372__auto____$3,trace_data__50372__auto____$2,show_QMARK_,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){

cljs.core.reset_BANG_.call(null,show_QMARK_,false);

return false;
});})(event,trace_data__50372__auto____$3,trace_data__50372__auto____$2,show_QMARK_,trace_data__50372__auto____$1,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto____$3,trace_data__50372__auto____$2,show_QMARK_,trace_data__50372__auto____$1,trace_data__50372__auto__))
.call(null,a_57292);
if((function (){var G__57452 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57452 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57452.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57452.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57452);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57452);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$3,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$3,trace_data__50372__auto____$2,show_QMARK_,trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57453 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57453 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57453.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57453.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57453);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57453);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57454){if((e57454 instanceof Object)){
var e__50375__auto__ = e57454;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$3,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57454;

}
}} else {
return f__50373__auto__.call(null);
}
});})(trace_data__50372__auto____$2,show_QMARK_,trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57455 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57455 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57455.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57455.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57455);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57455);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,show_QMARK_,trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57456 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57456 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57456.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57456.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57456);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57456);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57457){if((e57457 instanceof Object)){
var e__50375__auto__ = e57457;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57457;

}
}} else {
return f__50373__auto__.call(null);
}
})();
var process_cancel = (function (){var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null),false),false),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"process-cancel","process-cancel",260280369,null)], null);
if((function (){var G__57458 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57458 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57458.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57458.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57458);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57458);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,show_QMARK_,process_ok,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto____$2,show_QMARK_,process_ok,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function cardy$views$deck_modal_$_fn_57293(a_57294){
var trace_data__50372__auto____$3 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fn_57293","fn_57293",-898188032,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null),false),false)], null);
if((function (){var G__57459 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57459 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57459.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57459.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57459);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57459);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$3);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$3,trace_data__50372__auto____$2,show_QMARK_,process_ok,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto____$3,trace_data__50372__auto____$2,show_QMARK_,process_ok,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (a_57294__$1){
var event = (function (){var trace_data__50372__auto____$4 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_57294__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"event","event",1941966969,null)], null);
if((function (){var G__57460 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57460 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57460.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57460.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57460);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57460);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$4);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$4,trace_data__50372__auto____$3,trace_data__50372__auto____$2,show_QMARK_,process_ok,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = a_57294__$1;
if((function (){var G__57461 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57461 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57461.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57461.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57461);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57461);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$4,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$4,trace_data__50372__auto____$3,trace_data__50372__auto____$2,show_QMARK_,process_ok,trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57462 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57462 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57462.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57462.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57462);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57462);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57463){if((e57463 instanceof Object)){
var e__50375__auto__ = e57463;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$4,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57463;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (event,trace_data__50372__auto____$3,trace_data__50372__auto____$2,show_QMARK_,process_ok,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){

cljs.core.reset_BANG_.call(null,show_QMARK_,false);

return false;
});})(event,trace_data__50372__auto____$3,trace_data__50372__auto____$2,show_QMARK_,process_ok,trace_data__50372__auto____$1,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto____$3,trace_data__50372__auto____$2,show_QMARK_,process_ok,trace_data__50372__auto____$1,trace_data__50372__auto__))
.call(null,a_57294);
if((function (){var G__57464 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57464 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57464.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57464.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57464);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57464);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$3,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$3,trace_data__50372__auto____$2,show_QMARK_,process_ok,trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57465 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57465 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57465.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57465.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57465);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57465);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57466){if((e57466 instanceof Object)){
var e__50375__auto__ = e57466;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$3,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57466;

}
}} else {
return f__50373__auto__.call(null);
}
});})(trace_data__50372__auto____$2,show_QMARK_,process_ok,trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57467 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57467 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57467.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57467.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57467);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57467);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,show_QMARK_,process_ok,trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57468 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57468 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57468.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57468.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57468);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57468);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57469){if((e57469 instanceof Object)){
var e__50375__auto__ = e57469;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57469;

}
}} else {
return f__50373__auto__.call(null);
}
})();
return ((function (show_QMARK_,process_ok,process_cancel,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function cardy$views$deck_modal_$_fn_57295(){
var trace_data__50372__auto____$2 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fn_57295","fn_57295",-1700315537,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","button","re-com/button",1889828023,null),new cljs.core.Keyword(null,"label","label",1718410804),"Decks",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-info",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null),true))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null)),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","modal-panel","re-com/modal-panel",-1010230917,null),new cljs.core.Keyword(null,"backdrop-color","backdrop-color",1921200717),"grey",new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653),0.4,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deck-modal-dialog","deck-modal-dialog",-2084528159,null),new cljs.core.Symbol(null,"process-ok","process-ok",1636117648,null),new cljs.core.Symbol(null,"process-cancel","process-cancel",260280369,null)], null)], null))], null))], null);
if((function (){var G__57470 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57470 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57470.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57470.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57470);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57470);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto____$2);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto____$2,show_QMARK_,process_ok,process_cancel,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto____$2,show_QMARK_,process_ok,process_cancel,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto____$2,show_QMARK_,process_ok,process_cancel,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Decks",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-info",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (trace_data__50372__auto____$2,show_QMARK_,process_ok,process_cancel,trace_data__50372__auto____$1,trace_data__50372__auto__){
return (function (){
return cljs.core.reset_BANG_.call(null,show_QMARK_,true);
});})(trace_data__50372__auto____$2,show_QMARK_,process_ok,process_cancel,trace_data__50372__auto____$1,trace_data__50372__auto__))
], null),(cljs.core.truth_(cljs.core.deref.call(null,show_QMARK_))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"backdrop-color","backdrop-color",1921200717),"grey",new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653),0.4,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.deck_modal_dialog,process_ok,process_cancel], null)], null):null)], null);
});})(trace_data__50372__auto____$2,show_QMARK_,process_ok,process_cancel,trace_data__50372__auto____$1,trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto____$2,show_QMARK_,process_ok,process_cancel,trace_data__50372__auto____$1,trace_data__50372__auto__))
.call(null);
if((function (){var G__57471 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57471 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57471.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57471.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57471);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57471);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$2,show_QMARK_,process_ok,process_cancel,trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57472 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57472 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57472.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57472.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57472);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57472);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57473){if((e57473 instanceof Object)){
var e__50375__auto__ = e57473;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57473;

}
}} else {
return f__50373__auto__.call(null);
}
});
;})(show_QMARK_,process_ok,process_cancel,trace_data__50372__auto____$1,trace_data__50372__auto__))
})();
if((function (){var G__57474 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57474 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57474.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57474.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57474);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57474);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto____$1,trace_data__50372__auto__))
;
if((function (){var G__57475 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57475 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57475.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57475.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57475);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57475);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57476){if((e57476 instanceof Object)){
var e__50375__auto__ = e57476;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57476;

}
}} else {
return f__50373__auto__.call(null);
}
});})(trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null);
if((function (){var G__57477 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57477 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57477.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57477.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57477);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57477);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__57478 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57478 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57478.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57478.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57478);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57478);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57479){if((e57479 instanceof Object)){
var e__50375__auto__ = e57479;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57479;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.views.visualization = (function cardy$views$visualization(){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"visualization","visualization",960832317,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"visualization","visualization",960832317,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","v-box","re-com/v-box",-878861859,null),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"15px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Cards: ",cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","cards","cardy.subs/cards",1976170110)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Number of cards: ",cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","cards","cardy.subs/cards",1976170110)], null))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Current (index): ",cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current","cardy.subs/current",-354140467)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Excluded cards: ",cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","excluded","cardy.subs/excluded",839965248)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Available decks: ",cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","decks","cardy.subs/decks",-1123699440)], null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Number of available decks: ",cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","decks","cardy.subs/decks",-1123699440)], null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Current deck is: ",cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current-deck","cardy.subs/current-deck",73777723)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"show-decks","show-decks",365168945,null)], null)], null)], null))], null);
if((function (){var G__57480 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57480 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57480.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57480.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57480);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57480);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"15px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Cards: ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","cards","cardy.subs/cards",1976170110)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Number of cards: ",cljs.core.count.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","cards","cardy.subs/cards",1976170110)], null))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Current (index): ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current","cardy.subs/current",-354140467)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Excluded cards: ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","excluded","cardy.subs/excluded",839965248)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Available decks: ",cljs.core.map.call(null,cljs.core.str,cljs.core.keys.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","decks","cardy.subs/decks",-1123699440)], null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Number of available decks: ",cljs.core.count.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","decks","cardy.subs/decks",-1123699440)], null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Current deck is: ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current-deck","cardy.subs/current-deck",73777723)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.show_decks], null)], null)], null);
});})(trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null);
if((function (){var G__57481 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57481 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57481.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57481.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57481);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57481);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__57482 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57482 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57482.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57482.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57482);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57482);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57483){if((e57483 instanceof Object)){
var e__50375__auto__ = e57483;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57483;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.views.card_review = (function cardy$views$card_review(){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"card-review","card-review",1233966097,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"card-review","card-review",1233966097,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","h-box","re-com/h-box",434843262,null),new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exclude-current-card","exclude-current-card",1872608160,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flip-button","flip-button",1026925109,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"next-button","next-button",-1991108350,null)], null)], null)], null))], null);
if((function (){var G__57484 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57484 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57484.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57484.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57484);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57484);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.exclude_current_card], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.flip_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.next_button], null)], null)], null);
});})(trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null);
if((function (){var G__57485 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57485 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57485.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57485.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57485);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57485);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__57486 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57486 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57486.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57486.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57486);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57486);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57487){if((e57487 instanceof Object)){
var e__50375__auto__ = e57487;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57487;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.views.card_display = (function cardy$views$card_display(){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"card-display","card-display",-16911432,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"card-display","card-display",-16911432,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","h-box","re-com/h-box",434843262,null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","box","re-com/box",-983641330,null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"show-current-flag","show-current-flag",719877493,null)], null),new cljs.core.Keyword(null,"width","width",-384071477),"120px",new cljs.core.Keyword(null,"height","height",1025178622),"90px",new cljs.core.Keyword(null,"padding","padding",1660304693),"20px 10px 10px 10px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","box","re-com/box",-983641330,null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"show-current-phrase","show-current-phrase",778907763,null)], null),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"padding","padding",1660304693),"20px"], null)], null)], null))], null);
if((function (){var G__57488 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57488 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57488.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57488.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57488);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57488);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.show_current_flag], null),new cljs.core.Keyword(null,"width","width",-384071477),"120px",new cljs.core.Keyword(null,"height","height",1025178622),"90px",new cljs.core.Keyword(null,"padding","padding",1660304693),"20px 10px 10px 10px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.show_current_phrase], null),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"padding","padding",1660304693),"20px"], null)], null)], null);
});})(trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null);
if((function (){var G__57489 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57489 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57489.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57489.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57489);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57489);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__57490 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57490 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57490.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57490.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57490);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57490);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57491){if((e57491 instanceof Object)){
var e__50375__auto__ = e57491;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57491;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.views.card_manipulation = (function cardy$views$card_manipulation(){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"card-manipulation","card-manipulation",471378428,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"card-manipulation","card-manipulation",471378428,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","h-box","re-com/h-box",434843262,null),new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"add-card","add-card",781628592,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"remove-current-card","remove-current-card",1556129682,null)], null)], null)], null))], null);
if((function (){var G__57492 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57492 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57492.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57492.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57492);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57492);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.add_card], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.remove_current_card], null)], null)], null);
});})(trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null);
if((function (){var G__57493 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57493 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57493.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57493.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57493);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57493);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__57494 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57494 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57494.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57494.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57494);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57494);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57495){if((e57495 instanceof Object)){
var e__50375__auto__ = e57495;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57495;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.views.main_components = (function cardy$views$main_components(){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"main-components","main-components",1262700605,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"main-components","main-components",1262700605,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","v-box","re-com/v-box",-878861859,null),new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"card-display","card-display",-16911432,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"card-review","card-review",1233966097,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"card-manipulation","card-manipulation",471378428,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"push-decks","push-decks",-1653176624,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deck-modal","deck-modal",507707298,null)], null)], null)], null))], null);
if((function (){var G__57496 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57496 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57496.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57496.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57496);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57496);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.card_display], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.card_review], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.card_manipulation], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.push_decks], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.deck_modal], null)], null)], null);
});})(trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null);
if((function (){var G__57497 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57497 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57497.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57497.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57497);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57497);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__57498 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57498 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57498.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57498.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57498);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57498);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57499){if((e57499 instanceof Object)){
var e__50375__auto__ = e57499;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57499;

}
}} else {
return f__50373__auto__.call(null);
}
});

cardy.views.cardy_app = (function cardy$views$cardy_app(){
var trace_data__50372__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cardy-app","cardy-app",1371044168,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"cardy-app","cardy-app",1371044168,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","v-box","re-com/v-box",-878861859,null),new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"gap","gap",80255254),"50px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"main-components","main-components",1262700605,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"visualization","visualization",960832317,null)], null)], null)], null))], null);
if((function (){var G__57500 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57500 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57500.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__57500.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57500);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__57500);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__50372__auto__);
} else {
}

var f__50373__auto__ = ((function (trace_data__50372__auto__){
return (function (){
var return__50374__auto__ = ((function (trace_data__50372__auto__){
return (function (){
return ((function (trace_data__50372__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"gap","gap",80255254),"50px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.main_components], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.visualization], null)], null)], null);
});})(trace_data__50372__auto__))
.call(null);
});})(trace_data__50372__auto__))
.call(null);
if((function (){var G__57501 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57501 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57501.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__57501.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57501);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__57501);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__50374__auto__));
} else {
}

return return__50374__auto__;
});})(trace_data__50372__auto__))
;
if((function (){var G__57502 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__57502 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__57502.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__57502.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57502);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__57502);
}
})()){
try{return f__50373__auto__.call(null);
}catch (e57503){if((e57503 instanceof Object)){
var e__50375__auto__ = e57503;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__50372__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__50375__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__50375__auto__)));

throw e__50375__auto__;
} else {
throw e57503;

}
}} else {
return f__50373__auto__.call(null);
}
});
} else {
cardy.views.new_color_deck_2 = cljs.core.list(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deck","deck",1145325705),"die Farben",new cljs.core.Keyword(null,"front","front",-1523508988),"grau",new cljs.core.Keyword(null,"back","back",-417520012),"grey"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deck","deck",1145325705),"die Farben",new cljs.core.Keyword(null,"front","front",-1523508988),"gelb",new cljs.core.Keyword(null,"back","back",-417520012),"yellow"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deck","deck",1145325705),"die Farben",new cljs.core.Keyword(null,"front","front",-1523508988),"rot",new cljs.core.Keyword(null,"back","back",-417520012),"red"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deck","deck",1145325705),"die Farben",new cljs.core.Keyword(null,"front","front",-1523508988),"violett",new cljs.core.Keyword(null,"back","back",-417520012),"purple"], null));

cardy.views.show_decks = (function cardy$views$show_decks(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Current decks are: ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","show-decks","cardy.subs/show-decks",661790866)], null)))], null);
});

cardy.views.push_decks = (function cardy$views$push_decks(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"sync decks",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","push-decks","cardy.events/push-decks",-1525716789)], null));
})], null)], null);
});

cardy.views.show_current_phrase = (function cardy$views$show_current_phrase(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current-phrase","cardy.subs/current-phrase",1832535043)], null))),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null);
});

cardy.views.current_flag = (function cardy$views$current_flag(){
var current_face = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current-face","cardy.subs/current-face",101779168)], null)));
if(cljs.core._EQ_.call(null,current_face,new cljs.core.Keyword(null,"front","front",-1523508988))){
return "german-flag-small.jpg";
} else {
return "american-flag-medium.jpg";
}
});

cardy.views.show_current_flag = (function cardy$views$show_current_flag(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),cardy.views.current_flag.call(null)], null)], null);
});

cardy.views.flip_button = (function cardy$views$flip_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"flip",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","flip","cardy.events/flip",484024968)], null));
})], null)], null);
});

cardy.views.next_button = (function cardy$views$next_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"I don't know it",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","next","cardy.events/next",-1017307955)], null));
})], null)], null);
});

cardy.views.exclude_current_card = (function cardy$views$exclude_current_card(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"I know it",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","exclude-card","cardy.events/exclude-card",-1424283307)], null));
})], null)], null);
});

cardy.views.deck_choices = (function cardy$views$deck_choices(){
var available_decks = cljs.core.keys.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","decks","cardy.subs/decks",-1123699440)], null))));
var as_choice = ((function (available_decks){
return (function (x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name.call(null,x),new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.name.call(null,x)], null);
});})(available_decks))
;
return cljs.core.mapv.call(null,as_choice,available_decks);
});

cardy.views.deck_dropdown = (function cardy$views$deck_dropdown(){
var selected_deck = reagent.core.atom.call(null,null);
return ((function (selected_deck){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Decks:",new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"choices","choices",1385611597),cardy.views.deck_choices.call(null),new cljs.core.Keyword(null,"model","model",331153215),selected_deck,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"select a deck",new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"400px",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected_deck){
return (function (p1__57278_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","change-deck","cardy.events/change-deck",-1660930769),cljs.core.reset_BANG_.call(null,selected_deck,p1__57278_SHARP_)], null));
});})(selected_deck))
], null)], null);
});
;})(selected_deck))
});

cardy.views.add_card = (function cardy$views$add_card(){
var text_val = reagent.core.atom.call(null,"");
return ((function (text_val){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),text_val,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"new card: the front ; the back",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (text_val){
return (function (p1__57279_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-card","cardy.events/add-card",-479246421),cljs.core.reset_BANG_.call(null,text_val,p1__57279_SHARP_)], null));
});})(text_val))
], null);
});
;})(text_val))
});

cardy.views.remove_current_card = (function cardy$views$remove_current_card(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"throw away current card",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","remove-card","cardy.events/remove-card",758557629)], null));
})], null)], null);
});

cardy.views.add_deck = (function cardy$views$add_deck(){
var text_val = reagent.core.atom.call(null,"");
return ((function (text_val){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),text_val,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"add a new deck",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (text_val){
return (function (p1__57281_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-deck","cardy.events/add-deck",1748167474),cljs.core.reset_BANG_.call(null,text_val,p1__57281_SHARP_)], null));
});})(text_val))
], null);
});
;})(text_val))
});

cardy.views.remove_deck = (function cardy$views$remove_deck(){
var text_val = reagent.core.atom.call(null,"");
return ((function (text_val){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),text_val,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"remove a deck",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (text_val){
return (function (p1__57282_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","remove-deck","cardy.events/remove-deck",-1965096554),cljs.core.reset_BANG_.call(null,text_val,p1__57282_SHARP_)], null));
});})(text_val))
], null);
});
;})(text_val))
});

cardy.views.deck_modal_dialog = (function cardy$views$deck_modal_dialog(process_ok,process_cancel){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backdrop-color","backdrop-color",1921200717),"blue"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Change, add or delete a deck"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.deck_dropdown], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.add_deck], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.remove_deck], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Done",new cljs.core.Keyword(null,"on-click","on-click",1632826543),process_ok], null)], null)], null);
});

cardy.views.deck_modal = (function cardy$views$deck_modal(){
var show_QMARK_ = reagent.core.atom.call(null,false);
var process_ok = ((function (show_QMARK_){
return (function (event){
cljs.core.reset_BANG_.call(null,show_QMARK_,false);

return false;
});})(show_QMARK_))
;
var process_cancel = ((function (show_QMARK_,process_ok){
return (function (event){
cljs.core.reset_BANG_.call(null,show_QMARK_,false);

return false;
});})(show_QMARK_,process_ok))
;
return ((function (show_QMARK_,process_ok,process_cancel){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Decks",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-info",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (show_QMARK_,process_ok,process_cancel){
return (function (){
return cljs.core.reset_BANG_.call(null,show_QMARK_,true);
});})(show_QMARK_,process_ok,process_cancel))
], null),(cljs.core.truth_(cljs.core.deref.call(null,show_QMARK_))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"backdrop-color","backdrop-color",1921200717),"grey",new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653),0.4,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.deck_modal_dialog,process_ok,process_cancel], null)], null):null)], null);
});
;})(show_QMARK_,process_ok,process_cancel))
});

cardy.views.visualization = (function cardy$views$visualization(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"15px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Cards: ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","cards","cardy.subs/cards",1976170110)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Number of cards: ",cljs.core.count.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","cards","cardy.subs/cards",1976170110)], null))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Current (index): ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current","cardy.subs/current",-354140467)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Excluded cards: ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","excluded","cardy.subs/excluded",839965248)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Available decks: ",cljs.core.map.call(null,cljs.core.str,cljs.core.keys.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","decks","cardy.subs/decks",-1123699440)], null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Number of available decks: ",cljs.core.count.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","decks","cardy.subs/decks",-1123699440)], null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Current deck is: ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current-deck","cardy.subs/current-deck",73777723)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.show_decks], null)], null)], null);
});

cardy.views.card_review = (function cardy$views$card_review(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.exclude_current_card], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.flip_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.next_button], null)], null)], null);
});

cardy.views.card_display = (function cardy$views$card_display(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.show_current_flag], null),new cljs.core.Keyword(null,"width","width",-384071477),"120px",new cljs.core.Keyword(null,"height","height",1025178622),"90px",new cljs.core.Keyword(null,"padding","padding",1660304693),"20px 10px 10px 10px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.show_current_phrase], null),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"padding","padding",1660304693),"20px"], null)], null)], null);
});

cardy.views.card_manipulation = (function cardy$views$card_manipulation(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.add_card], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.remove_current_card], null)], null)], null);
});

cardy.views.main_components = (function cardy$views$main_components(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.card_display], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.card_review], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.card_manipulation], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.push_decks], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.deck_modal], null)], null)], null);
});

cardy.views.cardy_app = (function cardy$views$cardy_app(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"gap","gap",80255254),"50px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.main_components], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.visualization], null)], null)], null);
});
}
