import React, { Component } from 'react'

import { TopListWrapper } from './styledComponent'
import TopListItem from './TopListItem'
import { connect } from 'react-redux'
import _connect from '@connect'
import actionCreators from '../../store/toplist/actionCreators'


class TopListContainer extends Component {

    componentWillMount() {
        // //这是引入_connect时
        // this.props.toplist_actions.getListAsync()

        // console.log('toplsititem:componentWillMount:',this.props.toplist)

        //这是原生connect
       // this.props.getListAsync()

        //console.log('toplsititem22:componentWillMount:', this.props.list)
    }

    render() {

        return (
            <TopListWrapper>

                <TopListItem {...this.props} />

            </TopListWrapper>
        )
    }

     
}

////这是原生connect
const mapDispatchToProps = (dispatch) => {
    return {

        getListAsync() {
            dispatch(actionCreators.getListAsync())
        },

    }
}
// connect函数返回值是一个高阶组件
const mapStateToProps = (state) => {
    return {
        list: state.toplist.list

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopListContainer)

////这是引入_connect时
// export default _connect(TopListItem,[{name: 'toplist', state: ['list']}])



//export default TopListContainer