$(function(){
    var arr = [];
    var arrList = !JSON.parse(localStorage.getItem("historyList")) ? []:JSON.parse(localStorage.getItem("historyList"));
    var html = template("historyTpl", {data:arrList});
        $("#historyList").html(html);
        $(".btn_search").on("click", function(){
            var result = $(".search_res").val();
            if(result.trim()==""){
                mui.alert("搜索信息不能为空");  
                // $(".search_res").val("搜索信息不能为空").css("color", "red");
                // $(".search_res").css("color", "red");
                return;
            }    
        arrList.push(result);
        var historyList = JSON.stringify(arrList);
        localStorage.setItem("historyList", historyList);
        location.href="./searchResult.html?kw="+result;
    })

    $(".clearHistory").on("click", function(){
        localStorage.clear();
        $("#historyList").html("");
    })

})