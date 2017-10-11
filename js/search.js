$(function () {
    $('input[name="search"]').val(location.search.split("=")[1]);
    var key=$('input[name="search"]').val()
    search()
    function search() {
        $.ajax({
            type:"get",
            url : "https://api.leduika.com/v110/good/search.html?key="+key,
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
    }
})