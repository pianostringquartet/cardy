// Compiled by ClojureScript 1.9.946 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__53019){
var map__53020 = p__53019;
var map__53020__$1 = ((((!((map__53020 == null)))?((((map__53020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53020):map__53020);
var replacement_transformers = cljs.core.get.call(null,map__53020__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__53020__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__53020__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return ((function (map__53020,map__53020__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR_53022 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__53023 = cljs.core.reduce.call(null,((function (_STAR_inhibit_separator_STAR_53022,map__53020,map__53020__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__53026,transformer){
var vec__53027 = p__53026;
var text = cljs.core.nth.call(null,vec__53027,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__53027,(1),null);
return transformer.call(null,text,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line));
});})(_STAR_inhibit_separator_STAR_53022,map__53020,map__53020__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__43356__auto__ = replacement_transformers;
if(cljs.core.truth_(or__43356__auto__)){
return or__43356__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__53023,(0),null);
var new_state = cljs.core.nth.call(null,vec__53023,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_53022;
}});
;})(map__53020,map__53020__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__44534__auto__ = [];
var len__44527__auto___53032 = arguments.length;
var i__44528__auto___53033 = (0);
while(true){
if((i__44528__auto___53033 < len__44527__auto___53032)){
args__44534__auto__.push((arguments[i__44528__auto___53033]));

var G__53034 = (i__44528__auto___53033 + (1));
i__44528__auto___53033 = G__53034;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((1) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44535__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq53030){
var G__53031 = cljs.core.first.call(null,seq53030);
var seq53030__$1 = cljs.core.next.call(null,seq53030);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__53031,seq53030__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__53035_53039 = cljs.core.seq.call(null,lines);
var chunk__53036_53040 = null;
var count__53037_53041 = (0);
var i__53038_53042 = (0);
while(true){
if((i__53038_53042 < count__53037_53041)){
var line_53043 = cljs.core._nth.call(null,chunk__53036_53040,i__53038_53042);
markdown.links.parse_reference_link.call(null,line_53043,references);

var G__53044 = seq__53035_53039;
var G__53045 = chunk__53036_53040;
var G__53046 = count__53037_53041;
var G__53047 = (i__53038_53042 + (1));
seq__53035_53039 = G__53044;
chunk__53036_53040 = G__53045;
count__53037_53041 = G__53046;
i__53038_53042 = G__53047;
continue;
} else {
var temp__4657__auto___53048 = cljs.core.seq.call(null,seq__53035_53039);
if(temp__4657__auto___53048){
var seq__53035_53049__$1 = temp__4657__auto___53048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53035_53049__$1)){
var c__44195__auto___53050 = cljs.core.chunk_first.call(null,seq__53035_53049__$1);
var G__53051 = cljs.core.chunk_rest.call(null,seq__53035_53049__$1);
var G__53052 = c__44195__auto___53050;
var G__53053 = cljs.core.count.call(null,c__44195__auto___53050);
var G__53054 = (0);
seq__53035_53039 = G__53051;
chunk__53036_53040 = G__53052;
count__53037_53041 = G__53053;
i__53038_53042 = G__53054;
continue;
} else {
var line_53055 = cljs.core.first.call(null,seq__53035_53049__$1);
markdown.links.parse_reference_link.call(null,line_53055,references);

var G__53056 = cljs.core.next.call(null,seq__53035_53049__$1);
var G__53057 = null;
var G__53058 = (0);
var G__53059 = (0);
seq__53035_53039 = G__53056;
chunk__53036_53040 = G__53057;
count__53037_53041 = G__53058;
i__53038_53042 = G__53059;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__53060_53064 = cljs.core.seq.call(null,lines);
var chunk__53061_53065 = null;
var count__53062_53066 = (0);
var i__53063_53067 = (0);
while(true){
if((i__53063_53067 < count__53062_53066)){
var line_53068 = cljs.core._nth.call(null,chunk__53061_53065,i__53063_53067);
markdown.links.parse_footnote_link.call(null,line_53068,footnotes);

var G__53069 = seq__53060_53064;
var G__53070 = chunk__53061_53065;
var G__53071 = count__53062_53066;
var G__53072 = (i__53063_53067 + (1));
seq__53060_53064 = G__53069;
chunk__53061_53065 = G__53070;
count__53062_53066 = G__53071;
i__53063_53067 = G__53072;
continue;
} else {
var temp__4657__auto___53073 = cljs.core.seq.call(null,seq__53060_53064);
if(temp__4657__auto___53073){
var seq__53060_53074__$1 = temp__4657__auto___53073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53060_53074__$1)){
var c__44195__auto___53075 = cljs.core.chunk_first.call(null,seq__53060_53074__$1);
var G__53076 = cljs.core.chunk_rest.call(null,seq__53060_53074__$1);
var G__53077 = c__44195__auto___53075;
var G__53078 = cljs.core.count.call(null,c__44195__auto___53075);
var G__53079 = (0);
seq__53060_53064 = G__53076;
chunk__53061_53065 = G__53077;
count__53062_53066 = G__53078;
i__53063_53067 = G__53079;
continue;
} else {
var line_53080 = cljs.core.first.call(null,seq__53060_53074__$1);
markdown.links.parse_footnote_link.call(null,line_53080,footnotes);

var G__53081 = cljs.core.next.call(null,seq__53060_53074__$1);
var G__53082 = null;
var G__53083 = (0);
var G__53084 = (0);
seq__53060_53064 = G__53081;
chunk__53061_53065 = G__53082;
count__53062_53066 = G__53083;
i__53063_53067 = G__53084;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__53086 = cljs.core.split_with.call(null,(function (p1__53085_SHARP_){
return cljs.core.not_empty.call(null,p1__53085_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__53086,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__53086,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_53089 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR_53090 = markdown.transformers._STAR_formatter_STAR_;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_53089,_STAR_formatter_STAR_53090){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_53089,_STAR_formatter_STAR_53090))
;

markdown.transformers._STAR_formatter_STAR_ = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__53091 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__53091,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__53091,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__53097_53104 = lines__$1;
var vec__53098_53105 = G__53097_53104;
var seq__53099_53106 = cljs.core.seq.call(null,vec__53098_53105);
var first__53100_53107 = cljs.core.first.call(null,seq__53099_53106);
var seq__53099_53108__$1 = cljs.core.next.call(null,seq__53099_53106);
var line_53109 = first__53100_53107;
var more_53110 = seq__53099_53108__$1;
var state_53111 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__53097_53112__$1 = G__53097_53104;
var state_53113__$1 = state_53111;
while(true){
var vec__53101_53114 = G__53097_53112__$1;
var seq__53102_53115 = cljs.core.seq.call(null,vec__53101_53114);
var first__53103_53116 = cljs.core.first.call(null,seq__53102_53115);
var seq__53102_53117__$1 = cljs.core.next.call(null,seq__53102_53115);
var line_53118__$1 = first__53103_53116;
var more_53119__$1 = seq__53102_53117__$1;
var state_53120__$2 = state_53113__$1;
var line_53121__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_53120__$2))?"":line_53118__$1);
var state_53122__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_53120__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_53120__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_53120__$2),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_53120__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_53120__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_53119__$1))){
var G__53123 = more_53119__$1;
var G__53124 = cljs.core.assoc.call(null,transformer.call(null,html,line_53121__$2,cljs.core.first.call(null,more_53119__$1),cljs.core.dissoc.call(null,state_53122__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_53121__$2));
G__53097_53112__$1 = G__53123;
state_53113__$1 = G__53124;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_53122__$3))),line_53121__$2,"",cljs.core.assoc.call(null,state_53122__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR_53090;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_53089;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__44534__auto__ = [];
var len__44527__auto___53127 = arguments.length;
var i__44528__auto___53128 = (0);
while(true){
if((i__44528__auto___53128 < len__44527__auto___53127)){
args__44534__auto__.push((arguments[i__44528__auto___53128]));

var G__53129 = (i__44528__auto___53128 + (1));
i__44528__auto___53128 = G__53129;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((1) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44535__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq53125){
var G__53126 = cljs.core.first.call(null,seq53125);
var seq53125__$1 = cljs.core.next.call(null,seq53125);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__53126,seq53125__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__44534__auto__ = [];
var len__44527__auto___53132 = arguments.length;
var i__44528__auto___53133 = (0);
while(true){
if((i__44528__auto___53133 < len__44527__auto___53132)){
args__44534__auto__.push((arguments[i__44528__auto___53133]));

var G__53134 = (i__44528__auto___53133 + (1));
i__44528__auto___53133 = G__53134;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((1) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44535__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq53130){
var G__53131 = cljs.core.first.call(null,seq53130);
var seq53130__$1 = cljs.core.next.call(null,seq53130);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__53131,seq53130__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__44534__auto__ = [];
var len__44527__auto___53136 = arguments.length;
var i__44528__auto___53137 = (0);
while(true){
if((i__44528__auto___53137 < len__44527__auto___53136)){
args__44534__auto__.push((arguments[i__44528__auto___53137]));

var G__53138 = (i__44528__auto___53137 + (1));
i__44528__auto___53137 = G__53138;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((0) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__44535__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq53135){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53135));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__44534__auto__ = [];
var len__44527__auto___53140 = arguments.length;
var i__44528__auto___53141 = (0);
while(true){
if((i__44528__auto___53141 < len__44527__auto___53140)){
args__44534__auto__.push((arguments[i__44528__auto___53141]));

var G__53142 = (i__44528__auto___53141 + (1));
i__44528__auto___53141 = G__53142;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((0) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__44535__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq53139){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53139));
});

