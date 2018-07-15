import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodsList from '../views/GoodsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello/:helloId', //演示动态路由
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/goodsList',
      name:'goodsList',
      component:GoodsList
    }
  ]
})
