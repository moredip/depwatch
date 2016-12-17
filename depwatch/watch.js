const path = require('path');
const webpack = require("webpack");

const childProcess = require('child_process');

const webpackOptions = require('../webpack.config');
const watchOptions = {
  ignored: /node_modules/
};

// very much based on webpack-dev-node
//   https://github.com/alexanderchr/webpack-dev-node/blob/0a08896bd3f4931898cabb2f9f7571035f8ca08d/index.js
const compiler = webpack(webpackOptions);

var bundleProcess;

compiler.run(function(err,stats){
  if(err){ throw err; }

  bundleProcess = spawnBundleProcess(stats);
  startWatching();
});

function startWatching(){
  compiler.watch(watchOptions, function (err,stats) {
    if(err){ throw err; }

    console.log('~~~ CHANGE DETECTED ~~~');
    // TODO: send signal to bundleProcess
  });
}


function spawnBundleProcess(stats){
  const outputDirectory = stats.compilation.compiler.outputPath;
  const outputFile = stats.toJson().assetsByChunkName.main;
  const outputPath = path.join(outputDirectory, outputFile);

  return childProcess.fork(outputPath);
}
