$(function () {
    $('input[name="search"]').val(decodeURIComponent(location.search.split("=")[1]));
    var key=$('input[name="search"]').val()
    search(0,1,key)
    //    搜索
    $("input[name='search']").on("blur",function () {
        $(".columnlist").empty()
        key=$('input[name="search"]').val()
        search(0,1,key)
        location.href="search.html?key="+$("input[name='search']").val();
    })
    function search(supplier,order,key) {
        $.ajax({
            type:"get",
            url : "https://api.leduika.com/v110/good/search.html?supplier="+supplier+"&order="+order+"&key="+key,
            dataType : 'JSONP',
            jsonpCallback : 'callback2',
            data : {
                isJSONP : 1,
                callback :2
            },
            success:function (data) {
                console.log(data)
                data.result.forEach(function (v,i) {
                    $('<a href="storedetails.html?goodid='+v.goodid+'"><li><div class="Container"><div class="pic"><img src="'+v.original+'" alt=""></div><div class="details"><h2>'+v.name+'</h2><h3>市场价：<span>￥'+v.marketprice+'</span></h3><div class="people"><h4>'+v.saleprice.split(".")[0]+'积分</h4></div></div><div class="duihuan">立即<br>兑换</div></div></li></a> ').appendTo(".columnlist")
                })

            }
        })
    }

//    排序
    $(".sortlist ul li:nth-child(1)").click(function () {
        $(".columnlist").empty();
        search(0,1,key);
    })
    $(".sortlist ul li:nth-child(2)").click(function () {
        $(".columnlist").empty();
        search(0,2,key);
    })
    $(".sortlist ul li:nth-child(3)").click(function () {
        $(".columnlist").empty();
        $(this).toggleClass("active")
        if($(this).hasClass("active")){
            search(0,4,key);
        }else{
            search(0,3,key);
        }
    })
    $(".sortlist ul li:nth-child(4)").click(function () {
        $.ajax({
            type:"get",
            url : "https://api.leduika.com/v110/good/supplier.html",
            dataType : 'JSONP',
            jsonpCallback : 'callback2',
            data : {
                isJSONP : 1,
                callback :2
            },
            success:function (data) {
                console.log(data)
            //    将回过来的京东天猫渲染上去
            }
        })
    })
})