<template>
  <div>
    <el-row>
      <el-col :md="4" style="height: 60px">
        <span class="iconHeader">ALM</span>
      </el-col>
      <el-col :md="16">
        <el-row>
          <el-col :md="14">
            <el-menu :default-active="menuActiveIndex" mode="horizontal" @select="menuHandler"
                     class="menu" active-text-color="#409eff" text-color="#666666" background-color="#ffffff">
              <el-menu-item index="100" class="menuItem">首页
              </el-menu-item>
              <el-menu-item index="200" class="menuItem">思想
              </el-menu-item>
              <el-menu-item index="300" class="menuItem">笔记
              </el-menu-item>

              <el-submenu index="400">
                <template slot="title">功能</template>
                <el-menu-item index="400-100" class="menuItemSub"><i
                  class="menuItemSub iconfont icon-crawler">&nbsp;&nbsp;</i>爬虫
                </el-menu-item>
                <el-menu-item index="400-200" class="menuItemSub"><i class="menuItemSub iconfont icon-listblock">&nbsp;&nbsp;</i>LOW
                  POLY
                </el-menu-item>
                <el-menu-item index="400-300" class="menuItemSub"><i class="menuItemSub iconfont icon-similarproduct">&nbsp;&nbsp;</i>PDF格式转换
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
          <!--<el-col :md="{span:5,offset:4}">-->
          <!--<el-button class="button">-->
          <!--<el-badge :value="12" class="item badge" :max="10">-->
          <!--<i class="iconfont icon-iccomm"></i>&nbsp;消息-->
          <!--</el-badge>-->
          <!--</el-button>-->
          <!--</el-col>-->
          <!--<el-col :md="5">-->
          <!--<el-dropdown>-->
          <!--<img class="el-dropdown-link img-circle img-headHeader"-->
          <!--src="http://cdn.yueshizhixin.top/299243-106.jpg?imageView2/1/w/100/h/100"-->
          <!--&gt;-->
          <!--<el-dropdown-menu slot="dropdown">-->
          <!--<el-dropdown-item><i class="iconfont icon-account">&nbsp;</i>信息&nbsp;&nbsp;&nbsp;</el-dropdown-item>-->
          <!--<el-dropdown-item><i class="iconfont icon-set">&nbsp;</i>设置&nbsp;&nbsp;&nbsp;</el-dropdown-item>-->
          <!--<el-dropdown-item><i class="iconfont icon-survey">&nbsp;</i>反馈&nbsp;&nbsp;&nbsp;</el-dropdown-item>-->
          <!--<el-dropdown-item><i class="iconfont icon-back">&nbsp;</i>退出&nbsp;&nbsp;&nbsp;</el-dropdown-item>-->
          <!--</el-dropdown-menu>-->
          <!--</el-dropdown>-->
          <!--</el-col>-->
          <el-col :md="{span:8,offset:0}">
            <el-button class="button" icon="el-icon-plus" @click="signDigV=true;signType='up'"> 注册</el-button>
          </el-col>
          <el-col :md="8">
            <el-button class="button" icon="el-icon-arrow-right" @click="signDigV=true;signType='in'"> 登录</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <sign-templ :visi="signDigV" :sign="signType" @signGotoUp="signGotoUp" @signGotoIn="signGotoIn" @signEve="signEve"></sign-templ>
  </div>
</template>

<script>
  import SignTempl from "./user/templ/signTempl"
  import {TweenLite} from 'gsap'

  const searchWidthB = 250; //搜索框默认width
  const searchWidthF = 350; //搜索框focus width

  export default {
    name: "vueHeader",
    components: {SignTempl},
    data() {
      return {
        serachWidth: searchWidthB,//搜索框长度

        signDigV: false,//显示注册登录
        signType:'',//注册还是登录

        menuActiveIndex: '0',//菜单默认选择索引
      }
    },
    computed: {
      //搜索框左边距
      searchLeft() {
        let w = document.body.clientWidth;
        return w * 4 / 24 + w * 16 / 24 * (10 / 24)
      },
    },
    methods: {
      //注册模板事件
      signEve(data) {
        this.signType=data.signType
        this.signDigV = false
      },
      signGotoUp(){
        this.signType='up'
      },
      signGotoIn(){
        this.signType='in'
      },
      //路由控制
      menuHandler(key, keyPath) {
        if (key === '100') this.$router.push({path: '/'});
        else if (key === '200') this.$router.push({path: '/thought'});
        else if (key === '300') this.$router.push({path: '/note'});
        else if (key === '400-100') this.$router.push({path: '/func/crawler'});
        else if (key === '400-200') this.$router.push({path: '/func/low-poly'});
        else if (key === '400-300') this.$router.push({path: '/func/pdf'})
      },
      //搜索框
      searchFocus() {
        TweenLite.to(this.$data, 0.5, {serachWidth: searchWidthF});
      },
      searchBlur() {
        TweenLite.to(this.$data, 0.5, {serachWidth: searchWidthB});
      },
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
