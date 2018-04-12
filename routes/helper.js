/**
 * @desc 工具模块
 * @author Jade
 **/
var crypto = require('crypto');
module.exports = {
    // 获取本地时间字符串
    getTimeString: function(date) {
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' +
            date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() +
            ':' + date.getSeconds();
    },
    // MD5加密
    getMD5: function(str) {
        var md5 = crypto.createHash('md5');
        md5.update(str);
        return md5.digest('hex');
    },
    // 执行sql语句
    db_query(opt) {
        opt.connect.query(opt.sql, function(err, res) {
            if (err) {
                console.log(`${opt.name} err: + ${err}`);
            } else {
                console.log(`${opt.name} success!`);
                if (typeof(opt.callback) === 'function') {
                    opt.callback(err, res);
                }
            }
        });
    }
}