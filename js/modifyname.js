$(function () {
 var val=location.search.split('=')[1];
 $('.inputname input').val(decodeURIComponent(val));
 $('.preservation').on('click',function () {
     $.ajax({
         type:"get",
         url : "https://api.leduika.com/v110/user/upinfo.html?nickname="+$('.inputname input').val(),
         dataType : 'JSONP',
         jsonpCallback : 'callback2',
         data : {
             isJSONP : 1,
             callback :2
         },
         success : function (data) {
             location.href="../html/setup.html"
         }
     });
 })
});