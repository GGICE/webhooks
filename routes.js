"use strict";
var index = require('./routes/index');

module.exports = function(app, router) {
  app.use(router.routes());
  app.use(router.allowedMethods());
  router.post('/', function*() {
    yield index;
  });
};
