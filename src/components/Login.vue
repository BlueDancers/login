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
        let obj = {
          username : this.account,
          password : this.password
        }
        let result = this.$http.post('/user',obj)
        result.then((res) => {
          console.log(res.data)
          if(res.data.success) {
            sessionStorage.setItem('demo-token',res.data.info)
            this.$message({
              type: 'success',
              message: '登录成功'
            })
             this.$router.push('/todolist')
          }else {
            this.$message.error(res.data.info)
            sessionStorage.setItem('demo-token',null)
          }
        },(err) => {
          console.log(err);
          this.$message.error('请求错误')
          sessionStorage.setItem('demo-token',null)
        })
       return result
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

