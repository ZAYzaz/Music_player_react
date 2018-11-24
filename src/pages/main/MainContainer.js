import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import uuid from 'uuid'
import * as MainStyled from './styledComponent'

import { Tabs, WhiteSpace } from 'antd-mobile';


class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      tabs: [
        { id: uuid(), title: '推荐', selected: 'recom', component: 1111 },
        { id: uuid(), title: '排行榜', selected: 'toplist', component: 2222 },
        { id: uuid(), title: '搜索', selected: 'search', component: '456' },
      ]
    };
  }
  render() {
    let { tabs } = this.state
    return (
      <div>
        <WhiteSpace />
        <MainStyled.MainWrapper>

        <Tabs tabBarActiveTextColor={'#31c27c'} tabBarUnderlineStyle={{borderColor:'#31c27c'}} tabs={tabs} initialPage={2} animated={false} useOnPan={false}>
            {this.renderTabItems()}
          </Tabs>

        </MainStyled.MainWrapper>
        <WhiteSpace />
      </div>

    );
  }
  renderTabItems() {
    let { tabs } = this.state
    return tabs.map(tab => (
      <div key={tab.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
        Content of {tab.component} tab
      </div>

    ))
  }

}

export default MainContainer