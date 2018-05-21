// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
Vue.use(Element)
Vue.prototype.$http = axios   //引入axios
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let token = sessionStorage.getItem('demo-token')
  if (token !== 'null' && token !== null) {
    if (to.path == '/todolist'){
      next()
    }else {
      console.log('存在token 进入系统')
      next('/todolist')
    }
  } else {
    if (to.path == '/todolist') {
      console.log('token不存在 跳转主页面');
      next('/')
    } else {
      console.log('跳转主页面');
      next()
    }
  }
  // if(to.path == '/') {
  //   console.log('存在token 进入系统')
  //   if (token !== 'null' && token !== null) {
  //     next('/todoList')
  //   }
  //   next()
  //   console.log('不存在token 跳转回登录页面')
  // } else {
  //   if (token !== 'unll' && token !== null) {
  //     console.log('token存在 正常跳转')
  //     next()
  //   }else {
  //     next('/')
  //     console.log('token不存在 跳转回登录页面')
  //   }
  // }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
