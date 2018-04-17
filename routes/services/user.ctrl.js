/**
 * @desc 用户 控制器
 * @author Jade
 **/

var nodemailer = require('nodemailer');
var User = require('../../database/user.db');
var Helper = require('../helper');
var params = require('../../database/mailer.db');
module.exports = {
    // 模块初始化
    init: function(app) {
        app.get('/user', this.doGetUserAllItems)
        app.post('/user/token', this.doGetUserItemByName)
        app.post('/user/register', this.dosetUserItem)
        app.post('/user/password', this.doPutPassword)
        app.post('/user/sendmail', this.doSendMail)
        app.post('/user/verifymail', this.doVerifyCode)
    },

    // 获取所有用户信息
    doGetUserAllItems: function(req, res) {
        var props = {};
        var user = new User({props: props});
        user.getUserAllItems(function(err, data) {
            if (data.length) {
                return res.send({
                    code: 200,
                    data: data
                })
            } else {
                console.log(err)
                return res.send({
                    code: 500,
                    message: '出错了'
                })
            }
        })
    },

    // 用户登录
    doGetUserItemByName: function(req, res) {
        // let decodedata = decodeURIComponent(req.body);  
        var props = req.body;
        console.log(props)
        props.email = req.body.userName;
        props.password = Helper.getMD5(props.password);
        var user = new User({ props: props });
        user.getUserItemByName(function(err, data) {
            if (data.length) {
                return res.send({
                    code: 200,
                    data: data
                })
            } else {
                console.log(err)
                return res.send({
                    code: 500,
                    message: '用户名或密码不正确'
                })
            }
        })
    },

     // 用户注册
    dosetUserItem: function(req, res) {
        var props = req.body;
        props.password = Helper.getMD5(req.body.password);
        console.log(props.password)
        var user = new User({ props: props });
        user.setUserItem(function(err, data) {
            if (data.length) {
                return res.send({
                    code: 200,
                    data: data
                })
            } else {
                console.log(err)
                return res.send({
                    code: 500,
                    message: '未知错误'
                })
            }
        })
    },

    // 重置密码
    doPutPassword: function(req, res) {
        var props = {
            id: req.body.id,
            new_password: Helper.getMD5(req.body.new_password),
        };
        var user = new User({ props: props });
        user.putUserPassword(function(err, data) {
            if (data.changedRows >= 0) {
                return res.send({
                    code: 200
                })
            } else {
                console.log(err)
                return res.send({
                    code: 500,
                    message: '出错了'
                })
            }
        })
    },

    //发送邮箱验证码
    doSendMail: function(req, res) {
        let Num='';
        for(var i=0;i<6;i++) 
        { 
        Num+=Math.floor(Math.random()*10); 
        } 
        var props = {
            email: req.body.userName,
            verifyCode: Num
        };
        console.log(req.body)
        var user = new User({ props: props });
        // 邮件信息
        const mailOptions = {
            from: 'jay.tan@seatig.com', // 发送邮箱
            to: req.body.userName, // 接受邮箱
            subject: 'SFJ Capital登陆验证码', // 标题
            html: `<h2>账号登陆确认:</h2> 
                <p >亲爱的用户：</p>  
                <p>您于近期登陆了SFJ Capital帐号, 请在登陆页面输入验证码<span>${Num}</span>完成登陆。</p>` // 内容
        }
        //发送邮件
        const transporter = nodemailer.createTransport(params)
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
          // success成功后将随机验证码存入
          user.sendMail(function(err, data) {
                if (data.changedRows >= 0) {
                    return res.send({
                        code: 200
                    })
                } else {
                    console.log(err)
                    return res.send({
                        code: 500,
                        message: '出错了'
                    })
                }
            })
        })
    },

    //验证邮箱验证码
    doVerifyCode: function(req, res) {
        var props=req.body;
        var user = new User({props: props});
        user.verifyMail(function(err, data) {
            if (data.length) {
                return res.send({
                    code: 200,
                    data: data
                })
            } else {
                console.log(err)
                return res.send({
                    code: 500,
                    message: '未知错误'
                })
            }
        })
    }
}