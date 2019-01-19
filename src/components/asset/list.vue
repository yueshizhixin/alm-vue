<template>
  <div class="divMain">
    <transition name="el-zoom-in-top">
      <div v-show="aniShow" class="transition-box">
        <el-row>
          <el-col :md="18" id="notes">
            <el-row>
              <el-col :md="5" :sm="12" :xs="24" v-for="(o, i) in songs" :key="i" :offset="i%4===0 ? 0 : 1">
                <el-card :body-style="{ padding: '0px' }">
                  <img :src="o.url" class="image">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">风的清</time>
                      <el-button type="text" class="button">选择</el-button>
                    </div>
                  </div>
                  <div v-if="i%4===3"><br></div>
                </el-card>
              </el-col>
            </el-row>
            <input type="button" class="addMoreBtn" value="加载更多"/>
          </el-col>

          <el-col :md="4" class="side-right" :style="{left:sideRight+'px !important'}">
            <transition name="el-fade-in-linear">
              <div v-show="aniShow2" class="transition-box">
                <div>
                  <el-row class="srdiv">
                    <el-col :md="12">
                      <img
                        style="padding: 0 20px 0 20px;border-radius:50%; width: calc(100% - 40px);   display: block;"
                        src="http://cdn.yueshizhixin.top/248986-106.jpg?imageView2/1/w/500/h/500" class="image ">
                    </el-col>
                    <el-col :md="12">
                      <div>
                        <span style="color: #303133;font-size: 28px;    font-weight: 500;" class="">ALM</span>
                      </div>
                      <div>
                        <span style="color: #909399; margin-top: 20px;font-size: 14px;" class="">人类为何而存在</span>
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
    name: "list",
    data() {
      return {
        aniShow: false,//动画显示
        aniShow2: false,//动画显示

        sideRight: 0,//右侧

        tags: [],//所有标签

        songs: [
          {url: 'http://cdn.yueshizhixin.top/299243-106.jpg?imageView2/2/h/200'},
          {url: 'http://cdn.yueshizhixin.top/41795-106.jpg?imageView2/2/h/200'},
          {url: 'http://cdn.yueshizhixin.top/92595-106.jpg?imageView2/2/h/200'},
          {url: 'http://cdn.yueshizhixin.top/231813-106.jpg?imageView2/2/h/200'},
          {url: 'http://cdn.yueshizhixin.top/232131-106.jpg?imageView2/2/h/200'},
          {url: 'http://cdn.yueshizhixin.top/44215-106.jpg?imageView2/2/h/200'},
          {url: 'http://cdn.yueshizhixin.top/231751-106.jpg?imageView2/2/h/200'},
          // {url: 'http://cdn.yueshizhixin.top/213777-106.jpg?imageView2/2/h/200'},
          {url: 'http://cdn.yueshizhixin.top/248986-106.jpg?imageView2/2/h/200'},
          {url: 'http://cdn.yueshizhixin.top/249873-106.jpg?imageView2/2/h/200'},
          {url: 'http://cdn.yueshizhixin.top/259354-106.jpg?imageView2/2/h/200'},
        ]
      }

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

      //hover效果
      mouseenterM(id, layer) {
        if (layer === 1) {
          this.tags.forEach(x => {
            if (x.id === id) {
              x.hover = 1
            }
            else {
              x.hover = 0
            }
            Array.from(x.children).forEach(y => {
              y.hover = 0
            })
          })
        } else if (layer === 2) {
          this.tags.forEach(x => {
            x.hover = 0
            Array.from(x.children).forEach(y => {
              if (y.id === id) {
                y.hover = 1;
              }
              else {
                y.hover = 0;
              }
            })
          })
        }
      },
      mouseleaveM(id, layer) {
        if (layer === 1) {
          this.tags.find(x => x.id === id).hover = 0
        }
        else if (layer === 2) {
          this.tags.forEach(x => {
            let item = x.children.find(y => y.id === id)
            if (item) {
              item.hover = 0
              return
            }
          })
        }
      },

      //标签点击
      clcikTagStyle(id, layer) {
        console.log('id=', id, 'layer', layer)
        //第一层
        if (layer === 1) {
          let tag = this.tags.find(x => x.id === id);
          this.tags.forEach(x => x.open = 0);
          this.tags.forEach(x => {
            x.children.forEach(y => {
              y.open = 0
            })
          });
          tag.open = 1
        } else if (layer === 2) {
          this.tags.forEach(x => {
            x.open = 0;
            x.children.forEach(y => {
              y.open = 0;
              if (y.id === id) {
                y.open = 1
                x.open = 1
              }
            })
          })
        }
      },


      //获取所有标签
      getTags() {
        this.tags = []
        let data = [{
          id: 1,
          layer: 1,
          name: "壁纸",
          parentId: 0,
          sequence: 10,
          children: [],
          open: 0,
          hover: 0,
        }, {
          id: 2,
          layer: 1,
          name: "头像",
          parentId: 0,
          sequence: 1,
          children: [],
          open: 0,
          hover: 0,
        },]
        this.tags.push(...data)
      },
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

</style>
