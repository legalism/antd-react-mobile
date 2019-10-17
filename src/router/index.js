import React from 'react';
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom';
import App from "../pages/main/App";
import Shelf from "../pages/main/Shelf";
import Details from "../pages/home/Details";
import Root from '../pages/root/index'
import Login from '../pages/login/index'

export default class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Router>
        <Route exact path="/" component={Root}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/shelf" component={Shelf}/>
        {/*<Route exact path="/" component={() => <Redirect push to="/home" />} />*/}
        <Route exact path="/home/details" component={Details}/>
      </Router>
    );
  }
}