"use strict";

const depwatch = require('../lib');

// fake test runner
global.describe = function(name){ console.log('running', name) }

const watcher = depwatch.start(module, function () {
  return require.context(('./test'), true, /\.test\.js$/);
});

watcher.on('reload', function (reloader) {
  reloader();
});
