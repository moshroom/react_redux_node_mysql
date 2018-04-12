/**
 * @desc mysql数据库配置文件
 **/

var config = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'newpro_ver1',
};

module.exports = config;
// "use strict";
// const mysql = require("mysql");
// exports.connection=function(sql,arr,fn){
//     console.log("进入mysql");
//     let myConnection = mysql.createConnection({
//         host:"localhost",
//         user:"root",
//         password:"123456",
//         port:"3306",    //默认不写就是3306
//         database:"newpro_ver1"
//     });
//     myConnection.connect();
//     myConnection.query(sql,arr,fn);
//     myConnection.end();
// }