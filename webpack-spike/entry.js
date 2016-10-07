const chai = require('chai');
global.expect = chai.expect;

const testsContext = require.context('./test', true, /\.test\.js$/);

testsContext.keys().forEach(function (key) {
  const testModule = testsContext(key);
});
