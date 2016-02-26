"use strict";
const koa = require('koa');
const path = require('path');
const config = require('./conf').appConfig;
const statics = require('koa-static');
const views = require('koa-views');
const router = require('./biz/router');

const app = koa();

app.use(statics(path.resolve(__dirname, './static')));

//template engine
app.use(views(path.resolve(__dirname, './biz/templates'), {
    default: 'swig'
}));

//router
router(app);

app.listen(config.port, function(){
	console.log('server started on:', config.port);
});