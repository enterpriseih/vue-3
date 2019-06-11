import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'list',
          name: 'list',
          component: () => import(/* webpackChunkName: "list" */ '../components/List.vue')
        }, {
          path: 'user',
          name: 'user',
          component: () => import(/* webpackChunkName: "user" */ '../components/User.vue')
        }
      ]
    },
    {
      path: '/add',
      name: 'add',
      component: () => import(/* webpackChunkName: "user" */ '../components/User.vue')
    }
  ]
})
