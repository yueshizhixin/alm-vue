<template>
  <div id="app">
    <el-container>
      <el-header class="vueHeader">
        <vue-header></vue-header>
      </el-header>
      <el-main class="vueMain divbg1">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import VueHeader from "@comp/vueHeader";
  import VueFooter from "@comp/vueFooter";

  export default {
    name: 'App',
    components: {VueFooter, VueHeader}
  }

</script>

<style>
  .vueHeader, .vueFooter {
    position: fixed;
    width: 100%;
    z-index: 99;
    background-color: white;
    left: 0;
    right: 0;
  }

  .vueHeader {
    top: 0;
    font-weight: 700;
    box-shadow:0 1px 6px rgba(26,26,26,.1);
  }

  .vueFooter {
    bottom: 0;
    height: 25px !important;
  }

  .vueMain {
    position: relative;
    margin-top: 60px;
    margin-bottom: 0;
    height: calc(100vh - 60px);
    top: 0;
    width: 100%;
    z-index: 9;
  }


</style>
