<template>
  <div id="app">
    <el-container>
      <el-header class="vueHeader">
        <vue-header></vue-header>
      </el-header>
      <el-main id="main" class="vueMain divbg1">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import VueHeader from "@comp/vueHeader";
  import VueFooter from "@comp/vueFooter";

  export default {
    name: 'App',
    components: {VueFooter, VueHeader},

    data() {
      return {
        headImg: [],//头像
        tips: [],//提示
      }
    },
    mounted() {
      // document.getElementById('main').style.height=document.getElementById('main').style.height+1000+'px'
      // window.addEventListener('scroll', () => {
      //   console.log('app的')
      //   let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      //   let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      //   let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      //   console.log('scrollTop', scrollTop)
      //   console.log('scrollHeight', scrollHeight)
      //   console.log('windowHeight', windowHeight)
      //   if (scrollTop + windowHeight >= scrollHeight - 200) {
      //     console.log('自动加载')
      //     // document.getElementById('main').style.height=document.getElementById('main').style.height+1000+'px'
      //     // item.style.height = parseInt(item.style.height) + 1000 + "px"
      //     // this.getMoreNote()
      //   }
      // }, true)
    },
    methods: {},


  }

</script>

<style>
  .vueHeader, .vueFooter {
    position: fixed;
    width: 100%;
    z-index: 99;
    background-color: white;
    left: 0;
    right: 0;
  }

  .vueHeader {
    top: 0;
    font-weight: 700;
    box-shadow: 0 1px 6px rgba(26, 26, 26, .1);
  }

  .vueFooter {
    bottom: 0;
    height: 25px !important;
  }

  .vueMain {
    position: relative;
    margin-top: 60px;
    margin-bottom: 0;
    height: calc(100vh - 60px);
    top: 0;
    width: 100%;
    z-index: 9;
  }


</style>
