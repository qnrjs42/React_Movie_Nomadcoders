## github.io deploy 방법

- github.io deploy

```
npm i gh-pages
```

```json
// package.json

{
  "name": "react-movie-nomadcoders",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.6",
    "@testing-library/react": "^11.2.2",
    "@testing-library/user-event": "^12.6.0",
    "axios": "^0.21.0",
    "gh-pages": "^3.1.0",
    "prop-types": "^15.7.2",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-scripts": "4.0.1",
    "web-vitals": "^0.2.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    // deploy, predeploy 추가
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  // homepage 추가
  "homepage": "https://qnrjs42.github.io/react_movie_nomadcoders/"
}

// 주의할 점
/* 
  프로젝트명 소문자 필수
  유저명 소문자 필수

*/

```

```
// 실행
npm run deploy

// 진행 순서
1. "predeploy": "npm run build"
2. build 폴더가 생성됨
3. "deploy": "gh-pages -d build", // -d는 디렉토리

**********************
gh-pages -d build

Published
**********************
위의 로그가 뜨고난 후 https://qnrjs42.github.io/react_movie_nomadcoders/ 접속
```

<br/>

---

## react-router-dom

```js
// App.js

import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import About from './routes/About';
import Home from "./routes/Home";

const App = () => {
  return (
    <HashRouter>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
    </HashRouter>
  );
}

export default App;
```

```js
<Route path="/" component={Home} />
<Route path="/about" component={About} />

path: url 경로
component: 컴포넌트
exact: 해당 컴포넌트만 출력

예를 들어 path="/about"일 때 exact가 없다면 "/" 경로와 "about" 경로를 동시에 컴포넌트들을 렌더링한다.

exact가 있으면 path="/about"은 about 컴포넌트만 출력한다.
```