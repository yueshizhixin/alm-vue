<template>
  <div class="divMain">
    <transition name="el-zoom-in-top">
      <div v-show="aniShow" class="transition-box">
        <el-row class="myrow">
          <el-col :md="24" class="note-body">
            <el-card>
              <el-row style="margin-top: 6px">
                <el-col :md="12">
                    <span class="note-tile">
                      {{item.title}}
                    </span>
                </el-col>
                <el-col :md="12" align="right">
                  <el-tag v-for="(p,i) of item.tags" :key="i" style="margin-left: 7px;"
                          :type="tagType[Math.floor((Math.random()*5))]"> {{p}}
                  </el-tag>
                </el-col>
              </el-row>
              <el-row style="align-items: flex-end;display: flex">
                <el-col :md="1" style="display: flex;align-items: center;max-width: 64px;min-width: 64px;">
                  <img style=";border-radius:50%;width: 48px" :src="item.authorImg">
                </el-col>
                <el-col :md="20" align="left">
                  <el-row><span class="note-author">{{item.author}}</span></el-row>
                  <el-row>
                    <span style="font-size: 14px;" class="note-time">{{this.glb.time.format(item.updateTime)}}</span>
                  </el-row>
                </el-col>

                <el-col :md="3" align="right">
                  <el-button size="small" @click="$router.back(-1)" icon="el-icon-arrow-left"></el-button>
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
  </div>
</template>

<script>
  import glb from "@comp/GLOBAL"

  export default {
    name: "note_view",
    data() {
      return {
        glb: glb,
        aniShow: false,

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
      this.aniShow = true
      this.getNote()

    },
    methods: {
      getNote() {
        this.id = Number(this.$route.params.id)
        let item = sessionStorage['note/' + this.id]
        if (item) {
          this.item = JSON.parse(item)
          this.item.author = sessionStorage['author']
          this.item.authorImg = sessionStorage['authorImg']
        }
        else {
          console.log('走接口查笔记')
        }
      }
    }
  }
</script>

<style scoped>

</style>
