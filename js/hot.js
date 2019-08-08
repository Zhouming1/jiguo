$(function () {
    $.ajax({
        url: "json/report.json",
        beforeSend:function(){
            $("#report-btn").toggle("more-btn");
            $("#report-btn").toggle("loading");
        },
        success: function (data) {
            console.log(data);
            var report_data = doT.template($("#data").text());
            $("#myDiv").html(report_data(data));
            $("#myDiv li:gt(7)").hide();
            var num = 8;
            $("#report-btn").on("click",function (e) {
                e = e||event;
                e.preventDefault();
                num +=4;
                $("#myDiv li:lt("+num+")").show();
            });
            if (num>=$("#myDiv li").length){
                $(".more-btn").hide();
                $(".none").css("display","block");
            }
        }
    });
})