/**
 * @file
 * @author cjw
 * Created by cjw on 16/1/24.
 */
define(['backbone'], function () {

    var Router = Backbone.Router.extend({

        routes: {
            'module1': 'module1',
            'module2(/:name)': 'module2',
            '*actions': 'defaultAction'
        },
        initialize: function () {
            // 初始化可以做一些事情....
        },

        module1: function() {
            var url = 'module1/controller1.js';
            //这里不能用模块依赖的写法，而改为url的写法，是为了gulp requirejs打包的时候断开依赖链，分开多个文件
            require([url], function (controller) {
                controller();
            });
        },

        //注意参数name :name一致
        module2: function(name) {
            var url = 'module2/controller2.js';
            require([url], function (controller) {
                controller(name);
            });
        },

        defaultAction: function () {
            location.hash = 'module2';
        }

    });

    var router = new Router();
    router.on('route', function (route, params) {
        //这里route是路由对应的方法名
        console.log('hash change', arguments);
    });

    return router;    //这里必须的，让路由表执行
});