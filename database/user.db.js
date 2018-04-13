/**
 * @desc 用户 数据模型
 * 
 */

"use strict";
var mysql = require('mysql'),
    helper = require('../routes/helper'),
    config = require('./config.db');

var con = mysql.createConnection(config);

/*用户模块 构造方法*/
var User = function(user) {
    this.props = user.props  //参数集合，借鉴react设计思想
};

/*获取全部数据,测试接口使用，正式上线时请关闭*/
User.prototype.getUserAllItems = function(callback) {
    var _sql="select * from user where isuse=0"
    helper.db_query({
        connect: con,
        sql: _sql,
        name: 'getUserAllItems',
        callback: callback
    })
}
//用户登陆接口
User.prototype.getUserItemByName = function(callback) {
    var _sql=`select id from user where isuse=0 and user_name='${this.props.userName}' and password='${this.props.password}'`
    console.log(_sql)
    helper.db_query({
        connect: con,
        sql: _sql,
        name: 'getUserItemByName',
        callback: callback
    })
}
//用户注册接口
User.prototype.setUserItem = function(callback) {
    var _sql=`insert into user (user_name, user_email, password, isuse) values ('${this.props.name}','${this.props.email}','${this.props.password}',0)`
    console.log(_sql)
    helper.db_query({
        connect: con,
        sql: _sql,
        name: 'setUserItem',
        callback: callback
    })
}
//用户重置密码接口
User.prototype.putUserPassword = function(callback) {
    var _sql=`update user set password='${this.props.password}' where id='${this.props.id}'`
    console.log(_sql)
    helper.db_query({
        connect: con,
        sql: _sql,
        name: 'putUserPassword',
        callback: callback
    })
}

module.exports = User