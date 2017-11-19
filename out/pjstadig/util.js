// Compiled by ClojureScript 1.9.946 {}
goog.provide('pjstadig.util');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('cljs.test');
goog.require('goog.string.StringBuffer');
pjstadig.util.print_seq = (function pjstadig$util$print_seq(aseq){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_57506_57508 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_57507_57509 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out.call(null,cljs.core.ffirst.call(null,aseq));

cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out.call(null,cljs.core.fnext.call(null,cljs.core.first.call(null,aseq)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_57507_57509;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_57506_57508;
}}

return null;
});
pjstadig.util.pprint_record = (function pjstadig$util$pprint_record(arec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_57510_57515 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_57511_57516 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,cljs.core.re_find.call(null,/.*?\{/,(function (){var sb__44385__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_57512_57517 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_57513_57518 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_57512_57517,_STAR_print_fn_STAR_57513_57518,sb__44385__auto__,_STAR_current_level_STAR_57510_57515,_STAR_current_length_STAR_57511_57516){
return (function (x__44386__auto__){
return sb__44385__auto__.append(x__44386__auto__);
});})(_STAR_print_newline_STAR_57512_57517,_STAR_print_fn_STAR_57513_57518,sb__44385__auto__,_STAR_current_level_STAR_57510_57515,_STAR_current_length_STAR_57511_57516))
;

try{cljs.core.print.call(null,arec);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_57513_57518;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_57512_57517;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__44385__auto__)].join('');
})()),null,"}");

var length_count57514_57519 = (0);
var aseq_57520 = cljs.core.seq.call(null,arec);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count57514_57519 < cljs.core._STAR_print_length_STAR_))){
if(aseq_57520){
pjstadig.util.print_seq.call(null,aseq_57520);

if(cljs.core.next.call(null,aseq_57520)){
cljs.core.print.call(null,", ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__57521 = (length_count57514_57519 + (1));
var G__57522 = cljs.core.next.call(null,aseq_57520);
length_count57514_57519 = G__57521;
aseq_57520 = G__57522;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_57511_57516;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_57510_57515;
}}

return null;
});
pjstadig.util.report_ = (function pjstadig$util$report_(p__57523){
var map__57524 = p__57523;
var map__57524__$1 = ((((!((map__57524 == null)))?((((map__57524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57524):map__57524);
var event = map__57524__$1;
var type = cljs.core.get.call(null,map__57524__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var expected = cljs.core.get.call(null,map__57524__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__57524__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var diffs = cljs.core.get.call(null,map__57524__$1,new cljs.core.Keyword(null,"diffs","diffs",-1720136241));
var message = cljs.core.get.call(null,map__57524__$1,new cljs.core.Keyword(null,"message","message",-406056002));
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

cljs.core.println.call(null,"\nFAIL in",cljs.test.testing_vars_str.call(null,event));

if(cljs.core.truth_(new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null)))){
cljs.core.println.call(null,cljs.test.testing_contexts_str.call(null));
} else {
}

if(cljs.core.truth_(message)){
cljs.core.println.call(null,message);
} else {
}

var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_57526 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = cljs.pprint.get_pretty_writer.call(null,(new cljs.core.StringBufferWriter(sb)));

try{var print_expected = ((function (_STAR_out_STAR_57526,sb,map__57524,map__57524__$1,event,type,expected,actual,diffs,message){
return (function (actual__$1){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"expected: ");

cljs.pprint.pprint.call(null,expected,cljs.core._STAR_out_STAR_);

cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"  actual: ");

cljs.pprint.pprint.call(null,actual__$1,cljs.core._STAR_out_STAR_);

cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));

return sb.clear();
});})(_STAR_out_STAR_57526,sb,map__57524,map__57524__$1,event,type,expected,actual,diffs,message))
;
if(cljs.core.seq.call(null,diffs)){
var seq__57527 = cljs.core.seq.call(null,diffs);
var chunk__57528 = null;
var count__57529 = (0);
var i__57530 = (0);
while(true){
if((i__57530 < count__57529)){
var vec__57531 = cljs.core._nth.call(null,chunk__57528,i__57530);
var actual__$1 = cljs.core.nth.call(null,vec__57531,(0),null);
var vec__57534 = cljs.core.nth.call(null,vec__57531,(1),null);
var a = cljs.core.nth.call(null,vec__57534,(0),null);
var b = cljs.core.nth.call(null,vec__57534,(1),null);
print_expected.call(null,actual__$1);

cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"    diff:");

if(cljs.core.truth_(a)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," - ");

cljs.pprint.pprint.call(null,a,cljs.core._STAR_out_STAR_);

cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"          + ");
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," + ");
}

if(cljs.core.truth_(b)){
cljs.pprint.pprint.call(null,b,cljs.core._STAR_out_STAR_);
} else {
}

cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));

sb.clear();

var G__57543 = seq__57527;
var G__57544 = chunk__57528;
var G__57545 = count__57529;
var G__57546 = (i__57530 + (1));
seq__57527 = G__57543;
chunk__57528 = G__57544;
count__57529 = G__57545;
i__57530 = G__57546;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__57527);
if(temp__4657__auto__){
var seq__57527__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57527__$1)){
var c__44195__auto__ = cljs.core.chunk_first.call(null,seq__57527__$1);
var G__57547 = cljs.core.chunk_rest.call(null,seq__57527__$1);
var G__57548 = c__44195__auto__;
var G__57549 = cljs.core.count.call(null,c__44195__auto__);
var G__57550 = (0);
seq__57527 = G__57547;
chunk__57528 = G__57548;
count__57529 = G__57549;
i__57530 = G__57550;
continue;
} else {
var vec__57537 = cljs.core.first.call(null,seq__57527__$1);
var actual__$1 = cljs.core.nth.call(null,vec__57537,(0),null);
var vec__57540 = cljs.core.nth.call(null,vec__57537,(1),null);
var a = cljs.core.nth.call(null,vec__57540,(0),null);
var b = cljs.core.nth.call(null,vec__57540,(1),null);
print_expected.call(null,actual__$1);

cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"    diff:");

if(cljs.core.truth_(a)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," - ");

cljs.pprint.pprint.call(null,a,cljs.core._STAR_out_STAR_);

cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"          + ");
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," + ");
}

if(cljs.core.truth_(b)){
cljs.pprint.pprint.call(null,b,cljs.core._STAR_out_STAR_);
} else {
}

cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));

sb.clear();

var G__57551 = cljs.core.next.call(null,seq__57527__$1);
var G__57552 = null;
var G__57553 = (0);
var G__57554 = (0);
seq__57527 = G__57551;
chunk__57528 = G__57552;
count__57529 = G__57553;
i__57530 = G__57554;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return print_expected.call(null,actual);
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_57526;
}});
pjstadig.util.define_fail_report = (function pjstadig$util$define_fail_report(){
return cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function() { 
var G__57555__delegate = function (args){
return cljs.core.apply.call(null,pjstadig.util.report_,args);
};
var G__57555 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57556__i = 0, G__57556__a = new Array(arguments.length -  0);
while (G__57556__i < G__57556__a.length) {G__57556__a[G__57556__i] = arguments[G__57556__i + 0]; ++G__57556__i;}
  args = new cljs.core.IndexedSeq(G__57556__a,0,null);
} 
return G__57555__delegate.call(this,args);};
G__57555.cljs$lang$maxFixedArity = 0;
G__57555.cljs$lang$applyTo = (function (arglist__57557){
var args = cljs.core.seq(arglist__57557);
return G__57555__delegate(args);
});
G__57555.cljs$core$IFn$_invoke$arity$variadic = G__57555__delegate;
return G__57555;
})()
);
});
