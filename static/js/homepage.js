/**
 * Created by clannad on 2016/4/6.
 */

define(function(require, exports, module){
/*    $.noConflict(); //���ú�ʹ��jQuery����$�����ͬʱ������zepto��$��ʾzepto��*/
/*    var $j = jQuery;
    var $z = Zepto;*/
    require("zepto")
    require("../sui/js/sm.js")
    require("../sui/js/sm-extend.js")


    var ser_action = require("server_action")
    $.init() // sui ��ʼ��



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
