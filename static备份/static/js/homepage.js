/**
 * Created by clannad on 2016/4/6.
 */

define(function(require, exports, module){
    require("jquery")
    jQuery.noConflict();
/*    $.noConflict();
    var $j = jQuery;
    var $z = Zepto;*/

    require("zepto")
    require("../sui/js/sm.js")
    require("../sui/js/sm-extend.js")

    /*require("scrollLoading")*/
    var ser_action = require("server_action")
/*    $.init() // sui初始化*/


    var home_js = function(){
        $(document).ready(function(){
            require("handlebars-v4.0.5");
            require("scrollLoading");

            //模拟轮播json数据
            var lunbo_data = [
                {
                    "game_advertising_map":"./img/2.jpg",
                    "game_url": "http://www.cnblogs.com/iyangyuan/p/3471300.html",
                    "game_slogan": "让我们带着足球康欢吧"
                },
                {
                    "game_advertising_map":"./img/1.jpg",
                    "game_url": "http://www.cnblogs.com/iyangyuan/p/3471300.html",
                    "game_slogan": "让我们带着足球康欢吧"
                },
                {
                    "game_advertising_map":"./img/3.jpg",
                    "game_url": "http://www.cnblogs.com/iyangyuan/p/3471300.html",
                    "game_slogan": "让我们带着足球康欢吧"
                }
            ]
            var myTemplate = Handlebars.compile($("#slider_modle").html());
            $('#my_wrapper').html(myTemplate(lunbo_data));

        });

        $.init() // sui初始化
    }

    var game_js = function() {
        require("slideBox");
        require("handlebars-v4.0.5");
        require("scrollLoading")


        $(document).ready(function(){

            //模拟轮播json数据
            var lunbo_data = [
                    {
                        "game_advertising_map":"./img/2.jpg",
                        "game_url": "http://www.cnblogs.com/iyangyuan/p/3471300.html",
                        "game_slogan": "让我们带着足球康欢吧"
                    },
                {
                    "game_advertising_map":"./img/1.jpg",
                    "game_url": "http://www.cnblogs.com/iyangyuan/p/3471300.html",
                    "game_slogan": "让我们带着足球康欢吧"
                },
                {
                    "game_advertising_map":"./img/3.jpg",
                    "game_url": "http://www.cnblogs.com/iyangyuan/p/3471300.html",
                    "game_slogan": "让我们带着足球康欢吧"
                }
                ]
            var myTemplate = Handlebars.compile($("#slider_modle").html());
            $('#my_wrapper').html(myTemplate(lunbo_data));


            //模拟我的收藏json数据
            var collaction_data = {
                "hot_game": [
                    {
                        "game_icon":"./img/2.jpg",
                        "game_name": "模拟世界",
                        "game_keyword": [
                            "足球",
                            "蓝球",
                            "独家版权"
                        ],
                        "number": 500,
                        "game_desp": "让我们带着足球康欢吧"
                    },
                    {
                        "game_icon":"./img/3.jpg",
                        "game_name": "模拟世界",
                        "game_keyword": [
                            "足球",
                            "蓝球",
                            "独家版权"
                        ],
                        "number": 500,
                        "game_desp": "让我们带着足球康欢吧"
                    },
                    {
                        "game_icon":"./img/4.jpg",
                        "game_name": "模拟世界",
                        "game_keyword": [
                            "足球",
                            "蓝球",
                            "独家版权"
                        ],
                        "number": 500,
                        "game_desp": "让我们带着足球康欢吧"
                    },
                    {
                        "game_icon":"./img/4.jpg",
                        "game_name": "模拟世界",
                        "game_keyword": [
                            "足球",
                            "蓝球",
                            "独家版权"
                        ],
                        "number": 500,
                        "game_desp": "让我们带着足球康欢吧"
                    },
                    {
                        "game_icon":"./img/4.jpg",
                        "game_name": "模拟世界",
                        "game_keyword": [
                            "足球",
                            "蓝球",
                            "独家版权"
                        ],
                        "number": 500,
                        "game_desp": "让我们带着足球康欢吧"
                    }
                ]
            }
            var myTemplate = Handlebars.compile($("#colliction_li_template").html());
            $('#my-coll-ul').html(myTemplate(collaction_data));

            //模拟热门游戏json数据
            var data = {
                "hot_game": [
                    {
                        "game_icon":"http://img20.360buyimg.com/da/jfs/t1897/284/2962274683/36748/ad6e193b/56fb9068N0e15cb9c.jpg",
                        "game_name": "模拟世界",
                        "game_keyword": [
                            "足球",
                            "蓝球",
                            "独家版权"
                        ],
                        "number": 500,
                        "game_desp": "让我们带着足球康欢吧"
                    },
                    {
                        "game_icon":"http://img11.360buyimg.com/vclist/jfs/t2593/363/17771132/19810/2f1f70a6/56fb83d1N2c76ba29.jpg",
                        "game_name": "模拟世界",
                        "game_keyword": [
                            "足球",
                            "蓝球",
                            "独家版权"
                        ],
                        "number": 500,
                        "game_desp": "让我们带着足球康欢吧"
                    },
                    {
                        "game_icon":"http://img12.360buyimg.com/vclist/jfs/t2344/58/2238244929/36542/a07016f2/56fba392N592ad37c.jpg",
                        "game_name": "模拟世界",
                        "game_keyword": [
                            "足球",
                            "蓝球",
                            "独家版权"
                        ],
                        "number": 500,
                        "game_desp": "让我们带着足球康欢吧"
                    },
                    {
                        "game_icon":"http://img11.360buyimg.com/da/jfs/t2461/180/2793695659/18780/4ae60869/56f251c1N3ffca095.jpg",
                        "game_name": "模拟世界",
                        "game_keyword": [
                            "足球",
                            "蓝球",
                            "独家版权"
                        ],
                        "number": 500,
                        "game_desp": "让我们带着足球康欢吧"
                    },
                    {
                        "game_icon":"http://img13.360buyimg.com/da/jfs/t2056/310/2011531462/60069/cb8c11fb/56e8ceb8N805ea066.jpg",
                        "game_name": "模拟世界",
                        "game_keyword": [
                            "足球",
                            "蓝球",
                            "独家版权"
                        ],
                        "number": 500,
                        "game_desp": "让我们带着足球康欢吧"
                    },
                    {
                        "game_icon":"http://img13.360buyimg.com/vclist/jfs/t1969/283/2891874506/25015/da96886c/56f3761eN5f9ea9be.jpg",
                        "game_name": "模拟世界",
                        "game_keyword": [
                            "足球",
                            "蓝球",
                            "独家版权"
                        ],
                        "number": 500,
                        "game_desp": "让我们带着足球康欢吧"
                    },
                    {
                        "game_icon":"http://img12.360buyimg.com/vclist/jfs/t2446/118/2222601971/20761/87b70ff/56f8cee5N2e6e5d16.png",
                        "game_name": "模拟世界",
                        "game_keyword": [
                            "足球",
                            "蓝球",
                            "独家版权"
                        ],
                        "number": 500,
                        "game_desp": "让我们带着足球康欢吧"
                    },
                    {
                        "game_icon":"http://img1.cache.netease.com/catchpic/4/42/427BBD9D4016271BE000E4DC4FD7B368.jpg",
                        "game_name": "模拟世界",
                        "game_keyword": [
                            "足球",
                            "蓝球",
                            "独家版权"
                        ],
                        "number": 500,
                        "game_desp": "让我们带着足球康欢吧"
                    },
                    {
                        "game_icon":"http://img30.360buyimg.com/da/jfs/t1882/55/2991956492/15620/3f71296e/56f88749N6ae4a1b8.jpg",
                        "game_name": "模拟世界",
                        "game_keyword": [
                            "足球",
                            "蓝球",
                            "独家版权"
                        ],
                        "number": 500,
                        "game_desp": "让我们带着足球康欢吧"
                    },
                    {
                        "game_icon":"http://img13.360buyimg.com/da/jfs/t2479/98/2255493594/18889/62eee700/56f8c7b7N243000a3.jpg",
                        "game_name": "模拟世界",
                        "game_keyword": [
                            "足球",
                            "蓝球",
                            "独家版权"
                        ],
                        "number": 500,
                        "game_desp": "让我们带着足球康欢吧"
                    },
                    {
                        "game_icon":"http://img30.360buyimg.com/da/jfs/t1852/150/2911267616/18665/a8313a27/56f94e76N0204ddfe.jpg",
                        "game_name": "模拟世界",
                        "game_keyword": [
                            "足球",
                            "蓝球",
                            "独家版权"
                        ],
                        "number": 500,
                        "game_desp": "让我们带着足球康欢吧"
                    },
                    {
                        "game_icon":"http://img3.shijue.cvidea.cn/tf/150217/2373626/54e332753dfae970aa000001.JPEG",
                        "game_name": "模拟世界",
                        "game_keyword": [
                            "足球",
                            "蓝球",
                            "独家版权"
                        ],
                        "number": 500,
                        "game_desp": "让我们带着足球康欢吧"
                    }
                ]
            }
            var myTemplate = Handlebars.compile($("#card_template").html());
            $('#divList').append(myTemplate(data));


        });
/*        $(function () {
            $(".scrollLoading").scrollLoading();
        });*/

        $.init() // sui初始化
    }

    return {
        home: home_js,
        game: game_js,
    }
})
