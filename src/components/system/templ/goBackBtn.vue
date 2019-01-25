<template>
  <div>
    <button v-if="show" type="button" class="btn" @click="$router.back(-1)">
      <i class="iconfont icon-up" style="font-size: 26px;"></i>
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      show: Boolean,
    },
    name: "goBackBtn"
  }
</script>

<style scoped>
  .btn {
    position: absolute;
    right: 180px;
    bottom: 95px;
    border: 0;
    background: white;
    width: 45px;
    height: 45px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1);
    transform: rotate(-90deg);
  }
</style>
