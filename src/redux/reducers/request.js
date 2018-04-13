/**
 * @desc 网络请求的reducers
 * @author Jade
 **/

import Immutable from 'immutable'
import * as TYPES from '../types'
import { createReducer } from 'redux-immutablejs'

//将一个js数据转换为Immutable类型的数据。fromJS(value, converter)
//value是要转变的数据，converter是要做的操作。
//第二个参数可不填，默认情况会将数组准换为List类型，将对象转换为Map类型，其余不做操作。
export default createReducer(Immutable.fromJS({status: null, error: null}), {
    [TYPES.REQUEST_LOADING]: (state, action) => {
        return state.merge({
            status: 'loading',
        })
    },
    [TYPES.REQUEST_ERROR]: (state, action) => {
        return state.merge({
            status: 'error',
            code: action.code,
            error: Immutable.fromJS(action.error),
        })
    },
    [TYPES.REQUEST_CLEAN]: (state, action) => {
        return state.merge({
            status: null,
            error: null,
        })
    },
    [TYPES.REQUEST_SUCCESS]: (state, action) => {
        return state.merge({
            status: 'success',
            error: null,
        })
    }
})