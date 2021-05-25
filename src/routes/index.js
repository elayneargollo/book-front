import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Livros from '../pages/livros/Livros';

export const paths = require('./paths');

function Rotas() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={paths.root} component={Home} />
        <Route exact path={paths.login} component={Login} />
        <Route exact path={paths.livros} component={Livros} />
      </Switch>
    </BrowserRouter>
  );
}

export default Rotas;