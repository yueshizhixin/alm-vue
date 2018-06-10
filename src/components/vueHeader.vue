<template>
  <div>
    <el-row>
      <el-col :span="6">
        &nbsp;
      </el-col>
      <el-col :span="18">
        <el-menu :default-active="menuActiveIndex" class="el-menu-demo" mode="horizontal" @select="menuHandler">

          <el-menu-item index="100">
            <i class="iconfont icon-wangluo">&nbsp;</i>发现
          </el-menu-item>
          <el-menu-item index="200">
            <i class="iconfont icon-bulbthoughtidea">&nbsp;</i>思想
          </el-menu-item>
          <el-menu-item index="300">
            <i class="iconfont icon-form">&nbsp;</i>笔记
          </el-menu-item>

          <el-submenu index="400">
          <template slot="title"><i class="iconfont icon-gengduo">&nbsp;</i>功能</template>
          <el-menu-item index="400-100"><i class="iconfont icon-crawler">&nbsp;&nbsp;</i>爬虫</el-menu-item>
          <el-menu-item index="400-200"><i class="iconfont icon-listblock">&nbsp;&nbsp;</i>LOW POLY</el-menu-item>
          <el-menu-item index="400-300"><i class="iconfont icon-similarproduct">&nbsp;&nbsp;</i>PDF格式转换</el-menu-item>
          </el-submenu>
          <el-submenu index="500">
          <template slot="title"><i class="iconfont icon-icondownload">&nbsp;</i>资源</template>
          <el-menu-item index="500-100"><i class="iconfont icon-pic">&nbsp;&nbsp;</i>壁纸</el-menu-item>
          </el-submenu>

          <!--<el-menu-item index="3" disabled>消息中心</el-menu-item>-->
          <!--<el-menu-item index="4"><a href="">订单管理</a></el-menu-item>-->
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "vueHeader",
    data() {
      return {
        menuActiveIndex: '0',
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
      }
    }
  }
</script>

<style scoped>

</style>
