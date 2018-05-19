let koa = require('koa')
let router = require('koa-router')
let logger = require('koa-logger')
let parser = require('koa-bodyparser')
let json = require('koa-json')

let app = new koa()
app.use(json())
app.use(logger())
app.use(parser())
app.use(async (ctx)=> {
  ctx.body = "koa start!"
})
app.listen(80,()=> {
  console.log('[koa] start!')
})

module.exports = app;