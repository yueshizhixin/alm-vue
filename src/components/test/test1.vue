<template>
    <div>
      我是test1

      <router-link to="/test2">我要跳转到test2</router-link>
      <router-link to="/test1/update">我要跳转到test1的update</router-link>
      <router-link to="/show">我要跳转到test1的show</router-link>
      <router-view/>
    </div>
</template>


<script>
    export default {
        name: "test1"
    }
</script>

<style scoped>

</style>
