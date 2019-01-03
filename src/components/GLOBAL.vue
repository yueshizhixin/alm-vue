<template>

</template>

<script>
  export default {
    name: "GLOBAL",
    regStrNormal: /^[0-9a-zA-Z]{6,16}$/,
    regTipNormal: '请按规则填写',
    stringify(data){
      let str=''
      for (let k in data){
        str+=(k+'='+data[k]+'&')
      }
      return str.substring(0,str.length-1)
    },
  }


</script>

<style scoped>

</style>
