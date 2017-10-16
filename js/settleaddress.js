$(function () {
    //获取地址列表
    $.ajax({
        type:"get",
        url : "https://api.leduika.com/v110/user/address.html?token="+localStorage.token,
        dataType : 'JSONP',
        jsonpCallback : 'callback2',
        data : {
            isJSONP : 1,
            callback :2
        },
        success : function (data) {
            data.result.forEach(function (v,i) {
                console.log(v)
                var acclass=v.isdefault=="1"?"active":"";
                $('<li data_id="'+v.addressid+'"><div class="address"><div class="addressrow"><div class="addressrow-name"><div class="name">'+v.consignee+'<span class="'+acclass+'">(默认地址)</span></div><div class="photonum">'+v.mobile+'</div></div><div class="addressrow-add">'+v.provincename+v.cityname+v.districtname+v.address+'</div></div></div></li>').appendTo("ul");
            })
        }
    });
//    点击地址
    $("ul").on("click","li",function () {
            location.href="../html/settlement.html"+location.search+"&addressid="+$(this).attr("data_id")
    })
})