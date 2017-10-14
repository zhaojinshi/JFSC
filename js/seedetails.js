$(function () {
    $.ajax({
        type:"get",
        url : "https://api.leduika.com/v110/neworder/orderinfo.html"+location.search,
        dataType : 'JSONP',
        jsonpCallback : 'callback2',
        data : {
            isJSONP : 1,
            callback :2
        },
        success:function (data) {
            var result=data.result;
            // console.log(data)
            $('<div class="addpic"></div><div class="addinfo"><div class="addname"><div class="name">收货人: <span>'+result.consignee+'</span></div><div class="phone">'+result.mobile+'</div></div><div class="goodsadd"><span>收货地址: </span> <p>'+result.provincename+result.cityname+result.districtname+result.address+'</p></div></div><div class="addarrow"></div>').appendTo(".address");
            $('<li><div class="shopname"><div class="namebox"><div class="shoplogo" style="background-image: url('+result.supplier_img+')"></div><div class="name">'+result.supplier_name+'</div></div></div><div class="list_list"></div></div><div class="mode"><span>配送方式</span><span>物流配送</span></div><div class="message"><span>用户留言</span><input type="text" name="message" value="'+result.message+'" readonly></div><div class="lifoot"><span>共'+result.buynum+'件商品，小计 <i></i><i class="jifen">'+result.totalprice.split(".")[0]+'积分</i></span></div></li>').appendTo(".sectionblock ul");
            result.goods.forEach(function (v,index) {
                $('<div class="purchase"><div class="buypic"><div class="pic" style="background: url('+v.goodimg+') no-repeat center/cover"></div></div><div class="buystore"><div class="store"><p>'+v.goodname+'</p><p>'+v.sku+'</p></div><div class="storenum"><div class="integral"><div class="star"></div><i>'+v.integral+'积分</i></div><span class="nums">X'+v.buynum+'</span></div></div></div>').appendTo($(".list_list"))
            })
        }
    })
})