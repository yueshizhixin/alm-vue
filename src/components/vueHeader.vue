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
          <el-col v-if="isSign===1" :md="6"
                  style="margin-top:17px;color: rgb(102, 102, 102);right:0;position: fixed;float: right;">
            <div>
              <span>ALM</span>
            </div>
          </el-col>
        </el-row>
      </el-col>

    </el-row>

    <!--注册登录-->
    <el-dialog center :visible.sync="dialogFormVisible"
               :close-on-click-modal="false"
               :modal-append-to-body="false"
               style="width: 800px;left: calc(50% - 400px);"
    >
      <el-form>
        <el-form-item>
          <el-input v-model="user.acc" autocomplete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="user.pwd" autocomplete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :md="16">
              <label>
                <el-input v-model="user.captcha" autocomplete="off" placeholder="验证码"></el-input>
              </label>
            </el-col>
            <el-col :md="8" style="text-align: right">
              <img @click="getCaptcha()" id="imgCaptcha" style="width: 100px;height: 39px;" src=""/>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" style="width: 100%" @click="signIn()">登&nbsp;&nbsp;&nbsp;录
        </el-button>
      </div>
    </el-dialog>

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

        isSign: -1,//是否登录
        dialogFormVisible: false,//登录框
        user: {
          acc: '',
          pwd: '',
          captcha: '',
        },

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
      this.signFresh()
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
      getCaptcha() {
        document.getElementById("imgCaptcha").src = glb.preUrl + '/captcha/img?' + Math.random()
      },
      //登录
      signIn() {
        glb.post(this, '/user/tag=signIn', this.user, (data) => {
          if (data.code === 200) {
            console.log(data)
            if (data.ok === 1) {
              this.dialogFormVisible = false
            }
            glb.alert_info(this, data.msg)
          }
        })

      },
      //刷新用户
      signFresh() {
        glb.post(this, '/user/tag=signFresh', {}, (data) => {
          if (data.code === 200) {
            console.log(data)
            if (data.ok === 0) {
              this.dialogFormVisible = true
              setTimeout(() => {
                this.getCaptcha()
              }, 200)
            }
          }
        })
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
