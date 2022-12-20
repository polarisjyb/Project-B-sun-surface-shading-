import {createRoot} from "react-dom/client";
import App from "./App";

// React의 시작 Entry인 index.js에서 tailwind.css 불러오기
// import "./styles/tailwind.css";

import "./styles/index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);

/*
  react 18의 createRoot를 쓸 때 메소드가 원하는 파라미터 타입은
  element | DocumentFragment 이지만, document.getElementById는
  HtmlElement거나 null을 반환하게 됨. 그러므로 as Element를 이용하여 유형을 정의해 주면 된다.
*/
