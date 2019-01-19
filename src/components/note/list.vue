<template>
  <div class="divMain" id="item1">
    <transition name="el-zoom-in-top" id="item2">
      <div v-show="aniShow" class="transition-box" id="item3">
        <el-row style="z-index: 10" id="item4">
          <el-col :md="18">
            <note-profile-templ v-for="item of notes" :item="item" :self="self"></note-profile-templ>
            <input type="button" class="addMoreBtn" @click="getMoreNote" value="加载更多"/>
          </el-col>
          <el-col :md="4" class="side-right" :style="{left:sideRight+'px !important'}">
            <transition name="el-fade-in-linear">
              <div v-show="aniShow2" class="transition-box">
                <div>
                  <el-row class="srdiv">
                    <el-col :md="12">
                      <img
                        style="padding: 0 20px 0 20px;width: 100px;border-radius:50%;"
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
                      <div class="lidiv1" @click="getNoteByTag(item.id,item.layer)"
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
                          <div class="lidiv2" @click="getNoteByTag(x.id,x.layer)"
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
  import noteProfileTempl from "@comp/note/templ/profile"

  export default {
    name: "noteList",
    components: {noteProfileTempl},
    data() {
      return {
        sideRight: 0,//右侧导航栏

        self: true,//是否查看自己的笔记
        aniShow: false,//加载动画
        aniShow2: false,//加载动画
        tagType: ['success', 'danger', 'info', '', 'warning'],

        tags: [],//所有标签
        tagId: 0,//当前点击标签

        notes: [
          {
            id: 1,
            from: '来自关注:和泉纱雾',
            author: '和泉纱雾',
            authorImg: 'http://cdn.yueshizhixin.top/299243-106.jpg?imageView2/1/w/100/h/100',
            authorImg2: 'http://cdn.yueshizhixin.top/299243-106.jpg?imageView2/1/w/250/h/120',
            description: '学习使人落后',
            tags: [{'tag': '动漫'}, {'tag': '日本'}, {'tag': '二次元'}, {'tag': '樱花'}, {'tag': '和泉纱雾'}],
            title: '如何评价《秒速5厘米》这部动漫?',
            logotxt: '秒速5厘米想要传达的是  仅仅相爱并不能打破一切阻隔  爱情并不像说起来那么简单  爱的力量在现实面前常常显得异常渺小。  不能天天在一起 不代表不想念；  天天都能见面  不代表心的距离也如身体距离那么近。',
            time: '今天 14:45',
            agreeCount: '8k',
            isAgree: true,
            commCount: '16k',
            isComm: false,
            shareCount: '36',
            isShare: true,
            collectCount: '10k',
            isCollect: false,
          },

        ],
      }
    },
    mounted() {
      this.getMoreNote()
      this.getMoreNote()
      //动画
      this.aniShow = true
      setTimeout(() => {
        this.aniShow2 = true
      }, glb.time.aniShow2)

      //右侧
      this.sideRight = this.sideRightM()

      // window.addEventListener('scroll', () => {
      //   console.log('getMoreAuto')
      //   let item = document.getElementById('notes')
      //   // let scrollTop = window.scrollY
      //   // let scrollHeight = item.offsetHeight;
      //   // let windowHeight = document.body.clientHeight;
      //   // var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      //   let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      //   this.$nextTick(() => {
      //     // console.log('获取1',document.getElementById("item1").scrollTop)
      //     // console.log('获取2',document.getElementById("item2").scrollTop)
      //     console.log('获取3', document.getElementById("item3").scrollTop)
      //     console.log('获取4', document.getElementById("item4").scrollTop)
      //     console.log('获取5', document.querySelector('.divMain').scrollTop)
      //     // scrollTop=document.getElementById("item").scrollTop
      //   });
      //   let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      //   let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      //   console.log('scrollTop', scrollTop)
      //   console.log('scrollHeight', scrollHeight)
      //   console.log('windowHeight', windowHeight)
      //   // console.log('document.documentElement.scrollTop', document.documentElement.scrollTop || document.body.scrollTop)
      //   // console.log('document.body.scrollTop', window.document.body.scrollTop)
      //   // console.log('window.pageYOffset', window.pageYOffset)
      //   // if (scrollTop + windowHeight >= scrollHeight - 100) {
      //   //   console.log('自动加载')
      //   //   // item.style.height = parseInt(item.style.height) + 1000 + "px"
      //   //   this.getMoreNote()
      //   // }
      // }, true)

      // this.getTags()

    }
    ,
    destroyed() {
      window.removeEventListener('scroll', this.getMoreAuto)
    }
    ,
    computed: {
      sideRightTop2() {
        //基础+pad*2+button*3+margin
        return 80 + 20 * 2 + 34 * 3 + 10
      }
    }
    ,
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
      }
      ,

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
      }
      ,
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
      }
      ,

      //获取所有标签
      getTags() {
        glb.get(this, '/tag', {}, (data) => {
          console.log(data)
          this.tags = []
          if (data.code === 200) {
            let all = {
              id: 0,
              layer: 1,
              name: "全部",
              parentId: 0,
              sequence: 0,
              children: [],
              open: 0,
              hover: 0,
            }
            this.tags.push(all)
            let layer1Arr = data.data.filter(x => x.layer === 1)
            let layer2Arr = data.data.filter(x => x.layer === 2)
            layer2Arr.forEach(x => {
              x.open = 0
              x.hover = 0
            })
            layer1Arr.forEach(x1 => {
              x1.children = (layer2Arr.filter(x2 => x2.parentId === x1.id) || [])
              x1.open = 0
              x1.hover = 0
              this.tags.push(x1)
            })
            console.log(this.tags)
          }
        })
      }
      ,

      //根据标签获取笔记
      getNoteByTag(id, layer) {
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
        console.log(this.tags)
        console.log('走接口');
      }
      ,

      //自动加载更多
      getMoreAuto() {
        // console.log('getMoreAuto')
        // let item = document.getElementById('notes')
        // // let scrollTop = window.pageYOffset
        // // let scrollHeight = item.offsetHeight;
        // // let windowHeight = document.body.clientHeight;
        // var scrollTop =
        //   window.pageYOffset ||
        //   document.documentElement.scrollTop ||
        //   document.body.scrollTop;
        // // var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        // var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        // console.log('scrollTop', scrollTop)
        // console.log('scrollHeight', scrollHeight)
        // console.log('windowHeight', windowHeight)
        // console.log('document.documentElement.scrollTop', document.documentElement.scrollTop || document.body.scrollTop)
        // console.log('document.body.scrollTop', window.document.body.scrollTop)
        // console.log('window.pageYOffset', window.pageYOffset)
        // if (scrollTop + windowHeight >= scrollHeight - 100) {
        //   console.log('自动加载')
        //   // item.style.height = parseInt(item.style.height) + 1000 + "px"
        //   this.getMoreNote()
        // }
      }
      ,

      //获取更多笔记
      getMoreNote() {
        for (let i = 0; i < 5; i++) {
          this.notes.push({
            id: 2,
            from: '来自关注:和泉纱雾',
            author: '和泉纱雾',
            authorImg: 'http://cdn.yueshizhixin.top/299243-106.jpg?imageView2/1/w/100/h/100',
            authorImg2: 'http://cdn.yueshizhixin.top/299243-106.jpg?imageView2/1/w/250/h/120',
            description: '学习使人落后',
            tags: [{'tag': '动漫'}, {'tag': '日本'}, {'tag': '二次元'}, {'tag': '樱花'}, {'tag': '和泉纱雾'}],
            title: '如何评价《秒速5厘米》这部动漫?',
            logotxt: '秒速5厘米想要传达的是  仅仅相爱并不能打破一切阻隔  爱情并不像说起来那么简单  爱的力量在现实面前常常显得异常渺小。  不能天天在一起 不代表不想念；  天天都能见面  不代表心的距离也如身体距离那么近。',
            time: '今天 14:45',
            agreeCount: '8k',
            isAgree: true,
            commCount: '16k',
            isComm: false,
            shareCount: '36',
            isShare: true,
            collectCount: '10k',
            isCollect: false,
          },)
        }
      }
      ,


      test() {

      }
    }
    ,
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

  /**
    右侧列表
   */
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

  .image {
    width: calc(100% - 40px);
    display: block;
  }

  /*加载更多*/
  .addMoreBtn {
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-weight: normal;
    border: 0;
    background-color: white;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1)
  }
</style>
