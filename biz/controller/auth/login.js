/**
 * Created by congyuandong on 16/2/26.
 */
"use strict";

module.exports = function*() {
    if('GET' == this.method) {
        yield this.render('auth/login');
    }
};