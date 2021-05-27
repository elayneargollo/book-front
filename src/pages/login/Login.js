import React, { Component } from "react";
import { authenticate } from "../../services/api/login";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import '../login/Sytle.css';
import { cadastro } from '../../routes/paths';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    }
  }

  handleClick() {
    let credentials = { username: this.state.username, password: this.state.password };
    authenticate(credentials);
  }

  render() {

    return (
      <div className="conteudo">
        <div className="box">
          <h1>Login</h1>
          <form>
            <div>
              <TextField required id="standard-required" label="Enter your username" defaultValue="Hello World" variant="outlined" size="small"  autoFocus
                value={this.state.username}
                onChange={(e) => this.setState({ username: e.target.value })}
              />
            </div>
            <div className="texto">
              <TextField required id="standard-required2" label="Enter your password" defaultValue="Hello World" variant="outlined" size="small" autoFocus
                value={this.state.password}
                type="password"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>
          </form>
          <div className="senhas">
            <Link href={cadastro} >
              Register an account
            </Link>
          </div>
          <div className="senhas">
            <Link href="#" >
              I forgot my password
            </Link>
          </div>
          <div className="button">
            <Button size="small" variant="contained" color="primary" onClick={this.handleClick.bind(this)}>Log in</Button>
          </div>
        </div>
      </div>
    );
  }
}