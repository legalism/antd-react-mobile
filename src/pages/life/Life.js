import React, {Component} from 'react'
import {WhiteSpace, Tabs, Badge, SearchBar} from 'antd-mobile'


const tabs = [
  {title: <Badge>推荐</Badge>},
  {title: <Badge>品质</Badge>},
  {title: <Badge>美食</Badge>},
];

export default class Life extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <SearchBar
          placeholder="手动获取获取光标"
          ref={ref => this.manualFocusInst = ref}
        />
        <Tabs tabs={tabs}
              initialPage={1}
              onChange={(tab, index) => {
                console.log('onChange', index, tab);
              }}
              onTabClick={(tab, index) => {
                console.log('onTabClick', index, tab);
              }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '300px',
            backgroundColor: '#fff'
          }}>
            Content of first tab
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '300px',
            backgroundColor: '#fff'
          }}>
            Content of second tab
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '300px',
            backgroundColor: '#fff'
          }}>
            Content of third tab
          </div>
        </Tabs>
        <WhiteSpace/>
      </div>
    );
  }
}