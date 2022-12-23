# Project-B
# threejs-globe-1

three.js 와 react 를 이용한 렌더링

* 구체, 육면체 렌더링 확인

three.js 는 web에서 3차원 그래픽 기능 개발을 위한 javascript library 이다.

Perspective Camera

원근 카메라.

사람의 시야에 가장 근접한 카메라이며, 카메라에서 멀리 떨어져 있을수록 물체가 작게 보인다.

React Three Fiber에서 원근 카메라를 사용하기 위해서는 Canvas 태그에 camera 속성을 지정하면 된다.

주로 사용되는 프로퍼티는 다음과 같다.

* position: 카메라의 위치. x, y, z 축 순으로 설정할 수 있다.
* fov: Field Of View의 줄임말로, 시야각을 의미. 카메라에서 보이는 장면의 범위. 60 ~ 90도로 설정하는 경우가 대부분이다. 
* near: 카메라에서 렌더링 되는 장면의 최소 거리. 0.00001 같은 이상치는 z-fighting의 원인이 되기 때문에 사용하지 말 것.
* far: 카메라에서 렌더링 되는 장면의 최대 거리. 999999 같은 이상치는 z-fighting의 원인이 되기 때문에 사용하지 말 것.
* 참고로 near, far범위를 벗어난 부분은 렌더링 되지 않는다.

