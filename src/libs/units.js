const common = {
  appkey: 'B2A9505CBF4D4E5091DF054C1F490980', // appkey
  cId: 19, // 渠道标记
  ai: '7917765ad5c8416999c4d31c1f56aa41', // 应用id
  getQueryVariable(variable){
    const reg = new RegExp("(^|&)" + variable + "=([^&]*)(&|$)", "i");
    const urlObj = window.location;
    var r = urlObj.href.indexOf('#') > -1 ? urlObj.hash.split("?")[1].match(reg) : urlObj.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
  },
  getQueryVariable1(variable){
    const reg = new RegExp("(^|&)" + variable + "=([^&]*)(&|$)", "i");
    const urlObj = window.location;
    var r = urlObj.href.indexOf('#') > -1 ? urlObj.hash.split("?")[1].match(reg) : urlObj.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
  },
  getRandomNum(minnum, maxnum, n){ //随机数
    var choice = maxnum - minnum + 1;
    var num = Math.floor(Math.random() * choice + minnum);
    if (n === num) {
      return getRandomNum(minnum, maxnum, n)
    } else {
      return num
    }
  },
  isAppleMobileDevice() {
    // ios
    var ua = navigator.userAgent.toLowerCase();
    var isIPad = ua.match(/ipad/i) != null;
    return isIPad || ua.match(/iphone/i) != null || ua.match(/ipod/i) != null;
  },
  formatDate(date,fmt) {
    if(/(y+)/.test(fmt)){
        fmt = fmt.replace(RegExp.$1,(date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o ={
        'M+': date.getMonth()+1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o){
        if(new RegExp(`(${k})`).test(fmt))
        {
            let str = o[k] + '';
            fmt=fmt.replace(RegExp.$1,(RegExp.$1.length===1)?str:this.padLeftZero(str))
        }
 
    }
    return fmt
  },
  //把一个数组中的元素随机打乱
  shuffle(array) {
    var currentIndex = array.length
    , temporaryValue
    , randomIndex
    ;
    while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }
    return array;
  },
  //从一个数组中随机取10个 有偶现只取一个的问题
  getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
  },
  //20200101格式
  getDate1(dates) {//dates为数字类型，0代表今日,-1代表昨日，1代表明日，返回yyyy-mm-dd格式字符串，dates不传默认代表今日。
    var dd = new Date();
    var n = dates || 0;
    dd.setDate(dd.getDate() + n);
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1;
    var d = dd.getDate();
    m = m < 10 ? "0" + m: m;
    d = d < 10 ? "0" + d: d;
    var day = y + "" + m + "" + d;
    return day;
  },
  //获取当前cookie
  getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) 
    {
      var c = ca[i].trim();
      if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
  },
  changeHourMinutestr: function (str) {
    if (str !== "0" && str !== "" && str !== null) {
      return (
        (Math.floor(str / 60).toString().length < 2
          ? "0" + Math.floor(str / 60).toString()
          : Math.floor(str / 60).toString()) +
        ":" +
        ((str % 60).toString().length < 2
          ? "0" + (str % 60).toString()
          : (str % 60).toString())
      );
    } else {
      return "";
    }
  },
  padLeftZero(str){
    return ('00' + str).substr(str.length)
  },
}
export default common