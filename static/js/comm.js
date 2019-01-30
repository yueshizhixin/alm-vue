function isMobeil() {
  let ua = navigator.userAgent
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
  let isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/)
  let isAndroid = ua.match(/(Android)\s+([\d.]+)/)
  return isIphone || isAndroid
}
