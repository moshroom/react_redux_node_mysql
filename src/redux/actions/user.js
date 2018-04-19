/**
 * @desc 用户模块的actions
 * @author Jafeney
 * @dateTime 2016-11-29
 **/

import * as TYPES from '../types';
import * as CONFIG from '../../config';
import { request } from './request';
import { bodyUrlencoded } from '../../mixins/helper'

export function login(opt) {
    return (dispatch) => {
        console.log('uer',dispatch)
        const route = '/api/user/token';
        const success = (data) => {
            dispatch({ type: TYPES.USER_LOG_INFOS, result: {items: data} })
            opt.success && opt.success(data)
        }
        request(route, {}, dispatch, success, opt.error,
            { method: 'POST',
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: bodyUrlencoded(opt.body) })
    }
}

export function verifyEmail(opt) {
    return (dispatch) => {
        const route = '/api/user/verifymail';
        request(route, {}, dispatch, opt.success, opt.error,
            { method: 'POST',
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: bodyUrlencoded(opt.body) })
    }
}

export function sendEmail(opt) {
    console.log('sendemail')
    return (dispatch) => {
        const route = '/api/user/sendmail';
        request(route, {}, dispatch, opt.success, opt.error,
            { method: 'POST',
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: bodyUrlencoded(opt.body) })
    }
}

export function changePassword(opt) {
    return (dispatch) => {
        const route = '/api/user/password';
        request(route, {}, dispatch, opt.success, opt.error,
            { method: 'POST',
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: bodyUrlencoded(opt.body) })
    }
}
export function cleanUser(opt) {
    return (dispatch) => {
        dispatch({ type: TYPES.USER_CLEAN_INFOS })
    }
}