/**
 * @file
 * @author cjw
 * Created by cjw on 16/1/24.
 */

define(['module1/view1'], function (View) {

    var controller = function () {
        var view = new View();
        view.render('kenko');
    };
    return controller;
});