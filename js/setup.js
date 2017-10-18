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
            // console.log(data)
            $('<li><div class="toppt"><div class="libefore"><div class="nickimg"></div><p>昵称</p></div><a href="modifyname.html?nickname='+data.result.nickname+'" style="display: block;"><div class="liafter"><span>'+data.result.nickname+'</span><div class="clickset"></div></div></a></div></li>').appendTo('.setup')
        }
    });

})