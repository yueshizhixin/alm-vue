<template>
  <div>
    <transition name="el-zoom-in-top">
      <div v-show="aniShow" class="transition-box">
        <el-tabs type="border-card" :tab-position="tabPosition">
          <el-tab-pane>
            <span slot="label"><i class="iconfont icon-wangyiyunyinle">&nbsp;</i>网易云音乐</span>
            <el-tabs v-model="yunMusicActive" type="card" @tab-click="yunMusicHandler" >
              <el-tab-pane label="歌曲评论" name="0">
                <el-row>
                  <el-col :md="5">
                    <el-input prefix-icon="el-icon-search" clearable placeholder="请输入歌曲名称"></el-input>
                  </el-col>
                  <el-col :lg="5" :offset="1">
                    <el-button icon="iconfont icon-crawler" plain type="danger" style="width: 60%;">&nbsp;&nbsp;爬&nbsp;取
                    </el-button>
                  </el-col>
                </el-row>
                <br>
                <el-row>
                  <el-col  :md="5" :sm="12" :xs="24" v-for="(o, i) in songs" :key="i" :offset="i%4===0 ? 0 : 1">
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
              </el-tab-pane>
              <el-tab-pane label="其他" name="1">开发中</el-tab-pane>
            </el-tabs>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="iconfont icon-zhihu">&nbsp;</i>知乎</span>
            知乎
          </el-tab-pane>
        </el-tabs>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "crawler",
    data() {
      return {
        aniShow: false,//加载动画
        tabPosition: 'left',
        yunMusicActive: '0',
        songs: [
          {url: 'http://cdn.yueshizhixin.top/299243-106.jpg?imageView2/2/h/200'},
          {url: 'http://cdn.yueshizhixin.top/41795-106.jpg?imageView2/2/h/200'},
          {url: 'http://cdn.yueshizhixin.top/92595-106.jpg?imageView2/2/h/200'},
          {url: 'http://cdn.yueshizhixin.top/231813-106.jpg?imageView2/2/h/200'},
          {url: 'http://cdn.yueshizhixin.top/232131-106.jpg?imageView2/2/h/200'},
          {url: 'http://cdn.yueshizhixin.top/44215-106.jpg?imageView2/2/h/200'},
          {url: 'http://cdn.yueshizhixin.top/231751-106.jpg?imageView2/2/h/200'},
          {url: 'http://cdn.yueshizhixin.top/213777-106.jpg?imageView2/2/h/200'},
          {url: 'http://cdn.yueshizhixin.top/248986-106.jpg?imageView2/2/h/200'},
          {url: 'http://cdn.yueshizhixin.top/249873-106.jpg?imageView2/2/h/200'},
          {url: 'http://cdn.yueshizhixin.top/259354-106.jpg?imageView2/2/h/200'},
        ]
      }
    },
    methods: {
      yunMusicHandler(tab, eve) {
        // console.log(tab,eve)
      }
    },
    mounted() {
      this.aniShow = true
    }
  }
</script>

<style scoped>
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
