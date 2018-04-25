//编辑大纲

const conn = require('./conn.js')
module.exports = (req, res) => {
  //获取前端传过来的id和label参数(post方式)
  let id = req.body.id,
    label = req.body.label,
    sql = 'update `outline` set `label`="' + label + '" where `id`="' + id + '"'
  conn.query(sql, function (error, result) {
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
