/**
 * Created by sylar on 2016/4/6.
 */

define(function(require, exports, module){
    //$.noConflict(); //调用后，使用jQuery代替$（如果同时引用了zepto，$表示zepto）
    //var $j = jQuery;
    //var $z = Zepto;
    require("zepto")
    require("../sui/js/sm.js")
    require("../sui/js/sm-extend.js")

    var ser_action = require("server_action")
    $.init() // sui 初始化

    var index_js = function(){
        function jumpToRegister(event){
            //window.location.href="register.html?backurl="+window.location.href
            if(sessionStorage.account){
                if($(this).hasClass("me")){
                    window.location.href="account.html"
                }
            }
            else{
                window.location.href="login.html"
            }
        }
        $(".jumpCheck").click(jumpToRegister);

        //---page init
        var aInfo = sessionStorage.account;
        if(aInfo){
            var jVal = JSON.parse(aInfo)
            $(".title").text( "荒淫您的回来："+ jVal.username )
        }
    }

    var login_js = function(){
        //--请求回调
        function loginCallBack(result)
        {
           /* $.hidePreloader()*/
            alert(result.status);
            if(result.status === true) {
                //存储数据
                sessionStorage.account = JSON.stringify(result)
                //界面跳转
                window.location.href = "account.html"
            }else{
                //登陆失败提示失败原因
                $.alert(result.msg)
            }
        }
        //按钮回调
        function onLoginButtonCallback()
        {
            if( $(this).hasClass('disabled')){
                return
            }

            var accountInfo = {
                username: $('#account').val(),
                password: $('#password').val()
            }

            //请求服务器
            ser_action.login_account(accountInfo, loginCallBack)

            //等待提示框
          /*  $.showPreloader()*/
        }
        $(document).on('click', '#submit', onLoginButtonCallback);
    }

    var register_js = function(){
        //--请求回调
        function registerCallBack(result)
        {
            $.hidePreloader()
            if(result.status === true) {
                //存储数据
                sessionStorage.account = JSON.stringify(result)
                //界面跳转
                window.location.href = "myInfo.html"
            }else{
                //注册失败提示失败原因
                $.alert(result.msg)
            }
        }
        //按钮回调
        function onRegisterButtonCallback()
        {
            if( $(this).hasClass('disabled')){
                return
            }

            var accountInfo = {
                username: $('#account').val(),
                password: $('#password').val()
            }

            //请求服务器
            ser_action.register_account(accountInfo, registerCallBack);

            //等待提示框
            $.showPreloader()
        }
        $(document).on('click', '#submit', onRegisterButtonCallback);
    }

    var account_js = function(){
        function logOutCallBack(){
            sessionStorage.clear("account")
            window.location.href="index.html"
        }
        $("#logout").click(logOutCallBack);
    }

    var home_js = function(){
        function logOutCallBack(){
            sessionStorage.clear("account")
            window.location.href="index.html"
        }
        $("#logout").click(logOutCallBack);
    }

    return {
        index : index_js,
        login : login_js,
        register:register_js,
        account: account_js,
        home: home_js,
    }
})
