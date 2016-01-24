/**
 * @file
 * @author cjw
 * Created by cjw on 16/1/24.
 */

define([], function () {
    var Model2 = Backbone.Model.extend({
        //模型默认的数据
        defaults: function () {
            return {
                name: "chenjianwei"
            };
        },

        // 定义一些方法
        fetch: function () {
            var o = this;
            //可以做一些http请求
            setTimeout(function(){
                o.set({name:'sohucw'});
                o.trigger('nameEvent');     //向view触发事件
            }, 1000);
        }

    });

    return Model2;
});