import Vue from 'vue'
import Router from 'vue-router'


import HelloWorld from '@/components/HelloWorld'
import test1 from '../components/test/test1'
import test2 from '../components/test/test2'
import t1Show from '../components/test/test1/show'
import t1Update from '../components/test/test1/update'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:
        HelloWorld

    },
    {
      path: '/test1',
      name: 'test1',
      component: test1,
      children: [{
        path: '/show',
        component: t1Show,
      },
        {
          path: '/update',
          component: t1Update,
        },
      ],
    },
    {
      path: '/test2',
      name: 'test2',
      component: test2,
    },
  ]
})
