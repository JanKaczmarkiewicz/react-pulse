const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    static: "./dist",
    hot: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
