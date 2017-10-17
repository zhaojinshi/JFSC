/**
 * Created by xinmao on 2017/10/14.
 */
$(function () {
    $.ajax({
        type:"get",
        url : "https://api.leduika.com/v110/user/userinfo.html?token="+localStorage.token,
        dataType : 'JSONP',
        jsonpCallback : 'callback2',
        data : {
            isJSONP : 1,
            callback :2
        },
        success : function (data) {
            console.log(data)
            $('<div class="avatar" style="background-image:url('+data.result.logo+')"></div><div class="nickname">'+data.result.nickname+'</div>').appendTo(".myinfo");
            $(".intnum").html(data.result.integral)
        }
    });

})