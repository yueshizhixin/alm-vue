<template>
  <div class="divMain" id="blog-list-divMain">
    <transition name="el-zoom-in-top">
      <div v-show="aniShow" class="transition-box">
        <el-row style="z-index: 10 " class="myrow">
          <el-col :md="18">

            <div class="blog-border">
              <el-row v-for="x of 5" class="blog-thumb">
                <!--头像-->
                <el-col :md="2">
                  <img class="blog-head-img"
                       src="http://cdn.yueshizhixin.top/asset/head/hdImg_4f52d78d2032c839cc1619959306f07c15306644927.jpg?imageView2/1/w/300/h/300"
                  >
                </el-col>
                <!--主题与描述-->
                <el-col :md="22">
                  <!--主题-->
                  <el-row>
                    <el-col :md="22">
                      <div class="blog-title">
                        如何看待程序员在GitHub发起抗议互联网公司实行 996 工作制网站
                      </div>
                    </el-col>
                    <el-col :md="2">
                      <div>
                        x:1
                      </div>
                    </el-col>
                  </el-row>
                  <!--描述-->
                  <el-row :md="24">
                    <div>
                      <span class="blog-user">江心秋月</span>
                      <span class="blog-bottom">6小时前</span>
                      <span class="blog-tag">本站留言</span>
                      <span class="blog-bottom">最后回复来自于</span>
                      <span class="blog-user">ALM</span>
                    </div>
                  </el-row>
                </el-col>
              </el-row>
            </div>

          </el-col>
        </el-row>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "blogList",
    data() {
      return {
        aniShow: false,//加载动画
      }
    },
    created() {
    },
    mounted() {
      this.aniShow = true
    },
    methods: {

      test() {

      },
    },
  }
</script>

<style scoped>
  .blog-head-img {
    border-radius: 50%;
    border: 1px solid #ddd;
    width: 50px;
    height: 50px;
  }

  .blog-title{
    font-size: 20px;
  }

  .blog-user,.blog-bottom{
    color: #b4b4b4;
  }

  .blog-user{
    text-decoration: underline;
  }

  .blog-tag{
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 4px;
    display: inline-flex;
    font-size: .75rem;
    height: 2em;
    justify-content: center;
    line-height: 1.5;
    padding-left: .75em;
    padding-right: .75em;
    white-space: nowrap;
    color: #b4b4b4;
    text-decoration: underline;
  }

  .blog-thumb{
    background-color: #fff;
    padding: 20px 20px;
    border-top: 1px solid rgba(219,219,219,.5)
  }

  .blog-border{
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1) ;
  }
</style>
