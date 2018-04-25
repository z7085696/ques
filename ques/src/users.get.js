// 读取用户表//获取数据库数据
const conn = require('./conn.js')

module.exports = (req,res)=>{
    var sql = 'select * from `users`'

    conn.query(sql,function(error,result){
        if(error==null){
            res.json({
                error:0,
                message:'ok',
                data:result
            })
        }else{
            console.log(result)
            res.json({
                error:1,
                message:'error',
            })
        }
    },500)
}
