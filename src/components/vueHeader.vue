<template>
  <div class="divMain">
    <el-row>
      <el-col :md="20">
        <el-row>
          <el-col :md="8">
            <el-menu :default-active="menuActiveIndex" mode="horizontal" @select="menuHandler"
                     class="menu" active-text-color="#409eff" text-color="#666666" background-color="#ffffff">
              <el-menu-item index="300" class="menuItem">笔记
              </el-menu-item>
              <el-submenu index="400">
                <template slot="title">功能</template>
                <el-menu-item index="400-200" class="menuItemSub"><i class="menuItemSub iconfont icon-listblock">&nbsp;&nbsp;</i>LOW
                  POLY
                </el-menu-item>
              </el-submenu>
              <el-submenu index="500">
                <template slot="title">资源</template>
                <el-menu-item index="500-100" class="menuItemSub"><i
                  class="menuItemSub iconfont icon-pic">&nbsp;&nbsp;</i>壁纸
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>

          <el-col :md="10" class="search" :style="{left:searchLeft+'px !important',width:serachWidth+'px'}">
            <el-input placeholder="搜索" @focus="searchFocus" @blur="searchBlur">
              <el-button slot="append" icon="el-icon-search" style="font-size: 20px;"></el-button>
            </el-input>
          </el-col>
        </el-row>
      </el-col>

      <el-col :md="4" align="right">
        <el-row>
          <div v-if="user.isSign===1">
            <el-col :md="{span:5}">
              <!--<el-button class="button">-->
              <!--<el-badge :value="12" class="item badge" :max="10">-->
              <!--<i class="iconfont icon-iccomm"></i>&nbsp;消息-->
              <!--</el-badge>-->
              <!--</el-button>-->
            </el-col>
            <el-col :md="{span:5,offset:4}">
              <el-dropdown>
                <img class="el-dropdown-link img-circle img-headHeader"
                     src="http://cdn.yueshizhixin.top/248986-106.jpg?imageView2/1/w/100/h/100"
                >
                <el-dropdown-menu slot="dropdown">
                  <!--<el-dropdown-item><i class="iconfont icon-account">&nbsp;</i>信息&nbsp;&nbsp;&nbsp;</el-dropdown-item>-->
                  <!--<el-dropdown-item><i class="iconfont icon-set">&nbsp;</i>设置&nbsp;&nbsp;&nbsp;</el-dropdown-item>-->
                  <!--<el-dropdown-item><i class="iconfont icon-survey">&nbsp;</i>反馈&nbsp;&nbsp;&nbsp;</el-dropdown-item>-->
                  <!--<el-dropdown-item>-->
                  <!--<div @click="userQuit()">-->
                  <!--<i class="iconfont icon-back">&nbsp;</i>b退出&nbsp;&nbsp;&nbsp;-->
                  <!--</div>-->
                  <!--</el-dropdown-item>-->
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </div>
          <div v-else-if="user.isSign===0">
            <el-col :md="{span:8,offset:0}">
              <el-button class="button" icon="el-icon-plus" @click="signUp()"> 注册</el-button>
            </el-col>
            <el-col :md="8">
              <el-button class="button" icon="el-icon-arrow-right" @click="signIn()"> 登录</el-button>
            </el-col>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import glb from "@comp/GLOBAL"
  import SignTempl from "@comp/user/templ/signTempl"
  import {TweenLite} from 'gsap'//input框动画
  import commh from '@/assets/js/communicatHandler'

  const searchWidthB = 250; //搜索框默认width
  const searchWidthF = 350; //搜索框focus width

  export default {
    name: "vueHeader",
    components: {SignTempl},
    data() {
      return {
        serachWidth: searchWidthB,//搜索框长度
        menuActiveIndex: '0',//菜单默认选择索引

        signDigV: false,//显示注册登录
        opType: '',//注册还是登录

        user: {
          isSign: -1,//是否已登录
          headImg: '',//用户头像
        },

      }
    },
    computed: {
      //搜索框左边距
      searchLeft() {
        let w = document.body.clientWidth;
        // return  w * 16 / 24 * (10 / 24)
        return (w - 1199) / 2 + 1199 / 24 *6
      },
    },
    mounted() {
      this.signFresh()
      /**
       * 组件通信
       */
      commh.$on("http401", () => {
        this.signIn()
      });
    },
    methods: {
      //路由控制
      menuHandler(key, keyPath) {
        if (key === '100') this.$router.push({path: '/'});
        else if (key === '200') this.$router.push({path: '/thoughts'});
        else if (key === '300') this.$router.push({path: '/note'});
        else if (key === '400-100') this.$router.push({path: '/func/crawler'});
        else if (key === '400-200') this.$router.push({path: '/func/low-poly'});
        else if (key === '500-100') this.$router.push({path: '/asset/bg'})
      },
      //搜索框
      searchFocus() {
        TweenLite.to(this.$data, 0.5, {serachWidth: searchWidthF});
      },
      searchBlur() {
        TweenLite.to(this.$data, 0.5, {serachWidth: searchWidthB});
      },

      /**
       * 注册登录
       */
      //注册登录按钮激活模板
      signUp() {
        this.signDigV = true;
        this.opType = 'up'
      },
      signIn() {
        this.signDigV = true;
        this.opType = 'in'
      },
      //sign模板事件
      signGotoUp() {
        this.opType = 'up'
      },
      signGotoIn() {
        this.opType = 'in'
      },
      signEve(data) {
        this.opType = data.opType
        this.signDigV = false
        this.signFresh()
      },
      //修改状态
      setSignStatus(v) {
        // sessionStorage['isSign'] = v
        // this.user.isSign = v
      },
      //检测登录
      signFresh() {
        // glb.post(this, '/user?tag=signFresh', {}, (data) => {
        //   if (data.code === 200 && data.ok === 1) {
        //     this.setSignStatus(1)
        //     console.log(data)
        //     this.user.headImg = data.data.headImg + glb.imgFormat.head
        //     sessionStorage['userId']=data.data.id
        //   }
        //   else {
        //     this.setSignStatus(0)
        //   }
        // })
      },


      /**
       * 用户面板
       */
      //用户退出
      userQuit() {
        glb.post(this, '/user?tag=signOut', {}, (data) => {
          if (data.code === 200 && data.ok === 1) {
            this.setSignStatus(0)
            this.signFresh()
          }
        })
      },

      test() {

      }
    },
  }
</script>

<style scoped>
  /*左侧头标*/
  .iconHeader {
    height: 100%;
    left: 0;
    right: 0;
    width: 80%;
    display: block;
    text-align: center;
    line-height: 60px;
    background-color: #409eff;
    color: whitesmoke;
    font-size: 26px;
  }

  /*顶部菜单*/
  .menu {
    border-bottom: 0;
  }

  .menuItem {
    font-size: 18px;
  }

  .menuItemSub {
    font-weight: 500;
    font-size: 16px;
  }

  /*搜索框*/
  .search {
    /*width: 200px;*/
    position: fixed;
    line-height: 60px;
  }

  /*右侧按钮*/
  .button {
    border: 0;
    line-height: 60px;
    color: #666666;
    padding: 0 0;
    margin: 0 0;
    font-size: 16px;
    font-weight: 700;
    height: 60px;
    text-align: center;
    width: 100%;
  }

  /*消息提醒*/
  .badge {
    line-height: 30px;
  }
</style>
