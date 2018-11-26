
import * as types from './actionTypes'
import axios from 'axios'
export default {
    getListAsync () {
        return {
            type: types.GET_TOPLIST_ASYNC,
            //在packge.json中配置了代理"proxy":   "https://c.y.qq.com",   
            payload: axios.get('/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1543148194636')
        }
    }
}