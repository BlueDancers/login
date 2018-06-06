let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/login_user')

mongoose.connection.once('open', ()=> {
  console.log("[mongdb] user is start")
})
let Schema = mongoose.Schema

let userSchema = new Schema({
  id: {
    type: Number
  },
  username: {
    type: String
  },
  password: {
    type: String
  }
})

let user = mongoose.model('user',userSchema)
module.exports = user

user.create({
  id: 1,
  username: 'admin',
  password: '$2a$10$x3f0Y2SNAmyAfqhKVAV.7uE7RHs3FDGuSYw.LlZhOFoyK7cjfZ.Q6'
},(err)=> {
  if(err) return 
  console.log('插入成功');
})
