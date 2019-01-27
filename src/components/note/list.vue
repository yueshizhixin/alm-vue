<template>
  <div class="divMain" id="note-list-divMain">
    <transition name="el-zoom-in-top">
      <div v-show="aniShow" class="transition-box">
        <el-row style="z-index: 10 " class="myrow">
          <el-col :md="18">
            <div @click="setScrollTop">
              <note-profile-templ v-for="item of notes" :item="item"></note-profile-templ>
            </div>
            <input v-show="page.isLoading===1" type="button" class="addMoreBtn" value="加载中..."/>
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
    <go-top-btn :show="go_x_btn_show" :refId="'note-list-divMain'" ></go-top-btn>
  </div>
</template>
<script>
  import glb from "@comp/GLOBAL"
  import noteProfileTempl from "@comp/note/templ/profile"
  import goTopBtn from "@comp/system/templ/goTopBtn"

  export default {
    name: "noteList",
    components: {noteProfileTempl, goTopBtn},
    data() {
      return {
        go_x_btn_show: false,
        glb: glb,
        sideRight: 0,//右侧导航栏
        headImg: '',
        tip: '',
        author: '',

        aniShow: false,//加载动画
        aniShow2: false,//加载动画
        tagType: ['success', 'danger', 'info', '', 'warning'],

        tags: [],//所有标签
        tagId1: 0,//当前点击标签
        tagId2: 0,//当前点击标签
        page: JSON.parse(JSON.stringify(glb.page)),

        notes: [],
      }
    },
    created() {
      console.log('note/list created')
      sessionStorage['needSign'] = 0
      this.dataInit()
    },
    mounted() {
      console.log('note/list mounted')

      //动画
      this.aniShow = true
      setTimeout(() => {
        this.aniShow2 = true
      }, glb.time.aniShow2)

      //右侧
      this.sideRight = this.sideRightM()

      this.getTags()
      this.getMoreNote()
      document.getElementById('note-list-divMain').addEventListener('scroll', this.scroll, true)
    },
    activated() {
      console.log('note/list activated')
      document.getElementById('note-list-divMain').scrollTop = parseInt(sessionStorage['scrollTop']) || 0
    },
    destroyed() {
      console.log('note/list destroyed')
      document.getElementById('note-list-divMain').removeEventListener('scroll', this.scroll)
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

      //获取所有标签
      getTags() {
        glb.get(this, '/tag', {}, (data) => {
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
            this.tags.find(x => x.id === 0).open = 1
          }
        })
      },

      //根据标签获取笔记
      getNoteByTag(id, layer) {
        //第一层
        this.tagId1 = 0
        this.tagId2 = 0
        if (layer === 1) {
          let tag = this.tags.find(x => x.id === id);
          this.tags.forEach(x => x.open = 0);
          this.tags.forEach(x => {
            x.children.forEach(y => {
              y.open = 0
            })
          });
          tag.open = 1
          this.tagId1 = tag.id
          //如果有第二层 返回
          if (tag.children.length > 0) {
            console.log('有子层 不改变')
            return
          }
        } else if (layer === 2) {
          this.tags.forEach(x => {
            x.open = 0;
            x.children.forEach(y => {
              y.open = 0;
              if (y.id === id) {
                y.open = 1
                x.open = 1
                this.tagId1 = x.id
                this.tagId2 = y.id
              }
            })
          })
        }
        if (this.tagId1 === Number(sessionStorage['note-list-pre-tagId1'] || 0)
          && this.tagId2 === Number(sessionStorage['note-list-pre-tagId2'] || 0)
        ) {
          console.log('与上次相同')
          return
        }
        this.page = JSON.parse(JSON.stringify(glb.page))
        console.log(this.page)
        this.getMoreNote()
      },

      //获取更多笔记
      getMoreNote() {
        if (!this.page.haxNext || this.page.isLoading) {
          return
        }
        console.log('自动加载')

        if (this.tagId1 !== Number(sessionStorage['note-list-pre-tagId1'] || 0)
          || this.tagId2 !== Number(sessionStorage['note-list-pre-tagId2'] || 0)
        ) {
          this.notes = []
        }
        sessionStorage['note-list-pre-tagId1'] = this.tagId1
        sessionStorage['note-list-pre-tagId2'] = this.tagId2
        this.page.isLoading = true
        glb.get(this, '/note?offset=' + this.page.offset + '&limit=' + this.page.limit + '&tagId1=' + this.tagId1 + '&tagId2=' + this.tagId2, {}, (data) => {
          data.data.forEach(x => {
            x.tags = []
            if (x.tagName1) {
              x.tags.push(x.tagName1)
            }
            if (x.tagName2) {
              x.tags.push(x.tagName2)
            }
            x.agreeCount = this.randomNum()
            x.commCount = this.randomNum()
            x.shareCount = this.randomNum()
            x.collectCount = this.randomNum()
            // sessionStorage['note/' + x.id] = JSON.stringify(x)
          })
          let len = Array.from(data.data).length
          if (len < this.page.limit || len === 0) {
            this.page.haxNext = false
          }
          this.notes.push(...data.data);
          this.page.offset++
          this.page.isLoading = false
          console.log(data)
        });

      },

      setScrollTop() {
        sessionStorage['scrollTop'] = document.getElementById('note-list-divMain').scrollTop
      },

      scroll() {
        // console.log('note-list scroll')
        let scrollTop = document.getElementById('note-list-divMain').scrollTop
        let scrollHeight = document.getElementById('note-list-divMain').scrollHeight
        let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight - 300) {
          this.getMoreNote()
        }
        if (!this.go_x_btn_show && scrollTop >= 150) {
          this.go_x_btn_show = true
        }
      },

      randomNum() {
        return Math.floor(Math.random() * 1000)
      },
      test() {

      }
    },
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

  .tip {
    color: #909399;
    margin-top: 20px;
    font-size: 14px;
  }
</style>
