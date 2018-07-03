import Vue from 'vue'
import Router from 'vue-router'

//首页
import index from '../components/index'

//思想
import thoughtList from '../components/thought/list'

//笔记
import noteList from '../components/note/list'

//功能
import funcIndex from '../components/func/index'
import funcCrawler from '../components/func/crawler/crawler'
import funcLowPoly from '../components/func/low-poly/low_poly'
import funcPdf from '../components/func/pdf/pdf'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/index',
      component: index
    },
    //思想
    {
      path:'/thought',
      component:thoughtList,
    },
    //笔记
    {
      path:'/note',
      component:noteList,
    },
    //功能
    {
      path: '/func',
      component:funcIndex,
      children: [{
        //爬虫
        path: 'crawler',
        component: funcCrawler,
      }, {
        //LOW POLY
        path: 'low-poly',
        component: funcLowPoly,
      }, {
        //PDF
        path: 'pdf',
        component: funcPdf,
      },
      ],
    },
  ]
})
