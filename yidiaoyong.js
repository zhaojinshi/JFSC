
获取地区


https://api.leduika.com/v110/index/region.html

{"parentid":"0","agent":"android","token":"6440cf5e5d3c2c60d50a57b1d384647d","request_time":"1506737908","sign":"adaa6747051fb52ec1e95afae674f4ca"}


地址列表

https://api.leduika.com/v110/user/address.html

    修改地址
    /v110/user/upaddress.html


参数:  {"addressid":"157","consignee":"1","mobile":"18888888888","email":"","province":"5","city":"68","district":"782","address":"4\u5475\u5475\u54c8\u54c8\u54c8","zipcode":"","isdefault":"","cpickup":"","agent":"web","token":"6440cf5e5d3c2c60d50a57b1d384647d","request_time":"1506737596","sign":"97dd8e62ed627574cf7da5958ba53bd5"}



/v110/user/newaddress.html

参数：
{"consignee":"111","mobile":"13666666666","email":"","province":"6","city":"76","district":"846","address":"4554646464884","zipcode":"","isdefault":"","cpickup":"","agent":"android","token":"6440cf5e5d3c2c60d50a57b1d384647d","request_time":"1506737750","sign":"8a1022f3240515ba5006a854c6cfc9db"}

结果		{"status":"1","msg":"success","result":{"addressid":'123'}}

https://api.leduika.com/v110/user/defaultaddress.html

{"addressid":"123","agent":"android","token":"6440cf5e5d3c2c60d50a57b1d384647d","request_time":"1506737918","sign":"56649b056fa02bdc175728c9c51e110f"}


/****************************************************************************************************************/




// 加入购物车

/v110/cart/add.html  (http://apitest.kcsheng.com/v110/cart/add.html?token=4ad08159cd4ea2c0613ae69f13d0be3a&goodid=574&buynum=2)

参数 :  goodid
buynum
skuid

结果 :  status : 1 成功  0 失败
msg: 'success'
无 result







// 立即购买

/cart/buynow.html  (http://apitest.kcsheng.com/v110/cart/buynow.html?token=4ad08159cd4ea2c0613ae69f13d0be3a&buynum=2&goodid=194)

参数 : 	goodid
buynum
skuid


{
    "status": "1",
    "msg": "success",
    "result": {
    "list": [
        {
            "goods": [
                {
                    "goodid": 194,
                    "buynum": 2,
                    "sku": 0,
                    "skuname": "",
                    "name": "植护居家原木抽纸6包*2",
                    "marketprice": "39.80",
                    "xjprice": "0.00",
                    "saleprice": "3960.00",
                    "original": "https://api2.kcsheng.com/pics/20170224/2017022408492570705.jpg",
                    "id": "0",
                    "total_price": 0,
                    "total_integral": 7920
                }
            ],
            "supplier": {
                "name": "平台签约供应商",
                "supplierid": "1005",
                "total_price": 0,
                "total_integral": 7920
            }
        }
    ],
        "totalxjprice": 0,
        "totalintegralprice": 7920
},
    "token": "4ad08159cd4ea2c0613ae69f13d0be3a"


// 提交订单


/neworder/order.html

    参数
    id	上面两个接口中 返回的  result->list-> id , 逗号分隔
    addressid

    buynum  如果用户在立即购买流程中 修改了 数量 ，否则 这个参数也可以不传。


  supplier_id   商家id,用逗号连接
    message  	留言， 用逗号分割，跟supplier_id 对应




    结果：

  {
      "status": "1",
      "msg": "success",
      "result": {
      "orderid": "706",
          "orderno": "817052497995299",
          "needpay": 0
  },
      "token": "4ad08159cd4ea2c0613ae69f13d0be3a"
  }







//删除订单
    order/delete.html

    参数 orderid
 //确认订单

    order/comfirm.html
    参数 orderid

  //查看物流
    https://api.leduika.com/v110/index/shipinfo2.html?shipno=900017117929


