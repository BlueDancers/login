let user = require('../schema/user')

let getUserName =async (name) => user.find({username:name}).exec()

module.exports = {
  getUserName,
  user
}


