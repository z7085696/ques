const mysql = require('mysql')

//链接数据库
var conn = mysql.createConnection({
    host: '127.0.0.1',  //服务器地址
    user: 'root',       //用户名
    password: '',       //密码
    database: 'quers'      //数据库名
});

conn.connect()

module.exports = conn;