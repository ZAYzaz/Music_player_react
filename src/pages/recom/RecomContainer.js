import React, { Component } from 'react' 
import { TopListWrapper } from './styledComponent'
import RecomItem from './RecomItem' 
import RecomSwiper from './RecomSwiper'
import { connect } from 'simple-redux-connect'

import { Carousel, WingBlank } from 'antd-mobile';

class RecomContainer extends Component {
  
  componentWillMount(){
    
    this.props.main_actions.getSwiperListAsync()
  } 
 
  render() {
    
    return (
      <div>
         <RecomSwiper {...this.props}/>
         <RecomItem {...this.props}/>
      </div>
      
    );
  }
}
export default connect(RecomContainer,[{name: 'main', state: ['swiperlist']}])
  