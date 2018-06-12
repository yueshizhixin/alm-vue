<template>
  <div class="divMain">
    <transition name="el-zoom-in-top">
      <div v-show="comShow" class="transition-box">
        我是发现首页 <br> 我是发现首页 <br> 我是发现首页 <br> 我是发现首页 <br>
        我是发现首页 <br> 我是发现首页 <br> 我是发现首页 <br> 我是发现首页 <br>
        我是发现首页 <br> 我是发现首页 <br> 我是发现首页 <br> 我是发现首页 <br>
        我是发现首页 <br> 我是发现首页 <br> 我是发现首页 <br> 我是发现首页 <br>
        我是发现首页 <br> 我是发现首页 <br> 我是发现首页 <br> 我是发现首页 <br>
        我是发现首页 <br> 我是发现首页 <br> 我是发现首页 <br> 我是发现首页 <br>
        我是发现首页 <br> 我是发现首页 <br> 我是发现首页 <br> 我是发现首页 <br>
        我是发现首页 <br> 我是发现首页 <br> 我是发现首页 <br> 我是发现首页 <br>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        comShow: false,
      }
    },
    mounted(){
      this.comShow=true
    }
  }
</script>

<style scoped>

</style>
