const HtmlWebpackPlugin = require("html-webpack-plugin");
/*
  웹팩에서 실행해서 나오는 결과물을 확인하기 위해서는 html 파일을 수동으로 작성해야 한다.
  babel-loader에서 chunkhash를 사용하면 파일의 내용이 수정될 때마다 파일 이름이 변경되도록 할 수 있음.
  이런 옵션 때문에 파일의 내용이 변경될 때마다 html 파일의 내용도 수정해야 하는 번거로움이 생긴다.
  이러한 작업을 자동으로 하는 플러그인이 html-webpack-plugin 이다. (html 파일에 javascript 번들을 자동으로 묶어 줌)
*/
const path = require("path");
const webpack = require("webpack");
// const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer");
// BundleAnalyzer는 Bundle 최적화 용도로 사용

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  /* entry는 애플리케이션이 실행되며 webpack이 번들링을 시작하는 곳이다. */
  entry: `${path.resolve(__dirname, "../src")}/index.jsx`,
  module: {
    rules: [
      /*
        loader는 웹 애플리케이션을 해독할 때 자바스크립트 파일이 아닌 HTML, CSS, JPG등 웹 리소스들을 변환할 수 있도록 도와준다.
        자주 사용되는 로더는 css-loader, style-loader, file-loader 등이 있다.
        기본적으로 webpack은 자바스크립트 및 JSON 파일만 해독이 가능하다. 하지만 loader를 사용하면 webpack이 다른 포맷의 파일을 처리하고
        이를 앱에서 사용할 수 있는 모듈로 변환할 수 있다.
      */
      {
        test: /\.(ts|tsx|js|jsx)$/,
        // loader를 적용시킬 파일 유형 명시
        
        use: "babel-loader",
        // 해당 파일에 적용할 loader 명시
        
        exclude: /node_modules/,
        // loader를 배제시킬 파일 명시
      },
    ],
  },
  plugins: [
    /*
    플러그인(plugin)은 웹팩의 기본적인 동작에 추가적인 기능을 제공하는 속성이다.
    로더랑 비교하면 로더는 파일을 해석하고 변환하는 과정에 관여하는 반면, 플러그인은 해당 결과물의 형태를 바꾸는 역할을 한다고 볼 수 있다.
    
    HtmlWebpackPlugin : 웹팩으로 빌드한 결과물로 HTML 파일을 생성해주는 플러그인
    
    ProvidePlugin : 웹팩에 내장된 플러그인으로 자주 사용되는 모듈을 미리 등록하여 매번 작성하지 않도록 해준다.
      ex) import React from 'react'

    ProgressPlugin : 웹팩의 빌드 진행율을 표시해주는 플러그인 (터미널에서 확인 가능)
    
    CleanWebpackPlugin : 웹팩을 실행할 때 마다 dist 폴더를 정리한다.
    번들 파일의 내용이 변경될 때마다 파일 이름도 변경되기 때문에 이전에 생성된 번들 파일을 정리하는 용도로 사용한다.
    
    */
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env)
    })
  ],

  // resolve는 모듈해석에 대한 설정으로 특정 모듈을 호출할 때 모듈을 찾는 위치를 변경할 수 있다.
  resolve: {

    // 별칭을 써줌으로써 절대 경로를 설정
    alias: {
      "@": path.resolve(__dirname, "../src/"),
    },
    // 확장자 명칭을 생략 가능한 것들을 설정
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
  },
};