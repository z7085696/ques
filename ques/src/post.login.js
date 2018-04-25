//验证用户登陆

const conn = require('./conn.js')
const path = require('path')
const md5 = require('md5')
module.exports = (req, res) => {

  var username = req.body.username,
      password = md5(req.body.password)
  var sql = 'select `username`,`id`,`email`,`phone`,`photo`,`sex` from `users` where `username`="' + username + '" && `password`="' + password + '"'
  conn.query(sql, function (error, result) {
    if (error == null) {
      //result.length == 0,表示登陆失败
      if (result.length == 0) {
        res.cookie('message', JSON.stringify({
          status: 'error',
          link: '/login',
          linkText: '重新登录',
          msg: '登陆失败，用户名或密码错误'
        }))
        res.sendFile(path.resolve('./') + '/public/message.html')
      } else {   //登陆成功
        //session数据保存在服务器端
        //session保存用户登录数据,session.username判断是否有值,如果有则代表已经登录
        req.session.username = username
        req.session.loginInfo = result[0]  //保存登录信息
        //cookie信息保存在浏览器端
        res.cookie('message', JSON.stringify({
          status: 'error',
          link: '/index',
          linkText: '管理首页',
          msg: '登陆成功',
          userinfo:result[0]//保存登录信息
        }))
        res.sendFile(path.resolve('./') + '/public/message.html')
      }
    } else {
      console.log(result)
      res.json({
        error: 1,
        message: 'error'
      })
    }
  })

}
