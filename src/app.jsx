import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import MainUI from './views/MainUI.jsx';
import Home from './views/Home.jsx';


ReactDOM.render(
  <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/map">Map</Link>
    </nav>
    <MainUI>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route element={<div>Not Found</div>} />
      </Switch>
    </MainUI>
  </BrowserRouter>,
  document.getElementById('app')
);
