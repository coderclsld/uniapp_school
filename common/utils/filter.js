import Vue from 'vue'

Vue.filter('filterTime',(time,formater,...args)=>{
  if (!time) return time
 
  // let time = timeStamp.toString().replace("/Date(", "").replace(")/", "")
  let date = new Date(time.replace(/-/g,'/')) // parseInt(time)
 
  let fmt = (formater != null) ? formater : 'yyyy-MM-dd hh:mm:ss'
  let o = {
      'M+': date.getMonth() + 1, //月
      'd+': date.getDate(),  // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      "q+": Math.floor((date.getMonth() + 3) / 3),  // 季度
      "S": date.getMilliseconds()  // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (let k in o) {
      if (new RegExp("(" + k + ")").test(fmt))
        
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
  }
  return fmt
})

// Vue.filter('filterTimeString',(time,formater,...args)=>{
//     var endTime = new Date(time).getTime() / 1000 - parseInt(new Date().getTime() / 1000);
//     var t = parseInt(endTime / 60 / 60 / 24); 
//     var h = (new Date(time).getHours() < 10) ? '0' + new Date(time).getHours() : new Date(time).getHours()
//     var s = (new Date(time).getSeconds() < 10) ? '0' + new Date(time).getSeconds() : new Date(time).getSeconds()
//     var date = new Date(time)
//     switch(t){
//       case 0:
//         return '今天' + h + ':' + s
//         break;
//       case -1:
//         return "昨天" + h + ':' + s
//         break;
//       default:
//         //return `${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
//         return Vue.filters['filterTime']('MM-dd hh:mm')
//         this.$options.filters['filterTime'](val,'yyyy-MM-dd')
//     }
// })

//星座过滤器
Vue.filter('filterAstro',(strBirthday,...args)=>{
  if (!strBirthday) return '神仙'
  var birthYear,birthMonth,birthDay
  var strBirthdayArr=strBirthday.split("-")
  if (strBirthdayArr.length>0) {
      birthYear = strBirthdayArr[0]
      birthMonth = strBirthdayArr[1]
      birthDay = strBirthdayArr[2]
  } 
  // if (strBirthday.split("年").length>0) { 
  //     birthYear=strBirthday.split("年")[0]
  //     birthMonth = strBirthday.split("年")[1].split("月")[0]
  //     birthDay = strBirthday.split("年")[1].split("月")[1].split("日")[0]
  // } 
  var s="魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯"
  var arr=[20,19,21,21,21,22,23,23,23,23,22,22]
  return s.substr(birthMonth*2-(birthDay< arr[birthMonth-1]?2:0),2)
})

Vue.filter('filterNumber',(num, formater, type,...args)=>{
  let arr_txt = ["千", "万", "百万", "千万", "亿万"]
  let arr_word = ["K", "w", "m", "kw", "亿万"]
  // type = type || 'word'
  let arr = type === 'word' || !type ? arr_word : arr_txt
  let newnum = Number(num)   // parseInt parseFloat
  if (newnum < 1000) {
    return newnum
  }
  if (1000 <= newnum && newnum < 10000) {
    newnum = parseFloat((newnum/1000).toFixed(2)) + arr[0]
  } else if (10000 <= newnum) {
    newnum = parseFloat((newnum/10000).toFixed(2))+ arr[1]
  }
  return newnum
})

// 过滤没有 http 的图片地址
Vue.filter('filterImgUrlH',(url, formater,...args)=>{
  let reg = /(http|https):\/\/([\w.]+\/?)\S*/
  reg.test(url) || (url = 'http://' + url)
  return url
})


