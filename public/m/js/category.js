$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

    $.ajax({
        type:"get",
        url: "/category/queryTopCategory",
        dataType: 'json',
        success: function(res){
            var html = template("topCatList" ,res);
            $(".leftRoll").html(html); 
            $("#leftRoll").find("li").eq(0).addClass("active");
            // console.log($("#leftRoll").find("li").eq(0));
        },
        
    })
    console.log($("#leftRoll>li").eq(0));
    $(".leftRoll").on("click", "li", function(){
        var id = $(this).data("id");
        $.ajax({
            type: "get",
            url: "/category/querySecondCategory",
            datatype: "json",
            data:{
                "id": id,
            },
            success: function(res){
                var html = template("secondCate", res);
                $("#right_content").html(html);
            }
        })
        $(this).addClass("active").siblings().removeClass("active");
    })
    
})

