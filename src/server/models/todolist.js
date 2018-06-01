let todolist = require('../schema/list.js')

let getTodolist = (id) => todolist.find({user_id:id},(err,data)=> {
  if(!err) return data
  return "读取失败"
}).exec()

let addTodolist = (list) => todolist.add({list:list},(err, data)=> {
  if (!err) return true
  return "写入失败"
})

module.exports= {
  getTodolist,
  addTodolist
}