# Project-B
# WorldMap-Mapbox

Mapbox 를 이용한 세계지도 구현 예정

env 설정으로 MAPBOX_TOKEN을 외부로 보냄

웹,앱 개발을 하다보면 포트, DB관련 정보, API_KEY등.. 개발자 혼자서 또는 팀만 알아야 하는 값 즉, git, 오픈소스에 올리면 안되는 값들이 있다. 이때 필요한 것이 dotenv 패키지 이다.
환경변수 파일을 외부에 만들어 포트, API_KEY등.. 을 저장시켜 소스코드 내에 노출하지 않고 사용하는 방법이다.