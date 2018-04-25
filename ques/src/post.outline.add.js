//添加大纲

const conn = require('./conn.js')
module.exports = (req, res) => {
  setTimeout(() => {
    let pid = req.body.pid,
        label = req.body.label,
        sql = 'insert into `outline` set `label`="' + label + '",`pid`="' + pid + '"'
    conn.query(sql, function (error, result) {
      if (error == null) {
        res.json({
          error: 0,
          message: 'ok',
          id:result.insertId   //传入id
        })
      } else {
        console.log(error)
        res.json({
          error: 1,
          message: 'error'
        })
      }
    })
  }, 0)
}
