let user = require('../models/user')
let jwt = require('koa-jwt')
let jsonwebtoken = require('jsonwebtoken')


let getuserInfo = (id) => user.user.find({id:id},(err,data)=> {
    if(!err) return data
  }).exec()


let postUserAuth = async function (data) {
  let userinfo = await user.getUserName(data.username);
  userinfo = userinfo[0]
  if(userinfo !== null){
    if(userinfo.password !== data.password){
      // this.body = {
      //   success: false,
      //   info: '密码错误'
      // }
      return {
        success: false,
        info: '密码错误'
      }
    }else{
      let userToken = {
        name: userinfo.username,
        id: userinfo.id
      }
      let secret = 'vue-koa-demo';
      let token = jsonwebtoken.sign(userToken, secret)
      // this.body = {
      //   success: true,
      //   info: token
      // }
      return {
        success: true,
        info: token
      }

    }
  } else {
    // this.body = {
    //   success: false,
    //   info: '用户不存在'
    // }
    return {
      success: false,
      info: '用户不存在'
    }

  }
}

module.exports = {
  postUserAuth,
  getuserInfo
}






