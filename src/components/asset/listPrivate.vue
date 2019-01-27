<template>
  <div class="divMain" :id="vueId">
    <transition name="el-zoom-in-top">
      <div v-show="aniShow" class="transition-box">
        <el-row class="myrow">
          <el-col :md="20" id="notes">
            <el-row>
              <div :md="24" v-for="(item, index) in data" :key="index"
                   class="bg-div hvr-grow">
                <img :src="glb.imgFormat.bgFormat(glb,item.key)" class="bg-div-img">
                <div style="margin: 4px 12px 6px 12px;font-size: 17px">
                  <el-row style="margin-top: 0;">
                    <el-col :md="18" style="color: #909399;font-size: 14px;margin-top: 6px;">
                      {{glb.time.qiniuFormat(item.putTime)}}
                    </el-col>
                    <el-col :md="6" style="text-align: right;margin-top: 0px;">
                      <a href="http://www.baidu.com" target="new" class="a-btn">
                        <i class="el-icon-right"></i></a>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-row>
          </el-col>

          <el-col :md="4" class="side-right" :style="{left:sideRight+'px !important'}">
            <transition name="el-fade-in-linear">
              <div v-show="aniShow2" class="transition-box">
                <div>
                  <el-row class="srdiv">
                    <el-col :md="12">
                      <img @click="glb.goto_me" :src="headImg" class="image hvr-grow"
                           style="padding: 0 20px 0 20px;width: 100px;border-radius:50%;">
                    </el-col>
                    <el-col :md="12">
                      <div style="margin-top:5px;">
                        <span style="color: #303133;font-size: 28px;font-weight: 500;">
                          {{author}}
                        </span>
                      </div>
                      <div>
                        <div v-html="tip" style="margin-top: 7px;"></div>

                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div :style="{top:sideRightTop2+'px'} " class="srdiv">
                  <ul class="tagul">
                    <li v-for="item of tags" class="tagli lihoveron"
                        :class="{'lihoveron':item.hover===1,'lihoverout':item.hover===0,'liopen':item.open===1 && !item.children.find(x=>x.open===1)}">
                      <div class="lidiv1" @click="clcikTagStyle(item.id,item.layer)"
                           @mouseenter="mouseenterM(item.id,item.layer)"
                           @mouseleave="mouseleaveM(item.id,item.layer)">
                        <i v-show="item.open===0" class="el-icon-arrow-right">&nbsp;</i>
                        <i v-show="item.open===1 && item.children.length===0" class="el-icon-arrow-left">&nbsp;</i>
                        <i v-show="item.open===1 && item.children.length>0" class="el-icon-arrow-down">&nbsp;</i>
                        {{item.name}}
                      </div>
                      <ul v-show="item.children.length>0 && item.open===1" v-for="x of item.children" class="tagul">
                        <li class="tagli"
                            :class="{'lihoveron':x.hover===1,'lihoverout':x.hover===0,'liopen':x.open===1}">
                          <div class="lidiv2" @click="clcikTagStyle(x.id,x.layer)"
                               @mouseenter="mouseenterM(x.id,x.layer)"
                               @mouseleave="mouseleaveM(x.id,x.layer)">
                            <i v-show="x.open===0" class="el-icon-arrow-right">&nbsp;&nbsp;</i>
                            <i v-show="x.open===1" class="el-icon-arrow-left">&nbsp;&nbsp;</i>
                            {{x.name}}
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

            </transition>
          </el-col>
        </el-row>

      </div>
    </transition>
  </div>
</template>

<script>

  import glb from "@comp/GLOBAL"

  export default {
    name: "listPrivate",
    data() {
      return {
        vueId: 'asset-list-private-divMain',
        glb: glb,
        headImg: '',
        tip: '',
        author: '',
        aniShow: false,//动画显示
        aniShow2: false,//动画显示
        sideRight: 0,//右侧

        tags: [],//所有标签
        tagId1: 0,//当前点击标签
        tagId2: 0,//当前点击标签
        data: []
      }

    },
    created() {
      sessionStorage['needSign'] = 1
      this.dataInit()
    },
    mounted() {
      //动画
      this.aniShow = true
      setTimeout(() => {
        this.aniShow2 = true
      }, glb.time.aniShow2);

      //右侧
      this.sideRight = this.sideRightM()

      this.getTags()
      this.getData()

      document.getElementById(this.vueId).addEventListener('scroll', this.scroll, true)
    },
    destroyed() {
      console.log('note/asset destroyed')
      document.getElementById(this.vueId).removeEventListener('scroll', this.scroll)
    },
    computed: {
      sideRightTop2() {
        //基础+pad*2+button*3+margin
        return 80 + 20 * 2 + 34 * 3 + 10
      }
    },
    methods: {
      //右侧导航栏
      sideRightM() {
        //el-main pad 20px
        let w = document.body.clientWidth
        if (w > 1199) {
          return (w - 1199 - 20 * 2) / 2 - 20 * 2.5 + 1199 / 24 * 20
        }
        else {
          return w / 24 * 20
        }
      },
      dataInit() {
        let headImg = JSON.parse(sessionStorage['headImg'])
        this.headImg = headImg[Math.floor(Math.random() * headImg.length)]
        let tip = JSON.parse(sessionStorage['tip'])
        this.tip = tip[Math.floor(Math.random() * tip.length)]
        this.author = sessionStorage['author']
      },

      //hover效果
      mouseenterM(id, layer) {
      },
      mouseleaveM(id, layer) {
      },
      //标签点击
      clcikTagStyle(id, layer) {
      },
      //获取所有标签
      getTags() {
      },

      //获取图片
      getData() {
        glb.get(this, '/asset/private', {}, (data) => {
          let d = JSON.parse(data.data)
          d.sort((x, y) => {
            return y.putTime - x.putTime
          })
          this.data = d
        })
      },

      scroll() {
        console.log('asset-list private scroll')
      },

      test() {

      }
    }
  }
</script>

<style scoped>
  .tagli {
    list-style: none;
    color: #606266;
    font-size: 14px;
    font-weight: 500;
  }

  .tagul {
    padding-left: 0;
  }

  .lihoveron {
    background: #606266;
    color: white;
    font-size: 14px;
    font-weight: 700;
  }

  .lihoverout {
    background: white;
    color: #606266;
    font-size: 14px;
    font-weight: 500;
  }

  .lidiv1 {
    padding: 10px 0 10px 20px;
  }

  .lidiv2 {
    padding: 10px 0 10px 40px;
  }

  .liopen {
    background: #606266;
    color: white;
    font-size: 14px;
  }

  .side-right {
    top: 80px;
    position: fixed;
  }

  .srdiv {
    background-color: white;
    padding: 20px 0;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1);
    margin-bottom: 10px;
  }

  .side-right div button {
    border: 0;
    padding: 10px 20px;
    width: 100%;
    text-align: left;
    margin-left: 0;
  }

  /**
   * 背景图
   */
  .bg-div, .bg-div-img {
    width: 260px;
  }

  .bg-div {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1);
    background-color: white;
    margin: 0 40px 30px 0;
    float: left;
    border: 4px solid ghostwhite;
  }

  .a-btn {
    padding-top: 0;
    font-size: 16px;
    color: #3a8ee6;
    width: 100%;
    border: 0;
    background-color: white;
    text-decoration: none;
  }

</style>
