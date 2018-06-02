let user = require('../schema/user')

let getUserName =async (name) => user.find({username:name},(err,data)=> {
  if(!err) return data
})

module.exports = {
  getUserName,
  user
}


