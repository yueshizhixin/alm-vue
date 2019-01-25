<template>
  <div class="divMain" :id="vueId">
    <transition name="el-zoom-in-top">
      <div v-show="aniShow" class="transition-box">
        <el-row class="myrow">
          <el-col :md="24" class="note-body">
            <el-card>
              <el-row style="align-items: flex-end;display: flex">
                <!--图片列-->
                <el-col :md="1" class="my-row" :style="{'max-width': max_min+'px','min-width': max_min+'px'}"
                        style="display: flex;align-items: center;">
                  <img style="border-radius:50%;width: 80px" :src="item.authorImg">
                </el-col>
                <el-col :md="23" class="my-row" align="left"
                        :style="{'max-height': max_min+'px','min-height': max_min+'px'}"
                        style="margin-left: 4px;height: 100% !important;">
                  <!--标题栏-->
                  <el-row style="margin-top: 4px">
                    <!--标题-->
                    <el-col :md="12">
                      <span class="note-tile">
                        {{item.title}}
                      </span>
                    </el-col>
                    <!--标签-->
                    <el-col :md="12" align="right">
                      <el-tag v-for="(p,i) of item.tags" :key="i" style="margin-left: 7px;"
                              :type="tagType[Math.floor((Math.random()*5))]"> {{p}}
                      </el-tag>
                    </el-col>
                  </el-row>

                  <el-row style="position: absolute;bottom: 0;right: 0;left:89px;">

                    <el-col :md="20">
                      <!--作者-->
                      <el-row>
                        <el-col :md="18">
                          <span class="note-author">{{item.author}}</span>
                        </el-col>
                      </el-row>
                      <!--时间-->
                      <el-row>
                        <span style="font-size: 14px;"
                              class="note-time">{{this.glb.time.format(item.updateTime)}}</span>
                      </el-row>
                    </el-col>
                    <!--返回按鈕-->
                    <el-col :md="4" align="right">
                      <el-button size="small" @click="gotoNote" icon="el-icon-arrow-left"
                                 style="position: absolute;bottom: 0;right:0;"></el-button>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
        <el-row style="z-index: 10" class="myrow">
          <el-col :md="24">
            <div>
              <mavon-editor
                :value="item.content"
                :subfield="prop.subfield"
                :defaultOpen="prop.defaultOpen"
                :toolbarsFlag="prop.toolbarsFlag"
                :editable="prop.editable"
                :scrollStyle="prop.scrollStyle"></mavon-editor>
            </div>
          </el-col>
        </el-row>
      </div>
    </transition>

    <go-back-btn :show="go_x_btn_show"></go-back-btn>
    <go-top-btn :show="go_x_btn_show" :refId="vueId"></go-top-btn>
  </div>
</template>

<script>
  import glb from "@comp/GLOBAL"
  import commh from '@/assets/js/communicatHandler'
  import goBackBtn from "@comp/system/templ/goBackBtn"
  import goTopBtn from "@comp/system/templ/goTopBtn"

  export default {
    name: "note_view",
    components: {goBackBtn, goTopBtn},
    data() {
      return {
        vueId:'note-view-divMain',
        glb: glb,
        /**
         * css
         */
        max_min: 85,
        aniShow: false,
        go_x_btn_show: false,

        tagType: ['success', 'danger', 'info', '', 'warning'],
        defaultOpen: 'preview',

        /**
         * 笔记部分
         */
        id: 0,
        item: {},
      }
    },
    computed: {
      prop() {
        return {
          subfield: false,// 单双栏模式
          defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域
          editable: false,
          toolbarsFlag: false,
          scrollStyle: true
        }
      }
    },
    created() {
      sessionStorage['needSign'] = null
    },
    mounted() {
      //刷新页面后重新加载
      sessionStorage['note/' + Number(this.$route.params.id)] = ``
    },
    activated() {
      this.aniShow = true
      this.go_x_btn_show = false
      this.getNote()
    },
    deactivated() {
      this.aniShow = false
    },
    methods: {
      //转到首页
      gotoNote() {
        this.$router.push({path: '/note'})
      },

      //获取笔记
      getNote() {
        this.item = {}

        this.id = Number(this.$route.params.id)
        let item = sessionStorage['note/' + this.id]
        //session中存在
        if (item) {
          this.item = JSON.parse(item)
          this.getNoteBack()
        }
        //session不存在或者刷新后
        else {
          glb.get(this, '/note/' + this.id, {}, (data) => {
            console.log(data)
            if (data.code === 200 && data.ok === 1) {
              data.data.tags = []
              if (data.data.tagName1) {
                data.data.tags.push(data.data.tagName1)
              }
              if (data.data.tagName2) {
                data.data.tags.push(data.data.tagName2)
              }
              sessionStorage['note/' + this.id] = JSON.stringify(data.data)
              this.item = data.data
              this.getNoteBack()
            }
          })
        }
      },
      //获取笔记后回调
      getNoteBack() {
        this.item.author = sessionStorage['author']
        this.item.authorImg = sessionStorage['authorImg']
        document.getElementById(this.vueId).addEventListener('scroll', this.scroll, true)
      },
      scroll() {
        let scrollTop = document.getElementById(this.vueId).scrollTop
        let scrollHeight = document.getElementById(this.vueId).scrollHeight
        let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        if (!this.go_x_btn_show && scrollTop >= 150) {
          this.go_x_btn_show = true
        }
      },
    }
  }
</script>

<style scoped>
</style>
