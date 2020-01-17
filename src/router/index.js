import home from '../components/home.vue'
import login from '../components/login.vue'
import sign from '../components/sign.vue'
import about from '../components/about'
import archive from '../components/archive'

const routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/archive',
    name: 'archive',
    component: archive
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/sign',
    name: 'sign',
    component: sign
  }
]
export default routes
