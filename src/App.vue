<template>
  <div id="app">
    <vue-header></vue-header>
    <router-view/>
    <vue-footer></vue-footer>
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
