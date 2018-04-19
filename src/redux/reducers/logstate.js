/**
 * @desc 登陆状态 reducer
 * @author Jade
 **/

import Immutable from 'immutable';
import * as TYPES from '../types'
import * as CONFIG from '../../config'
import { createReducer } from 'redux-immutablejs'

export const login = createReducer(Immutable.fromJS({islog: false}), {
    [TYPES.USER_LOG_INFOS]: (state, action) => {
        return state.set('islog', true).merge(Immutable.fromJS(action.result))
    },
    [TYPES.USER_CLEAN_INFOS]: (state, action) => {
        return state.clear().set('islog', false)
    }
})
