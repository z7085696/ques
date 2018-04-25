//注销

var path = require('path')
module.exports = (req, res) => {
  //destroy清楚session数据
  req.session.destroy(function(error){
    //注销成功后执行
    res.cookie('message', JSON.stringify({
      status: 'error',
      link: '/login',  //注销成功后返回登录
      linkText: '重新登陆',
      msg: '注销成功',
      userInfo:null   //清除cookie
    }))
    res.sendFile(path.resolve('./') + '/public/message.html')
  })
}
