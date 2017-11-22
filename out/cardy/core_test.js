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
try{var values__52351__auto___103952 = (function (){var x__44218__auto__ = cljs.core.deref.call(null,removed);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})();
var result__52352__auto___103953 = cljs.core.apply.call(null,cljs.core.empty_QMARK_,values__52351__auto___103952);
if(cljs.core.truth_(result__52352__auto___103953)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.empty_QMARK_,values__52351__auto___103952),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"empty?","empty?",76408555,null),values__52351__auto___103952);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e103948){var t__52396__auto___103954 = e103948;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___103954,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","remove-card","cardy.events/remove-card",758557629)], null));

try{var values__52351__auto___103955 = (function (){var x__44218__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,removed));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})();
var result__52352__auto___103956 = cljs.core.apply.call(null,cljs.core.not,values__52351__auto___103955);
if(cljs.core.truth_(result__52352__auto___103956)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__52351__auto___103955),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__52351__auto___103955);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e103949){var t__52396__auto___103957 = e103949;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___103957,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__52351__auto___103958 = (function (){var x__44218__auto__ = (cljs.core.deref.call(null,removed) == null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})();
var result__52352__auto___103959 = cljs.core.apply.call(null,cljs.core.not,values__52351__auto___103958);
if(cljs.core.truth_(result__52352__auto___103959)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__52351__auto___103958),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__52351__auto___103958);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e103950){var t__52396__auto___103960 = e103950;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___103960,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
}catch (e103951){var t__52396__auto__ = e103951;
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
try{var values__52351__auto___103964 = (function (){var x__44218__auto__ = cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,cards),added_card);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})();
var result__52352__auto___103965 = cljs.core.apply.call(null,cljs.core.not,values__52351__auto___103964);
if(cljs.core.truth_(result__52352__auto___103965)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null)),new cljs.core.Symbol(null,"added-card","added-card",-671844193,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__52351__auto___103964),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null)),new cljs.core.Symbol(null,"added-card","added-card",-671844193,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__52351__auto___103964);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e103961){var t__52396__auto___103966 = e103961;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null)),new cljs.core.Symbol(null,"added-card","added-card",-671844193,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___103966,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
cardy.core_test.before_card_count = cljs.core.count.call(null,cljs.core.deref.call(null,cards));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","add-card","cardy.events/add-card",-479246421),user_input], null));

try{var values__52351__auto___103967 = (function (){var x__44218__auto__ = cljs.core.deref.call(null,cards);
return cljs.core._conj.call(null,(function (){var x__44218__auto____$1 = added_card;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto____$1);
})(),x__44218__auto__);
})();
var result__52352__auto___103968 = cljs.core.apply.call(null,cljs.core.contains_QMARK_,values__52351__auto___103967);
if(cljs.core.truth_(result__52352__auto___103968)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null)),new cljs.core.Symbol(null,"added-card","added-card",-671844193,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.contains_QMARK_,values__52351__auto___103967),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null)),new cljs.core.Symbol(null,"added-card","added-card",-671844193,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__52351__auto___103967);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e103962){var t__52396__auto___103969 = e103962;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null)),new cljs.core.Symbol(null,"added-card","added-card",-671844193,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___103969,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
}catch (e103963){var t__52396__auto__ = e103963;
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
try{var values__52351__auto___103975 = (function (){var x__44218__auto__ = cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,cards),expected_card);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})();
var result__52352__auto___103976 = cljs.core.apply.call(null,cljs.core.not,values__52351__auto___103975);
if(cljs.core.truth_(result__52352__auto___103976)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null)),new cljs.core.Symbol(null,"expected-card","expected-card",1746362973,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__52351__auto___103975),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null)),new cljs.core.Symbol(null,"expected-card","expected-card",1746362973,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__52351__auto___103975);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e103970){var t__52396__auto___103977 = e103970;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null)),new cljs.core.Symbol(null,"expected-card","expected-card",1746362973,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___103977,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
cardy.core_test.before_current_card = cljs.core.deref.call(null,current_card);

cardy.core_test.before_current_deck = cljs.core.deref.call(null,current_deck);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","change-deck","cardy.events/change-deck",-1660930769),user_input], null));

try{var values__52351__auto___103978 = (function (){var x__44218__auto__ = cljs.core.deref.call(null,cards);
return cljs.core._conj.call(null,(function (){var x__44218__auto____$1 = expected_card;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto____$1);
})(),x__44218__auto__);
})();
var result__52352__auto___103979 = cljs.core.apply.call(null,cljs.core.contains_QMARK_,values__52351__auto___103978);
if(cljs.core.truth_(result__52352__auto___103979)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null)),new cljs.core.Symbol(null,"expected-card","expected-card",1746362973,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.contains_QMARK_,values__52351__auto___103978),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null)),new cljs.core.Symbol(null,"expected-card","expected-card",1746362973,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__52351__auto___103978);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e103971){var t__52396__auto___103980 = e103971;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"cards","cards",1809705565,null)),new cljs.core.Symbol(null,"expected-card","expected-card",1746362973,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___103980,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var a__52600__auto___103981 = cljs.core.deref.call(null,current_deck);
var temp__4655__auto___103982 = cljs.core.seq.call(null,(function (){var x__44218__auto__ = cardy.events.input_to_keyword.call(null,user_input);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})());
if(temp__4655__auto___103982){
var more__52601__auto___103983 = temp__4655__auto___103982;
var result__52602__auto___103984 = cljs.core.apply.call(null,cljs.core._EQ_,a__52600__auto___103981,more__52601__auto___103983);
if(cljs.core.truth_(result__52602__auto___103984)){
pjstadig.macro.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),a__52600__auto___103981,new cljs.core.Keyword(null,"actual","actual",107306363),more__52601__auto___103983,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
pjstadig.macro.do_report.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"diffs","diffs",-1720136241),cljs.core.map.call(null,cljs.core.vector,more__52601__auto___103983,cljs.core.map.call(null,((function (result__52602__auto___103984,more__52601__auto___103983,temp__4655__auto___103982,a__52600__auto___103981,cards,current_deck,current_card,user_input,expected_card){
return (function (p1__52599__52603__auto__){
return cljs.core.take.call(null,(2),pjstadig.macro.diff.call(null,a__52600__auto___103981,p1__52599__52603__auto__));
});})(result__52602__auto___103984,more__52601__auto___103983,temp__4655__auto___103982,a__52600__auto___103981,cards,current_deck,current_card,user_input,expected_card))
,more__52601__auto___103983)),new cljs.core.Keyword(null,"expected","expected",1583670997),a__52600__auto___103981,new cljs.core.Keyword(null,"actual","actual",107306363),more__52601__auto___103983,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

} else {
throw (new java.lang.Exception("= expects more than one argument"));
}
}catch (e103972){var t__52396__auto___103985 = e103972;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"current-deck","current-deck",183285050,null)),cljs.core.list(new cljs.core.Symbol("events","input-to-keyword","events/input-to-keyword",-1198884075,null),new cljs.core.Symbol(null,"user-input","user-input",1136289105,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___103985,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__52351__auto___103986 = (function (){var x__44218__auto__ = cljs.core._EQ_.call(null,cardy.core_test.before_current_deck,cljs.core.deref.call(null,current_deck));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})();
var result__52352__auto___103987 = cljs.core.apply.call(null,cljs.core.not,values__52351__auto___103986);
if(cljs.core.truth_(result__52352__auto___103987)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"before-current-deck","before-current-deck",716820415,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"current-deck","current-deck",183285050,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__52351__auto___103986),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"before-current-deck","before-current-deck",716820415,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"current-deck","current-deck",183285050,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__52351__auto___103986);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e103973){var t__52396__auto___103988 = e103973;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"before-current-deck","before-current-deck",716820415,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"current-deck","current-deck",183285050,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___103988,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
}catch (e103974){var t__52396__auto__ = e103974;
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
try{var values__52351__auto___103992 = (function (){var x__44218__auto__ = cljs.core.deref.call(null,excluded);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})();
var result__52352__auto___103993 = cljs.core.apply.call(null,cljs.core.empty_QMARK_,values__52351__auto___103992);
if(cljs.core.truth_(result__52352__auto___103993)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"excluded","excluded",924579439,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.empty_QMARK_,values__52351__auto___103992),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"excluded","excluded",924579439,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"empty?","empty?",76408555,null),values__52351__auto___103992);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e103989){var t__52396__auto___103994 = e103989;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"excluded","excluded",924579439,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___103994,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
cardy.core_test.before_current_card = cljs.core.deref.call(null,current_card);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","exclude-card","cardy.events/exclude-card",-1424283307)], null));

try{var values__52351__auto___103995 = (function (){var x__44218__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,excluded));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})();
var result__52352__auto___103996 = cljs.core.apply.call(null,cljs.core.not,values__52351__auto___103995);
if(cljs.core.truth_(result__52352__auto___103996)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"excluded","excluded",924579439,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__52351__auto___103995),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"excluded","excluded",924579439,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__52351__auto___103995);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e103990){var t__52396__auto___103997 = e103990;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"excluded","excluded",924579439,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___103997,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
}catch (e103991){var t__52396__auto__ = e103991;
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
try{var values__52351__auto___104002 = (function (){var x__44218__auto__ = cljs.core.deref.call(null,removed);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})();
var result__52352__auto___104003 = cljs.core.apply.call(null,cljs.core.empty_QMARK_,values__52351__auto___104002);
if(cljs.core.truth_(result__52352__auto___104003)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.empty_QMARK_,values__52351__auto___104002),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"empty?","empty?",76408555,null),values__52351__auto___104002);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e103998){var t__52396__auto___104004 = e103998;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___104004,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","change-deck","cardy.events/change-deck",-1660930769),"one-card-deck"], null));

cardy.core_test.before_current_card = cljs.core.deref.call(null,current_card);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","remove-card","cardy.events/remove-card",758557629)], null));

try{var values__52351__auto___104005 = (function (){var x__44218__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,removed));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})();
var result__52352__auto___104006 = cljs.core.apply.call(null,cljs.core.not,values__52351__auto___104005);
if(cljs.core.truth_(result__52352__auto___104006)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__52351__auto___104005),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__44218__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__52351__auto___104005);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e103999){var t__52396__auto___104007 = e103999;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___104007,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var a__52600__auto___104008 = cljs.core.PersistentHashSet.createAsIfByAssoc([cardy.core_test.before_current_card]);
var temp__4655__auto___104009 = cljs.core.seq.call(null,(function (){var x__44218__auto__ = cljs.core.deref.call(null,removed);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})());
if(temp__4655__auto___104009){
var more__52601__auto___104010 = temp__4655__auto___104009;
var result__52602__auto___104011 = cljs.core.apply.call(null,cljs.core._EQ_,a__52600__auto___104008,more__52601__auto___104010);
if(cljs.core.truth_(result__52602__auto___104011)){
pjstadig.macro.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),a__52600__auto___104008,new cljs.core.Keyword(null,"actual","actual",107306363),more__52601__auto___104010,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
pjstadig.macro.do_report.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"diffs","diffs",-1720136241),cljs.core.map.call(null,cljs.core.vector,more__52601__auto___104010,cljs.core.map.call(null,((function (result__52602__auto___104011,more__52601__auto___104010,temp__4655__auto___104009,a__52600__auto___104008,removed,current_card){
return (function (p1__52599__52603__auto__){
return cljs.core.take.call(null,(2),pjstadig.macro.diff.call(null,a__52600__auto___104008,p1__52599__52603__auto__));
});})(result__52602__auto___104011,more__52601__auto___104010,temp__4655__auto___104009,a__52600__auto___104008,removed,current_card))
,more__52601__auto___104010)),new cljs.core.Keyword(null,"expected","expected",1583670997),a__52600__auto___104008,new cljs.core.Keyword(null,"actual","actual",107306363),more__52601__auto___104010,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

} else {
throw (new java.lang.Exception("= expects more than one argument"));
}
}catch (e104000){var t__52396__auto___104012 = e104000;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"before-current-card","before-current-card",-623026681,null),null], null), null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"removed","removed",-2044809339,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto___104012,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
}catch (e104001){var t__52396__auto__ = e104001;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("subs","placeholder-card","subs/placeholder-card",-942163570,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"current-card","current-card",-2056991290,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52396__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}));
});

cardy.core_test.remove_last_card.cljs$lang$var = new cljs.core.Var(function(){return cardy.core_test.remove_last_card;},new cljs.core.Symbol("cardy.core-test","remove-last-card","cardy.core-test/remove-last-card",855894454,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cardy.core-test","cardy.core-test",-707480694,null),new cljs.core.Symbol(null,"remove-last-card","remove-last-card",-1565696147,null),"/Users/concerto/cs/cardy/test/cljs/cardy/core_test.cljs",26,1,124,124,cljs.core.List.EMPTY,null,(cljs.core.truth_(cardy.core_test.remove_last_card)?cardy.core_test.remove_last_card.cljs$lang$test:null)]));
