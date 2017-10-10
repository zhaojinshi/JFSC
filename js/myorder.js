$(function () {
   $('.stayorder li').on('click',function () {
       $(this).addClass('active');
       $(this).siblings().removeClass('active');
   });
    $('.stayorder li:nth-child(1)').on('click',function () {
        $.ajax({
            type:"get",
            url:"https://api.leduika.com/v110/neworder/orderlist.html?token="+localStorage.token,
            dataType:'jSONP',
            jsonpCallback:'callback5',
            data:{
                isJSONP:1,
                callback:5
            },
            success:function (data) {
                for(let i=0;i<data.result.length;i++){
                    var status=data.result[i].status;
                    console.log(data.result)
                     if(status=="1"){
                        $('<div class="payment"><div class="paymentBox"><div class="payment-store"><span>'+data.result[i].supplier[0].supplier_name+'</span><i>等待买家付款</i></div></div><div class="paymentRow"><div class="payment-row"><div class="paymentpic"></div><div class="payment-box"><div class="payment-inn">'+data.result[i].supplier[0].list[0].goodname+'</div><div class="payment-price"><div class="color">'+data.result[i].supplier[0].list[0].sku+'</div><div class="price-box"><div class="price">'+data.result[i].totalprice.split('.')[0]+' 积分 + ￥'+data.result[i].totalpay+'</div><div class="price-num">x<span>2</span></div></div></div></div></div></div><div class="payment-allbox"><div class="payment-inall"><span>共计<span>'+data.result[i].supplier[0].buynum+'</span>件商品， 合计:  <i>'+data.result[i].totalprice.split('.')[0]+' 积分 + ￥'+data.result[i].totalpay+'(含运费￥'+data.result[i].shipfee+')</i></span></div> </div><div class="payment-footer"><div class="see">查看详情</div><div class="see confirm">付款</div></div></div>').appendTo($('section'))
                     }else if(status=="2"){
                         $('<div class="payment"><div class="paymentBox"><div class="payment-store"><span>家居日用品</span><i>买家已付款</i></div></div> <div class="paymentRow"><div class="payment-row"><div class="paymentpic"></div><div class="payment-box"><div class="payment-inn">桌面迷你小翻盖垃圾桶2个</div><div class="payment-price"><div class="price-box"><div class="price">200积分</div><div class="price-num">x<span>2</span></div></div></div></div> </div></div><div class="payment-allbox"><div class="payment-inall"><span>共计<span>1</span>件商品， 合计:  <i>200积分</i></span></div></div><div class="payment-footer"><div class="see">查看详情</div></div></div>').appendTo($('section'))
                     }else if(status=="3"){
                         $('<div class="payment"><div class="paymentBox"><div class="payment-store"><span></span><i>卖家已发货</i></div></div><div class="paymentRow"><div class="payment-row"><div class="paymentpic"></div><div class="payment-box"><div class="payment-inn">桌面迷你小翻盖垃圾桶2个</div> <div class="payment-price"><div class="price-box"><div class="price">200积分</div><div class="price-num">x<span>2</span></div></div></div></div></div> </div><div class="payment-allbox"><div class="payment-inall"><span>共计<span>1</span>件商品， 合计:  <i>200积分</i></span></div></div><div class="payment-footer"><div class="see">查看详情</div><div class="see confirm">确认订单</div></div></div>').appendTo($('section'))
                     }else if(status=="99"){
                         $('<div class="payment"><div class="paymentBox"><div class="payment-store"><span>家居日用品</span><i>交易取消</i></div></div><div class="paymentRow"><div class="payment-row"><div class="paymentpic"></div><div class="payment-box"><div class="payment-inn">桌面迷你小翻盖垃圾桶2个</div><div class="payment-price"><div class="price-box"><div class="price">200积分</div><div class="price-num">x<span>2</span></div></div></div></div> </div></div><div class="payment-allbox"><div class="payment-inall"><span>共计<span>1</span>件商品， 合计:  <i>200积分</i></span></div></div><div class="payment-footer"><div class="see">删除订单</div></div></div>').appendTo($('section'))
                     }else if(status=="100"){
                         $('<div class="payment"><div class="paymentBox"><div class="payment-store"><span>家居日用品</span><i>交易成功</i></div></div><div class="paymentRow"><div class="payment-row"><div class="paymentpic"></div><div class="payment-box"><div class="payment-inn">桌面迷你小翻盖垃圾桶2个</div><div class="payment-price"><div class="price-box"><div class="price">200积分</div><div class="price-num">x<span>2</span></div></div></div></div> </div></div><div class="payment-allbox"><div class="payment-inall"><span>共计<span>1</span>件商品， 合计:  <i>200积分</i></span></div></div><div class="payment-footer"><div class="see">删除订单</div></div></div>').appendTo($('section'))
                     }
                }
            }

        })
    })
});
