/**
 * Created by sylar on 2016/3/30.
 */

/*------��ܳ�ʼ��------*/
$.init();

/*----------rem��̬��׼ֵ����-----------*/
var currClientWidth, fontValue,originWidth, minWidth, maxWidth, stdPercent;
originWidth = 375; //iphone6����Ƴߴ�
minWidth = 320;
maxWidth = 640;
stdPercent = 125; //��ֱ�

__resize();
//ע�� resize�¼�
window.addEventListener('resize', __resize, false);

function __resize() {
    currClientWidth = document.documentElement.clientWidth;
    //������������Ļ��������Сֵʱ���һ��Ĭ��ֵ
    if (currClientWidth > maxWidth) currClientWidth = maxWidth;
    if (currClientWidth < minWidth) currClientWidth = minWidth;
    //
    fontValue = ((stdPercent * currClientWidth) /originWidth).toFixed(2);
    document.documentElement.style.fontSize = fontValue + '%';
}

/*----------����������-----------*/
function request(url,data,func){
    var murl = url + "?callback?"
    $.get(murl,data,func,'jsonp');
}

