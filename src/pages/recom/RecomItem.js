import React, { Component } from 'react'
// import { Header, Search } from '@commons'
import { RecomItemContainer,RecomItemUl,RecomItemLi} from './styledComponent'
import './recom.scss'
import { connect } from 'simple-redux-connect'
import actionCreators from '../../store/home/actionCreators'

// import HomeHotClassify from './HomeHotClassify'
// import store from '../../store'
import { log } from 'util';
class RecomItem extends Component {


    render() {
        return (
            <div>
                <RecomItemContainer>
                    <p className="station-name">电台</p>
                    <RecomItemUl>
                    {this.renderItem()}
                    </RecomItemUl>
                    
                </RecomItemContainer>
                <footer className="app-recomm-foot">
                    <h2 className="hot-title">热门歌单</h2>
                    <p className="list-more">去客户端发现更多好音乐 ></p>
                    <div className="bottom">
                        <p className="bottom-comp">查看电脑版网页</p>
                        <i className="music-logo">QQ音乐</i>
                        <p className="foot-p">Copyright © 1998 - 2018  Tencent. All Rights Reserved.</p>
                        <p className="foot-p">联系电话：0755-86013388 QQ群：55209235</p>
                    </div>
                </footer>
            </div>
           

        )
    }
    renderItem() {
        let swiperlist = this.props.main.swiperlist
       // console.log('recomecontainer.props swiperlist:', swiperlist);
        if (swiperlist.radioList === undefined) {
            return ''
        } else {
            swiperlist = swiperlist.radioList
        }
        return (

            swiperlist.map(val => (
                <RecomItemLi key={val.radioid}>
                    <img src={val.picUrl}/>
                    <span className="fa fa-play-circle icon-play"></span>
                    <div>{val.Ftitle}</div>
                </RecomItemLi>
            ))


        )
    }

}

export default RecomItem
