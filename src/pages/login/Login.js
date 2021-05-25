import React, { Component } from "react";
import { authenticate }  from "../../services/api/login";
import swal from 'sweetalert';

export default class Login extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      username : "",
      password : "",
    }
  }

  handleClick() {
    let credentials = { username : this.state.username, password : this.state.password};
    const result = authenticate(credentials);
    //this.boasvindas();
  }

  boasvindas() {
    swal("Bem-vindo (a)", `${this.state.username}\n`, "success");
  }

  render() {
    return (
      <div>
        <h1>Account</h1>
        <form>
          Enter your username:
          <input type="text"
           value={this.state.username}
           onChange={(e) => this.setState({ username: e.target.value })}
           placeholder="Enter your username"
          />

          Enter your password:
          <input type="password"
           value={this.state.password}
           onChange={(e) => this.setState({ password: e.target.value })}
           placeholder="Enter your password"
          />

        </form>
        <button onClick={this.handleClick.bind(this)}>Login</button>
      </div>
    );
  }
}