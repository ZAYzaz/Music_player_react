
import default_state from './defaultState'
import * as types from './actionTypes'

import { connect } from 'simple-redux-connect'
// 给connect添加可以配置的atcionCreators
import actionCreators from './actionCreators'
connect.addActionCreator({
    main: actionCreators
})

const reducer = (
    previous_state = default_state,
    action
) => {
    let new_state = Object.assign({}, previous_state)

    switch (action.type) {
       
        case types.GET_TOPLIST_ASYNC+'_FULFILLED':

            new_state.list = action.payload.data.data; break;
        case types.GET_RECOM_ASYNC+'_FULFILLED':

            new_state.swiperlist = action.payload.data.data; break;
        case types.GET_MUSICLIST_ASYNC+'_FULFILLED':

            new_state.musiclist = action.payload.data; break;

        default:return previous_state;
    }
    //console.log('new_state',new_state);
    
    return new_state
}

export default reducer