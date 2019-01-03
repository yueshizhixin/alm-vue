import Vue from 'vue'
import Router from 'vue-router'

//首页
import index from '../components/index'

//思想
import thoughtList from '../components/thought/list'

//笔记
import note_list from '../components/note/list'
import note_view from '../components/note/view'
import note_save from '../components/note/save'

//功能
import funcIndex from '../components/func/view'
import funcCrawler from '../components/func/crawler/crawler'
import funcLowPoly from '../components/func/low-poly/low_poly'

import asset_view from '../components/asset/view'
import asset_img from '../components/asset/img/view'

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
      path: '/note',
      component: note_list,
    },
    {
      path: '/note/:id',
      component: note_view,
    },
    {
      path: '/note/save/:id',
      component:note_save,
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
      component: asset_view,
      children: [{
        //爬虫
        path: 'bg',
        component: asset_img,
      },
      ],
    },
  ]
})
