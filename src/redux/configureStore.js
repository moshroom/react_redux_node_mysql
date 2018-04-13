/**
 * @desc reducer和store配置
 * @author Jade 
 *
 **/

import { createStore, combineReducers, compose, applyMiddleware } from 'redux' // 引入redux createStore、中间件及compose 
import thunkMiddleware from 'redux-thunk' // redux-thunk 支持 dispatch function，并且可以异步调用它
import createLogger from 'redux-logger' // 利用redux-logger打印日志
import * as reducers from './reducers' 
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { pendingTasksReducer } from 'react-redux-spinner'

export default function configureStore(history, initialState) {
    /**
     * combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，
     * 合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore。
     * 合并后的 reducer 可以调用各个子 reducer，并把它们的结果合并成一个 state 对象。
     * state 对象的结构由传入的多个 reducer 的 key 决定。
     */
    const reducer = combineReducers({
        ...reducers,
        routing: routerReducer,
        pendingTasks: pendingTasksReducer,
    })

    const loggerMiddleware = createLogger() // 调用日志打印方法
// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
    const store = createStore(
        reducer,
        initialState,
        // 利用compose增强store，这个 store 与 applyMiddleware 和 redux-devtools 一起使用
        compose(
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware,
                routerMiddleware(history)
            )
        )
    )

    return store
}