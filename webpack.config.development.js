const merge = require('webpack-merge');
const production = require('./webpack.config.production.js');
const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');


module.exports = merge(production, {
    devtool: 'source-map',
    mode: 'development',
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

