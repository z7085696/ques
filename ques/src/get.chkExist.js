// 判断表字段是否存在

const conn = require('./conn.js')

module.exports = (req,res)=>{
    setTimeout(()=>{
        //获取用户传过来的3个值
        var filed = req.query.filed,
            table = req.query.table,
            value = req.query.value

        //select查询
        var sql = 'select `id` from `'+table+'` where `'+filed+'`="'+value+'"'
        conn.query(sql,function(error,result){
            if(error == null){
                //result.length==0表示结果不存在
                if(result.length==0){
                    res.json({
                        error:0,
                        message:'字段值不存在',
                    })
                }else{
                    res.json({
                        error:2,
                        message:'字段值已存在',
                    })
                }
               
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
