// Compiled by ClojureScript 1.9.946 {}
goog.provide('cardy.events');
goog.require('cljs.core');
goog.require('cardy.db');
goog.require('re_frame.core');
goog.require('clairvoyant.core');
goog.require('re_frame_tracer.core');
goog.require('ajax.core');
if(clairvoyant.core.devmode){
cardy.events.placeholder_card = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),"This deck has no cards yet. Add one!",new cljs.core.Keyword(null,"back","back",-417520012),"You can flip me. But you really should add a card!"], null);

cardy.events.placeholder_deck = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder-deck","placeholder-deck",1147906209),cljs.core.list(new cljs.core.Symbol(null,"placeholder-card","placeholder-card",-941510735,null))], null);

cardy.events.add_back_excluded = (function cardy$events$add_back_excluded(a_102221){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"add-back-excluded","add-back-excluded",-497646162,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"add-back-excluded","add-back-excluded",-497646162,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"excluded","excluded",-715952088),cljs.core.PersistentHashSet.EMPTY))], null);
if((function (){var G__102273 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102273 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102273.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102273.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102273);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102273);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102221__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102221__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102274 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102274 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102274.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102274.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102274);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102274);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102221__$1;
if((function (){var G__102275 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102275 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102275.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102275.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102275);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102275);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102276 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102276 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102276.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102276.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102276);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102276);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102277){if((e102277 instanceof Object)){
var e__46790__auto__ = e102277;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102277;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,trace_data__46787__auto__){
return (function (){

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"excluded","excluded",-715952088),cljs.core.PersistentHashSet.EMPTY);
});})(db,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102221);
if((function (){var G__102278 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102278 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102278.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102278.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102278);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102278);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102279 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102279 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102279.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102279.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102279);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102279);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102280){if((e102280 instanceof Object)){
var e__46790__auto__ = e102280;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102280;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.events.input_to_keyword = (function cardy$events$input_to_keyword(a_102222){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"input-to-keyword","input-to-keyword",-410870276,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a-string","a-string",-821119238,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"input-to-keyword","input-to-keyword",-410870276,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a-string","a-string",-821119238,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"a-string in input-to-keyword is: ",new cljs.core.Symbol(null,"a-string","a-string",-821119238,null)),cljs.core.list(new cljs.core.Symbol(null,"keyword","keyword",-1843046022,null),cljs.core.list(new cljs.core.Symbol("clojure.string","trim","clojure.string/trim",-1498124613,null),new cljs.core.Symbol(null,"a-string","a-string",-821119238,null)))))], null);
if((function (){var G__102281 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102281 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102281.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102281.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102281);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102281);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102222__$1){
var a_string = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102222__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"a-string","a-string",-821119238,null)], null);
if((function (){var G__102282 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102282 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102282.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102282.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102282);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102282);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102222__$1;
if((function (){var G__102283 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102283 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102283.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102283.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102283);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102283);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102284 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102284 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102284.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102284.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102284);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102284);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102285){if((e102285 instanceof Object)){
var e__46790__auto__ = e102285;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102285;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (a_string,trace_data__46787__auto__){
return (function (){

console.log("a-string in input-to-keyword is: ",a_string);

return cljs.core.keyword.call(null,clojure.string.trim.call(null,a_string));
});})(a_string,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102222);
if((function (){var G__102286 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102286 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102286.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102286.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102286);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102286);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102287 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102287 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102287.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102287.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102287);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102287);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102288){if((e102288 instanceof Object)){
var e__46790__auto__ = e102288;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102288;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.events.input_to_card = (function cardy$events$input_to_card(a_102223){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"input-to-card","input-to-card",-1851962871,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a-string","a-string",-821119238,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"input-to-card","input-to-card",-1851962871,null),"Accepts input (a string), returns a card (a map).",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a-string","a-string",-821119238,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),"a-string in input-to-card: ",new cljs.core.Symbol(null,"a-string","a-string",-821119238,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"words","words",-729502768,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol("clojure.string","trim","clojure.string/trim",-1498124613,null),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"a-string","a-string",-821119238,null),/;/))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"words","words",-729502768,null)),new cljs.core.Keyword(null,"back","back",-417520012),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"words","words",-729502768,null))], null))))], null);
if((function (){var G__102289 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102289 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102289.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102289.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102289);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102289);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102223__$1){
var a_string = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102223__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"a-string","a-string",-821119238,null)], null);
if((function (){var G__102290 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102290 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102290.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102290.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102290);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102290);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102223__$1;
if((function (){var G__102291 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102291 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102291.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102291.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102291);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102291);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102292 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102292 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102292.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102292.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102292);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102292);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102293){if((e102293 instanceof Object)){
var e__46790__auto__ = e102293;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102293;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (a_string,trace_data__46787__auto__){
return (function (){

cljs.core.println.call(null,"a-string in input-to-card: ",a_string);

var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"words","words",-729502768,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol("clojure.string","trim","clojure.string/trim",-1498124613,null),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"a-string","a-string",-821119238,null),/;/))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"words","words",-729502768,null)),new cljs.core.Keyword(null,"back","back",-417520012),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"words","words",-729502768,null))], null))], null);
if((function (){var G__102294 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102294 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102294.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102294.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102294);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102294);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,a_string,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = (function (){var words = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol("clojure.string","trim","clojure.string/trim",-1498124613,null),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"a-string","a-string",-821119238,null),/;/)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"words","words",-729502768,null)], null);
if((function (){var G__102295 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102295 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102295.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102295.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102295);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102295);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,trace_data__46787__auto____$1,a_string,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,a_string,/;/));
if((function (){var G__102296 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102296 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102296.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102296.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102296);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102296);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,trace_data__46787__auto____$1,a_string,trace_data__46787__auto__))
;
if((function (){var G__102297 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102297 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102297.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102297.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102297);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102297);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102298){if((e102298 instanceof Object)){
var e__46790__auto__ = e102298;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102298;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),cljs.core.first.call(null,words),new cljs.core.Keyword(null,"back","back",-417520012),cljs.core.second.call(null,words)], null);
})();
if((function (){var G__102299 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102299 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102299.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102299.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102299);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102299);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,a_string,trace_data__46787__auto__))
;
if((function (){var G__102300 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102300 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102300.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102300.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102300);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102300);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102301){if((e102301 instanceof Object)){
var e__46790__auto__ = e102301;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102301;

}
}} else {
return f__46788__auto__.call(null);
}
});})(a_string,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102223);
if((function (){var G__102302 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102302 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102302.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102302.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102302);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102302);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102303 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102303 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102303.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102303.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102303);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102303);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102304){if((e102304 instanceof Object)){
var e__46790__auto__ = e102304;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102304;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.events.dissoc_in = (function cardy$events$dissoc_in(a_102225,a_102226){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"dissoc-in","dissoc-in",-249353279,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"p__102224","p__102224",-1994533620,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"dissoc-in","dissoc-in",-249353279,null),"Dissociates an entry from a nested associative structure returning a new\n  nested structure. keys is a sequence of keys. Any empty maps that result\n  will not be present in the new structure.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"keys","keys",-1586012071,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nextmap","nextmap",236312542,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null))], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newmap","newmap",1211861451,null),cljs.core.list(new cljs.core.Symbol(null,"dissoc-in","dissoc-in",-249353279,null),new cljs.core.Symbol(null,"nextmap","nextmap",236312542,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"newmap","newmap",1211861451,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"newmap","newmap",1211861451,null)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null)))),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null))))], null);
if((function (){var G__102305 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102305 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102305.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102305.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102305);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102305);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102225__$1,a_102226__$1){
var m = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102225__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null);
if((function (){var G__102306 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102306 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102306.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102306.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102306);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102306);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102225__$1;
if((function (){var G__102307 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102307 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102307.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102307.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102307);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102307);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102308 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102308 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102308.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102308.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102308);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102308);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102309){if((e102309 instanceof Object)){
var e__46790__auto__ = e102309;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102309;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var p__102224 = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102226__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p__102224","p__102224",-1994533620,null)], null);
if((function (){var G__102310 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102310 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102310.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102310.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102310);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102310);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,m,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102226__$1;
if((function (){var G__102311 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102311 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102311.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102311.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102311);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102311);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,m,trace_data__46787__auto__))
;
if((function (){var G__102312 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102312 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102312.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102312.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102312);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102312);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102313){if((e102313 instanceof Object)){
var e__46790__auto__ = e102313;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102313;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (m,p__102224,trace_data__46787__auto__){
return (function (){

var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"keys","keys",-1586012071,null)], null),new cljs.core.Symbol(null,"p__102224","p__102224",-1994533620,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nextmap","nextmap",236312542,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null))], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newmap","newmap",1211861451,null),cljs.core.list(new cljs.core.Symbol(null,"dissoc-in","dissoc-in",-249353279,null),new cljs.core.Symbol(null,"nextmap","nextmap",236312542,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"newmap","newmap",1211861451,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"newmap","newmap",1211861451,null)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null)))),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null))))], null);
if((function (){var G__102314 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102314 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102314.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102314.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102314);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102314);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,m,p__102224,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = (function (){var vec__102315 = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Symbol(null,"p__102224","p__102224",-1994533620,null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"keys","keys",-1586012071,null)], null)], null);
if((function (){var G__102318 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102318 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102318.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102318.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102318);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102318);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,trace_data__46787__auto____$1,m,p__102224,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = p__102224;
if((function (){var G__102319 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102319 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102319.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102319.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102319);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102319);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,trace_data__46787__auto____$1,m,p__102224,trace_data__46787__auto__))
;
if((function (){var G__102320 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102320 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102320.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102320.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102320);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102320);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102321){if((e102321 instanceof Object)){
var e__46790__auto__ = e102321;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102321;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var seq__102316 = cljs.core.seq.call(null,vec__102315);
var first__102317 = cljs.core.first.call(null,seq__102316);
var seq__102316__$1 = cljs.core.next.call(null,seq__102316);
var k = first__102317;
var ks = seq__102316__$1;
var keys = vec__102315;
if(ks){
var temp__4655__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var nextmap = temp__4655__auto__;
var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newmap","newmap",1211861451,null),cljs.core.list(new cljs.core.Symbol(null,"dissoc-in","dissoc-in",-249353279,null),new cljs.core.Symbol(null,"nextmap","nextmap",236312542,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"newmap","newmap",1211861451,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"newmap","newmap",1211861451,null)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null))))], null);
if((function (){var G__102322 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102322 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102322.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102322.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102322);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102322);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,nextmap,temp__4655__auto__,vec__102315,seq__102316,first__102317,seq__102316__$1,k,ks,keys,trace_data__46787__auto____$1,m,p__102224,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = (function (){var newmap = (function (){var trace_data__46787__auto____$3 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol(null,"dissoc-in","dissoc-in",-249353279,null),new cljs.core.Symbol(null,"nextmap","nextmap",236312542,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"newmap","newmap",1211861451,null)], null);
if((function (){var G__102323 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102323 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102323.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102323.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102323);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102323);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$3);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$3,trace_data__46787__auto____$2,nextmap,temp__4655__auto__,vec__102315,seq__102316,first__102317,seq__102316__$1,k,ks,keys,trace_data__46787__auto____$1,m,p__102224,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = cardy.events.dissoc_in.call(null,nextmap,ks);
if((function (){var G__102324 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102324 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102324.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102324.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102324);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102324);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$3,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$3,trace_data__46787__auto____$2,nextmap,temp__4655__auto__,vec__102315,seq__102316,first__102317,seq__102316__$1,k,ks,keys,trace_data__46787__auto____$1,m,p__102224,trace_data__46787__auto__))
;
if((function (){var G__102325 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102325 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102325.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102325.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102325);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102325);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102326){if((e102326 instanceof Object)){
var e__46790__auto__ = e102326;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$3,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102326;

}
}} else {
return f__46788__auto__.call(null);
}
})();
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
})();
if((function (){var G__102327 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102327 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102327.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102327.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102327);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102327);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,nextmap,temp__4655__auto__,vec__102315,seq__102316,first__102317,seq__102316__$1,k,ks,keys,trace_data__46787__auto____$1,m,p__102224,trace_data__46787__auto__))
;
if((function (){var G__102328 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102328 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102328.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102328.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102328);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102328);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102329){if((e102329 instanceof Object)){
var e__46790__auto__ = e102329;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102329;

}
}} else {
return f__46788__auto__.call(null);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
})();
if((function (){var G__102330 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102330 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102330.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102330.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102330);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102330);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,m,p__102224,trace_data__46787__auto__))
;
if((function (){var G__102331 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102331 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102331.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102331.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102331);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102331);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102332){if((e102332 instanceof Object)){
var e__46790__auto__ = e102332;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102332;

}
}} else {
return f__46788__auto__.call(null);
}
});})(m,p__102224,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102225,a_102226);
if((function (){var G__102333 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102333 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102333.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102333.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102333);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102333);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102334 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102334 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102334.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102334.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102334);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102334);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102335){if((e102335 instanceof Object)){
var e__46790__auto__ = e102335;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102335;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.events.drop_nth = (function cardy$events$drop_nth(a_102230,a_102231){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"drop-nth","drop-nth",-1477008594,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"drop-nth","drop-nth",-1477008594,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null),cljs.core.list(new cljs.core.Symbol(null,"keep-indexed","keep-indexed",-2020916352,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__102217#","p1__102217#",467384606,null),new cljs.core.Symbol(null,"p2__102218#","p2__102218#",2030994729,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"p1__102217#","p1__102217#",467384606,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)),new cljs.core.Symbol(null,"p2__102218#","p2__102218#",2030994729,null))),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)))], null);
if((function (){var G__102336 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102336 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102336.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102336.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102336);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102336);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102230__$1,a_102231__$1){
var n = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102230__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"n","n",-2092305744,null)], null);
if((function (){var G__102337 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102337 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102337.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102337.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102337);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102337);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102230__$1;
if((function (){var G__102338 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102338 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102338.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102338.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102338);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102338);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102339 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102339 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102339.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102339.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102339);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102339);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102340){if((e102340 instanceof Object)){
var e__46790__auto__ = e102340;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102340;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var coll = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102231__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
if((function (){var G__102341 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102341 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102341.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102341.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102341);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102341);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,n,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102231__$1;
if((function (){var G__102342 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102342 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102342.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102342.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102342);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102342);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,n,trace_data__46787__auto__))
;
if((function (){var G__102343 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102343 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102343.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102343.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102343);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102343);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102344){if((e102344 instanceof Object)){
var e__46790__auto__ = e102344;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102344;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (n,coll,trace_data__46787__auto__){
return (function (){

return cljs.core.keep_indexed.call(null,((function (n,coll,trace_data__46787__auto__){
return (function cardy$events$drop_nth_$_fn_102227(a_102228,a_102229){
var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fn_102227","fn_102227",-169775778,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__102217#","p1__102217#",467384606,null),new cljs.core.Symbol(null,"p2__102218#","p2__102218#",2030994729,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__102217#","p1__102217#",467384606,null),new cljs.core.Symbol(null,"p2__102218#","p2__102218#",2030994729,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"p1__102217#","p1__102217#",467384606,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)),new cljs.core.Symbol(null,"p2__102218#","p2__102218#",2030994729,null)))], null);
if((function (){var G__102345 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102345 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102345.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102345.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102345);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102345);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,n,coll,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto____$1,n,coll,trace_data__46787__auto__){
return (function (a_102228__$1,a_102229__$1){
var p1__102217_SHARP_ = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102228__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__102217#","p1__102217#",467384606,null)], null);
if((function (){var G__102346 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102346 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102346.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102346.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102346);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102346);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,trace_data__46787__auto____$1,n,coll,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102228__$1;
if((function (){var G__102347 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102347 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102347.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102347.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102347);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102347);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,trace_data__46787__auto____$1,n,coll,trace_data__46787__auto__))
;
if((function (){var G__102348 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102348 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102348.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102348.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102348);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102348);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102349){if((e102349 instanceof Object)){
var e__46790__auto__ = e102349;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102349;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var p2__102218_SHARP_ = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102229__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p2__102218#","p2__102218#",2030994729,null)], null);
if((function (){var G__102350 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102350 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102350.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102350.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102350);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102350);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,p1__102217_SHARP_,trace_data__46787__auto____$1,n,coll,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102229__$1;
if((function (){var G__102351 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102351 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102351.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102351.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102351);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102351);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,p1__102217_SHARP_,trace_data__46787__auto____$1,n,coll,trace_data__46787__auto__))
;
if((function (){var G__102352 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102352 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102352.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102352.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102352);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102352);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102353){if((e102353 instanceof Object)){
var e__46790__auto__ = e102353;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102353;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (p1__102217_SHARP_,p2__102218_SHARP_,trace_data__46787__auto____$1,n,coll,trace_data__46787__auto__){
return (function (){

if(cljs.core.not_EQ_.call(null,p1__102217_SHARP_,n)){
return p2__102218_SHARP_;
} else {
return null;
}
});})(p1__102217_SHARP_,p2__102218_SHARP_,trace_data__46787__auto____$1,n,coll,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto____$1,n,coll,trace_data__46787__auto__))
.call(null,a_102228,a_102229);
if((function (){var G__102354 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102354 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102354.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102354.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102354);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102354);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,n,coll,trace_data__46787__auto__))
;
if((function (){var G__102355 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102355 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102355.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102355.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102355);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102355);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102356){if((e102356 instanceof Object)){
var e__46790__auto__ = e102356;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102356;

}
}} else {
return f__46788__auto__.call(null);
}
});})(n,coll,trace_data__46787__auto__))
,coll);
});})(n,coll,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102230,a_102231);
if((function (){var G__102357 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102357 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102357.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102357.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102357);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102357);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102358 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102358 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102358.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102358.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102358);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102358);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102359){if((e102359 instanceof Object)){
var e__46790__auto__ = e102359;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102359;

}
}} else {
return f__46788__auto__.call(null);
}
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","initialize-test-db","cardy.events/initialize-test-db",1843213397),(function cardy$events$fn_102232(a_102233,a_102234){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fn_102232","fn_102232",-949192143,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Symbol("db","test-db","db/test-db",-1092017922,null))], null);
if((function (){var G__102360 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102360 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102360.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102360.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102360);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102360);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102233__$1,a_102234__$1){
var _ = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102233__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
if((function (){var G__102361 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102361 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102361.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102361.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102361);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102361);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102233__$1;
if((function (){var G__102362 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102362 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102362.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102362.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102362);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102362);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102363 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102363 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102363.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102363.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102363);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102363);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102364){if((e102364 instanceof Object)){
var e__46790__auto__ = e102364;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102364;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var ___$1 = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102234__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
if((function (){var G__102365 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102365 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102365.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102365.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102365);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102365);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,_,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102234__$1;
if((function (){var G__102366 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102366 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102366.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102366.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102366);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102366);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,_,trace_data__46787__auto__))
;
if((function (){var G__102367 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102367 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102367.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102367.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102367);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102367);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102368){if((e102368 instanceof Object)){
var e__46790__auto__ = e102368;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102368;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (_,___$1,trace_data__46787__auto__){
return (function (){

return cardy.db.test_db;
});})(_,___$1,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102233,a_102234);
if((function (){var G__102369 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102369 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102369.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102369.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102369);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102369);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102370 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102370 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102370.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102370.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102370);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102370);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102371){if((e102371 instanceof Object)){
var e__46790__auto__ = e102371;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102371;

}
}} else {
return f__46788__auto__.call(null);
}
}));

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","initialize-db","cardy.events/initialize-db",1650796766),(function cardy$events$fn_102235(a_102236,a_102237){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fn_102235","fn_102235",627221409,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null))], null);
if((function (){var G__102372 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102372 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102372.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102372.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102372);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102372);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102236__$1,a_102237__$1){
var _ = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102236__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
if((function (){var G__102373 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102373 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102373.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102373.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102373);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102373);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102236__$1;
if((function (){var G__102374 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102374 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102374.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102374.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102374);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102374);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102375 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102375 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102375.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102375.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102375);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102375);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102376){if((e102376 instanceof Object)){
var e__46790__auto__ = e102376;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102376;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var ___$1 = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102237__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
if((function (){var G__102377 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102377 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102377.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102377.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102377);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102377);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,_,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102237__$1;
if((function (){var G__102378 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102378 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102378.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102378.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102378);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102378);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,_,trace_data__46787__auto__))
;
if((function (){var G__102379 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102379 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102379.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102379.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102379);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102379);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102380){if((e102380 instanceof Object)){
var e__46790__auto__ = e102380;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102380;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (_,___$1,trace_data__46787__auto__){
return (function (){

return cardy.db.default_db;
});})(_,___$1,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102236,a_102237);
if((function (){var G__102381 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102381 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102381.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102381.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102381);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102381);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102382 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102382 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102382.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102382.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102382);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102382);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102383){if((e102383 instanceof Object)){
var e__46790__auto__ = e102383;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102383;

}
}} else {
return f__46788__auto__.call(null);
}
}));

re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("cardy.events","pull-decks","cardy.events/pull-decks",-274600551),(function cardy$events$pull_deck_handler(a_102238,a_102239){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"pull-deck-handler","pull-deck-handler",367093808,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cofx","cofx",-641232862,null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"pull-deck-handler","pull-deck-handler",367093808,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cofx","cofx",-641232862,null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pull-decks-fx","pull-decks-fx",-69608820),null], null))], null);
if((function (){var G__102384 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102384 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102384.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102384.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102384);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102384);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102238__$1,a_102239__$1){
var cofx = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102238__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"cofx","cofx",-641232862,null)], null);
if((function (){var G__102385 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102385 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102385.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102385.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102385);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102385);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102238__$1;
if((function (){var G__102386 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102386 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102386.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102386.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102386);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102386);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102387 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102387 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102387.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102387.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102387);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102387);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102388){if((e102388 instanceof Object)){
var e__46790__auto__ = e102388;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102388;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var event = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102239__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"event","event",1941966969,null)], null);
if((function (){var G__102389 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102389 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102389.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102389.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102389);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102389);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,cofx,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102239__$1;
if((function (){var G__102390 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102390 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102390.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102390.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102390);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102390);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,cofx,trace_data__46787__auto__))
;
if((function (){var G__102391 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102391 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102391.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102391.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102391);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102391);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102392){if((e102392 instanceof Object)){
var e__46790__auto__ = e102392;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102392;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (cofx,event,trace_data__46787__auto__){
return (function (){

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pull-decks-fx","pull-decks-fx",-69608820),null], null);
});})(cofx,event,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102238,a_102239);
if((function (){var G__102393 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102393 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102393.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102393.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102393);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102393);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102394 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102394 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102394.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102394.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102394);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102394);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102395){if((e102395 instanceof Object)){
var e__46790__auto__ = e102395;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102395;

}
}} else {
return f__46788__auto__.call(null);
}
}));

re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"pull-decks-fx","pull-decks-fx",-69608820),(function cardy$events$pull_decks_ajax(){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"pull-decks-ajax","pull-decks-ajax",-613793070,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"pull-decks-ajax","pull-decks-ajax",-613793070,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"GET","GET",-917844743,null),"/pull-decks",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__102219#","p1__102219#",-812160124,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch","re-frame/dispatch",1277438733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","set-decks","cardy.events/set-decks",1797217231),new cljs.core.Symbol(null,"p1__102219#","p1__102219#",-812160124,null)], null)))], null)))], null);
if((function (){var G__102396 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102396 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102396.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102396.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102396);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102396);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (){
return ((function (trace_data__46787__auto__){
return (function (){

return ajax.core.GET.call(null,"/pull-decks",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (trace_data__46787__auto__){
return (function (p1__102219_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","set-decks","cardy.events/set-decks",1797217231),p1__102219_SHARP_], null));
});})(trace_data__46787__auto__))
], null));
});})(trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null);
if((function (){var G__102397 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102397 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102397.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102397.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102397);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102397);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102398 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102398 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102398.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102398.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102398);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102398);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102399){if((e102399 instanceof Object)){
var e__46790__auto__ = e102399;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102399;

}
}} else {
return f__46788__auto__.call(null);
}
}));

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","set-decks","cardy.events/set-decks",1797217231),(function cardy$events$set_decks_handler(a_102240,a_102241){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"set-decks-handler","set-decks-handler",-1838805387,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"decks","decks",-99773969,null)], null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"set-decks-handler","set-decks-handler",-1838805387,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"decks","decks",-99773969,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"decks","decks",-99773969,null)))], null);
if((function (){var G__102400 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102400 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102400.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102400.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102400);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102400);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102240__$1,a_102241__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102240__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102404 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102404 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102404.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102404.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102404);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102404);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102240__$1;
if((function (){var G__102405 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102405 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102405.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102405.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102405);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102405);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102406 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102406 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102406.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102406.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102406);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102406);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102407){if((e102407 instanceof Object)){
var e__46790__auto__ = e102407;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102407;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var vec__102401 = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102241__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"decks","decks",-99773969,null)], null)], null);
if((function (){var G__102408 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102408 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102408.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102408.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102408);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102408);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,db,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102241__$1;
if((function (){var G__102409 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102409 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102409.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102409.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102409);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102409);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,db,trace_data__46787__auto__))
;
if((function (){var G__102410 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102410 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102410.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102410.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102410);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102410);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102411){if((e102411 instanceof Object)){
var e__46790__auto__ = e102411;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102411;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var event_id_to_ignore = cljs.core.nth.call(null,vec__102401,(0),null);
var decks = cljs.core.nth.call(null,vec__102401,(1),null);
return ((function (db,vec__102401,event_id_to_ignore,decks,trace_data__46787__auto__){
return (function (){

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"decks","decks",-1740305496),decks);
});})(db,vec__102401,event_id_to_ignore,decks,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102240,a_102241);
if((function (){var G__102412 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102412 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102412.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102412.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102412);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102412);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102413 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102413 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102413.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102413.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102413);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102413);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102414){if((e102414 instanceof Object)){
var e__46790__auto__ = e102414;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102414;

}
}} else {
return f__46788__auto__.call(null);
}
}));

re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("cardy.events","push-decks","cardy.events/push-decks",-1525716789),(function cardy$events$push_decks_handler(a_102242,a_102243){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"push-decks-handler","push-decks-handler",-1539520733,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cofx","cofx",-641232862,null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"push-decks-handler","push-decks-handler",-1539520733,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cofx","cofx",-641232862,null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"push-decks-fx","push-decks-fx",473832076),cljs.core.list(new cljs.core.Keyword(null,"decks","decks",-1740305496),cljs.core.list(new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"cofx","cofx",-641232862,null)))], null))], null);
if((function (){var G__102415 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102415 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102415.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102415.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102415);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102415);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102242__$1,a_102243__$1){
var cofx = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102242__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"cofx","cofx",-641232862,null)], null);
if((function (){var G__102416 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102416 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102416.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102416.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102416);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102416);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102242__$1;
if((function (){var G__102417 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102417 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102417.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102417.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102417);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102417);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102418 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102418 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102418.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102418.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102418);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102418);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102419){if((e102419 instanceof Object)){
var e__46790__auto__ = e102419;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102419;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var event = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102243__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"event","event",1941966969,null)], null);
if((function (){var G__102420 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102420 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102420.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102420.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102420);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102420);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,cofx,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102243__$1;
if((function (){var G__102421 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102421 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102421.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102421.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102421);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102421);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,cofx,trace_data__46787__auto__))
;
if((function (){var G__102422 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102422 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102422.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102422.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102422);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102422);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102423){if((e102423 instanceof Object)){
var e__46790__auto__ = e102423;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102423;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (cofx,event,trace_data__46787__auto__){
return (function (){

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"push-decks-fx","push-decks-fx",473832076),new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx))], null);
});})(cofx,event,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102242,a_102243);
if((function (){var G__102424 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102424 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102424.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102424.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102424);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102424);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102425 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102425 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102425.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102425.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102425);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102425);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102426){if((e102426 instanceof Object)){
var e__46790__auto__ = e102426;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102426;

}
}} else {
return f__46788__auto__.call(null);
}
}));

re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"push-decks-fx","push-decks-fx",473832076),(function cardy$events$push_decks_ajax(a_102244){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"push-decks-ajax","push-decks-ajax",-321223881,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"decks","decks",-99773969,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"push-decks-ajax","push-decks-ajax",-321223881,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"decks","decks",-99773969,null)], null),cljs.core.list(new cljs.core.Symbol(null,"POST","POST",1750988384,null),"/push-decks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"decks","decks",-99773969,null)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__102220#","p1__102220#",-1793220554,null)], null),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"push-decks-ajax response was: ",new cljs.core.Symbol(null,"p1__102220#","p1__102220#",-1793220554,null)))], null)))], null);
if((function (){var G__102427 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102427 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102427.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102427.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102427);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102427);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102244__$1){
var decks = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102244__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"decks","decks",-99773969,null)], null);
if((function (){var G__102428 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102428 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102428.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102428.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102428);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102428);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102244__$1;
if((function (){var G__102429 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102429 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102429.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102429.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102429);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102429);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102430 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102430 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102430.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102430.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102430);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102430);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102431){if((e102431 instanceof Object)){
var e__46790__auto__ = e102431;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102431;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (decks,trace_data__46787__auto__){
return (function (){

return ajax.core.POST.call(null,"/push-decks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"decks","decks",-1740305496),decks], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (decks,trace_data__46787__auto__){
return (function (p1__102220_SHARP_){
return console.log("push-decks-ajax response was: ",p1__102220_SHARP_);
});})(decks,trace_data__46787__auto__))
], null));
});})(decks,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102244);
if((function (){var G__102432 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102432 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102432.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102432.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102432);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102432);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102433 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102433 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102433.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102433.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102433);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102433);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102434){if((e102434 instanceof Object)){
var e__46790__auto__ = e102434;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102434;

}
}} else {
return f__46788__auto__.call(null);
}
}));

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","flip","cardy.events/flip",484024968),(function cardy$events$flip(a_102245){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"flip","flip",-620564467,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"flip","flip",-620564467,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),cljs.core.list(new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),new cljs.core.Keyword(null,"front","front",-1523508988)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Keyword(null,"back","back",-417520012)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Keyword(null,"front","front",-1523508988)))))], null);
if((function (){var G__102435 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102435 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102435.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102435.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102435);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102435);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102245__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102245__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102436 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102436 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102436.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102436.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102436);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102436);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102245__$1;
if((function (){var G__102437 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102437 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102437.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102437.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102437);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102437);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102438 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102438 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102438.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102438.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102438);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102438);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102439){if((e102439 instanceof Object)){
var e__46790__auto__ = e102439;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102439;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,trace_data__46787__auto__){
return (function (){

var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),cljs.core.list(new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null),new cljs.core.Keyword(null,"front","front",-1523508988)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Keyword(null,"back","back",-417520012)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Keyword(null,"front","front",-1523508988))))], null);
if((function (){var G__102440 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102440 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102440.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102440.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102440);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102440);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,db,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = (function (){var current_face = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-face","current-face",-1038468929,null)], null);
if((function (){var G__102441 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102441 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102441.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102441.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102441);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102441);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,trace_data__46787__auto____$1,db,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = new cljs.core.Keyword(null,"current-face","current-face",1615966840).cljs$core$IFn$_invoke$arity$1(db);
if((function (){var G__102442 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102442 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102442.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102442.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102442);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102442);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,trace_data__46787__auto____$1,db,trace_data__46787__auto__))
;
if((function (){var G__102443 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102443 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102443.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102443.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102443);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102443);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102444){if((e102444 instanceof Object)){
var e__46790__auto__ = e102444;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102444;

}
}} else {
return f__46788__auto__.call(null);
}
})();
if(cljs.core._EQ_.call(null,current_face,new cljs.core.Keyword(null,"front","front",-1523508988))){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Keyword(null,"back","back",-417520012));
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-face","current-face",1615966840),new cljs.core.Keyword(null,"front","front",-1523508988));
}
})();
if((function (){var G__102445 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102445 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102445.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102445.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102445);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102445);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,db,trace_data__46787__auto__))
;
if((function (){var G__102446 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102446 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102446.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102446.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102446);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102446);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102447){if((e102447 instanceof Object)){
var e__46790__auto__ = e102447;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102447;

}
}} else {
return f__46788__auto__.call(null);
}
});})(db,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102245);
if((function (){var G__102448 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102448 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102448.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102448.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102448);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102448);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102449 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102449 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102449.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102449.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102449);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102449);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102450){if((e102450 instanceof Object)){
var e__46790__auto__ = e102450;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102450;

}
}} else {
return f__46788__auto__.call(null);
}
}));

cardy.events.next_card = (function cardy$events$next_card(a_102246){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"next-card","next-card",-1096467843,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"next-card","next-card",-1096467843,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ineligible","ineligible",-132532321,null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),cljs.core.list(new cljs.core.Symbol("clojure.set","union","clojure.set/union",-71291846,null),cljs.core.list(new cljs.core.Keyword(null,"excluded","excluded",-715952088),new cljs.core.Symbol(null,"db","db",-1661185010,null)),cljs.core.list(new cljs.core.Keyword(null,"removed","removed",609626430),new cljs.core.Symbol(null,"db","db",-1661185010,null))),cljs.core.list(new cljs.core.Keyword(null,"current-card","current-card",597444479),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"shuffle","shuffle",-1393023609,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),new cljs.core.Symbol(null,"ineligible","ineligible",-132532321,null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null)))))))], null);
if((function (){var G__102451 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102451 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102451.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102451.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102451);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102451);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102246__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102246__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102452 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102452 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102452.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102452.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102452);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102452);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102246__$1;
if((function (){var G__102453 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102453 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102453.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102453.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102453);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102453);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102454 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102454 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102454.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102454.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102454);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102454);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102455){if((e102455 instanceof Object)){
var e__46790__auto__ = e102455;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102455;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,trace_data__46787__auto__){
return (function (){

var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ineligible","ineligible",-132532321,null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),cljs.core.list(new cljs.core.Symbol("clojure.set","union","clojure.set/union",-71291846,null),cljs.core.list(new cljs.core.Keyword(null,"excluded","excluded",-715952088),new cljs.core.Symbol(null,"db","db",-1661185010,null)),cljs.core.list(new cljs.core.Keyword(null,"removed","removed",609626430),new cljs.core.Symbol(null,"db","db",-1661185010,null))),cljs.core.list(new cljs.core.Keyword(null,"current-card","current-card",597444479),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"shuffle","shuffle",-1393023609,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),new cljs.core.Symbol(null,"ineligible","ineligible",-132532321,null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null))))))], null);
if((function (){var G__102456 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102456 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102456.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102456.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102456);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102456);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,db,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = (function (){var ineligible = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),cljs.core.list(new cljs.core.Symbol("clojure.set","union","clojure.set/union",-71291846,null),cljs.core.list(new cljs.core.Keyword(null,"excluded","excluded",-715952088),new cljs.core.Symbol(null,"db","db",-1661185010,null)),cljs.core.list(new cljs.core.Keyword(null,"removed","removed",609626430),new cljs.core.Symbol(null,"db","db",-1661185010,null))),cljs.core.list(new cljs.core.Keyword(null,"current-card","current-card",597444479),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"ineligible","ineligible",-132532321,null)], null);
if((function (){var G__102457 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102457 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102457.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102457.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102457);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102457);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,trace_data__46787__auto____$1,db,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = cljs.core.conj.call(null,clojure.set.union.call(null,new cljs.core.Keyword(null,"excluded","excluded",-715952088).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"removed","removed",609626430).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"current-card","current-card",597444479).cljs$core$IFn$_invoke$arity$1(db));
if((function (){var G__102458 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102458 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102458.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102458.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102458);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102458);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,trace_data__46787__auto____$1,db,trace_data__46787__auto__))
;
if((function (){var G__102459 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102459 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102459.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102459.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102459);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102459);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102460){if((e102460 instanceof Object)){
var e__46790__auto__ = e102460;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102460;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return cljs.core.first.call(null,cljs.core.shuffle.call(null,cljs.core.remove.call(null,ineligible,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(db))));
})();
if((function (){var G__102461 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102461 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102461.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102461.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102461);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102461);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,db,trace_data__46787__auto__))
;
if((function (){var G__102462 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102462 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102462.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102462.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102462);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102462);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102463){if((e102463 instanceof Object)){
var e__46790__auto__ = e102463;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102463;

}
}} else {
return f__46788__auto__.call(null);
}
});})(db,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102246);
if((function (){var G__102464 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102464 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102464.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102464.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102464);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102464);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102465 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102465 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102465.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102465.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102465);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102465);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102466){if((e102466 instanceof Object)){
var e__46790__auto__ = e102466;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102466;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.events.new_current_card = (function cardy$events$new_current_card(a_102247){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"new-current-card","new-current-card",4617809,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"new-current-card","new-current-card",4617809,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-card","new-card",464705065,null),cljs.core.list(new cljs.core.Symbol(null,"next-card","next-card",-1096467843,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"new-card","new-card",464705065,null)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Keyword(null,"excluded","excluded",-715952088),new cljs.core.Symbol(null,"db","db",-1661185010,null))))),cljs.core.list(new cljs.core.Symbol(null,"new-current-card","new-current-card",4617809,null),cljs.core.list(new cljs.core.Symbol(null,"add-back-excluded","add-back-excluded",-497646162,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"new-card","new-card",464705065,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"current-card","current-card",597444479),new cljs.core.Symbol(null,"placeholder-card","placeholder-card",-941510735,null)),new cljs.core.Keyword(null,"else","else",-1508377146),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"current-card","current-card",597444479),new cljs.core.Symbol(null,"new-card","new-card",464705065,null)))))], null);
if((function (){var G__102467 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102467 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102467.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102467.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102467);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102467);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102247__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102247__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102468 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102468 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102468.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102468.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102468);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102468);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102247__$1;
if((function (){var G__102469 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102469 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102469.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102469.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102469);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102469);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102470 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102470 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102470.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102470.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102470);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102470);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102471){if((e102471 instanceof Object)){
var e__46790__auto__ = e102471;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102471;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,trace_data__46787__auto__){
return (function (){

var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-card","new-card",464705065,null),cljs.core.list(new cljs.core.Symbol(null,"next-card","next-card",-1096467843,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"new-card","new-card",464705065,null)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Keyword(null,"excluded","excluded",-715952088),new cljs.core.Symbol(null,"db","db",-1661185010,null))))),cljs.core.list(new cljs.core.Symbol(null,"new-current-card","new-current-card",4617809,null),cljs.core.list(new cljs.core.Symbol(null,"add-back-excluded","add-back-excluded",-497646162,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"new-card","new-card",464705065,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"current-card","current-card",597444479),new cljs.core.Symbol(null,"placeholder-card","placeholder-card",-941510735,null)),new cljs.core.Keyword(null,"else","else",-1508377146),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"current-card","current-card",597444479),new cljs.core.Symbol(null,"new-card","new-card",464705065,null))))], null);
if((function (){var G__102472 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102472 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102472.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102472.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102472);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102472);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,db,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = (function (){var new_card = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol(null,"next-card","next-card",-1096467843,null),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-card","new-card",464705065,null)], null);
if((function (){var G__102473 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102473 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102473.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102473.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102473);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102473);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,trace_data__46787__auto____$1,db,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = cardy.events.next_card.call(null,db);
if((function (){var G__102474 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102474 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102474.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102474.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102474);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102474);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,trace_data__46787__auto____$1,db,trace_data__46787__auto__))
;
if((function (){var G__102475 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102475 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102475.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102475.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102475);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102475);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102476){if((e102476 instanceof Object)){
var e__46790__auto__ = e102476;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102476;

}
}} else {
return f__46788__auto__.call(null);
}
})();
if(((new_card == null)) && (!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"excluded","excluded",-715952088).cljs$core$IFn$_invoke$arity$1(db))))){
return cardy.events.new_current_card.call(null,cardy.events.add_back_excluded.call(null,db));
} else {
if((new_card == null)){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-card","current-card",597444479),cardy.events.placeholder_card);
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-card","current-card",597444479),new_card);

}
}
})();
if((function (){var G__102477 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102477 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102477.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102477.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102477);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102477);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,db,trace_data__46787__auto__))
;
if((function (){var G__102478 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102478 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102478.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102478.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102478);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102478);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102479){if((e102479 instanceof Object)){
var e__46790__auto__ = e102479;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102479;

}
}} else {
return f__46788__auto__.call(null);
}
});})(db,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102247);
if((function (){var G__102480 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102480 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102480.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102480.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102480);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102480);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102481 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102481 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102481.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102481.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102481);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102481);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102482){if((e102482 instanceof Object)){
var e__46790__auto__ = e102482;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102482;

}
}} else {
return f__46788__auto__.call(null);
}
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","next","cardy.events/next",-1017307955),cardy.events.new_current_card);

cardy.events.add_card = (function cardy$events$add_card(a_102249,a_102250){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"add-card","add-card",781628592,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"p__102248","p__102248",2091194686,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"add-card","add-card",781628592,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"new-card","new-card",464705065,null),cljs.core.list(new cljs.core.Symbol(null,"input-to-card","input-to-card",-1851962871,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null),new cljs.core.Symbol(null,"new-card","new-card",464705065,null)))))], null);
if((function (){var G__102483 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102483 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102483.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102483.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102483);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102483);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102249__$1,a_102250__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102249__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102484 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102484 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102484.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102484.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102484);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102484);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102249__$1;
if((function (){var G__102485 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102485 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102485.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102485.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102485);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102485);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102486 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102486 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102486.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102486.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102486);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102486);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102487){if((e102487 instanceof Object)){
var e__46790__auto__ = e102487;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102487;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var p__102248 = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102250__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p__102248","p__102248",2091194686,null)], null);
if((function (){var G__102488 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102488 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102488.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102488.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102488);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102488);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,db,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102250__$1;
if((function (){var G__102489 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102489 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102489.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102489.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102489);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102489);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,db,trace_data__46787__auto__))
;
if((function (){var G__102490 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102490 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102490.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102490.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102490);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102490);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102491){if((e102491 instanceof Object)){
var e__46790__auto__ = e102491;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102491;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,p__102248,trace_data__46787__auto__){
return (function (){

var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null)], null),new cljs.core.Symbol(null,"p__102248","p__102248",2091194686,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"new-card","new-card",464705065,null),cljs.core.list(new cljs.core.Symbol(null,"input-to-card","input-to-card",-1851962871,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null),new cljs.core.Symbol(null,"new-card","new-card",464705065,null)))))], null);
if((function (){var G__102492 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102492 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102492.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102492.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102492);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102492);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,db,p__102248,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = (function (){var vec__102493 = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Symbol(null,"p__102248","p__102248",2091194686,null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null)], null)], null);
if((function (){var G__102496 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102496 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102496.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102496.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102496);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102496);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,trace_data__46787__auto____$1,db,p__102248,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = p__102248;
if((function (){var G__102497 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102497 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102497.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102497.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102497);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102497);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,trace_data__46787__auto____$1,db,p__102248,trace_data__46787__auto__))
;
if((function (){var G__102498 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102498 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102498.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102498.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102498);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102498);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102499){if((e102499 instanceof Object)){
var e__46790__auto__ = e102499;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102499;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var event_id_to_ignore = cljs.core.nth.call(null,vec__102493,(0),null);
var user_input = cljs.core.nth.call(null,vec__102493,(1),null);
var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"new-card","new-card",464705065,null),cljs.core.list(new cljs.core.Symbol(null,"input-to-card","input-to-card",-1851962871,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null),new cljs.core.Symbol(null,"new-card","new-card",464705065,null))))], null);
if((function (){var G__102500 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102500 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102500.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102500.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102500);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102500);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,vec__102493,event_id_to_ignore,user_input,trace_data__46787__auto____$1,db,p__102248,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = (function (){var current_cards = (function (){var trace_data__46787__auto____$3 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-cards","current-cards",-494724188,null)], null);
if((function (){var G__102501 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102501 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102501.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102501.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102501);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102501);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$3);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$3,trace_data__46787__auto____$2,vec__102493,event_id_to_ignore,user_input,trace_data__46787__auto____$1,db,p__102248,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(db);
if((function (){var G__102502 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102502 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102502.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102502.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102502);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102502);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$3,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$3,trace_data__46787__auto____$2,vec__102493,event_id_to_ignore,user_input,trace_data__46787__auto____$1,db,p__102248,trace_data__46787__auto__))
;
if((function (){var G__102503 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102503 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102503.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102503.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102503);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102503);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102504){if((e102504 instanceof Object)){
var e__46790__auto__ = e102504;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$3,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102504;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var new_card = (function (){var trace_data__46787__auto____$3 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol(null,"input-to-card","input-to-card",-1851962871,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-card","new-card",464705065,null)], null);
if((function (){var G__102505 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102505 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102505.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102505.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102505);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102505);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$3);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$3,current_cards,trace_data__46787__auto____$2,vec__102493,event_id_to_ignore,user_input,trace_data__46787__auto____$1,db,p__102248,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = cardy.events.input_to_card.call(null,user_input);
if((function (){var G__102506 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102506 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102506.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102506.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102506);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102506);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$3,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$3,current_cards,trace_data__46787__auto____$2,vec__102493,event_id_to_ignore,user_input,trace_data__46787__auto____$1,db,p__102248,trace_data__46787__auto__))
;
if((function (){var G__102507 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102507 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102507.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102507.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102507);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102507);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102508){if((e102508 instanceof Object)){
var e__46790__auto__ = e102508;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$3,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102508;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.conj.call(null,current_cards,new_card));
})();
if((function (){var G__102509 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102509 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102509.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102509.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102509);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102509);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,vec__102493,event_id_to_ignore,user_input,trace_data__46787__auto____$1,db,p__102248,trace_data__46787__auto__))
;
if((function (){var G__102510 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102510 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102510.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102510.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102510);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102510);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102511){if((e102511 instanceof Object)){
var e__46790__auto__ = e102511;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102511;

}
}} else {
return f__46788__auto__.call(null);
}
})();
if((function (){var G__102512 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102512 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102512.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102512.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102512);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102512);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,db,p__102248,trace_data__46787__auto__))
;
if((function (){var G__102513 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102513 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102513.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102513.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102513);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102513);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102514){if((e102514 instanceof Object)){
var e__46790__auto__ = e102514;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102514;

}
}} else {
return f__46788__auto__.call(null);
}
});})(db,p__102248,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102249,a_102250);
if((function (){var G__102515 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102515 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102515.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102515.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102515);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102515);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102516 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102516 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102516.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102516.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102516);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102516);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102517){if((e102517 instanceof Object)){
var e__46790__auto__ = e102517;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102517;

}
}} else {
return f__46788__auto__.call(null);
}
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","add-card","cardy.events/add-card",-479246421),cardy.events.add_card);

cardy.events.remove_card = (function cardy$events$remove_card(a_102251){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"remove-card","remove-card",895478082,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"remove-card","remove-card",895478082,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.list(new cljs.core.Symbol("clojure.set","union","clojure.set/union",-71291846,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Keyword(null,"current-card","current-card",597444479),new cljs.core.Symbol(null,"app-state","app-state",130568249,null))]),cljs.core.list(new cljs.core.Keyword(null,"removed","removed",609626430),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)))),cljs.core.list(new cljs.core.Symbol(null,"new-current-card","new-current-card",4617809,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null))))], null);
if((function (){var G__102518 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102518 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102518.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102518.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102518);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102518);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102251__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102251__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102519 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102519 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102519.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102519.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102519);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102519);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102251__$1;
if((function (){var G__102520 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102520 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102520.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102520.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102520);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102520);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102521 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102521 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102521.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102521.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102521);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102521);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102522){if((e102522 instanceof Object)){
var e__46790__auto__ = e102522;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102522;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,trace_data__46787__auto__){
return (function (){

var app_state = db;
var app_state__$1 = cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"removed","removed",609626430),clojure.set.union.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"current-card","current-card",597444479).cljs$core$IFn$_invoke$arity$1(app_state)]),new cljs.core.Keyword(null,"removed","removed",609626430).cljs$core$IFn$_invoke$arity$1(app_state)));
return cardy.events.new_current_card.call(null,app_state__$1);
});})(db,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102251);
if((function (){var G__102523 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102523 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102523.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102523.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102523);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102523);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102524 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102524 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102524.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102524.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102524);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102524);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102525){if((e102525 instanceof Object)){
var e__46790__auto__ = e102525;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102525;

}
}} else {
return f__46788__auto__.call(null);
}
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","remove-card","cardy.events/remove-card",758557629),cardy.events.remove_card);

cardy.events.exclude_card = (function cardy$events$exclude_card(a_102252){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"exclude-card","exclude-card",-1589491874,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"exclude-card","exclude-card",-1589491874,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"excluded","excluded",924579439,null),cljs.core.list(new cljs.core.Keyword(null,"excluded","excluded",-715952088),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"current-card","current-card",-2056991290,null),cljs.core.list(new cljs.core.Keyword(null,"current-card","current-card",597444479),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"excluded","excluded",-715952088),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"excluded","excluded",924579439,null),new cljs.core.Symbol(null,"current-card","current-card",-2056991290,null))),cljs.core.list(new cljs.core.Symbol(null,"new-current-card","new-current-card",4617809,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)))))], null);
if((function (){var G__102526 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102526 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102526.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102526.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102526);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102526);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102252__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102252__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102527 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102527 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102527.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102527.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102527);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102527);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102252__$1;
if((function (){var G__102528 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102528 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102528.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102528.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102528);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102528);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102529 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102529 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102529.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102529.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102529);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102529);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102530){if((e102530 instanceof Object)){
var e__46790__auto__ = e102530;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102530;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,trace_data__46787__auto__){
return (function (){

var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"excluded","excluded",924579439,null),cljs.core.list(new cljs.core.Keyword(null,"excluded","excluded",-715952088),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"current-card","current-card",-2056991290,null),cljs.core.list(new cljs.core.Keyword(null,"current-card","current-card",597444479),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"excluded","excluded",-715952088),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"excluded","excluded",924579439,null),new cljs.core.Symbol(null,"current-card","current-card",-2056991290,null))),cljs.core.list(new cljs.core.Symbol(null,"new-current-card","new-current-card",4617809,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null))))], null);
if((function (){var G__102531 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102531 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102531.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102531.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102531);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102531);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,db,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = (function (){var excluded = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Keyword(null,"excluded","excluded",-715952088),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"excluded","excluded",924579439,null)], null);
if((function (){var G__102532 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102532 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102532.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102532.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102532);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102532);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,trace_data__46787__auto____$1,db,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = new cljs.core.Keyword(null,"excluded","excluded",-715952088).cljs$core$IFn$_invoke$arity$1(db);
if((function (){var G__102533 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102533 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102533.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102533.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102533);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102533);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,trace_data__46787__auto____$1,db,trace_data__46787__auto__))
;
if((function (){var G__102534 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102534 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102534.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102534.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102534);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102534);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102535){if((e102535 instanceof Object)){
var e__46790__auto__ = e102535;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102535;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var current_card = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Keyword(null,"current-card","current-card",597444479),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-card","current-card",-2056991290,null)], null);
if((function (){var G__102536 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102536 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102536.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102536.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102536);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102536);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,excluded,trace_data__46787__auto____$1,db,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = new cljs.core.Keyword(null,"current-card","current-card",597444479).cljs$core$IFn$_invoke$arity$1(db);
if((function (){var G__102537 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102537 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102537.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102537.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102537);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102537);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,excluded,trace_data__46787__auto____$1,db,trace_data__46787__auto__))
;
if((function (){var G__102538 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102538 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102538.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102538.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102538);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102538);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102539){if((e102539 instanceof Object)){
var e__46790__auto__ = e102539;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102539;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var app_state = db;
var app_state__$1 = cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"excluded","excluded",-715952088),cljs.core.conj.call(null,excluded,current_card));
return cardy.events.new_current_card.call(null,app_state__$1);
})();
if((function (){var G__102540 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102540 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102540.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102540.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102540);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102540);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,db,trace_data__46787__auto__))
;
if((function (){var G__102541 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102541 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102541.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102541.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102541);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102541);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102542){if((e102542 instanceof Object)){
var e__46790__auto__ = e102542;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102542;

}
}} else {
return f__46788__auto__.call(null);
}
});})(db,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102252);
if((function (){var G__102543 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102543 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102543.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102543.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102543);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102543);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102544 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102544 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102544.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102544.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102544);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102544);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102545){if((e102545 instanceof Object)){
var e__46790__auto__ = e102545;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102545;

}
}} else {
return f__46788__auto__.call(null);
}
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","exclude-card","cardy.events/exclude-card",-1424283307),cardy.events.exclude_card);

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","add-back-excluded","cardy.events/add-back-excluded",443491881),cardy.events.add_back_excluded);

cardy.events.clear_removed = (function cardy$events$clear_removed(a_102253){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"clear-removed","clear-removed",-1136446680,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"clear-removed","clear-removed",-1136446680,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY))], null);
if((function (){var G__102546 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102546 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102546.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102546.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102546);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102546);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102253__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102253__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102547 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102547 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102547.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102547.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102547);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102547);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102253__$1;
if((function (){var G__102548 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102548 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102548.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102548.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102548);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102548);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102549 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102549 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102549.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102549.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102549);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102549);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102550){if((e102550 instanceof Object)){
var e__46790__auto__ = e102550;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102550;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,trace_data__46787__auto__){
return (function (){

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY);
});})(db,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102253);
if((function (){var G__102551 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102551 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102551.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102551.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102551);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102551);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102552 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102552 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102552.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102552.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102552);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102552);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102553){if((e102553 instanceof Object)){
var e__46790__auto__ = e102553;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102553;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.events.add_deck = (function cardy$events$add_deck(a_102254,a_102255){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"add-deck","add-deck",1670913591,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"add-deck","add-deck",1670913591,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null),"Assumes deck-name is :keyword",cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null),cljs.core.PersistentHashSet.EMPTY))], null);
if((function (){var G__102554 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102554 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102554.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102554.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102554);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102554);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102254__$1,a_102255__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102254__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102555 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102555 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102555.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102555.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102555);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102555);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102254__$1;
if((function (){var G__102556 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102556 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102556.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102556.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102556);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102556);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102557 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102557 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102557.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102557.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102557);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102557);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102558){if((e102558 instanceof Object)){
var e__46790__auto__ = e102558;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102558;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var deck_name = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102255__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null);
if((function (){var G__102559 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102559 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102559.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102559.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102559);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102559);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,db,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102255__$1;
if((function (){var G__102560 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102560 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102560.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102560.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102560);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102560);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,db,trace_data__46787__auto__))
;
if((function (){var G__102561 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102561 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102561.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102561.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102561);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102561);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102562){if((e102562 instanceof Object)){
var e__46790__auto__ = e102562;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102562;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,deck_name,trace_data__46787__auto__){
return (function (){


return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),deck_name], null),cljs.core.PersistentHashSet.EMPTY);
});})(db,deck_name,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102254,a_102255);
if((function (){var G__102563 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102563 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102563.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102563.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102563);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102563);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102564 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102564 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102564.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102564.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102564);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102564);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102565){if((e102565 instanceof Object)){
var e__46790__auto__ = e102565;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102565;

}
}} else {
return f__46788__auto__.call(null);
}
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","add-deck","cardy.events/add-deck",1748167474),(function cardy$events$add_deck_handler(a_102256,a_102257){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"add-deck-handler","add-deck-handler",-2125715265,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"name-for-new-deck","name-for-new-deck",1099212925,null)], null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"add-deck-handler","add-deck-handler",-2125715265,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"name-for-new-deck","name-for-new-deck",1099212925,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"add-deck","add-deck",1670913591,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"input-to-keyword","input-to-keyword",-410870276,null),new cljs.core.Symbol(null,"name-for-new-deck","name-for-new-deck",1099212925,null))))], null);
if((function (){var G__102566 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102566 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102566.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102566.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102566);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102566);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102256__$1,a_102257__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102256__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102570 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102570 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102570.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102570.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102570);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102570);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102256__$1;
if((function (){var G__102571 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102571 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102571.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102571.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102571);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102571);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102572 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102572 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102572.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102572.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102572);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102572);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102573){if((e102573 instanceof Object)){
var e__46790__auto__ = e102573;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102573;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var vec__102567 = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102257__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"name-for-new-deck","name-for-new-deck",1099212925,null)], null)], null);
if((function (){var G__102574 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102574 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102574.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102574.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102574);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102574);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,db,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102257__$1;
if((function (){var G__102575 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102575 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102575.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102575.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102575);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102575);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,db,trace_data__46787__auto__))
;
if((function (){var G__102576 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102576 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102576.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102576.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102576);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102576);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102577){if((e102577 instanceof Object)){
var e__46790__auto__ = e102577;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102577;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var event_id_to_ignore = cljs.core.nth.call(null,vec__102567,(0),null);
var name_for_new_deck = cljs.core.nth.call(null,vec__102567,(1),null);
return ((function (db,vec__102567,event_id_to_ignore,name_for_new_deck,trace_data__46787__auto__){
return (function (){

return cardy.events.add_deck.call(null,db,cardy.events.input_to_keyword.call(null,name_for_new_deck));
});})(db,vec__102567,event_id_to_ignore,name_for_new_deck,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102256,a_102257);
if((function (){var G__102578 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102578 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102578.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102578.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102578);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102578);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102579 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102579 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102579.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102579.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102579);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102579);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102580){if((e102580 instanceof Object)){
var e__46790__auto__ = e102580;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102580;

}
}} else {
return f__46788__auto__.call(null);
}
}));

cardy.events.put_back_old_deck = (function cardy$events$put_back_old_deck(a_102258){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"put-back-old-deck","put-back-old-deck",-1554014026,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"put-back-old-deck","put-back-old-deck",-1554014026,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deck-less-removed","deck-less-removed",2107620733,null),cljs.core.list(new cljs.core.Symbol("clojure.set","difference","clojure.set/difference",-1178931405,null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null)),cljs.core.list(new cljs.core.Keyword(null,"removed","removed",609626430),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"clear-removed","clear-removed",-1136446680,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),cljs.core.list(new cljs.core.Symbol(null,"add-back-excluded","add-back-excluded",-497646162,null),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),cljs.core.list(new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),new cljs.core.Symbol(null,"deck-less-removed","deck-less-removed",2107620733,null)))))], null);
if((function (){var G__102581 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102581 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102581.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102581.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102581);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102581);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102258__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102258__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102582 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102582 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102582.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102582.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102582);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102582);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102258__$1;
if((function (){var G__102583 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102583 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102583.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102583.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102583);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102583);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102584 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102584 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102584.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102584.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102584);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102584);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102585){if((e102585 instanceof Object)){
var e__46790__auto__ = e102585;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102585;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,trace_data__46787__auto__){
return (function (){

var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deck-less-removed","deck-less-removed",2107620733,null),cljs.core.list(new cljs.core.Symbol("clojure.set","difference","clojure.set/difference",-1178931405,null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null)),cljs.core.list(new cljs.core.Keyword(null,"removed","removed",609626430),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"clear-removed","clear-removed",-1136446680,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),cljs.core.list(new cljs.core.Symbol(null,"add-back-excluded","add-back-excluded",-497646162,null),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),cljs.core.list(new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),new cljs.core.Symbol(null,"deck-less-removed","deck-less-removed",2107620733,null))))], null);
if((function (){var G__102586 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102586 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102586.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102586.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102586);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102586);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,db,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = (function (){var deck_less_removed = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol("clojure.set","difference","clojure.set/difference",-1178931405,null),cljs.core.list(new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Symbol(null,"db","db",-1661185010,null)),cljs.core.list(new cljs.core.Keyword(null,"removed","removed",609626430),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"deck-less-removed","deck-less-removed",2107620733,null)], null);
if((function (){var G__102587 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102587 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102587.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102587.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102587);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102587);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,trace_data__46787__auto____$1,db,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = clojure.set.difference.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"removed","removed",609626430).cljs$core$IFn$_invoke$arity$1(db));
if((function (){var G__102588 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102588 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102588.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102588.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102588);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102588);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,trace_data__46787__auto____$1,db,trace_data__46787__auto__))
;
if((function (){var G__102589 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102589 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102589.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102589.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102589);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102589);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102590){if((e102590 instanceof Object)){
var e__46790__auto__ = e102590;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102590;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return cardy.events.clear_removed.call(null,cljs.core.assoc_in.call(null,cardy.events.add_back_excluded.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477).cljs$core$IFn$_invoke$arity$1(db)], null),deck_less_removed));
})();
if((function (){var G__102591 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102591 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102591.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102591.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102591);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102591);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,db,trace_data__46787__auto__))
;
if((function (){var G__102592 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102592 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102592.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102592.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102592);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102592);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102593){if((e102593 instanceof Object)){
var e__46790__auto__ = e102593;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102593;

}
}} else {
return f__46788__auto__.call(null);
}
});})(db,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102258);
if((function (){var G__102594 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102594 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102594.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102594.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102594);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102594);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102595 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102595 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102595.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102595.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102595);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102595);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102596){if((e102596 instanceof Object)){
var e__46790__auto__ = e102596;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102596;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.events.bring_in_new_deck = (function cardy$events$bring_in_new_deck(a_102259,a_102260){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"bring-in-new-deck","bring-in-new-deck",995767043,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"bring-in-new-deck","bring-in-new-deck",995767043,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"desired-deck","desired-deck",1235199831,null),cljs.core.list(new cljs.core.Symbol(null,"input-to-keyword","input-to-keyword",-410870276,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null))], null),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.list(new cljs.core.Symbol(null,"desired-deck","desired-deck",1235199831,null),cljs.core.list(new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477),new cljs.core.Symbol(null,"desired-deck","desired-deck",1235199831,null)))))], null);
if((function (){var G__102597 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102597 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102597.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102597.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102597);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102597);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102259__$1,a_102260__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102259__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102598 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102598 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102598.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102598.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102598);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102598);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102259__$1;
if((function (){var G__102599 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102599 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102599.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102599.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102599);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102599);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102600 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102600 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102600.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102600.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102600);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102600);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102601){if((e102601 instanceof Object)){
var e__46790__auto__ = e102601;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102601;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var user_input = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102260__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null)], null);
if((function (){var G__102602 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102602 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102602.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102602.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102602);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102602);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,db,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102260__$1;
if((function (){var G__102603 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102603 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102603.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102603.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102603);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102603);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,db,trace_data__46787__auto__))
;
if((function (){var G__102604 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102604 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102604.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102604.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102604);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102604);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102605){if((e102605 instanceof Object)){
var e__46790__auto__ = e102605;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102605;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,user_input,trace_data__46787__auto__){
return (function (){

var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"desired-deck","desired-deck",1235199831,null),cljs.core.list(new cljs.core.Symbol(null,"input-to-keyword","input-to-keyword",-410870276,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null))], null),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.list(new cljs.core.Symbol(null,"desired-deck","desired-deck",1235199831,null),cljs.core.list(new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477),new cljs.core.Symbol(null,"desired-deck","desired-deck",1235199831,null))))], null);
if((function (){var G__102606 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102606 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102606.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102606.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102606);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102606);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,db,user_input,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = (function (){var desired_deck = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol(null,"input-to-keyword","input-to-keyword",-410870276,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"desired-deck","desired-deck",1235199831,null)], null);
if((function (){var G__102607 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102607 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102607.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102607.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102607);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102607);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,trace_data__46787__auto____$1,db,user_input,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = cardy.events.input_to_keyword.call(null,user_input);
if((function (){var G__102608 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102608 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102608.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102608.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102608);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102608);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,trace_data__46787__auto____$1,db,user_input,trace_data__46787__auto__))
;
if((function (){var G__102609 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102609 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102609.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102609.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102609);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102609);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102610){if((e102610 instanceof Object)){
var e__46790__auto__ = e102610;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102610;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var app_state = db;
var app_state__$1 = cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"cards","cards",169174038),desired_deck.call(null,new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(app_state)));
return cljs.core.assoc.call(null,app_state__$1,new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477),desired_deck);
})();
if((function (){var G__102611 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102611 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102611.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102611.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102611);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102611);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,db,user_input,trace_data__46787__auto__))
;
if((function (){var G__102612 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102612 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102612.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102612.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102612);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102612);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102613){if((e102613 instanceof Object)){
var e__46790__auto__ = e102613;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102613;

}
}} else {
return f__46788__auto__.call(null);
}
});})(db,user_input,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102259,a_102260);
if((function (){var G__102614 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102614 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102614.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102614.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102614);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102614);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102615 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102615 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102615.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102615.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102615);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102615);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102616){if((e102616 instanceof Object)){
var e__46790__auto__ = e102616;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102616;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.events.change_deck = (function cardy$events$change_deck(a_102262,a_102263){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"change-deck","change-deck",346575416,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"p__102261","p__102261",-402670608,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"change-deck","change-deck",346575416,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"put-back-old-deck","put-back-old-deck",-1554014026,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),cljs.core.list(new cljs.core.Symbol(null,"bring-in-new-deck","bring-in-new-deck",995767043,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"current-card","current-card",597444479),cljs.core.list(new cljs.core.Symbol(null,"next-card","next-card",-1096467843,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)))))], null);
if((function (){var G__102617 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102617 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102617.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102617.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102617);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102617);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102262__$1,a_102263__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102262__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102618 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102618 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102618.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102618.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102618);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102618);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102262__$1;
if((function (){var G__102619 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102619 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102619.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102619.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102619);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102619);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102620 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102620 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102620.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102620.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102620);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102620);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102621){if((e102621 instanceof Object)){
var e__46790__auto__ = e102621;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102621;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var p__102261 = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102263__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p__102261","p__102261",-402670608,null)], null);
if((function (){var G__102622 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102622 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102622.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102622.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102622);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102622);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,db,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102263__$1;
if((function (){var G__102623 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102623 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102623.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102623.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102623);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102623);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,db,trace_data__46787__auto__))
;
if((function (){var G__102624 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102624 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102624.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102624.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102624);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102624);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102625){if((e102625 instanceof Object)){
var e__46790__auto__ = e102625;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102625;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,p__102261,trace_data__46787__auto__){
return (function (){

var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null)], null),new cljs.core.Symbol(null,"p__102261","p__102261",-402670608,null)], null),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"put-back-old-deck","put-back-old-deck",-1554014026,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),cljs.core.list(new cljs.core.Symbol(null,"bring-in-new-deck","bring-in-new-deck",995767043,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"current-card","current-card",597444479),cljs.core.list(new cljs.core.Symbol(null,"next-card","next-card",-1096467843,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)))))], null);
if((function (){var G__102626 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102626 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102626.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102626.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102626);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102626);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,db,p__102261,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = (function (){var vec__102627 = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Symbol(null,"p__102261","p__102261",-402670608,null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null)], null)], null);
if((function (){var G__102630 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102630 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102630.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102630.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102630);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102630);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,trace_data__46787__auto____$1,db,p__102261,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = p__102261;
if((function (){var G__102631 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102631 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102631.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102631.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102631);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102631);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,trace_data__46787__auto____$1,db,p__102261,trace_data__46787__auto__))
;
if((function (){var G__102632 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102632 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102632.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102632.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102632);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102632);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102633){if((e102633 instanceof Object)){
var e__46790__auto__ = e102633;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102633;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var event_id_to_ignore = cljs.core.nth.call(null,vec__102627,(0),null);
var user_input = cljs.core.nth.call(null,vec__102627,(1),null);
var app_state = db;
var app_state__$1 = cardy.events.put_back_old_deck.call(null,app_state);
var app_state__$2 = cardy.events.bring_in_new_deck.call(null,app_state__$1,user_input);
return cljs.core.assoc.call(null,app_state__$2,new cljs.core.Keyword(null,"current-card","current-card",597444479),cardy.events.next_card.call(null,app_state__$2));
})();
if((function (){var G__102634 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102634 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102634.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102634.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102634);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102634);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,db,p__102261,trace_data__46787__auto__))
;
if((function (){var G__102635 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102635 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102635.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102635.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102635);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102635);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102636){if((e102636 instanceof Object)){
var e__46790__auto__ = e102636;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102636;

}
}} else {
return f__46788__auto__.call(null);
}
});})(db,p__102261,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102262,a_102263);
if((function (){var G__102637 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102637 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102637.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102637.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102637);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102637);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102638 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102638 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102638.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102638.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102638);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102638);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102639){if((e102639 instanceof Object)){
var e__46790__auto__ = e102639;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102639;

}
}} else {
return f__46788__auto__.call(null);
}
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","change-deck","cardy.events/change-deck",-1660930769),cardy.events.change_deck);

cardy.events.removing_current_deck_QMARK_ = (function cardy$events$removing_current_deck_QMARK_(a_102264,a_102265){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"removing-current-deck?","removing-current-deck?",-702286002,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"removing-current-deck?","removing-current-deck?",-702286002,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null)], null),"Expects deck-to-remove to be a :keyword.",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null),cljs.core.list(new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477),new cljs.core.Symbol(null,"db","db",-1661185010,null))))], null);
if((function (){var G__102640 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102640 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102640.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102640.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102640);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102640);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102264__$1,a_102265__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102264__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102641 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102641 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102641.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102641.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102641);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102641);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102264__$1;
if((function (){var G__102642 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102642 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102642.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102642.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102642);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102642);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102643 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102643 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102643.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102643.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102643);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102643);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102644){if((e102644 instanceof Object)){
var e__46790__auto__ = e102644;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102644;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var deck_to_remove = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102265__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null)], null);
if((function (){var G__102645 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102645 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102645.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102645.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102645);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102645);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,db,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102265__$1;
if((function (){var G__102646 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102646 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102646.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102646.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102646);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102646);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,db,trace_data__46787__auto__))
;
if((function (){var G__102647 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102647 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102647.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102647.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102647);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102647);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102648){if((e102648 instanceof Object)){
var e__46790__auto__ = e102648;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102648;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,deck_to_remove,trace_data__46787__auto__){
return (function (){


return cljs.core._EQ_.call(null,deck_to_remove,new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477).cljs$core$IFn$_invoke$arity$1(db));
});})(db,deck_to_remove,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102264,a_102265);
if((function (){var G__102649 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102649 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102649.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102649.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102649);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102649);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102650 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102650 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102650.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102650.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102650);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102650);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102651){if((e102651 instanceof Object)){
var e__46790__auto__ = e102651;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102651;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.events.no_decks_QMARK_ = (function cardy$events$no_decks_QMARK_(a_102266){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"no-decks?","no-decks?",534834393,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"no-decks?","no-decks?",534834393,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"db","db",-1661185010,null))))], null);
if((function (){var G__102652 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102652 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102652.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102652.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102652);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102652);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102266__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102266__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102653 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102653 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102653.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102653.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102653);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102653);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102266__$1;
if((function (){var G__102654 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102654 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102654.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102654.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102654);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102654);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102655 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102655 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102655.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102655.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102655);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102655);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102656){if((e102656 instanceof Object)){
var e__46790__auto__ = e102656;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102656;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,trace_data__46787__auto__){
return (function (){

return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(db));
});})(db,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102266);
if((function (){var G__102657 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102657 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102657.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102657.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102657);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102657);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102658 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102658 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102658.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102658.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102658);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102658);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102659){if((e102659 instanceof Object)){
var e__46790__auto__ = e102659;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102659;

}
}} else {
return f__46788__auto__.call(null);
}
});

cardy.events.last_deck_QMARK_ = (function cardy$events$last_deck_QMARK_(a_102267){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"last-deck?","last-deck?",1055659515,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"last-deck?","last-deck?",1055659515,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"db","db",-1661185010,null)))))], null);
if((function (){var G__102660 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102660 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102660.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102660.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102660);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102660);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102267__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102267__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102661 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102661 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102661.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102661.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102661);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102661);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102267__$1;
if((function (){var G__102662 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102662 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102662.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102662.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102662);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102662);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102663 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102663 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102663.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102663.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102663);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102663);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102664){if((e102664 instanceof Object)){
var e__46790__auto__ = e102664;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102664;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db,trace_data__46787__auto__){
return (function (){

return cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(db)));
});})(db,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102267);
if((function (){var G__102665 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102665 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102665.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102665.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102665);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102665);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102666 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102666 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102666.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102666.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102666);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102666);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102667){if((e102667 instanceof Object)){
var e__46790__auto__ = e102667;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102667;

}
}} else {
return f__46788__auto__.call(null);
}
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","remove-deck","cardy.events/remove-deck",-1965096554),(function cardy$events$remove_deck_handler(a_102271,a_102272){
var trace_data__46787__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"remove-deck-handler","remove-deck-handler",-1448832339,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"name-of-deck-to-remove","name-of-deck-to-remove",-507914988,null)], null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"remove-deck-handler","remove-deck-handler",-1448832339,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"name-of-deck-to-remove","name-of-deck-to-remove",-507914988,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null),cljs.core.list(new cljs.core.Symbol(null,"input-to-keyword","input-to-keyword",-410870276,null),new cljs.core.Symbol(null,"name-of-deck-to-remove","name-of-deck-to-remove",-507914988,null)),new cljs.core.Symbol(null,"remove-deck","remove-deck",1111906463,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null),cljs.core.list(new cljs.core.Symbol(null,"dissoc-in","dissoc-in",-249353279,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"last-deck?","last-deck?",1055659515,null),new cljs.core.Symbol(null,"db","db",-1661185010,null)),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"add-deck","add-deck",1670913591,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083)),cljs.core.list(new cljs.core.Symbol(null,"bring-in-new-deck","bring-in-new-deck",995767043,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),"placeholder")),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"removing-current-deck?","removing-current-deck?",-702286002,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null)),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"remove-deck","remove-deck",1111906463,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null)),cljs.core.list(new cljs.core.Symbol(null,"bring-in-new-deck","bring-in-new-deck",995767043,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)))))),cljs.core.list(new cljs.core.Symbol(null,"new-current-card","new-current-card",4617809,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null))),cljs.core.list(new cljs.core.Symbol(null,"remove-deck","remove-deck",1111906463,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null))))))], null);
if((function (){var G__102668 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102668 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102668.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102668.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102668);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102668);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto__);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto__){
return (function (a_102271__$1,a_102272__$1){
var db = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102271__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102672 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102672 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102672.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102672.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102672);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102672);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102271__$1;
if((function (){var G__102673 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102673 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102673.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102673.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102673);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102673);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,trace_data__46787__auto__))
;
if((function (){var G__102674 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102674 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102674.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102674.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102674);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102674);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102675){if((e102675 instanceof Object)){
var e__46790__auto__ = e102675;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102675;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var vec__102669 = (function (){var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102272__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-id-to-ignore","event-id-to-ignore",-165611267,null),new cljs.core.Symbol(null,"name-of-deck-to-remove","name-of-deck-to-remove",-507914988,null)], null)], null);
if((function (){var G__102676 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102676 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102676.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102676.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102676);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102676);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,db,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102272__$1;
if((function (){var G__102677 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102677 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102677.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102677.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102677);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102677);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,db,trace_data__46787__auto__))
;
if((function (){var G__102678 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102678 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102678.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102678.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102678);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102678);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102679){if((e102679 instanceof Object)){
var e__46790__auto__ = e102679;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102679;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var event_id_to_ignore = cljs.core.nth.call(null,vec__102669,(0),null);
var name_of_deck_to_remove = cljs.core.nth.call(null,vec__102669,(1),null);
return ((function (db,vec__102669,event_id_to_ignore,name_of_deck_to_remove,trace_data__46787__auto__){
return (function (){

var trace_data__46787__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null),cljs.core.list(new cljs.core.Symbol(null,"input-to-keyword","input-to-keyword",-410870276,null),new cljs.core.Symbol(null,"name-of-deck-to-remove","name-of-deck-to-remove",-507914988,null)),new cljs.core.Symbol(null,"remove-deck","remove-deck",1111906463,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null),cljs.core.list(new cljs.core.Symbol(null,"dissoc-in","dissoc-in",-249353279,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"last-deck?","last-deck?",1055659515,null),new cljs.core.Symbol(null,"db","db",-1661185010,null)),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"add-deck","add-deck",1670913591,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083)),cljs.core.list(new cljs.core.Symbol(null,"bring-in-new-deck","bring-in-new-deck",995767043,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),"placeholder")),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"removing-current-deck?","removing-current-deck?",-702286002,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null)),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"remove-deck","remove-deck",1111906463,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null)),cljs.core.list(new cljs.core.Symbol(null,"bring-in-new-deck","bring-in-new-deck",995767043,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)))))),cljs.core.list(new cljs.core.Symbol(null,"new-current-card","new-current-card",4617809,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null))),cljs.core.list(new cljs.core.Symbol(null,"remove-deck","remove-deck",1111906463,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null)))))], null);
if((function (){var G__102680 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102680 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102680.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102680.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102680);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102680);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$1);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$1,db,vec__102669,event_id_to_ignore,name_of_deck_to_remove,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = (function (){var deck_to_remove = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol(null,"input-to-keyword","input-to-keyword",-410870276,null),new cljs.core.Symbol(null,"name-of-deck-to-remove","name-of-deck-to-remove",-507914988,null)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"deck-to-remove","deck-to-remove",-987167584,null)], null);
if((function (){var G__102681 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102681 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102681.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102681.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102681);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102681);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,trace_data__46787__auto____$1,db,vec__102669,event_id_to_ignore,name_of_deck_to_remove,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = cardy.events.input_to_keyword.call(null,name_of_deck_to_remove);
if((function (){var G__102682 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102682 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102682.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102682.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102682);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102682);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,trace_data__46787__auto____$1,db,vec__102669,event_id_to_ignore,name_of_deck_to_remove,trace_data__46787__auto__))
;
if((function (){var G__102683 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102683 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102683.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102683.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102683);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102683);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102684){if((e102684 instanceof Object)){
var e__46790__auto__ = e102684;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102684;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var remove_deck = (function (){var trace_data__46787__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null),cljs.core.list(new cljs.core.Symbol(null,"dissoc-in","dissoc-in",-249353279,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null))),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"remove-deck","remove-deck",1111906463,null)], null);
if((function (){var G__102685 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102685 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102685.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102685.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102685);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102685);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$2);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$2,deck_to_remove,trace_data__46787__auto____$1,db,vec__102669,event_id_to_ignore,name_of_deck_to_remove,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto____$2,deck_to_remove,trace_data__46787__auto____$1,db,vec__102669,event_id_to_ignore,name_of_deck_to_remove,trace_data__46787__auto__){
return (function cardy$events$remove_deck_handler_$_fn_102268(a_102269,a_102270){
var trace_data__46787__auto____$3 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cardy.events","cardy.events",-297806088,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fn_102268","fn_102268",-1917054563,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),true,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null),cljs.core.list(new cljs.core.Symbol(null,"dissoc-in","dissoc-in",-249353279,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null)))], null);
if((function (){var G__102686 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102686 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102686.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102686.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102686);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102686);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$3);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$3,trace_data__46787__auto____$2,deck_to_remove,trace_data__46787__auto____$1,db,vec__102669,event_id_to_ignore,name_of_deck_to_remove,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = ((function (trace_data__46787__auto____$3,trace_data__46787__auto____$2,deck_to_remove,trace_data__46787__auto____$1,db,vec__102669,event_id_to_ignore,name_of_deck_to_remove,trace_data__46787__auto__){
return (function (a_102269__$1,a_102270__$1){
var db__$1 = (function (){var trace_data__46787__auto____$4 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102269__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null);
if((function (){var G__102687 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102687 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102687.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102687.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102687);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102687);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$4);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$4,trace_data__46787__auto____$3,trace_data__46787__auto____$2,deck_to_remove,trace_data__46787__auto____$1,db,vec__102669,event_id_to_ignore,name_of_deck_to_remove,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102269__$1;
if((function (){var G__102688 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102688 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102688.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102688.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102688);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102688);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$4,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$4,trace_data__46787__auto____$3,trace_data__46787__auto____$2,deck_to_remove,trace_data__46787__auto____$1,db,vec__102669,event_id_to_ignore,name_of_deck_to_remove,trace_data__46787__auto__))
;
if((function (){var G__102689 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102689 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102689.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102689.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102689);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102689);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102690){if((e102690 instanceof Object)){
var e__46790__auto__ = e102690;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$4,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102690;

}
}} else {
return f__46788__auto__.call(null);
}
})();
var deck_name = (function (){var trace_data__46787__auto____$4 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_102270__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"deck-name","deck-name",1531540277,null)], null);
if((function (){var G__102691 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102691 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102691.clairvoyant$core$ITraceEnter$))){
return true;
} else {
if((!G__102691.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102691);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__102691);
}
})()){
clairvoyant.core.trace_enter.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),trace_data__46787__auto____$4);
} else {
}

var f__46788__auto__ = ((function (trace_data__46787__auto____$4,db__$1,trace_data__46787__auto____$3,trace_data__46787__auto____$2,deck_to_remove,trace_data__46787__auto____$1,db,vec__102669,event_id_to_ignore,name_of_deck_to_remove,trace_data__46787__auto__){
return (function (){
var return__46789__auto__ = a_102270__$1;
if((function (){var G__102692 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102692 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102692.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102692.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102692);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102692);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$4,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$4,db__$1,trace_data__46787__auto____$3,trace_data__46787__auto____$2,deck_to_remove,trace_data__46787__auto____$1,db,vec__102669,event_id_to_ignore,name_of_deck_to_remove,trace_data__46787__auto__))
;
if((function (){var G__102693 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102693 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102693.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102693.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102693);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102693);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102694){if((e102694 instanceof Object)){
var e__46790__auto__ = e102694;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$4,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102694;

}
}} else {
return f__46788__auto__.call(null);
}
})();
return ((function (db__$1,deck_name,trace_data__46787__auto____$3,trace_data__46787__auto____$2,deck_to_remove,trace_data__46787__auto____$1,db,vec__102669,event_id_to_ignore,name_of_deck_to_remove,trace_data__46787__auto__){
return (function (){

return cardy.events.dissoc_in.call(null,db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),deck_name], null));
});})(db__$1,deck_name,trace_data__46787__auto____$3,trace_data__46787__auto____$2,deck_to_remove,trace_data__46787__auto____$1,db,vec__102669,event_id_to_ignore,name_of_deck_to_remove,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto____$3,trace_data__46787__auto____$2,deck_to_remove,trace_data__46787__auto____$1,db,vec__102669,event_id_to_ignore,name_of_deck_to_remove,trace_data__46787__auto__))
.call(null,a_102269,a_102270);
if((function (){var G__102695 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102695 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102695.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102695.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102695);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102695);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$3,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$3,trace_data__46787__auto____$2,deck_to_remove,trace_data__46787__auto____$1,db,vec__102669,event_id_to_ignore,name_of_deck_to_remove,trace_data__46787__auto__))
;
if((function (){var G__102696 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102696 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102696.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102696.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102696);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102696);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102697){if((e102697 instanceof Object)){
var e__46790__auto__ = e102697;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$3,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102697;

}
}} else {
return f__46788__auto__.call(null);
}
});})(trace_data__46787__auto____$2,deck_to_remove,trace_data__46787__auto____$1,db,vec__102669,event_id_to_ignore,name_of_deck_to_remove,trace_data__46787__auto__))
;
if((function (){var G__102698 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102698 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102698.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102698.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102698);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102698);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$2,deck_to_remove,trace_data__46787__auto____$1,db,vec__102669,event_id_to_ignore,name_of_deck_to_remove,trace_data__46787__auto__))
;
if((function (){var G__102699 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102699 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102699.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102699.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102699);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102699);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102700){if((e102700 instanceof Object)){
var e__46790__auto__ = e102700;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102700;

}
}} else {
return f__46788__auto__.call(null);
}
})();
if(cljs.core.truth_(cardy.events.last_deck_QMARK_.call(null,db))){
var app_state = db;
var app_state__$1 = cardy.events.add_deck.call(null,app_state,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
return cardy.events.bring_in_new_deck.call(null,app_state__$1,"placeholder");
} else {
if(cljs.core.truth_(cardy.events.removing_current_deck_QMARK_.call(null,db,deck_to_remove))){
var app_state = db;
var app_state__$1 = remove_deck.call(null,app_state,deck_to_remove);
var app_state__$2 = cardy.events.bring_in_new_deck.call(null,app_state__$1,cljs.core.name.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(app_state__$1)))));
return cardy.events.new_current_card.call(null,app_state__$2);
} else {
return remove_deck.call(null,db,deck_to_remove);
}
}
})();
if((function (){var G__102701 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102701 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102701.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102701.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102701);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102701);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto____$1,db,vec__102669,event_id_to_ignore,name_of_deck_to_remove,trace_data__46787__auto__))
;
if((function (){var G__102702 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102702 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102702.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102702.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102702);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102702);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102703){if((e102703 instanceof Object)){
var e__46790__auto__ = e102703;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102703;

}
}} else {
return f__46788__auto__.call(null);
}
});})(db,vec__102669,event_id_to_ignore,name_of_deck_to_remove,trace_data__46787__auto__))
.call(null);
});})(trace_data__46787__auto__))
.call(null,a_102271,a_102272);
if((function (){var G__102704 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102704 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102704.clairvoyant$core$ITraceExit$))){
return true;
} else {
if((!G__102704.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102704);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__102704);
}
})()){
clairvoyant.core.trace_exit.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__46789__auto__));
} else {
}

return return__46789__auto__;
});})(trace_data__46787__auto__))
;
if((function (){var G__102705 = re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue");
if(!((G__102705 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__102705.clairvoyant$core$ITraceError$))){
return true;
} else {
if((!G__102705.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102705);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__102705);
}
})()){
try{return f__46788__auto__.call(null);
}catch (e102706){if((e102706 instanceof Object)){
var e__46790__auto__ = e102706;
clairvoyant.core.trace_error.call(null,re_frame_tracer.core.tracer.call(null,new cljs.core.Keyword(null,"color","color",1011675173),"blue"),cljs.core.assoc.call(null,trace_data__46787__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__46790__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__46790__auto__)));

throw e__46790__auto__;
} else {
throw e102706;

}
}} else {
return f__46788__auto__.call(null);
}
}));
} else {
cardy.events.placeholder_card = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),"This deck has no cards yet. Add one!",new cljs.core.Keyword(null,"back","back",-417520012),"You can flip me. But you really should add a card!"], null);

cardy.events.placeholder_deck = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder-deck","placeholder-deck",1147906209),cljs.core.list(new cljs.core.Symbol(null,"placeholder-card","placeholder-card",-941510735,null))], null);

cardy.events.add_back_excluded = (function cardy$events$add_back_excluded(db){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"excluded","excluded",-715952088),cljs.core.PersistentHashSet.EMPTY);
});

cardy.events.input_to_keyword = (function cardy$events$input_to_keyword(a_string){
console.log("a-string in input-to-keyword is: ",a_string);

return cljs.core.keyword.call(null,clojure.string.trim.call(null,a_string));
});

/**
 * Accepts input (a string), returns a card (a map).
 */
cardy.events.input_to_card = (function cardy$events$input_to_card(a_string){
cljs.core.println.call(null,"a-string in input-to-card: ",a_string);

var words = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,a_string,/;/));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),cljs.core.first.call(null,words),new cljs.core.Keyword(null,"back","back",-417520012),cljs.core.second.call(null,words)], null);
});

/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
cardy.events.dissoc_in = (function cardy$events$dissoc_in(m,p__102707){
var vec__102708 = p__102707;
var seq__102709 = cljs.core.seq.call(null,vec__102708);
var first__102710 = cljs.core.first.call(null,seq__102709);
var seq__102709__$1 = cljs.core.next.call(null,seq__102709);
var k = first__102710;
var ks = seq__102709__$1;
var keys = vec__102708;
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
return cljs.core.keep_indexed.call(null,(function (p1__102217_SHARP_,p2__102218_SHARP_){
if(cljs.core.not_EQ_.call(null,p1__102217_SHARP_,n)){
return p2__102218_SHARP_;
} else {
return null;
}
}),coll);
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","initialize-test-db","cardy.events/initialize-test-db",1843213397),(function (_,___$1){
return cardy.db.test_db;
}));

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","initialize-db","cardy.events/initialize-db",1650796766),(function (_,___$1){
return cardy.db.default_db;
}));

re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("cardy.events","pull-decks","cardy.events/pull-decks",-274600551),(function cardy$events$pull_deck_handler(cofx,event){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pull-decks-fx","pull-decks-fx",-69608820),null], null);
}));

re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"pull-decks-fx","pull-decks-fx",-69608820),(function cardy$events$pull_decks_ajax(){
return ajax.core.GET.call(null,"/pull-decks",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__102219_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","set-decks","cardy.events/set-decks",1797217231),p1__102219_SHARP_], null));
})], null));
}));

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","set-decks","cardy.events/set-decks",1797217231),(function cardy$events$set_decks_handler(db,p__102711){
var vec__102712 = p__102711;
var event_id_to_ignore = cljs.core.nth.call(null,vec__102712,(0),null);
var decks = cljs.core.nth.call(null,vec__102712,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"decks","decks",-1740305496),decks);
}));

re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("cardy.events","push-decks","cardy.events/push-decks",-1525716789),(function cardy$events$push_decks_handler(cofx,event){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"push-decks-fx","push-decks-fx",473832076),new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx))], null);
}));

re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"push-decks-fx","push-decks-fx",473832076),(function cardy$events$push_decks_ajax(decks){
return ajax.core.POST.call(null,"/push-decks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"decks","decks",-1740305496),decks], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__102220_SHARP_){
return console.log("push-decks-ajax response was: ",p1__102220_SHARP_);
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

cardy.events.next_card = (function cardy$events$next_card(db){
var ineligible = cljs.core.conj.call(null,clojure.set.union.call(null,new cljs.core.Keyword(null,"excluded","excluded",-715952088).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"removed","removed",609626430).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"current-card","current-card",597444479).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.first.call(null,cljs.core.shuffle.call(null,cljs.core.remove.call(null,ineligible,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(db))));
});

cardy.events.new_current_card = (function cardy$events$new_current_card(db){
var new_card = cardy.events.next_card.call(null,db);
if(((new_card == null)) && (!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"excluded","excluded",-715952088).cljs$core$IFn$_invoke$arity$1(db))))){
return cardy.events.new_current_card.call(null,cardy.events.add_back_excluded.call(null,db));
} else {
if((new_card == null)){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-card","current-card",597444479),cardy.events.placeholder_card);
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-card","current-card",597444479),new_card);

}
}
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","next","cardy.events/next",-1017307955),cardy.events.new_current_card);

cardy.events.add_card = (function cardy$events$add_card(db,p__102715){
var vec__102716 = p__102715;
var event_id_to_ignore = cljs.core.nth.call(null,vec__102716,(0),null);
var user_input = cljs.core.nth.call(null,vec__102716,(1),null);
var current_cards = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(db);
var new_card = cardy.events.input_to_card.call(null,user_input);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.conj.call(null,current_cards,new_card));
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","add-card","cardy.events/add-card",-479246421),cardy.events.add_card);

cardy.events.remove_card = (function cardy$events$remove_card(db){
var app_state = db;
var app_state__$1 = cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"removed","removed",609626430),clojure.set.union.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"current-card","current-card",597444479).cljs$core$IFn$_invoke$arity$1(app_state)]),new cljs.core.Keyword(null,"removed","removed",609626430).cljs$core$IFn$_invoke$arity$1(app_state)));
return cardy.events.new_current_card.call(null,app_state__$1);
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","remove-card","cardy.events/remove-card",758557629),cardy.events.remove_card);

cardy.events.exclude_card = (function cardy$events$exclude_card(db){
var excluded = new cljs.core.Keyword(null,"excluded","excluded",-715952088).cljs$core$IFn$_invoke$arity$1(db);
var current_card = new cljs.core.Keyword(null,"current-card","current-card",597444479).cljs$core$IFn$_invoke$arity$1(db);
var app_state = db;
var app_state__$1 = cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"excluded","excluded",-715952088),cljs.core.conj.call(null,excluded,current_card));
return cardy.events.new_current_card.call(null,app_state__$1);
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","exclude-card","cardy.events/exclude-card",-1424283307),cardy.events.exclude_card);

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","add-back-excluded","cardy.events/add-back-excluded",443491881),cardy.events.add_back_excluded);

cardy.events.clear_removed = (function cardy$events$clear_removed(db){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY);
});

cardy.events.add_deck = (function cardy$events$add_deck(db,deck_name){

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),deck_name], null),cljs.core.PersistentHashSet.EMPTY);
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","add-deck","cardy.events/add-deck",1748167474),(function cardy$events$add_deck_handler(db,p__102719){
var vec__102720 = p__102719;
var event_id_to_ignore = cljs.core.nth.call(null,vec__102720,(0),null);
var name_for_new_deck = cljs.core.nth.call(null,vec__102720,(1),null);
return cardy.events.add_deck.call(null,db,cardy.events.input_to_keyword.call(null,name_for_new_deck));
}));

cardy.events.put_back_old_deck = (function cardy$events$put_back_old_deck(db){
var deck_less_removed = clojure.set.difference.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"removed","removed",609626430).cljs$core$IFn$_invoke$arity$1(db));
return cardy.events.clear_removed.call(null,cljs.core.assoc_in.call(null,cardy.events.add_back_excluded.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477).cljs$core$IFn$_invoke$arity$1(db)], null),deck_less_removed));
});

cardy.events.bring_in_new_deck = (function cardy$events$bring_in_new_deck(db,user_input){
var desired_deck = cardy.events.input_to_keyword.call(null,user_input);
var app_state = db;
var app_state__$1 = cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"cards","cards",169174038),desired_deck.call(null,new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(app_state)));
return cljs.core.assoc.call(null,app_state__$1,new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477),desired_deck);
});

cardy.events.change_deck = (function cardy$events$change_deck(db,p__102723){
var vec__102724 = p__102723;
var event_id_to_ignore = cljs.core.nth.call(null,vec__102724,(0),null);
var user_input = cljs.core.nth.call(null,vec__102724,(1),null);
var app_state = db;
var app_state__$1 = cardy.events.put_back_old_deck.call(null,app_state);
var app_state__$2 = cardy.events.bring_in_new_deck.call(null,app_state__$1,user_input);
return cljs.core.assoc.call(null,app_state__$2,new cljs.core.Keyword(null,"current-card","current-card",597444479),cardy.events.next_card.call(null,app_state__$2));
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","change-deck","cardy.events/change-deck",-1660930769),cardy.events.change_deck);

cardy.events.removing_current_deck_QMARK_ = (function cardy$events$removing_current_deck_QMARK_(db,deck_to_remove){

return cljs.core._EQ_.call(null,deck_to_remove,new cljs.core.Keyword(null,"current-deck","current-deck",-1457246477).cljs$core$IFn$_invoke$arity$1(db));
});

cardy.events.no_decks_QMARK_ = (function cardy$events$no_decks_QMARK_(db){
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(db));
});

cardy.events.last_deck_QMARK_ = (function cardy$events$last_deck_QMARK_(db){
return cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(db)));
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("cardy.events","remove-deck","cardy.events/remove-deck",-1965096554),(function cardy$events$remove_deck_handler(db,p__102727){
var vec__102728 = p__102727;
var event_id_to_ignore = cljs.core.nth.call(null,vec__102728,(0),null);
var name_of_deck_to_remove = cljs.core.nth.call(null,vec__102728,(1),null);
var deck_to_remove = cardy.events.input_to_keyword.call(null,name_of_deck_to_remove);
var remove_deck = ((function (deck_to_remove,vec__102728,event_id_to_ignore,name_of_deck_to_remove){
return (function (db__$1,deck_name){
return cardy.events.dissoc_in.call(null,db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496),deck_name], null));
});})(deck_to_remove,vec__102728,event_id_to_ignore,name_of_deck_to_remove))
;
if(cljs.core.truth_(cardy.events.last_deck_QMARK_.call(null,db))){
var app_state = db;
var app_state__$1 = cardy.events.add_deck.call(null,app_state,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
return cardy.events.bring_in_new_deck.call(null,app_state__$1,"placeholder");
} else {
if(cljs.core.truth_(cardy.events.removing_current_deck_QMARK_.call(null,db,deck_to_remove))){
var app_state = db;
var app_state__$1 = remove_deck.call(null,app_state,deck_to_remove);
var app_state__$2 = cardy.events.bring_in_new_deck.call(null,app_state__$1,cljs.core.name.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"decks","decks",-1740305496).cljs$core$IFn$_invoke$arity$1(app_state__$1)))));
return cardy.events.new_current_card.call(null,app_state__$2);
} else {
return remove_deck.call(null,db,deck_to_remove);
}
}
}));
}
