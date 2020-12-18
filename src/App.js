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
      <Route path="/movie/:id" component={Detail} exact />
    </HashRouter>
  );
}

export default App;

