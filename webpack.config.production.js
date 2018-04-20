const LiveReloadPlugin = require('webpack-livereload-plugin');
const path = require('path');
const env = process.env.NODE_ENV;

module.exports = {
  entry: "./components/common/app.js",
  output: {
    path: path.join(__dirname, '/build'),
    filename: "bundle.js"
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.html$/,
        use: [{
            loader: 'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './components'))
          },
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(png|jpe?g)$/i,
        use: [
          'file-loader?name=[name].[ext]',
          'image-webpack-loader'
        ],
      }
    ],
  },
    // plugins: [
    //     new LiveReloadPlugin('localhost:8080')
    // ],
  watch: true
};