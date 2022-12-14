const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development", // 개발 모드
  devtool: "inline-source-map",
  devServer: {
    open: true,
    hot: true,
    compress: true,
    port: 8080,
    historyApiFallback: true,
    liveReload: true,
  },
  /*
    output - 번들링되고 만들어지는 파일에 대한 정보를 명시
    output.filename - 번들링 된 파일의 이름을 명시
    output.publicPath - 브라우저에서 참조될 때 출력 디렉터리의 공용 URL을 지정
  */
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/",
  },
  // 모듈이 생성 될 때 요청과 일치하는 rule의 배열.
  module: {
    rules: [
      {
        // loader를 적용시킬 파일들을 정규식으로 명시
        test: /\.css$/i,
        
        //  use : 지정된 'loader'가 test에서 적용한 파일을 컴파일
        // webpack에서 postcss를 읽어들이는 postcss-loader를 추가
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
});