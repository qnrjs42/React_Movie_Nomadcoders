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

---

### Link

- Link는 Router 밖에서 사용할 수 없다.
- BrowserRouter와 HashRouter가 있는데 BrowserRouter는 url에 #이 붙지 않지만 github.io deploy할 때 번거롭고,
- HashRouter는 url에 #이 붙지만 github.io deploy할 때 간편하다.

```js
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import About from './routes/About';
import Home from "./routes/Home";

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
    </HashRouter>
  );
}

export default App;
```

```js
// components/Navigation.js

import React from "react";
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </>
  );
};

export default Navigation;
```

<br/>

---

### 리스트 - 상세보기

```js
// App.js

import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import About from './routes/About';
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/movie-detail" component={Detail} exact />
    </HashRouter>
  );
}

export default App;
```

```js
// components/Movies.js

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import "./Movie.css";

const Movie = ({id, year, title, summary, poster, genres}) => {
  return (
    <Link to={{
      pathname: '/movie-detail',
      state: {
        year,
        title,
        summary,
        poster,
        genres
      }
    }}>
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__geres">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
```

```js
// 중요한 부분
<Link to={{
  pathname: '/movie-detail',
  state: {
    year,
    title,
    summary,
    poster,
    genres
  }
}}>

...

</Link>
```

```js
// routes/Detail.js

import React from "react";

const Detail = (props) => {
  console.log(props);
  return (
    <>
      <span>hello?</span>
    </>
  );
};

export default Detail;
```

```json
console.log(props);

location.state {
  genres: Array(5)
    0: "Adventure"
    1: "Animation"
    2: "Comedy"
    3: "Family"
    4: "Fantasy"
    length: 5
    __proto__: Array(0)
  poster: "https://yts.mx/assets/images/movies/the_croods_a_new_age_2020/medium-cover.jpg"
  summary: "The prehistoric family the Croods are challenged by a rival family the Bettermans, who claim to be better and more evolved."
  title: "The Croods: A New Age"
}
```