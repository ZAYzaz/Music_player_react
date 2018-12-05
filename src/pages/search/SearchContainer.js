import React, { Component } from 'react'

import { TopListWrapper,TopListLi, TopicMain } from './styledComponent'

import './search.scss'
import { connect } from 'simple-redux-connect' 
class SearchContainer extends Component {

    componentWillMount() { 
        // this.props.main_actions.getListAsync() 
        // console.log('toplsititem:componentWillMount:',this.props.main.list.topList)
    }

    render() {

        return (
            <TopListWrapper> 
                
                <section className="app-search">
                     
                    <div className="mod_search_bar">
                        <div id="input_wrap" className="search_bar_cont">
                            <form id="search_form" method="get" action="#"  >
                                    <input id="search_input" type="search"
                                    placeholder="搜索歌曲、歌单、专辑" className="search_input"/>
                                    <span className="icon icon_search">搜索</span>
                                    <span id="del_btn"
                                    className="icon icon_delete  minus-square fa fa-window-close-o">删除</span>
                            </form>
                        </div>
                        
                    </div>
                    <div id="hot_keys" className="mod_search_result">
                        <h3 className="result_tit">热门搜索</h3>
                        <div className="result_tags"><a href="https://y.qq.com/m/act/maskessinger3/index.html?ADTAG=myqq" className="tag_s tag_hot js_keyword">蒙面唱将猜猜猜</a><a
                                href="javascript:;" className="js_keyword tag_s">东西 </a><a href="javascript:;" className="js_keyword tag_s">盗将行
                            </a><a href="javascript:;" className="js_keyword tag_s">易烊千玺 </a><a href="javascript:;" className="js_keyword tag_s">光年之外
                            </a><a href="javascript:;" className="js_keyword tag_s">DON'T TIE ME DOWN </a><a href="javascript:;" className="js_keyword tag_s">可不可以
                            </a><a href="javascript:;" className="js_keyword tag_s">夜之光 </a></div>
                    </div>
                    <div id="focus_wrapper">
                        <div id="record_keys" className="mod_search_record">

                            <li className="list-group-item"><a href="javascript:;" className="js_keyword record_main"><span className="icon iocn_clock"></span><span
                                        className="js_keyword record_con">陈奕迅 </span><span className="js_del_record icon icon_close  fa fa-minus-square"></span></a></li>
                            <li className="list-group-item"><a href="javascript:;" className="js_keyword record_main"><span className="icon iocn_clock"></span><span
                                        className="js_keyword record_con">金庸 </span><span className="js_del_record icon icon_close  fa fa-minus-square"></span></a></li>
                            <li className="list-group-item"><a href="javascript:;" className="js_keyword record_main"><span className="icon iocn_clock"></span><span
                                        className="js_keyword record_con">金庸 </span><span className="js_del_record icon icon_close  fa fa-minus-square"></span></a></li>
                            <p id="record_clear_btn" className="record_handle"><a href="javascript:;">清除搜索记录</a></p>
                        </div>
                        <div id="search_result" className="mod_search_content" >
                            <ul className="search_content"></ul>
                        </div>
                    </div>
                </section>
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
           
           <li key={val.id} classNameName="top-item" data-id="" data-type="0">
                 
               <a href="javascript:;" classNameName="top-list-imgbox">
                   <img data-url="https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_1543025047_4_300_217141111.jpg?max_age=2592000"
                       src={val.picUrl} />
                   {/* <span classNameName="listen_count"><i classNameName="icon icon_listen"></i>1980.0万</span> */}
               </a>
               <div classNameName="top-item-list"> 
                   <div classNameName="topic_cont"> 
                       <h3 classNameName="item-title">{val.topTitle} </h3> 
                       <p classNameName="item-song">1<span >{val.songList[0].singername}</span>- {val.songList[0].songname}</p>
                       <p classNameName="item-song">2<span >{val.songList[1].singername}</span>- {val.songList[1].songname}</p>
                       <p classNameName="item-song">3<span >{val.songList[2].singername}</span>- {val.songList[2].songname}</p>
                         
                   </div>
                   <i classNameName="fa-angle-right"></i>
               </div>

           </li>

       ) )

   }

     
} 

 export default SearchContainer

//这是引入connect时
//export default connect(SearchContainer,[{name: 'main', state: ['list']}])
 