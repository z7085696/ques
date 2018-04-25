// 保存问卷

const conn = require('./conn.js')

module.exports = (req, res) => {

    let sql = 'insert into `papers` set ?'
    conn.query(sql,
        {
            title: req.body.title,
            content: req.body.content,
            item: req.body.content,
            creator_id: req.session.loginInfo.id //当前登录用户的ID信息
        }, function (error, result) {
            if (error == null) {
                res.json({
                    error: 0,
                    message: 'ok',
                })
            } else {
                console.log(result)
                res.json({
                    error: 1,
                    message: 'error',
                })
            }
        })

}
