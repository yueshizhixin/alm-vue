import Vue from 'vue'
import Router from 'vue-router'

//笔记
import note_list from '../components/note/list'
import note_view from '../components/note/view'
import note_save from '../components/note/save'

//资源
import asset_list from '../components/asset/list'
import asset_list_private from '../components/asset/listPrivate'

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
    //资源
    {
      path: '/asset',
      component: asset_list,
    },
    {
      path: '/asset/private',
      component: asset_list_private,
    },
  ]
})
