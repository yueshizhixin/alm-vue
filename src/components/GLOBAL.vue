<template>

</template>

<script>
  export default {
    name: "GLOBAL",
    regStrNormal: /^[0-9a-zA-Z]{6,16}$/,
    regTipNormal: '请按规则填写',

    // 前缀地址
    preUrl: 'http://127.0.0.1:8080/api/v1',

    //图像格式化
    imgFormat: {
      head: '?imageView2/1/w/100/h/100',
    },

    //统一时间
    time: {
      aniShow2: 500,
    },

    /**
     * 统一请求
     */

    post(item, url, data, suc) {
      this.totalAxios(item, url, data, suc, 'post')
    },
    get(item, url, data, suc) {
      this.totalAxios(item, url, data, suc, 'get')
    },

    totalAxios(item, url, data, suc, type) {
      if (type === 'post') {
        item.$axios.post(url, data)
          .then((res) => {
            if (res.status === 200) {
              suc(JSON.parse(res.data))
            }
            else {
              console.log(res)
            }
          }).catch((e) => {
          console.log(e)
        })
      }
      else if (type === 'get') {
        item.$axios.get(url, data)
          .then((res) => {
            if (res.status === 200) {
              suc(JSON.parse(res.data))
            }
            else {
              console.log(res)
            }
          }).catch((e) => {
          console.log(e)
        })
      }
    },

    /**
     * 统一提示
     */

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
