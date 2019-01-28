// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/css/comm.css'
import axios from 'axios'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import qs from 'qs';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$axios = axios
Vue.use(mavonEditor)

axios.defaults.withCredentials = true
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://127.0.0.1:8080/api/v1';
// axios.defaults.baseURL = 'http://123.206.21.86/note/api/v1';
axios.defaults.transformRequest = (data => {
  return qs.stringify(data)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
