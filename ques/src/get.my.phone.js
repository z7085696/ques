//个人中心编辑邮箱

const conn = require('./conn.js')
module.exports = (req, res) => {

  let id = req.session.loginInfo.id,
    val = req.query.val,
    sql = 'update `users` set ? where `id`="' + id + '"'

  conn.query(sql, { phone: val}, function (error, result) {
    if (error == null) {
      res.json({
        error: 0,
        message: 'ok'
      })
    } else {
      console.log(error)
      res.json({
        error: 1,
        message: 'error'
      })
    }
  })

}
