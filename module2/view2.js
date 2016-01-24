/**
 * @file
 * @author cjw
 * Created by cjw on 16/1/24.
 */
define(['text!module2/tpl.html'], function (tpl) {
    'use strict';
    var View2 = Backbone.View.extend({
        el: '#container',
        events: {
            'click button': 'onClickSpan'     //使用代理监听交互
        },
        initialize: function () {
            this.model.on('nameEvent', this.render, this);      //监听事件
        },
        render: function () {

            this.$el.html(_.template(tpl, {name: this.model.get('name')}));     //类似java的DAO思想，一切通过get set操作
        },

        onClickSpan: function (e) {
            alert('您点击了button');
        }
    });

    return View2;
});