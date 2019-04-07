$(function(){
    mui('myFooter').on('tap', "a", function(){
        console.log(this);
        $(this).addClass("mui-active").siblings().removeClass("mui-active");
    })
    $("body").on('tap','a',function(){
        console.log(this.href)
        location.href = this.href
        $(this).addClass("mui-active").siblings().removeClass("mui-active");

    })
})