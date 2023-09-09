import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './login.css';
import { users, validation } from './user';

class Login extends Component {
  constructor() {
    super();
    this.state = { userName: "", password: "", message: false };
    this.eventHandler = this.eventHandler.bind(this);
    this.postDetails = this.postDetails.bind(this);
  }

  eventHandler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  postDetails(event) {
    event.preventDefault();

    const isUserValid = validation(this.state.userName, this.state.password);

    this.setState({ message: isUserValid });
  }

  render() {
    return (
      <div className="main-div">
        <h1>{this.state.message === true ? "Success" : "Try again"}</h1>
        <form>
          <input type="text" placeholder="enter name" name="userName" onChange={this.eventHandler} />
          <br />
          <br />
          <input type="password" placeholder="enter password" name="password" onChange={this.eventHandler} />
          <br />
          <br />
          <button value="submit" onClick={this.postDetails}>Submit</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);
