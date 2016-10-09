function it(testDescription,testFn){
  console.log('~> Running:',testDescription);
  testFn();
  console.log('~> Done');
}

global.it = it;

require('./test/test');
