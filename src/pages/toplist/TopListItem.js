import React, { Component } from 'react'
// import { Header, Search } from '@commons'
import { TopListLi, TopicMain } from './styledComponent'
import './toplist.scss'
import { connect } from 'react-redux'
import _connect  from '@connect'
import actionCreators from '../../store/toplist/actionCreators'

// import HomeHotClassify from './HomeHotClassify'
// import store from '../../store'
import { log } from 'util';
class TopListItem extends Component {
    
    componentWillMount(){
        // //这是引入_connect时
        // this.props.toplist_actions.getListAsync()
         
        // console.log('toplsititem:componentWillMount:',this.props.toplist)

        //这是原生connect
        this.props.getListAsync()
         
        console.log('toplsititem:componentWillMount:',this.props.list)
    } 
    render() {
         let list = this.props.list.topList
         console.log('this.props.list', this.props.list);
        if (!list) {
            return ''
        } else {
           list = this.props.list.topList
        }
        if (!list.length) return '';
        //list  = list.splice(0, 4)
        console.log('list:', list)
        return  list.map(val => (
            
            <li key={val.id} className="top-item" data-id="" data-type="0">
                  
                <a href="javascript:;" className="top-list-imgbox">
                    <img data-url="https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_1543025047_4_300_217141111.jpg?max_age=2592000"
                        src={val.picUrl} />
                    {/* <span className="listen_count"><i className="icon icon_listen"></i>1980.0万</span> */}
                </a>
                <div className="top-item-list">
                 
                    <div className="topic_cont">
                            {/* <button onClick = {() => {
                                console.log(23333333);
                                this.props.getListAsync()
                                console.log(this.props.list);
                            
                        }}  className = "btn btn-danger">+2</button> */}


                        <h3 className="item-title">{val.topTitle} </h3>
                         
                        <p className="item-song">1<span >{val.songList[0].singername}</span>- {val.songList[0].songname}</p>
                        <p className="item-song">2<span >{val.songList[1].singername}</span>- {val.songList[1].songname}</p>
                        <p className="item-song">3<span >{val.songList[2].singername}</span>- {val.songList[2].songname}</p>
                         
                        
                    </div>
                    <i className="fa-angle-right"></i>
                </div>

            </li>

        ) )

    }

}
 
export default TopListItem


////这是引入_connect时
// export default _connect(TopListItem,[{name: 'toplist', state: ['list']}])
 