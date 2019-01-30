// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/css/comm.css'
// import '../static/js/comm.js'
import axios from 'axios'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import qs from 'qs';

// import preview from 'vue-photo-preview'
// import 'vue-photo-preview/dist/skin.css'
// Vue.use(preview)
// import vuePicturePreview from 'vue-picture-preview'
// Vue.use(vuePicturePreview)

// import gallery from 'img-vuer'
// Vue.use(gallery, {
//   swipeThreshold: 150  // default 100 ,new in 0.12.0
// })

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$axios = axios
Vue.use(mavonEditor)


axios.defaults.withCredentials = true
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'http://127.0.0.1:8080/api/v1';
axios.defaults.baseURL = 'http://123.206.21.86/note/api/v1';
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

//js日期格式化
Date.prototype.format = function(fmt) {
  var o = {
    "M+" : this.getMonth()+1,                 //月份
    "d+" : this.getDate(),                    //日
    "H+" : this.getHours(),                   //小时
    "m+" : this.getMinutes(),                 //分
    "s+" : this.getSeconds(),                 //秒
    "q+" : Math.floor((this.getMonth()+3)/3), //季度
    "S"  : this.getMilliseconds()             //毫秒
  };
  if(/(y+)/.test(fmt)) {
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  }
  for(var k in o) {
    if(new RegExp("("+ k +")").test(fmt)){
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    }
  }
  return fmt;
}
