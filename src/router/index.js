import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from "../App";
import Shelf from "../Shelf";

export default class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Router>
        <Route exact path="/" component={App}/>
        <Route exact path="/shelf" component={Shelf}/>
      </Router>
    );
  }
}