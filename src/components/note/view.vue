<template>
  <div>
    <transition name="el-zoom-in-top">
      <div v-show="aniShow" class="transition-box">
        <el-row>
          <el-col :md="3">&nbsp;</el-col>
          <el-col :md="18" class="note-body">
            <el-card>
              <el-row style="margin-top: 6px">
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
              <el-row style="align-items: flex-end;display: flex">
                <el-col :md="1" style="display: flex;align-items: center;max-width: 64px;min-width: 64px;">
                  <img style=";border-radius:50%;width: 48px" :src="item.authorImg">
                </el-col>
                <el-col :md="20" align="left">
                  <el-row><span class="note-author">{{item.author}}</span></el-row>
                  <el-row>
                    <span style="font-size: 14px;" class="note-time">{{item.time}}</span>
                  </el-row>

                </el-col>
                <el-col :md="3" align="right">
                  <el-button size="small" @click="$router.push({path: '/note/save/'+id})" icon="iconfont icon-edit">
                    &nbsp;&nbsp;编辑
                  </el-button>
                </el-col>
              </el-row>

            </el-card>

          </el-col>
        </el-row>
        <el-row style="z-index: 10">
          <el-col :md="3">&nbsp;</el-col>
          <el-col :md="18">
            <div>
              <mavon-editor
                :value="note"
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

  import noteProfileTempl from "comp/note/templ/profile"

  export default {
    name: "view",
    components: {noteProfileTempl},
    data() {
      return {
        aniShow: false,

        tagType: ['success', 'danger', 'info', '', 'warning'],
        defaultOpen: 'preview',
        id: 0,
        item: {
          id: 1,
          from: '来自关注:和泉纱雾',
          author: '和泉纱雾',
          authorImg: 'http://cdn.yueshizhixin.top/299243-106.jpg?imageView2/1/w/100/h/100',
          authorImg2: 'http://cdn.yueshizhixin.top/299243-106.jpg?imageView2/1/w/250/h/120',
          description: '学习使人落后',
          tags: [{'tag': '动漫'}, {'tag': '日本'}, {'tag': '二次元'}, {'tag': '樱花'}, {'tag': '和泉纱雾'}],
          title: '如何评价《秒速5厘米》这部动漫?',
          logotxt: '秒速5厘米想要传达的是  仅仅相爱并不能打破一切阻隔  爱情并不像说起来那么简单  爱的力量在现实面前常常显得异常渺小。  不能天天在一起 不代表不想念；  天天都能见面  不代表心的距离也如身体距离那么近。萨尔电之所以死亡还在电，是因为这个技能做出来的时候，萨尔还是可以中单的一个英雄，当时的萨尔，电永远75蓝耗，中路无限消耗，初始攻击也不低，血强，电是给你打钱的，你电死一个兵，其他兵得继续给你电吧？所以就这样设计了。秒速5厘米想要传达的是  仅仅相爱并不能打破一切阻隔  爱情并不像说起来那么简单  爱的力量在现实面前常常显得异常渺小。\n  不能天天在一起 不代表不想念；  \n\r天天都能见面  不代表心的距离也如身体距离那么近。',
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
        note: '- 非IE浏览器\n' +
          '接口返回的数据格式为\n' +
          '```\n' +
          '<xml ...>\n' +
          '  <string ...>\n' +
          '    [{data},{data},{data}]\n' +
          '  </string>\n' +
          '</xml>\n' +
          '```\n' +
          '```\n' +
          '//DOM解析器\n' +
          'var parser = new DOMParser();\n' +
          '//读取返回字符串\n' +
          'var _xml = parser.parseFromString(data, "text/xml");\n' +
          '//获取节点内容\n' +
          'var jsonXml = _xml.getElementsByTagName("string")[0].innerHTML;\n' +
          '//获得json数组\n' +
          'var jsonArr = JSON.parse(jsonXml);',
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
            logotxt: '秒速5厘米想要传达的是  仅仅相爱并不能打破一切阻隔  爱情并不像说起来那么简单  爱的力量在现实面前常常显得异常渺小。  不能天天在一起 不代表不想念；  天天都能见面  不代表心的距离也如身体距离那么近。萨尔电之所以死亡还在电，是因为这个技能做出来的时候，萨尔还是可以中单的一个英雄，当时的萨尔，电永远75蓝耗，中路无限消耗，初始攻击也不低，血强，电是给你打钱的，你电死一个兵，其他兵得继续给你电吧？所以就这样设计了。秒速5厘米想要传达的是  仅仅相爱并不能打破一切阻隔  爱情并不像说起来那么简单  爱的力量在现实面前常常显得异常渺小。\n  不能天天在一起 不代表不想念；  \n\r天天都能见面  不代表心的距离也如身体距离那么近。',
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
            logotxt: '重庆步行街重庆步行街位于重庆解放碑,是重庆最为繁华的商圈之一,这里的步行街上卖的也是五花八门,吃喝玩乐保证畅快。秒速5厘米想要传达的是  仅仅相爱并不能打破一切阻隔  爱情并不像说起来那么简单  爱的力量在现实面前常常显得异常渺小。  不能天天在一起 不代表不想念；  天天都能见面  不代表心的距离也如身体距离那么近。',
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
            logotxt: '我热衷于修仙已经很久了,现在对于修仙之法总算是有...规划这种东西只能学习和去领悟啊,强大的人能够制定秒速5厘米想要传达的是  仅仅相爱并不能打破一切阻隔  爱情并不像说起来那么简单  爱的力量在现实面前常常显得异常渺小。  不能天天在一起 不代表不想念；  天天都能见面  不代表心的距离也如身体距离那么近。',
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
            logotxt: '萨尔电之所以死亡还在电，是因为这个技能做出来的时候，萨尔还是可以中单的一个英雄，当时的萨尔，电永远75蓝耗，中路无限消耗，初始攻击也不低，血强，电是给你打钱的，你电死一个兵，其他兵得继续给你电吧？所以就这样设计了。秒速5厘米想要传达的是  仅仅相爱并不能打破一切阻隔  爱情并不像说起来那么简单  爱的力量在现实面前常常显得异常渺小。  不能天天在一起 不代表不想念；  天天都能见面  不代表心的距离也如身体距离那么近。',
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
    mounted() {
      this.aniShow = true
      this.getId()

    },
    methods: {
      getId() {
        this.id = Number(this.$route.params.id)
        this.item = this.notes.find(x => x.id === this.id)
      }
    }
  }
</script>

<style scoped>

</style>
