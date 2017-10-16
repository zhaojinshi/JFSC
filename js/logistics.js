$(function () {
    $.ajax({
        type:"get",
        url:"https://api.leduika.com/v110/index/shipinfo2.html"+location.search,
        dataType:'jSONP',
        jsonpCallback:'callback2',
        data:{
            isJSONP:1,
            callback:2
        },
        success:function (data) {
            console.log(data)
           $('<div class="ullist"><ul><li><h2>物流状态：</h2><span>已签收</span></li><li><h2>承运公司：</h2><span>'+data.result.expTextName+'</span></li></ul><ul><li><h2>货运单号：</h2><span>'+data.result.mailNo+'</span></li><li><h2>官方电话：</h2><span>'+data.result.tel+'</span></li></ul></div>').appendTo($('.logistics-header'))
            for(let i=0;i<data.result.data.length;i++){
                console.log(data.result.data)
                $('<li><div></div><div class="liitem"><p>'+data.result.data[i].context+'</p><span>'+data.result.data[i].time+'</span></div></li>').appendTo($('section ul'))
            }
        }
    })

});