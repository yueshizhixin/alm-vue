<template>
  <div id="app">
    <el-container>
      <el-header class="vueHeader">
        <vue-header></vue-header>
      </el-header>
      <el-main class="vueMain divbg1">
        <router-view></router-view>
      </el-main>
      <el-footer class="vueFooter">
        <vue-footer></vue-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import VueHeader from "./components/vueHeader";
  import VueFooter from "./components/vueFooter";

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
    box-shadow:0 1px 3px rgba(26,26,26,.1);
  }

  .vueFooter {
    bottom: 0;
    height: 25px !important;
    background-color: whitesmoke;
  }

  .vueMain {
    position: relative;
    margin-top: 60px;
    margin-bottom: 25px;
    height: 100%;
    top: 0;
    width: 100%;
    z-index: 9;
  }


</style>
