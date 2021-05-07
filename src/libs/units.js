const common = {
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
  padLeftZero(str){
      return ('00' + str).substr(str.length)
  },
}
export default common