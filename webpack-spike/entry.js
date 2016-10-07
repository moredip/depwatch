"use strict";

const chai = require('chai');
global.expect = chai.expect;

// hack
global.describe = function(name){ console.log('running', name) }

function requireTests(){
  return require.context('./test', true, /\.test\.js$/);
}

const testsContext = requireTests();

let testModules = {};

testsContext.keys().forEach(function (key) {
  const testModule = testsContext(key);
  testModules[key] = testModule;
  testChanged(key, testModule, false);  
});

if (module.hot) {
  console.log('fresh tests!');

  module.hot.accept(testsContext.id, function () {
    console.log('stuff happened');
    //You can't use context here. You _need_ to call require.context again to
    //get the new version. Otherwise you might get errors about using disposed
    //modules
    const reloadedContext = requireTests();
    //To find out what module was changed you just compare the result of the
    //require call with the version stored in the modules hash using strict
    //equality. Equal means it is unchanged.
    const changedModules = reloadedContext.keys()
      .map(function (key) {
        return [key, reloadedContext(key)];
      })
      .filter(function (reloadedModule) {
        return testModules[reloadedModule[0]] !== reloadedModule[1];
      });

    changedModules.forEach(function (module) {
      testModules[module[0]] = module[1];
      testChanged(module[0], module[1], true);
    });
  });

  module.hot.addStatusHandler( function(status){
    console.log('hot status:', status);
    if( status === 'idle' ){
      setTimeout( function(){ module.hot.check(true); },1000);
    }
  });

  module.hot.check(true);
}

function testChanged(name, module, isReload) {
  console.log("module " + name + (isReload ? " re" : " ") + "loaded");
}
