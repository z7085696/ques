var path = require('path')
module.exports = (req, res) => {

    if (req.session.username) {//session.username如果有值,表示已经登录,跳转到首页
        res.sendFile(path.resolve('./') + '/public/index.html')
    } else {
        res.cookie('message', JSON.stringify({
            status: 'error',
            link: '/login',
            linkText: '登录',
            msg: '请先登录'
        }))
        res.sendFile(path.resolve('./') + '/public/message.html')
    }
}