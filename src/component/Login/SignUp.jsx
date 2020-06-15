import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import "./SignUp.css";
var APIcall = require("../../congfiguration/CallAPI");


class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open:false,
          setOpen: true,
          IMAGEPATH : "",
          Name:"",
          Email: "",
          Contact:"",
          Password:""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = e => {
      e.preventDefault();
      let target = e.target;
      let value = target.type === "checkbox" ? target.checked : target.value;
      const { name } = e.target;
      let formErrors = { ...this.state.formErrors };
      this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    }
    homePage = (event) =>{
        this.props.history.push({
            pathname: "/"
          });
    }
    Submit = event => {
      var Details = {
        NAME: this.state.Name,
        EMAIL_ID: this.state.Email,
        PASSWORD: this.state.Password,
        CONTACT: this.state.Contact,
        IMAGEPATH : this.state.IMAGEPATH
      }
      APIcall.Details(Details).then(res => {
        console.log("after craete data", res.data.data);
      });
    }

    getfile = async event => {
      this.setState({ FILE: event.target.files[0] });
    const formData = new FormData();
    formData.append("filePath", event.target.files[0]);
    APIcall.getImagePath(formData).then(res => {
      this.setState({ IMAGEPATH: res.data.url });
    });
    }
  render() {    
    console.log(this.state.Name);
    
    return(
      <div className = "abc">
      <form>
        
            <h3>Full Name</h3>
            <input
              className="text"
              name="Name"
              type="text"
              value = {this.state.Name}
              onChange={this.handleChange}
              placeholder="Enter The Valid Name"
            />
            <h3>Email Id</h3>
            <input
              className="text"
              name="Email"
              type="text"
              value = {this.state.Email}
              onChange={this.handleChange}
              placeholder="Enter The Valid Email"
            />
            <h3>Contact</h3>
            <input
              className="text"
              name="Contact"
              type="text"
              value = {this.state.Contact}
              onChange={this.handleChange}
              placeholder="Enter The Valid Contact"
            />
             <h3>Password</h3>
            <input
              className="text"
              name="Password"
              type="text"
              value = {this.state.Password}
              onChange={this.handleChange}
              placeholder="Enter The Password"
            />
            <div className="FormField">
            <h3>Profile Image</h3>
              <input
                accept="image/*"
                type="file"
                name="filePath"
                onChange={this.getfile}
              />
            </div>
            </form>
             <div className="Sign_up" onClick =  {this.Submit}>
            <IconButton style={{ color: "Black",size : "40%" }} >Sign Up</IconButton>
          </div>
          <button className = "backToLogin"
          onClick = {this.homePage}>Click To Login</button>
          </div>
        
    
    )
  }
}
export default SignUpForm;
