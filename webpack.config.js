const path = require("path");
const webpack = require("webpack");
const dotenv = require('dotenv').config()

module.exports = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({"process.env": dotenv.parsed})
  ],
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "public/"),
    publicPath: "/public/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    compress: true,
    port: process.env.PORT,
    publicPath: `http://localhost:${process.env.PORT}/dist/`,
    hotOnly: true
  }
};
