/**
 * @desc 发送邮箱验证码
 * @author Jade
 **/

var nodemailer = require('nodemailer');

// const params = {
//   host: 'smtp.qq.com', // 设置服务
//   port: 465, // 端口
//   sercure: true, // 是否使用TLS，true，端口为465，否则其他或者568
//   auth: {
//     user: 'tanjiej@foxmail.com', // 邮箱和密码
//     pass: 'vyuinjyvpsdqbjhh'
//   }
// }

// // 邮件信息
// const mailOptions = {
//   from: 'tanjiej@foxmail.com', // 发送邮箱
//   to: 'tanjiej@foxmail.com', // 接受邮箱
//   subject: '注册确认', // 标题
//   html: `<h2>S账号注册确认:</h2> 
//     <p >亲爱的用户：</p>  
//     <p>您于近期注册了xxx帐号, 请在随机一位QQ好友的聊天窗口输入<a href='#'>我爱你</a>完成注册。</p>` // 内容
// }

// 发送邮件
// const transporter = nodemailer.createTransport(params)
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     return console.log(error);
//   }
//   console.log('Message %s sent: %s', info.messageId, info.response);
//   // success
//   // ...
// })