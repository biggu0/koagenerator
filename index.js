const app = require('koa')();
const router = require('koa-router');
const render = require('koa-ejs');
const json = require('koa-json');
const logger = require('koa-logger');
const config = require('config');
const bodyparser = require('koa-bodyparser');

// project config
render(app,config.renderConf);
app.use(bodyparser());
app.use(json());
app.use(logger());
app.use(config.staticsConf);

//Terminal print method response time
app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

// project router & mount root routes  
var index = require('./route/index');
// var users = require('./routes/users');
app.use(index.routes()).use(index.allowedMethods());
//app.use(users.routes()).use(users.allowedMethods());
 
app.on('error', function(err, ctx){
  logger.error('server error', err, ctx);
});

module.exports = app;
