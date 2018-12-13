import Vue from 'vue'
import Router from 'vue-router'

//首页
import index from '../components/index'

//思想
import thoughtList from '../components/thought/list'

//笔记
import noteList from '../components/note/list'
import noteView from '../components/note/view'
import noteSave from '../components/note/save'

//功能
import funcIndex from '../components/func/index'
import funcCrawler from '../components/func/crawler/crawler'
import funcLowPoly from '../components/func/low-poly/low_poly'

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
      path: '/thoughts',
      component: thoughtList,
    },
    //笔记
    {
      path: '/notes',
      component: noteList,
    },
    {
      path: '/note/:id',
      component: noteView,
    },
    {
      path: '/note1/save1',
      component:noteSave,
    },
    //功能
    {
      path: '/func',
      component: funcIndex,
      children: [{
        //爬虫
        path: 'crawler',
        component: funcCrawler,
      }, {
        //LOW POLY
        path: 'low-poly',
        component: funcLowPoly,
      },
      ],
    },
  ]
})
