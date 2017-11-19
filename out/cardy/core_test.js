// Compiled by ClojureScript 1.9.946 {}
goog.provide('cardy.core_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('pjstadig.humane_test_output');
goog.require('reagent.core');
goog.require('cardy.core');
cardy.core_test.test_home = (function cardy$core_test$test_home(){
return cljs.test.test_var.call(null,cardy.core_test.test_home.cljs$lang$var);
});
cardy.core_test.test_home.cljs$lang$test = (function (){
try{var a__46536__auto__ = true;
var temp__4655__auto__ = cljs.core.seq.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true));
if(temp__4655__auto__){
var more__46537__auto__ = temp__4655__auto__;
var result__46538__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,a__46536__auto__,more__46537__auto__);
if(cljs.core.truth_(result__46538__auto__)){
pjstadig.macro.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),a__46536__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),more__46537__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
pjstadig.macro.do_report.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"diffs","diffs",-1720136241),cljs.core.map.call(null,cljs.core.vector,more__46537__auto__,cljs.core.map.call(null,((function (result__46538__auto__,more__46537__auto__,temp__4655__auto__,a__46536__auto__){
return (function (p1__46535__46539__auto__){
return cljs.core.take.call(null,(2),pjstadig.macro.diff.call(null,a__46536__auto__,p1__46535__46539__auto__));
});})(result__46538__auto__,more__46537__auto__,temp__4655__auto__,a__46536__auto__))
,more__46537__auto__)),new cljs.core.Keyword(null,"expected","expected",1583670997),a__46536__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),more__46537__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__46538__auto__;
} else {
throw (new java.lang.Exception("= expects more than one argument"));
}
}catch (e52667){var t__46278__auto__ = e52667;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,true),new cljs.core.Keyword(null,"actual","actual",107306363),t__46278__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

cardy.core_test.test_home.cljs$lang$var = new cljs.core.Var(function(){return cardy.core_test.test_home;},new cljs.core.Symbol("cardy.core-test","test-home","cardy.core-test/test-home",-459900262,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cardy.core-test","cardy.core-test",-707480694,null),new cljs.core.Symbol(null,"test-home","test-home",1948456799,null),"/Users/concerto/cs/cardy/test/cljs/cardy/core_test.cljs",19,1,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(cardy.core_test.test_home)?cardy.core_test.test_home.cljs$lang$test:null)]));
cardy.core_test.another_test = (function cardy$core_test$another_test(){
return cljs.test.test_var.call(null,cardy.core_test.another_test.cljs$lang$var);
});
cardy.core_test.another_test.cljs$lang$test = (function (){
try{var a__46536__auto__ = (2);
var temp__4655__auto__ = cljs.core.seq.call(null,(function (){var x__44218__auto__ = ((1) + (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})());
if(temp__4655__auto__){
var more__46537__auto__ = temp__4655__auto__;
var result__46538__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,a__46536__auto__,more__46537__auto__);
if(cljs.core.truth_(result__46538__auto__)){
pjstadig.macro.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),a__46536__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),more__46537__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
pjstadig.macro.do_report.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"diffs","diffs",-1720136241),cljs.core.map.call(null,cljs.core.vector,more__46537__auto__,cljs.core.map.call(null,((function (result__46538__auto__,more__46537__auto__,temp__4655__auto__,a__46536__auto__){
return (function (p1__46535__46539__auto__){
return cljs.core.take.call(null,(2),pjstadig.macro.diff.call(null,a__46536__auto__,p1__46535__46539__auto__));
});})(result__46538__auto__,more__46537__auto__,temp__4655__auto__,a__46536__auto__))
,more__46537__auto__)),new cljs.core.Keyword(null,"expected","expected",1583670997),a__46536__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),more__46537__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__46538__auto__;
} else {
throw (new java.lang.Exception("= expects more than one argument"));
}
}catch (e52668){var t__46278__auto__ = e52668;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),t__46278__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

cardy.core_test.another_test.cljs$lang$var = new cljs.core.Var(function(){return cardy.core_test.another_test;},new cljs.core.Symbol("cardy.core-test","another-test","cardy.core-test/another-test",-114648868,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cardy.core-test","cardy.core-test",-707480694,null),new cljs.core.Symbol(null,"another-test","another-test",1213467159,null),"/Users/concerto/cs/cardy/test/cljs/cardy/core_test.cljs",22,1,10,10,cljs.core.List.EMPTY,null,(cljs.core.truth_(cardy.core_test.another_test)?cardy.core_test.another_test.cljs$lang$test:null)]));
cardy.core_test.another_test_2 = (function cardy$core_test$another_test_2(){
return cljs.test.test_var.call(null,cardy.core_test.another_test_2.cljs$lang$var);
});
cardy.core_test.another_test_2.cljs$lang$test = (function (){
try{var a__46536__auto__ = (4);
var temp__4655__auto__ = cljs.core.seq.call(null,(function (){var x__44218__auto__ = ((3) + (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44218__auto__);
})());
if(temp__4655__auto__){
var more__46537__auto__ = temp__4655__auto__;
var result__46538__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,a__46536__auto__,more__46537__auto__);
if(cljs.core.truth_(result__46538__auto__)){
pjstadig.macro.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),a__46536__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),more__46537__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
pjstadig.macro.do_report.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"diffs","diffs",-1720136241),cljs.core.map.call(null,cljs.core.vector,more__46537__auto__,cljs.core.map.call(null,((function (result__46538__auto__,more__46537__auto__,temp__4655__auto__,a__46536__auto__){
return (function (p1__46535__46539__auto__){
return cljs.core.take.call(null,(2),pjstadig.macro.diff.call(null,a__46536__auto__,p1__46535__46539__auto__));
});})(result__46538__auto__,more__46537__auto__,temp__4655__auto__,a__46536__auto__))
,more__46537__auto__)),new cljs.core.Keyword(null,"expected","expected",1583670997),a__46536__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),more__46537__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__46538__auto__;
} else {
throw (new java.lang.Exception("= expects more than one argument"));
}
}catch (e52669){var t__46278__auto__ = e52669;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),t__46278__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

cardy.core_test.another_test_2.cljs$lang$var = new cljs.core.Var(function(){return cardy.core_test.another_test_2;},new cljs.core.Symbol("cardy.core-test","another-test-2","cardy.core-test/another-test-2",234029428,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cardy.core-test","cardy.core-test",-707480694,null),new cljs.core.Symbol(null,"another-test-2","another-test-2",-1117219191,null),"/Users/concerto/cs/cardy/test/cljs/cardy/core_test.cljs",24,1,14,14,cljs.core.List.EMPTY,null,(cljs.core.truth_(cardy.core_test.another_test_2)?cardy.core_test.another_test_2.cljs$lang$test:null)]));
