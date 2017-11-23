// Compiled by ClojureScript 1.9.946 {}
goog.provide('cardy.core_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('pjstadig.humane_test_output');
goog.require('reagent.core');
goog.require('cardy.core');
goog.require('re_frame.core');
goog.require('day8.re_frame.test');
goog.require('cardy.events');
goog.require('cardy.subs');
cardy.core_test.remove_card = (function cardy$core_test$remove_card(){
return cljs.test.test_var.call(null,cardy.core_test.remove_card.cljs$lang$var);
});
cardy.core_test.remove_card.cljs$lang$test = (function (){
return day8.re_frame.test.run_test_sync_STAR_.call(null,(function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","initialize-test-db","cardy.events/initialize-test-db",1843213397)], null));

var removed = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","removed","cardy.subs/removed",-1055681562)], null));
try{var values__52351__auto___104027 = (function (){var x__44218__auto__ = cljs.core.deref.call(null,removed);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})();
var result__52352__auto___104028 = cljs.core.apply.call(null,cljs.core.empty_QMARK_,values__52351__auto___104027);
if(cljs.core.truth_(result__52352__auto___104028)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.empty_QMARK_,values__52351__auto___104027),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"empty?","empty?",76408555,null),values__52351__auto___104027);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e104023){var t__52396__auto___104029 = e104023;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___104029,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","remove-card","cardy.events/remove-card",758557629)], null));

try{var values__52351__auto___104030 = (function (){var x__44218__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,removed));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})();
var result__52352__auto___104031 = cljs.core.apply.call(null,cljs.core.not,values__52351__auto___104030);
if(cljs.core.truth_(result__52352__auto___104031)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__52351__auto___104030),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__52351__auto___104030);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e104024){var t__52396__auto___104032 = e104024;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___104032,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__52351__auto___104033 = (function (){var x__44218__auto__ = (cljs.core.deref.call(null,removed) == null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})();
var result__52352__auto___104034 = cljs.core.apply.call(null,cljs.core.not,values__52351__auto___104033);
if(cljs.core.truth_(result__52352__auto___104034)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__52351__auto___104033),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__52351__auto___104033);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e104025){var t__52396__auto___104035 = e104025;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___104035,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var a__52600__auto__ = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),"Deutsch",new cljs.core.Keyword(null,"back","back",-417520012),"German"], null)]);
var temp__4655__auto__ = cljs.core.seq.call(null,(function (){var x__44218__auto__ = cljs.core.deref.call(null,removed);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})());
if(temp__4655__auto__){
var more__52601__auto__ = temp__4655__auto__;
var result__52602__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,a__52600__auto__,more__52601__auto__);
if(cljs.core.truth_(result__52602__auto__)){
pjstadig.macro.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),a__52600__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),more__52601__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
pjstadig.macro.do_report.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"diffs","diffs",-1720136241),cljs.core.map.call(null,cljs.core.vector,more__52601__auto__,cljs.core.map.call(null,((function (result__52602__auto__,more__52601__auto__,temp__4655__auto__,a__52600__auto__,removed){
return (function (p1__52599__52603__auto__){
return cljs.core.take.call(null,(2),pjstadig.macro.diff.call(null,a__52600__auto__,p1__52599__52603__auto__));
});})(result__52602__auto__,more__52601__auto__,temp__4655__auto__,a__52600__auto__,removed))
,more__52601__auto__)),new cljs.core.Keyword(null,"expected","expected",1583670997),a__52600__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),more__52601__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__52602__auto__;
} else {
throw (new java.lang.Exception("= expects more than one argument"));
}
}catch (e104026){var t__52396__auto__ = e104026;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),"Deutsch",new cljs.core.Keyword(null,"back","back",-417520012),"German"], null)]),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}));
});

cardy.core_test.remove_card.cljs$lang$var = new cljs.core.Var(function(){return cardy.core_test.remove_card;},new cljs.core.Symbol("cardy.core-test","remove-card","cardy.core-test/remove-card",-2050394999,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cardy.core-test","cardy.core-test",-707480694,null),new cljs.core.Symbol(null,"remove-card","remove-card",895478082,null),"/Users/concerto/cs/cardy/test/cljs/cardy/core_test.cljs",21,1,25,25,cljs.core.List.EMPTY,null,(cljs.core.truth_(cardy.core_test.remove_card)?cardy.core_test.remove_card.cljs$lang$test:null)]));
cardy.core_test.add_card = (function cardy$core_test$add_card(){
return cljs.test.test_var.call(null,cardy.core_test.add_card.cljs$lang$var);
});
cardy.core_test.add_card.cljs$lang$test = (function (){
return day8.re_frame.test.run_test_sync_STAR_.call(null,(function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","initialize-test-db","cardy.events/initialize-test-db",1843213397)], null));

var cards = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","cards","cardy.subs/cards",1976170110)], null));
var user_input = "Bayern; Bavaria";
var added_card = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),"Bayern",new cljs.core.Keyword(null,"back","back",-417520012),"Bavaria"], null);
try{var values__52351__auto___104039 = (function (){var x__44218__auto__ = cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,cards),added_card);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})();
var result__52352__auto___104040 = cljs.core.apply.call(null,cljs.core.not,values__52351__auto___104039);
if(cljs.core.truth_(result__52352__auto___104040)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null)),new cljs.core.Symbol(null,"added-card","added-card",-671844193,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__52351__auto___104039),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null)),new cljs.core.Symbol(null,"added-card","added-card",-671844193,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__52351__auto___104039);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e104036){var t__52396__auto___104041 = e104036;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null)),new cljs.core.Symbol(null,"added-card","added-card",-671844193,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___104041,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
cardy.core_test.before_card_count = cljs.core.count.call(null,cljs.core.deref.call(null,cards));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-card","cardy.events/add-card",-479246421),user_input], null));

try{var values__52351__auto___104042 = (function (){var x__44218__auto__ = cljs.core.deref.call(null,cards);
return cljs.core._conj.call(null,(function (){var x__44218__auto____$1 = added_card;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto____$1);
})(),x__44218__auto__);
})();
var result__52352__auto___104043 = cljs.core.apply.call(null,cljs.core.contains_QMARK_,values__52351__auto___104042);
if(cljs.core.truth_(result__52352__auto___104043)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null)),new cljs.core.Symbol(null,"added-card","added-card",-671844193,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.contains_QMARK_,values__52351__auto___104042),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null)),new cljs.core.Symbol(null,"added-card","added-card",-671844193,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__52351__auto___104042);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e104037){var t__52396__auto___104044 = e104037;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null)),new cljs.core.Symbol(null,"added-card","added-card",-671844193,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___104044,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var a__52600__auto__ = (cardy.core_test.before_card_count + (1));
var temp__4655__auto__ = cljs.core.seq.call(null,(function (){var x__44218__auto__ = cljs.core.count.call(null,cljs.core.deref.call(null,cards));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})());
if(temp__4655__auto__){
var more__52601__auto__ = temp__4655__auto__;
var result__52602__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,a__52600__auto__,more__52601__auto__);
if(cljs.core.truth_(result__52602__auto__)){
pjstadig.macro.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),a__52600__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),more__52601__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
pjstadig.macro.do_report.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"diffs","diffs",-1720136241),cljs.core.map.call(null,cljs.core.vector,more__52601__auto__,cljs.core.map.call(null,((function (result__52602__auto__,more__52601__auto__,temp__4655__auto__,a__52600__auto__,cards,user_input,added_card){
return (function (p1__52599__52603__auto__){
return cljs.core.take.call(null,(2),pjstadig.macro.diff.call(null,a__52600__auto__,p1__52599__52603__auto__));
});})(result__52602__auto__,more__52601__auto__,temp__4655__auto__,a__52600__auto__,cards,user_input,added_card))
,more__52601__auto__)),new cljs.core.Keyword(null,"expected","expected",1583670997),a__52600__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),more__52601__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__52602__auto__;
} else {
throw (new java.lang.Exception("= expects more than one argument"));
}
}catch (e104038){var t__52396__auto__ = e104038;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"before-card-count","before-card-count",-863592315,null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}));
});

cardy.core_test.add_card.cljs$lang$var = new cljs.core.Var(function(){return cardy.core_test.add_card;},new cljs.core.Symbol("cardy.core-test","add-card","cardy.core-test/add-card",-1106443657,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cardy.core-test","cardy.core-test",-707480694,null),new cljs.core.Symbol(null,"add-card","add-card",781628592,null),"/Users/concerto/cs/cardy/test/cljs/cardy/core_test.cljs",18,1,45,45,cljs.core.List.EMPTY,null,(cljs.core.truth_(cardy.core_test.add_card)?cardy.core_test.add_card.cljs$lang$test:null)]));
cardy.core_test.change_deck = (function cardy$core_test$change_deck(){
return cljs.test.test_var.call(null,cardy.core_test.change_deck.cljs$lang$var);
});
cardy.core_test.change_deck.cljs$lang$test = (function (){
return day8.re_frame.test.run_test_sync_STAR_.call(null,(function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","initialize-test-db","cardy.events/initialize-test-db",1843213397)], null));

var cards = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","cards","cardy.subs/cards",1976170110)], null));
var current_deck = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current-deck","cardy.subs/current-deck",73777723)], null));
var current_card = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current-card","cardy.subs/current-card",-2024236505)], null));
var user_input = "one-card-deck";
var expected_card = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),"das Haus",new cljs.core.Keyword(null,"back","back",-417520012),"house"], null);
try{var values__52351__auto___104050 = (function (){var x__44218__auto__ = cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,cards),expected_card);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})();
var result__52352__auto___104051 = cljs.core.apply.call(null,cljs.core.not,values__52351__auto___104050);
if(cljs.core.truth_(result__52352__auto___104051)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null)),new cljs.core.Symbol(null,"expected-card","expected-card",1746362973,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__52351__auto___104050),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null)),new cljs.core.Symbol(null,"expected-card","expected-card",1746362973,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__52351__auto___104050);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e104045){var t__52396__auto___104052 = e104045;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null)),new cljs.core.Symbol(null,"expected-card","expected-card",1746362973,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___104052,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
cardy.core_test.before_current_card = cljs.core.deref.call(null,current_card);

cardy.core_test.before_current_deck = cljs.core.deref.call(null,current_deck);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","change-deck","cardy.events/change-deck",-1660930769),user_input], null));

try{var values__52351__auto___104053 = (function (){var x__44218__auto__ = cljs.core.deref.call(null,cards);
return cljs.core._conj.call(null,(function (){var x__44218__auto____$1 = expected_card;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto____$1);
})(),x__44218__auto__);
})();
var result__52352__auto___104054 = cljs.core.apply.call(null,cljs.core.contains_QMARK_,values__52351__auto___104053);
if(cljs.core.truth_(result__52352__auto___104054)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null)),new cljs.core.Symbol(null,"expected-card","expected-card",1746362973,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.contains_QMARK_,values__52351__auto___104053),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null)),new cljs.core.Symbol(null,"expected-card","expected-card",1746362973,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__52351__auto___104053);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e104046){var t__52396__auto___104055 = e104046;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null)),new cljs.core.Symbol(null,"expected-card","expected-card",1746362973,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___104055,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var a__52600__auto___104056 = cljs.core.deref.call(null,current_deck);
var temp__4655__auto___104057 = cljs.core.seq.call(null,(function (){var x__44218__auto__ = cardy.events.input_to_keyword.call(null,user_input);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})());
if(temp__4655__auto___104057){
var more__52601__auto___104058 = temp__4655__auto___104057;
var result__52602__auto___104059 = cljs.core.apply.call(null,cljs.core._EQ_,a__52600__auto___104056,more__52601__auto___104058);
if(cljs.core.truth_(result__52602__auto___104059)){
pjstadig.macro.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),a__52600__auto___104056,new cljs.core.Keyword(null,"actual","actual",107306363),more__52601__auto___104058,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
pjstadig.macro.do_report.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"diffs","diffs",-1720136241),cljs.core.map.call(null,cljs.core.vector,more__52601__auto___104058,cljs.core.map.call(null,((function (result__52602__auto___104059,more__52601__auto___104058,temp__4655__auto___104057,a__52600__auto___104056,cards,current_deck,current_card,user_input,expected_card){
return (function (p1__52599__52603__auto__){
return cljs.core.take.call(null,(2),pjstadig.macro.diff.call(null,a__52600__auto___104056,p1__52599__52603__auto__));
});})(result__52602__auto___104059,more__52601__auto___104058,temp__4655__auto___104057,a__52600__auto___104056,cards,current_deck,current_card,user_input,expected_card))
,more__52601__auto___104058)),new cljs.core.Keyword(null,"expected","expected",1583670997),a__52600__auto___104056,new cljs.core.Keyword(null,"actual","actual",107306363),more__52601__auto___104058,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

} else {
throw (new java.lang.Exception("= expects more than one argument"));
}
}catch (e104047){var t__52396__auto___104060 = e104047;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"current-deck","current-deck",183285050,null)),cljs.core.list(new cljs.core.Symbol("events","input-to-keyword","events/input-to-keyword",-1198884075,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___104060,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__52351__auto___104061 = (function (){var x__44218__auto__ = cljs.core._EQ_.call(null,cardy.core_test.before_current_deck,cljs.core.deref.call(null,current_deck));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})();
var result__52352__auto___104062 = cljs.core.apply.call(null,cljs.core.not,values__52351__auto___104061);
if(cljs.core.truth_(result__52352__auto___104062)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"before-current-deck","before-current-deck",716820415,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"current-deck","current-deck",183285050,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__52351__auto___104061),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"before-current-deck","before-current-deck",716820415,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"current-deck","current-deck",183285050,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__52351__auto___104061);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e104048){var t__52396__auto___104063 = e104048;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"before-current-deck","before-current-deck",716820415,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"current-deck","current-deck",183285050,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___104063,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__52351__auto__ = (function (){var x__44218__auto__ = cljs.core._EQ_.call(null,cardy.core_test.before_current_card,cljs.core.deref.call(null,current_card));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})();
var result__52352__auto__ = cljs.core.apply.call(null,cljs.core.not,values__52351__auto__);
if(cljs.core.truth_(result__52352__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"before-current-card","before-current-card",-623026681,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"current-card","current-card",-2056991290,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__52351__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"before-current-card","before-current-card",-623026681,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"current-card","current-card",-2056991290,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__52351__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__52352__auto__;
}catch (e104049){var t__52396__auto__ = e104049;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"before-current-card","before-current-card",-623026681,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"current-card","current-card",-2056991290,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}));
});

cardy.core_test.change_deck.cljs$lang$var = new cljs.core.Var(function(){return cardy.core_test.change_deck;},new cljs.core.Symbol("cardy.core-test","change-deck","cardy.core-test/change-deck",-438377995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cardy.core-test","cardy.core-test",-707480694,null),new cljs.core.Symbol(null,"change-deck","change-deck",346575416,null),"/Users/concerto/cs/cardy/test/cljs/cardy/core_test.cljs",21,1,67,67,cljs.core.List.EMPTY,null,(cljs.core.truth_(cardy.core_test.change_deck)?cardy.core_test.change_deck.cljs$lang$test:null)]));
cardy.core_test.exclude_card = (function cardy$core_test$exclude_card(){
return cljs.test.test_var.call(null,cardy.core_test.exclude_card.cljs$lang$var);
});
cardy.core_test.exclude_card.cljs$lang$test = (function (){
return day8.re_frame.test.run_test_sync_STAR_.call(null,(function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","initialize-test-db","cardy.events/initialize-test-db",1843213397)], null));

var cards = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","cards","cardy.subs/cards",1976170110)], null));
var excluded = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","excluded","cardy.subs/excluded",839965248)], null));
var current_card = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current-card","cardy.subs/current-card",-2024236505)], null));
try{var values__52351__auto___104067 = (function (){var x__44218__auto__ = cljs.core.deref.call(null,excluded);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})();
var result__52352__auto___104068 = cljs.core.apply.call(null,cljs.core.empty_QMARK_,values__52351__auto___104067);
if(cljs.core.truth_(result__52352__auto___104068)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"excluded","excluded",924579439,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.empty_QMARK_,values__52351__auto___104067),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"excluded","excluded",924579439,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"empty?","empty?",76408555,null),values__52351__auto___104067);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e104064){var t__52396__auto___104069 = e104064;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"excluded","excluded",924579439,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___104069,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
cardy.core_test.before_current_card = cljs.core.deref.call(null,current_card);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","exclude-card","cardy.events/exclude-card",-1424283307)], null));

try{var values__52351__auto___104070 = (function (){var x__44218__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,excluded));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})();
var result__52352__auto___104071 = cljs.core.apply.call(null,cljs.core.not,values__52351__auto___104070);
if(cljs.core.truth_(result__52352__auto___104071)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"excluded","excluded",924579439,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__52351__auto___104070),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"excluded","excluded",924579439,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__52351__auto___104070);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e104065){var t__52396__auto___104072 = e104065;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"excluded","excluded",924579439,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___104072,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__52351__auto__ = (function (){var x__44218__auto__ = cljs.core._EQ_.call(null,cardy.core_test.before_current_card,cljs.core.deref.call(null,current_card));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})();
var result__52352__auto__ = cljs.core.apply.call(null,cljs.core.not,values__52351__auto__);
if(cljs.core.truth_(result__52352__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"before-current-card","before-current-card",-623026681,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"current-card","current-card",-2056991290,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__52351__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"before-current-card","before-current-card",-623026681,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"current-card","current-card",-2056991290,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__52351__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__52352__auto__;
}catch (e104066){var t__52396__auto__ = e104066;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"before-current-card","before-current-card",-623026681,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"current-card","current-card",-2056991290,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}));
});

cardy.core_test.exclude_card.cljs$lang$var = new cljs.core.Var(function(){return cardy.core_test.exclude_card;},new cljs.core.Symbol("cardy.core-test","exclude-card","cardy.core-test/exclude-card",836105489,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cardy.core-test","cardy.core-test",-707480694,null),new cljs.core.Symbol(null,"exclude-card","exclude-card",-1589491874,null),"/Users/concerto/cs/cardy/test/cljs/cardy/core_test.cljs",22,1,96,96,cljs.core.List.EMPTY,null,(cljs.core.truth_(cardy.core_test.exclude_card)?cardy.core_test.exclude_card.cljs$lang$test:null)]));
cardy.core_test.remove_last_card = (function cardy$core_test$remove_last_card(){
return cljs.test.test_var.call(null,cardy.core_test.remove_last_card.cljs$lang$var);
});
cardy.core_test.remove_last_card.cljs$lang$test = (function (){
return day8.re_frame.test.run_test_sync_STAR_.call(null,(function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","initialize-test-db","cardy.events/initialize-test-db",1843213397)], null));

var removed = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","removed","cardy.subs/removed",-1055681562)], null));
var current_card = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.subs","current-card","cardy.subs/current-card",-2024236505)], null));
try{var values__52351__auto___104077 = (function (){var x__44218__auto__ = cljs.core.deref.call(null,removed);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})();
var result__52352__auto___104078 = cljs.core.apply.call(null,cljs.core.empty_QMARK_,values__52351__auto___104077);
if(cljs.core.truth_(result__52352__auto___104078)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.empty_QMARK_,values__52351__auto___104077),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"empty?","empty?",76408555,null),values__52351__auto___104077);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e104073){var t__52396__auto___104079 = e104073;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___104079,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","change-deck","cardy.events/change-deck",-1660930769),"one-card-deck"], null));

cardy.core_test.before_current_card = cljs.core.deref.call(null,current_card);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","remove-card","cardy.events/remove-card",758557629)], null));

try{var values__52351__auto___104080 = (function (){var x__44218__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,removed));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})();
var result__52352__auto___104081 = cljs.core.apply.call(null,cljs.core.not,values__52351__auto___104080);
if(cljs.core.truth_(result__52352__auto___104081)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__52351__auto___104080),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__52351__auto___104080);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e104074){var t__52396__auto___104082 = e104074;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___104082,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var a__52600__auto___104083 = cljs.core.PersistentHashSet.createAsIfByAssoc([cardy.core_test.before_current_card]);
var temp__4655__auto___104084 = cljs.core.seq.call(null,(function (){var x__44218__auto__ = cljs.core.deref.call(null,removed);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})());
if(temp__4655__auto___104084){
var more__52601__auto___104085 = temp__4655__auto___104084;
var result__52602__auto___104086 = cljs.core.apply.call(null,cljs.core._EQ_,a__52600__auto___104083,more__52601__auto___104085);
if(cljs.core.truth_(result__52602__auto___104086)){
pjstadig.macro.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),a__52600__auto___104083,new cljs.core.Keyword(null,"actual","actual",107306363),more__52601__auto___104085,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
pjstadig.macro.do_report.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"diffs","diffs",-1720136241),cljs.core.map.call(null,cljs.core.vector,more__52601__auto___104085,cljs.core.map.call(null,((function (result__52602__auto___104086,more__52601__auto___104085,temp__4655__auto___104084,a__52600__auto___104083,removed,current_card){
return (function (p1__52599__52603__auto__){
return cljs.core.take.call(null,(2),pjstadig.macro.diff.call(null,a__52600__auto___104083,p1__52599__52603__auto__));
});})(result__52602__auto___104086,more__52601__auto___104085,temp__4655__auto___104084,a__52600__auto___104083,removed,current_card))
,more__52601__auto___104085)),new cljs.core.Keyword(null,"expected","expected",1583670997),a__52600__auto___104083,new cljs.core.Keyword(null,"actual","actual",107306363),more__52601__auto___104085,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

} else {
throw (new java.lang.Exception("= expects more than one argument"));
}
}catch (e104075){var t__52396__auto___104087 = e104075;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"before-current-card","before-current-card",-623026681,null),null], null), null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___104087,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var a__52600__auto__ = cardy.subs.placeholder_card;
var temp__4655__auto__ = cljs.core.seq.call(null,(function (){var x__44218__auto__ = cljs.core.deref.call(null,current_card);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})());
if(temp__4655__auto__){
var more__52601__auto__ = temp__4655__auto__;
var result__52602__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,a__52600__auto__,more__52601__auto__);
if(cljs.core.truth_(result__52602__auto__)){
pjstadig.macro.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),a__52600__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),more__52601__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
pjstadig.macro.do_report.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"diffs","diffs",-1720136241),cljs.core.map.call(null,cljs.core.vector,more__52601__auto__,cljs.core.map.call(null,((function (result__52602__auto__,more__52601__auto__,temp__4655__auto__,a__52600__auto__,removed,current_card){
return (function (p1__52599__52603__auto__){
return cljs.core.take.call(null,(2),pjstadig.macro.diff.call(null,a__52600__auto__,p1__52599__52603__auto__));
});})(result__52602__auto__,more__52601__auto__,temp__4655__auto__,a__52600__auto__,removed,current_card))
,more__52601__auto__)),new cljs.core.Keyword(null,"expected","expected",1583670997),a__52600__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),more__52601__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__52602__auto__;
} else {
throw (new java.lang.Exception("= expects more than one argument"));
}
}catch (e104076){var t__52396__auto__ = e104076;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("subs","placeholder-card","subs/placeholder-card",-942163570,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"current-card","current-card",-2056991290,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}));
});

cardy.core_test.remove_last_card.cljs$lang$var = new cljs.core.Var(function(){return cardy.core_test.remove_last_card;},new cljs.core.Symbol("cardy.core-test","remove-last-card","cardy.core-test/remove-last-card",855894454,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cardy.core-test","cardy.core-test",-707480694,null),new cljs.core.Symbol(null,"remove-last-card","remove-last-card",-1565696147,null),"/Users/concerto/cs/cardy/test/cljs/cardy/core_test.cljs",26,1,124,124,cljs.core.List.EMPTY,null,(cljs.core.truth_(cardy.core_test.remove_last_card)?cardy.core_test.remove_last_card.cljs$lang$test:null)]));
