$(function () {

    function GetQueryString(name) {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }
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
            if(location.href.indexOf("addressid")<0 ){
                var data=data.result[0];
                $('<div class="addpic"></div><div class="addinfo" address_id="'+data.addressid+'"><div class="addname"><div class="name">收货人: <span>'+data.consignee+'</span></div><div class="phone">'+data.mobile+'</div></div><div class="goodsadd"><span>收货地址: </span><p>'+data.provincename+data.cityname+data.districtname+data.address+'</p></div></div><a href="../html/settleaddress.html'+location.search.split("addressid")[0]+'"><div class="addarrow"></div></a>').appendTo(".address");
            }else{
                data.result.forEach(function (v,i) {
                    if(v.addressid==GetQueryString("addressid")){
                        $('<div class="addpic"></div><div class="addinfo" address_id="'+v.addressid+'"><div class="addname"><div class="name">收货人: <span>'+v.consignee+'</span></div><div class="phone">'+v.mobile+'</div></div><div class="goodsadd"><span>收货地址: </span><p>'+v.provincename+v.cityname+v.districtname+v.address+'</p></div></div><a href="../html/settleaddress.html'+location.search.split("addressid")[0]+'"><div class="addarrow"></div></a>').appendTo(".address");
                    }
                })
            }

        }
    })

    // 列表获取
    $.ajax({
        type:"get",
        url : "https://api.leduika.com/v110//cart/buynow.html"+location.search,
        dataType : 'JSONP',
        jsonpCallback : 'callback2',
        data : {
            isJSONP : 1,
            callback :2
        },
        success:function (data) {
            console.log(data)
            data.result.list.forEach(function (v,i) {
                var number=0;
                var price=0;
                v.goods.forEach(function (val,index) {
                    Number=val.buynum;
                    // console.log(Number)
                    number+=parseInt(val.buynum);
                    price+=parseInt(val.buynum)*parseInt(val.saleprice);
                });
                $('<li data_id="'+v.supplier.supplierid+'"><div class="shopname"><div class="namebox"><div class="shoplogo" style="background-image: url('+v.supplier.img+')"></div><div class="name">'+v.supplier.name+'</div></div></div><div class="list_list"></div><div class="buynumber"><span>购买数量</span> <div class="buynumberbox"><span>（限购10件）</span><div class="addandsubtract"><div class="subtract">-</div><i class="number">'+Number+'</i><div class="add">+</div></div></div></div></div><div class="mode"><span>配送方式</span><span>物流配送</span></div><div class="message"><span>用户留言</span><input type="text" placeholder="请在此处填写留言" name="message"></div><div class="lifoot"><span>共'+number+'件商品，小计 <i></i><i class="jifen">'+price+'积分</i></span></div></li>').appendTo(".sectionblock ul");

                v.goods.forEach(function (v,index) {
                    $('<div class="purchase" data_id="'+v.id+'"><div class="buypic"><div class="pic" style="background: url('+v.original+') no-repeat center/cover"></div></div><div class="buystore"><div class="store"><p>'+v.name+'</p><p>'+v.skuname+'</p></div><div class="storenum"><div class="integral"><div class="star"></div><i>'+v.saleprice.split(".")[0]+'积分</i></div><span class="nums">X'+Number+'</span></div></div></div>').appendTo($(".list_list")[i])
                })
            });

            // 加减操作
            $('.sectionblock ul').on('click','.add',function () {
                var num=$(this).prev().html();
                num++;
                if(num>10){
                    $(this).prev().html(10)
                }else{
                    $(this).prev().html(num);
                    $('.nums').html("X"+num);
                }
                var jifen=parseInt($('.integral i').html().split('积')[0])*parseInt($('.nums').html().split('X')[1]);
                $('.jifen').html(jifen+'积分')
                $('.join').html('合计： '+jifen+'积分')
            })
            $(".sectionblock ul").on('click','.subtract',function () {
                var num=$(this).next().html();
                num--;
                if(num<1){
                    $(this).next().html(1)
                }else{
                    $(this).next().html(num);
                    $('.nums').html("X"+num);
                }
                var jifen=parseInt($('.integral i').html().split('积')[0])*parseInt($('.nums').html().split('X')[1]);
                $('.jifen').html(jifen+'积分')
                $('.join').html('合计： '+jifen+'积分')
            });

            var total=0;
            $(".jifen").each(function (i,vrr) {
                total+=parseInt($(vrr).html().split("积")[0]);
            });
            $(".join").html("合计："+total+"积分");
        }
    })

    //立即下单操作
    $(".exchange").click(function () {
        var xid=$('.purchase').attr('data_id');
        var xsupplier_id=$('li').attr('data_id');
        var xmessage=$('.message input').val();
        var buynum=$('.number').html();
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
                buynum:buynum,
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
                    $('.success').css('display','block');
                    $('.address-box').css('marginTop','0');
                    $('footer').css('display','none')
                }
            }
        })
    })
});