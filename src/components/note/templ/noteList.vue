<template>
  <div>
    <el-row v-for="item of notes" :key="item.id">
      <el-col :md="2">&nbsp;</el-col>
      <el-col :md="2">
        <div class="img-headNote" @mouseenter="imgMouseE(item.id)" @mouseleave="imgMouseL(item.id)">
          <img :src="item.authorImg">
          <el-collapse-transition>
            <el-card v-show="item.authorMsgShow" class="img-headCard" :body-style="{ padding: '8px 6px' }">
              <el-row>
                <img :src="item.authorImg2" style="height: 100px;" class="image">
              </el-row>
              <el-row style="padding: 8px;">
                <span class="note-author" style="font-weight: 500">{{item.author}}</span>
                <br>
                <span class="note-signature" style="font-size: 14px">{{item.description}}</span>
              </el-row>
              <el-row class="bottom clearfix" style="padding:2px 8px;margin-top: 0">
                <el-col :md="12">
                  <el-button type="primary" size="medium" icon="el-icon-plus">关注</el-button>
                </el-col>
                <el-col :md="12" style="text-align: right">
                  <el-button type="info" size="medium" icon="el-icon-message">私信</el-button>
                </el-col>
              </el-row>
            </el-card>
          </el-collapse-transition>
        </div>
      </el-col>
      <el-col :md="18" class="note-body">
        <el-card>
          <el-row>
            <el-col :md="12" v-show="!self">
                    <span style="color: #909399;font-size: 16px;">
                      {{item.from}}
                    </span>
              <br>
              <span class="note-author">{{item.author}}</span>
              <span class="note-signature">
                        {{item.description}}
                    </span>

            </el-col>
            <el-col :md="12" align="right" v-if="!self">
              <el-tag v-for="(p,i) of item.tags" :key="i" style="margin-left: 7px;"
                      :type="tagType[Math.floor((Math.random()*5))]">
                {{p.tag}}
              </el-tag>
            </el-col>
          </el-row>


          <el-row style="margin-top: 9px" v-if="!self">
            <el-col :md="18">
                    <span class="note-tile">
                      {{item.title}}
                    </span>
            </el-col>
            <el-col :md="6" align="right">
              <span class="note-time" v-show="!self">{{item.time}}</span>
            </el-col>
          </el-row>
          <el-row style="margin-top: 6px" v-else>
            <el-col :md="12">
                    <span class="note-tile">
                      {{item.title}}
                    </span>
            </el-col>
            <el-col :md="12" align="right">
              <el-tag v-for="(p,i) of item.tags" :key="i" style="margin-left: 7px;"
                      :type="tagType[Math.floor((Math.random()*5))]">

                {{p.tag}}
              </el-tag>
            </el-col>
          </el-row>
          <el-row :style="{'margin-top': selfMarTop+'px'}">
            <el-col :md="24">
                    <span style="color: #303133;font-size: 16px;">
                        {{item.logotxt}}
                    </span>
            </el-col>
          </el-row>
          <el-row style="margin-top: 9px">
            <el-col :md="4" :sm="4">
              <div v-if="item.isAgree && !self">
                <el-button class="bn-note-op" type="primary" plain icon="iconfont icon-less">&nbsp;&nbsp;{{item.agreeCount}}</el-button>
                <div>

                </div>
              </div>
              <div v-else>
                <el-button class="bn-note-op" icon="iconfont icon-less">&nbsp;{{item.agreeCount}}</el-button>
              </div>

            </el-col>
            <el-col :md="4" :sm="4">
              <div v-if="item.isComm && !self">
                <el-button class="bn-note-op" type="primary" plain icon="iconfont icon-iccomm">&nbsp;&nbsp;{{item.commCount}}</el-button>
              </div>
              <div v-else>
                <el-button class="bn-note-op" icon="iconfont icon-iccomm">&nbsp;&nbsp;{{item.commCount}}
                </el-button>
              </div>
            </el-col>
            <el-col :md="4" :sm="4">

              <div v-if="item.isShare && !self">
                <el-button class="bn-note-op" type="primary" plain
                           icon="iconfont icon-kuailianshishujujiegou">
                  &nbsp;&nbsp;{{item.shareCount}}
                </el-button>
              </div>
              <div v-else>
                <el-button class="bn-note-op" icon="iconfont icon-kuailianshishujujiegou">&nbsp;&nbsp;{{item.shareCount}}
                </el-button>
              </div>
            </el-col>
            <el-col :md="4" :sm="4">

              <div v-if="item.isCollect && !self">
                <el-button class="bn-note-op" type="primary" plain icon="iconfont icon-favorite">&nbsp;&nbsp;{{item.collectCount}}</el-button>
              </div>
              <div v-else>
                <el-button class="bn-note-op" icon="iconfont icon-favorite">&nbsp;&nbsp;{{item.collectCount}}
                </el-button>
              </div>
            </el-col>
            <el-col :md="4" :sm="4">&nbsp;</el-col>
            <el-col :md="4" :sm="4" v-if="!self">
              <el-button  class="bn-note-op" icon="iconfont icon-close">&nbsp;不看</el-button>
            </el-col>
            <el-col :md="4" :sm="4" v-else style="margin-top: 8px;">
              <span class="note-time" >{{item.time}}</span>
            </el-col>
          </el-row>
        </el-card>

      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    //笔记item,所有笔记,是否查看自己的笔记
    props: {
      notes:Array,
      self:Boolean,
    },
    name: "noteListItem",
    data() {
      return {
        tagType: ['success', 'danger', 'info', '', 'warning'],
      }
    },
    computed:{
      selfMarTop(){
        if(self) return 5;
        else return 9;
      }
    },
    methods: {
      imgMouseE(id) {
        if (self) return;
        let note = this.notes.find(note => note.id === id)
        note.authorMsgShow = true
      },
      imgMouseL(id) {
        if (self) return;
        this.notes.find(note => note.id === id).authorMsgShow = false
      },
    },
  }
</script>

<style scoped>
  /*卡片头像*/
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
