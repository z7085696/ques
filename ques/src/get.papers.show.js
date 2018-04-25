//显示问卷管理界面

var path = require('path')

module.exports = (req, res) => {
  if (!req.session.username) {
    res.sendFile(path.resolve('./') + '/public/papers.html')
  } else {
    res.cookie('message', JSON.stringify({
      status: 'error',
      link: '/login',
      linkText: '登陆',
      msg: '请先登陆'
    }))
    res.sendFile(path.resolve('./') + '/public/message.html')
  }
}
