var LiveReloadPlugin = require('webpack-livereload-plugin');
const path = require('path');
module.exports = {
  entry: "./components/common/app.js",
  output: {
    filename: "./components/common/dist/bundle.js"
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"]
    },
     {
        test: /\.html$/,
        use: [
          { loader:'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './components')) },
          { loader: 'html-loader' }
        ]
      }],
    plugins: [
      new LiveReloadPlugin('localhost:8080')
    ]
  },
  watch: true
};

