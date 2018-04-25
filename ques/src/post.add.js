//添加用户
const conn = require('./conn.js')
const md5 = require('md5')
var path = require('path')  //path绝对路径配置组件

module.exports = (req, res) => {
    var username = req.body.username,
        password = md5(req.body.password),
        phone = req.body.phone,
        email = req.body.email,
        sex = req.body.sex

    var sql = "insert into `users` set ?" //set ? 表示会替换?部分的内容
    conn.query(sql, {
        username, phone, email, sex, password   //要替换的字段,替换?,拼接语句
    }, function (error, result) {
        if (error == null) {
            res.cookie('message', JSON.stringify({  //JSON.stringify将json对象转化成字符串
                status: 'success',  //调用success的样式
                link: '/login',
                linkText: '登录',
                msg: '恭喜您已成功注册,请重新登录'
            }))
            res.sendFile(path.resolve('./') + '/public/message.html')
        } else {
            console.log(result)
            res.cookie('message', JSON.stringify({
                status: 'error',   //调用error的样式
                link: '/regist',
                linkText: '重新注册',
                msg: "注册失败,请重新注册"
            }))
            res.sendFile(path.resolve('./') + '/public/message.html')
        }
    })
}
