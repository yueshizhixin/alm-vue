<template>
  <div class="divMain">
    <transition name="el-zoom-in-top">
      <div v-show="comShow" class="transition-box">
        <el-row>
          <el-col :md="20">
            <el-row>
              <el-col :md="2">&nbsp;</el-col>
              <el-col :md="2">
                <img class="img-headNote" src="http://cdn.yueshizhixin.top/299243-106.jpg?imageView2/1/w/100/h/100">
              </el-col>
              <el-col :md="18" style="background-color: white;padding: 16px 20px;margin-bottom: 10px;">
                <el-row>
                  <el-col :md="12">
                    <span style="color: #909399;font-size: 16px;">
                      来自关注:和泉纱雾
                    </span>
                    <br>
                    <span style="color: #303133;font-size: 18px;">和泉纱雾</span>
                    &nbsp;
                    <span style="color: #606266;font-size: 16px;">学习使人落后</span>

                  </el-col>
                  <el-col :md="12" align="right">
                    <el-tag>动漫</el-tag>
                    <el-tag type="success">日本</el-tag>
                    <el-tag type="info">二次元</el-tag>
                    <el-tag type="warning">樱花</el-tag>
                    <el-tag type="danger">和泉纱雾</el-tag>
                  </el-col>
                </el-row>

                <el-row style="margin-top: 9px">
                  <el-col :md="12">
                    <span style="color: #303133;font-size: 20px;font-weight: 700">
                      如何评价《秒速5厘米》这部动漫?
                    </span>
                  </el-col>
                  <el-col :md="12" align="right">
                    <span style="color: #909399;font-size: 16px;">今天 14:22</span>
                  </el-col>
                </el-row>

                <el-row style="margin-top: 9px">
                  <el-col :md="24">
                    <span style="color: #303133;font-size: 16px;">
                      萨尔电之所以死亡还在电，是因为这个技能做出来的时候，萨尔还是可以中单的一个英雄，当时的萨尔，电永远75蓝耗，中路无限消耗，初始攻击也不低，血强，电是给你打钱的，你电死一个兵，其他兵得继续给你电吧？所以就这样设计了。
                    </span>
                  </el-col>

                </el-row>

                <el-row style="margin-top: 9px">
                  <el-col :md="3">
                    <el-button @click="plain=false" type="primary" plain size="small">
                      <i class="iconfont icon-less"></i>&nbsp;&nbsp;26
                    </el-button>
                  </el-col>
                  <el-col :md="3">
                    <el-button class="bn-note-op" icon="iconfont icon-iccomm">
                      <!--<i class="iconfont icon-iccomm">&nbsp;</i>-->
                      &nbsp;1165+
                    </el-button>

                  </el-col>
                  <el-col :md="3">
                    <el-button class="bn-note-op" icon="iconfont icon-iccomm">
                      <!--<i class="iconfont icon-iconfontfenxiang">-->
                      &nbsp;分享
                      <!--</i>-->
                    </el-button>
                  </el-col>
                  <el-col :md="3">
                    <el-button class="bn-note-op" icon="iconfont icon-favorite">
                      <!--<i class="iconfont icon-favorite">-->
                      &nbsp;收藏
                      <!--</i>-->
                    </el-button>
                  </el-col>
                  <el-col :md="9">&nbsp;</el-col>
                  <el-col :md="3">
                    <el-button class="bn-note-op" icon="iconfont icon-close">
                      不看
                    </el-button>

                  </el-col>
                </el-row>
              </el-col>
            </el-row>


          </el-col>

          <el-col :md="4" style="background-color: white">

            <p>我的收藏</p>
            <p>我的关注</p>

          </el-col>
        </el-row>


      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        comShow: false,
      }
    },
    mounted() {
      this.comShow = true
    }
  }
</script>

<style scoped>
  .bn-note-op {
    border: 0;
    text-align: center;
  }

</style>
