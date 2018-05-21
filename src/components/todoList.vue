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
                  <div class="todo-list" v-if="item.status == false">
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
              <div v-if="count > 0">
                <div v-for="(item,index) in list" :key="index">
                  <div class="todo-list" v-if="item.status == true">
                    <span class="item finished">
                      {{index+1}}. {{item.content}}
                    </span>
                    <span class="pull-right">
                      <el-button size="small" type="primary" @click="restore(index)">还原</el-button>
                    </span>
                  </div>
                </div>
              </div>
              <div v-else>
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
  export default {
    data () {
      return {
        name: '管理员',
        activeName: '',
        todos: '',
        Done: false,
        list: [
          {
            status: false,
            content:123
          },
          {
            status: true,
            content:123
          }
        ],
        count :1
      }
    },
    methods: {
      addTodos () {

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