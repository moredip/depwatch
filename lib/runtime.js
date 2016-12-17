const EventEmitter = require('events');

const runHotPoll = require('./customHotPoll');

module.exports = {
  start: start
};

function start(hostModule,createContext){
  if (!hostModule.hot) {
    throw new Error('Webpack must have Hot Module Reloading enabled');
  }

  const emitter = new EventEmitter();

  function emitReload(){
    function reloader(){
      const updatedContext = createContext();
      loadAll( updatedContext );
    }

    emitter.emit('reload', reloader);
  }

  const context = createContext();
  loadAll( context );
  hostModule.hot.accept(context.id, emitReload);

  runHotPoll();

  return emitter;
}

function loadAll(context){
  context.keys().forEach(function (key) {
    context(key);
  });
}
