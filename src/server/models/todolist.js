let todolist = require('../schema/list.js')

let getTodolist = (id) => todolist.find({user_id:id},(err,data)=> {
  console.log(data)
  if(!err) return data
  return "读取失败"
}).exec()

let addTodolist = (list) => {
  todolist.create({
    user_id: list.user_id,
    content: list.content,
    status: list.status
  },(err)=> {
    if(!err) return
    console.log("失败")  
  })
}

module.exports= {
  getTodolist,
  addTodolist
}