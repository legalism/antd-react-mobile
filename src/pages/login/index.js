import React from 'react';
import {Button, Toast, WhiteSpace,} from 'antd-mobile';
import {Redirect} from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import logo from '../../logo.svg';
import './styles.scss';

function App(props) {
  const {history} = props;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <WhiteSpace/>
        <Button type="ghost" size={"large"} style={{width: 200, height: 50}} onClick={() => {
          Toast.loading('Loading...', 1, () => {
              // history.push("/shelf");
              window.location.replace('/shelf');
            }
          );
        }}>
          登录
        </Button>
      </header>
    </div>
  );
}

export default App
