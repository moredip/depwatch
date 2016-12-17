"use strict";

const path = require('path');

const depwatch = require('./depwatch/runtime');

// hack
global.describe = function(name){ console.log('running', name) }

depwatch.start(module, function () {
  return require.context(('./test'), true, /\.test\.js$/);
});
