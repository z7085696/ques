//编辑问卷

const conn = require('./conn.js')
module.exports = (req, res) => {

  let id = req.body.id,

    sql = 'update `papers` set ? where `id`="' + id + '"'

  conn.query(sql, {
    title: req.body.title,
    content: req.body.content,
    item: req.body.item,
    creator_id: req.session.loginInfo.id //当前登录用户的ID信息
  }, function (error, result) {
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
