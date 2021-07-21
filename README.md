# Sweetcase Service Web(Frontend)
### 직접 만든 간단한 알고리즘이나 Library를 웹상으로 지원하기 위한 서비스 (Front End)

<img src="src/asset/sweetcase-service-logo.png" width="300px" height="300px"/>

![javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![react](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![react router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white)
![bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat-square&logo=bootstrap&logoColor=white)

## 현재 운영되고 있는 서비스

|서비스명|설명|버전|
|---|---|---|
|[PCFL](https://github.com/Vector-7/PCFL)|Midi파일에서 연속된 서스테인(CC64)의 간격을 벌려서 FL Studio에서 임포트 할 때 불협화음이 발생하지 않게 처리|v1.0.0|

## 파일 구조 (src기준)
```
src
`-asset
    `-font
    `-config.json
`-components
`-page
    `-contents
    `-MainPage.jsx
`-App.jsx
`-index.js
```
* Asset: 폰트나 그림, config.json이 들어있는 디렉토리
    * config.json: 백엔드 URL를 저장하는 json 설정파일
* components: 독립적인 컴포넌트를 저장하는 디렉토리 (주로 상태변화가 심하거나 Footer, Navbar같은 여러군데에서 사용하는 컴포넌트를 저장)
* page: 웹 페이지 컴포넌트
    * contents: Main페이지가 아닌 각 서비스 페이지를 저장
* App.jsx: React Router 선언부
* index.js