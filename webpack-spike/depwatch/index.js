const runHotPoll = require('./customHotPoll');

module.exports = {
  start: start
};

function start(hostModule,createContext){
  const context = createContext();
  loadAll(context);

  if (hostModule.hot) {
    console.log('depwatch starting');

    console.log('registering accept for module', context.id);
    hostModule.hot.accept(context.id, function () {
      debugger
      //You can't use context here. You _need_ to call require.context again to
      //get the new version. Otherwise you might get errors about using disposed
      //modules
      loadAll( createContext() );
    });

    hostModule.hot.accept(function(err){
      console.error('got me an err', err);
    });

    runHotPoll();
  }
}

function loadAll(context){
  context.keys().forEach(function (key) {
    context(key);
  });
}
