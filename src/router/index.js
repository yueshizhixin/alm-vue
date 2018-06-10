import Vue from 'vue'
import Router from 'vue-router'

//发现
import discoveryIndex from '../components/discovery/index'

//思想
import thoughtIndex from '../components/thought/index'

//笔记
import noteIndex from '../components/note/index'

//功能
import funcIndex from '../components/func/index'
import funcCraIndex from '../components/func/crawler/index'
import funcLpIndex from '../components/func/low-poly/index'
import funcPdfIndex from '../components/func/pdf/index'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: discoveryIndex
    },
    //发现
    {
      path:'/discovery',
      component:discoveryIndex,
    },
    //思想
    {
      path:'/thought',
      component:thoughtIndex,
    },
    //笔记
    {
      path:'/note',
      component:noteIndex,
    },
    //功能
    {
      path: '/func',
      component:funcIndex,
      children: [{
        //爬虫
        path: 'crawler',
        component: funcCraIndex,
      }, {
        //LOW POLY
        path: 'low-poly',
        component: funcLpIndex,
      }, {
        //PDF
        path: 'pdf',
        component: funcPdfIndex,
      },
      ],
    },
  ]
})
