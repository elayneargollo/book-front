import React, { Component } from 'react';
import Rotas from '../routes/index';

export default class App extends Component {

  render() {
    return (
        <React.StrictMode>
          <Rotas />
        </React.StrictMode>
    );
  }
}