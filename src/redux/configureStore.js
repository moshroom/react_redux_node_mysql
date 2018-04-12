/**
 * @desc reducer和store配置
 * @author Jade 
 *
 **/

import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import * as reducers from './reducers'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { pendingTasksReducer } from 'react-redux-spinner'

export default function configureStore(history, initialState) {

    const reducer = combineReducers({
        ...reducers,
        routing: routerReducer,
        pendingTasks: pendingTasksReducer,
    })

    const loggerMiddleware = createLogger()
// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
    const store = createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(
                thunkMiddleware,
                //loggerMiddleware,
                routerMiddleware(history)
            )
        )
    )

    return store
}