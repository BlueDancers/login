let user = require('../models/user')
let jwt = require('koa-jwt')
let jsonwebtoken = require('jsonwebtoken')
let bcrypt = require('bcryptjs')



//测试获取数据库接头
let getuserInfo = (id) => user.user.find({id:id},(err,data)=> {
    if(!err) return data
  }).exec()

//jwt 配合bcryptjs 完成登录
let postUserAuth = async function (data) {
  let userinfo = await user.getUserName(data.username);
  userinfo = userinfo[0]
  if(userinfo !== null){
    let salt = bcrypt.genSaltSync(10);  //设置密码强度
    if (!bcrypt.compareSync(data.password,userinfo.password)) {   //第一个参数是未加密密码 第二个参数为数据库的密码

      console.log(userinfo.password)
      console.log(data.password)
      console.log("密码加密"+bcrypt.compareSync(userinfo.password, bcrypt.hashSync(data.password,salt)))
      return {
        success: false,
        info: '密码错误'
      }
    }else{
      console.log("密码加密" + bcrypt.compareSync(userinfo.password, data.password))
      let userToken = {
        name: userinfo.username,
        id: userinfo.id
      }
      let secret = 'vue-koa-demo';   //指定秘钥,这是只会 用来判断token合法的标志
      let token = jsonwebtoken.sign(userToken, secret)  //签名token  
      return {
        success: true,
        info: token
      }
    }
  } else {
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






