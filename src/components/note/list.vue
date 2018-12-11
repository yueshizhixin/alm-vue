<template>
  <div class="divMain">
    <transition name="el-zoom-in-top">
      <div v-show="aniShow" class="transition-box">
        <el-row style="z-index: 10">
          <el-col :md="20">
            <note-profile-templ v-for="item of notes" :note="item" :self="self"></note-profile-templ>
          </el-col>
          <el-col :md="4" class="side-right" :style="{left:sideRight+'px !important'}">
            <div>
              <el-button icon="iconfont icon-add" >&nbsp;&nbsp;新建笔记</el-button>
              <el-button icon="iconfont icon-attachment" >&nbsp;&nbsp;我的收藏</el-button>
              <el-button icon="iconfont icon-favorite">&nbsp;&nbsp;我的关注</el-button>
            </div>
            <div :style="{top:sideRightTop2+'px'}">
              <el-button>&nbsp;&nbsp;go</el-button>
              <el-button>&nbsp;&nbsp;unity</el-button>
              <el-button>&nbsp;&nbsp;vue</el-button>
              <el-button>&nbsp;&nbsp;db</el-button>
              <el-button>&nbsp;&nbsp;mysql</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </transition>
  </div>
</template>
<script>
  import noteProfileTempl from "comp/note/templ/profile"

  export default {
    name: "noteList",
    components: {noteProfileTempl},
    data() {
      return {

        self: true,//是否查看自己的笔记
        aniShow: false,//加载动画
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
      //右侧导航栏
      sideRight() {
        //el-main pad 20px
        let w = document.body.clientWidth
        if (w > 1199) {
          return (w - 1199 - 20 * 2) / 2 - 20 * 2.5 + 1199 / 24 * 20
        }
        else {
          return w / 24 * 20
        }
        // return 0
      },
      sideRightTop2() {
        //基础+pad*2+button*3+margin
        return 80 + 20 * 2 + 34 * 3 + 10
      }
    },
    methods: {
      imgMouseE(id) {
        let note = this.notes.find(note => note.id === id)
        note.authorMsgShow = true
      },
      imgMouseL(id) {
        this.notes.find(note => note.id === id).authorMsgShow = false
      },
    },
    mounted() {
      this.aniShow = true
      this.notes.forEach(item => {
        this.$set(item, 'authorMsgShow', false)
      })
    },
    created() {
    }
  }
</script>

<style scoped>
  /**
    右侧列表
   */
  .side-right {
    top: 80px;
    position: fixed;
  }

  .side-right div {
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
