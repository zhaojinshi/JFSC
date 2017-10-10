$(function () {
    //请求分类
    $.ajax({
        type:"get",
        url : "https://api.leduika.com/v110/newgood/listcategory.html",
        dataType : 'JSONP',
        jsonpCallback : 'callback1',
        data : {
            isJSONP : 1,
            callback :1
        },
        success : function (data) {
            for(let i=0;i<data.result.length;i++){
                $('<li data-id='+data.result[i].categoryid+'>'+data.result[i].name+'</li>').appendTo($('header .lists'))
            }
            $('.lists li:first-child').addClass('active');
        }
    });
    renderlist(1);
    var lis=$('header .lists');
    lis.on('click','li',function (e) {
        $('section .columnlist').empty();
        $(e.target).addClass('active').siblings().removeClass('active');
        renderlist($(e.target).attr('data-id'));
    });

    //请求列表
    function renderlist(categortid) {
        $.ajax({
            type:"get",
            url : "https://api.leduika.com/v110/good/goodlist.html?token=6440cf5e5d3c2c60d50a57b1d384647d",
            dataType : 'JSONP',
            jsonpCallback : 'callback2',
            data : {
                isJSONP : 1,
                callback :2,
                categortid:categortid
            },
            success : function (data) {
                console.log(data)
                for(let i=0;i<data.result.length;i++){
                    $('<a href="html/storedetails.html?goodid='+data.result[i].goodid+'&token='+data.token+'"><li><div class="Container"><div class="pic"><img src='+data.result[i].original+' alt=""></div> <div class="details"><h2>'+data.result[i].name+'</h2><h3>商场价：<span>'+data.result[i].marketprice+'</span></h3><div class="people"><h4>'+data.result[i].saleprice.split('.')[0]+'积分</h4><span>'+data.result[i].salecount+'人付款</span></div></div></div></li></a>').appendTo($('section .columnlist'))
                }

                localStorage.token=data.token;
            }
        });
    }
});