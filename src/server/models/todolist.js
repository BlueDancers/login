let todolist = require('../schema/list.js')

let getTodolist = (id) => todolist.find({user_id:id},(err,data)=> {
  console.log(data)
  if(!err) return data
  return "读取失败"
})

//增加数据
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

//更新数据 - 完成数据
let updateTodolist = (data) => {
  todolist.update({content: data.content},{$set: {status: data.status}},(err, data)=> {
    if(!err) return 
    console.log("更变失败")
  })
}

//删除数据
let deleteTodolist = (data) => {
  console.log(data.list);
  todolist.deleteOne({content:data.list}, (err, data)=> {
    if(!err) return 
    console.log("删除失败")
  })
}

module.exports= {
  getTodolist,
  addTodolist,
  updateTodolist,
  deleteTodolist
}