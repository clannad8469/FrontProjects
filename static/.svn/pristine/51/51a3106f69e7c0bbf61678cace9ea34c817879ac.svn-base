/**
 * Created by sylar on 2016/3/30.
 */

/*------框架初始化------*/
$.init();

/*----------rem动态基准值计算-----------*/
var currClientWidth, fontValue,originWidth, minWidth, maxWidth, stdPercent;
originWidth = 375; //iphone6的设计尺寸
minWidth = 320;
maxWidth = 640;
stdPercent = 125; //半分比

__resize();
//注册 resize事件
window.addEventListener('resize', __resize, false);

function __resize() {
    currClientWidth = document.documentElement.clientWidth;
    //这里是设置屏幕的最大和最小值时候给一个默认值
    if (currClientWidth > maxWidth) currClientWidth = maxWidth;
    if (currClientWidth < minWidth) currClientWidth = minWidth;
    //
    fontValue = ((stdPercent * currClientWidth) /originWidth).toFixed(2);
    document.documentElement.style.fontSize = fontValue + '%';
}

/*----------服务器请求-----------*/
function request(url,data,func){
    var murl = url + "?callback?"
    $.get(murl,data,func,'jsonp');
}

