var path = require('path')
module.exports = (req, res) => {
    if (req.session.username) {//req.session.username如果有值,则为true
        res.cookie('message', JSON.stringify({
            status: 'error',
            link: '/index',
            linkText: '返回管理首页',
            msg: '您已经登陆了'
        }))
        res.sendFile(path.resolve('./') + '/public/message.html')
    } else {//如果没有,则返回注册页面
        res.sendFile(path.resolve('./') + '/public/regist.html')
    }

    // res.send(__dirname)
}