
import "http://pv.sohu.com/cityjson?ie=utf-8"
var cities=new Array("北京","天津","黑龙江",'吉林','辽宁','河北','河南','山东','山西','陕西','内蒙古','宁夏','甘肃','新疆','青海','西藏','湖北','安徽','江苏','上海','浙江','附件','湖南','江西','四川','重庆','贵州','云南','广东','广西','海南','港澳台','境外',);
var counts=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,)

var ipAddress = returnCitySN["cip"]
console.log(ipAddress+"  visiting")
var clickingName=returnCitySN["cname"].substring(0,2)
function IndexOf(arr,item) {
    return arr.indexOf(item);
}
function addScore(s){
    counts[IndexOf(cities,clickingName)] = counts[IndexOf(cities,clickingName)] + s
}
