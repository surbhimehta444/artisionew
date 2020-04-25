import React, { Component } from "react";
import "./Login.css";
import { helper } from "../Helper/Helper";
import cookie from "react-cookies";
import {Route} from 'react-router-dom'; 
import Signup from "../Signup";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username_phone_number: "",
      password: "",
      rememberme: false
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  signupp = () => {
    this.props.history.push("/signup");
  };
  loginupp = () => {
    this.props.history.push("/login");
  };
  loginup = () => {
    let { username_phone_number, password } = this.state;
    let body = { username_phone_number, password };
    let res = helper("login", "POST", body);
    res.then(res => console.log(res));
    res.then(res => {
      if (res.response === true) {
        cookie.save("token", res.token);
        this.props.history.push("/");
      }
    });
    console.log(res);
  };

  render() {
    // console.log(this.props);
    return (
      <div className="container">
        <div className="box">
          <div className="leftbox">
            <div className="logo">Artiso</div>
            <div className="icon"></div>
            <div className="end">
              Explore art and connect with most ambitious <br />
              minds having great taste in art.
            </div>
          </div>
          <div className="rightbox">
            <div className="buttonbar">
              <div className="bbar">
                <div className="login">
                  <div className="lo" onClick={this.loginupp}>
                    Login
                  </div>
                </div>
                <div className="login">
                  <div className="lo su" onClick={this.signupp}>
                    signup
                  </div>
                </div>
              </div>
            </div>
            <div className="empty"></div>
            <div className="data">
              <div className="fields">
                <input
                  type="text"
                  className="username"
                  name="username_phone_number"
                  placeholder="Enter Username"
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="fields">
                <input
                  type="password"
                  className="username"
                  name="password"
                  placeholder="Enter password"
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>
            <div className="lastone">
              <div className="rememberr">
                <input
                  type="checkbox"
                  name="remember me"
                  className="yaad"
                  onChange={this.handleChange}
                />
                <div className="alongtext">Remember Me</div>
              </div>

              <div>
                {" "}
                <button className="btn" onClick={this.loginup}>
                  Login
                </button>
              </div>
              <div className="hi" onClick={this.signupp}>
                Create an Account
              </div>
            </div>
          </div>
        </div>

        <Route path="/signup" render={(props) => <Signup {...props}/>}/>
      </div>
    );
  }
}
export default Login;
