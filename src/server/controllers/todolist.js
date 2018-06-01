let todolist = require('../models/todolist.js')

//写入文件
let addTodolist = async (list) => {
  return await todolist.addTodolist(list)
}

//读取数据
let getTodolist = async (id) => {
  return await todolist.getTodolist(id)
}


module.exports = {
  addTodolist,
  getTodolist
}



