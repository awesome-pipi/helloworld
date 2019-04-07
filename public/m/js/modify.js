$(function(){
    $("#getCode").on("click", function(){
        $.ajax({
            type: "get",
            url: "/user/vCode",
            success: function(res){
                console.log(res.vCode);
            }
        })
    })
    $("#modify").on("click", function(){
        var originalPwd = $("#originalPwd").val();
        var password = $("#password").val();
        var newPassword = $("#newPassword").val();
        var vCode = $("#vCode").val();
        console.log(vCode);
        $.ajax({
            type: "post",
            url: "/user/updatePassword",
            data: {
                oldPassword : originalPwd,
                newPassword : password,
                vCode : vCode
            },
            beforeSend: function(){
                if(!originalPwd || !password || !newPassword || !vCode){
                    mui.toast("用户信息不能为空");
                    return false;
                }
                if(password != newPassword){
                    mui.toast("请输入正确的密码")
                }
            },
            success: function(res){
                console.log(res);
                if(res.success){
                    mui.toast("修改密码成功");
                    setTimeout(function(){
                        location.href = "login.html"
                    }, 2000)
                }
            }
        })
    })
})