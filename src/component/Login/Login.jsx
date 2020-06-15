import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import "./Login.css";
import { withRouter } from "react-router";
var APIcall = require("../../congfiguration/CallAPI");


class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Password: "",
      name:"",
      email:""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    e.preventDefault();
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = e.target;
    let formErrors = { ...this.state.formErrors };
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  Sign_Up = (event) => {
    console.log("abc");
    this.props.history.push({
      pathname: "/signup",
    });
  };
  Sign_In = (event) => {
    var Details = {
      EMAIL: this.state.Email,
      PASSWORD: this.state.Password,
    };
    APIcall.login(Details).then((res) => {
      if (res.data.data !== true) {
        var admin = {
          name:res.data.data.NAME,
          email:res.data.data.EMAIL
        }
        this.props.history.push({
          pathname: "/dashboard",state:admin
        });
      } else {
        console.log("faillllllll");
      }
    });
  };
  render() {
    return (
      <body className="Sign_In">
        <div className="Login">
          <h2 className="Email_Lable">Email</h2>
          <div className="Email_Input">
            <input
              className="email"
              name="Email"
              type="Email"
              value={this.state.Email}
              onChange={this.handleChange}
              placeholder="Enter The Valid Email"
            />
          </div>
          <h2 className="Password_Lable">Password</h2>
          <div className="Password_Input">
            <input
              className="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Enter The Valid password"
              name="Password"
            />
          </div>
          <div className="Sigin_In_Lable">
            <IconButton style={{ color: "Black" }} onClick={this.Sign_In}>
              Sign In
            </IconButton>
          </div>
          <div className="Sigin_In_Lable">
            <IconButton style={{ color: "Black" }} onClick={this.Sign_Up}>
              Sign Up
            </IconButton>
          </div>
        </div>
      </body>
    );
  }
}
export default withRouter(SignInForm);
