'use strict';

const Koa = require('koa');
const serveStatjc = require('koa-static');

const server = new Koa();

server.use(serveStatic('app'));

server.listen(3000);
