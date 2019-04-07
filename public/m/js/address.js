$(function(){
    $.ajax({
        type: "get",
        url: "/address/addAddress",
        success: function(res){
            console.log(res);
           var html = template("addressTpl",res);
           $("#addressEntery").html(html);
        }
    })
})