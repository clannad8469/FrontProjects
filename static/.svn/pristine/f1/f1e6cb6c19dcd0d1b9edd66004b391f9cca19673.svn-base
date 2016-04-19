/**
 * Created by sylar on 2016/4/6.
 */

define(function(require, exports, module){
    //$.noConflict(); //调用后，使用jQuery代替$（如果同时引用了zepto，$表示zepto）
    require('zepto')

    function request(url,data,func){
       /* alert("have in require ");*/
        var murl = url + "?callback?"
        /*$.get(murl,data,func,'jsonp');*/
        $.post(murl,data,func,'jsonp');
    }

    var register_account = function(data,callback){
        request("http://123.59.58.205:9000/platform/user/register", data, callback)
    }

    var login_account = function(data, callback){
      /*  alert("have in login ");*/
        request("http://123.59.58.205:9000/platform/user/login", data, callback)
    }

    return {
        register_account : register_account,
        login_account : login_account,
    }
})
