import React, {Component} from 'react'
import PropTypes from 'prop-types';
import styles from './styles.css'
import {Icon, NavBar} from "antd-mobile";

class Home extends Component {
    static propTypes = {
        title: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {}
    }

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