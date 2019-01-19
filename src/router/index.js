import Vue from 'vue'
import Router from 'vue-router'

//笔记
import note_list from '../components/note/list'
import note_view from '../components/note/view'
import note_save from '../components/note/save'

//功能
import funcIndex from '../components/func/view'
import funcCrawler from '../components/func/crawler/crawler'
import funcLowPoly from '../components/func/low-poly/low_poly'

import asset_list from '../components/asset/list'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: note_list
    },
    {
      path: '/index',
      component: note_list
    },
    //笔记
    {
      path: '/note',
      component: note_list,
    },
    {
      path: '/note/:id',
      component: note_view,
    },
    {
      path: '/note/save/:id',
      component: note_save,
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
    //资源
    {
      path: '/asset',
      component: asset_list,
    },
  ]
})
