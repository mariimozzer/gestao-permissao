import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PessoaView from '../views/PessoaView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pessoa',
    name: 'PessoaView',
    component: PessoaView,
    title: 'Pessoas'
    
  }
]

const router = new VueRouter({
  routes
})

export default router
