<template>
  <div id="app">
    <el-container>
      <el-header class="vueHeader">
        <vue-header></vue-header>
      </el-header>
      <el-main style="position: relative;margin-top:60px;margin-bottom:60px;height: auto">
        <transition name="el-fade-in">
          <router-view></router-view>
        </transition>

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
  .vueHeader ~ .vueFooter {
    position: fixed;
    width: 100%;
    z-index: 99;
    background-color: white;
    left: 0;
    right: 0;
  }

  .vueHeader {
    top: 0;
  }

  .vueFooter {
    bottom: 0;
  }



</style>
