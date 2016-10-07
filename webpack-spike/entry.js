"use strict";

const chai = require('chai');
global.expect = chai.expect;

// hack
global.describe = function(name){ console.log('running', name) }

const tests = requireTests();

loadAll(tests);

if (module.hot) {
  console.log('incremental test running enabled');

  module.hot.accept(tests.id, function () {
    console.log('incremental test');
    //You can't use context here. You _need_ to call require.context again to
    //get the new version. Otherwise you might get errors about using disposed
    //modules
    loadAll( requireTests() );
  });
}

function requireTests(){
  return require.context('./test', true, /\.test\.js$/);
}

function loadAll(context){
  context.keys().forEach(function (key) {
    context(key);
  });
}
