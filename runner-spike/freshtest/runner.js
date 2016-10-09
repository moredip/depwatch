module.exports = function createRunner(){
  function runTests(tests){

    console.log('RUNNING %d tests', tests.length);
    console.log('~~~~~~~~~~~~~~~~');


    tests.forEach(function(test){
      console.log('~> Running:',test.description);
      test.fn();
      console.log('~> Done');
    });
  }

  return {
    runTests: runTests
  };
}
