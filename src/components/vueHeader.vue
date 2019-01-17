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

    </el-row>
  </div>
</template>

<script>
  import glb from "@comp/GLOBAL"
  import {TweenLite} from 'gsap'//input框动画

  const searchWidthB = 250; //搜索框默认width
  const searchWidthF = 350; //搜索框focus width

  export default {
    name: "vueHeader",
    data() {
      return {
        serachWidth: searchWidthB,//搜索框长度
        menuActiveIndex: '0',//菜单默认选择索引

        signDigV: false,//显示注册登录
        opType: '',//注册还是登录

        tags: [],//所有标签

      }
    },
    computed: {
      //搜索框左边距
      searchLeft() {
        let w = document.body.clientWidth;
        // return  w * 16 / 24 * (10 / 24)
        return (w - 1199) / 2 + 1199 / 24 * 6
      },
    },
    mounted() {
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

      test() {

      }
    },
  }
</script>

<style scoped>

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

</style>
