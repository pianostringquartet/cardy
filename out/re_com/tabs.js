// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_com.tabs');
goog.require('cljs.core');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
re_com.tabs.tabs_args_desc = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the unique identifier of the currently selected tab"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of tabs | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"one element in the vector for each tab. Typically, each element is a map with :id and :label keys"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when user alters the selection. Passed the unique identifier of the selection"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its displayable label"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (for each individual tab rather than the container)"], null)], null);
re_com.tabs.horizontal_tabs = (function re_com$tabs$horizontal_tabs(var_args){
var args__44534__auto__ = [];
var len__44527__auto___56575 = arguments.length;
var i__44528__auto___56576 = (0);
while(true){
if((i__44528__auto___56576 < len__44527__auto___56575)){
args__44534__auto__.push((arguments[i__44528__auto___56576]));

var G__56577 = (i__44528__auto___56576 + (1));
i__44528__auto___56576 = G__56577;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((0) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__44535__auto__);
});

re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__56568){
var map__56569 = p__56568;
var map__56569__$1 = ((((!((map__56569 == null)))?((((map__56569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56569.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56569):map__56569);
var args = map__56569__$1;
var model = cljs.core.get.call(null,map__56569__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__56569__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__56569__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__56569__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__56569__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__56569__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__56569,map__56569__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (p1__56566_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__56566_SHARP_));
});})(current,tabs__$1,map__56569,map__56569__$1,args,model,tabs,on_change,id_fn,label_fn,style))
,tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__56566#] (= current (id-fn p1__56566#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs nav nav-tabs noselect",new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__44164__auto__ = ((function (current,tabs__$1,_,map__56569,map__56569__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function re_com$tabs$iter__56571(s__56572){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__56569,map__56569__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (){
var s__56572__$1 = s__56572;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__56572__$1);
if(temp__4657__auto__){
var s__56572__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__56572__$2)){
var c__44162__auto__ = cljs.core.chunk_first.call(null,s__56572__$2);
var size__44163__auto__ = cljs.core.count.call(null,c__44162__auto__);
var b__56574 = cljs.core.chunk_buffer.call(null,size__44163__auto__);
if((function (){var i__56573 = (0);
while(true){
if((i__56573 < size__44163__auto__)){
var t = cljs.core._nth.call(null,c__44162__auto__,i__56573);
cljs.core.chunk_append.call(null,b__56574,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__56573,id,label,selected_QMARK_,t,c__44162__auto__,size__44163__auto__,b__56574,s__56572__$2,temp__4657__auto__,current,tabs__$1,_,map__56569,map__56569__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (event){
on_change.call(null,id);

return null;
});})(i__56573,id,label,selected_QMARK_,t,c__44162__auto__,size__44163__auto__,b__56574,s__56572__$2,temp__4657__auto__,current,tabs__$1,_,map__56569,map__56569__$1,args,model,tabs,on_change,id_fn,label_fn,style))
:null)], null),label], null)], null);
})());

var G__56578 = (i__56573 + (1));
i__56573 = G__56578;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56574),re_com$tabs$iter__56571.call(null,cljs.core.chunk_rest.call(null,s__56572__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56574),null);
}
} else {
var t = cljs.core.first.call(null,s__56572__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__56572__$2,temp__4657__auto__,current,tabs__$1,_,map__56569,map__56569__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__56572__$2,temp__4657__auto__,current,tabs__$1,_,map__56569,map__56569__$1,args,model,tabs,on_change,id_fn,label_fn,style))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__56571.call(null,cljs.core.rest.call(null,s__56572__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__56569,map__56569__$1,args,model,tabs,on_change,id_fn,label_fn,style))
,null,null));
});})(current,tabs__$1,_,map__56569,map__56569__$1,args,model,tabs,on_change,id_fn,label_fn,style))
;
return iter__44164__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.horizontal_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_tabs.cljs$lang$applyTo = (function (seq56567){
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56567));
});

re_com.tabs.bar_tabs = (function re_com$tabs$bar_tabs(var_args){
var args__44534__auto__ = [];
var len__44527__auto___56588 = arguments.length;
var i__44528__auto___56589 = (0);
while(true){
if((i__44528__auto___56589 < len__44527__auto___56588)){
args__44534__auto__.push((arguments[i__44528__auto___56589]));

var G__56590 = (i__44528__auto___56589 + (1));
i__44528__auto___56589 = G__56590;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((0) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((0)),(0),null)):null);
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__44535__auto__);
});

re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__56581){
var map__56582 = p__56581;
var map__56582__$1 = ((((!((map__56582 == null)))?((((map__56582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56582.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56582):map__56582);
var model = cljs.core.get.call(null,map__56582__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__56582__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__56582__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__56582__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var label_fn = cljs.core.get.call(null,map__56582__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var style = cljs.core.get.call(null,map__56582__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var vertical_QMARK_ = cljs.core.get.call(null,map__56582__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__56582,map__56582__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (p1__56579_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__56579_SHARP_));
});})(current,tabs__$1,map__56582,map__56582__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__56579#] (= current (id-fn p1__56579#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs noselect btn-group",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(vertical_QMARK_)?"-vertical":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__44164__auto__ = ((function (current,tabs__$1,_,map__56582,map__56582__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function re_com$tabs$iter__56584(s__56585){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__56582,map__56582__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (){
var s__56585__$1 = s__56585;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__56585__$1);
if(temp__4657__auto__){
var s__56585__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__56585__$2)){
var c__44162__auto__ = cljs.core.chunk_first.call(null,s__56585__$2);
var size__44163__auto__ = cljs.core.count.call(null,c__44162__auto__);
var b__56587 = cljs.core.chunk_buffer.call(null,size__44163__auto__);
if((function (){var i__56586 = (0);
while(true){
if((i__56586 < size__44163__auto__)){
var t = cljs.core._nth.call(null,c__44162__auto__,i__56586);
cljs.core.chunk_append.call(null,b__56587,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-default ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?"active":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__56586,id,label,selected_QMARK_,t,c__44162__auto__,size__44163__auto__,b__56587,s__56585__$2,temp__4657__auto__,current,tabs__$1,_,map__56582,map__56582__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(i__56586,id,label,selected_QMARK_,t,c__44162__auto__,size__44163__auto__,b__56587,s__56585__$2,temp__4657__auto__,current,tabs__$1,_,map__56582,map__56582__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null);
})());

var G__56591 = (i__56586 + (1));
i__56586 = G__56591;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56587),re_com$tabs$iter__56584.call(null,cljs.core.chunk_rest.call(null,s__56585__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56587),null);
}
} else {
var t = cljs.core.first.call(null,s__56585__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-default ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?"active":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__56585__$2,temp__4657__auto__,current,tabs__$1,_,map__56582,map__56582__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__56585__$2,temp__4657__auto__,current,tabs__$1,_,map__56582,map__56582__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null);
})(),re_com$tabs$iter__56584.call(null,cljs.core.rest.call(null,s__56585__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__56582,map__56582__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__56582,map__56582__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
;
return iter__44164__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.bar_tabs.cljs$lang$applyTo = (function (seq56580){
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56580));
});

re_com.tabs.horizontal_bar_tabs = (function re_com$tabs$horizontal_bar_tabs(var_args){
var args__44534__auto__ = [];
var len__44527__auto___56596 = arguments.length;
var i__44528__auto___56597 = (0);
while(true){
if((i__44528__auto___56597 < len__44527__auto___56596)){
args__44534__auto__.push((arguments[i__44528__auto___56597]));

var G__56598 = (i__44528__auto___56597 + (1));
i__44528__auto___56597 = G__56598;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((0) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__44535__auto__);
});

re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__56593){
var map__56594 = p__56593;
var map__56594__$1 = ((((!((map__56594 == null)))?((((map__56594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56594.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56594):map__56594);
var args = map__56594__$1;
var model = cljs.core.get.call(null,map__56594__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__56594__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__56594__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__56594__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__56594__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__56594__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
});

re_com.tabs.horizontal_bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_bar_tabs.cljs$lang$applyTo = (function (seq56592){
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56592));
});

re_com.tabs.vertical_bar_tabs = (function re_com$tabs$vertical_bar_tabs(var_args){
var args__44534__auto__ = [];
var len__44527__auto___56603 = arguments.length;
var i__44528__auto___56604 = (0);
while(true){
if((i__44528__auto___56604 < len__44527__auto___56603)){
args__44534__auto__.push((arguments[i__44528__auto___56604]));

var G__56605 = (i__44528__auto___56604 + (1));
i__44528__auto___56604 = G__56605;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((0) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__44535__auto__);
});

re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__56600){
var map__56601 = p__56600;
var map__56601__$1 = ((((!((map__56601 == null)))?((((map__56601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56601):map__56601);
var args = map__56601__$1;
var model = cljs.core.get.call(null,map__56601__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__56601__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__56601__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__56601__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__56601__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__56601__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
});

re_com.tabs.vertical_bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.vertical_bar_tabs.cljs$lang$applyTo = (function (seq56599){
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56599));
});

re_com.tabs.pill_tabs = (function re_com$tabs$pill_tabs(var_args){
var args__44534__auto__ = [];
var len__44527__auto___56615 = arguments.length;
var i__44528__auto___56616 = (0);
while(true){
if((i__44528__auto___56616 < len__44527__auto___56615)){
args__44534__auto__.push((arguments[i__44528__auto___56616]));

var G__56617 = (i__44528__auto___56616 + (1));
i__44528__auto___56616 = G__56617;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((0) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((0)),(0),null)):null);
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__44535__auto__);
});

re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__56608){
var map__56609 = p__56608;
var map__56609__$1 = ((((!((map__56609 == null)))?((((map__56609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56609.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56609):map__56609);
var model = cljs.core.get.call(null,map__56609__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__56609__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__56609__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__56609__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var label_fn = cljs.core.get.call(null,map__56609__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var style = cljs.core.get.call(null,map__56609__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var vertical_QMARK_ = cljs.core.get.call(null,map__56609__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__56609,map__56609__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (p1__56606_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__56606_SHARP_));
});})(current,tabs__$1,map__56609,map__56609__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__56606#] (= current (id-fn p1__56606#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs noselect nav nav-pills",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none"),new cljs.core.Keyword(null,"role","role",-736691072),"tabslist"], null),(function (){var iter__44164__auto__ = ((function (current,tabs__$1,_,map__56609,map__56609__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function re_com$tabs$iter__56611(s__56612){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__56609,map__56609__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (){
var s__56612__$1 = s__56612;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__56612__$1);
if(temp__4657__auto__){
var s__56612__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__56612__$2)){
var c__44162__auto__ = cljs.core.chunk_first.call(null,s__56612__$2);
var size__44163__auto__ = cljs.core.count.call(null,c__44162__auto__);
var b__56614 = cljs.core.chunk_buffer.call(null,size__44163__auto__);
if((function (){var i__56613 = (0);
while(true){
if((i__56613 < size__44163__auto__)){
var t = cljs.core._nth.call(null,c__44162__auto__,i__56613);
cljs.core.chunk_append.call(null,b__56614,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__56613,id,label,selected_QMARK_,t,c__44162__auto__,size__44163__auto__,b__56614,s__56612__$2,temp__4657__auto__,current,tabs__$1,_,map__56609,map__56609__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(i__56613,id,label,selected_QMARK_,t,c__44162__auto__,size__44163__auto__,b__56614,s__56612__$2,temp__4657__auto__,current,tabs__$1,_,map__56609,map__56609__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null)], null);
})());

var G__56618 = (i__56613 + (1));
i__56613 = G__56618;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56614),re_com$tabs$iter__56611.call(null,cljs.core.chunk_rest.call(null,s__56612__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56614),null);
}
} else {
var t = cljs.core.first.call(null,s__56612__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__56612__$2,temp__4657__auto__,current,tabs__$1,_,map__56609,map__56609__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__56612__$2,temp__4657__auto__,current,tabs__$1,_,map__56609,map__56609__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__56611.call(null,cljs.core.rest.call(null,s__56612__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__56609,map__56609__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__56609,map__56609__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
;
return iter__44164__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.pill_tabs.cljs$lang$applyTo = (function (seq56607){
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56607));
});

re_com.tabs.horizontal_pill_tabs = (function re_com$tabs$horizontal_pill_tabs(var_args){
var args__44534__auto__ = [];
var len__44527__auto___56623 = arguments.length;
var i__44528__auto___56624 = (0);
while(true){
if((i__44528__auto___56624 < len__44527__auto___56623)){
args__44534__auto__.push((arguments[i__44528__auto___56624]));

var G__56625 = (i__44528__auto___56624 + (1));
i__44528__auto___56624 = G__56625;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((0) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__44535__auto__);
});

re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__56620){
var map__56621 = p__56620;
var map__56621__$1 = ((((!((map__56621 == null)))?((((map__56621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56621.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56621):map__56621);
var args = map__56621__$1;
var model = cljs.core.get.call(null,map__56621__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__56621__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__56621__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__56621__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.call(null,map__56621__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__56621__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
});

re_com.tabs.horizontal_pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_pill_tabs.cljs$lang$applyTo = (function (seq56619){
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56619));
});

re_com.tabs.vertical_pill_tabs = (function re_com$tabs$vertical_pill_tabs(var_args){
var args__44534__auto__ = [];
var len__44527__auto___56630 = arguments.length;
var i__44528__auto___56631 = (0);
while(true){
if((i__44528__auto___56631 < len__44527__auto___56630)){
args__44534__auto__.push((arguments[i__44528__auto___56631]));

var G__56632 = (i__44528__auto___56631 + (1));
i__44528__auto___56631 = G__56632;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((0) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__44535__auto__);
});

re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__56627){
var map__56628 = p__56627;
var map__56628__$1 = ((((!((map__56628 == null)))?((((map__56628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56628.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56628):map__56628);
var args = map__56628__$1;
var model = cljs.core.get.call(null,map__56628__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__56628__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__56628__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__56628__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.call(null,map__56628__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__56628__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
});

re_com.tabs.vertical_pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.vertical_pill_tabs.cljs$lang$applyTo = (function (seq56626){
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56626));
});

