"use strict";
/**
 * Created by congyuandong on 16/2/25.
 */
const router = require('koa-router')();
const controller = require('./controller')

module.exports = function(app) {
    router.get('/', controller.index);
    router.get('/login', controller.login);

    app.use(router.routes());
};