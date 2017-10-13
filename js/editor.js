/**
 * Created by xinmao on 2017/10/12.
 */
$(function () {
    var data=location.search.split("&");
        $("input[name='name']").val(data[0].split("=")[1]);
        $("input[name='mobile']").val(data[1].split("=")[1]);
        $(".preservation").click(function () {
            $.ajax({
                type:"get",
                url : "https://api.leduika.com/v110/user/upaddress.html?",
                dataType : 'JSONP',
                jsonpCallback : 'callback2',
                data : {
                    isJSONP : 1,
                    callback :2
                },
                success : function (data) {
                    console.log(data)
                }

            });
        })
})