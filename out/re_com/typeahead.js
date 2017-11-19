// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__56343){
var map__56344 = p__56343;
var map__56344__$1 = ((((!((map__56344 == null)))?((((map__56344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56344.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56344):map__56344);
var args = map__56344__$1;
var on_change = cljs.core.get.call(null,map__56344__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__56344__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__56344__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__56344__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__56344__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__56344__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__56344__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__56346 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__43356__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__43356__auto__)){
return or__43356__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__56346,external_model_value);
} else {
return G__56346;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__56347,event){
var map__56348 = p__56347;
var map__56348__$1 = ((((!((map__56348 == null)))?((((map__56348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56348):map__56348);
var state = map__56348__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__56348__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__56348__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__56350 = event;
var G__56350__$1 = (((G__56350 instanceof cljs.core.Keyword))?G__56350.fqn:null);
switch (G__56350__$1) {
case "input-text-blurred":
var and__43344__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__43344__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__43344__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__43356__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__43356__auto__)){
return or__43356__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56350__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__56352,event){
var map__56353 = p__56352;
var map__56353__$1 = ((((!((map__56353 == null)))?((((map__56353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56353):map__56353);
var state = map__56353__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__56353__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__56355 = event;
var G__56355__$1 = (((G__56355 instanceof cljs.core.Keyword))?G__56355.fqn:null);
switch (G__56355__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__56357,new_value){
var map__56358 = p__56357;
var map__56358__$1 = ((((!((map__56358 == null)))?((((map__56358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56358):map__56358);
var state = map__56358__$1;
var on_change = cljs.core.get.call(null,map__56358__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__56360,suggestion){
var map__56361 = p__56360;
var map__56361__$1 = ((((!((map__56361 == null)))?((((map__56361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56361):map__56361);
var state = map__56361__$1;
var suggestion_to_string = cljs.core.get.call(null,map__56361__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__56363 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__56363,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__56363;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__56364,index){
var map__56365 = p__56364;
var map__56365__$1 = ((((!((map__56365 == null)))?((((map__56365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56365.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56365):map__56365);
var state = map__56365__$1;
var suggestions = cljs.core.get.call(null,map__56365__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__56367 = state;
var G__56367__$1 = cljs.core.assoc.call(null,G__56367,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__56367__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__56367__$1,suggestion):G__56367__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__56367__$2,suggestion);
} else {
return G__56367__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__56368,index){
var map__56369 = p__56368;
var map__56369__$1 = ((((!((map__56369 == null)))?((((map__56369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56369):map__56369);
var state = map__56369__$1;
var suggestions = cljs.core.get.call(null,map__56369__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__56371){
var map__56372 = p__56371;
var map__56372__$1 = ((((!((map__56372 == null)))?((((map__56372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56372):map__56372);
var state = map__56372__$1;
var suggestion_active_index = cljs.core.get.call(null,map__56372__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__56374 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__56374,suggestion_active_index);
} else {
return G__56374;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__56375){
var map__56376 = p__56375;
var map__56376__$1 = ((((!((map__56376 == null)))?((((map__56376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56376):map__56376);
var state = map__56376__$1;
var suggestions = cljs.core.get.call(null,map__56376__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__56376__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__56378 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__56378,re_com.typeahead.wrap.call(null,((function (){var or__43356__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__43356__auto__)){
return or__43356__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__56378;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__56379){
var map__56380 = p__56379;
var map__56380__$1 = ((((!((map__56380 == null)))?((((map__56380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56380):map__56380);
var state = map__56380__$1;
var suggestions = cljs.core.get.call(null,map__56380__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__56380__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__56382 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__56382,re_com.typeahead.wrap.call(null,((function (){var or__43356__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__43356__auto__)){
return or__43356__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__56382;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__56383 = state;
var G__56383__$1 = re_com.typeahead.clear_suggestions.call(null,G__56383)
;
var G__56383__$2 = cljs.core.assoc.call(null,G__56383__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__56383__$2,null);
} else {
return G__56383__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__56384){
var map__56385 = p__56384;
var map__56385__$1 = ((((!((map__56385 == null)))?((((map__56385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56385.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56385):map__56385);
var state = map__56385__$1;
var input_text = cljs.core.get.call(null,map__56385__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__56385__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__56387 = state;
if(cljs.core.truth_((function (){var and__43344__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__43344__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__43344__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__56387,input_text);
} else {
return G__56387;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__4655__auto__ = data_source.call(null,text,(function (p1__56388_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__56388_SHARP_);
}));
if(cljs.core.truth_(temp__4655__auto__)){
var return_value = temp__4655__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__54360__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54360__auto__){
return (function (){
var f__54361__auto__ = (function (){var switch__54272__auto__ = ((function (c__54360__auto__){
return (function (state_56405){
var state_val_56406 = (state_56405[(1)]);
if((state_val_56406 === (1))){
var state_56405__$1 = state_56405;
var statearr_56407_56419 = state_56405__$1;
(statearr_56407_56419[(2)] = null);

(statearr_56407_56419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56406 === (2))){
var state_56405__$1 = state_56405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56405__$1,(4),c_search);
} else {
if((state_val_56406 === (3))){
var inst_56403 = (state_56405[(2)]);
var state_56405__$1 = state_56405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56405__$1,inst_56403);
} else {
if((state_val_56406 === (4))){
var inst_56391 = (state_56405[(7)]);
var inst_56391__$1 = (state_56405[(2)]);
var inst_56392 = cljs.core.deref.call(null,state_atom);
var inst_56393 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_56392);
var inst_56394 = cljs.core._EQ_.call(null,"",inst_56391__$1);
var state_56405__$1 = (function (){var statearr_56408 = state_56405;
(statearr_56408[(7)] = inst_56391__$1);

(statearr_56408[(8)] = inst_56393);

return statearr_56408;
})();
if(inst_56394){
var statearr_56409_56420 = state_56405__$1;
(statearr_56409_56420[(1)] = (5));

} else {
var statearr_56410_56421 = state_56405__$1;
(statearr_56410_56421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56406 === (5))){
var inst_56396 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_56405__$1 = state_56405;
var statearr_56411_56422 = state_56405__$1;
(statearr_56411_56422[(2)] = inst_56396);

(statearr_56411_56422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56406 === (6))){
var inst_56391 = (state_56405[(7)]);
var inst_56393 = (state_56405[(8)]);
var inst_56398 = re_com.typeahead.search_data_source_BANG_.call(null,inst_56393,state_atom,inst_56391);
var state_56405__$1 = state_56405;
var statearr_56412_56423 = state_56405__$1;
(statearr_56412_56423[(2)] = inst_56398);

(statearr_56412_56423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56406 === (7))){
var inst_56400 = (state_56405[(2)]);
var state_56405__$1 = (function (){var statearr_56413 = state_56405;
(statearr_56413[(9)] = inst_56400);

return statearr_56413;
})();
var statearr_56414_56424 = state_56405__$1;
(statearr_56414_56424[(2)] = null);

(statearr_56414_56424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__54360__auto__))
;
return ((function (switch__54272__auto__,c__54360__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__54273__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__54273__auto____0 = (function (){
var statearr_56415 = [null,null,null,null,null,null,null,null,null,null];
(statearr_56415[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__54273__auto__);

(statearr_56415[(1)] = (1));

return statearr_56415;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__54273__auto____1 = (function (state_56405){
while(true){
var ret_value__54274__auto__ = (function (){try{while(true){
var result__54275__auto__ = switch__54272__auto__.call(null,state_56405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54275__auto__;
}
break;
}
}catch (e56416){if((e56416 instanceof Object)){
var ex__54276__auto__ = e56416;
var statearr_56417_56425 = state_56405;
(statearr_56417_56425[(5)] = ex__54276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56426 = state_56405;
state_56405 = G__56426;
continue;
} else {
return ret_value__54274__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__54273__auto__ = function(state_56405){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__54273__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__54273__auto____1.call(this,state_56405);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__54273__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__54273__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__54273__auto__;
})()
;})(switch__54272__auto__,c__54360__auto__))
})();
var state__54362__auto__ = (function (){var statearr_56418 = f__54361__auto__.call(null);
(statearr_56418[(6)] = c__54360__auto__);

return statearr_56418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54362__auto__);
});})(c__54360__auto__))
);

return c__54360__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__56428 = cljs.core.deref.call(null,state_atom);
var map__56428__$1 = ((((!((map__56428 == null)))?((((map__56428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56428):map__56428);
var state = map__56428__$1;
var input_text = cljs.core.get.call(null,map__56428__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__56428__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__56428,map__56428__$1,state,input_text,c_input){
return (function (p1__56427_SHARP_){
var G__56430 = p1__56427_SHARP_;
var G__56430__$1 = cljs.core.assoc.call(null,G__56430,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__56430__$1,new_text);
} else {
return G__56430__$1;
}
});})(map__56428,map__56428__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__56431 = cljs.core._EQ_;
var expr__56432 = event.which;
if(cljs.core.truth_(pred__56431.call(null,goog.events.KeyCodes.UP,expr__56432))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__56431.call(null,goog.events.KeyCodes.DOWN,expr__56432))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__56431.call(null,goog.events.KeyCodes.ENTER,expr__56432))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__56431.call(null,goog.events.KeyCodes.ESC,expr__56432))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__56431.call(null,goog.events.KeyCodes.TAB,expr__56432))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__44534__auto__ = [];
var len__44527__auto___56456 = arguments.length;
var i__44528__auto___56457 = (0);
while(true){
if((i__44528__auto___56457 < len__44527__auto___56456)){
args__44534__auto__.push((arguments[i__44528__auto___56457]));

var G__56458 = (i__44528__auto___56457 + (1));
i__44528__auto___56457 = G__56458;
continue;
} else {
}
break;
}

var argseq__44535__auto__ = ((((0) < args__44534__auto__.length))?(new cljs.core.IndexedSeq(args__44534__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__44535__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__56436){
var map__56437 = p__56436;
var map__56437__$1 = ((((!((map__56437 == null)))?((((map__56437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56437):map__56437);
var args = map__56437__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__56439 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__56439__$1 = ((((!((map__56439 == null)))?((((map__56439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56439):map__56439);
var state = map__56439__$1;
var c_search = cljs.core.get.call(null,map__56439__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__56439__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__56439,map__56439__$1,state,c_search,c_input,state_atom,input_text_model,map__56437,map__56437__$1,args){
return (function() { 
var G__56459__delegate = function (p__56441){
var map__56442 = p__56441;
var map__56442__$1 = ((((!((map__56442 == null)))?((((map__56442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56442):map__56442);
var args__$1 = map__56442__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__56442__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__56442__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__56442__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__56442__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__56442__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__56442__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__56442__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__56442__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__56442__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__56442__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__56442__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__56442__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__56442__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__56442__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__56442__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__56442__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__56442__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__56442__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__56444 = cljs.core.deref.call(null,state_atom);
var map__56444__$1 = ((((!((map__56444 == null)))?((((map__56444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56444.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56444):map__56444);
var state__$1 = map__56444__$1;
var suggestions = cljs.core.get.call(null,map__56444__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__56444__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__56444__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__56444__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__43356__auto__ = width;
if(cljs.core.truth_(or__43356__auto__)){
return or__43356__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__43356__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__43356__auto__)){
return or__43356__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__44164__auto__ = ((function (map__56444,map__56444__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__56442,map__56442__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__56439,map__56439__$1,state,c_search,c_input,state_atom,input_text_model,map__56437,map__56437__$1,args){
return (function re_com$typeahead$iter__56446(s__56447){
return (new cljs.core.LazySeq(null,((function (map__56444,map__56444__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__56442,map__56442__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__56439,map__56439__$1,state,c_search,c_input,state_atom,input_text_model,map__56437,map__56437__$1,args){
return (function (){
var s__56447__$1 = s__56447;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__56447__$1);
if(temp__4657__auto__){
var s__56447__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__56447__$2)){
var c__44162__auto__ = cljs.core.chunk_first.call(null,s__56447__$2);
var size__44163__auto__ = cljs.core.count.call(null,c__44162__auto__);
var b__56449 = cljs.core.chunk_buffer.call(null,size__44163__auto__);
if((function (){var i__56448 = (0);
while(true){
if((i__56448 < size__44163__auto__)){
var vec__56450 = cljs.core._nth.call(null,c__44162__auto__,i__56448);
var i = cljs.core.nth.call(null,vec__56450,(0),null);
var s = cljs.core.nth.call(null,vec__56450,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__56449,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__56448,selected_QMARK_,vec__56450,i,s,c__44162__auto__,size__44163__auto__,b__56449,s__56447__$2,temp__4657__auto__,map__56444,map__56444__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__56442,map__56442__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__56439,map__56439__$1,state,c_search,c_input,state_atom,input_text_model,map__56437,map__56437__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__56448,selected_QMARK_,vec__56450,i,s,c__44162__auto__,size__44163__auto__,b__56449,s__56447__$2,temp__4657__auto__,map__56444,map__56444__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__56442,map__56442__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__56439,map__56439__$1,state,c_search,c_input,state_atom,input_text_model,map__56437,map__56437__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__56448,selected_QMARK_,vec__56450,i,s,c__44162__auto__,size__44163__auto__,b__56449,s__56447__$2,temp__4657__auto__,map__56444,map__56444__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__56442,map__56442__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__56439,map__56439__$1,state,c_search,c_input,state_atom,input_text_model,map__56437,map__56437__$1,args){
return (function (p1__56434_SHARP_){
p1__56434_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__56448,selected_QMARK_,vec__56450,i,s,c__44162__auto__,size__44163__auto__,b__56449,s__56447__$2,temp__4657__auto__,map__56444,map__56444__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__56442,map__56442__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__56439,map__56439__$1,state,c_search,c_input,state_atom,input_text_model,map__56437,map__56437__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__56460 = (i__56448 + (1));
i__56448 = G__56460;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56449),re_com$typeahead$iter__56446.call(null,cljs.core.chunk_rest.call(null,s__56447__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56449),null);
}
} else {
var vec__56453 = cljs.core.first.call(null,s__56447__$2);
var i = cljs.core.nth.call(null,vec__56453,(0),null);
var s = cljs.core.nth.call(null,vec__56453,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__56453,i,s,s__56447__$2,temp__4657__auto__,map__56444,map__56444__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__56442,map__56442__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__56439,map__56439__$1,state,c_search,c_input,state_atom,input_text_model,map__56437,map__56437__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__56453,i,s,s__56447__$2,temp__4657__auto__,map__56444,map__56444__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__56442,map__56442__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__56439,map__56439__$1,state,c_search,c_input,state_atom,input_text_model,map__56437,map__56437__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__56453,i,s,s__56447__$2,temp__4657__auto__,map__56444,map__56444__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__56442,map__56442__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__56439,map__56439__$1,state,c_search,c_input,state_atom,input_text_model,map__56437,map__56437__$1,args){
return (function (p1__56434_SHARP_){
p1__56434_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__56453,i,s,s__56447__$2,temp__4657__auto__,map__56444,map__56444__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__56442,map__56442__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__56439,map__56439__$1,state,c_search,c_input,state_atom,input_text_model,map__56437,map__56437__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__56446.call(null,cljs.core.rest.call(null,s__56447__$2)));
}
} else {
return null;
}
break;
}
});})(map__56444,map__56444__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__56442,map__56442__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__56439,map__56439__$1,state,c_search,c_input,state_atom,input_text_model,map__56437,map__56437__$1,args))
,null,null));
});})(map__56444,map__56444__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__56442,map__56442__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__56439,map__56439__$1,state,c_search,c_input,state_atom,input_text_model,map__56437,map__56437__$1,args))
;
return iter__44164__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__56459 = function (var_args){
var p__56441 = null;
if (arguments.length > 0) {
var G__56461__i = 0, G__56461__a = new Array(arguments.length -  0);
while (G__56461__i < G__56461__a.length) {G__56461__a[G__56461__i] = arguments[G__56461__i + 0]; ++G__56461__i;}
  p__56441 = new cljs.core.IndexedSeq(G__56461__a,0,null);
} 
return G__56459__delegate.call(this,p__56441);};
G__56459.cljs$lang$maxFixedArity = 0;
G__56459.cljs$lang$applyTo = (function (arglist__56462){
var p__56441 = cljs.core.seq(arglist__56462);
return G__56459__delegate(p__56441);
});
G__56459.cljs$core$IFn$_invoke$arity$variadic = G__56459__delegate;
return G__56459;
})()
;
;})(map__56439,map__56439__$1,state,c_search,c_input,state_atom,input_text_model,map__56437,map__56437__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq56435){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56435));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__54360__auto___56543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54360__auto___56543,out){
return (function (){
var f__54361__auto__ = (function (){var switch__54272__auto__ = ((function (c__54360__auto___56543,out){
return (function (state_56513){
var state_val_56514 = (state_56513[(1)]);
if((state_val_56514 === (7))){
var inst_56468 = (state_56513[(2)]);
var state_56513__$1 = state_56513;
var statearr_56515_56544 = state_56513__$1;
(statearr_56515_56544[(2)] = inst_56468);

(statearr_56515_56544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56514 === (1))){
var inst_56463 = null;
var state_56513__$1 = (function (){var statearr_56516 = state_56513;
(statearr_56516[(7)] = inst_56463);

return statearr_56516;
})();
var statearr_56517_56545 = state_56513__$1;
(statearr_56517_56545[(2)] = null);

(statearr_56517_56545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56514 === (4))){
var state_56513__$1 = state_56513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56513__$1,(7),in$);
} else {
if((state_val_56514 === (15))){
var inst_56498 = (state_56513[(2)]);
var state_56513__$1 = (function (){var statearr_56518 = state_56513;
(statearr_56518[(8)] = inst_56498);

return statearr_56518;
})();
var statearr_56519_56546 = state_56513__$1;
(statearr_56519_56546[(2)] = null);

(statearr_56519_56546[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56514 === (13))){
var inst_56486 = (state_56513[(9)]);
var inst_56500 = cljs.core._EQ_.call(null,inst_56486,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_56513__$1 = state_56513;
if(inst_56500){
var statearr_56520_56547 = state_56513__$1;
(statearr_56520_56547[(1)] = (16));

} else {
var statearr_56521_56548 = state_56513__$1;
(statearr_56521_56548[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56514 === (6))){
var inst_56472 = (state_56513[(10)]);
var inst_56471 = (state_56513[(2)]);
var inst_56472__$1 = cljs.core.async.timeout.call(null,ms);
var inst_56480 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56481 = [in$,inst_56472__$1];
var inst_56482 = (new cljs.core.PersistentVector(null,2,(5),inst_56480,inst_56481,null));
var state_56513__$1 = (function (){var statearr_56522 = state_56513;
(statearr_56522[(11)] = inst_56471);

(statearr_56522[(10)] = inst_56472__$1);

return statearr_56522;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_56513__$1,(8),inst_56482);
} else {
if((state_val_56514 === (17))){
var state_56513__$1 = state_56513;
var statearr_56523_56549 = state_56513__$1;
(statearr_56523_56549[(2)] = null);

(statearr_56523_56549[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56514 === (3))){
var inst_56511 = (state_56513[(2)]);
var state_56513__$1 = state_56513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56513__$1,inst_56511);
} else {
if((state_val_56514 === (12))){
var inst_56471 = (state_56513[(11)]);
var state_56513__$1 = state_56513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56513__$1,(15),out,inst_56471);
} else {
if((state_val_56514 === (2))){
var inst_56463 = (state_56513[(7)]);
var inst_56465 = (inst_56463 == null);
var state_56513__$1 = state_56513;
if(cljs.core.truth_(inst_56465)){
var statearr_56524_56550 = state_56513__$1;
(statearr_56524_56550[(1)] = (4));

} else {
var statearr_56525_56551 = state_56513__$1;
(statearr_56525_56551[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56514 === (11))){
var inst_56508 = (state_56513[(2)]);
var inst_56463 = inst_56508;
var state_56513__$1 = (function (){var statearr_56526 = state_56513;
(statearr_56526[(7)] = inst_56463);

return statearr_56526;
})();
var statearr_56527_56552 = state_56513__$1;
(statearr_56527_56552[(2)] = null);

(statearr_56527_56552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56514 === (9))){
var inst_56484 = (state_56513[(12)]);
var inst_56492 = cljs.core.nth.call(null,inst_56484,(0),null);
var inst_56493 = cljs.core.nth.call(null,inst_56484,(1),null);
var state_56513__$1 = (function (){var statearr_56528 = state_56513;
(statearr_56528[(13)] = inst_56493);

return statearr_56528;
})();
var statearr_56529_56553 = state_56513__$1;
(statearr_56529_56553[(2)] = inst_56492);

(statearr_56529_56553[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56514 === (5))){
var inst_56463 = (state_56513[(7)]);
var state_56513__$1 = state_56513;
var statearr_56530_56554 = state_56513__$1;
(statearr_56530_56554[(2)] = inst_56463);

(statearr_56530_56554[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56514 === (14))){
var inst_56506 = (state_56513[(2)]);
var state_56513__$1 = state_56513;
var statearr_56531_56555 = state_56513__$1;
(statearr_56531_56555[(2)] = inst_56506);

(statearr_56531_56555[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56514 === (16))){
var inst_56485 = (state_56513[(14)]);
var state_56513__$1 = state_56513;
var statearr_56532_56556 = state_56513__$1;
(statearr_56532_56556[(2)] = inst_56485);

(statearr_56532_56556[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56514 === (10))){
var inst_56486 = (state_56513[(9)]);
var inst_56472 = (state_56513[(10)]);
var inst_56495 = cljs.core._EQ_.call(null,inst_56486,inst_56472);
var state_56513__$1 = state_56513;
if(inst_56495){
var statearr_56533_56557 = state_56513__$1;
(statearr_56533_56557[(1)] = (12));

} else {
var statearr_56534_56558 = state_56513__$1;
(statearr_56534_56558[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56514 === (18))){
var inst_56504 = (state_56513[(2)]);
var state_56513__$1 = state_56513;
var statearr_56535_56559 = state_56513__$1;
(statearr_56535_56559[(2)] = inst_56504);

(statearr_56535_56559[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56514 === (8))){
var inst_56486 = (state_56513[(9)]);
var inst_56484 = (state_56513[(12)]);
var inst_56484__$1 = (state_56513[(2)]);
var inst_56485 = cljs.core.nth.call(null,inst_56484__$1,(0),null);
var inst_56486__$1 = cljs.core.nth.call(null,inst_56484__$1,(1),null);
var inst_56487 = cljs.core._EQ_.call(null,inst_56486__$1,in$);
var state_56513__$1 = (function (){var statearr_56536 = state_56513;
(statearr_56536[(9)] = inst_56486__$1);

(statearr_56536[(12)] = inst_56484__$1);

(statearr_56536[(14)] = inst_56485);

return statearr_56536;
})();
if(inst_56487){
var statearr_56537_56560 = state_56513__$1;
(statearr_56537_56560[(1)] = (9));

} else {
var statearr_56538_56561 = state_56513__$1;
(statearr_56538_56561[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__54360__auto___56543,out))
;
return ((function (switch__54272__auto__,c__54360__auto___56543,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__54273__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__54273__auto____0 = (function (){
var statearr_56539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56539[(0)] = re_com$typeahead$debounce_$_state_machine__54273__auto__);

(statearr_56539[(1)] = (1));

return statearr_56539;
});
var re_com$typeahead$debounce_$_state_machine__54273__auto____1 = (function (state_56513){
while(true){
var ret_value__54274__auto__ = (function (){try{while(true){
var result__54275__auto__ = switch__54272__auto__.call(null,state_56513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54275__auto__;
}
break;
}
}catch (e56540){if((e56540 instanceof Object)){
var ex__54276__auto__ = e56540;
var statearr_56541_56562 = state_56513;
(statearr_56541_56562[(5)] = ex__54276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56563 = state_56513;
state_56513 = G__56563;
continue;
} else {
return ret_value__54274__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__54273__auto__ = function(state_56513){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__54273__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__54273__auto____1.call(this,state_56513);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__54273__auto____0;
re_com$typeahead$debounce_$_state_machine__54273__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__54273__auto____1;
return re_com$typeahead$debounce_$_state_machine__54273__auto__;
})()
;})(switch__54272__auto__,c__54360__auto___56543,out))
})();
var state__54362__auto__ = (function (){var statearr_56542 = f__54361__auto__.call(null);
(statearr_56542[(6)] = c__54360__auto___56543);

return statearr_56542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54362__auto__);
});})(c__54360__auto___56543,out))
);


return out;
});
