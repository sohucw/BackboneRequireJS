/**
 * @file
 * @author cjw
 * Created by cjw on 16/1/24.
 */

'use strict';
(function (win) {
    var config = {
        baseUrl: './',           //依赖相对路径
        paths: {                    //如果某个前缀的依赖不是按照baseUrl拼接这么简单，就需要在这里指出
            jquery: 'libs/jquery.min',
            helper: 'common/helper',
            utils: 'common/utils',
            underscore: 'libs/underscore',
            handlebars: 'libs/handlebars',
            backbone: 'libs/backbone',
            text: 'libs/text'             //用于requirejs导入html类型的依赖
        },
        shim: {                     //引入没有使用requirejs模块写法的类库。backbone依赖underscore
            'underscore': {
                exports: '_'
            },
            'jquery': {
                exports: '$'
            },
            'backbone': {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            }
        }
    };

    require.config(config);

    //Backbone会把自己加到全局变量中
    require(['backbone', 'underscore', 'router'], function(){
        Backbone.history.start();   //开始监控url变化
    });

})(window);
