let user = require('../schema/user')

let getUserName = (name) => user.find({username:name},(err,data)=> {
  if(!err) return data
}).exec()

module.exports = {
  getUserName,
  user
}


