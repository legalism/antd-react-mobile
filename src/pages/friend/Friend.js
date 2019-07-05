import React, {Component} from 'react'
import {Icon, NavBar, WingBlank} from "antd-mobile";
import styles from './styles.css'
import add from '../../assets/add.svg'
import contact from '../../assets/contact.svg'


export default class Friend extends Component {
    render() {
        return (<div>
            <NavBar
                className="nav-bar"
                mode="light"
                // icon={<Icon type="left"/>}
                // onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                    <img src={contact} className={styles.contact} alt={contact}/>,
                    <WingBlank size={"sm"}/>,
                    <img src={add} className={styles.add} alt={add}/>,
                ]}
            ><span className={styles.title} style={styles.title}>朋友</span></NavBar>
        </div>);
    }
}