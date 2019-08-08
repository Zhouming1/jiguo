$(function () {
    $('.first').css('marginLeft', '-1000px')
    function torig() {  
        if (right == 0) {//判断是否有必要执行
            right = 1;
            // $(x.group).css('margin-left', -a * x.num + 'px');//初始位置
            $('.first').css('margin-left', '-1000px');//初始位置
            $('.first').animate({//自定义动画
                'margin-left': 0,//margin变为0
            }, 1000, function () {
                right = 0;
                $('.first li').slice(-4).prependTo($('.first'));//改变位置
                $('.first').css('margin-left', '-1000px');//初始化位置
            })
        }
        return false;
    }
    function tolef() {
        if (left == 0) {//判断是否有必要执行
            left = 1;
            $('.first').css('margin-left', '-1000px');//初始位置
            $('.first').animate({//自定义动画
                'margin-left': '-2000px',//margin变化
            }, 1000, function () {
                left = 0;
                $('.first li').slice(0, 4).appendTo($('.first'));//改变位置
                $('.first').css('margin-left', '-1000px');//初始化位置
            })
        }
        return false;
    }
    //计时器
    var foctime=0;
    foctime=setInterval(torig,3000)
    $('.hot').hover(function(){
        clearInterval(foctime);
    },function(){
        foctime=setInterval(torig,3000);
    })
    var left=0;
    $(".left").on("click",tolef);
    var right=0;
    $(".right").on("click",torig);

    // var num = 0;
    // var T = -3000;
    // var timer = null;
    // function autoplay() {
    //     // var index = $('.first li').index($(this));
    //     // console.log(index);
    //     $('.first').stop().animate({'marginLeft': num + 'px'}, 800);

    //     num -= 1000;
    //     if (num === T) {
    //         $('.first').css('marginLeft', 0);
    //         num = 0;
    //     }
    // }
    // autoplay();
    // timer = setInterval(autoplay, 3000);
    //     $(".left").on("click",function () {
    //         autoplay();
    //         return false;
    //     });

    //     $(".right").on("click",function () {
    //         autoplay();
    //         return false;
    //     });

    //报告精选
    $.ajax({
        url: "./json/json.json",
        beforeSend: function () {
        },
        success: function (data) {
            // console.log(data);
            //dot.js 模板引擎
            var report = doT.template($('#report_').text());
            $('#list').html(report(data));
            var guide = doT.template($('#guide_').text());
            $('#daogou_list').html(guide(data));
            var kuwan = doT.template($('#kuwan_').text());
            $('#myDiv').html(kuwan(data));
        }
    });
    $(".playMore").on("click", function (e) {
        e = e || event;
        e.preventDefault();
        $(this).find("a").removeClass("more-btn");
        $(this).find("a").addClass("loading");
    });

    //返回顶部

    document.onscroll = function () {
        if (document.documentElement.scrollTop > document.documentElement.clientHeight) {
            $(".backTop").css("bottom", "150px");
            $(".backTop").show()
        } else {
            $(".backTop").hide();
        }
    }
    $(this).on("click", function () {
        var timer = setInterval(function () {
            document.documentElement.scrollTop -= 100;
            if (document.documentElement.scrollTop <= 0) {
                clearInterval(timer);
            }
        }, 1);
    });

    setInterval(function(){
        var a=new Date('2019 6 1');
        var b=new Date();
        var c=a.getTime()-b.getTime();
        var d=Math.floor(c/1000/60/60/24)+'天'+Math.floor(c/1000/60/60%24)+'时'+Math.floor(c/1000/60%60)+'分'+Math.floor(c/1000%60)+'秒'
        $('.time span').text(d);
    },1000)
})