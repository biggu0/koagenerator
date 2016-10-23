var router = require('koa-router')();
var fetch = require('node-fetch');
var co = require('co');
var movieData = require("../model/movie.js");

router.get('/', function *(){
	// Get ../model movie data
	var data = yield new movieData(),
		movie = data.movie;

    yield this.render('index', {
    	title : 'koa is coming',
    	list : movie,
    	version : data.$API_VERSION
    });
    // yield this.render('page/index', {title:'koa is coming'});
});

router.get('/index', function *(){
    yield this.render('page/index', {title:'koa is coming'});
});

module.exports = router;