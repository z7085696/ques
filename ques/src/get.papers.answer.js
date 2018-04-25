//问卷提交列表详情

const conn = require('./conn.js')
module.exports = (req, res) => {

  let paper_id = req.cookies.paper_id
  let sql = 'select answer.id id, papers.title title,answer.paper_id paper_id,answer.content content,answer.item item,answer.ctime ctime from answer,papers where answer.paper_id=papers.id && answer.paper_id="' + paper_id + '"'
  conn.query(sql, function (error, result) {
    if (error == null) {
      res.json({
        error: 0,
        message: 'ok',
        data: result
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