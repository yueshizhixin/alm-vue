<template>
  <div id="app">
    <el-container>
      <el-header class="vueHeader">
        <vue-header></vue-header>
      </el-header>

      <el-main id="main" class="vueMain divbg1">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
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
    created() {
      this.dataInit()
    },
    mounted() {
    },
    methods: {
      dataInit() {
        if (sessionStorage['data']) return
        console.log('set-data')
        sessionStorage['data'] = 1
        sessionStorage['author'] = 'ALM'
        sessionStorage['authorImg'] = 'http://cdn.yueshizhixin.top/41795-106.jpg?imageView2/1/w/300/h/300'
        sessionStorage['headImg'] = JSON.stringify([
          'http://cdn.yueshizhixin.top/41795-106.jpg?imageView2/1/w/300/h/300',
          'http://cdn.yueshizhixin.top/231813-106.jpg?imageView2/1/w/300/h/300',
          'http://cdn.yueshizhixin.top/231751-106.jpg?imageView2/1/w/300/h/300',
          'http://cdn.yueshizhixin.top/44215-106.jpg?imageView2/1/w/300/h/300',
          'http://cdn.yueshizhixin.top/249873-106.jpg?imageView2/1/w/300/h/300',
        ])
        sessionStorage['tip'] = JSON.stringify([
          `<span class='tip'>塞下秋来风景异</span><span class='tip'>衡阳雁去无留意</span>`,
          `<span class='tip'>周虽旧邦</span><span class='tip'>其命维新</span>`,
        ])
      },
    },
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

  .tip {
    color: #909399;
    font-size: 14px;
    display: inline-block;
    width: 100%;
  }
</style>
