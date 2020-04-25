import React, { Component } from "react";
import { helper } from "../Helper/Helper";
import cookie from "react-cookies";
import "./Signup.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      full_name: "",
      phone_number: "",
      member_type: ""
    };
  }
  loginn = () => {
    this.props.history.push('/login')
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.validate(e);
  };
  validate = e => {
    var namee = e.target.value;
    var mail = e.target.value;
    if (e.target.id === "namecheck") {
      var exp = /^[a-zA-Z ]*$/;
      console.log("regex", exp.test(namee));
    } else if (e.target.id === "check") {
      var re = /\S+@\S+\.\S+\S+/;
      console.log("regex", re.test(mail));
      if (re.test(mail) === true) {
        this.notifyA();
      }
    } else if (e.target.id === "passcheck") {
      if (e.target.value.length <= 6) {
        this.notifyB();
      }
      this.setState({
        password: e.target.value
      });
    }
  };
  signUp = () => {
    let {
      username,
      password,
      full_name,
      phone_number,
      member_type
    } = this.state;
    let body = { username, password, full_name, phone_number, member_type };
    let res = helper("signup", "POST", body);
    res.then(res => console.log(res));
    res.then(res => {
      if (res.response === true) {
        cookie.save("token", res.token);
        this.props.history.push("/interests");
      }
    });
    console.log(res);
  };
  notifyA = () => {
    toast("email entered is valid");
  };
  notifyB = () => {
    toast("password entered must be 6 characters long");
  };
  render() {
    // console.log(props)
    return (
      <div className="container">
        <ToastContainer />
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
                <div className="loginn">
                  <div>
                    <div to="/login" className="lo1" onClick={this.loginn}> Login</div>
                  </div>
                </div>
                <div className="loginn">
                  <div>
                    <div to="/signup" className="lo1 sup">Signup</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="empty"></div>
            <div className="dataa">
              <div className="fieldss">
                <input
                  type="text"
                  className="usernaame"
                  placeholder="Enter Full Name"
                  id="namecheck"
                  name="full_name"
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="fieldss">
                <input
                  type="text"
                  className="usernaame"
                  placeholder="Enter Email"
                  id="check"
                  name="username"
                  onBlur={this.handleChange}
                ></input>
              </div>
              <div className="fieldss">
                <input
                  type="password"
                  className="usernaame"
                  placeholder="Enter Password"
                  id="passcheck"
                  name="password"
                  onBlur={this.handleChange}
                ></input>
              </div>
              <div className="fieldss">
                <input
                  type="number"
                  className="usernaame"
                  placeholder="Enter Phone Number"
                  id="phn"
                  name="phone_number"
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="fieldss">
                <select
                  className="usernaame cheek"
                  onChange={this.handleChange}
                  name="member_type"
                >
                  <option value="Account Type" defaultValue>
                    {" "}
                    Account Type
                  </option>
                  <option value="artist" className="abc">
                    {" "}
                    ARTIST
                  </option>
                  <option value="enthusiast" className="abc">
                    ENTHUSIAST
                  </option>
                </select>
              </div>
              <div className="fieldss">
                <div className="lastonee">
                  <button className="btnn" onClick={this.signUp}>
                    {" "}
                    Submit
                  </button>
                  <div className="hii">
                    {" "}
                    <div className="hii" onClick={this.loginn}>I'm already a member</div>
                    {/* <Link to="/login" className="hii">
                      {" "}
                      I'm already a member{" "}
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
