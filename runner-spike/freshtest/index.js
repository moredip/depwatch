module.exports = function captureTests( testRequirerFn ){
  const dsl = require('./dsl')();
  const runner = require('./runner')();

  dsl.injectInto(global);

  testRequirerFn();

  runner.runTests(dsl.getRegisteredTests());
};
