$(function(){
    var userName= /^[a-z0-9]{3,16}$/
    var phone = /^1[3456789]\d{9}$/
    var password = 	/^[A-z0-9]{6,18}$/
    var email = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
    var userName1 = $("#userName")
    var phone1 = $("#phone")
    var password1 = $("#password")
    var email1 = $("#email")
    userName1.blur(function(){
        var _this = this          
        var str = userName1.val()
        if(str==""){
            $(_this).next("p").css({
                color:"red"
            })
            $(_this).next("p").html("请输入用户名")
        }else{
            $(_this).next("p").html("用户名格式不正确")
            if(userName.test(str)){
                $(_this).next("p").css({
                    color:"#fff",
                })
            }else{
                $(_this).next("p").css({
                    color:"red",
                })
                
            } 
        }
    })
    email1.blur(function(){
        var _this = this          
        var str = email1.val()
        if(str==""){
            $(_this).next("p").css({
                color:"red"
            })
            $(_this).next("p").html("请输入邮箱")
        }else{
            $(_this).next("p").html("邮箱格式不正确")
            if(email.test(str)){
                $(_this).next("p").css({
                    color:"#fff",
                })
            }else{
                $(_this).next("p").css({
                    color:"red",
                })
                
            } 
        }
    })
    phone1.blur(function(){
        var _this = this          
        var str = phone1.val()
        if(str==""){
            $(_this).next("p").css({
                color:"red"
            })
            $(_this).next("p").html("请输入手机号")
        }else{
            $(_this).next("p").html("手机号格式不正确")
            if(phone.test(str)){
                $(_this).next("p").css({
                    color:"#fff",
                })
            }else{
                $(_this).next("p").css({
                    color:"red",
                })                
            } 
        }
    })
    password1.blur(function(){
        var _this = this          
        var str = password1.val()
        if(str==""){
            $(_this).next("p").css({
                color:"red"
            })
            $(_this).next("p").html("请输入密码")
        }else{
            $(_this).next("p").html("密码格式不正确")
            if(password.test(str)){
                $(_this).next("p").css({
                    color:"#fff",
                })
            }else{
                $(_this).next("p").css({
                    color:"red",
                })
                
            } 
        }
    })
    var btn = $(".button")
    btn.click(function(){  
        var color = $(".input p").css("color")      
        if(color == "rgb(255, 255, 255)"){
            if($(".input input").val() != ""){
                $.ajax({
                    url:"http://192.168.1.103:3000/users/register",            
                    type:"post",
                    data:{
                        username:$("#userName").val(),
                        password:$("#password").val(),
                        email:$("#email").val(),
                        phone:$("#phone").val(),
                    },
                    success:function(res){
                        
                        if(res.msg == "注册成功"){
                            console.log(res)
                            alert("注册成功，即将返回登录页")
                            setTimeout(function(){
                                location.href = "login.html"
                            },1000)
                        }else if(res.msg == "用户名已存在"){
                            alert("用户名已存在")
                        }
                        
                    }
                })
            }else{
                alert("请输入账户信息") 
            }
        }else{
            alert("请检查账户信息")
        }
    })

})
