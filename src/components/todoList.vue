<template>
  <div>
    <el-row class="content">
     <el-col :ws="{span:20,offset:2}" :sm="{span:8,offset:8}">
        <span>
          欢迎: {{name}}! 你的待办事项的:
        </span>
        <el-input placeholder="请输入待办事项" v-model="todos" @keyup.enter.native="addTodos"></el-input> <!-- native 给组件绑定原生事件采用的方法 -->
        <el-tabs v-model="activeName">
          <el-tab-pane label="待办事项" name="first">
            <el-col>
              <div v-if="!Done">
                <div v-for="(item,index) in list" :key="index">
                  <div class="todo-list" v-if="item.status == 'false'">
                    <span class="item">
                      {{index+1}}. {{item.content}}
                    </span>
                    <span class="pull-right">
                      <el-button size="small" type="primary" @click="finished(index)">完成</el-button>
                      <el-button size="small" type="danger" @click="remove(index)">删除</el-button>
                    </span>
                  </div>
                </div>
              </div>
              <div v-else-if="Done">
                暂无待办事项
              </div>
            </el-col>
          </el-tab-pane>
          <el-tab-pane label="已完成事项" name="second">
            <el-col>
              <div v-if="!fail">
                <div v-for="(item,index) in list" :key="index">
                  <div class="todo-list" v-if="item.status == 'true'">
                    <span class="item finished">
                      {{index+1}}. {{item.content}}
                    </span>
                    <span class="pull-right">
                      <el-button size="small" type="primary" @click="restore(index)">还原</el-button>
                    </span>
                  </div>
                </div>
              </div>
              <div v-else-if="fail">
                暂无已完成事项
              </div>
            </el-col>
          </el-tab-pane>
        </el-tabs>
     </el-col>
    </el-row>
  </div>
</template>

<script>
  import jwt from 'jsonwebtoken'
  export default {
    data () {
      return {
        name: '管理员',   //默认值管理员
        activeName: 'first',
        todos: '',
        id: '',
        list: []
      }
    },
    created () {
      let token = sessionStorage.getItem('demo-token');   //解析token获取用户名 密码
      this.name = jwt.decode(token).name   //将name值放入变量
      this.id = jwt.decode(token).id
      this.getTodolist()    //获取todolist
      // this.setTodolist()    //增加todolist
    },
    computed: {
      Done () {
        var list = this.list
        console.log(list)
        var one = 0
        list.map((i)=> {
          if(i.status == "false") {
            one++
          }
        })
        if(one > 0){
          return false
        }else {
          return true
        }
      },
      fail () {
        var list = this.list
        var two = 0
        list.map((i)=> {
          if(i.status == "true") {
            two++
            console.log(i);
          }
        })
        if(two > 0){
          return false
        }else {
          return true
        }
      }
    },
    methods: {
      addTodos () {
        if(this.todos == ''){
          this.$message({
            type: 'info',
            message: '请不要输入空字符'
          })
        }else{
        var lister = 
            {
              status: "false",
              content: this.todos
            }
        console.log(lister)
        this.list.push(lister)
        this.todos = ''
        this.$message({
          type: 'success',
          message: '添加成功'
        })
        }
        
      },
      finished (index) {   
        this.$set(this.list[index],'status',"true")  //在原始情况下 已经创建好的数组在后期数据添加的情况下 会不自动更新到视图
        this.$message({
          type: 'success',
          message: '任务完成'
        })
      },
      remove (index) {
        this.list.splice(index,1);
        this.$message({
          type: 'success',
          message: '删除成功'
        })
      },
      restore (index) {
        this.$set(this.list[index], 'status', "false")
        this.$message({
          type: 'success',
          message: '还原成功'
        })
      },
      async getTodolist () {
        let id = {
          id: this.id
        }
        //将后端数据读取出来
        this.$http.post('/list',id)
        .then((res)=> {
          console.log(res.data);
          this.list = res.data
        })
      }
    }
  }
</script>

<style scoped>
.el-input {
  margin: 20px auto;
}
.todo-list {
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
}
.item {
  font-size: 20px;
}
.finished {
  text-decoration: line-through;
  color: #dddddd
}
.el-button {
  padding-top: 8px;
  padding-bottom: 8px;
}
.pull-right {
  float: right;
}
</style>