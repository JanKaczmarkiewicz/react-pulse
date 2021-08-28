const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    static: "./dist",
    hot: true,
    port: 3000,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
