var userInfo = null;
$.ajax({
    type: "get",
    url: "/user/queryUserMessage",
    async : false,
    success: function(res){
        // console.log(res);
        if(res.error){
            location.href = "login.html"
        }
        userInfo = res;
    }
})
$(function(){
   $("#quitLogin").on("click", function(){
       $.ajax({
           type: "get",
           url: "/user/logout",
           success: function(res){
               if(res.success){
                   location.href = "/m/login.html"
               }
           }
       })
   })
   var html = template("userTpl" , userInfo);
   $("#user").html(html);
   $("#modify").on("click", function(){
       location.href = "/m/modify.html";
   })
   $("#address").on("click", function(){
        location.href = "address.html"
   })
})

