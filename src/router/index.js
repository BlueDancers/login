import Vue from 'vue'
import Router from 'vue-router'
import todoList from '../components/todoList'
import login from '../components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/todoList',
      name: 'todoList',
      component: todoList 
    },
    {
      path: '*',
      name: 'login',
      component: login

    }
  ]
})
