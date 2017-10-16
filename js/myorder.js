$(function () {
    Ruderall();
    $('.stayorder li').on('click',function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $('.stayorder li:nth-child(1)').on('click',function () {
        Ruderall();
    });
    //渲染全部
    function Ruderall() {
        $('section').empty();
        $.ajax({
            type:"get",
            url:"https://api.leduika.com/v110/neworder/orderlist.html?token="+localStorage.token,
            dataType:'jSONP',
            jsonpCallback:'callback2',
            data:{
                isJSONP:1,
                callback:2
            },
            success:function (data) {
                // console.log(data.result)
                for(let i=0;i<data.result.length;i++){
                    var status=data.result[i].status;
                     if(status=="2"){
                        $('<div class="payment"><div class="paymentBox"><div class="payment-store"><span>'+data.result[i].supplier[0].supplier_name+'</span><i>买家已付款</i></div></div> <div class="paymentRow"><div class="payment-row"><div class="paymentpic"><img src="'+data.result[i].supplier[0].list[0].goodimg+'" alt="" style="width: 1.74rem;height: 1.74rem;"></div><div class="payment-box"><div class="payment-inn">'+data.result[i].supplier[0].list[0].goodname+'</div><div class="payment-price"><div class="price-box"><div class="price">'+data.result[i].supplier[0].list[0].buyintegral+' 积分</div><div class="price-num">x<span>'+data.result[i].supplier[0].list[0].buynum+'</span></div></div></div></div> </div></div><div class="payment-allbox"><div class="payment-inall"><span>共计<span>'+data.result[i].supplier[0].buynum+'</span>件商品， 合计:  <i>'+data.result[i].totalprice.split('.')[0]+' 积分</i></span></div></div><div class="payment-footer"><a href="../html/seedetails.html?orderid='+data.result[i].orderid+'"><div class="sees">查看详情</div></a></div></div>').appendTo($('section'))
                    }else if(status=="3"){
                        $('<div class="payment"><div class="paymentBox"><div class="payment-store"><span>'+data.result[i].supplier[0].supplier_name+'</span><i>卖家已发货</i></div></div><div class="paymentRow"><div class="payment-row"><div class="paymentpic"><img src="'+data.result[i].supplier[0].list[0].goodimg+'" alt="" style="width: 1.74rem;height: 1.74rem;"></div><div class="payment-box"><div class="payment-inn">'+data.result[i].supplier[0].list[0].goodname+'</div> <div class="payment-price"><div class="price-box"><div class="price">'+data.result[i].supplier[0].list[0].buyintegral+' 积分</div><div class="price-num">x<span>'+data.result[i].supplier[0].list[0].buynum+'</span></div></div></div></div></div> </div><div class="payment-allbox"><div class="payment-inall"><span>共计<span>'+data.result[i].supplier[0].buynum+'</span>件商品， 合计:  <i>'+data.result[i].totalprice.split('.')[0]+' 积分</i></span></div></div><div class="payment-footer"><a href="../html/logistics.html?shipno='+data.result[i].shipno+'" style="display: block"><div class="see">查看物流</div></a><div class="confirm" confirm-id='+data.result[i].orderid+'>确认订单</div></div></div>').appendTo($('section'))
                    }else if(status=="100"){
                        $('<div class="payment"><div class="paymentBox"><div class="payment-store"><span>'+data.result[i].supplier[0].supplier_name+'</span><i>交易成功</i></div></div><div class="paymentRow"><div class="payment-row"><div class="paymentpic"><img src="'+data.result[i].supplier[0].list[0].goodimg+'" alt="" style="width: 1.74rem;height: 1.74rem;"></div><div class="payment-box"><div class="payment-inn">'+data.result[i].supplier[0].list[0].goodname+'</div><div class="payment-price"><div class="price-box"><div class="price">'+data.result[i].supplier[0].list[0].buyintegral+' 积分</div><div class="price-num">x<span>'+data.result[i].supplier[0].list[0].buynum+'</span></div></div></div></div> </div></div><div class="payment-allbox"><div class="payment-inall"><span>共计<span>'+data.result[i].supplier[0].buynum+'</span>件商品， 合计:  <i>'+data.result[i].totalprice.split('.')[0]+' 积分</i></span></div></div><div class="payment-footer"><div class="see" delete-id='+data.result[i].orderid+'>删除订单</div></div></div>').appendTo($('section'))
                    }
                }

            }

        })
    }
    //待支付的取消订单页面（现在不用）
    // else if(status=="99"){
    //     $('<div class="payment"><div class="paymentBox"><div class="payment-store"><span>'+data.result[i].supplier[0].supplier_name+'</span><i>交易取消</i></div></div><div class="paymentRow"><div class="payment-row"><div class="paymentpic"><img src="'+data.result[i].supplier[0].list[0].goodimg+'" alt="" style="width: 1.74rem;height: 1.74rem;"></div><div class="payment-box"><div class="payment-inn">'+data.result[i].supplier[0].list[0].goodname+'</div><div class="payment-price"><div class="price-box"><div class="price">'+data.result[i].supplier[0].list[0].buyintegral+' 积分</div><div class="price-num">x<span>'+data.result[i].supplier[0].list[0].buynum+'</span></div></div></div></div> </div></div><div class="payment-allbox"><div class="payment-inall"><span>共计<span>'+data.result[i].supplier[0].buynum+'</span>件商品， 合计:  <i>'+data.result[i].totalprice.split('.')[0]+' 积分</i></span></div></div><div class="payment-footer"><div class="see">删除订单</div></div></div>').appendTo($('section'))
    // }
    // 待支付（现在不用）
    // $('.stayorder li:nth-child(2)').on('click',function () {
    //     $('section').empty();
    //     $.ajax({
    //         type:"get",
    //         url:"https://api.leduika.com/v110/neworder/orderlist.html?status=1&token="+localStorage.token,
    //         dataType:'jSONP',
    //         jsonpCallback:'callback5',
    //         data:{
    //             isJSONP:1,
    //             callback:5
    //         },
    //         success:function (data) {
    //             for(let i=0;i<data.result.length;i++){
    //                 // console.log(data.result)
    //                 $('<div class="payment"><div class="paymentBox"><div class="payment-store"><span>'+data.result[i].supplier[0].supplier_name+'</span><i>等待买家付款</i></div></div><div class="paymentRow"><div class="payment-row"><div class="paymentpic"><img src='+data.result[i].supplier[0].list[0].goodimg+' alt="" style="width: 1.74rem;height: 1.74rem;"></div><div class="payment-box"><div class="payment-inn">'+data.result[i].supplier[0].list[0].goodname+'</div><div class="payment-price"><div class="color">'+data.result[i].supplier[0].list[0].sku+'</div><div class="price-box"><div class="price">'+data.result[i].supplier[0].list[0].buyintegral+' 积分 + ￥'+data.result[i].totalpay+'</div><div class="price-num">x<span>'+data.result[i].supplier[0].list[0].buynum+'</span></div></div></div></div></div></div><div class="payment-allbox"><div class="payment-inall"><span>共计<span>'+data.result[i].supplier[0].buynum+'</span>件商品， 合计:  <i>'+data.result[i].totalprice.split('.')[0]+' 积分 + ￥'+data.result[i].totalpay+'(含运费￥'+data.result[i].shipfee+')</i></span></div> </div><div class="payment-footer"><div class="see">查看详情</div><div class="see confirm">付款</div></div></div>').appendTo($('section'))
    //             }
    //         }
    //
    //     })
    // })

    //待发货
    $('.stayorder li:nth-child(2)').on('click',function () {
        $('section').empty();
        $.ajax({
            type:"get",
            url:"https://api.leduika.com/v110/neworder/orderlist.html?status=2&token="+localStorage.token,
            dataType:'jSONP',
            jsonpCallback:'callback5',
            data:{
                isJSONP:1,
                callback:5
            },
            success:function (data) {
                for(let i=0;i<data.result.length;i++){
                    // console.log(data.result)
                    $('<div class="payment"><div class="paymentBox"><div class="payment-store"><span>'+data.result[i].supplier[0].supplier_name+'</span><i>买家已付款</i></div></div> <div class="paymentRow"><div class="payment-row"><div class="paymentpic"><img src="'+data.result[i].supplier[0].list[0].goodimg+'" alt="" style="width: 1.74rem;height: 1.74rem;"></div><div class="payment-box"><div class="payment-inn">'+data.result[i].supplier[0].list[0].goodname+'</div><div class="payment-price"><div class="price-box"><div class="price">'+data.result[i].supplier[0].list[0].buyintegral+' 积分</div><div class="price-num">x<span>'+data.result[i].supplier[0].list[0].buynum+'</span></div></div></div></div> </div></div><div class="payment-allbox"><div class="payment-inall"><span>共计<span>'+data.result[i].supplier[0].buynum+'</span>件商品， 合计:  <i>'+data.result[i].totalprice.split('.')[0]+' 积分</i></span></div></div><div class="payment-footer"><a href="../html/seedetails.html?orderid='+data.result[i].orderid+'"><div class="sees">查看详情</div></a></div></div>').appendTo($('section'))
                }

            }

        })
    })
    //待收货
    $('.stayorder li:nth-child(3)').on('click',function () {
        ruderReceipt();
    });
    function ruderReceipt() {
        $('section').empty();
        $.ajax({
            type:"get",
            url:"https://api.leduika.com/v110/neworder/orderlist.html?status=3&token="+localStorage.token,
            dataType:'jSONP',
            jsonpCallback:'callback5',
            data:{
                isJSONP:1,
                callback:5
            },
            success:function (data) {
                console.log(data)
                for(let i=0;i<data.result.length;i++){
                    // console.log(data.result)
                    $('<div class="payment"><div class="paymentBox"><div class="payment-store"><span>'+data.result[i].supplier[0].supplier_name+'</span><i>卖家已发货</i></div></div><div class="paymentRow"><div class="payment-row"><div class="paymentpic"><img src="'+data.result[i].supplier[0].list[0].goodimg+'" alt="" style="width: 1.74rem;height: 1.74rem;"></div><div class="payment-box"><div class="payment-inn">'+data.result[i].supplier[0].list[0].goodname+'</div> <div class="payment-price"><div class="price-box"><div class="price">'+data.result[i].supplier[0].list[0].buyintegral+' 积分</div><div class="price-num">x<span>'+data.result[i].supplier[0].list[0].buynum+'</span></div></div></div></div></div> </div><div class="payment-allbox"><div class="payment-inall"><span>共计<span>'+data.result[i].supplier[0].buynum+'</span>件商品， 合计:  <i>'+data.result[i].totalprice.split('.')[0]+' 积分</i></span></div></div><div class="payment-footer"><a href="../html/logistics.html?shipno='+data.result[i].shipno+'" style="display: block"><div class="see">查看物流</div></a><div class="confirm" confirm-id='+data.result[i].orderid+'>确认订单</div></div></div>').appendTo($('section'))
                }
            }

        })
    }
    //已完成
    $('.stayorder li:nth-child(4)').on('click',function () {
        ruderplace();
    });
    function ruderplace() {
        $('section').empty();
        $.ajax({
            type:"get",
            url:"https://api.leduika.com/v110/neworder/orderlist.html?status=100&token="+localStorage.token,
            dataType:'jSONP',
            jsonpCallback:'callback5',
            data:{
                isJSONP:1,
                callback:5
            },
            success:function (data) {
                for(let i=0;i<data.result.length;i++){
                    // console.log(data.result)
                    $('<div class="payment"><div class="paymentBox"><div class="payment-store"><span>'+data.result[i].supplier[0].supplier_name+'</span><i>交易成功</i></div></div><div class="paymentRow"><div class="payment-row"><div class="paymentpic"><img src="'+data.result[i].supplier[0].list[0].goodimg+'" alt="" style="width: 1.74rem;height: 1.74rem;"></div><div class="payment-box"><div class="payment-inn">'+data.result[i].supplier[0].list[0].goodname+'</div><div class="payment-price"><div class="price-box"><div class="price">'+data.result[i].supplier[0].list[0].buyintegral+' 积分</div><div class="price-num">x<span>'+data.result[i].supplier[0].list[0].buynum+'</span></div></div></div></div> </div></div><div class="payment-allbox"><div class="payment-inall"><span>共计<span>'+data.result[i].supplier[0].buynum+'</span>件商品， 合计:  <i>'+data.result[i].totalprice.split('.')[0]+' 积分</i></span></div></div><div class="payment-footer"><div class="see" delete-id='+data.result[i].orderid+'>删除订单</div></div></div>').appendTo($('section'))
                }
            }
        })
    }
    //删除订单
    $('section').on('click','.payment .payment-footer .see',function () {
        var orderid=$('section .payment .payment-footer .see').attr('delete-id');
        $.ajax({
            type:"get",
            url:"https://api.leduika.com/v110/order/delete.html?orderid="+orderid,
            dataType:'jSONP',
            jsonpCallback:'callback2',
            data:{
                isJSONP:1,
                callback:2
            },
            success:function (data) {
                ruderplace();
            }
        })
    });

    //确认订单
    $('section').on('click','.payment .payment-footer .confirm',function () {
        var confirmid=$('section .payment .payment-footer .confirm').attr('confirm-id');
        $.ajax({
            type:"get",
            url:"https://api.leduika.com/v110/order/confirm.html?orderid="+confirmid,
            dataType:'jSONP',
            jsonpCallback:'callback2',
            data:{
                isJSONP:1,
                callback:2
            },
            success:function (data) {
                ruderReceipt();
            }
        })
    });
    //查看物流
    // $('section').on('click','.payment .payment-footer .confirm',function () {
    //     var confirmid=$('section .payment .payment-footer .confirm').attr('confirm-id');
    //     $.ajax({
    //         type:"get",
    //         url:"https://api.leduika.com/v110/order/confirm.html?orderid="+confirmid,
    //         dataType:'jSONP',
    //         jsonpCallback:'callback2',
    //         data:{
    //             isJSONP:1,
    //             callback:2
    //         },
    //         success:function (data) {
    //             ruderReceipt();
    //         }
    //     })
    // });

});
