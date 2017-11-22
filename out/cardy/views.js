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
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"show-decks","show-decks",365168945,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"show-decks","show-decks",365168945,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Current decks are: ",cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","show-decks","cardy.subs/show-decks",661790866)], null)))], null))], null);
if((function (){var G__102908 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102908 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102908.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102908.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102908);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102908);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Current decks are: ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","show-decks","cardy.subs/show-decks",661790866)], null)))], null);
});})(trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null);
if((function (){var G__102909 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102909 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102909.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102909.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102909);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102909);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102910 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102910 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102910.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102910.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102910);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102910);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102911){if((e102911 instanceof Object)){
var e__46790__auto__ = e102911;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102911;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.views.push_decks = (function cardy$views$push_decks(){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"push-decks","push-decks",-1653176624,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"push-decks","push-decks",-1653176624,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"sync decks",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","push-decks","cardy.events/push-decks",-1525716789)], null)))], null)], null))], null);
if((function (){var G__102912 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102912 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102912.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102912.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102912);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102912);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"sync decks",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (trace_data__46787__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","push-decks","cardy.events/push-decks",-1525716789)], null));
});})(trace_data__46787__auto__))
], null)], null);
});})(trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null);
if((function (){var G__102913 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102913 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102913.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102913.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102913);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102913);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102914 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102914 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102914.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102914.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102914);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102914);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102915){if((e102915 instanceof Object)){
var e__46790__auto__ = e102915;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102915;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.views.show_current_phrase = (function cardy$views$show_current_phrase(){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"show-current-phrase","show-current-phrase",778907763,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"show-current-phrase","show-current-phrase",778907763,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","title","re-com/title",-817142947,null),new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current-phrase","cardy.subs/current-phrase",1832535043)], null))),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null))], null);
if((function (){var G__102916 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102916 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102916.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102916.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102916);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102916);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current-phrase","cardy.subs/current-phrase",1832535043)], null))),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null);
});})(trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null);
if((function (){var G__102917 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102917 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102917.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102917.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102917);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102917);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102918 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102918 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102918.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102918.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102918);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102918);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102919){if((e102919 instanceof Object)){
var e__46790__auto__ = e102919;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102919;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.views.current_flag = (function cardy$views$current_flag(){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"current-flag","current-flag",-1654343492,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"current-flag","current-flag",-1654343492,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current-face","cardy.subs/current-face",101779168)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),new cljs.core.Keyword(null,"front","front",-1523508988)),"german-flag-small.jpg","american-flag-medium.jpg")))], null);
if((function (){var G__102920 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102920 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102920.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102920.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102920);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102920);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto__){
return (function (){

var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current-face","cardy.subs/current-face",101779168)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),new cljs.core.Keyword(null,"front","front",-1523508988)),"german-flag-small.jpg","american-flag-medium.jpg"))], null);
if((function (){var G__102921 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102921 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102921.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102921.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102921);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102921);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = (function (){var current_face = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current-face","cardy.subs/current-face",101779168)], null))),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null)], null);
if((function (){var G__102922 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102922 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102922.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102922.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102922);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102922);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current-face","cardy.subs/current-face",101779168)], null)));
if((function (){var G__102923 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102923 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102923.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102923.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102923);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102923);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102924 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102924 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102924.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102924.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102924);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102924);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102925){if((e102925 instanceof Object)){
var e__46790__auto__ = e102925;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102925;

}
}} else {
return f__46788__auto__.call(null);
}
})();
if(cljs.core._EQ_.call(null,current_face,new cljs.core.Keyword(null,"front","front",-1523508988))){
return "german-flag-small.jpg";
} else {
return "american-flag-medium.jpg";
}
})();
if((function (){var G__102926 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102926 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102926.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102926.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102926);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102926);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102927 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102927 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102927.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102927.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102927);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102927);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102928){if((e102928 instanceof Object)){
var e__46790__auto__ = e102928;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102928;

}
}} else {
return f__46788__auto__.call(null);
}
});})(trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null);
if((function (){var G__102929 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102929 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102929.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102929.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102929);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102929);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102930 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102930 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102930.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102930.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102930);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102930);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102931){if((e102931 instanceof Object)){
var e__46790__auto__ = e102931;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102931;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.views.show_current_flag = (function cardy$views$show_current_flag(){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"show-current-flag","show-current-flag",719877493,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"show-current-flag","show-current-flag",719877493,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.list(new cljs.core.Symbol(null,"current-flag","current-flag",-1654343492,null))], null)], null))], null);
if((function (){var G__102932 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102932 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102932.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102932.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102932);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102932);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),cardy.views.current_flag.call(null)], null)], null);
});})(trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null);
if((function (){var G__102933 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102933 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102933.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102933.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102933);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102933);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102934 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102934 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102934.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102934.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102934);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102934);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102935){if((e102935 instanceof Object)){
var e__46790__auto__ = e102935;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102935;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.views.flip_button = (function cardy$views$flip_button(){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"flip-button","flip-button",1026925109,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"flip-button","flip-button",1026925109,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"flip",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","flip","cardy.events/flip",484024968)], null)))], null)], null))], null);
if((function (){var G__102936 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102936 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102936.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102936.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102936);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102936);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"flip",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (trace_data__46787__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","flip","cardy.events/flip",484024968)], null));
});})(trace_data__46787__auto__))
], null)], null);
});})(trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null);
if((function (){var G__102937 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102937 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102937.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102937.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102937);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102937);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102938 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102938 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102938.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102938.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102938);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102938);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102939){if((e102939 instanceof Object)){
var e__46790__auto__ = e102939;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102939;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.views.next_button = (function cardy$views$next_button(){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"next-button","next-button",-1991108350,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"next-button","next-button",-1991108350,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"I don't know it",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","next","cardy.events/next",-1017307955)], null)))], null)], null))], null);
if((function (){var G__102940 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102940 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102940.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102940.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102940);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102940);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"I don't know it",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (trace_data__46787__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","next","cardy.events/next",-1017307955)], null));
});})(trace_data__46787__auto__))
], null)], null);
});})(trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null);
if((function (){var G__102941 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102941 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102941.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102941.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102941);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102941);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102942 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102942 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102942.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102942.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102942);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102942);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102943){if((e102943 instanceof Object)){
var e__46790__auto__ = e102943;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102943;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.views.exclude_current_card = (function cardy$views$exclude_current_card(){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"exclude-current-card","exclude-current-card",1872608160,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"exclude-current-card","exclude-current-card",1872608160,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"I know it",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","exclude-card","cardy.events/exclude-card",-1424283307)], null)))], null)], null))], null);
if((function (){var G__102944 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102944 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102944.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102944.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102944);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102944);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"I know it",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (trace_data__46787__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","exclude-card","cardy.events/exclude-card",-1424283307)], null));
});})(trace_data__46787__auto__))
], null)], null);
});})(trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null);
if((function (){var G__102945 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102945 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102945.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102945.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102945);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102945);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102946 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102946 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102946.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102946.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102946);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102946);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102947){if((e102947 instanceof Object)){
var e__46790__auto__ = e102947;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102947;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.views.deck_choices = (function cardy$views$deck_choices(){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"deck-choices","deck-choices",1346563815,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"deck-choices","deck-choices",1346563815,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"available-decks","available-decks",243510517,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","decks","cardy.subs/decks",-1123699440)], null)))),new cljs.core.Symbol(null,"as-choice","as-choice",920468940,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], null))], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),new cljs.core.Symbol(null,"as-choice","as-choice",920468940,null),new cljs.core.Symbol(null,"available-decks","available-decks",243510517,null))))], null);
if((function (){var G__102948 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102948 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102948.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102948.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102948);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102948);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto__){
return (function (){

var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"available-decks","available-decks",243510517,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","decks","cardy.subs/decks",-1123699440)], null)))),new cljs.core.Symbol(null,"as-choice","as-choice",920468940,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], null))], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),new cljs.core.Symbol(null,"as-choice","as-choice",920468940,null),new cljs.core.Symbol(null,"available-decks","available-decks",243510517,null)))], null);
if((function (){var G__102949 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102949 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102949.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102949.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102949);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102949);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = (function (){var available_decks = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","decks","cardy.subs/decks",-1123699440)], null)))),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"available-decks","available-decks",243510517,null)], null);
if((function (){var G__102950 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102950 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102950.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102950.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102950);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102950);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = cljs.core.keys.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","decks","cardy.subs/decks",-1123699440)], null))));
if((function (){var G__102951 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102951 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102951.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102951.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102951);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102951);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102952 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102952 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102952.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102952.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102952);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102952);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102953){if((e102953 instanceof Object)){
var e__46790__auto__ = e102953;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102953;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var as_choice = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"as-choice","as-choice",920468940,null)], null);
if((function (){var G__102954 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102954 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102954.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102954.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102954);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102954);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,available_decks,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto____$2,available_decks,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function cardy$views$deck_choices_$_fn_102895(a_102896){
var trace_data__46787__auto____$3 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fn_102895","fn_102895",1179006444,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], null))], null);
if((function (){var G__102955 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102955 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102955.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102955.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102955);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102955);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$3);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$3,trace_data__46787__auto____$2,available_decks,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto____$3,trace_data__46787__auto____$2,available_decks,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (a_102896__$1){
var x = (function (){var trace_data__46787__auto____$4 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102896__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"x","x",-555367584,null)], null);
if((function (){var G__102956 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102956 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102956.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102956.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102956);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102956);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$4);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$4,trace_data__46787__auto____$3,trace_data__46787__auto____$2,available_decks,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102896__$1;
if((function (){var G__102957 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102957 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102957.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102957.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102957);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102957);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$4,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$4,trace_data__46787__auto____$3,trace_data__46787__auto____$2,available_decks,trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102958 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102958 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102958.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102958.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102958);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102958);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102959){if((e102959 instanceof Object)){
var e__46790__auto__ = e102959;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$4,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102959;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (x,trace_data__46787__auto____$3,trace_data__46787__auto____$2,available_decks,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name.call(null,x),new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.name.call(null,x)], null);
});})(x,trace_data__46787__auto____$3,trace_data__46787__auto____$2,available_decks,trace_data__46787__auto____$1,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto____$3,trace_data__46787__auto____$2,available_decks,trace_data__46787__auto____$1,trace_data__46787__auto__))
.call(null,a_102896);
if((function (){var G__102960 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102960 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102960.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102960.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102960);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102960);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$3,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$3,trace_data__46787__auto____$2,available_decks,trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102961 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102961 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102961.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102961.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102961);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102961);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102962){if((e102962 instanceof Object)){
var e__46790__auto__ = e102962;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$3,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102962;

}
}} else {
return f__46788__auto__.call(null);
}
});})(trace_data__46787__auto____$2,available_decks,trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102963 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102963 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102963.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102963.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102963);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102963);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,available_decks,trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102964 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102964 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102964.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102964.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102964);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102964);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102965){if((e102965 instanceof Object)){
var e__46790__auto__ = e102965;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102965;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return cljs.core.mapv.call(null,as_choice,available_decks);
})();
if((function (){var G__102966 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102966 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102966.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102966.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102966);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102966);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102967 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102967 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102967.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102967.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102967);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102967);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102968){if((e102968 instanceof Object)){
var e__46790__auto__ = e102968;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102968;

}
}} else {
return f__46788__auto__.call(null);
}
});})(trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null);
if((function (){var G__102969 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102969 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102969.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102969.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102969);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102969);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102970 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102970 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102970.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102970.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102970);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102970);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102971){if((e102971 instanceof Object)){
var e__46790__auto__ = e102971;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102971;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.views.deck_dropdown = (function cardy$views$deck_dropdown(){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"deck-dropdown","deck-dropdown",1350836815,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"deck-dropdown","deck-dropdown",1350836815,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-deck","selected-deck",139222215,null),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Decks:",new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","single-dropdown","re-com/single-dropdown",1931174161,null),new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.list(new cljs.core.Symbol(null,"deck-choices","deck-choices",1346563815,null)),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Symbol(null,"selected-deck","selected-deck",139222215,null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"select a deck",new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"400px",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__102890#","p1__102890#",650024351,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","change-deck","cardy.events/change-deck",-1660930769),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"selected-deck","selected-deck",139222215,null),new cljs.core.Symbol(null,"p1__102890#","p1__102890#",650024351,null))], null)))], null)], null))))], null);
if((function (){var G__102972 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102972 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102972.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102972.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102972);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102972);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto__){
return (function (){

var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-deck","selected-deck",139222215,null),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Decks:",new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","single-dropdown","re-com/single-dropdown",1931174161,null),new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.list(new cljs.core.Symbol(null,"deck-choices","deck-choices",1346563815,null)),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Symbol(null,"selected-deck","selected-deck",139222215,null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"select a deck",new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"400px",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__102890#","p1__102890#",650024351,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","change-deck","cardy.events/change-deck",-1660930769),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"selected-deck","selected-deck",139222215,null),new cljs.core.Symbol(null,"p1__102890#","p1__102890#",650024351,null))], null)))], null)], null)))], null);
if((function (){var G__102973 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102973 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102973.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102973.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102973);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102973);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = (function (){var selected_deck = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected-deck","selected-deck",139222215,null)], null);
if((function (){var G__102974 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102974 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102974.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102974.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102974);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102974);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = reagent.core.atom.call(null,null);
if((function (){var G__102975 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102975 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102975.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102975.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102975);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102975);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102976 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102976 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102976.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102976.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102976);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102976);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102977){if((e102977 instanceof Object)){
var e__46790__auto__ = e102977;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102977;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (selected_deck,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function cardy$views$deck_dropdown_$_fn_102897(){
var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fn_102897","fn_102897",1717361022,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Decks:",new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","single-dropdown","re-com/single-dropdown",1931174161,null),new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.list(new cljs.core.Symbol(null,"deck-choices","deck-choices",1346563815,null)),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Symbol(null,"selected-deck","selected-deck",139222215,null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"select a deck",new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"400px",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__102890#","p1__102890#",650024351,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","change-deck","cardy.events/change-deck",-1660930769),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"selected-deck","selected-deck",139222215,null),new cljs.core.Symbol(null,"p1__102890#","p1__102890#",650024351,null))], null)))], null)], null))], null);
if((function (){var G__102978 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102978 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102978.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102978.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102978);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102978);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,selected_deck,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto____$2,selected_deck,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto____$2,selected_deck,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Decks:",new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"choices","choices",1385611597),cardy.views.deck_choices.call(null),new cljs.core.Keyword(null,"model","model",331153215),selected_deck,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"select a deck",new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"400px",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (trace_data__46787__auto____$2,selected_deck,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (p1__102890_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","change-deck","cardy.events/change-deck",-1660930769),cljs.core.reset_BANG_.call(null,selected_deck,p1__102890_SHARP_)], null));
});})(trace_data__46787__auto____$2,selected_deck,trace_data__46787__auto____$1,trace_data__46787__auto__))
], null)], null);
});})(trace_data__46787__auto____$2,selected_deck,trace_data__46787__auto____$1,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto____$2,selected_deck,trace_data__46787__auto____$1,trace_data__46787__auto__))
.call(null);
if((function (){var G__102979 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102979 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102979.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102979.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102979);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102979);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,selected_deck,trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102980 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102980 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102980.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102980.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102980);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102980);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102981){if((e102981 instanceof Object)){
var e__46790__auto__ = e102981;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102981;

}
}} else {
return f__46788__auto__.call(null);
}
});
;})(selected_deck,trace_data__46787__auto____$1,trace_data__46787__auto__))
})();
if((function (){var G__102982 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102982 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102982.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102982.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102982);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102982);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102983 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102983 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102983.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102983.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102983);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102983);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102984){if((e102984 instanceof Object)){
var e__46790__auto__ = e102984;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102984;

}
}} else {
return f__46788__auto__.call(null);
}
});})(trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null);
if((function (){var G__102985 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102985 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102985.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102985.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102985);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102985);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102986 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102986 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102986.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102986.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102986);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102986);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102987){if((e102987 instanceof Object)){
var e__46790__auto__ = e102987;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102987;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.views.add_card = (function cardy$views$add_card(){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"add-card","add-card",781628592,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"add-card","add-card",781628592,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),"")], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","input-text","re-com/input-text",1255467716,null),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"new card: the front ; the back",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__102891#","p1__102891#",-774467479,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-card","cardy.events/add-card",-479246421),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Symbol(null,"p1__102891#","p1__102891#",-774467479,null))], null)))], null))))], null);
if((function (){var G__102988 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102988 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102988.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102988.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102988);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102988);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto__){
return (function (){

var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),"")], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","input-text","re-com/input-text",1255467716,null),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"new card: the front ; the back",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__102891#","p1__102891#",-774467479,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-card","cardy.events/add-card",-479246421),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Symbol(null,"p1__102891#","p1__102891#",-774467479,null))], null)))], null)))], null);
if((function (){var G__102989 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102989 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102989.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102989.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102989);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102989);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = (function (){var text_val = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),""),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null)], null);
if((function (){var G__102990 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102990 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102990.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102990.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102990);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102990);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = reagent.core.atom.call(null,"");
if((function (){var G__102991 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102991 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102991.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102991.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102991);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102991);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102992 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102992 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102992.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102992.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102992);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102992);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102993){if((e102993 instanceof Object)){
var e__46790__auto__ = e102993;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102993;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (text_val,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function cardy$views$add_card_$_fn_102898(){
var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fn_102898","fn_102898",-1134147237,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","input-text","re-com/input-text",1255467716,null),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"new card: the front ; the back",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__102891#","p1__102891#",-774467479,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-card","cardy.events/add-card",-479246421),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Symbol(null,"p1__102891#","p1__102891#",-774467479,null))], null)))], null))], null);
if((function (){var G__102994 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102994 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102994.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102994.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102994);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102994);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,text_val,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto____$2,text_val,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto____$2,text_val,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),text_val,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"new card: the front ; the back",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (trace_data__46787__auto____$2,text_val,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (p1__102891_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-card","cardy.events/add-card",-479246421),cljs.core.reset_BANG_.call(null,text_val,p1__102891_SHARP_)], null));
});})(trace_data__46787__auto____$2,text_val,trace_data__46787__auto____$1,trace_data__46787__auto__))
], null);
});})(trace_data__46787__auto____$2,text_val,trace_data__46787__auto____$1,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto____$2,text_val,trace_data__46787__auto____$1,trace_data__46787__auto__))
.call(null);
if((function (){var G__102995 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102995 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102995.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102995.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102995);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102995);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,text_val,trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102996 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102996 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102996.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102996.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102996);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102996);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102997){if((e102997 instanceof Object)){
var e__46790__auto__ = e102997;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102997;

}
}} else {
return f__46788__auto__.call(null);
}
});
;})(text_val,trace_data__46787__auto____$1,trace_data__46787__auto__))
})();
if((function (){var G__102998 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102998 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102998.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102998.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102998);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102998);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102999 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__102999 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102999.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102999.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102999);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102999);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103000){if((e103000 instanceof Object)){
var e__46790__auto__ = e103000;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103000;

}
}} else {
return f__46788__auto__.call(null);
}
});})(trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null);
if((function (){var G__103001 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103001 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103001.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103001.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103001);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103001);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__103002 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103002 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103002.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103002.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103002);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103002);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103003){if((e103003 instanceof Object)){
var e__46790__auto__ = e103003;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103003;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.views.remove_current_card = (function cardy$views$remove_current_card(){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"remove-current-card","remove-current-card",1556129682,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"remove-current-card","remove-current-card",1556129682,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"throw away current card",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","remove-card","cardy.events/remove-card",758557629)], null)))], null)], null))], null);
if((function (){var G__103004 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103004 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103004.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103004.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103004);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103004);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"throw away current card",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (trace_data__46787__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","remove-card","cardy.events/remove-card",758557629)], null));
});})(trace_data__46787__auto__))
], null)], null);
});})(trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null);
if((function (){var G__103005 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103005 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103005.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103005.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103005);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103005);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__103006 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103006 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103006.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103006.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103006);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103006);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103007){if((e103007 instanceof Object)){
var e__46790__auto__ = e103007;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103007;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.views.add_deck = (function cardy$views$add_deck(){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"add-deck","add-deck",1670913591,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"add-deck","add-deck",1670913591,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),"")], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","input-text","re-com/input-text",1255467716,null),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"add a new deck",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__102893#","p1__102893#",-2141453388,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-deck","cardy.events/add-deck",1748167474),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Symbol(null,"p1__102893#","p1__102893#",-2141453388,null))], null)))], null))))], null);
if((function (){var G__103008 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103008 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103008.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103008.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103008);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103008);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto__){
return (function (){

var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),"")], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","input-text","re-com/input-text",1255467716,null),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"add a new deck",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__102893#","p1__102893#",-2141453388,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-deck","cardy.events/add-deck",1748167474),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Symbol(null,"p1__102893#","p1__102893#",-2141453388,null))], null)))], null)))], null);
if((function (){var G__103009 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103009 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103009.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103009.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103009);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103009);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = (function (){var text_val = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),""),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null)], null);
if((function (){var G__103010 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103010 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103010.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103010.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103010);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103010);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = reagent.core.atom.call(null,"");
if((function (){var G__103011 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103011 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103011.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103011.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103011);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103011);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__103012 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103012 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103012.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103012.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103012);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103012);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103013){if((e103013 instanceof Object)){
var e__46790__auto__ = e103013;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103013;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (text_val,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function cardy$views$add_deck_$_fn_102899(){
var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fn_102899","fn_102899",1277153572,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","input-text","re-com/input-text",1255467716,null),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"add a new deck",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__102893#","p1__102893#",-2141453388,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-deck","cardy.events/add-deck",1748167474),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Symbol(null,"p1__102893#","p1__102893#",-2141453388,null))], null)))], null))], null);
if((function (){var G__103014 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103014 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103014.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103014.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103014);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103014);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,text_val,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto____$2,text_val,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto____$2,text_val,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),text_val,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"add a new deck",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (trace_data__46787__auto____$2,text_val,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (p1__102893_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-deck","cardy.events/add-deck",1748167474),cljs.core.reset_BANG_.call(null,text_val,p1__102893_SHARP_)], null));
});})(trace_data__46787__auto____$2,text_val,trace_data__46787__auto____$1,trace_data__46787__auto__))
], null);
});})(trace_data__46787__auto____$2,text_val,trace_data__46787__auto____$1,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto____$2,text_val,trace_data__46787__auto____$1,trace_data__46787__auto__))
.call(null);
if((function (){var G__103015 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103015 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103015.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103015.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103015);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103015);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,text_val,trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__103016 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103016 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103016.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103016.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103016);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103016);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103017){if((e103017 instanceof Object)){
var e__46790__auto__ = e103017;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103017;

}
}} else {
return f__46788__auto__.call(null);
}
});
;})(text_val,trace_data__46787__auto____$1,trace_data__46787__auto__))
})();
if((function (){var G__103018 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103018 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103018.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103018.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103018);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103018);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__103019 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103019 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103019.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103019.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103019);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103019);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103020){if((e103020 instanceof Object)){
var e__46790__auto__ = e103020;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103020;

}
}} else {
return f__46788__auto__.call(null);
}
});})(trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null);
if((function (){var G__103021 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103021 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103021.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103021.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103021);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103021);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__103022 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103022 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103022.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103022.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103022);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103022);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103023){if((e103023 instanceof Object)){
var e__46790__auto__ = e103023;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103023;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.views.remove_deck = (function cardy$views$remove_deck(){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"remove-deck","remove-deck",1111906463,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"remove-deck","remove-deck",1111906463,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),"")], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","input-text","re-com/input-text",1255467716,null),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"remove a deck",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__102894#","p1__102894#",1629067306,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","remove-deck","cardy.events/remove-deck",-1965096554),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Symbol(null,"p1__102894#","p1__102894#",1629067306,null))], null)))], null))))], null);
if((function (){var G__103024 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103024 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103024.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103024.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103024);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103024);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto__){
return (function (){

var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),"")], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","input-text","re-com/input-text",1255467716,null),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"remove a deck",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__102894#","p1__102894#",1629067306,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","remove-deck","cardy.events/remove-deck",-1965096554),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Symbol(null,"p1__102894#","p1__102894#",1629067306,null))], null)))], null)))], null);
if((function (){var G__103025 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103025 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103025.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103025.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103025);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103025);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = (function (){var text_val = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),""),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null)], null);
if((function (){var G__103026 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103026 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103026.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103026.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103026);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103026);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = reagent.core.atom.call(null,"");
if((function (){var G__103027 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103027 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103027.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103027.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103027);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103027);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__103028 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103028 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103028.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103028.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103028);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103028);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103029){if((e103029 instanceof Object)){
var e__46790__auto__ = e103029;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103029;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (text_val,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function cardy$views$remove_deck_$_fn_102900(){
var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fn_102900","fn_102900",-168930407,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","input-text","re-com/input-text",1255467716,null),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"remove a deck",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__102894#","p1__102894#",1629067306,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","remove-deck","cardy.events/remove-deck",-1965096554),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"text-val","text-val",-1897995082,null),new cljs.core.Symbol(null,"p1__102894#","p1__102894#",1629067306,null))], null)))], null))], null);
if((function (){var G__103030 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103030 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103030.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103030.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103030);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103030);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,text_val,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto____$2,text_val,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto____$2,text_val,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),text_val,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"remove a deck",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (trace_data__46787__auto____$2,text_val,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (p1__102894_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","remove-deck","cardy.events/remove-deck",-1965096554),cljs.core.reset_BANG_.call(null,text_val,p1__102894_SHARP_)], null));
});})(trace_data__46787__auto____$2,text_val,trace_data__46787__auto____$1,trace_data__46787__auto__))
], null);
});})(trace_data__46787__auto____$2,text_val,trace_data__46787__auto____$1,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto____$2,text_val,trace_data__46787__auto____$1,trace_data__46787__auto__))
.call(null);
if((function (){var G__103031 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103031 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103031.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103031.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103031);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103031);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,text_val,trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__103032 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103032 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103032.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103032.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103032);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103032);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103033){if((e103033 instanceof Object)){
var e__46790__auto__ = e103033;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103033;

}
}} else {
return f__46788__auto__.call(null);
}
});
;})(text_val,trace_data__46787__auto____$1,trace_data__46787__auto__))
})();
if((function (){var G__103034 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103034 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103034.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103034.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103034);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103034);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__103035 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103035 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103035.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103035.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103035);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103035);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103036){if((e103036 instanceof Object)){
var e__46790__auto__ = e103036;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103036;

}
}} else {
return f__46788__auto__.call(null);
}
});})(trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null);
if((function (){var G__103037 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103037 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103037.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103037.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103037);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103037);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__103038 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103038 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103038.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103038.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103038);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103038);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103039){if((e103039 instanceof Object)){
var e__46790__auto__ = e103039;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103039;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.views.deck_modal_dialog = (function cardy$views$deck_modal_dialog(a_102901,a_102902){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"deck-modal-dialog","deck-modal-dialog",-2084528159,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"process-ok","process-ok",1636117648,null),new cljs.core.Symbol(null,"process-cancel","process-cancel",260280369,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"deck-modal-dialog","deck-modal-dialog",-2084528159,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"process-ok","process-ok",1636117648,null),new cljs.core.Symbol(null,"process-cancel","process-cancel",260280369,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","v-box","re-com/v-box",-878861859,null),new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backdrop-color","backdrop-color",1921200717),"blue"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","title","re-com/title",-817142947,null),new cljs.core.Keyword(null,"label","label",1718410804),"Change, add or delete a deck"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deck-dropdown","deck-dropdown",1350836815,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"add-deck","add-deck",1670913591,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"remove-deck","remove-deck",1111906463,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","button","re-com/button",1889828023,null),new cljs.core.Keyword(null,"label","label",1718410804),"Done",new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Symbol(null,"process-ok","process-ok",1636117648,null)], null)], null)], null))], null);
if((function (){var G__103040 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103040 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103040.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103040.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103040);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103040);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102901__$1,a_102902__$1){
var process_ok = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102901__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"process-ok","process-ok",1636117648,null)], null);
if((function (){var G__103041 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103041 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103041.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103041.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103041);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103041);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102901__$1;
if((function (){var G__103042 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103042 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103042.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103042.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103042);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103042);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__103043 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103043 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103043.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103043.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103043);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103043);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103044){if((e103044 instanceof Object)){
var e__46790__auto__ = e103044;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103044;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var process_cancel = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102902__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"process-cancel","process-cancel",260280369,null)], null);
if((function (){var G__103045 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103045 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103045.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103045.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103045);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103045);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,process_ok,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102902__$1;
if((function (){var G__103046 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103046 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103046.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103046.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103046);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103046);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,process_ok,trace_data__46787__auto__))
;
if((function (){var G__103047 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103047 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103047.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103047.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103047);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103047);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103048){if((e103048 instanceof Object)){
var e__46790__auto__ = e103048;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103048;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (process_ok,process_cancel,trace_data__46787__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backdrop-color","backdrop-color",1921200717),"blue"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Change, add or delete a deck"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.deck_dropdown], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.add_deck], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.remove_deck], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Done",new cljs.core.Keyword(null,"on-click","on-click",1632826543),process_ok], null)], null)], null);
});})(process_ok,process_cancel,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102901,a_102902);
if((function (){var G__103049 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103049 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103049.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103049.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103049);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103049);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__103050 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103050 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103050.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103050.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103050);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103050);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103051){if((e103051 instanceof Object)){
var e__46790__auto__ = e103051;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103051;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.views.deck_modal = (function cardy$views$deck_modal(){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"deck-modal","deck-modal",507707298,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"deck-modal","deck-modal",507707298,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"show?","show?",-1110593642,null),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),false),new cljs.core.Symbol(null,"process-ok","process-ok",1636117648,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null),false),false),new cljs.core.Symbol(null,"process-cancel","process-cancel",260280369,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null),false),false)], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","button","re-com/button",1889828023,null),new cljs.core.Keyword(null,"label","label",1718410804),"Decks",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-info",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null),true))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null)),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","modal-panel","re-com/modal-panel",-1010230917,null),new cljs.core.Keyword(null,"backdrop-color","backdrop-color",1921200717),"grey",new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653),0.4,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deck-modal-dialog","deck-modal-dialog",-2084528159,null),new cljs.core.Symbol(null,"process-ok","process-ok",1636117648,null),new cljs.core.Symbol(null,"process-cancel","process-cancel",260280369,null)], null)], null))], null))))], null);
if((function (){var G__103052 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103052 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103052.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103052.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103052);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103052);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto__){
return (function (){

var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"show?","show?",-1110593642,null),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),false),new cljs.core.Symbol(null,"process-ok","process-ok",1636117648,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null),false),false),new cljs.core.Symbol(null,"process-cancel","process-cancel",260280369,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null),false),false)], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","button","re-com/button",1889828023,null),new cljs.core.Keyword(null,"label","label",1718410804),"Decks",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-info",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null),true))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null)),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","modal-panel","re-com/modal-panel",-1010230917,null),new cljs.core.Keyword(null,"backdrop-color","backdrop-color",1921200717),"grey",new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653),0.4,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deck-modal-dialog","deck-modal-dialog",-2084528159,null),new cljs.core.Symbol(null,"process-ok","process-ok",1636117648,null),new cljs.core.Symbol(null,"process-cancel","process-cancel",260280369,null)], null)], null))], null)))], null);
if((function (){var G__103053 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103053 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103053.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103053.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103053);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103053);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = (function (){var show_QMARK_ = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol("reagent","atom","reagent/atom",-1972034768,null),false),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"show?","show?",-1110593642,null)], null);
if((function (){var G__103054 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103054 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103054.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103054.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103054);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103054);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = reagent.core.atom.call(null,false);
if((function (){var G__103055 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103055 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103055.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103055.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103055);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103055);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__103056 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103056 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103056.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103056.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103056);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103056);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103057){if((e103057 instanceof Object)){
var e__46790__auto__ = e103057;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103057;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var process_ok = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null),false),false),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"process-ok","process-ok",1636117648,null)], null);
if((function (){var G__103058 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103058 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103058.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103058.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103058);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103058);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,show_QMARK_,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto____$2,show_QMARK_,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function cardy$views$deck_modal_$_fn_102903(a_102904){
var trace_data__46787__auto____$3 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fn_102903","fn_102903",1857531637,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null),false),false)], null);
if((function (){var G__103059 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103059 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103059.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103059.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103059);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103059);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$3);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$3,trace_data__46787__auto____$2,show_QMARK_,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto____$3,trace_data__46787__auto____$2,show_QMARK_,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (a_102904__$1){
var event = (function (){var trace_data__46787__auto____$4 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102904__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"event","event",1941966969,null)], null);
if((function (){var G__103060 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103060 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103060.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103060.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103060);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103060);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$4);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$4,trace_data__46787__auto____$3,trace_data__46787__auto____$2,show_QMARK_,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102904__$1;
if((function (){var G__103061 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103061 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103061.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103061.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103061);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103061);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$4,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$4,trace_data__46787__auto____$3,trace_data__46787__auto____$2,show_QMARK_,trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__103062 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103062 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103062.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103062.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103062);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103062);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103063){if((e103063 instanceof Object)){
var e__46790__auto__ = e103063;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$4,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103063;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (event,trace_data__46787__auto____$3,trace_data__46787__auto____$2,show_QMARK_,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){

cljs.core.reset_BANG_.call(null,show_QMARK_,false);

return false;
});})(event,trace_data__46787__auto____$3,trace_data__46787__auto____$2,show_QMARK_,trace_data__46787__auto____$1,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto____$3,trace_data__46787__auto____$2,show_QMARK_,trace_data__46787__auto____$1,trace_data__46787__auto__))
.call(null,a_102904);
if((function (){var G__103064 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103064 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103064.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103064.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103064);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103064);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$3,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$3,trace_data__46787__auto____$2,show_QMARK_,trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__103065 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103065 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103065.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103065.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103065);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103065);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103066){if((e103066 instanceof Object)){
var e__46790__auto__ = e103066;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$3,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103066;

}
}} else {
return f__46788__auto__.call(null);
}
});})(trace_data__46787__auto____$2,show_QMARK_,trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__103067 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103067 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103067.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103067.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103067);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103067);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,show_QMARK_,trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__103068 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103068 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103068.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103068.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103068);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103068);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103069){if((e103069 instanceof Object)){
var e__46790__auto__ = e103069;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103069;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var process_cancel = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null),false),false),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"process-cancel","process-cancel",260280369,null)], null);
if((function (){var G__103070 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103070 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103070.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103070.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103070);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103070);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,show_QMARK_,process_ok,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto____$2,show_QMARK_,process_ok,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function cardy$views$deck_modal_$_fn_102905(a_102906){
var trace_data__46787__auto____$3 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fn_102905","fn_102905",-1429036668,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null),false),false)], null);
if((function (){var G__103071 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103071 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103071.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103071.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103071);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103071);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$3);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$3,trace_data__46787__auto____$2,show_QMARK_,process_ok,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto____$3,trace_data__46787__auto____$2,show_QMARK_,process_ok,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (a_102906__$1){
var event = (function (){var trace_data__46787__auto____$4 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102906__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"event","event",1941966969,null)], null);
if((function (){var G__103072 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103072 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103072.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103072.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103072);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103072);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$4);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$4,trace_data__46787__auto____$3,trace_data__46787__auto____$2,show_QMARK_,process_ok,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102906__$1;
if((function (){var G__103073 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103073 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103073.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103073.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103073);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103073);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$4,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$4,trace_data__46787__auto____$3,trace_data__46787__auto____$2,show_QMARK_,process_ok,trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__103074 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103074 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103074.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103074.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103074);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103074);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103075){if((e103075 instanceof Object)){
var e__46790__auto__ = e103075;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$4,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103075;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (event,trace_data__46787__auto____$3,trace_data__46787__auto____$2,show_QMARK_,process_ok,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){

cljs.core.reset_BANG_.call(null,show_QMARK_,false);

return false;
});})(event,trace_data__46787__auto____$3,trace_data__46787__auto____$2,show_QMARK_,process_ok,trace_data__46787__auto____$1,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto____$3,trace_data__46787__auto____$2,show_QMARK_,process_ok,trace_data__46787__auto____$1,trace_data__46787__auto__))
.call(null,a_102906);
if((function (){var G__103076 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103076 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103076.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103076.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103076);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103076);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$3,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$3,trace_data__46787__auto____$2,show_QMARK_,process_ok,trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__103077 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103077 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103077.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103077.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103077);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103077);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103078){if((e103078 instanceof Object)){
var e__46790__auto__ = e103078;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$3,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103078;

}
}} else {
return f__46788__auto__.call(null);
}
});})(trace_data__46787__auto____$2,show_QMARK_,process_ok,trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__103079 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103079 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103079.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103079.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103079);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103079);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,show_QMARK_,process_ok,trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__103080 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103080 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103080.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103080.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103080);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103080);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103081){if((e103081 instanceof Object)){
var e__46790__auto__ = e103081;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103081;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (show_QMARK_,process_ok,process_cancel,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function cardy$views$deck_modal_$_fn_102907(){
var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fn_102907","fn_102907",-1875599053,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","button","re-com/button",1889828023,null),new cljs.core.Keyword(null,"label","label",1718410804),"Decks",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-info",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null),true))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null)),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","modal-panel","re-com/modal-panel",-1010230917,null),new cljs.core.Keyword(null,"backdrop-color","backdrop-color",1921200717),"grey",new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653),0.4,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deck-modal-dialog","deck-modal-dialog",-2084528159,null),new cljs.core.Symbol(null,"process-ok","process-ok",1636117648,null),new cljs.core.Symbol(null,"process-cancel","process-cancel",260280369,null)], null)], null))], null))], null);
if((function (){var G__103082 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103082 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103082.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103082.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103082);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103082);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,show_QMARK_,process_ok,process_cancel,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto____$2,show_QMARK_,process_ok,process_cancel,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto____$2,show_QMARK_,process_ok,process_cancel,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Decks",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-info",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (trace_data__46787__auto____$2,show_QMARK_,process_ok,process_cancel,trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
return cljs.core.reset_BANG_.call(null,show_QMARK_,true);
});})(trace_data__46787__auto____$2,show_QMARK_,process_ok,process_cancel,trace_data__46787__auto____$1,trace_data__46787__auto__))
], null),(cljs.core.truth_(cljs.core.deref.call(null,show_QMARK_))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"backdrop-color","backdrop-color",1921200717),"grey",new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653),0.4,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.deck_modal_dialog,process_ok,process_cancel], null)], null):null)], null);
});})(trace_data__46787__auto____$2,show_QMARK_,process_ok,process_cancel,trace_data__46787__auto____$1,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto____$2,show_QMARK_,process_ok,process_cancel,trace_data__46787__auto____$1,trace_data__46787__auto__))
.call(null);
if((function (){var G__103083 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103083 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103083.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103083.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103083);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103083);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,show_QMARK_,process_ok,process_cancel,trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__103084 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103084 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103084.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103084.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103084);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103084);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103085){if((e103085 instanceof Object)){
var e__46790__auto__ = e103085;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103085;

}
}} else {
return f__46788__auto__.call(null);
}
});
;})(show_QMARK_,process_ok,process_cancel,trace_data__46787__auto____$1,trace_data__46787__auto__))
})();
if((function (){var G__103086 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103086 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103086.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103086.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103086);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103086);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__103087 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103087 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103087.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103087.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103087);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103087);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103088){if((e103088 instanceof Object)){
var e__46790__auto__ = e103088;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103088;

}
}} else {
return f__46788__auto__.call(null);
}
});})(trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null);
if((function (){var G__103089 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103089 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103089.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103089.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103089);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103089);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__103090 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103090 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103090.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103090.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103090);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103090);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103091){if((e103091 instanceof Object)){
var e__46790__auto__ = e103091;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103091;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.views.visualization = (function cardy$views$visualization(){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"visualization","visualization",960832317,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"visualization","visualization",960832317,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","v-box","re-com/v-box",-878861859,null),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"15px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Cards: ",cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","cards","cardy.subs/cards",1976170110)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Number of cards: ",cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","cards","cardy.subs/cards",1976170110)], null))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Excluded cards: ",cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","excluded","cardy.subs/excluded",839965248)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Removed cards: ",cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","removed","cardy.subs/removed",-1055681562)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Available decks: ",cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","decks","cardy.subs/decks",-1123699440)], null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Number of available decks: ",cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","decks","cardy.subs/decks",-1123699440)], null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Current deck is: ",cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current-deck","cardy.subs/current-deck",73777723)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"show-decks","show-decks",365168945,null)], null)], null)], null))], null);
if((function (){var G__103092 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103092 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103092.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103092.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103092);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103092);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"15px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Cards: ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","cards","cardy.subs/cards",1976170110)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Number of cards: ",cljs.core.count.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","cards","cardy.subs/cards",1976170110)], null))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Excluded cards: ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","excluded","cardy.subs/excluded",839965248)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Removed cards: ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","removed","cardy.subs/removed",-1055681562)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Available decks: ",cljs.core.map.call(null,cljs.core.str,cljs.core.keys.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","decks","cardy.subs/decks",-1123699440)], null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Number of available decks: ",cljs.core.count.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","decks","cardy.subs/decks",-1123699440)], null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Current deck is: ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current-deck","cardy.subs/current-deck",73777723)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.show_decks], null)], null)], null);
});})(trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null);
if((function (){var G__103093 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103093 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103093.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103093.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103093);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103093);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__103094 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103094 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103094.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103094.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103094);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103094);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103095){if((e103095 instanceof Object)){
var e__46790__auto__ = e103095;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103095;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.views.card_review = (function cardy$views$card_review(){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"card-review","card-review",1233966097,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"card-review","card-review",1233966097,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","h-box","re-com/h-box",434843262,null),new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exclude-current-card","exclude-current-card",1872608160,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flip-button","flip-button",1026925109,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"next-button","next-button",-1991108350,null)], null)], null)], null))], null);
if((function (){var G__103096 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103096 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103096.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103096.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103096);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103096);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.exclude_current_card], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.flip_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.next_button], null)], null)], null);
});})(trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null);
if((function (){var G__103097 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103097 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103097.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103097.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103097);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103097);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__103098 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103098 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103098.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103098.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103098);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103098);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103099){if((e103099 instanceof Object)){
var e__46790__auto__ = e103099;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103099;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.views.card_display = (function cardy$views$card_display(){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"card-display","card-display",-16911432,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"card-display","card-display",-16911432,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","h-box","re-com/h-box",434843262,null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","box","re-com/box",-983641330,null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"show-current-flag","show-current-flag",719877493,null)], null),new cljs.core.Keyword(null,"width","width",-384071477),"120px",new cljs.core.Keyword(null,"height","height",1025178622),"90px",new cljs.core.Keyword(null,"padding","padding",1660304693),"20px 10px 10px 10px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","box","re-com/box",-983641330,null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"show-current-phrase","show-current-phrase",778907763,null)], null),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"padding","padding",1660304693),"20px"], null)], null)], null))], null);
if((function (){var G__103100 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103100 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103100.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103100.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103100);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103100);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.show_current_flag], null),new cljs.core.Keyword(null,"width","width",-384071477),"120px",new cljs.core.Keyword(null,"height","height",1025178622),"90px",new cljs.core.Keyword(null,"padding","padding",1660304693),"20px 10px 10px 10px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.show_current_phrase], null),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"padding","padding",1660304693),"20px"], null)], null)], null);
});})(trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null);
if((function (){var G__103101 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103101 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103101.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103101.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103101);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103101);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__103102 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103102 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103102.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103102.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103102);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103102);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103103){if((e103103 instanceof Object)){
var e__46790__auto__ = e103103;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103103;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.views.card_manipulation = (function cardy$views$card_manipulation(){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"card-manipulation","card-manipulation",471378428,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"card-manipulation","card-manipulation",471378428,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","h-box","re-com/h-box",434843262,null),new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"add-card","add-card",781628592,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"remove-current-card","remove-current-card",1556129682,null)], null)], null)], null))], null);
if((function (){var G__103104 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103104 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103104.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103104.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103104);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103104);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.add_card], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.remove_current_card], null)], null)], null);
});})(trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null);
if((function (){var G__103105 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103105 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103105.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103105.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103105);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103105);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__103106 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103106 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103106.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103106.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103106);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103106);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103107){if((e103107 instanceof Object)){
var e__46790__auto__ = e103107;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103107;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.views.main_components = (function cardy$views$main_components(){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"main-components","main-components",1262700605,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"main-components","main-components",1262700605,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","v-box","re-com/v-box",-878861859,null),new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"card-display","card-display",-16911432,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"card-review","card-review",1233966097,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"card-manipulation","card-manipulation",471378428,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"push-decks","push-decks",-1653176624,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deck-modal","deck-modal",507707298,null)], null)], null)], null))], null);
if((function (){var G__103108 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103108 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103108.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103108.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103108);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103108);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.card_display], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.card_review], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.card_manipulation], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.push_decks], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.deck_modal], null)], null)], null);
});})(trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null);
if((function (){var G__103109 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103109 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103109.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103109.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103109);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103109);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__103110 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103110 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103110.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103110.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103110);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103110);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103111){if((e103111 instanceof Object)){
var e__46790__auto__ = e103111;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103111;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.views.cardy_app = (function cardy$views$cardy_app(){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.views","cardy.views",1776800612,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cardy-app","cardy-app",1371044168,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"cardy-app","cardy-app",1371044168,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("re-com","v-box","re-com/v-box",-878861859,null),new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"gap","gap",80255254),"50px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"main-components","main-components",1262700605,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"visualization","visualization",960832317,null)], null)], null)], null))], null);
if((function (){var G__103112 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103112 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103112.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__103112.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103112);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__103112);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto__){
return (function (){

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"gap","gap",80255254),"50px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.main_components], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.visualization], null)], null)], null);
});})(trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null);
if((function (){var G__103113 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103113 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103113.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__103113.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103113);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__103113);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__103114 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold");
if(!((G__103114 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__103114.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__103114.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103114);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__103114);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e103115){if((e103115 instanceof Object)){
var e__46790__auto__ = e103115;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"gold"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e103115;

}
}} else {
return f__46788__auto__.call(null);
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
return (function (p1__102890_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","change-deck","cardy.events/change-deck",-1660930769),cljs.core.reset_BANG_.call(null,selected_deck,p1__102890_SHARP_)], null));
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
return (function (p1__102891_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-card","cardy.events/add-card",-479246421),cljs.core.reset_BANG_.call(null,text_val,p1__102891_SHARP_)], null));
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
return (function (p1__102893_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-deck","cardy.events/add-deck",1748167474),cljs.core.reset_BANG_.call(null,text_val,p1__102893_SHARP_)], null));
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
return (function (p1__102894_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","remove-deck","cardy.events/remove-deck",-1965096554),cljs.core.reset_BANG_.call(null,text_val,p1__102894_SHARP_)], null));
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
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"15px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Cards: ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","cards","cardy.subs/cards",1976170110)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Number of cards: ",cljs.core.count.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","cards","cardy.subs/cards",1976170110)], null))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Excluded cards: ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","excluded","cardy.subs/excluded",839965248)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Removed cards: ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","removed","cardy.subs/removed",-1055681562)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Available decks: ",cljs.core.map.call(null,cljs.core.str,cljs.core.keys.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","decks","cardy.subs/decks",-1123699440)], null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Number of available decks: ",cljs.core.count.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","decks","cardy.subs/decks",-1123699440)], null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Current deck is: ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current-deck","cardy.subs/current-deck",73777723)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.show_decks], null)], null)], null);
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
