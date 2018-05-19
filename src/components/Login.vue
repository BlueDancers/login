<template>
  <div>
    <el-row class="content">
      <el-col :xs="24" :sm="{span: 6,offset: 9}">   
        <!--
          通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。 
          offset 属性可以指定分栏偏移的栏数。
         -->
        <span class="title">
          欢迎登录
        </span>
        <el-row>
          <el-input v-model="account" placeholder="账号" type="text"></el-input>
          <el-input v-model="password" placeholder="摩玛" type="password"></el-input>
        </el-row>
        <el-button type="primary" @click="logintodo">登录</el-button>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
  export default {
    data () {
      return {
        account: '',
        password: ''
      }
    },
    methods: {
      logintodo () {
        this.$router.push('/todolist')
      }
    }
  }
</script>

<style scoped>
.content {
  padding: 16px;
}
.title {
  font-size: 28px;
}
.el-input {
  margin: 12px 0;
}
.el-button {
  width: 100%;
  margin-top: 10px;
}
</style>

