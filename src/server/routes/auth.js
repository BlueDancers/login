let auth = require('../controllers/user')
let router = new require('koa-router')()


router.get('/user/:id', async (ctx, next) => {
  let request = ctx.url.split('/').pop()
  await auth.getuserInfo(request).then(data => {
    ctx.body = data
  })
})



module.exports = router