/**
 * @file
 * @author cjw
 * Created by cjw on 16/1/24.
 */
define(['backbone'], function () {
    'use strict';
    var routesMap = {
        'module1': 'module1/controller1.js',
        'module2(/:name)': 'module2/controller2.js',
        '*actions': 'defaultAction'
    };

    var Router = Backbone.Router.extend({
        routes: routesMap,
        defaultAction: function () {
            location.hash = 'module2';
        }

    });
    var router = new Router();

    //用on route来处理路由的逻辑，这里route是路由对应的value
    router.on('route', function (route, params) {
        require([route], function (controller) {
            if(router.currentController && router.currentController !== controller){
                router.currentController.onRouteChange && router.currentController.onRouteChange();
            }

            router.currentController = controller;
            controller.apply(null, params);     //每个模块都返回controller
        });
    });
    return router;
});