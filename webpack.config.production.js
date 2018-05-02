const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: "./components/common/app.js",
  output: {
    path: path.join(__dirname, '/build'),
    filename: "bundle.js"
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /components.*\.js$/,
        use: [{
          loader: 'ng-annotate-loader'
        }],
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
          'file-loader?name=images/[name].[ext]',
          'image-webpack-loader'
        ],
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
  watch: true
};