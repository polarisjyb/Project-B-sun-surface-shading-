# Project-B
# webpack-img-err

- webpack build를 실행했을 때 이미지 파일이 번들링 폴더 하위에 생성되지 않는 오류 확인 및 해결
- webpack.prod.js 파일에서 build 명령을 실행했을 때 이미지 파일 이름을 난독화 하여 번들링 하는 것을 확인했고 번들링 된 파일에서는 요청 URL이 파일 고유의 이름이었기 때문에 주석 처리로 난독화 되는 것을 막음
- webpack.common.js 파일에서 options 프로퍼티의 객체 name을 설정하여 file-loader를 통해 읽고 해당 파일을 다른 곳으로 옮김으로써 dist/img 하위 파일로 들어가도록 설정
- webpack-dev-sever 와 npm run build 로 번들링 된 파일 모두 브라우저에서 동일하게 출력 되는 것을 확인
- gitignore 파일에 dist 폴더 추가