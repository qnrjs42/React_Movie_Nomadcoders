import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import About from './routes/About';
import Home from "./routes/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
    </BrowserRouter>
  );
}

export default App;

