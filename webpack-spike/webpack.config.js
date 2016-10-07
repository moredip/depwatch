const webpack = require('webpack');

module.exports = {
    entry: [
      'webpack/hot/poll',
      "./entry.js"
    ],
    target: 'node',
    output: {
        path: __dirname+"/build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            //{ test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]      
};
