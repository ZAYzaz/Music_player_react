import React, { Component } from 'react'
import { Header, Icon } from '@commons'
import { util_decorator } from '@lib/decorator'
import {
    ListWrapper,
    ListContent,
    ListItem,
    ListItemInfo
} from './styledComponent'
import  './list.scss'
import { connect } from 'simple-redux-connect'  
import { PullToRefresh, ListView, Button } from 'antd-mobile';

//@util_decorator
class ListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
             musiclist:[]
        };
      }


    componentWillMount(props) { 
        this.props.main_actions.getMusicListAsync() 
        //console.log('listcotainer:componentWillMount:')
    }

     
    // 渲染每一个item的方法
   
    renderItem () {
        //console.log('listcotainer:renderItemt:',this.props.main)
        let {songlist} = this.props.main.musiclist
        //console.log(songlist);
        
        if (songlist=== undefined ) {
            return ''
        }  
       console.log('songlist:', songlist)
        return songlist.map((value,index) => (
            <li key={index} data-v-104ab6c3="" className="qui_list__item  js_play_song" data-index="0" data-songid="222976369"
                data-songtype="0">
                <div data-v-104ab6c3="" className="qui_list__order"><span data-v-104ab6c3="" className="qui_list__decimal">{index}</span></div>
                <div data-v-104ab6c3="" className="qui_list__bd">
                    <div data-v-104ab6c3="" className="qui_list__box">
                        <h3 data-v-104ab6c3="" className="qui_list__tit">
                           <span data-v-104ab6c3="" className="qui_list__txt"> 
                               {value.data.songname}
                            </span>
                        </h3>
                        <p data-v-104ab6c3="" className="qui_list__desc">
                           <span data-v-104ab6c3="" className="qui_list__txt">
                            {value.data.singer[0].name}
                                {/* {
                                    value.data.singer.map((val,i)=>( 
                                                <span key={i}>{val}</span> 
                                        )
                                                
                                    )
                                
                                } */}
                            </span>
                        </p>
                    </div>
                    <div data-v-104ab6c3="" className="qui_list__more"><i data-v-104ab6c3="" className="qui_list__dot"></i></div>
                </div>
            </li>
        ))
    }
 
 
    render () {      
        return (
            
                <section className="app-top-detail">
                    <section className="app-top-detail-header">
                        <div id="js_header" className="info_box" >
                            <div className="info_box__bd">
                                <div className="top_bar">
                                    <img src="//y.gtimg.cn/mediastyle/mod/mobile/img/logo.svg?max_age=2592000" className="top_bar__img"/>
                                    <div className="top_bar__bd">
                                        <h6 className="top_bar__tit">QQ音乐</h6>
                                        <p className="top_bar__desc">打开APP收藏、下载</p>
                                    </div><a data-type="1" href="javascript:;" className="top_bar__btn js_open_music">打开</a>
                                </div>
                                <div id="js_album_info" className="album">
                                    <div data-type="3" className="album__media js_open_music"><img src="http://imgcache.qq.com/music/photo_new/T002R300x300M0000007sxRu0jEvnU.jpg"
                                            alt="巅峰榜·流行指数"  
                                            className="album__cover"/></div>
                                    <div className="album__bd">
                                        <h1 data-singername="巅峰榜·流行指数" className="album__name js_info_show">巅峰榜·流行指数</h1>
                                        <p className="album__desc">第338天</p>
                                        <p className="album__desc">2018-12-04 更新</p>
                                    </div>
                                </div>
                                <div className="opt_box">
                                    <a href="javascript:;" className="btn_play_all js_play_all">播放全部</a>
                                </div>
                            </div>
                            <img data-src="https://y.gtimg.cn/music/photo_new/T002R300x300M0000042DlJJ3QNC0P.jpg?max_age=2592000"
                                src="https://y.gtimg.cn/music/photo_new/T002R300x300M0000042DlJJ3QNC0P.jpg?max_age=2592000" className="info_box__bg js_img_bg"/>
                        </div>
                    </section>

                    <section data-v-104ab6c3="" className="app-top-detail-item">
                        <div data-v-104ab6c3="" id="js_wrapper" touch-action="none" className="wrap">
                            <div data-v-104ab6c3="" id="js_scroller" className="main">
                                <div data-v-104ab6c3="" className="count_box">
                                    <div data-v-104ab6c3="" className="count_box__desc">排行榜<span data-v-104ab6c3="" className="count_box__number">共100首</span></div>
                                </div>
                                <ul data-v-104ab6c3="" id="js_song_list" className="qui_list qui_list--rank">
                                    
                                     {this. renderItem ()}
 
                                
                                </ul>
                                <div data-v-104ab6c3="" className="qui_tit">
                                    <h2 data-v-104ab6c3="" className="qui_tit__text">简介</h2>
                                </div>
                                <div data-v-104ab6c3="" className="intro intro--unfold">
                                    <p data-v-104ab6c3="" className="intro__para js_intro_para">追踪全球音乐流行趋势，乐坛最热门歌曲，网络蹿红歌曲根据地。展示QQ音乐用户的关注热度，体现歌曲飙升程度的潮流音乐排行榜。<br/><br/>更新时间：每天更新<br/>歌曲数量：100首<br/>统计算法：QQ音乐库内全部歌曲，根据综合数据7天前的涨幅进行排序，取前100名<br/>综合数据：登录用户在QQ音乐播放/分享/下载数据</p>
                                    <a data-v-104ab6c3="" href="javascript:;" data-status="1" className="intro__switch js_fold"  >展开</a>
                                </div>
                                <div data-v-104ab6c3="" className="brand"><img data-v-104ab6c3="" src="//y.gtimg.cn/mediastyle/mod/mobile/img/logo.svg?max_age=2592000"
                                        className="brand__logo"/>
                                    <p data-v-104ab6c3="" className="brand__name">QQ音乐</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
             
        )
    }

}

export default connect(ListContainer,[{name: 'main', state: ['musiclist']}])
 



