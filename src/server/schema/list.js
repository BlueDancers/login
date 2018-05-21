let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/login_list')

mongoose.connection.once('open', ()=> {
  console.log('[mongdb] list is start')

})

let Schema = mongoose.Schema

let listSchema = new Schema({
  user_id: {
    type: Number
  },
  content: {
    type: String
  },
  status: {
    type: String
  }
})
let list = mongoose.model('list',listSchema);

module.exports = list