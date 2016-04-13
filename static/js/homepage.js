/**
 * Created by clannad on 2016/4/6.
 */

define(function(require, exports, module){
/*    $.noConflict(); //调用后，使用jQuery代替$（如果同时引用了zepto，$表示zepto）*/
/*    var $j = jQuery;
    var $z = Zepto;*/
    require("zepto")
    require("../sui/js/sm.js")
    require("../sui/js/sm-extend.js")


    var ser_action = require("server_action")
    $.init() // sui 初始化



    var home_js = function(){
        function logOutCallBack(){
            sessionStorage.clear("account")
            window.location.href="index.html"
        }
        $("#logout").click(logOutCallBack);
    }

    var game_js = function(){

    }

    return {
        home: home_js,
        game: game_js,
    }
})
