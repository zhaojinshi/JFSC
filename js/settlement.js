$(function () {
    //地址获取
    $.ajax({
        type:"get",
        url:"https://api.leduika.com/v110/user/address.html",
        dataType:'JSONP',
        jsonpCallback:'callback3',
        data:{
            isJSONP : 1,
            callback :3
        },
        success:function (data) {
            // console.log(data)
            if(location.search.indexOf("&")<0){
                var data=data.result[0];
                $('<div class="addpic"></div><div class="addinfo" address_id="'+data.addressid+'"><div class="addname"><div class="name">收货人: <span>'+data.consignee+'</span></div><div class="phone">'+data.mobile+'</div></div><div class="goodsadd"><span>收货地址: </span><p>'+data.provincename+data.cityname+data.districtname+data.address+'</p></div></div><a href="../html/settleaddress.html'+location.search.split("&")[0]+'"><div class="addarrow"></div></a>').appendTo(".address");
            }else{
               data.result.forEach(function (v,i) {
                   if(v.addressid==location.search.split("&")[1].split("=")[1]){
                       $('<div class="addpic"></div><div class="addinfo" address_id="'+v.addressid+'"><div class="addname"><div class="name">收货人: <span>'+v.consignee+'</span></div><div class="phone">'+v.mobile+'</div></div><div class="goodsadd"><span>收货地址: </span><p>'+v.provincename+v.cityname+v.districtname+v.address+'</p></div></div><a href="../html/settleaddress.html'+location.search.split("&")[0]+'"><div class="addarrow"></div></a>').appendTo(".address");
                   }
               }) 
            }
            
        }
    })
    //订单列表操作
    $.ajax({
        type:"get",
        url : "https://api.leduika.com/v110/checkout/index.html"+location.search,
        dataType : 'JSONP',
        jsonpCallback : 'callback2',
        data : {
            isJSONP : 1,
            callback :2
        },
        success:function (data) {
            // console.log(data)
            data.result.list.forEach(function (v,i) {
                var number=0;
                var price=0;
                v.goods.forEach(function (val,index) {
                    number+=parseInt(val.buynum);
                    price+=parseInt(val.buynum)*parseInt(val.saleprice);
                })
                $('<li data_id="'+v.supplier.supplierid+'"><div class="shopname"><div class="namebox"><div class="shoplogo" style="background-image: url('+v.supplier.img+')"></div><div class="name">'+v.supplier.name+'</div></div></div><div class="list_list"></div></div><div class="mode"><span>配送方式</span><span>物流配送</span></div><div class="message"><span>用户留言</span><input type="text" placeholder="请在此处填写留言" name="message"></div><div class="lifoot"><span>共'+number+'件商品，小计 <i></i><i class="jifen">'+price+'积分</i></span></div></li>').appendTo(".sectionblock ul")

                v.goods.forEach(function (v,index) {
                    $('<div class="purchase" data_id="'+v.id+'"><div class="buypic"><div class="pic" style="background: url('+v.original+') no-repeat center/cover"></div></div><div class="buystore"><div class="store"><p>'+v.name+'</p><p>'+v.skuname+'</p></div><div class="storenum"><div class="integral"><div class="star"></div><i>'+v.saleprice.split(".")[0]+'积分</i></div><span class="nums">X'+v.buynum+'</span></div></div></div>').appendTo($(".list_list")[i])
                })
            });
            // var num=$('.storenum .nums').html();
            // $('.addandsubtract .number').html(num);
            var total=0;
            $(".jifen").each(function (i,vrr) {
                total+=parseInt($(vrr).html().split("积")[0]);
            })
            $(".join").html("合计："+total+"积分");
        }
    })
    // 立即下单操作
    $(".exchange").click(function () {
        var xid=[];
        var xsupplier_id=[];
        var xmessage=[];
        $(".purchase").each(function (i,v) {
            xid.push($(v).attr("data_id"))
        })
        xid=xid.join(",");
        $(".sectionblock ul li").each(function (i,v) {
            xsupplier_id.push($(v).attr("data_id"))
        })
        xsupplier_id=xsupplier_id.join(",");

        $("input[name='message']").each(function (i,v) {
            xmessage.push($(v).val())
        })
        xmessage=xmessage.join(",");
        $.ajax({
            type:"get",
            url : "https://api.leduika.com/v110/neworder/order.html",
            dataType : 'JSONP',
            jsonpCallback : 'callback2',
            data : {
                id:xid,
                addressid:$(".addinfo").attr("address_id"),
                supplier_id:xsupplier_id,
                message:xmessage,
                isJSONP : 1,
                callback :2,
            },
            success:function (data) {
                console.log(data)
                if(data.msg=='部分商品已下架'){
                    $(".suc-btn").remove();
                    $('<div class="suc-btn">'+data.msg+'</div>').appendTo('body');
                    setTimeout(function () {
                        $('.suc-btn').addClass('active')
                    },50);
                    setTimeout(function () {
                        $('.suc-btn').css("opacity","0").hide().removeClass('active')
                    },1000);
                }
                if(data.msg=='success'){
                    $('.success').css('display','block')
                    $('.address-box').css('marginTop','0')
                    $('footer').css('display','none')
                }
            }
        })
    })
});