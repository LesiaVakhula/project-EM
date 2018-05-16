const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader:'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader:'sass-loader'
          }
        ]
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
        exclude: path.resolve(__dirname,'node_modules')
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
  new MiniCssExtractPlugin({
      filename: "style.css",
    })
  ]
};