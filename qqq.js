//
// changelog :
//
//     8.  	修改  	/neworder/order.html  增加supplier_id 参数，和message对应，用逗号连接，实现提交订单时 每个商家一条留言
// 新增:  	首页中大牌部分内容， 大牌列表， 大牌详情
//
//
// 9  		修改： 	大牌列表，添加collect字段 判断用户是否已关注
// 新增: 	收藏， 取消收藏， 收藏的商品列表 ， 收藏的店铺列表
//
//
// 10  	修改： 	大牌列表，添加logo字段 , 收藏的店铺里加入 goods 字段表示商品列表
// 新增 	商品列表（排序和渠道筛选页） ， 商品列表 （分类页）, 搜索页的 发货渠道列表
//
// 11.    	购物车列表，订单列表，大牌列表 收藏的商品和 店铺列表 ，加入 分页功能
//
// 12    	大牌列表和我收藏的店铺 返回数据统一。 同时 我收藏的 商品字段有所变更。
//
// 13    	大牌详情 result包装成数组
//
// 14  	商品列表 /v110/good/goodlist.html（分类页） 增加数量字段 count, 数据结构有修改
//
// 15   	 结算接口 /v110/checkout/index.html 接口 supplier字段里新增 img字段，表示 商家图标
//
//
// 16  	卡密充值 接口改动
//
// 17 		登陆注册退出 记得改用新接口   /v110/login/index.html   /v110/login/logout.html   /v110/regist/index.html，
//
// 登陆成功的结果更换 token。其他地方（包括退出登陆）不动token。 遇到返回 的 status = 401, 就跳登陆页。
//
// 18      商品详情页，增加collect 字段表示是否关注
//
// 19 		订单列表 订单详情
//
// 20 		活动列表 ，点赞,
//
//     21 		取消点赞
//
// 22	 	首页 topic , 1积分抢的图标 和正午时间戳。
//
// 23 		主题页面
//
// 24 		活动列表  新增 status 字段 表示 状态
//
//
// 25 		订单列表增加 shipno 物流单号字段,  supplier 里增加 supplier_img
// 订单详情增加  supplier_name supplier_img
//
// 26 		活动列表 添加参数 经纬度  lat 纬度 lng 经度
//
//
// 27 	结算页面 checkout/index.html 和立即购买 cart/buynow.html 增加商家img 字段

/*充值流程*/
















/*********/

用户信息

https://api.leduika.com/v110/user/userinfo.html?token=6440cf5e5d3c2c60d50a57b1d384647d


    结果：


{
    "status": "1",
    "msg": "success",
    "result": {
    "userid": "122",
        "phone": "18357193201",
        "client": "67689087313308",
        "logo": "https://api.leduika.com/pics/20170414/2017041409540585738.png",
        "nickname": "用户测试557",
        "phonefee": 3110,
        "integral": 38206,		//积分
        "needreadmsg": 0,
        "lastlogintime": "2017-09-04 15:52:53",
        "logincount": "91",
        "postime": "2017-03-13 10:52:37"
},
    "token": "6440cf5e5d3c2c60d50a57b1d384647d"
}




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



http://apitest.kcsheng.com/v110/homepage/index.html

    首页接口，包含 头条列表，新品，猜你喜欢, 大牌（bigbranch）

// 加入购物车

/v110/cart/add.html  (http://apitest.kcsheng.com/v110/cart/add.html?token=4ad08159cd4ea2c0613ae69f13d0be3a&goodid=574&buynum=2)

参数 :  goodid
buynum
skuid

结果 :  status : 1 成功  0 失败
msg: 'success'
无 result


// 购物车商品列表

/v110/cart/index.html  (http://apitest.kcsheng.com/v110/cart/index.html?token=4ad08159cd4ea2c0613ae69f13d0be3a)

参数： 基本参数

结果：

{
    "status": "1",
    "msg": "success",
    "result": [
    {
        "list": [
            {
                "id": "1",
                "userid": "122",
                "goodid": "194",
                "buynum": "2",
                "postime": "1495535117",
                "sku": "0",
                "name": "植护居家原木抽纸6包*2",
                "supplier": "1005",
                "original": "https://api2.kcsheng.com/pics/20170224/2017022408492570705.jpg",
                "xjprice": "0.00",
                "saleprice": "3960.00"
            },
            {
                "id": "1",
                "userid": "122",
                "goodid": "194",
                "buynum": "2",
                "postime": "1495535117",
                "sku": "0",
                "name": "植护居家原木抽纸6包*2",
                "supplier": "1005",
                "original": "https://api2.kcsheng.com/pics/20170224/2017022408492570705.jpg",
                "xjprice": "0.00",
                "saleprice": "3960.00"
            }
        ],
        "supplier": {
            "id": "1005",
            "supplier": "平台签约供应商",
            "img": "https://api2.kcsheng.com/pics/20170323/2017032307162148778.png",
            "categoryid": "4",
            "link": "0"
        }
    },
    {
        "list": [
            {
                "id": "1",
                "userid": "122",
                "goodid": "194",
                "buynum": "2",
                "postime": "1495535117",
                "sku": "0",
                "name": "植护居家原木抽纸6包*2",
                "supplier": "1005",
                "original": "https://api2.kcsheng.com/pics/20170224/2017022408492570705.jpg",
                "xjprice": "0.00",
                "saleprice": "3960.00"
            },
            {
                "id": "1",
                "userid": "122",
                "goodid": "194",
                "buynum": "2",
                "postime": "1495535117",
                "sku": "0",
                "name": "植护居家原木抽纸6包*2",
                "supplier": "1005",
                "original": "https://api2.kcsheng.com/pics/20170224/2017022408492570705.jpg",
                "xjprice": "0.00",
                "saleprice": "3960.00"
            }
        ],
        "supplier": {
            "id": "1005",
            "supplier": "平台签约供应商",
            "img": "https://api2.kcsheng.com/pics/20170323/2017032307162148778.png",
            "categoryid": "4",
            "link": "0"
        }
    }
],
    "token": "4ad08159cd4ea2c0613ae69f13d0be3a"
}




// 购物车删除商品

/v110/cart/delete.html

参数  id  ( 购物车商品列表接口 /v110/cart/index.html 里， result 每条记录里 List 条目里 子条目的 ID )
多个 1,2,3 用逗号拼接

结果 :  status : 1 成功  0 失败
msg: 'success'
无 result



// 购物车里选中商品 点结算

/checkout/index.html?id=1,2,3

id 为 购物车商品列表接口 /v110/cart/index.html 里， result 每条记录里 List 条目里 子条目的 ID; 用逗号拼接


{
    "status": 1,
    "msg": "success",
    "result": {
    "list": [
        {
            "supplier": {
                "name": "平台签约供应商",
                "supplierid": "1005",
                "total_price": 0,
                "total_integral": 23760，
		  "img": "https://api2.kcsheng.com/pics/20170323/2017032307162148778.png"
},
    "goods": [
        {
            "id": "14",
            "buynum": "6",
            "sku": "0",
            "skuname": "",
            "goodid": "194",
            "name": "植护居家原木抽纸6包*2",
            "marketprice": "39.80",
            "xjprice": "0.00",
            "saleprice": "3960.00",
            "original": "https://api2.kcsheng.com/pics/20170224/2017022408492570705.jpg",

            "total_price": 0,
            "total_integral": 23760
        }
    ]
},
    {
        "supplier": {
        "name": "MOVE ON箱包官方旗舰店",
            "supplierid": "1084",
            "total_price": 0,
            "total_integral": 65200，
		  "img": "https://api2.kcsheng.com/pics/20170323/2017032307162148778.png"
    },
        "goods": [
        {
            "id": "34",
            "buynum": "2",
            "sku": "0",
            "skuname": "",
            "goodid": "572",
            "name": "牧风 MOVE ON双肩背包大容量牛津布背包",
            "marketprice": "188.00",
            "xjprice": "0.00",
            "saleprice": "16800.00",
            "original": "https://api2.kcsheng.com/pics/20170413/2017041307400329945.jpg",

            "total_price": 0,
            "total_integral": 33600
        },
        {
            "id": "35",
            "buynum": "2",
            "sku": "0",
            "skuname": "",
            "goodid": "574",
            "name": "牧风MOVE ON休闲电脑包灰色",
            "marketprice": "188.00",
            "xjprice": "0.00",
            "saleprice": "15800.00",
            "original": "https://api2.kcsheng.com/pics/20170413/2017041308081731865.png",

            "total_price": 0,
            "total_integral": 31600
        }
    ]
    }
],
    "totalxjprice": 0,
        "totalintegralprice": 88960
},
    "token": "4ad08159cd4ea2c0613ae69f13d0be3a"
}


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
    id	上面两个接口中 返回的  result->list-> goodid , 逗号分隔
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




    订单列表   /v110/neworder/orderlist.html  (测试用例 :http://apitest.kcsheng.com/v110/neworder/orderlist.html?token=964782f07fd26d071149c50cc7960fce)


    参数  status  = 0 全部/1待付款/2待发货/3待收货/99已取消/100交易成功, page :页数


    结果    result  里每天记录对应一个订单， 里面的List 的每条记录 对应订单里的商品信息。

 	{
        "status": "1",
        "msg": "success",
        "result": [
        {
            "orderno": "817060948555010",
            "orderid": "747",
            "postime": "1497000032",
            "status": "1",
            "totalpay": "5.9",
            "goodpay": "5.9",
            "shipfee": "0.00",
            "totalprice": "200.00",
            "shipno": "",
            "supplier": [
                {
                    "supplier_id": "1097",
                    "supplier_name": "约伯家居｜J H F",
                    "buynum": "1",
                    "supplier_img": "",
                    "list": [
                        {
                            "goodid": "598",
                            "goodname": "家用防滑地垫",
                            "goodimg": "https://api2.kcsheng.com/pics/20170419/2017041907362546406.jpg",
                            "buynum": "1",
                            "buyprice": "5.9",
                            "buyintegral": "200",
                            "sku": ""
                        }
                    ]
                }
            ]
        },
        {
            "orderno": "817060948555010",
            "orderid": "747",
            "postime": "1497000032",
            "status": "1",
            "totalpay": "5.9",
            "goodpay": "5.9",
            "shipfee": "0.00",
            "totalprice": "200.00",
            "shipno": "",
            "supplier": [
                {
                    "supplier_id": "1097",
                    "supplier_name": "约伯家居｜J H F",
                    "buynum": "1",
                    "supplier_img": "",
                    "list": [
                        {
                            "goodid": "598",
                            "goodname": "家用防滑地垫",
                            "goodimg": "https://api2.kcsheng.com/pics/20170419/2017041907362546406.jpg",
                            "buynum": "1",
                            "buyprice": "5.9",
                            "buyintegral": "200",
                            "sku": ""
                        }
                    ]
                }
            ]
        }
    ],
        "page": 1,
        "token": "57e8c5e98b78976279eca3ba143bd000"
    }





******



    更新购物车

    /v110/cart/update.html

    参数

    id 购物车ID，			1,2,3
    buynum  购买数量		5,9,12
    sku  					0, 2, 0

    更改内容用,号隔开，  没有更改的话，可以传0 或者原来的值，但一定要传一个数据。三个参数里的数据的数量是一样的。


结果 {
    "status": "1",
        "msg": "success",
        "token": "964782f07fd26d071149c50cc7960fce"
}


    大牌  列表

/v110/bigbranch/list.html


    参数 page 页数

    结果：

{
    "status": "1",
    "msg": "success",
    "result": [
    {
        "id": "1001",
        "supplier": "德香居旗舰店",
        "img": "https://api2.kcsheng.com/pics/20170323/2017032307292362340.jpg",	// 小图
        "logo": "https://api2.kcsheng.com/pics/20170323/2017032307292362340.jpg", //// 大图
        "categoryid": "4",
        "bigbranch": "1",
        "link": "0",
        "collect": 1,
        "goods": [
            {
                "goodid": "133",
                "name": "德香居鸭脖礼盒",
                "goodno": "5144",
                "marketprice": "68.00",
                "saleprice": "45.00",
                "original": "https://api2.kcsheng.com/pics/20170224/2017022402395515764.png",
                "viewcount": "0",
                "salecount": "0"
            },
            {
                "goodid": "134",
                "name": "德香居火腿酱鸭",
                "goodno": "5379",
                "marketprice": "168.00",
                "saleprice": "100.00",
                "original": "https://api2.kcsheng.com/pics/20170224/2017022402433459250.png",
                "viewcount": "0",
                "salecount": "0"
            }
        ]
    }
],
    "page": 1,		/// 总页数
    "token": "57e8c5e98b78976279eca3ba143bd000"
}



    大牌详情

    /v110/bigbranch.html


    参数 ID

    结果：result (只有一条记录)

    {
        "status": "1",
        "msg": "success",
        "result": [
        {
            "supplier": {
                "id": "1001",
                "logo": "",
                "supplier": "德香居旗舰店",
                "img": "https://api2.kcsheng.com/pics/20170323/2017032307292362340.jpg",
                "categoryid": "4",
                "bigbranch": "1",
                "link": "0"
            },
            "goods": [
                {
                    "goodid": "151",
                    "name": "芬娜丝女士连体丝袜2条装",
                    "goodno": "4340",
                    "marketprice": "199.00",
                    "saleprice": "72.00",
                    "original": "https://api2.kcsheng.com/pics/20170224/2017022403354156875.jpg",
                    "viewcount": "0",
                    "salecount": "1"
                }
            ]
        }
    ],
        "token": "57e8c5e98b78976279eca3ba143bd000"
    }


    /************ 		我的收藏  ****************/

    收藏的店铺

    /v110/collect.html

    参数： type: 2, page: 1 // 分页;

    结果 :

    {
        "status": 1,
        "msg": "success",
        "result": [
        {
            "id": "1001",
            "logo": "",
            "supplier": "德香居旗舰店",
            "img": "https://api2.kcsheng.com/pics/20170323/2017032307292362340.jpg",
            "categoryid": "4",
            "bigbranch": "1",
            "link": "0",
            "collect": "1",
            "goods": [
                {
                    "goodid": "133",
                    "name": "德香居鸭脖礼盒",
                    "goodno": "5144",
                    "marketprice": "68.00",
                    "saleprice": "45.00",
                    "original": "https://api2.kcsheng.com/pics/20170224/2017022402395515764.png",
                    "viewcount": "0",
                    "salecount": "0"
                },
                {
                    "goodid": "134",
                    "name": "德香居火腿酱鸭",
                    "goodno": "5379",
                    "marketprice": "168.00",
                    "saleprice": "100.00",
                    "original": "https://api2.kcsheng.com/pics/20170224/2017022402433459250.png",
                    "viewcount": "0",
                    "salecount": "0"
                },
                {
                    "goodid": "141",
                    "name": "长白山西洋参",
                    "goodno": "2561",
                    "marketprice": "360.00",
                    "saleprice": "289.00",
                    "original": "https://api2.kcsheng.com/pics/20170224/2017022402582589169.png",
                    "viewcount": "0",
                    "salecount": "0"
                }
            ]
        }
    ],
        "page": 1,
        "token": "57e8c5e98b78976279eca3ba143bd000"
    }


    店铺加入收藏
    /v110/collect/add.html

    参数： type:2
    id
    结果：
{
    "status": 1,
    "msg": "success",
    "token": "57e8c5e98b78976279eca3ba143bd000"
}

    店铺取消收藏：

/v110/collect/cancel.html

    参数： type:2
    id:

        结果：
{
    "status": 1,
    "msg": "success",
    "token": "57e8c5e98b78976279eca3ba143bd000"
}





    收藏的商品

    /v110/collect.html

    参数： type:1, page: 1 //分页;


    {
        "status": 1,
        "msg": "success",
        "result": [
        {
            "goodid": "613",
            "goodno": "3487",
            "name": "百利君威进口刀头五层手动剃须刀",
            "keywords": "剃须刀",
            "categoryid": "2",
            "marketprice": "69.00",
            "xjprice": "0.00",
            "saleprice": "6500.00",
            "original": "https://api2.kcsheng.com/pics/20170424/2017042408094982421.jpg",
            "stock": "99",
            "shiptype": "1",
            "isactivity": "0",
            "viewcount": "0",
            "salecount": "13",
            "sort": "113",
            "status": "100",
            "postime": "1493022310",
            "supplier": "1104",
            "collect": "1"
        },
        {
            "goodid": "613",
            "goodno": "3487",
            "name": "百利君威进口刀头五层手动剃须刀",
            "keywords": "剃须刀",
            "categoryid": "2",
            "marketprice": "69.00",
            "xjprice": "0.00",
            "saleprice": "6500.00",
            "original": "https://api2.kcsheng.com/pics/20170424/2017042408094982421.jpg",
            "stock": "99",
            "shiptype": "1",
            "isactivity": "0",
            "viewcount": "0",
            "salecount": "13",
            "sort": "113",
            "status": "100",
            "postime": "1493022310",
            "supplier": "1104",
            "collect": "1"
        }
    ],
        'page' :1,
        "token": "57e8c5e98b78976279eca3ba143bd000"
    }


    商品加入收藏
    /v110/collect/add.html

    参数： type:1
    id
    结果：
{
    "status": 1,
    "msg": "success",
    "token": "57e8c5e98b78976279eca3ba143bd000"
}

    商品取消收藏：

/v110/collect/cancel.html

    参数： type:1
    id:

        结果：
{
    "status": 1,
    "msg": "success",
    "token": "57e8c5e98b78976279eca3ba143bd000"
}





    分类页商品列表

    /v110/good/goodlist.html
    参数 categortid  全部 传0
    page

    结果

    {
        "status": "1",
        "msg": "success",
        "result": [
        {
            "goodid": "571",
            "name": "富安娜夏季夏凉蚕丝纤维混合被芯润蚕丝夏被",
            "marketprice": "898.00",
            "saleprice": "47900.00",
            "original": "https://api2.kcsheng.com/pics/20170413/2017041307233110364.jpg",
            "stock": "89",
            "viewcount": "0",
            "salecount": "0",
            "postime": "2017-04-13 15:23:49",
            "xjprice": "319.00"
        },
        {
            "goodid": "558",
            "name": "KUTTO日系素雅纯棉条纹毛巾",
            "marketprice": "25.00",
            "saleprice": "1200.00",
            "original": "https://api2.kcsheng.com/pics/20170410/2017041005480780914.jpg",
            "stock": "100",
            "viewcount": "0",
            "salecount": "0",
            "postime": "2017-04-10 13:48:53",
            "xjprice": "7.90"
        }
    ],
        "count": "32",
        "page": 3,
        "token": "47jk2rneg3e5hik9qnvle9no70"
    }


    搜索页商品列表

    /v110/good/search.html

    参数 page 	 页数
    supplier 渠道  不选为0
    order    1 综合 2 热度  3价格降序 4 价格升序
    key  	关键字

    result

    {
        "status": "1",
        "msg": "success",
        "result": [
        {
            "goodid": "613",
            "goodno": "3487",
            "name": "百利君威进口刀头五层手动剃须刀",
            "keywords": "剃须刀",
            "categoryid": "2",
            "marketprice": "69.00",
            "xjprice": "0.00",
            "saleprice": "6500.00",
            "original": "https://api2.kcsheng.com/pics/20170424/2017042408094982421.jpg",
            "stock": "99",
            "shiptype": "1",
            "isactivity": "0",
            "viewcount": "0",
            "salecount": "13",
            "sort": "113",
            "status": "100",
            "postime": "1493022310",
            "supplier": "1104",
            "isold": "0"
        },
        {
            "goodid": "248",
            "goodno": "1360",
            "name": "百草味-抱抱果235g",
            "keywords": "0",
            "categoryid": "3",
            "marketprice": "74.90",
            "xjprice": "0.00",
            "saleprice": "6990.00",
            "original": "https://api2.kcsheng.com/pics/20170306/2017030606251454831.jpg",
            "stock": "20",
            "shiptype": "1",
            "isactivity": "0",
            "viewcount": "0",
            "salecount": "1",
            "sort": "99",
            "status": "100",
            "postime": "1488781606",
            "supplier": "1017",
            "isold": "0"
        }
    ],
        "page": 1,
        "token": "57e8c5e98b78976279eca3ba143bd000"
    }

    发货渠道列表

    /v110/good/supplier.html


    参数  无

    结果
    {
        "status": "1",
        "msg": "success",
        "result": [
        {
            "id": "1",
            "name": "天猫",
            "categoryimg": "https://api2.kcsheng.com/pics/20170317/2017031706541024332.jpg"
        },
        {
            "id": "2",
            "name": "京东",
            "categoryimg": "https://api2.kcsheng.com/pics/20170323/2017032307003798965.png"
        },
        {
            "id": "3",
            "name": "淘宝",
            "categoryimg": "https://api2.kcsheng.com/pics/20170324/2017032408035041751.jpg"
        },
        {
            "id": "4",
            "name": "平台签约伙伴",
            "categoryimg": "https://api2.kcsheng.com/pics/20170323/2017032307132994211.png"
        }
    ],
        "token": "57e8c5e98b78976279eca3ba143bd000"
    }





    卡密充值


    根据卡号密码查询

    /v110/card/newinfobypwd.html

    参数 ：cardno,  cardpwd

    返回结果 :  status =0 , 卡不可用， 提示 msg

    卡正常可以：  status = 1 卡信息跟以前一样, 额外增加 packages 字段，表示可兑换的套餐。package 字段的结构跟  /v110/package/packages.html 一样

    以前 /v110/package/packages.html 接口不再使用。

结果：
{
    "status": 1,
    "msg": "操作成功",
    "result": {
    "uid": "0",
        "result": 0,
        "phone": "",
        "expire_date": "1970-01-01 08:00:00",
        "remark": "test 1",
        "no": "100000000002",
        "buy_time": "2017-05-12 11:30:02",
        "card_pwd": "HNBZUD",
        "goods_name": "100元充值卡",
        "recharge_time": "1970-01-01 08:00:00",
        "agent_id": "1",
        "recharge_status": "0",
        "channel_id": "1001",
        "order_no": "0",
        "sale_status": "1",
        "active_time": "2017-05-12 11:30:26",
        "pay_money": 100,
        "price": "10000",
        "card_type": "1",
        "goods_id": "0",
        "ser_number": "0",
        "bid": "1",
        "packages": [
        {
            "packageid": "15",
            "name": "100元促销卡A套餐",
            "type": "1001",
            "saleprice": "100.00",
            "phonefee": "600",
            "integral": "0",
            "expetimes": "365"
        },
        {
            "packageid": "16",
            "name": "100元促销卡B套餐",
            "type": "1001",
            "saleprice": "100.00",
            "phonefee": "250",
            "integral": "1500",
            "expetimes": "365"
        },
        {
            "packageid": "32",
            "name": "100元促销卡C套餐",
            "type": "1001",
            "saleprice": "100.00",
            "phonefee": "150",
            "integral": "1700",
            "expetimes": "365"
        },
        {
            "packageid": "33",
            "name": "100元促销卡D套餐",
            "type": "1001",
            "saleprice": "100.00",
            "phonefee": "0",
            "integral": "2000",
            "expetimes": "365"
        }
    ]
},
    "token": "9ujuacnap8rc67k71ut2mf9812"
}




// 商品详情
    /v110/good/goodinfo.html

    返回值增加  collect 1 关注 0 未关注

    {
        "status": "1",
        "msg": "success",
        "result": {
        "goodid": "612",
            "goodno": "2426",
            "name": "百利君威进口刀头五层手动剃须刀",
            "keywords": "剃须刀",
            "categoryid": "22",
            "marketprice": "69.00",
            "saleprice": "3900.00",
            "original": "https://api2.kcsheng.com/pics/20170424/2017042408180741773.jpg",
            "viewcount": "0",
            "salecount": "0",
            "postime": "2017-04-24 16:25:08",
            "supplier": "1104",
            "stock": "99",
            "xjprice": "26.00",
            "detailurl": "http://apitest.kcsheng.com/v110/Index/details/goodid/612.html",
            "suppliername": "baili百利旗舰店",
            "supplierimg": "https://api2.kcsheng.com/pics/20170425/2017042502154772084.jpg",
            "suppliercategory": "https://api2.kcsheng.com/pics/20170317/2017031706541024332.jpg",
            "sku": [],
            "images": [
            "https://api2.kcsheng.com/pics/20170424/2017042408181088040.jpg"
        ],
            "collect": 1
    },
        "islogin": 1,
        "token": "57e8c5e98b78976279eca3ba143bd000"
    }


********************************************************************************************************************************

    订单列表

    /v110/neworder/orderlist.html

    {
        "status": "1",
        "msg": "success",
        "result": [
        {
            "orderno": "817060948555010",
            "orderid": "747",
            "postime": "1497000032",
            "status": "1",
            "totalpay": "5.9",
            "goodpay": "5.9",
            "shipfee": "0.00",
            "totalprice": "200.00",
            "shipno": "",
            "supplier": [
                {
                    "supplier_id": "1097",
                    "supplier_name": "约伯家居｜J H F",
                    "buynum": "1",
                    "supplier_img": "",
                    "list": [
                        {
                            "goodid": "598",
                            "goodname": "家用防滑地垫",
                            "goodimg": "https://api2.kcsheng.com/pics/20170419/2017041907362546406.jpg",
                            "buynum": "1",
                            "buyprice": "5.9",
                            "buyintegral": "200",
                            "sku": ""
                        }
                    ]
                }
            ]
        },
        {
            "orderno": "817060948555010",
            "orderid": "747",
            "postime": "1497000032",
            "status": "1",
            "totalpay": "5.9",
            "goodpay": "5.9",
            "shipfee": "0.00",
            "totalprice": "200.00",
            "shipno": "",
            "supplier": [
                {
                    "supplier_id": "1097",
                    "supplier_name": "约伯家居｜J H F",
                    "buynum": "1",
                    "supplier_img": "",
                    "list": [
                        {
                            "goodid": "598",
                            "goodname": "家用防滑地垫",
                            "goodimg": "https://api2.kcsheng.com/pics/20170419/2017041907362546406.jpg",
                            "buynum": "1",
                            "buyprice": "5.9",
                            "buyintegral": "200",
                            "sku": ""
                        }
                    ]
                }
            ]
        }
    ],
        "page": 1,
        "token": "57e8c5e98b78976279eca3ba143bd000"
    }





******************************************************************************************************************************
    订单详情


    /v110/neworder/orderinfo.html

    参数 orderid

    结果

    {
        "status": "1",
        "msg": "success",
        "result": {
        "orderid": "744",
            "orderno": "817060948514850",
            "goodid": "0",
            "goodname": "端午节粽子礼盒米旗沁香粽,端午节粽子礼盒米旗沁香粽",
            "goodimg": "https://api2.kcsheng.com/pics/20170421/2017042109250896244.jpg",
            "userid": "122",
            "buynum": "4",
            "type": "3",
            "totalprice": "32040.00",
            "useintegral": "32040.00",
            "totalpay": "35.60",
            "origintotalprice": "35.60",
            "useonline": "35.60",
            "discountprice": "0.00",
            "discountdesc": "10折",
            "payway": "",
            "paytime": "0",
            "paymoney": "0.00",
            "tradeno": "",
            "shipid": "0",
            "shipno": "",
            "shipfee": "0.00",
            "addressid": "157",
            "status": "1",
            "postime": "2017-06-09 17:11:27",
            "message": "b",
            "skuid": "0",
            "delete": "0",
            "bulkorderno": null,
            "goods": [
            {
                "goodid": "611",
                "goodname": "端午节粽子礼盒米旗沁香粽",
                "goodimg": "https://api2.kcsheng.com/pics/20170421/2017042109250896244.jpg",
                "buynum": "3",
                "price": "0.0000",
                "integral": "8900",
                "sku": "",
                "marketprice": "89.00"
            },
            {
                "goodid": "610",
                "goodname": "端午节粽子礼盒米旗沁香粽",
                "goodimg": "https://api2.kcsheng.com/pics/20170421/2017042109314034672.jpg",
                "buynum": "1",
                "price": "35.6000",
                "integral": "5340",
                "sku": "",
                "marketprice": "89.00"
            }
        ],
            "supplier_name": "阳炎食品",
            "supplier_img": "https://api2.kcsheng.com/pics/20170421/2017042108510828473.png",
            "phone": "18357193201",
            "consignee": "1",
            "mobile": "18666666666",
            "province": "1",
            "city": "35",
            "district": "375",
            "address": "4呵呵哈哈哈",
            "zipcode": null,
            "provincename": "北京市",
            "cityname": "北京市",
            "districtname": "东城区"
    },
        "token": "57e8c5e98b78976279eca3ba143bd000"
    }




// 活动列表

    /v110/activity/list.html

    参数  无

    结果

    started =0 表示未赞  大于 0 表示已赞

    {
        "status": 1,
        "msg": "操作成功",
        "result": [
        {
            "id": "6",
            "title": "满就送",
            "img": "https://shop.kcsheng.com/pics/20170523/2017052309362933304.png",
            "stars": "1",
            "started": "0",
            "address": "番禺潭山大道潭山村牌坊<旁>",
            "begin": "1493568000",
            "end": "1694777600",
            "status": "进行中",
            "link": "http://www.kc.com/v110/activity/detail.html?id=6"
        },
        {
            "id": "4",
            "title": "满200送100元KC商城购物卡",
            "img": "https://shop.kcsheng.com/pics/20170523/2017052309362933304.png",
            "stars": "2",
            "started": "27",
            "address": "番禺潭山大道潭山村牌坊<旁>",
            "begin": "1495036800",
            "end": "1621353600",
            "status": "进行中",
            "link": "http://www.kc.com/v110/activity/detail.html?id=4"
        }
    ],
        "token": "57e8c5e98b78976279eca3ba143bd000"
    }


// 活动点赞

    /v110/activity/star.html

    参数  id 活动ID

    结果



    {
        "status": 1,
        "msg": "操作成功",

        "token": "57e8c5e98b78976279eca3ba143bd000"
    }

    // 取消活动点赞

    /v110/activity/cancel.html

    参数  id 活动ID

    结果

    {
        "status": 1,
        "msg": "操作成功",

        "token": "57e8c5e98b78976279eca3ba143bd000"
    }



/// 首页 topic

    /v110/homepage/index.html
    参数 无

    结果

    说明：
noontime 正午时间戳
    img  一积分抢 图标
    topic 主题


    {
        "status": 1,
        "msg": "success",
        "result": {
        "newlist": [
            {
                "goodid": "613",
                "name": "百利君威进口刀头五层手动剃须刀",
                "original": "https://api2.kcsheng.com/pics/20170424/2017042408094982421.jpg",
                "xjprice": "0.00",
                "saleprice": "6500.00",
                "salecount": "14"
            },
            {
                "goodid": "612",
                "name": "百利君威进口刀头五层手动剃须刀",
                "original": "https://api2.kcsheng.com/pics/20170424/2017042408180741773.jpg",
                "xjprice": "26.00",
                "saleprice": "3900.00",
                "salecount": "0"
            },
            {
                "goodid": "611",
                "name": "端午节粽子礼盒米旗沁香粽",
                "original": "https://api2.kcsheng.com/pics/20170421/2017042109250896244.jpg",
                "xjprice": "0.00",
                "saleprice": "8900.00",
                "salecount": "14"
            },
            {
                "goodid": "610",
                "name": "端午节粽子礼盒米旗沁香粽",
                "original": "https://api2.kcsheng.com/pics/20170421/2017042109314034672.jpg",
                "xjprice": "35.60",
                "saleprice": "5340.00",
                "salecount": "0"
            }
        ],
            "recomend": [
            {
                "goodid": "195",
                "name": "韩版简约潮流时尚情侣手表一对2只",
                "original": "https://api2.kcsheng.com/pics/20170224/2017022408521924590.jpg",
                "xjprice": "0.00",
                "saleprice": "8900.00",
                "salecount": "1"
            },
            {
                "goodid": "196",
                "name": "小麦秆简约水杯茶杯 2个",
                "original": "https://api2.kcsheng.com/pics/20170224/2017022408562563878.jpg",
                "xjprice": "0.00",
                "saleprice": "1900.00",
                "salecount": "4"
            },
            {
                "goodid": "197",
                "name": "好太太正品特价机手洗衣液3kg*2",
                "original": "https://api2.kcsheng.com/pics/20170224/2017022408582281458.jpg",
                "xjprice": "0.00",
                "saleprice": "5990.00",
                "salecount": "4"
            },
            {
                "goodid": "208",
                "name": "夏天浴室防滑拖鞋2双",
                "original": "https://api2.kcsheng.com/pics/20170228/2017022806524843598.png",
                "xjprice": "0.00",
                "saleprice": "3500.00",
                "salecount": "6"
            },
            {
                "goodid": "209",
                "name": "家用加厚防滑卡通塑料凳2个",
                "original": "https://api2.kcsheng.com/pics/20170228/2017022807043722267.png",
                "xjprice": "0.00",
                "saleprice": "2500.00",
                "salecount": "0"
            },
            {
                "goodid": "210",
                "name": "家用塑料内衣抽屉式收纳盒2个",
                "original": "https://api2.kcsheng.com/pics/20170228/2017022807101759127.png",
                "xjprice": "0.00",
                "saleprice": "4800.00",
                "salecount": "3"
            }
        ],
            "news": [
            {
                "id": "4",
                "title": "头条测试4",
                "img": "https://api2.kcsheng.com/pics/20170401/2017040106473184240.jpg",
                "status": "1",
                "sort": "1",
                "postime": "0",
                "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                "url": "http://apitest.kcsheng.com/v110/homepage/newsdetail.html?id=4"
            },
            {
                "id": "3",
                "title": "头条测试3",
                "img": "https://api2.kcsheng.com/pics/20170401/2017040106473184240.jpg",
                "status": "1",
                "sort": "1",
                "postime": "0",
                "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                "url": "http://apitest.kcsheng.com/v110/homepage/newsdetail.html?id=3"
            },
            {
                "id": "2",
                "title": "头条测试2",
                "img": "https://api2.kcsheng.com/pics/20170401/2017040106473184240.jpg",
                "status": "1",
                "sort": "1",
                "postime": "0",
                "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                "url": "http://apitest.kcsheng.com/v110/homepage/newsdetail.html?id=2"
            },
            {
                "id": "1",
                "title": "头条测试1",
                "img": "https://api2.kcsheng.com/pics/20170401/2017040106473184240.jpg",
                "status": "1",
                "sort": "1",
                "postime": "0",
                "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                "url": "http://apitest.kcsheng.com/v110/homepage/newsdetail.html?id=1"
            }
        ],
            "bigbranch": [
            {
                "id": "1003",
                "logo": "",
                "supplier": "蒂帕兰旗舰店",
                "img": "https://api2.kcsheng.com/pics/20170323/2017032307333890203.png",
                "categoryid": "4",
                "bigbranch": "1",
                "link": "0",
                "url": "http://apitest.kcsheng.com/v110/bigbranch.html?id=1003"
            },
            {
                "id": "1002",
                "logo": "",
                "supplier": "凯旋庄园旗舰店",
                "img": "https://api2.kcsheng.com/pics/20170323/2017032307302947123.jpg",
                "categoryid": "4",
                "bigbranch": "1",
                "link": "0",
                "url": "http://apitest.kcsheng.com/v110/bigbranch.html?id=1002"
            },
            {
                "id": "1001",
                "logo": "",
                "supplier": "德香居旗舰店",
                "img": "https://api2.kcsheng.com/pics/20170323/2017032307292362340.jpg",
                "categoryid": "4",
                "bigbranch": "1",
                "link": "0",
                "url": "http://apitest.kcsheng.com/v110/bigbranch.html?id=1001"
            }
        ],
            "topic": [
            {
                "id": "3",
                "title": "美食天下",
                "subtitle": "做一个幸福的吃货",
                "logo": "http://apitest.kcsheng.com/assets/logo/8682739991837325799.png"
            },
            {
                "id": "4",
                "title": "数码电子",
                "subtitle": "马上抽奖",
                "logo": "http://apitest.kcsheng.com/assets/game/images/gogo.png"
            }
        ],
            "noontime": 1497240000,
            "img": "http://apitest.kcsheng.com/assets/placeorder/images/card-100.png"
    },
        "token": "57e8c5e98b78976279eca3ba143bd000"
    }





    主题页面


    /v110/topic/detail.html
    参数ID

    结果：

{
    "status": 1,
    "msg": "操作成功",
    "result": {
    "id": "3",
        "background": "http://apitest.kcsheng.com/assets/placeorder/images/border.png",
        "desc": "你太瘦,多吃点",
        "subdesc": "有好多好吃的 你忍得住",
        "goodid": "586|587|588|589|590|591|592|593|594",
        "first": [
        {
            "goodid": "586",
            "goodno": "2957",
            "name": "卡通办公家居坐垫2个",
            "marketprice": "59.80",
            "xjprice": "0.00",
            "saleprice": "1780.00",
            "original": "https://api2.kcsheng.com/pics/20170418/2017041807183337705.jpg",
            "icons": [
                "https://api2.kcsheng.com/pics/20170329/2017032902380591805.png",
                "https://api2.kcsheng.com/pics/20170324/2017032404235883644.png",
                "https://api2.kcsheng.com/pics/20170320/2017032003212544555.png",
                "https://api2.kcsheng.com/pics/20170329/2017032908105936502.jpg",
                "https://api2.kcsheng.com/pics/20170310/2017031002150737478.png",
                "https://api2.kcsheng.com/pics/20170322/2017032206102147998.png"
            ]
        },
        {
            "goodid": "587",
            "goodno": "3569",
            "name": "卡通办公家居坐垫2个",
            "marketprice": "59.80",
            "xjprice": "7.80",
            "saleprice": "1000.00",
            "original": "https://api2.kcsheng.com/pics/20170418/2017041807282862098.jpg",
            "icons": [
                "https://api2.kcsheng.com/pics/20170224/2017022403504217070.jpg",
                "https://api2.kcsheng.com/pics/20170226/2017022604382420978.png",
                "https://api2.kcsheng.com/pics/20170227/2017022701211156499.jpg",
                "https://api2.kcsheng.com/pics/20170324/2017032404351894090.png",
                "https://api2.kcsheng.com/pics/20170329/2017032902380591805.png",
                "https://api2.kcsheng.com/pics/20170324/2017032404235883644.png"
            ]
        },
        {
            "goodid": "588",
            "goodno": "9896",
            "name": "天堂三折黑胶防晒晴雨伞",
            "marketprice": "98.00",
            "xjprice": "0.00",
            "saleprice": "6900.00",
            "original": "https://api2.kcsheng.com/pics/20170418/2017041807501243029.jpg",
            "icons": [
                "https://api2.kcsheng.com/pics/20170227/2017022701211156499.jpg",
                "https://api2.kcsheng.com/pics/20170324/2017032404351894090.png",
                "https://api2.kcsheng.com/pics/20170329/2017032902380591805.png",
                "https://api2.kcsheng.com/pics/20170324/2017032404235883644.png",
                "https://api2.kcsheng.com/pics/20170320/2017032003212544555.png",
                "https://api2.kcsheng.com/pics/20170329/2017032908105936502.jpg"
            ]
        }
    ],
        "second": [
        {
            "goodid": "589",
            "goodno": "8510",
            "name": "天堂三折黑胶防晒晴雨伞",
            "marketprice": "98.00",
            "xjprice": "27.60",
            "saleprice": "4200.00",
            "original": "https://api2.kcsheng.com/pics/20170418/2017041807532443126.jpg"
        },
        {
            "goodid": "590",
            "goodno": "3915",
            "name": "双枪男式紧身T恤运动纯棉短袖",
            "marketprice": "168.00",
            "xjprice": "0.00",
            "saleprice": "5900.00",
            "original": "https://api2.kcsheng.com/pics/20170418/2017041808104973977.jpg"
        },
        {
            "goodid": "591",
            "goodno": "7849",
            "name": "双枪男式紧身T恤运动纯棉短袖",
            "marketprice": "168.00",
            "xjprice": "23.60",
            "saleprice": "3540.00",
            "original": "https://api2.kcsheng.com/pics/20170418/2017041808242259463.jpg"
        },
        {
            "goodid": "592",
            "goodno": "8800",
            "name": "迷你usb静音电风扇",
            "marketprice": "28.00",
            "xjprice": "6.90",
            "saleprice": "200.00",
            "original": "https://api2.kcsheng.com/pics/20170419/2017041906245622137.jpg"
        },
        {
            "goodid": "593",
            "goodno": "2739",
            "name": "迷你usb静音电风扇",
            "marketprice": "28.00",
            "xjprice": "6.90",
            "saleprice": "200.00",
            "original": "https://api2.kcsheng.com/pics/20170419/2017041906283325381.jpg"
        },
        {
            "goodid": "594",
            "goodno": "4437",
            "name": "春夏季纯棉女士薄款短袜4双",
            "marketprice": "14.00",
            "xjprice": "5.50",
            "saleprice": "200.00",
            "original": "https://api2.kcsheng.com/pics/20170419/2017041906514839218.jpg"
        }
    ]
},
    "token": "57e8c5e98b78976279eca3ba143bd000"
}



    秒杀

    /v110/good/newlimit.html

    参数 无

    结果：

{
    "status": "0",
    "msg": "已经抢完了",
    "token": "8b03350eb8eeb8be0cec13587da5ab15"
}

    或者

    {
        "status": "0",
        "msg": "还没有开始哦",
        "token": "8b03350eb8eeb8be0cec13587da5ab15"
    }

