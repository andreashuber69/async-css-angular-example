const HtmlWebpackPlugin = require('html-webpack-plugin')
const AsyncCssPlugin = require("async-css-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin(),
    new AsyncCssPlugin({ logLevel: "info" })
  ]
};
