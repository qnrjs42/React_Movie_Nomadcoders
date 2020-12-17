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

