<template>
  <div>
    <button v-if="show" type="button" class="btn" @click="gotoTop">
      <i class="iconfont icon-up" style="font-size: 26px;"></i>
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      show: Boolean,
      refId: String,
    },
    name: "goTopBtn",
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
    right: 180px;
    bottom: 40px;
    border: 0;
    background: white;
    width: 45px;
    height: 45px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1)
  }
</style>
