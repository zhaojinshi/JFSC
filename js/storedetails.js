$(function () {
    $.ajax({
        type:"get",
        url : "http://api.leduika.com/v110/good/goodinfo.html"+location.search,
        dataType : 'JSONP',
        jsonpCallback : 'callback3',
        data : {
            isJSONP : 1,
            callback :3
        },
        success : function (data) {
            console.log(data)
            for(let i=0;i<data.result.images.length;i++){
                $('<div class="swiper-slide" style="background-image: url('+data.result.images[i]+')"></div>').appendTo($('.swiper-wrapper'))
            }

            $('<div class="store-name" data='+JSON.stringify(data).split(" ").join("")+'><div class="store-pic" style="background-image: url('+data.result.supplierimg+')"></div><div class="namebox"><span>'+data.result.suppliername+'</span><div class="name-pic" style="background-image: url('+data.result.suppliercategory+')"></div></div></div><p>'+data.result.name+'</p><div class="integral"><div class="jifen">'+data.result.saleprice.split('.')[0]+'积分</div><div class="stockbox"><div class="price">市场价:￥'+data.result.marketprice+'</div><div class="stock">库存 <span>'+data.result.stock+'</span></div></div> </div><div class="store-ment"> <div class="ment-pic"></div> <span>本商城商品由京东、天猫商家提供，正品保障一流服务</span></div>').appendTo($('.storelist'));


            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true
            });
        }
    });

    
    //点击加入购物车弹窗
    var join=$('footer .join');
    join.on('click',function (e) {
        e.stopPropagation()
        var data=JSON.parse($('.store-name').attr('data'));
        if(data.result.sku.length){
            // $('footer').css('display','none');
            $('.shop-popup').css('display','block');
            $(' <div class="popupweight"><div class="weight-s"><div class="weightpic" style="background-image: url('+data.result.images[0]+')"></div><div class="jifenbox"><span class="hjifen">'+data.result.saleprice.split('.')[0]+'积分</span><div class="w-stock">(库存<span>'+data.result.stock+'</span>件)</div> </div></div><i>'+data.result.sku[0].sku+'</i><div class="skubox"></div></div><div class="popupnum"><i>购买数量</i><div class="limit"><div class="limitnum">(限购<span>10</span>件)</div> <div class="addandsubtract"> <div class="subtract">-</div> <i class="number">1</i><div class="add">+</div></div></div></div>').appendTo($('.shop-popup .popuprow'));
            
            data.result.sku.forEach(function (v,i) {
                $('<p class="weight-x">'+v.value+'</p>').appendTo('.popupweight .skubox')
            })

            //点击重量效果
            var weight=$('.weight-x');
            weight.on('click',function () {
                $(this).toggleClass('active')
            });
            var joinshopcart=$('.popupfooter .joinshopcart');
            joinshopcart.on('click',function () {
                if(weight.hasClass('active')){
                    $.ajax({
                        type:"get",
                        url : "https://api.leduika.com/v110/cart/add.html?token="+data.token+"&goodid="+data.result.goodid+"&buynum="+$(".number").html(),
                        dataType : 'JSONP',
                        jsonpCallback : 'callback5',
                        data : {
                            isJSONP : 1,
                            callback :5
                        },
                        success : function (data) {
                            $('<div class="success">'+data.msg+'</div>').appendTo('body');
                            setTimeout(function () {
                                $('.success').addClass('active')
                            },50);
                            setTimeout(function () {
                                $('.success').removeClass('active')
                            },1000);
                        }
                    });
                }
            });
        }else{
            $.ajax({
                type:"get",
                url : "https://api.leduika.com/v110/cart/add.html?token="+data.token+"&goodid="+data.result.goodid+"&buynum=1",
                dataType : 'JSONP',
                jsonpCallback : 'callback5',
                data : {
                    isJSONP : 1,
                    callback :5
                },
                success : function (data) {
                    $("sucess").remove();
                    $('<div class="success">'+data.msg+'</div>').appendTo('body');
                    setTimeout(function () {
                        $('.success').show().addClass('active')
                    },50);
                    setTimeout(function () {
                        $('.success').css("opacity","0").hide().removeClass('active')
                    },1000);
                }
            });

        }


    });

    // $("body").click(function (e) {
    //     $('.shop-popup').css('display','none');
    //     $('.shop-popup').empty();
    // })
var section=$(".popuprow")
// 加减操作
    section.on('click',".add",function () {
        var num=$(this).prev().html();
        num++;
        $(this).prev().html(num)
    })
    section.on('click',".subtract",function () {
        var num=$(this).next().html();
        num--;
        if(num<1){
            $(this).next().html(1)
        }else{
            $(this).next().html(num)
        }
    })


// //图片点击放大
//     function figureTap () {
//         var arr = '';
//         for ( var j = 0 ; j < data.images.length; j ++ ) {
//             arr += '<div class="swiper-slide">'+'<img src="'+data.images[j]+'">'+'</div>'
//         };
//         $('.swip2-son').html('');
//         $('.swip2-son').html(arr);
//         var swipers = $('.swip2-son .swiper-slide')
//         if( swipers.length >= 2 ) {
//             var mySwipers  = new Swiper ('#swiper-container-id',{
//                 direction : 'horizontal',
//                 loop : true,
//                 pagination : '.swiper-p2',
//                 autoplayDisableOnInteraction : true,
//                 observer:true,//修改swiper自己或子元素时，自动初始化swiper
//                 observeParents:true//修改swiper的父元素时，自动初始化swiper
//             })
//         }
//         $('.module02').on('click',function () {
//             var _con = $('.swip-son');
//             if (!_con.is(event.target) && _con.has(event.target).length == 0) {
//                 $('.module02').hide();
//             }
//         })
//     }

});