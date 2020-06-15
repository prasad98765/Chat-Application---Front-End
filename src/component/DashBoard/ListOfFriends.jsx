import React, { Component } from "react";
import Dashboard from "../DashBoard/Dashboard";
import Topbar from "../Navbar/newNavbar"
var APIcall = require("../../congfiguration/CallAPI");

class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserDetails : [],
      name : props.history.location.state.name,
      email:props.history.location.state.email
    }
  }

  getchat = (value) => {
    this.props.history.push({
      pathname: "/chat",state: "abc"
    });
  }
  componentDidMount = (value) => {
    APIcall.getUserDetails().then(res => {
      this.setState({UserDetails : res.data})
      console.log("after craete data", res.data);
    });
  }
  render() {
    console.log("in ListOf Friend",this.props.history.location.state.name);
    var adminDetails = {
      name:this.state.name,
      email:this.state.email
    }
    return (
      <div>
          <Topbar admin = {adminDetails}  />    
            <div style={{ display: "flex", flexWrap: "wrap",marginLeft:"100px",marginTop:"-40px"}}>
                  {this.state.UserDetails.map((value, index) => {
                return <Dashboard key={index} value={value} getchat = {this.getchat}></Dashboard>;
              })}
            </div>
      </div>
    );
  }
}
export default dashboard;