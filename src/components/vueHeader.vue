<template>
  <div>
    <el-row>
      <el-col :md="4" style="height: 60px">
        <span class="iconHeader">ALM</span>
      </el-col>
      <el-col :md="12">
        <el-menu :default-active="menuActiveIndex" mode="horizontal" @select="menuHandler"
                 class="menu" active-text-color="#409eff" text-color="#666666" background-color="#ffffff">
          <el-menu-item index="100" class="menuItem">发现
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
            <el-menu-item index="500-100" class="menuItemSub"><i class="menuItemSub iconfont icon-pic">&nbsp;&nbsp;</i>壁纸
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>

      <el-col :md="8" align="right">
        <el-row>
          <el-col :md="8">&nbsp;</el-col>
          <el-col :md="4">
            <el-button class="button">
              <el-badge :value="12" class="item badge" :max="10">
                <i class="iconfont icon-iccomm"></i>&nbsp;评论
              </el-badge>
            </el-button>
          </el-col>
          <el-col :md="4">
            <el-dropdown>
              <img class="el-dropdown-link img-circle headHeader"
                   src="http://cdn.yueshizhixin.top/299243-106.jpg?imageView2/1/w/100/h/100"
              >
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><i class="iconfont icon-account">&nbsp;&nbsp;</i>信息</el-dropdown-item>
                <el-dropdown-item><i class="iconfont icon-set">&nbsp;&nbsp;</i>设置</el-dropdown-item>
                <el-dropdown-item><i class="iconfont icon-survey">&nbsp;&nbsp;</i>反馈</el-dropdown-item>
                <el-dropdown-item><i class="el-icon-arrow-left">&nbsp;&nbsp;</i>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :md="4">
            <div @mouseenter="bnMouseE('up')" @mouseleave="bnMouseL('up')" class="button" :class="{bnBg:upHoverFlag}">
              <i class="el-icon-plus">&nbsp;</i>注册
            </div>
          </el-col>
          <el-col :md="4">
            <div @mouseenter="bnMouseE('in')" @mouseleave="bnMouseL('in')" class="button" :class="{bnBg:inHoverFlag}">
              <i class="el-icon-arrow-right">&nbsp;</i>登录
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "vueHeader",
    data() {
      return {
        //菜单默认选择索引
        menuActiveIndex: '0',
        //dialog显示标志
        signUpVisi: false,
        signInVisi: false,
        //顶部按钮hover标志
        upHoverFlag: false,
        inHoverFlag: false,
      }
    },
    methods: {
      menuHandler(key, keyPath) {
        /**
         * 路由控制
         */
        if (key === '100') {
          this.$router.push({path: '/discovery'})
        }
        else if (key === '200') {
          this.$router.push({path: '/thought'})
        }
        else if (key === '300') {
          this.$router.push({path: '/note'})
        }
        else if (key === '400-100') {
          this.$router.push({path: '/func/crawler'})
        }
        else if (key === '400-200') {
          this.$router.push({path: '/func/low-poly'})
        }
        else if (key === '400-300') {
          this.$router.push({path: '/func/pdf'})
        }
      },
      //鼠标进入
      bnMouseE(k) {
        if (k === 'up') {
          this.upHoverFlag = true
        } else if (k === 'in') {
          this.inHoverFlag = true
        }
      },
      //鼠标离开
      bnMouseL(k) {
        if (k === 'up') {
          this.upHoverFlag = false
        } else if (k === 'in') {
          this.inHoverFlag = false
        }
      }
    }
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

  /*右侧按钮*/
  .button {
    border: 0;
    line-height: 60px;
    color: #666666;
    padding: 0 13px;
    margin: 0 0;
    font-size: 16px;
    font-weight: 700;
    height: 60px;
    text-align: center;
  }

  /*右侧按钮hover背景*/
  .bnBg {
    background-color: #cccccc;
  }

  /*消息提心*/
  .badge {
    line-height: 30px;
  }
</style>
