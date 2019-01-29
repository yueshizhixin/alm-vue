<template>
  <div id="app">
    <el-container>
      <el-header class="vueHeader">
        <vue-header></vue-header>
      </el-header>

      <el-main class="vueMain divbg1">
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
  import glb from "@comp/GLOBAL"

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
        sessionStorage['authorImg'] = 'http://cdn.yueshizhixin.top/41795-106.jpg' + glb.imgFormat.head
        sessionStorage['headImg'] = JSON.stringify([
          'http://cdn.yueshizhixin.top/asset/head/59ff1851e7bce736a953bba2.jpg' + glb.imgFormat.head,
          'http://cdn.yueshizhixin.top/asset/head/Screenshot_2017-10-27-14-13-08.png' + glb.imgFormat.head,
          'http://cdn.yueshizhixin.top/asset/head/keaizhengyi109951163251967696.jpg' + glb.imgFormat.head,
          'http://cdn.yueshizhixin.top/asset/head/最美不过古风（女声）_3404088002179098.jpg' + glb.imgFormat.head,
          'http://cdn.yueshizhixin.top/asset/head/超好听の二次元日文歌_109951162972995997.jpg' + glb.imgFormat.head,
          'http://cdn.yueshizhixin.top/asset/head/东方幻想乡✿但愿长醉不复醒【柔和抒情篇】_3223768092923362.jpg' + glb.imgFormat.head,
          'http://cdn.yueshizhixin.top/asset/head/【欢乐十足】充满魔性易中毒,%20洗脑の歌_1422768057693556.jpg' + glb.imgFormat.head,
          'http://cdn.yueshizhixin.top/asset/head/mmexport1511942735139.jpg' + glb.imgFormat.head,
          'http://cdn.yueshizhixin.top/asset/head/萝莉%20中文%20软妹%20萌音%20小清新_18665309395053576.jpg' + glb.imgFormat.head,
          'http://cdn.yueshizhixin.top/asset/head/hdImg_4f52d78d2032c839cc1619959306f07c15306644927.jpg' + glb.imgFormat.head,
          'http://cdn.yueshizhixin.top/asset/head/日系%20%20%20元气萌音，元气过完每一天_3265549606134487.jpg' + glb.imgFormat.head,
          'http://cdn.yueshizhixin.top/asset/head/mmexport1524299918578.jpg' + glb.imgFormat.head,
          'http://cdn.yueshizhixin.top/asset/bg/231813-106.jpg' + glb.imgFormat.head,
          'http://cdn.yueshizhixin.top/asset/bg/305995-106.jpg' + glb.imgFormat.head,
          'http://cdn.yueshizhixin.top/asset/bg/299243-106.jpg' + glb.imgFormat.head,
        ])
        sessionStorage['tip'] = JSON.stringify([
          `<span class='tip'>浊酒一杯家万里</span><span class='tip'>燕然未勒归无计</span>`,
          `<span class='tip'>大漠孤烟直</span><span class='tip'>长河落日圆</span>`,
          `<span class='tip'>周虽旧邦</span><span class='tip'>其命维新</span>`,
        ])
        sessionStorage['assetTag'] = JSON.stringify([{
          id: 1,
          layer: 1,
          name: "壁纸",
          parentId: 0,
          sequence: 10,
          children: [],
          open: 0,
          hover: 0,
        }, {
          id: 2,
          layer: 1,
          name: "头像",
          parentId: 0,
          sequence: 1,
          children: [],
          open: 0,
          hover: 0,
        }, {
          id: 3,
          layer: 1,
          name: "其他",
          parentId: 0,
          sequence: 1,
          children: [],
          open: 0,
          hover: 0,
        },])
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
