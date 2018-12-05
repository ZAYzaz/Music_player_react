
import * as types from './actionTypes'
import axios from 'axios'
export default {
    getListAsync () {
        return {
            type: types.GET_TOPLIST_ASYNC,
            //在packge.json中配置了代理"proxy":   "https://c.y.qq.com",   
            payload: axios.get('/qqc/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1543148194636')
        }
    },
    getSwiperListAsync () {
        return {
            type: types.GET_RECOM_ASYNC,
            //在packge.json中配置了代理"proxy":   "https://c.y.qq.com",   
            payload: axios.get('/qqc/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1543242938117')
        }
    },
    getMusicListAsync(){
        return {
            type: types.GET_MUSICLIST_ASYNC,
            //在packge.json中配置了代理"proxy":   "https://u.y.qq.com",   
            payload: axios.get('/qqc/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=1163027691&uin=2542998441&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=4&_=1543933930660')
        }
    }
}