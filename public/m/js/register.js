

$(function(){
    $("#register").on("click", function(){
        var username = $("#username").val();
        var mobile = $("#mobile").val();
        var password = $("#password").val();
        var againPassword = $("#againPassword").val();
        var vCode = $("#vCode").val();
        $.ajax({
            type: "post",
            url: "/user/register",
            data: {
                "username" : username,
                "password" : password,
                "mobile" : mobile,
                "vCode" : vCode
            },
            beforeSend: function(){
                if(!username || !mobile || !password || !againPassword || !vCode){
                    mui.toast("信息不能为空");
                    return false;
                }   
                if(password != againPassword){
                    alert("密码不一致");
                    return false;
                }
            },
            success : function(res){
                if(res.success){
                    mui.toast("注册成功");
                    setTimeout(function(){
                        location.href="/m/person.html"
                    },"2000")
                }
            }
        })
    })
    $("#getCode").on("click", function(){
        $.ajax({
            type: "get",
            url: "/user/vCode",
            success: function(res){
                console.log(res.vCode);
            }
        })
    })
    $("#login").on("click", function(){
        location.href="/m/login.html";
    })
})
