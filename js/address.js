/**
 * Created by xinmao on 2017/10/12.
 */
$(function () {
    renderaddress()
    function renderaddress() {
        $('ul').empty();
        $.ajax({
            type:"get",
            url : "https://api.leduika.com/v110/user/address.html",
            dataType : 'JSONP',
            jsonpCallback : 'callback2',
            data : {
                isJSONP : 1,
                callback :2,
                token:localStorage.token
            },
            success : function (data) {
                data.result.forEach(function (v,i) {
                    console.log(v)
                    $('<li data='+JSON.stringify(v)+'><div class="address"><div class="addressrow"><div class="addressrow-name"><div class="name">'+v.consignee+'</div><div class="photonum">'+v.mobile+'</div></div><div class="addressrow-add">'+v.provincename+v.cityname+v.districtname+v.address+'</div></div></div><div class="default"><div class="default-add"><div class="arc" data_attr="'+v.isdefault+'"></div><p>设为默认</p></div><div class="default-edit"><a href="editor.html?name='+v.consignee+'&mobile='+v.mobile+'&pro='+v.provincename+v.cityname+v.districtname+'&address='+v.address+'&addressid='+v.addressid+'&isdefaul='+v.isdefault+'" class="bianji"><div class="editor"><div class="edipic"></div><p>编辑</p></div></a><div class="editor shanchu"><div class="delpic"></div><p>删除</p></div></div></div></li>').appendTo("ul")
                })
                $('.arc').each(function (i,v) {
                    if($(v).attr("data_attr")=="1"){
                        $(v).addClass("active")
                        $(v).next().html('默认地址')
                    }else if($(v).attr("data_attr")=="0"){
                        $(v).removeClass("active")
                        $(v).next().html('设为默认')
                    }
                })

            }
        });
    }

    var section=$("section ul");
    //默认地址设置
    section.on("click",".arc",function () {
        $(this).addClass("active").next().html("默认地址");
        console.log($(this).closest("li").siblings().find(".arc").removeClass("active").next().html("设为默认"));
        var addressid=JSON.parse($(this).closest("li").attr("data")).addressid;
        console.log(addressid)
        $.ajax({
            type:"get",
            url : "https://api.leduika.com/v110/user/defaultaddress.html?addressid="+addressid,
            dataType : 'JSONP',
            jsonpCallback : 'callback2',
            data : {
                isJSONP : 1,
                callback :2
            },
            success : function (data) {
                if(data.msg=="success"){
                    // renderaddress()
                }
            }
        });
    })
//    删除地址
    section.on("click",".shanchu",function () {
        var addressid=JSON.parse($(this).closest("li").attr("data")).addressid;
        $.ajax({
            type:"get",
            url : "https://api.leduika.com/v110/user/addressdel.html?addressid="+addressid+"&token="+localStorage.token,
            dataType : 'JSONP',
            jsonpCallback : 'callback2',
            data : {
                isJSONP : 1,
                callback :2
            },
            success : function (data) {
                renderaddress()
            }
        });
    })
})