import React, {Component} from 'react'
import styles from './styles.css'
import {Icon, NavBar} from "antd-mobile";

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    // icon={<Icon type="left"/>}
                    // onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{marginRight: '16px'}}/>,
                        <Icon key="1" type="ellipsis"/>,
                    ]}
                >中链融</NavBar>
            </div>);
    }
}

export default Home;