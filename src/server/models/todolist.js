let todolist = request('../schema/list.js')

let getTodolist = () => todolist.find({},(err,data)=> {
  if(!err) return data
}).exec()

let addTodolist = (list) => todolist.add({list:list},(err, data)=> {
  if (!err) ,看 
})

module.exports= {
  getTodolist
}