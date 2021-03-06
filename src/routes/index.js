import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Livros from '../pages/livros/Livros';
import Cadastro from '../pages/cadastro/Cadastro';
import User from '../pages/user/User';

import Menu from '../components/navbar/Menu';
import Footer from '../components/footer/Footer';

export const paths = require('./paths');

function Rotas() {
  
  return (
    <BrowserRouter>
    <Menu/>
      <Switch>
        <Route exact path={paths.root} component={Home} />
        <Route exact path={paths.login} component={Login} />
        <Route exact path={paths.livros} component={Livros} />
        <Route exact path={paths.cadastro} component={Cadastro} />
        <Route exact path={paths.user} component={User} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default Rotas;