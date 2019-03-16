<template>
  <div>
    <button v-if="show && !glb.isMobile()" type="button" class="btn" @click="gotoTop">
      <i class="iconfont icon-up" style="font-size: 26px;"></i>
    </button>
  </div>
</template>

<script>

  import glb from "@comp/GLOBAL"

  export default {
    props: {
      show: Boolean,
      refId: String,
    },
    name: "goTopBtn",
    data() {
      return {
        glb: glb,
      }
    },
    methods: {
      gotoTop() {
        document.getElementById(this.refId).scrollTop = 0
      },
    }
  }
</script>

<style scoped>
  .btn {
    position: absolute;
    bottom: 40px;
    right: 40px;
    border: 0;
    cursor: pointer;
    background: white;
    width: 45px;
    height: 45px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1)
  }
</style>
