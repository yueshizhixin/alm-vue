<template>

</template>

<script>
  export default {
    name: "GLOBAL",
    regStrNormal: /^[0-9a-zA-Z]{6,16}$/,
    regTipNormal: '请按规则填写',

    preUrl:'http://127.0.0.1:8080/api/v1',

    stringify(data) {
      let str = ''
      for (let k in data) {
        str += (k + '=' + data[k] + '&')
      }
      return str.substring(0, str.length - 1)
    },
    alert_success(item, msg) {
      item.$message({
        message: msg,
        type: 'success',
        showClose: true,
      });
    },
    alert_error(item, msg) {
      item.$message({
        message: msg,
        type: 'error',
        showClose: true,
      });
    },
    alert_warning(item, msg) {
      item.$message({
        message: msg,
        type: 'warning',
        showClose: true,
      });
    },
    alert_info(item, msg) {
      item.$message({
        message: msg,
        showClose: true,
      });
    },
  }


</script>

<style scoped>

</style>
