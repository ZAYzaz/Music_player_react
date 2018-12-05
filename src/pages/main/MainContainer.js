import React, { Component } from 'react'
 
import uuid from 'uuid'
import * as MainStyled from './styledComponent'

import { Tabs, WhiteSpace } from 'antd-mobile';
import TopListContainer from '../toplist/TopListContainer'
import SearchContainer from '../search/SearchContainer'
import RecomContainer from '../recom/RecomContainer'
import { log } from 'util';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'recom', 
      tabs: [
        { id: uuid(), title: '排行榜', selected: 'toplist', component:<TopListContainer/> },
        { id: uuid(), title: '搜索', selected: 'search', component: <SearchContainer/> },
        
        { id: uuid(), title: '推荐', selected: 'recom', component: <RecomContainer /> },
      ]
    };
  }
  
  componentDidUpdate (props, {selectedTab}) {
    console.log('didupdate',selectedTab);
    
    // 如果此时，状态改变说明切换组件，判断如果是从menu切换出来的话，就更改路由为/
    // let { selectedTab: stab } = this.state
    // if ( selectedTab !== stab && selectedTab === 'toplist' ) {
    //   this.props.history.push('/')
    // }
    // if ( selectedTab !== stab && stab === 'toplist' ) {
    //   this.props.history.push('/toplist')
    // }
  }
  render() {
    let { tabs } = this.state
    return (
      <div>
        <WhiteSpace />
        <MainStyled.MainWrapper>

              <Tabs 
                  tabBarActiveTextColor={'#31c27c'}
                  tabBarUnderlineStyle={{borderColor:'#31c27c'}}
                  tabs={tabs} initialPage={2} animated={false} 
                  useOnPan={false}


                  onChange={(tab, index) => { console.log('onChange', index, tab); }}
                  onTabClick={(tab, index) => {this.setState({ selectedTab: tab.selectedTab }); console.log('onTabClick', index, tab); }}

              >
              
                  {this.renderTabItems()}
                  
              </Tabs>

        </MainStyled.MainWrapper>
        <WhiteSpace />
      </div>

    );
  }
  renderTabItems(tab) {
    let { tabs } = this.state
    return tabs.map((tab,index)=> (
    
      <div 
          key={tab.id}
          selected={this.state.selectedTab === tab.selected}
          className='tmd' 
        //   onClick={() => {
        //     this.setState({ selectedTab: tab.selectedTab });
        //     console.log("ontabclick",index);
            
        // }}
         // style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}
       >
        {tab.component} 
      </div>
      

    ))
    
  }

} 
export default MainContainer