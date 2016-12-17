"use strict";

const depwatch = require('../lib');

// fake test runner
global.describe = function(name){ console.log('running', name) }

depwatch.start(module, function () {
  return require.context(('./test'), true, /\.test\.js$/);
});
