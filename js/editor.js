/**
 * Created by xinmao on 2017/10/12.
 */
$(function () {
    var data=location.search.split("&");
    var addressid=data[4].split("=")[1];
        $("input[name='name']").val(decodeURIComponent(data[0].split("=")[1]));
        $("input[name='mobile']").val(data[1].split("=")[1]);
        $("#show_contact").html(decodeURIComponent(data[2].split("=")[1]));
        $('textarea').val(decodeURIComponent(data[3].split("=")[1]))

        //保存修改得地址
        $(".preservation").click(function () {
            var defaul=data[5].split("=")[1];
            var name = $('input[name="name"]').val(),
                phone = $('input[name="mobile"]').val(),
                province = $('#show_contact').attr("data-province-code"),
                city =$('#show_contact').attr("data-city-code"),
                district = $('#show_contact').attr("data-district-code"),
                address = $('textarea').val().trim();
            $.ajax({
                type:"get",
                url : "https://api.leduika.com/v110/user/upaddress.html",
                dataType : 'JSONP',
                jsonpCallback : 'callback2',
                data : {
                    isJSONP : 1,
                    callback :2,
                    addressid:addressid,
                    consignee : name ,
                    mobile : phone,
                    province : province,
                    city : city,
                    district : district,
                    address : address,
                    isdefault : defaul
                },
                success : function (data) {
                    console.log(data)
                    location.href="../html/address.html"
                }
            });
        })

    $(".footer p").click(function () {
        $.ajax({
            type:"get",
            url : "https://api.leduika.com/v110/user/addressdel.html?addressid="+addressid+"&token="+localStorage.token,
            dataType : 'JSONP',
            jsonpCallback : 'callback2',
            data : {
                isJSONP : 1,
                callback :2
            },
            success : function (data) {
                console.log(data)
                location.href="../html/address.html"
            }
        });
    })
})