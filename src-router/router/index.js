/*
路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About.vue'
import Home from  '../views/Home.vue'
import News from '../views/News.vue'
import Message from  '../views/Message.vue'
import MessageDetail from '../views/MessageDetail.vue'



//声明使用vue插件
Vue.use(VueRouter)

export default new VueRouter ({

  // mode: 'history',    //配置应用中的所有路由

  routes:[

    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children: [
        {
          path:'/home/news',
          component:News
        },
        {
          path:'message',
          component:Message,
          children: [
            {
              path: '/home/message/detail/:id',
              component: MessageDetail
            }
          ]
         },

      ]
    },
    {path:'/', redirect:'/about'}

  ]
})
