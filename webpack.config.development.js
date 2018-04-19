const merge = require('webpack-merge');
const production = require('./webpack.config.production.js');
const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');

//need to fix liveReaload, it doesn`t work

module.exports = merge(production, {
    devtool: 'source-map',
    plugins: [ 
        new LiveReloadPlugin({
            appendScriptTag: true,
            ignore: null,
            watchOptions: {
                poll: true
              }
        })
    ]
});

