// Compiled by ClojureScript 1.9.946 {}
goog.provide('cardy.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('markdown.core');
goog.require('ajax.core');
goog.require('cardy.ajax');
goog.require('re_com.core');
goog.require('cardy.events');
goog.require('cardy.views');
goog.require('cardy.subs');
goog.require('goog.History');
cardy.core.mount_components = (function cardy$core$mount_components(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cardy.views.cardy_app], null),document.getElementById("app"));
});
cardy.core.init_BANG_ = (function cardy$core$init_BANG_(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cardy.events","initialize-db","cardy.events/initialize-db",1650796766)], null));

cardy.ajax.load_interceptors_BANG_.call(null);

return cardy.core.mount_components.call(null);
});
