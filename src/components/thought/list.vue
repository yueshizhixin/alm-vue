<template>
  <div class="divMain">
    <transition name="el-zoom-in-top">
      <div v-show="aniShow" class="transition-box">
        <el-tabs type="border-card" stretch="stretch" @tab-click="tabHandler">
          <el-tab-pane :key="1">
            <span slot="label"><i class="iconfont icon-icon_puzzle">&nbsp;</i>经典问题</span>

            <!--lazy="true" 除第一个外其他延迟渲染-->
            <transition name="el-zoom-in-top">
              <el-tabs v-show="actPanShow==='0'" :tab-position="panelPosition">
                <el-tab-pane>
                  <span slot="label">八皇后问题</span>
                  八皇后问题
                </el-tab-pane>
                <el-tab-pane>
                  <span slot="label">银行家问题</span>
                  银行家问题
                </el-tab-pane>
                <el-tab-pane>
                  <span slot="label">理发师问题</span>
                  理发师问题
                </el-tab-pane>
                <el-tab-pane>
                  <span slot="label">约瑟夫问题</span>
                  约瑟夫问题
                </el-tab-pane>
                <el-tab-pane>
                  <span slot="label">中国邮递员问题</span>
                  中国邮递员问题
                </el-tab-pane>

              </el-tabs>
            </transition>
          </el-tab-pane>
          <el-tab-pane :key="2">
            <span slot="label"><i class="iconfont icon-kuailianshishujujiegoucopy-">&nbsp;</i>数据结构</span>
            <transition name="el-zoom-in-top">
              <el-tabs v-show="actPanShow==='1'" :tab-position="panelPosition">

                <el-tab-pane>
                  <span slot="label">二叉堆</span>
                  二叉堆
                </el-tab-pane>

              </el-tabs>
            </transition>
          </el-tab-pane>
          <el-tab-pane :key="3">
            <span slot="label"><i class="iconfont icon-algorithm">&nbsp;</i>算法</span>
            <transition name="el-zoom-in-top">
              <el-tabs v-show="actPanShow==='2'" :tab-position="panelPosition">
                <el-tab-pane>
                  <span slot="label">A Star</span>
                  A Star
                </el-tab-pane>
                <el-tab-pane>
                  <span slot="label">KMP</span>
                  KMP
                </el-tab-pane>
                <el-tab-pane>
                  <span slot="label">归并排序</span>
                  归并排序
                </el-tab-pane>
              </el-tabs>
            </transition>
          </el-tab-pane>
        </el-tabs>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "thoughtList",
    data() {
      return {
        /*tab*/
        //ani
        aniShow: false,
        actPanShow: '0',
        stretch: true,
        //position
        tabPosition: 'top',
        panelPosition: 'left',

      }
    },
    methods: {
      tabHandler(tab) {
        this.actPanShow = tab.index;
        console.log(tab.index)
      }
    },
    mounted() {
      this.aniShow = true
    },
  }
</script>

<style scoped>

</style>
