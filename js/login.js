$(function () {
    var erweima = $(".erweima")
    var login = $(".login-back1")
    var ewm = $(".ewm")
    var btn1 = $(".ewm button")
    erweima.click(function () {
        login.prevAll("h3").html("二维码登录")
        login.addClass("login-none")
        ewm.removeClass("login-none")

    })
    btn1.click(function () {
        login.prevAll("h3").html("用户登录")
        login.removeClass("login-none")
        ewm.addClass("login-none")
    })
    var userName = /^[a-z0-9]{3,16}$/
    var password = /^[A-z0-9]{6,18}$/
    var userName1 = $("#userName")
    var password1 = $("#password")
    userName1.blur(function () {
        var _this = this
        var str = userName1.val()
        if (str == "") {
            $(_this).next("p").css({
                color: "red"
            })
            $(_this).next("p").html("请输入用户名")
        } else {
            $(_this).next("p").html("用户名格式不正确")
            if (userName.test(str)) {
                $(_this).next("p").css({
                    color: "#fff",
                })
            } else {
                $(_this).next("p").css({
                    color: "red",
                })

            }
        }
    })
    password1.blur(function () {
        var _this = this
        var str = password1.val()
        if (str == "") {
            $(_this).next("p").css({
                color: "red"
            })
            $(_this).next("p").html("请输入密码")
        } else {
            $(_this).next("p").html("密码格式不正确")
            if (password.test(str)) {
                $(_this).next("p").css({
                    color: "#fff",
                })
            } else {
                $(_this).next("p").css({
                    color: "red",
                })

            }
        }
    })
    var btn = $(".yzm")
    btn.click(function () {
        var color = $(".input p").css("color")
        var str = password1.val()
        var str1 = userName1.val()
        if (color == "rgb(255, 255, 255)" && str != "" && str1 != "") {
            function rand(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }
            var randnum = rand(1000, 9999);
            btn.html(randnum)
            var yz = $(".button")
            var yzval
            yz.blur(function(){
                yzval = yz.val(); 
                if (btn.html() == yzval) {               
                    $(".lo").click(function () {
                        $.ajax({
                            url: "http://192.168.1.103:3000/users/login",
                            type: "post",
                            data: {
                                username: $("#userName").val(),
                                password: $("#password").val(),
                            },
                            success: function (res) {
                                console.log($("#userName"))
                                if(res.state == "1") {
                                    alert("用户名不存在")
                                }else if (res.state == "2") {
                                    alert("用户名或密码错误")
                                }else if (res.state == "0") {
                                    alert("登录成功，即将跳转至首页")
                                    localStorage.setItem("token",res.token);
                                    $.ajax({
                                        url:"http://192.168.1.103:3000/users/userinfo",
                                        type:"get",
                                        data:{
                                            username:$("#userName").val(),
                                            token:localStorage.getItem("token")
                                        },
                                        success:function(res1){
                                            if(res1.state == "0"){
                                                localStorage.setItem("user",JSON.stringify(res1.userinfo))
                                                setInterval(function(){
                                                    location.href = "index.html"
                                                })
                                            }
                                        }
                                    })
                                }
                            }
                        })
    
                    })
                }
            })
            
            
            
        }


    })
})
