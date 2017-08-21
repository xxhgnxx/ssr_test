import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Hello',
      component: () => {
        import ('@/components/Hello')
      }
    },


    {
      path: '/Swiper',
      name: 'Swiper',
      component: () => {
        import ('@/components/Swiper')
      }
    }
  ]
})
