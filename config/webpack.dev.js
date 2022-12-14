const { merge } = require("webpack-merge");
const common = require("./webpack.config");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    open: true,
    hot: true,
    compress: true,
    port: 8080,
    historyApiFallback: true,
    liveReload: true,
  },
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        // webpack에서 postcss를 읽어들이는 postcss-loader를 추가
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
});