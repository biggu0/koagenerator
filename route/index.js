var router = require('koa-router')();
var fetch = require('node-fetch');
var co = require('co');
var  = require("../model/movie.js");


router.get('/index', function *(){
    yield this.render('page/index', {title:'koa is coming'});
});

module.exports = router;