import React, { Component } from 'react' 
import { TopListWrapper } from './styledComponent'
 
import { connect } from 'simple-redux-connect'

import { Carousel, WingBlank } from 'antd-mobile';

class RecomSwiper extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 150,
  }
  componentWillMount(){
    // //这是引入_connect时 
    //this.props.main_actions.getSwiperListAsync()
    
  } 
  componentDidMount() {

    
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
    let swiperlist=this.props.main.swiperlist 
    //console.log('recomecontainer.props swiperlist:',swiperlist);
    if(swiperlist.slider===undefined){
      return ''
    }else{
      swiperlist=swiperlist.slider
    }
    //console.log('recomecontainer.props swiperlist.slider:',swiperlist);
    return (
      
      <Carousel
        autoplay={false}
        infinite
        //dotStyle={{bottom: '6px',position: 'absolute',background:'red'}}
        //beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
       // afterChange={index => console.log('slide to', index)}
      >
        {swiperlist.map(val => (
          <a
            key={val}
            href="http://www.baidu.com"
            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
          >
            <img
              src={val.picUrl}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
              // onLoad={() => {
              //   // fire window resize event to change height
              //   window.dispatchEvent(new Event('resize'));
              //   this.setState({ imgHeight: 'auto' });
              // }}
            />
          </a>
        ))}
      </Carousel>
      
    );
  }
}
//export default _connect(RecomSwiper,[{name: 'main', state: ['swiperlist']}])
export default RecomSwiper
   