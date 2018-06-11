<template>
  <div id="app" style="height:inherit;">
    <el-container>
      <el-header style="position: fixed;top:0;width: 100%;z-index: 99">
        <vue-header></vue-header>
      </el-header>
      <el-main style="position: relative;margin-top:60px;height: auto">
        <router-view></router-view>
      </el-main>
      <el-footer style="position: fixed;bottom: 0;width: 100%">
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

</style>
