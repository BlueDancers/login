let todolist = require('../models/todolist.js')

//写入文件
let addTodolist = async (list) => {
  return await todolist.addTodolist(list)
}

//读取数据
let getTodolist = async (id) => {
  return await todolist.getTodolist(id)
}

//更新数据
let updateTodolist = async (list) => {   
  return await todolist.updateTodolist(list)
}

//删除数据
let deleteTodolist = async (list) => {
  return await todolist.deleteTodolist(list)
}
  
module.exports = {
  addTodolist,
  getTodolist,
  updateTodolist,
  deleteTodolist
}



