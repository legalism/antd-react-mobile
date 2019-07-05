import React from 'react';
import {Button, Icon, Toast, WhiteSpace, WingBlank,} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                {/*<p>*/}
                {/*Edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
                {/*<a*/}
                {/*className="App-link"*/}
                {/*href="https://reactjs.org"*/}
                {/*target="_blank"*/}
                {/*rel="noopener noreferrer"*/}
                {/*>*/}
                {/*Learn React*/}
                {/*</a>*/}

                {/*<WingBlank>*/}
                <Button type="ghost" size={"large"} style={{width: 200, height: 50}} onClick={() => {
                    Toast.loading('Loading...', 1, () => {
                            // console.log('Load complete !!!');
                        }
                    );
                }}><Link to="/home">登录 </Link>
                </Button><WhiteSpace/>
                {/*</WingBlank>*/}


            </header>
        </div>
    );
}

export default App;
