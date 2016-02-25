"use strict";
const koa = require('koa');
const config = require('./conf').appConfig;

const app = koa();

app.use(function *(){
  this.body = 'Hello Node.js';
});


app.listen(config.port, function(){
	console.log('server started on:', config.port);
});