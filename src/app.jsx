import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import LoginStore, { LoginStoreProvider } from "./state/loginStore";
import MainUI from './views/MainUI.jsx';
import Home from './views/Home.jsx';

const loginStore = new LoginStore();


ReactDOM.render(
  <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/map">Map</Link>
    </nav>
    <LoginStoreProvider store={LoginStore}>
      <MainUI>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route element={<div>Not Found</div>} />
        </Switch>
      </MainUI>
    </LoginStoreProvider>
  </BrowserRouter>,
  document.getElementById('app')
);
