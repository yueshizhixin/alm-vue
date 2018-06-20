<template>
  <div class="divMain">
    <transition name="el-zoom-in-top">
      <div v-show="comShow" class="transition-box">
        <el-row style="z-index: 10">
          <el-col :md="20">
            <div v-for="o of notes">
              <el-row :key="o.id">
                <el-col :md="2">&nbsp;</el-col>
                <el-col :md="2">
                  <div class="img-headNote" @mouseenter="imgMouseE(o.id)" @mouseleave="imgMouseL(o.id)">
                    <img :src="o.authorImg">
                    <el-collapse-transition>
                      <el-card v-show="o.authorMsgShow" class="img-headCard" :body-style="{ padding: '8px 6px' }">
                        <el-row>
                          <img :src="o.authorImg2" class="image" @click="alert('转个跳人主页')">
                        </el-row>
                        <el-row style="padding: 8px;">
                          <span class="note-author" style="font-weight: 500">{{o.author}}</span>
                          <br>
                          <span class="note-signature" style="font-size: 14px">{{o.description}}</span>
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
                      <el-col :md="12">
                    <span style="color: #909399;font-size: 16px;">
                      {{o.from}}
                    </span>
                        <br>
                        <span class="note-author">{{o.author}}</span>
                        <span class="note-signature">
                        {{o.description}}
                    </span>

                      </el-col>
                      <el-col :md="12" align="right">
                        <el-tag v-for="(p,i) of o.tags" :key="i" style="margin-left: 7px;" :type="tagType[Math.floor((Math.random()*5))]">

                          {{p.tag}}
                        </el-tag>
                      </el-col>
                    </el-row>

                    <el-row style="margin-top: 9px">
                      <el-col :md="18">
                    <span @click="alert('查看全文')" class="note-tile">
                      {{o.title}}
                    </span>
                      </el-col>
                      <el-col :md="6" align="right">
                        <span class="note-time">{{o.time}}</span>
                      </el-col>
                    </el-row>

                    <el-row style="margin-top: 9px">
                      <el-col :md="24">
                    <span @click="alert('查看全文')" style="color: #303133;font-size: 16px;">
                        {{o.logotxt}}
                    </span>
                      </el-col>
                    </el-row>
                    <el-row style="margin-top: 9px">
                      <el-col :md="4" :sm="4">
                        <div v-if="o.isAgree">
                          <el-button class="bn-note-op" type="primary" plain icon="iconfont icon-less">&nbsp;&nbsp;{{o.agreeCount}}</el-button>
                          <div>

                          </div>
                        </div>
                        <div v-else>
                          <el-button class="bn-note-op" icon="iconfont icon-less">&nbsp;{{o.agreeCount}}</el-button>
                        </div>

                      </el-col>
                      <el-col :md="4" :sm="4">
                        <div v-if="o.isComm">
                          <el-button class="bn-note-op" type="primary" plain icon="iconfont icon-iccomm">&nbsp;&nbsp;{{o.commCount}}</el-button>
                        </div>
                        <div v-else>
                          <el-button class="bn-note-op" icon="iconfont icon-iccomm">&nbsp;&nbsp;{{o.commCount}}
                          </el-button>
                        </div>
                      </el-col>
                      <el-col :md="4" :sm="4">

                        <div v-if="o.isShare">
                          <el-button class="bn-note-op" type="primary" plain
                                     icon="iconfont icon-kuailianshishujujiegou">
                            &nbsp;&nbsp;{{o.shareCount}}
                          </el-button>
                        </div>
                        <div v-else>
                          <el-button class="bn-note-op" icon="iconfont icon-kuailianshishujujiegou">&nbsp;&nbsp;{{o.shareCount}}</el-button>
                        </div>
                      </el-col>
                      <el-col :md="4" :sm="4">

                        <div v-if="o.isCollect">
                          <el-button class="bn-note-op" type="primary" plain icon="iconfont icon-favorite">&nbsp;&nbsp;{{o.collectCount}}</el-button>
                        </div>
                        <div v-else>
                          <el-button class="bn-note-op" icon="iconfont icon-favorite">&nbsp;&nbsp;{{o.collectCount}}
                          </el-button>
                        </div>
                      </el-col>
                      <el-col :md="4" :sm="4">&nbsp;</el-col>
                      <el-col :md="4" :sm="4">
                        <el-button class="bn-note-op" icon="iconfont icon-close">&nbsp;不看</el-button>
                      </el-col>
                    </el-row>
                  </el-card>

                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :md="4" style="background-color: white;top:80px;left:1200px;position: fixed;">
            <p>我的收藏</p>
            <p>我的关注</p>
            <p>积分商城</p>
            <p>&nbsp;</p>
            <p>其他项目</p>
            <p>联系作者</p>
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
        tagIndex: 0,
        comShow: false,
        opBnGutter: 10,
        tagType: ['success', 'danger', 'info', '', 'warning'],
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
          {
            id: 3,
            from: '来自关注:琉璃仙',
            author: '琉璃仙',
            authorImg: 'http://cdn.yueshizhixin.top/248986-106.jpg?imageView2/1/w/100/h/100',
            authorImg2: 'http://cdn.yueshizhixin.top/248986-106.jpg?imageView2/1/w/250/h/120',
            description: '吃遍天下美食',
            tags: [{'tag': '修仙'}],
            title: '步行街上都是好吃的!',
            logotxt: '重庆步行街重庆步行街位于重庆解放碑,是重庆最为繁华的商圈之一,这里的步行街上卖的也是五花八门,吃喝玩乐保证畅快。',
            time: '08-14 02:01',
            agreeCount: '46',
            isAgree: false,
            commCount: '65',
            isComm: true,
            shareCount: '15',
            isShare: false,
            collectCount: '97',
            isCollect: false,
          },
          {
            id: 4,
            from: '来自标签:修仙',
            author: '枯琴真君',
            authorImg: 'http://cdn.yueshizhixin.top/231751-106.jpg?imageView2/1/w/60/h/60',
            authorImg2: 'http://cdn.yueshizhixin.top/231751-106.jpg?imageView2/1/w/250/h/120',
            description: '修仙使人强大',
            tags: [],
            title: '修仙使人强大!',
            logotxt: '我热衷于修仙已经很久了,现在对于修仙之法总算是有...规划这种东西只能学习和去领悟啊,强大的人能够制定',
            time: '2017-10-15',
            agreeCount: '4669',
            isAgree: true,
            commCount: '2929',
            isComm: false,
            shareCount: '1804',
            isShare: true,
            collectCount: '7717',
            isCollect: true,
          },
          {
            id: 2,
            from: '来自标签:DOTA2',
            author: '祁厅长',
            authorImg: 'http://cdn.yueshizhixin.top/41795-106.jpg?imageView2/1/w/100/h/100',
            authorImg2: 'http://cdn.yueshizhixin.top/41795-106.jpg?imageView2/1/w/250/h/120',
            description: '我有高达250的APM',
            tags: [{'tag': 'DOTA2'}, {'tag': '电竞'}],
            title: '如何评价萨尔这个英雄?',
            logotxt: '萨尔电之所以死亡还在电，是因为这个技能做出来的时候，萨尔还是可以中单的一个英雄，当时的萨尔，电永远75蓝耗，中路无限消耗，初始攻击也不低，血强，电是给你打钱的，你电死一个兵，其他兵得继续给你电吧？所以就这样设计了。',
            time: '昨天 17:02',
            agreeCount: '22',
            isAgree: false,
            commCount: '1024',
            isComm: false,
            shareCount: '2048',
            isShare: false,
            collectCount: '4096',
            isCollect: false,
          },
        ],
      }
    },
    computed: {
    },
    methods: {

      alert(msg) {
        alert(msg)
      },
      imgMouseE(id) {
        let note = this.notes.find(note => note.id === id)
        note.authorMsgShow = true
      },
      imgMouseL(id) {
        this.notes.find(note => note.id === id).authorMsgShow = false
      },
    },
    mounted() {
      this.comShow = true
      this.notes.forEach(item => {
        this.$set(item, 'authorMsgShow', false)
      })
    },
    created(){
    }
  }
</script>

<style scoped>
  .bn-note-op {
    border: 0;
    text-align: center;
  }

  .note-body {
    background-color: white;
    /*padding: 16px 20px;*/
    margin-bottom: 10px;
  }

  .note-tile {
    color: #303133;
    font-size: 20px;
    font-weight: 700
  }

  .note-time {
    color: #909399;
    font-size: 16px;
  }

  .note-author {
    color: #303133;
    font-size: 18px;
  }

  .note-signature {
    color: #606266;
    font-size: 16px;
  }

  /*卡片头像*/
  .time {
    font-size: 13px;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
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
