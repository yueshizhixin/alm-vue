<template>
  <div>
    <mavon-editor @save="save" v-model="value"/>
  </div>
</template>

<script>
  export default {
    name: "save",
    data() {
      return {
        value: 'asdfasdfasdf'
      }
    },
    methods:{
      save(){
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success',
          showClose:true,
        });
        console.log(this.value)
      }
    }
  }
</script>

<style scoped>
</style>
