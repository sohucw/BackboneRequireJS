/**
 * @file
 * @author cjw
 * Created by cjw on 16/1/24.
 */

define(['text!module1/tpl.html'], function (tpl) {
    'use strict';
    var View1 = Backbone.View.extend({
        el: '#container',
        initialize: function () {
            this.render('chenjianwei-befe');
        },

        render: function (name) {
            this.$el.html(_.template(tpl, {name: name}));
        }
    });
    return View1;
});