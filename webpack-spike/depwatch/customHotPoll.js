module.exports = function startHotPoll(pollInterval){
  pollInterval = pollInterval || 100;

  if( !module.hot ){
    console.error('HOT RELOADING NOT AVAILABLE');
    return false;
  }

	setInterval(checkForUpdate, pollInterval);

  return true;
}

function checkForUpdate() {
  if(module.hot.status() === "idle") {
    module.hot.check(true, function(err, updatedModules) {
      if(err) {
        if(module.hot.status() in {
            abort: 1,
            fail: 1
          }) {
          console.warn("[HMR] Cannot apply update.");
          console.warn("[HMR] " + err.stack || err.message);
          console.warn("[HMR] You need to restart the application!");
        } else {
          console.warn("[HMR] Update failed: " + err.stack || err.message);
        }
        return;
      }

      if(updatedModules) {
        checkForUpdate();
      }
    });
  }
}
