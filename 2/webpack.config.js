const webpack = require("webpack");

module.exports = {
  entry: "./ex/index.jsx",
  output: {
    path: __dirname + "public",
    filename: "./bundle.js"
  },
  mode: "development",
  devServer: {
    port: 8080,
    contentBase: "./public"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
