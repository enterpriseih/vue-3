// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/assets/base.styl'
import header from './components/header'
import i18n from './i18n/i18n'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.component('f-header', header)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
