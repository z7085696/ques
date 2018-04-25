const path = require('path')
const conn = require('./conn.js')
const cuid = require('cuid')

module.exports = (req, res) => {//判断用户有没有输入id
    if (!req.query.id) {  //没有id传入的时候
        require('./message')({  //调用报错信息
            status: 'error',
            msg: '问卷已结束'
        }, res)
        return
    }

    //验证用户是否已经提交问卷
    var id = req.query.id

    if (req.cookies['releaseInfo' + id]) {//只要有值,说明已经答过
        require('./message')({
            status: 'error',
            msg: '您已完成问卷'
        }, res)
        return  //已经答过,终止执行
    } else { 
        res.cookie('release_paper_id', id)
        res.cookie('releaseInfo' + id, JSON.stringify({
            paper_id: id,
            cuid: cuid()
        }))

    }

    // sql = 'select * from `papers` where `id` = "' + id + '"'

    // conn.query(sql, function (error, result) {
    //     if (error == null) {
    //       res.send({
    //         error: 0,
    //         message: 'ok',
    //         data: result[0]
    //       })
    //     } else {
    //       console.log(error)
    //       res.send({
    //         error: 1,
    //         message: 'error',
    //       })
    //     }
    //   })


    res.sendFile(path.resolve('./') + '/public/release.html')


}