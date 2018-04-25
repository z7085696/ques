
const express = require('express') //引入模块
const bodyParser = require('body-parser') //引入模块
const session = require('express-session')  //session数据保存在服务器端
const cookieParser = require('cookie-parser')  //引入cookie-parser模块


//调用方法
const app = express();
//解析cookie数据
app.use(cookieParser())
//session数据
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
//设置静态目录
app.use(express.static('./static'))

//获取,解析post数据
app.use(bodyParser.urlencoded({ extended: false }))

//引入src数据

app.get('/index',require('./src/index.js'))

app.get('/menu/:filename',require('./src/menu.js'))

app.get('/users/get',require('./src/users.get.js'))

app.get('/users/del',require('./src/users.del.js')) //删除用户

app.post('/users/edit', require('./src/post.users.edit.js')) //编辑用户

//添加用户信息
app.post('/users/add',require('./src/post.add.js'))

app.get('/regist',require('./src/get.regist.js')) //注册

app.get('/chkExist',require('./src/get.chkExist.js')) //判断表字段是否存在

app.get('/login', require('./src/get.login.js'))//登陆

app.post('/login', require('./src/post.login.js'))//验证用户登陆

app.get('/logout', require('./src/get.logout.js'))//注销

app.get('/outline/show', require('./src/get.outline.show.js')) //大纲展示

app.get('/outline', require('./src/get.outline.js')) //获取大纲后台数据

app.post('/outline/add', require('./src/post.outline.add.js')) //添加大纲

app.post('/outline/edit', require('./src/post.outline.edit.js')) //编辑大纲

app.get('/outline/del', require('./src/get.outline.del.js')) //删除大纲

app.get('/papers/show', require('./src/get.papers.show.js')) //显示问卷管理界面

app.post('/papers/add', require('./src/post.papers.add.js')) //创建保存问卷

app.get('/papers/list', require('./src/get.papers.list.js')) //读取问卷列表

app.get('/papers/find', require('./src/get.papers.find.js')) //根据条件返回问卷列表

app.post('/papers/edit', require('./src/post.papers.edit.js')) //编辑问卷调查

app.get('/papers/del',require('./src/get.papers.del.js')) //删除问卷调查

app.get('/papers/release',require('./src/get.papers.release.js')) //显示问卷调查页面

app.post('/papers/release/add', require('./src/post.papers.release.add.js')) //添加用户答卷

app.get('/papers/answer',require('./src/get.papers.answer.js')) //获取用户提交的文件列表(详情)

app.get('/my',require('./src/get.my.js')) //个人中心

app.get('/my/email', require('./src/get.my.email.js'))  //个人中心编辑邮箱

app.get('/my/info', require('./src/get.my.info.js')) //获取后台个人信息

app.get('/my/phone', require('./src/get.my.phone.js'))  //个人中心编辑手机



app.listen(8080)       //设置端口
