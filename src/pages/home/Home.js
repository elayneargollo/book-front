import React, { Component } from "react";
import { Typography } from '@material-ui/core';

export default class Home extends Component {

    render() {
        return (
          <div >
          <Typography>
            <div>Seja bem-vindo</div>
            <div >
              ao&nbsp;<strong>Book Store API</strong>
            </div>
          </Typography>
        </div>
        );
    }
}