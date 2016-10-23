{
  "name": "koagenerator",
  "version": "1.0.0",
  "description": "koagenerator Scaffold",
  "main": "index.js",
  "scripts": {
    "start": "node --harmony ./bin/server",
    "dev": "export NODE_ENV=dev; supervisor -i node_modules -- --harmony --use_strict ./bin/server",
    "pm2start": "export NODE_ENV=production; pm2 startOrGracefulReload pm2.json"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/biggu0/koagenerator.git"
  },
  "keywords": [
    "nodejs",
    "koa"
  ],
  "author": "bigu0",
  "license": "MIT",
  "dependencies": {
    "body-parser": "^1.15.2",
    "chalk": "^1.1.3",
    "co": "^4.6.0",
    "config": "^1.21.0",
    "config-lite": "^1.5.0",
    "debug": "^2.2.0",
    "ejs": "^2.5.1",
    "koa": "^1.2.1",
    "koa-body": "^1.4.0",
    "koa-bodyparser": "^2.2.0",
    "koa-ejs": "^3.0.0",
    "koa-gzip": "^0.1.0",
    "koa-json": "^1.1.3",
    "koa-logger": "^1.3.0",
    "koa-onerror": "^2.0.0",
    "koa-router": "^5.4.0",
    "koa-static": "^2.0.0",
    "koa-views": "^4.1.0",
    "lodash": "^4.14.1",
    "node-fetch": "^1.6.1",
    "pm2": "^1.1.3",
    "supervisor": "^0.11.0"
  }
}
