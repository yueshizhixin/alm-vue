<template>
  <div id="app">
    <el-container>
      <el-header>
        <vue-header></vue-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
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
