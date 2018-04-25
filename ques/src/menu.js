var path = require('path')
module.exports = (req,res)=>{

    if(req.query.paper_id){  //通过cookie传入数据
        res.cookie('paper_id',req.query.paper_id)
    }

    var filename = req.query.filename
    res.sendFile(path.resolve('./')+'/public/'+req.params.filename)
}