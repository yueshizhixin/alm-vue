<template>
  <div>
    <el-row :key="item.id" :class="{'isTop':item.isTop===1}">
      <el-col :md="24" class="note-body">
        <el-card >
          <el-row style="margin-top: 6px">
            <el-col :md="18">
                    <span class="note-tile" style="cursor: pointer;" @click="$router.push({path: '/note/'+item.id})">
                      {{item.title}}
                    </span>
            </el-col>
            <el-col :md="6" style="text-align: right" :class="{'mobile-tag':glb.isMobile()}">
              <el-tag v-for="(p,i) of item.tags" :key="i" style="margin-left: 7px;"
                      :type="tagType[Math.floor((Math.random()*5))]"> {{p}}
              </el-tag>
            </el-col>
          </el-row>
          <el-row style="margin-top:9px">
            <el-col :md="24">
                    <div class="note-profile" @click="$router.push({path: '/note/'+item.id})">
                        {{item.profile}}
                    </div>
            </el-col>
          </el-row>
          <el-row v-if="!glb.isMobile()" style="margin-top: 9px">
            <el-col :md="4" :sm="4">
              <el-button class="bn-note-op" icon="iconfont icon-less">&nbsp;{{item.readCount}}</el-button>
            </el-col>
            <el-col :md="4" :sm="4">
              <el-button class="bn-note-op" icon="iconfont icon-iccomm">&nbsp;&nbsp;{{item.commCount}}
              </el-button>
            </el-col>
            <el-col :md="4" :sm="4">
              <el-button class="bn-note-op" icon="iconfont icon-kuailianshishujujiegou">&nbsp;&nbsp;{{item.shareCount}}
              </el-button>
            </el-col>
            <el-col :md="4" :sm="4">
              <el-button class="bn-note-op" icon="iconfont icon-favorite">&nbsp;&nbsp;{{item.collectCount}}
              </el-button>
            </el-col>
            <el-col :md="2" :sm="2">&nbsp;</el-col>
            <el-col :md="5" :sm="5" style="margin-top: 8px;text-align: right">
              <span class="note-time">{{this.glb.time.format(item.updateTime)}}</span>
            </el-col>
          </el-row>
        </el-card>

      </el-col>
    </el-row>
  </div>
</template>

<script>
  import glb from "@comp/GLOBAL"

  export default {
    //笔记item,所有笔记,是否查看自己的笔记
    props: {
      item: Object,
    },
    name: "profile",
    data() {
      return {
        glb: glb,
        tagType: ['success', 'danger', 'info', '', 'warning'],
      }
    },
    computed: {},
    mounted() {
    },
    methods: {
      randomNum() {
        return Math.floor(Math.random() * 1000)
      },
    }
    ,
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

  .note-tile:hover{
    color: #303133cc;
  }
  .note-profile:hover{
    color: #303133cc;
  }

  /**
    手机
   */
  .mobile-tag{
    margin-top: 9px;
    margin-left: -8px;
    text-align: left !important;
  }

  /**
    置顶
   */
  .isTop{
    overflow: hidden;
  }
  
  .isTop:after {
    content: 'TOP';
    font-size: 15px;
    position: absolute;
    left: -50px;
    top: 0px;
    background-color: #e77da3;
    color: white;
    width: 100px;
    height: 28px;
    text-align: center;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    line-height: 29px;
    -webkit-transform-origin: center top;
    transform-origin: center top;
    padding-top: 10px;
  }
</style>
