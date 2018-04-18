var LiveReloadPlugin = require('webpack-livereload-plugin');
const path = require('path');
module.exports = {
  entry: "./components/common/app.js",
  output: {
    filename: "./build/bundle.js"
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
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                quality: 75
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: '65-90',
                speed: 5
              },
            }
          },
        ],
      }
    ],
    // plugins: [
    //   new LiveReloadPlugin('localhost:8080')
    // ]
  },
  watch: true
};