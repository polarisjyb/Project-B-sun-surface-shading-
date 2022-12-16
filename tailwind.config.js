/** @type {import('tailwindcss').Config} */

// tailwind css의 설정파일 생성

module.exports = {
  /* src 디렉토리의 모든 html 또는 React Component 에서 Tailwind css를 사용할 수 있도록 설정 */
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  /* media - 유저의 시스템 설정에 따라 자동으로 적용.
  즉 내가 Chrome에서 다크모드를 사용하고 있으면 자동으로 다크모드 UI를 보여줌.
    class - 시스템 설정에 의존하지 않고 다크모드 토글링을 지원하고 싶다면 사용.
  */
  theme: {
    extend: {},
  },
  plugins: [],
}