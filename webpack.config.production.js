const path = require('path');

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
        use: ["style-loader", "css-loader", "sass-loader"]
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
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