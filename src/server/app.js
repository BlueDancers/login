let koa = require('koa')
let router = new require('koa-router')()
let logger = require('koa-logger')
let parser = require('koa-bodyparser')
let json = require('koa-json')
let auth = require('../server/controllers/user')

let app = new koa()
app.use(json())
app.use(logger())
app.use(parser())
// app.use(async (ctx)=> {
//   ctx.body = "koa start!"
// })
app.listen(80,()=> {
  console.log('[koa] start!')
})

router.get('/', (ctx, next) => {
  ctx.body = "koa start!"
})

router.get('/user/:id', async (ctx, next) => {
  let request = ctx.url.split('/').pop()
  await auth.getuserInfo(request)
  .then(data => {
    ctx.body = data
  })
})

router.post('/user', async (ctx,next) => {
  ctx.body = await auth.postUserAuth(ctx.request.body)
})

app.use(router.routes())

module.exports = app;