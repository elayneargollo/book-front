import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../login/Sytle.css';
import { createUser } from "../../services/api/login";

export default class Cadastrp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      role: "",
    }
  }

  handleClick()
  {
    let user = { username: this.state.username, password: this.state.password, role: this.state.role };
    createUser(user);
  }

  render() {

    return (
      <div className="conteudo">
        <div className="box">
          <h1>Cadastro</h1>
          <form>
            <div>
              <TextField required id="standard-required" label="Enter your username" defaultValue="Hello World" variant="outlined" size="small"  autoFocus
               value={this.state.username}
               onChange={(e) => this.setState({ username: e.target.value })}
              />
            </div>
            <div className="texto">
              <TextField required id="standard-required" label="Enter your password" defaultValue="Hello World" variant="outlined" size="small" autoFocus
                value={this.state.password}
                type="password"
                autoComplete="current-password"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>
             <div>
              <TextField required id="standard-required" label="Enter your role" defaultValue="Hello World" variant="outlined" size="small" autoFocus
                value={this.state.role}
                type="texto"
                onChange={(e) => this.setState({ role: e.target.value })}
              />
            </div>
            <div className="button">
                <Button size="small" variant="contained" color="primary" onClick={this.handleClick.bind(this)}>Cadastrar</Button>
          </div>
          </form>
        </div>
      </div>
    );
  }

}