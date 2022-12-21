const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/*
  css 파일을 추출해주는 플러그인. HTML에 CSS를 알아서 link 해준다.
  mini-css-extract-plugin 플러그인은 JavaScript 파일 안에서 호출되는 스타일 코드를 청크(Chunk)에서 파일로 추출하므로 개발 중에는 플러그인을 사용하지 않는 것이 좋다.
  즉, 개발이 끝난 후 배포 할 때 사용하면 좋다.
  개발 모드 (dev) 에서는 CSS를 여러 번 수정하고 DOM에 <style> 요소의 코드로 주입하는 것이 훨씬 빨리 작동하므로 "style-loader"를 사용한다.
*/

const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "cheap-module-source-map",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "./",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader","postcss-loader"
        ],
      },
      {
        test: /\.png$/i,
        use: [
          "file-loader",
        ],
      },
    ],
  },
  // resolve: {

  //   // 별칭을 써줌으로써 절대 경로를 설정
  //   alias: {
  //     "dist": path.resolve(__dirname, "../dist/"),
  //   },
  //   // 확장자 명칭을 생략 가능한 것들을 설정
  //   // extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json", ],
  // },
  plugins: [new MiniCssExtractPlugin()],
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: "all",
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});