$(function () {
    var defaul=0;
    $('.footernone .btn').on('click',function () {
        $('.footernone .btn').toggleClass('active').children().toggleClass('active')
    })
    $(".preservation").on("click",function () {
        if($('.footernone .btn').hasClass('active')){
            defaul=1;
        }else{
            defaul=0;
        }
        var name = $('input[name="name"]').val(),
            phone = $('input[name="mobile"]').val(),
            province = $('#show_contact').attr("data-province-code"),
            city =$('#show_contact').attr("data-city-code"),
            district = $('#show_contact').attr("data-district-code"),
            address = $('textarea').val().trim();
        if(!name||!phone||!province||!city||!district||!address) {
            alert('请填写完整信息');
        } else {
            $.ajax({
                type : 'get',
                url : "https://api.leduika.com/v110/user/newaddress.html",
                dataType : 'JSONP',
                jsonpCallback : "callback19",
                data : {
                    isJSONP : 1 ,
                    callback : 19 ,
                    consignee : name ,
                    mobile : phone,
                    province : province,
                    city : city,
                    district : district,
                    address : address,
                    isdefault : defaul
                },
                success : function (data) {
                    // console.log(data);
                    if(data.msg=="success"){
                        location.href="../html/address.html?token="+localStorage.token;
                    }
                }
            })
        }
    })
})