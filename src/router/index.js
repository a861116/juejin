import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'

import Post from '../views/Post.vue'
Vue.use(VueRouter)



const router = new VueRouter({
  routes:[
	
    {
      path: '/',
      name: 'Home',
      component: Home,
	  children:[
	    {path:'/',component : List},
	    
	  ]
    },
	{
	  path: '/post/:articleId',
	  name: 'Post',
	  component: Post,
	  
	}
  ]
})



export default router



