import React, {Component} from 'react';
import {WhiteSpace, Tabs, Badge, SearchBar} from 'antd-mobile';
import PageView from './pageview/PageView';
import Quality from './quality/index';
import Cate from './cate/index';


const tabs = [
  {title: <Badge>推荐</Badge>},
  {title: <Badge>品质</Badge>},
  {title: <Badge>美食</Badge>},
];

export default class Life extends Component {
  constructor(props) {
    super(props);
  }
  
  renderContent = tab => {
    return <div className="content"><PageView/></div>;
  }
  
  render() {
    return (
      <div className="life">
        <SearchBar
          placeholder="手动获取获取光标"
          ref={ref => this.manualFocusInst = ref}
        />
        <Tabs tabs={tabs}
              initialPage={0}
              onChange={(tab, index) => {
                console.log('onChange', index, tab);
              }}
              onTabClick={(tab, index) => {
                console.log('onTabClick', index, tab);
              }}
        
        >
          {this.renderContent}
          {<div className="content"><Quality/></div>}
          {<div className="content"><Cate/></div>}
        </Tabs>
      </div>
    );
  }
}