$(function () {
    $.ajax({
        type:"get",
        url:"https://api.leduika.com/v110/neworder/orderinfo.html"+location.search.split('&')[0],
        dataType:'jSONP',
        jsonpCallback:'callback8',
        data:{
            isJSONP:1,
            callback:8
        },
        success:function (data) {
            console.log(data)
            data.result.goods.forEach(function (v,i) {
                $('<div class="paymentRow"><div class="payment-row"><div class="paymentpic"><img src="'+v.goodimg+'" alt="" style="width: 1.74rem;height: 1.74rem;"></div><div class="payment-box"><div class="payment-inn">'+v.goodname+'</div><div class="payment-sku">'+v.sku+'</div><div class="payment-price"><div class="price-box"><div class="price">'+v.integral+' 积分</div><div class="price-num">x<span>'+v.buynum+'</span></div></div></div></div></div> </div>').appendTo('header .row-box')
            })
        }
    })
    $.ajax({
        type:"get",
        url:"https://api.leduika.com/v110/index/shipinfo2.html?"+location.search.split('&')[1],
        dataType:'jSONP',
        jsonpCallback:'callback2',
        data:{
            isJSONP:1,
            callback:2
        },
        success:function (data) {
            // console.log(data)
           $('<div class="ullist"><ul><li><h2>物流状态：</h2><span>已签收</span></li><li><h2>承运公司：</h2><span>'+data.result.expTextName+'</span></li></ul><ul><li><h2>货运单号：</h2><span>'+data.result.mailNo+'</span></li><li><h2>官方电话：</h2><span>'+data.result.tel+'</span></li></ul></div>').appendTo($('.logistics-header'))
            for(let i=0;i<data.result.data.length;i++){
                console.log(data.result.data)
                $('<li><div></div><div class="liitem"><p>'+data.result.data[i].context+'</p><span>'+data.result.data[i].time+'</span></div></li>').appendTo($('section ul'))
            }
        }
    })

});