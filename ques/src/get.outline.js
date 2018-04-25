//获取大纲后台数据

//递归算法,生成“树tree”
function tree(data, pid = 0, obj = []) {
  for (var i = 0; i < data.length; i++) {
      data[i].children = data[i].children || []
      if (data[i].pid == pid) {
          data[i].flag = false
          var index = obj.push(data[i])
          tree(data, data[i].id, obj[index - 1].children)//递归
      }
  }
  return obj
}


const conn = require('./conn.js')
//获取数据库数据
module.exports = (req, res) => {

    let sql = 'select * from `outline`'
    conn.query(sql, function (error, result) {
      if (error == null) {
        res.json({
          error: 0,
          message: 'ok',
          data:tree(result)
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
