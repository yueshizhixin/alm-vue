<template>

</template>

<script>

  import * as qiniu from 'qiniu-js'

  export default {
    name: "GLOBAL",
    regStrNormal: /^[0-9a-zA-Z]{6,16}$/,
    regTipNormal: '请按规则填写',

    num: {
      pre0(num, n) {
        return (Array(n).join(0) + num).slice(-n);
      }
    },

    // 前缀地址
    preUrl: 'http://127.0.0.1:8080/api/v1',
    // preUrl: 'http://123.206.21.86:8080/note/api/v1',

    //联系我
    goto_me() {
      window.open('https://github.com/yueshizhixin', 'new')
    },

    //分页
    page: {
      offset: 1,//当前页码
      limit: 10,
      haxNext: true,
      isLoading: false,//是否正在加载
    },

    //统一时间
    time: {
      aniShow2: 500,
      //统一格式
      format(time) {
        let oneday = 24 * 60 * 60 * 1000;
        let now = new Date()
        let today = new Date(now.getFullYear() + '-' + (Number(now.getMonth()) + 1) + '-' + now.getDate())
        let yestoday = new Date(today.getTime() - oneday)
        let timedate = new Date(time);
        if (timedate >= today) {
          return '今天 ' + this.pre0(timedate.getHours(), 2) + ':' + this.pre0(timedate.getMinutes(), 2) + ":" + this.pre0(timedate.getSeconds(), 2)
        } else if (timedate >= yestoday && timedate < today) {
          return '昨天 ' + this.pre0(timedate.getHours(), 2) + ':' + this.pre0(timedate.getMinutes(), 2) + ":" + this.pre0(timedate.getSeconds(), 2)
        } else {
          return time
        }
      },
      pre0(num, n) {
        return (Array(n).join(0) + num).slice(-n);
      }
    },

    /**
     * 图片相关
     */

    //图像格式化
    imgFormat: {
      head: '?imageView2/1/w/300/h/300',
      bgSmall: '?imageView2/2/w/480/h/270'
    },
    cdn: {
      url: 'http://cdn.yueshizhixin.top/',
    },
    noteImgUpload(t, fileName, data, callback) {
      this.imgUpload(t, fileName, data, callback, 'note/')
    },
    bgUpload(t, fileName, data, callback) {
      this.imgUpload(t, fileName, data, callback, 'asset/bg/')
    },
    headUpload(t, fileName, data, callback) {
      this.imgUpload(t, fileName, data, callback, 'asset/head/')
    },
    imgUpload(t, fileName, data, callback, preUrl) {
      t.$axios.get('/cdn/token', {})
        .then((res) => {
          if (res.status === 200) {
            let token = JSON.parse(res.data).data
            let observer = {
              next(res) {
                console.log('observer.next')
              },
              error(err) {
                console.log('observer.error')
                if (err) {
                  t.$message({
                    message: err.message,
                    showClose: true,
                  });
                }
              },
              complete(res) {
                console.log('observer.complete')
                if (res.key) {
                  callback(res.key)
                }
              }
            }
            let file = data
            let key = preUrl + new Date().getTime() + '_' + data.name
            let config = {
              useCdnDomain: true,
              region: qiniu.region.z1
            };
            let putExtra = {
              fname: "",
              params: {},
              mimeType: [] || null
            };

            let observable = qiniu.upload(file, key, token, putExtra, config)
            observable.subscribe(observer) // 上传开始
          }
        }).catch((e) => {
      })
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
