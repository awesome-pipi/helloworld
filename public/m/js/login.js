$(function(){
    $("#login").on("click", function(){
        var username = $("#username").val();
        var password = $("#password").val();
        alert(123);
        $.ajax({
            type: "post",
            url: "/user/login",
            data: {
                username,
                password
            },
            beforeSend: function(){
                if(!username || !password){
                    mui.toast("用户名或密码为空")
                    return false;
                }
            },
            success: function(res){
                console.log(res);
                if(res.success){
                    $("#login").text("正在登录");
                    setTimeout(function(){
                        location.href="/m/person.html"
                    }, 2000)
                }
            }
        })
    })
    $("#register").on("click", function(){
        location.href="/m/register.html";
    })
})