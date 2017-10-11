$(function () {
    render()
    function render() {
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
                console.log(data)
                for(let i=0;i<data.result.length;i++) {
                    // console.log(data.result);
                    $('<li><div class="shopname"><div class="namebox"><div class="arc"></div><div class="shoplogo"></div><div class="name">'+data.result[i].supplier.supplier+'</div></div><div class="edit">编辑</div><div class="complete">完成</div></div></li>').appendTo($('.sectionblock ul'));
                    var list=data.result[i].list;
                    for(let j=0;j<list.length;j++){
                        // console.log(list)
                        $('<div class="purchase" data_id='+list[j].id+'><div class="buypic"><div class="arc"></div><div class="pic" style="background-image: url('+list[j].original+')"></div></div><div class="buystore"><div class="store"><p>'+list[j].name+'</p><p>'+list[j].skuname+'</p></div><div class="storenum"><div class="integral"><div class="star"></div><i>'+list[j].saleprice.split('.')[0]+'</i></div><span class="nums">X'+list[j].buynum+'</span></div><div class="storenumnone"><div class="addandsubtract"><div class="subtract">-</div><i class="number">'+list[j].buynum+'</i><div class="add">+</div></div><span class="delete"></span></div></div></div>').appendTo($('.sectionblock ul li')[i])
                    }
                }

            }
        });
    }


    var section=$(".sectionblock ul")
    //购物车编辑完成
    // var edit=$('.sectionblock ul li .shopname .edit');
    // var complete=$('.sectionblock ul li .shopname .complete');
    section.on('click','.edit',function () {
        $(this).css('display','none');
        $(this).parent().siblings().find('.storenum').css('display','none');
        $(this).next().css('display','block');
        $(this).parent().siblings().find('.storenumnone').css('display','inherit');
    });
    section.on('click','.complete',function () {
        $(this).css('display','none');
        $(this).parent().siblings().find('.storenumnone').css('display','none');
        $(this).prev().css('display','block');
        $(this).parent().siblings().find('.storenum').css('display','inherit');
    });

    //购物车删除操作
    section.on("click",".delete",function () {
        var id=$(this).closest(".purchase").attr("data_id")
        console.log(id)
        $.ajax({
            type:"get",
            url : "https://api.leduika.com/v110/cart/delete.html?id="+id,
            dataType : 'JSONP',
            jsonpCallback : 'callback2',
            data : {
                isJSONP : 1,
                callback :2
            },
            success:function (data) {
                section.empty()
                render()
            }
        })

    })

    // 加减操作
    section.on('click',".add",function () {
        var num=$(this).prev().html();
        num++;
        $(this).prev().html(num)
        $(this).closest(".storenumnone").prev().find(".nums").html("X"+num)
    })
    section.on('click',".subtract",function () {
        var num=$(this).next().html();
        num--;
        if(num<0){
            $(this).next().html(0)
            $(this).closest(".storenumnone").prev().find(".nums").html("X0")
        }else{
            $(this).next().html(num)
            $(this).closest(".storenumnone").prev().find(".nums").html("X"+num)
        }
    })


    //购物车选择商品的对勾
    var arc=$('.sectionblock ul li .shopname .namebox .arc');
    arc.on('click',function () {
        $(this).toggleClass('active');
        $(this).parent().parent().siblings().find('.arc').toggleClass('active');
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
