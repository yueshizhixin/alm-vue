<template>
  <div>
    <el-row>
      <el-col :span="4">&nbsp;</el-col>
      <el-col :span="12">
        <el-menu :default-active="menuActiveIndex" mode="horizontal" @select="menuHandler" @hover="menuHover"
                 class="menu">
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

      <el-col :span="8" align="right">
        <el-button class="button">
          <el-badge :value="12" class="item badge" :max="10">
            <i class="iconfont icon-iccomm"></i>&nbsp;评论
          </el-badge>
        </el-button>
        <el-button icon="el-icon-plus" class="button">注册</el-button>

        <el-button icon="el-icon-arrow-right" class="button">登录</el-button>
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
        //注册对话显示标志
        signUpVisi: false,
        signInVisi: false,
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

      menuHover(key, keyPath) {
        console.log(key)
      }

    }
  }
</script>

<style scoped>

  .menu {
    border-bottom: 0;

  }

  .menuItem {
    font-size: 19px;
  }

  .menuItemSub {
    font-weight: 500;
    font-size: 16px;
  }

  .button {
    border: 0;
    line-height: 60px;
    color: #909399;
    padding: 0 13px;
    margin: 0 0;
    font-size: 18px;
    font-weight: 700;
    height: 60px;
  }
  .badge{
    line-height: 30px;
  }
</style>
