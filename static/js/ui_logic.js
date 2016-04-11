/**
 * Created by sylar on 2016/4/6.
 */

define(function(require, exports, module){
    //$.noConflict(); //���ú�ʹ��jQuery����$�����ͬʱ������zepto��$��ʾzepto��
    //var $j = jQuery;
    //var $z = Zepto;
    require("zepto")
    require("../sui/js/sm.js")
    require("../sui/js/sm-extend.js")

    var ser_action = require("server_action")
    $.init() // sui ��ʼ��

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
            $(".title").text( "�������Ļ�����"+ jVal.username )
        }
    }

    var login_js = function(){
        //--����ص�
        function loginCallBack(result)
        {
            $.hidePreloader()
            if(result.status === true) {
                //�洢����
                sessionStorage.account = JSON.stringify(result)
                //������ת
                window.location.href = "account.html"
            }else{
                //��½ʧ����ʾʧ��ԭ��
                $.alert(result.msg)
            }
        }
        //��ť�ص�
        function onLoginButtonCallback()
        {
            if( $(this).hasClass('disabled')){
                return
            }

            var accountInfo = {
                username: $('#account').val(),
                password: $('#password').val()
            }

            //���������
            ser_action.login_account(accountInfo, loginCallBack)

            //�ȴ���ʾ��
            $.showPreloader()
        }
        $(document).on('click', '#submit', onLoginButtonCallback);
    }

    var register_js = function(){
        //--����ص�
        function registerCallBack(result)
        {
            $.hidePreloader()
            if(result.status === true) {
                //�洢����
                sessionStorage.account = JSON.stringify(result)
                //������ת
                window.location.href = "myInfo.html"
            }else{
                //ע��ʧ����ʾʧ��ԭ��
                $.alert(result.msg)
            }
        }
        //��ť�ص�
        function onRegisterButtonCallback()
        {
            if( $(this).hasClass('disabled')){
                return
            }

            var accountInfo = {
                username: $('#account').val(),
                password: $('#password').val()
            }

            //���������
            ser_action.register_account(accountInfo, registerCallBack);

            //�ȴ���ʾ��
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

    return {
        index : index_js,
        login : login_js,
        register:register_js,
        account: account_js,
    }
})