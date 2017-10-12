import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from './components/authentication/Admin.vue'
import User from './components/authentication/User.vue'
import Register from './components/authentication/Register.vue'
import About from './components/authentication/About.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
      {
         path:"/admin",
         component:Admin
      },
      {
         path:"/user",
         component:User
      },
      {
      	path:"/register",
      	component:Register
      },
      {
         path:"/about",
         component:About
      }
	],
   mode:'history'
})

export default router