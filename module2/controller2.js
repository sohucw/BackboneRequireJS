/**
 * @file
 * @author cjw
 * Created by cjw on 16/1/24.
 */

define(['module2/model2', 'module2/view2'], function (Model, View) {
    'use strict';
    var controller = function (name) {
        var model = new Model();
        name && model.set({
            name:name               //设置默认的属性值
        });
        var view = new View({model:model});
        view.render();      //利用Model定义的默认属性初始化界面
        model.fetch();          //拉取cgi等等，获取数据，再触发事件，界面收到消息做相应的动作

        controller.onRouteChange = function () {
            console.log('change');  //可以做一些销毁工作，例如view.undelegateEvents()
            view.undelegateEvents();
        };
    };

    return controller;
});