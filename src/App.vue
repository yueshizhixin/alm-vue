<template>
  <div id="app" class="cursor-div">
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
    <!--<img id="cursorPointer" :src="pointer" alt="" class="cursor-img">-->
  </div>
</template>

<script>
  import VueHeader from "@comp/vueHeader";
  import VueFooter from "@comp/vueFooter";
  import glb from "@comp/GLOBAL"
  import pointer from "@/assets/pointer.png"

  export default {
    name: 'App',
    components: {VueFooter, VueHeader},

    data() {
      return {
        headImg: [],//头像
        tips: [],//提示

        // cursorPointer: null,//鼠标对象
        // pointer: require("@/assets/pointer.png"),
      }
    },
    created() {
      this.dataInit()
    },
    mounted() {
      // this.cursorInit()
    },
    methods: {
      dataInit() {
        if (sessionStorage['data']) return
        console.log('set-data')
        sessionStorage['data'] = 1
        sessionStorage['author'] = 'ALM'
        sessionStorage['authorImg'] = 'http://cdn.yueshizhixin.top/asset/head/%E8%B6%85%E5%A5%BD%E5%90%AC%E3%81%AE%E4%BA%8C%E6%AC%A1%E5%85%83%E6%97%A5%E6%96%87%E6%AD%8C_109951162972995997.jpg' + glb.imgFormat.head
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
          `<span class='tip'>大海的香气</span><span class='tip'>迟来的后悔</span>`,
          `<span class='tip'>塞下秋来风景异</span><span class='tip'>衡阳雁去无留意</span>`,
          `<span class='tip'>萧关逢候骑</span><span class='tip'>都护在燕然</span>`,
          `<span class='tip'>半壁见海日</span><span class='tip'>空中闻天鸡</span>`,
          `<span class='tip'>青冥浩荡不见底</span><span class='tip'>日月照耀金银台</span>`,
          `<span class='tip'>此身合是诗人未</span><span class='tip'>细雨骑驴入剑门</span>`,
          `<span class='tip'>尔曹身与名俱灭</span><span class='tip'>不废江河万古流</span>`,
          `<span class='tip'>寄意寒星荃不察</span><span class='tip'>我以我血荐轩辕</span>`,
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

      //鼠标位置
      // cursorInit() {
      //   this.cursorPointer = document.getElementById('cursorPointer');
      //   document.onmousemove = (event) => {
      //     this.cursorPointer.style.top = event.clientY + "px";
      //     this.cursorPointer.style.left = event.clientX + "px";
      //   };
      // },
    },
  }

</script>

<style>

  /*鼠标图片*/
  /*.cursor-div {*/
    /*cursor: none !important;*/
  /*}*/

  /*.cursor-img {*/
    /*width: 50px !important;*/
    /*height: 50px !important;*/
    /*z-index: 99999;*/
    /*position: absolute;*/
  /*}*/

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
