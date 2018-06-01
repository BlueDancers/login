let auth = require('../controllers/user')
let todolist = require('../controllers/todolist')
let router = new require('koa-router')()
let controllers = require('../controllers/user')

//测试
router.get('/', (ctx, next) => {
  ctx.body = "koa start!"
})

//登录验证
router.post('/user', async (ctx, next) => {
  ctx.body = await controllers.postUserAuth(ctx.request.body)
})


//测试接口查看时候访问到用户表
router.get('/user/:id', async (ctx, next) => {
  let request = ctx.url.split('/').pop()
  await auth.getuserInfo(request).then(data => {
    ctx.body = data
  })
})

//获取数据库数据 添加路由
router.post('/list', async (ctx, next) => {
  var data = ctx.request.body  //get获取的参数
  console.log(data);
  let list = await todolist.getTodolist(data.id)
  ctx.body = list
})

module.exports = router