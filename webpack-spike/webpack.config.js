const webpack = require('webpack');

module.exports = {
    entry: [
      "./testRunner.js"
    ],
    target: 'node',
    output: {
        path: __dirname+"/build",
        filename: "bundle.js"
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]      
};
