import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./component/Login/Login";
import SignUp from './component/Login/SignUp'
import Dashboard from '../src/component/DashBoard/ListOfFriends'
import Chat from '../src/component/chatPage/Dashboard'
import Store from '../src/component/chatPage/Store'
class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact = {true} />
         <Route path = "/signup" component = {SignUp}/>
         <Route path = "/dashboard" component = {Dashboard}/>
         <Store>
         <Route path = "/chat" component = {Chat}/>
         </Store>
        </Switch>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
