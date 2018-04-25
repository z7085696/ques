//编辑大纲

const conn = require('./conn.js')
module.exports = (req, res) => {
  //获取前端传过来的id和label参数(post方式)
  let id = req.body.id,
    username = req.body.username,
    phone = req.body.phone,
    password = req.body.password,
    sex = req.body.sex,
    email = req.body.email,
    
    sql = 'update `users` set `email`="' + email + '", `username`="' + username + '", `phone`="' + phone + '", `password`="' + password + '", `sex`="' + sex + '" where `id`="' + id + '"'
    console.log(email)
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
