"use strict";
//@GGICE

var router = require('koa-router')();
var koa = require('koa');
var fs=require('fs');
var app = module.exports = koa();

//config
var config = require('./config/config');

// routes
require("./routes")(app, router);

if (!module.parent) app.listen(config.port, function () {
    console.log('listening to http://localhost:' + config.port);
});
