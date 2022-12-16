# Project-B
# webpack-tailwind-err

npm run dev 명령어를 통해 webpack dev 서버 실행 시 브라우저 출력은 정상이나

Refused to apply style from 'http://localhost:8080/output/output.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.

위와 같은 에러 발생.

본 branch 는 위 에러를 해결하기 위해 생성 됨.

문제 해결 완료 (경로 설정 에러)

webpack 설정 확인 중에 entry 파일이 index.tsx 파일인 것을 확인했습니다. 그 index.tsx 파일 안에 import tailwind를 해주었기 때문에, webpack dev server는 컴파일링 되는 index.html 파일에 link css 유무에 관계없이 정상 출력이 될 수 있었음 을 알게되었습니다. 그래서 entry 파일안에 import tailwind를 없애고 컴파일링 index.html 파일에 link css로 경로를 동일한 폴더 안에 설정해주었더니 오류없이 작동하는 것을 확인했습니다.

output 폴더를 따로 생성해서 그 안에 css 파일을 저장하고자 했던 이유는 tailwind css의 작동 방식 때문인데, 모든 HTML파일, 자바스크립트 구성 요소 및 클래스 이름을 스캔하고 해당 스타일들을 생성한 다음 정적 CSS 파일에 쓰는 방식으로 작동합니다. 이 작업들을 동적으로, 파일 내 구성 요소 클래스 가 바뀔 때 마다 업데이트 되는 파일을 구분하고자 했었습니다. 그런데 react와 webpack을 사용하는 방식으로는 entry 파일에서 import tailwind를 해주면 되는 것이기 때문에 꼭 컴파일링 되는 파일에서 link css 경로로 설정해줄 필요가 없다는 생각을 했습니다.

결론은 node 서버, html 로컬 파일, react & webpack  3가지 환경에서 오류 없이 동일한 브라우저 출력을 하려면 엔트리 파일과 동일한 경로 내에 css 파일을 link css로 가져오는 것, react & webpack 에서만 확인하려면 entry 파일에서 import tailwind 해주면 컴파일링 파일에서 link css를 안해줘도 무방합니다.