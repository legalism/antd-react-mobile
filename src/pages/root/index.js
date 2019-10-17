import React, {Component} from 'react'
import {Button, ActivityIndicator, WhiteSpace,} from 'antd-mobile';
import styles from './style.scss';

const url = "http://5da57bbd57f48b0014fba8f3.mockapi.io/demo/loginState";
export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    }
  }
  
  componentWillMount() {
    fetch(url, {method: "get",})
      .then((response) => {
        if (response.status === 200) {
          return response.text();
        } else {
          console.error(`Request failed. Url = ${url}`);
          return Promise.reject({error: {message: "Request failed due to server error"}})
        }
      })
      .then((responseText) => {
        const json = JSON.parse(`${responseText}`);
        let isLogin = json[0].isLogin;
        console.log(`json = ${json}`);
        /*if (isLogin) {
          this.props.history.push("/shelf");
        } else {
          this.props.history.push("/login");
        }*/
        window.location.replace(
          // process.env.NODE_ENV === 'production' ? '/cms-back/index.html#/login' : '/#/login',
          isLogin ? '/shelf':'/login',
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  componentDidMount() {
  
  }
  
  render() {
    return (
      <div className="login">
        <div className="loading-example">
          <ActivityIndicator animating size={"large"}/>
        </div>
      </div>
    );
  }
}