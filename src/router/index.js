import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
// import PrimeVue from 'primevue/config';



// Vue.use(PrimeVue)

Vue.use(VueRouter)




const router = new VueRouter({
  routes,
  mode: 'history'
})
 
export default router
