$(function () {
    $.ajax({
        type:"get",
        url : "https://api.leduika.com/v110/cart/index.html?token="+localStorage.token,
        dataType : 'JSONP',
        jsonpCallback : 'callback2',
        data : {
            isJSONP : 1,
            callback :2
        },
        success : function (data) {
            for(let i=0;i<data.result.length;i++) {
                // console.log(data.result);
                $('<li><div class="shopname"><div class="namebox"><div class="arc"></div><div class="shoplogo"></div><div class="name">'+data.result[i].supplier.supplier+'</div></div><div class="edit">编辑</div><div class="complete">完成</div></div></li>').appendTo($('.sectionblock ul'));
                var list=data.result[i].list;
                for(let j=0;j<list.length;j++){
                    // console.log(list)
                    $('<div class="purchase"><div class="buypic"><div class="arc"></div><div class="pic" style="background-image: url('+list[j].original+')"></div></div><div class="buystore"><div class="store"><p>'+list[j].name+'</p><p>'+list[j].skuname+'</p></div><div class="storenum"><div class="integral"><div class="star"></div><i>'+list[j].saleprice.split('.')[0]+'</i></div><span class="nums">X'+list[j].buynum+'</span></div><div class="storenumnone"><div class="addandsubtract"><div class="subtract">-</div><i class="number">222</i><div class="add">+</div></div><span class="delete"></span></div></div></div>').appendTo($('.sectionblock ul li')[i])
                }
            }

        }
    });


    //购物车编辑完成
    var edit=$('.sectionblock ul li .shopname .edit');
    var complete=$('.sectionblock ul li .shopname .complete');
    edit.on('click',function () {
        $(this).css('display','none');
        $(this).parent().next().find('.storenum').css('display','none');
        $(this).next().css('display','block');
        $(this).parent().next().find('.storenumnone').css('display','inherit');
    });
    complete.on('click',function () {
        $(this).css('display','none');
        $(this).parent().next().find('.storenumnone').css('display','none');
        $(this).prev().css('display','block');
        $(this).parent().next().find('.storenum').css('display','inherit');
    });
    //购物车选择商品的对勾
    var arc=$('.sectionblock ul li .shopname .namebox .arc');
    arc.on('click',function () {
        $(this).toggleClass('active');
        $(this).parent().parent().next().find('.arc').toggleClass('active');
    });

    //全选
    var Qarc=$('.footselect .select .Qarc');
    Qarc.on('click',function () {
        $('.arc').toggleClass('active');
        $(this).toggleClass('active');
        // if($('.arc').hasClass('active')){
        //
        // }else{
        //     $('.arc').addClass('active');
        // }

    });
});
