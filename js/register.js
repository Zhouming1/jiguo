function check(form) {
    var p1 = form.password1;
    var p2 = form.password2;
    if (p1.value !== p2.value) {
        p2.oninvalid();
        return false;
    }
    return true;
}

window.onload = function () {
    //获取froms返回法人数组的集合中的p2
    var p2 = document.forms["my_f1"].password2;
    //验证通过与不通过
    p2.oninvalid = function () {
        this.setCustomValidity("密码不一致，请重新输入");
    }
    p2.oninput = function () {
        this.setCustomValidity("");
    }

}
    // 验证码
    var wait = 60;

    function yzm() {
        if (wait === 0) {
            $(".Code").text("获取验证码");
            wait = 60;
            //当秒数等于0的时候按钮恢复可点击
            $(".Code").attr('disabled', false);
        } else {
            wait--;
            $(".Code").text(wait + "秒后重新发送");
            setTimeout(function () {
                yzm();
            }, 1000);
        }
    }
