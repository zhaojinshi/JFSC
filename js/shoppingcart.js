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
                // console.log(data)
                for(let i=0;i<data.result.length;i++) {
                    // console.log(data.result);
                    $('<li><div class="shopname"><div class="namebox"><div class="arc all"></div><div class="shoplogo"></div><div class="name">'+data.result[i].supplier.supplier+'</div></div><div class="edit">编辑</div><div class="complete">完成</div></div></li>').appendTo($('.sectionblock ul'));
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
        total()
    });

    //购物车删除操作
    section.on("click",".delete",function () {
        var id=$(this).closest(".purchase").attr("data_id");
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
                section.empty();
                render()
            }
        })

    })

    // 加减操作
    section.on('click',".add",function () {
        var num=$(this).prev().html();
        num++;
        $(this).prev().html(num);
        $(this).closest(".storenumnone").prev().find(".nums").html("X"+num);
        var id=$(this).closest(".purchase").attr("data_id");
        var num=$(this).prev().html();
        $.ajax({
            type:"get",
            url : "https://api.leduika.com/v110/cart/update.html?id="+id+"&buynum="+num,
            dataType : 'JSONP',
            jsonpCallback : 'callback2',
            data : {
                isJSONP : 1,
                callback :2
            },
            success:function (data) {
                console.log(data)
            }
        })
    })
    section.on('click',".subtract",function () {
        var num=$(this).next().html();
        num--;
        if(num<0){
            $(this).next().html(0);
            $(this).closest(".storenumnone").prev().find(".nums").html("X0")
        }else{
            $(this).next().html(num);
            $(this).closest(".storenumnone").prev().find(".nums").html("X"+num)
        }
        var id=$(this).closest(".purchase").attr("data_id");
        var num=$(this).next().html();
        $.ajax({
            type:"get",
            url : "https://api.leduika.com/v110/cart/update.html?id="+id+"&buynum="+num,
            dataType : 'JSONP',
            jsonpCallback : 'callback2',
            data : {
                isJSONP : 1,
                callback :2
            },
            success:function (data) {
                console.log(data)
            }
        })
    })


    //购物车选择商品的对勾
    // var arc=$('.sectionblock ul li .shopname .namebox .arc');
    section.on('click','.arc',function () {
        if($(this).hasClass("all")){
            $(this).toggleClass('act');
            if($(this).hasClass("act")){
                $(this).parent().parent().siblings().find('.arc').addClass('active');
            }else{
                $(this).parent().parent().siblings().find('.arc').removeClass('active');
            }

        }else{
            $(this).toggleClass('active');
            $(this).closest(".purchase").toggleClass("active");
            $(this).closest("li").find(".shopname").find(".arc").addClass('act')
            if(!($(".purchase ").find(".arc").hasClass("active"))){
                $(this).closest("li").find(".shopname").find(".arc").removeClass('act')
            }

        }
        total()
    });

    //全选
    var Qarc=$('.footselect .select .Qarc');
    Qarc.on('click',function () {
        $(this).toggleClass("active")
        if($(this).hasClass("active")){
            $('.arc.all').addClass('act');
            $(".purchase").find(".arc").addClass("active")
        }else{
            $('.arc.all').removeClass('act');
            $(".purchase").find(".arc").removeClass("active")
        }

        total()

    });
    
//    结算操作
    $(".settlement").on("click",function () {
        var id=[];
       $(".arc.active").each(function (i,v) {
           var vid=$(v).closest(".purchase").attr("data_id")
           id.push(vid);
       })
            id=id.join(",")

        location.href="../html/settlement.html?id="+id;
    })

    function total() {
        //    总计计算
        var total=0;
        var number=0;
        if($(".purchase").find(".arc").hasClass("active")){
            $(".arc.active").each(function (i,v) {
                var shu=$(v).parent().next().find(".nums").html().slice(1);
                total+=$(v).parent().next().find("i").html()*shu;
                number+=parseInt(shu);
            })
        }
        $(".calculation").html(total)
        $(".settlement").find("i").html(number)
    }
});
