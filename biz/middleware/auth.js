/**
 * Created by congyuandong on 16/2/26.
 */
const userauth = require('koa-userauth');

module.exports = function() {
    return userauth({
        match: '/',
        loginURLFormatter: function (url) {
          return '/login?redirect=' + url;
        },
        getUser: function* (ctx) {
            console.log('getUser');
            console.log(ctx.query);
        }

    });
};