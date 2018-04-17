/**
 * @desc nodemailer配置文件
 **/

// const params = {
//   host: 'smtp.qq.com', // 设置服务
//   port: 465, // 端口
//   sercure: true, // 是否使用TLS，true，端口为465，否则其他或者568
//   auth: {
//     user: 'tanjiej@foxmail.com', // 邮箱和密码
//     pass: 'vyuinjyvpsdqbjhh'
//   }
// }
//Gmail
const params = {
  service: 'Gmail', // 注意，host修改为service
  port: 465, // 端口
  sercure: true, // 是否使用TLS，true，端口为465，否则其他或者568
  auth: {
    user: 'jay.tan@seatig.com', // 邮箱和密码
    pass: 'TANjie566548'
  }
}

module.exports = params