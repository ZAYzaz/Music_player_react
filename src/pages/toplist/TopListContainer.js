import React, { Component } from 'react'

import { TopListWrapper,TopListLi, TopicMain } from './styledComponent'
//import TopListItem from './TopListItem' 
import './toplist.scss'
import {withRouter} from 'react-router-dom'
import { connect } from 'simple-redux-connect' 
class TopListContainer extends Component {

    componentWillMount() { 
        this.props.main_actions.getListAsync() 

        
       // console.log('toplsititem:componentWillMount:',this.props.main.list.topList)
    }

    render() {

        return (
            <TopListWrapper> 
                {this.renderTopListItem()}
            </TopListWrapper>
        )
    }
    renderTopListItem() {
        let list = this.props.main.list 
       if (list.topList=== undefined ) {
           return ''
       } else {
          list = list.topList
       } 
      console.log('list:', list)
       return  list.map(val => (
           
           <li  onClick = {
                () => {
                    console.log('toplist点击');
                    
                    this.props.history.push('/list') 
                }
            }
           
           key={val.id} className="top-item" data-id="" data-type="0">
                 
               <a href="javascript:;" className="top-list-imgbox">
                   <img data-url="https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_1543025047_4_300_217141111.jpg?max_age=2592000"
                       src={val.picUrl} />
                   {/* <span className="listen_count"><i className="icon icon_listen"></i>1980.0万</span> */}
               </a>
               <div className="top-item-list"> 
                   <div className="topic_cont"> 
                       <h3 className="item-title">{val.topTitle} </h3> 
                       
                        {
                            val.songList.map((item,index)=>(
                                <p  key={index} className="item-song">{index+1}<span >{item.singername}</span>- {item.songname}</p>
                            ))
                        }
                   </div>
                   <i className="fa-angle-right"></i>
               </div>

           </li>

       ) )

   }

     
}

//这是原生connect
// const mapDispatchToProps = (dispatch) => {
//     return {

//         getListAsync() {
//             dispatch(actionCreators.getListAsync())
//         },

//     }
// }
// // connect函数返回值是一个高阶组件
// const mapStateToProps = (state) => {
//     return {
//         list: state.main.list

//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TopListContainer)

//这是引入_connect时
export default withRouter(connect(TopListContainer,[{name: 'main', state: ['list']}]))
 