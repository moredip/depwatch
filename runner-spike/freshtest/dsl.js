module.exports = function createDsl(){
  var tests = [];

  function it(testDescription,testFn){
    const test = {
      description: testDescription,
      fn: testFn
    };
    tests.push(test);
  }

  function getRegisteredTests(){
    return tests;
  }

  function injectInto(global){
    global.it = it;
  }

  return {
    it: it,
    getRegisteredTests: getRegisteredTests,
    injectInto: injectInto
  };
};

