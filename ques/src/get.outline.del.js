// 删除大纲

const conn = require('./conn.js')

module.exports = (req,res)=>{
    setTimeout(()=>{
        let id = req.query.id
        let sql = 'delete from `outline` where `id` = "'+id+'"'
        conn.query(sql,function(error,result){
            if(error == null){
                res.json({
                    error:0,
                    message:'ok',
                })
            }else{
                console.log(result)
                res.json({
                    error:1,
                    message:'error',
                })
            }
        })
    },500)
}
