// 省份列表
var iosProvinces = [
    /*******华北五省********/
    {
               "id": "1",
               "parentId": "0",
               "value": "北京市",
               "layer": "1"
           },
           {
               "id": "2",
               "parentId": "0",
               "value": "天津市",
               "layer": "1"
           },
           {
               "id": "3",
               "parentId": "0",
               "value": "河北省",
               "layer": "1"
           },
           {
               "id": "4",
               "parentId": "0",
               "value": "山西省",
               "layer": "1"
           },
           {
               "id": "5",
               "parentId": "0",
               "value": "内蒙古自治区",
               "layer": "1"
           },
           {
               "id": "6",
               "parentId": "0",
               "value": "辽宁省",
               "layer": "1"
           },
           {
               "id": "7",
               "parentId": "0",
               "value": "吉林省",
               "layer": "1"
           },
           {
               "id": "8",
               "parentId": "0",
               "value": "黑龙江省",
               "layer": "1"
           },
           {
               "id": "9",
               "parentId": "0",
               "value": "上海市",
               "layer": "1"
           },
           {
               "id": "10",
               "parentId": "0",
               "value": "江苏省",
               "layer": "1"
           },
           {
               "id": "11",
               "parentId": "0",
               "value": "浙江省",
               "layer": "1"
           },
           {
               "id": "12",
               "parentId": "0",
               "value": "安徽省",
               "layer": "1"
           },
           {
               "id": "13",
               "parentId": "0",
               "value": "福建省",
               "layer": "1"
           },
           {
               "id": "14",
               "parentId": "0",
               "value": "江西省",
               "layer": "1"
           },
           {
               "id": "15",
               "parentId": "0",
               "value": "山东省",
               "layer": "1"
           },
           {
               "id": "16",
               "parentId": "0",
               "value": "河南省",
               "layer": "1"
           },
           {
               "id": "17",
               "parentId": "0",
               "value": "湖北省",
               "layer": "1"
           },
           {
               "id": "18",
               "parentId": "0",
               "value": "湖南省",
               "layer": "1"
           },
           {
               "id": "19",
               "parentId": "0",
               "value": "广东省",
               "layer": "1"
           },
           {
               "id": "20",
               "parentId": "0",
               "value": "广西壮族自治区",
               "layer": "1"
           },
           {
               "id": "21",
               "parentId": "0",
               "value": "海南省",
               "layer": "1"
           },
           {
               "id": "22",
               "parentId": "0",
               "value": "重庆市",
               "layer": "1"
           },
           {
               "id": "23",
               "parentId": "0",
               "value": "四川省",
               "layer": "1"
           },
           {
               "id": "24",
               "parentId": "0",
               "value": "贵州省",
               "layer": "1"
           },
           {
               "id": "25",
               "parentId": "0",
               "value": "云南省",
               "layer": "1"
           },
           {
               "id": "26",
               "parentId": "0",
               "value": "西藏自治区",
               "layer": "1"
           },
           {
               "id": "27",
               "parentId": "0",
               "value": "陕西省",
               "layer": "1"
           },
           {
               "id": "28",
               "parentId": "0",
               "value": "甘肃省",
               "layer": "1"
           },
           {
               "id": "29",
               "parentId": "0",
               "value": "青海省",
               "layer": "1"
           },
           {
               "id": "30",
               "parentId": "0",
               "value": "宁夏回族自治区",
               "layer": "1"
           },
           {
               "id": "31",
               "parentId": "0",
               "value": "新疆维吾尔自治区",
               "layer": "1"
           }

];

// 城市列表
var iosCitys = [
  {
              "id": "35",
              "parentId": "1",
              "value": "北京市",
              "layer": "2"
          },
          {
              "id": "36",
              "parentId": "2",
              "value": "天津市",
              "layer": "2"
          },
          {
              "id": "37",
              "parentId": "3",
              "value": "石家庄市",
              "layer": "2"
          },
          {
              "id": "38",
              "parentId": "3",
              "value": "唐山市",
              "layer": "2"
          },
          {
              "id": "39",
              "parentId": "3",
              "value": "秦皇岛市",
              "layer": "2"
          },
          {
              "id": "40",
              "parentId": "3",
              "value": "邯郸市",
              "layer": "2"
          },
          {
              "id": "41",
              "parentId": "3",
              "value": "邢台市",
              "layer": "2"
          },
          {
              "id": "42",
              "parentId": "3",
              "value": "保定市",
              "layer": "2"
          },
          {
              "id": "43",
              "parentId": "3",
              "value": "张家口市",
              "layer": "2"
          },
          {
              "id": "44",
              "parentId": "3",
              "value": "承德市",
              "layer": "2"
          },
          {
              "id": "45",
              "parentId": "3",
              "value": "沧州市",
              "layer": "2"
          },
          {
              "id": "46",
              "parentId": "3",
              "value": "廊坊市",
              "layer": "2"
          },
          {
              "id": "47",
              "parentId": "3",
              "value": "衡水市",
              "layer": "2"
          },
          {
              "id": "48",
              "parentId": "4",
              "value": "太原市",
              "layer": "2"
          },
          {
              "id": "49",
              "parentId": "4",
              "value": "大同市",
              "layer": "2"
          },
          {
              "id": "50",
              "parentId": "4",
              "value": "阳泉市",
              "layer": "2"
          },
          {
              "id": "51",
              "parentId": "4",
              "value": "长治市",
              "layer": "2"
          },
          {
              "id": "52",
              "parentId": "4",
              "value": "晋城市",
              "layer": "2"
          },
          {
              "id": "53",
              "parentId": "4",
              "value": "朔州市",
              "layer": "2"
          },
          {
              "id": "54",
              "parentId": "4",
              "value": "晋中市",
              "layer": "2"
          },
          {
              "id": "55",
              "parentId": "4",
              "value": "运城市",
              "layer": "2"
          },
          {
              "id": "56",
              "parentId": "4",
              "value": "忻州市",
              "layer": "2"
          },
          {
              "id": "57",
              "parentId": "4",
              "value": "临汾市",
              "layer": "2"
          },
          {
              "id": "58",
              "parentId": "4",
              "value": "吕梁市",
              "layer": "2"
          },
          {
              "id": "59",
              "parentId": "5",
              "value": "呼和浩特市",
              "layer": "2"
          },
          {
              "id": "60",
              "parentId": "5",
              "value": "包头市",
              "layer": "2"
          },
          {
              "id": "61",
              "parentId": "5",
              "value": "乌海市",
              "layer": "2"
          },
          {
              "id": "62",
              "parentId": "5",
              "value": "赤峰市",
              "layer": "2"
          },
          {
              "id": "63",
              "parentId": "5",
              "value": "通辽市",
              "layer": "2"
          },
          {
              "id": "64",
              "parentId": "5",
              "value": "鄂尔多斯市",
              "layer": "2"
          },
          {
              "id": "65",
              "parentId": "5",
              "value": "呼伦贝尔市",
              "layer": "2"
          },
          {
              "id": "66",
              "parentId": "5",
              "value": "巴彦淖尔市",
              "layer": "2"
          },
          {
              "id": "67",
              "parentId": "5",
              "value": "乌兰察布市",
              "layer": "2"
          },
          {
              "id": "68",
              "parentId": "5",
              "value": "兴安盟",
              "layer": "2"
          },
          {
              "id": "69",
              "parentId": "5",
              "value": "锡林郭勒盟",
              "layer": "2"
          },
          {
              "id": "70",
              "parentId": "5",
              "value": "阿拉善盟",
              "layer": "2"
          },
          {
              "id": "71",
              "parentId": "6",
              "value": "沈阳市",
              "layer": "2"
          },
          {
              "id": "72",
              "parentId": "6",
              "value": "大连市",
              "layer": "2"
          },
          {
              "id": "73",
              "parentId": "6",
              "value": "鞍山市",
              "layer": "2"
          },
          {
              "id": "74",
              "parentId": "6",
              "value": "抚顺市",
              "layer": "2"
          },
          {
              "id": "75",
              "parentId": "6",
              "value": "本溪市",
              "layer": "2"
          },
          {
              "id": "76",
              "parentId": "6",
              "value": "丹东市",
              "layer": "2"
          },
          {
              "id": "77",
              "parentId": "6",
              "value": "锦州市",
              "layer": "2"
          },
          {
              "id": "78",
              "parentId": "6",
              "value": "营口市",
              "layer": "2"
          },
          {
              "id": "79",
              "parentId": "6",
              "value": "阜新市",
              "layer": "2"
          },
          {
              "id": "80",
              "parentId": "6",
              "value": "辽阳市",
              "layer": "2"
          },
          {
              "id": "81",
              "parentId": "6",
              "value": "盘锦市",
              "layer": "2"
          },
          {
              "id": "82",
              "parentId": "6",
              "value": "铁岭市",
              "layer": "2"
          },
          {
              "id": "83",
              "parentId": "6",
              "value": "朝阳市",
              "layer": "2"
          },
          {
              "id": "84",
              "parentId": "6",
              "value": "葫芦岛市",
              "layer": "2"
          },
          {
              "id": "85",
              "parentId": "7",
              "value": "长春市",
              "layer": "2"
          },
          {
              "id": "86",
              "parentId": "7",
              "value": "吉林市",
              "layer": "2"
          },
          {
              "id": "87",
              "parentId": "7",
              "value": "四平市",
              "layer": "2"
          },
          {
              "id": "88",
              "parentId": "7",
              "value": "辽源市",
              "layer": "2"
          },
          {
              "id": "89",
              "parentId": "7",
              "value": "通化市",
              "layer": "2"
          },
          {
              "id": "90",
              "parentId": "7",
              "value": "白山市",
              "layer": "2"
          },
          {
              "id": "91",
              "parentId": "7",
              "value": "松原市",
              "layer": "2"
          },
          {
              "id": "92",
              "parentId": "7",
              "value": "白城市",
              "layer": "2"
          },
          {
              "id": "93",
              "parentId": "7",
              "value": "延边朝鲜族自治州",
              "layer": "2"
          },
          {
              "id": "94",
              "parentId": "8",
              "value": "哈尔滨市",
              "layer": "2"
          },
          {
              "id": "95",
              "parentId": "8",
              "value": "齐齐哈尔市",
              "layer": "2"
          },
          {
              "id": "96",
              "parentId": "8",
              "value": "鸡西市",
              "layer": "2"
          },
          {
              "id": "97",
              "parentId": "8",
              "value": "鹤岗市",
              "layer": "2"
          },
          {
              "id": "98",
              "parentId": "8",
              "value": "双鸭山市",
              "layer": "2"
          },
          {
              "id": "99",
              "parentId": "8",
              "value": "大庆市",
              "layer": "2"
          },
          {
              "id": "100",
              "parentId": "8",
              "value": "伊春市",
              "layer": "2"
          },
          {
              "id": "101",
              "parentId": "8",
              "value": "佳木斯市",
              "layer": "2"
          },
          {
              "id": "102",
              "parentId": "8",
              "value": "七台河市",
              "layer": "2"
          },
          {
              "id": "103",
              "parentId": "8",
              "value": "牡丹江市",
              "layer": "2"
          },
          {
              "id": "104",
              "parentId": "8",
              "value": "黑河市",
              "layer": "2"
          },
          {
              "id": "105",
              "parentId": "8",
              "value": "绥化市",
              "layer": "2"
          },
          {
              "id": "106",
              "parentId": "8",
              "value": "大兴安岭地区",
              "layer": "2"
          },
          {
              "id": "107",
              "parentId": "9",
              "value": "上海市",
              "layer": "2"
          },
          {
              "id": "108",
              "parentId": "10",
              "value": "南京市",
              "layer": "2"
          },
          {
              "id": "109",
              "parentId": "10",
              "value": "无锡市",
              "layer": "2"
          },
          {
              "id": "110",
              "parentId": "10",
              "value": "徐州市",
              "layer": "2"
          },
          {
              "id": "111",
              "parentId": "10",
              "value": "常州市",
              "layer": "2"
          },
          {
              "id": "112",
              "parentId": "10",
              "value": "苏州市",
              "layer": "2"
          },
          {
              "id": "113",
              "parentId": "10",
              "value": "南通市",
              "layer": "2"
          },
          {
              "id": "114",
              "parentId": "10",
              "value": "连云港市",
              "layer": "2"
          },
          {
              "id": "115",
              "parentId": "10",
              "value": "淮安市",
              "layer": "2"
          },
          {
              "id": "116",
              "parentId": "10",
              "value": "盐城市",
              "layer": "2"
          },
          {
              "id": "117",
              "parentId": "10",
              "value": "扬州市",
              "layer": "2"
          },
          {
              "id": "118",
              "parentId": "10",
              "value": "镇江市",
              "layer": "2"
          },
          {
              "id": "119",
              "parentId": "10",
              "value": "泰州市",
              "layer": "2"
          },
          {
              "id": "120",
              "parentId": "10",
              "value": "宿迁市",
              "layer": "2"
          },
          {
              "id": "121",
              "parentId": "11",
              "value": "杭州市",
              "layer": "2"
          },
          {
              "id": "122",
              "parentId": "11",
              "value": "宁波市",
              "layer": "2"
          },
          {
              "id": "123",
              "parentId": "11",
              "value": "温州市",
              "layer": "2"
          },
          {
              "id": "124",
              "parentId": "11",
              "value": "嘉兴市",
              "layer": "2"
          },
          {
              "id": "125",
              "parentId": "11",
              "value": "湖州市",
              "layer": "2"
          },
          {
              "id": "126",
              "parentId": "11",
              "value": "绍兴市",
              "layer": "2"
          },
          {
              "id": "127",
              "parentId": "11",
              "value": "金华市",
              "layer": "2"
          },
          {
              "id": "128",
              "parentId": "11",
              "value": "衢州市",
              "layer": "2"
          },
          {
              "id": "129",
              "parentId": "11",
              "value": "舟山市",
              "layer": "2"
          },
          {
              "id": "130",
              "parentId": "11",
              "value": "台州市",
              "layer": "2"
          },
          {
              "id": "131",
              "parentId": "11",
              "value": "丽水市",
              "layer": "2"
          },
          {
              "id": "132",
              "parentId": "12",
              "value": "合肥市",
              "layer": "2"
          },
          {
              "id": "133",
              "parentId": "12",
              "value": "芜湖市",
              "layer": "2"
          },
          {
              "id": "134",
              "parentId": "12",
              "value": "蚌埠市",
              "layer": "2"
          },
          {
              "id": "135",
              "parentId": "12",
              "value": "淮南市",
              "layer": "2"
          },
          {
              "id": "136",
              "parentId": "12",
              "value": "马鞍山市",
              "layer": "2"
          },
          {
              "id": "137",
              "parentId": "12",
              "value": "淮北市",
              "layer": "2"
          },
          {
              "id": "138",
              "parentId": "12",
              "value": "铜陵市",
              "layer": "2"
          },
          {
              "id": "139",
              "parentId": "12",
              "value": "安庆市",
              "layer": "2"
          },
          {
              "id": "140",
              "parentId": "12",
              "value": "黄山市",
              "layer": "2"
          },
          {
              "id": "141",
              "parentId": "12",
              "value": "滁州市",
              "layer": "2"
          },
          {
              "id": "142",
              "parentId": "12",
              "value": "阜阳市",
              "layer": "2"
          },
          {
              "id": "143",
              "parentId": "12",
              "value": "宿州市",
              "layer": "2"
          },
          {
              "id": "144",
              "parentId": "12",
              "value": "巢湖市",
              "layer": "2"
          },
          {
              "id": "145",
              "parentId": "12",
              "value": "六安市",
              "layer": "2"
          },
          {
              "id": "146",
              "parentId": "12",
              "value": "亳州市",
              "layer": "2"
          },
          {
              "id": "147",
              "parentId": "12",
              "value": "池州市",
              "layer": "2"
          },
          {
              "id": "148",
              "parentId": "12",
              "value": "宣城市",
              "layer": "2"
          },
          {
              "id": "149",
              "parentId": "13",
              "value": "福州市",
              "layer": "2"
          },
          {
              "id": "150",
              "parentId": "13",
              "value": "厦门市",
              "layer": "2"
          },
          {
              "id": "151",
              "parentId": "13",
              "value": "莆田市",
              "layer": "2"
          },
          {
              "id": "152",
              "parentId": "13",
              "value": "三明市",
              "layer": "2"
          },
          {
              "id": "153",
              "parentId": "13",
              "value": "泉州市",
              "layer": "2"
          },
          {
              "id": "154",
              "parentId": "13",
              "value": "漳州市",
              "layer": "2"
          },
          {
              "id": "155",
              "parentId": "13",
              "value": "南平市",
              "layer": "2"
          },
          {
              "id": "156",
              "parentId": "13",
              "value": "龙岩市",
              "layer": "2"
          },
          {
              "id": "157",
              "parentId": "13",
              "value": "宁德市",
              "layer": "2"
          },
          {
              "id": "158",
              "parentId": "14",
              "value": "南昌市",
              "layer": "2"
          },
          {
              "id": "159",
              "parentId": "14",
              "value": "景德镇市",
              "layer": "2"
          },
          {
              "id": "160",
              "parentId": "14",
              "value": "萍乡市",
              "layer": "2"
          },
          {
              "id": "161",
              "parentId": "14",
              "value": "九江市",
              "layer": "2"
          },
          {
              "id": "162",
              "parentId": "14",
              "value": "新余市",
              "layer": "2"
          },
          {
              "id": "163",
              "parentId": "14",
              "value": "鹰潭市",
              "layer": "2"
          },
          {
              "id": "164",
              "parentId": "14",
              "value": "赣州市",
              "layer": "2"
          },
          {
              "id": "165",
              "parentId": "14",
              "value": "吉安市",
              "layer": "2"
          },
          {
              "id": "166",
              "parentId": "14",
              "value": "宜春市",
              "layer": "2"
          },
          {
              "id": "167",
              "parentId": "14",
              "value": "抚州市",
              "layer": "2"
          },
          {
              "id": "168",
              "parentId": "14",
              "value": "上饶市",
              "layer": "2"
          },
          {
              "id": "169",
              "parentId": "15",
              "value": "济南市",
              "layer": "2"
          },
          {
              "id": "170",
              "parentId": "15",
              "value": "青岛市",
              "layer": "2"
          },
          {
              "id": "171",
              "parentId": "15",
              "value": "淄博市",
              "layer": "2"
          },
          {
              "id": "172",
              "parentId": "15",
              "value": "枣庄市",
              "layer": "2"
          },
          {
              "id": "173",
              "parentId": "15",
              "value": "东营市",
              "layer": "2"
          },
          {
              "id": "174",
              "parentId": "15",
              "value": "烟台市",
              "layer": "2"
          },
          {
              "id": "175",
              "parentId": "15",
              "value": "潍坊市",
              "layer": "2"
          },
          {
              "id": "176",
              "parentId": "15",
              "value": "济宁市",
              "layer": "2"
          },
          {
              "id": "177",
              "parentId": "15",
              "value": "泰安市",
              "layer": "2"
          },
          {
              "id": "178",
              "parentId": "15",
              "value": "威海市",
              "layer": "2"
          },
          {
              "id": "179",
              "parentId": "15",
              "value": "日照市",
              "layer": "2"
          },
          {
              "id": "180",
              "parentId": "15",
              "value": "莱芜市",
              "layer": "2"
          },
          {
              "id": "181",
              "parentId": "15",
              "value": "临沂市",
              "layer": "2"
          },
          {
              "id": "182",
              "parentId": "15",
              "value": "德州市",
              "layer": "2"
          },
          {
              "id": "183",
              "parentId": "15",
              "value": "聊城市",
              "layer": "2"
          },
          {
              "id": "184",
              "parentId": "15",
              "value": "滨州市",
              "layer": "2"
          },
          {
              "id": "185",
              "parentId": "15",
              "value": "荷泽市",
              "layer": "2"
          },
          {
              "id": "186",
              "parentId": "16",
              "value": "郑州市",
              "layer": "2"
          },
          {
              "id": "187",
              "parentId": "16",
              "value": "开封市",
              "layer": "2"
          },
          {
              "id": "188",
              "parentId": "16",
              "value": "洛阳市",
              "layer": "2"
          },
          {
              "id": "189",
              "parentId": "16",
              "value": "平顶山市",
              "layer": "2"
          },
          {
              "id": "190",
              "parentId": "16",
              "value": "安阳市",
              "layer": "2"
          },
          {
              "id": "191",
              "parentId": "16",
              "value": "鹤壁市",
              "layer": "2"
          },
          {
              "id": "192",
              "parentId": "16",
              "value": "新乡市",
              "layer": "2"
          },
          {
              "id": "193",
              "parentId": "16",
              "value": "焦作市",
              "layer": "2"
          },
          {
              "id": "194",
              "parentId": "16",
              "value": "濮阳市",
              "layer": "2"
          },
          {
              "id": "195",
              "parentId": "16",
              "value": "许昌市",
              "layer": "2"
          },
          {
              "id": "196",
              "parentId": "16",
              "value": "漯河市",
              "layer": "2"
          },
          {
              "id": "197",
              "parentId": "16",
              "value": "三门峡市",
              "layer": "2"
          },
          {
              "id": "198",
              "parentId": "16",
              "value": "南阳市",
              "layer": "2"
          },
          {
              "id": "199",
              "parentId": "16",
              "value": "商丘市",
              "layer": "2"
          },
          {
              "id": "200",
              "parentId": "16",
              "value": "信阳市",
              "layer": "2"
          },
          {
              "id": "201",
              "parentId": "16",
              "value": "周口市",
              "layer": "2"
          },
          {
              "id": "202",
              "parentId": "16",
              "value": "驻马店市",
              "layer": "2"
          },
          {
              "id": "203",
              "parentId": "17",
              "value": "武汉市",
              "layer": "2"
          },
          {
              "id": "204",
              "parentId": "17",
              "value": "黄石市",
              "layer": "2"
          },
          {
              "id": "205",
              "parentId": "17",
              "value": "十堰市",
              "layer": "2"
          },
          {
              "id": "206",
              "parentId": "17",
              "value": "宜昌市",
              "layer": "2"
          },
          {
              "id": "207",
              "parentId": "17",
              "value": "襄樊市",
              "layer": "2"
          },
          {
              "id": "208",
              "parentId": "17",
              "value": "鄂州市",
              "layer": "2"
          },
          {
              "id": "209",
              "parentId": "17",
              "value": "荆门市",
              "layer": "2"
          },
          {
              "id": "210",
              "parentId": "17",
              "value": "孝感市",
              "layer": "2"
          },
          {
              "id": "211",
              "parentId": "17",
              "value": "荆州市",
              "layer": "2"
          },
          {
              "id": "212",
              "parentId": "17",
              "value": "黄冈市",
              "layer": "2"
          },
          {
              "id": "213",
              "parentId": "17",
              "value": "咸宁市",
              "layer": "2"
          },
          {
              "id": "214",
              "parentId": "17",
              "value": "随州市",
              "layer": "2"
          },
          {
              "id": "215",
              "parentId": "17",
              "value": "恩施土家族苗族自治州",
              "layer": "2"
          },
          {
              "id": "216",
              "parentId": "17",
              "value": "仙桃市",
              "layer": "2"
          },
          {
              "id": "217",
              "parentId": "18",
              "value": "长沙市",
              "layer": "2"
          },
          {
              "id": "218",
              "parentId": "18",
              "value": "株洲市",
              "layer": "2"
          },
          {
              "id": "219",
              "parentId": "18",
              "value": "湘潭市",
              "layer": "2"
          },
          {
              "id": "220",
              "parentId": "18",
              "value": "衡阳市",
              "layer": "2"
          },
          {
              "id": "221",
              "parentId": "18",
              "value": "邵阳市",
              "layer": "2"
          },
          {
              "id": "222",
              "parentId": "18",
              "value": "岳阳市",
              "layer": "2"
          },
          {
              "id": "223",
              "parentId": "18",
              "value": "常德市",
              "layer": "2"
          },
          {
              "id": "224",
              "parentId": "18",
              "value": "张家界市",
              "layer": "2"
          },
          {
              "id": "225",
              "parentId": "18",
              "value": "益阳市",
              "layer": "2"
          },
          {
              "id": "226",
              "parentId": "18",
              "value": "郴州市",
              "layer": "2"
          },
          {
              "id": "227",
              "parentId": "18",
              "value": "永州市",
              "layer": "2"
          },
          {
              "id": "228",
              "parentId": "18",
              "value": "怀化市",
              "layer": "2"
          },
          {
              "id": "229",
              "parentId": "18",
              "value": "娄底市",
              "layer": "2"
          },
          {
              "id": "230",
              "parentId": "18",
              "value": "湘西土家族苗族自治州",
              "layer": "2"
          },
          {
              "id": "231",
              "parentId": "19",
              "value": "广州市",
              "layer": "2"
          },
          {
              "id": "232",
              "parentId": "19",
              "value": "韶关市",
              "layer": "2"
          },
          {
              "id": "233",
              "parentId": "19",
              "value": "深圳市",
              "layer": "2"
          },
          {
              "id": "234",
              "parentId": "19",
              "value": "珠海市",
              "layer": "2"
          },
          {
              "id": "235",
              "parentId": "19",
              "value": "汕头市",
              "layer": "2"
          },
          {
              "id": "236",
              "parentId": "19",
              "value": "佛山市",
              "layer": "2"
          },
          {
              "id": "237",
              "parentId": "19",
              "value": "江门市",
              "layer": "2"
          },
          {
              "id": "238",
              "parentId": "19",
              "value": "湛江市",
              "layer": "2"
          },
          {
              "id": "239",
              "parentId": "19",
              "value": "茂名市",
              "layer": "2"
          },
          {
              "id": "240",
              "parentId": "19",
              "value": "肇庆市",
              "layer": "2"
          },
          {
              "id": "241",
              "parentId": "19",
              "value": "惠州市",
              "layer": "2"
          },
          {
              "id": "242",
              "parentId": "19",
              "value": "梅州市",
              "layer": "2"
          },
          {
              "id": "243",
              "parentId": "19",
              "value": "汕尾市",
              "layer": "2"
          },
          {
              "id": "244",
              "parentId": "19",
              "value": "河源市",
              "layer": "2"
          },
          {
              "id": "245",
              "parentId": "19",
              "value": "阳江市",
              "layer": "2"
          },
          {
              "id": "246",
              "parentId": "19",
              "value": "清远市",
              "layer": "2"
          },
          {
              "id": "247",
              "parentId": "19",
              "value": "东莞市",
              "layer": "2"
          },
          {
              "id": "248",
              "parentId": "19",
              "value": "中山市",
              "layer": "2"
          },
          {
              "id": "249",
              "parentId": "19",
              "value": "潮州市",
              "layer": "2"
          },
          {
              "id": "250",
              "parentId": "19",
              "value": "揭阳市",
              "layer": "2"
          },
          {
              "id": "251",
              "parentId": "19",
              "value": "云浮市",
              "layer": "2"
          },
          {
              "id": "252",
              "parentId": "20",
              "value": "南宁市",
              "layer": "2"
          },
          {
              "id": "253",
              "parentId": "20",
              "value": "柳州市",
              "layer": "2"
          },
          {
              "id": "254",
              "parentId": "20",
              "value": "桂林市",
              "layer": "2"
          },
          {
              "id": "255",
              "parentId": "20",
              "value": "梧州市",
              "layer": "2"
          },
          {
              "id": "256",
              "parentId": "20",
              "value": "北海市",
              "layer": "2"
          },
          {
              "id": "257",
              "parentId": "20",
              "value": "防城港市",
              "layer": "2"
          },
          {
              "id": "258",
              "parentId": "20",
              "value": "钦州市",
              "layer": "2"
          },
          {
              "id": "259",
              "parentId": "20",
              "value": "贵港市",
              "layer": "2"
          },
          {
              "id": "260",
              "parentId": "20",
              "value": "玉林市",
              "layer": "2"
          },
          {
              "id": "261",
              "parentId": "20",
              "value": "百色市",
              "layer": "2"
          },
          {
              "id": "262",
              "parentId": "20",
              "value": "贺州市",
              "layer": "2"
          },
          {
              "id": "263",
              "parentId": "20",
              "value": "河池市",
              "layer": "2"
          },
          {
              "id": "264",
              "parentId": "20",
              "value": "来宾市",
              "layer": "2"
          },
          {
              "id": "265",
              "parentId": "20",
              "value": "崇左市",
              "layer": "2"
          },
          {
              "id": "266",
              "parentId": "21",
              "value": "海口市",
              "layer": "2"
          },
          {
              "id": "267",
              "parentId": "21",
              "value": "三亚市",
              "layer": "2"
          },
          {
              "id": "268",
              "parentId": "21",
              "value": "省直辖县级行政单位",
              "layer": "2"
          },
          {
              "id": "269",
              "parentId": "22",
              "value": "重庆市",
              "layer": "2"
          },
          {
              "id": "270",
              "parentId": "23",
              "value": "成都市",
              "layer": "2"
          },
          {
              "id": "271",
              "parentId": "23",
              "value": "自贡市",
              "layer": "2"
          },
          {
              "id": "272",
              "parentId": "23",
              "value": "攀枝花市",
              "layer": "2"
          },
          {
              "id": "273",
              "parentId": "23",
              "value": "泸州市",
              "layer": "2"
          },
          {
              "id": "274",
              "parentId": "23",
              "value": "德阳市",
              "layer": "2"
          },
          {
              "id": "275",
              "parentId": "23",
              "value": "绵阳市",
              "layer": "2"
          },
          {
              "id": "276",
              "parentId": "23",
              "value": "广元市",
              "layer": "2"
          },
          {
              "id": "277",
              "parentId": "23",
              "value": "遂宁市",
              "layer": "2"
          },
          {
              "id": "278",
              "parentId": "23",
              "value": "内江市",
              "layer": "2"
          },
          {
              "id": "279",
              "parentId": "23",
              "value": "乐山市",
              "layer": "2"
          },
          {
              "id": "280",
              "parentId": "23",
              "value": "南充市",
              "layer": "2"
          },
          {
              "id": "281",
              "parentId": "23",
              "value": "眉山市",
              "layer": "2"
          },
          {
              "id": "282",
              "parentId": "23",
              "value": "宜宾市",
              "layer": "2"
          },
          {
              "id": "283",
              "parentId": "23",
              "value": "广安市",
              "layer": "2"
          },
          {
              "id": "284",
              "parentId": "23",
              "value": "达州市",
              "layer": "2"
          },
          {
              "id": "285",
              "parentId": "23",
              "value": "雅安市",
              "layer": "2"
          },
          {
              "id": "286",
              "parentId": "23",
              "value": "巴中市",
              "layer": "2"
          },
          {
              "id": "287",
              "parentId": "23",
              "value": "资阳市",
              "layer": "2"
          },
          {
              "id": "288",
              "parentId": "23",
              "value": "阿坝藏族羌族自治州",
              "layer": "2"
          },
          {
              "id": "289",
              "parentId": "23",
              "value": "甘孜藏族自治州",
              "layer": "2"
          },
          {
              "id": "290",
              "parentId": "23",
              "value": "凉山彝族自治州",
              "layer": "2"
          },
          {
              "id": "291",
              "parentId": "24",
              "value": "贵阳市",
              "layer": "2"
          },
          {
              "id": "292",
              "parentId": "24",
              "value": "六盘水市",
              "layer": "2"
          },
          {
              "id": "293",
              "parentId": "24",
              "value": "遵义市",
              "layer": "2"
          },
          {
              "id": "294",
              "parentId": "24",
              "value": "安顺市",
              "layer": "2"
          },
          {
              "id": "295",
              "parentId": "24",
              "value": "铜仁市",
              "layer": "2"
          },
          {
              "id": "296",
              "parentId": "24",
              "value": "黔西南布依族苗族自治州",
              "layer": "2"
          },
          {
              "id": "297",
              "parentId": "24",
              "value": "毕节市",
              "layer": "2"
          },
          {
              "id": "298",
              "parentId": "24",
              "value": "黔东南苗族侗族自治州",
              "layer": "2"
          },
          {
              "id": "299",
              "parentId": "24",
              "value": "黔南布依族苗族自治州",
              "layer": "2"
          },
          {
              "id": "300",
              "parentId": "25",
              "value": "昆明市",
              "layer": "2"
          },
          {
              "id": "301",
              "parentId": "25",
              "value": "曲靖市",
              "layer": "2"
          },
          {
              "id": "302",
              "parentId": "25",
              "value": "玉溪市",
              "layer": "2"
          },
          {
              "id": "303",
              "parentId": "25",
              "value": "保山市",
              "layer": "2"
          },
          {
              "id": "304",
              "parentId": "25",
              "value": "昭通市",
              "layer": "2"
          },
          {
              "id": "305",
              "parentId": "25",
              "value": "丽江市",
              "layer": "2"
          },
          {
              "id": "306",
              "parentId": "25",
              "value": "思茅市",
              "layer": "2"
          },
          {
              "id": "307",
              "parentId": "25",
              "value": "临沧市",
              "layer": "2"
          },
          {
              "id": "308",
              "parentId": "25",
              "value": "楚雄彝族自治州",
              "layer": "2"
          },
          {
              "id": "309",
              "parentId": "25",
              "value": "红河哈尼族彝族自治州",
              "layer": "2"
          },
          {
              "id": "310",
              "parentId": "25",
              "value": "文山壮族苗族自治州",
              "layer": "2"
          },
          {
              "id": "311",
              "parentId": "25",
              "value": "西双版纳傣族自治州",
              "layer": "2"
          },
          {
              "id": "312",
              "parentId": "25",
              "value": "大理白族自治州",
              "layer": "2"
          },
          {
              "id": "313",
              "parentId": "25",
              "value": "德宏傣族景颇族自治州",
              "layer": "2"
          },
          {
              "id": "314",
              "parentId": "25",
              "value": "怒江傈僳族自治州",
              "layer": "2"
          },
          {
              "id": "315",
              "parentId": "25",
              "value": "迪庆藏族自治州",
              "layer": "2"
          },
          {
              "id": "316",
              "parentId": "26",
              "value": "拉萨市",
              "layer": "2"
          },
          {
              "id": "317",
              "parentId": "26",
              "value": "昌都地区",
              "layer": "2"
          },
          {
              "id": "318",
              "parentId": "26",
              "value": "山南地区",
              "layer": "2"
          },
          {
              "id": "319",
              "parentId": "26",
              "value": "日喀则地区",
              "layer": "2"
          },
          {
              "id": "320",
              "parentId": "26",
              "value": "那曲地区",
              "layer": "2"
          },
          {
              "id": "321",
              "parentId": "26",
              "value": "阿里地区",
              "layer": "2"
          },
          {
              "id": "322",
              "parentId": "26",
              "value": "林芝地区",
              "layer": "2"
          },
          {
              "id": "323",
              "parentId": "27",
              "value": "西安市",
              "layer": "2"
          },
          {
              "id": "324",
              "parentId": "27",
              "value": "铜川市",
              "layer": "2"
          },
          {
              "id": "325",
              "parentId": "27",
              "value": "宝鸡市",
              "layer": "2"
          },
          {
              "id": "326",
              "parentId": "27",
              "value": "咸阳市",
              "layer": "2"
          },
          {
              "id": "327",
              "parentId": "27",
              "value": "渭南市",
              "layer": "2"
          },
          {
              "id": "328",
              "parentId": "27",
              "value": "延安市",
              "layer": "2"
          },
          {
              "id": "329",
              "parentId": "27",
              "value": "汉中市",
              "layer": "2"
          },
          {
              "id": "330",
              "parentId": "27",
              "value": "榆林市",
              "layer": "2"
          },
          {
              "id": "331",
              "parentId": "27",
              "value": "安康市",
              "layer": "2"
          },
          {
              "id": "332",
              "parentId": "27",
              "value": "商洛市",
              "layer": "2"
          },
          {
              "id": "333",
              "parentId": "28",
              "value": "兰州市",
              "layer": "2"
          },
          {
              "id": "334",
              "parentId": "28",
              "value": "嘉峪关市",
              "layer": "2"
          },
          {
              "id": "335",
              "parentId": "28",
              "value": "金昌市",
              "layer": "2"
          },
          {
              "id": "336",
              "parentId": "28",
              "value": "白银市",
              "layer": "2"
          },
          {
              "id": "337",
              "parentId": "28",
              "value": "天水市",
              "layer": "2"
          },
          {
              "id": "338",
              "parentId": "28",
              "value": "武威市",
              "layer": "2"
          },
          {
              "id": "339",
              "parentId": "28",
              "value": "张掖市",
              "layer": "2"
          },
          {
              "id": "340",
              "parentId": "28",
              "value": "平凉市",
              "layer": "2"
          },
          {
              "id": "341",
              "parentId": "28",
              "value": "酒泉市",
              "layer": "2"
          },
          {
              "id": "342",
              "parentId": "28",
              "value": "庆阳市",
              "layer": "2"
          },
          {
              "id": "343",
              "parentId": "28",
              "value": "定西市",
              "layer": "2"
          },
          {
              "id": "344",
              "parentId": "28",
              "value": "陇南市",
              "layer": "2"
          },
          {
              "id": "345",
              "parentId": "28",
              "value": "临夏回族自治州",
              "layer": "2"
          },
          {
              "id": "346",
              "parentId": "28",
              "value": "甘南藏族自治州",
              "layer": "2"
          },
          {
              "id": "347",
              "parentId": "29",
              "value": "西宁市",
              "layer": "2"
          },
          {
              "id": "348",
              "parentId": "29",
              "value": "海东市",
              "layer": "2"
          },
          {
              "id": "349",
              "parentId": "29",
              "value": "海北藏族自治州",
              "layer": "2"
          },
          {
              "id": "350",
              "parentId": "29",
              "value": "黄南藏族自治州",
              "layer": "2"
          },
          {
              "id": "351",
              "parentId": "29",
              "value": "海南藏族自治州",
              "layer": "2"
          },
          {
              "id": "352",
              "parentId": "29",
              "value": "果洛藏族自治州",
              "layer": "2"
          },
          {
              "id": "353",
              "parentId": "29",
              "value": "玉树藏族自治州",
              "layer": "2"
          },
          {
              "id": "354",
              "parentId": "29",
              "value": "海西蒙古族藏族自治州",
              "layer": "2"
          },
          {
              "id": "355",
              "parentId": "30",
              "value": "银川市",
              "layer": "2"
          },
          {
              "id": "356",
              "parentId": "30",
              "value": "石嘴山市",
              "layer": "2"
          },
          {
              "id": "357",
              "parentId": "30",
              "value": "吴忠市",
              "layer": "2"
          },
          {
              "id": "358",
              "parentId": "30",
              "value": "固原市",
              "layer": "2"
          },
          {
              "id": "359",
              "parentId": "30",
              "value": "中卫市",
              "layer": "2"
          },
          {
              "id": "360",
              "parentId": "31",
              "value": "乌鲁木齐市",
              "layer": "2"
          },
          {
              "id": "361",
              "parentId": "31",
              "value": "克拉玛依市",
              "layer": "2"
          },
          {
              "id": "362",
              "parentId": "31",
              "value": "吐鲁番地区",
              "layer": "2"
          },
          {
              "id": "363",
              "parentId": "31",
              "value": "哈密地区",
              "layer": "2"
          },
          {
              "id": "364",
              "parentId": "31",
              "value": "昌吉回族自治州",
              "layer": "2"
          },
          {
              "id": "365",
              "parentId": "31",
              "value": "博尔塔拉蒙古自治州",
              "layer": "2"
          },
          {
              "id": "366",
              "parentId": "31",
              "value": "巴音郭楞蒙古自治州",
              "layer": "2"
          },
          {
              "id": "367",
              "parentId": "31",
              "value": "阿克苏地区",
              "layer": "2"
          },
          {
              "id": "368",
              "parentId": "31",
              "value": "克孜勒苏柯尔克孜自治州",
              "layer": "2"
          },
          {
              "id": "369",
              "parentId": "31",
              "value": "喀什地区",
              "layer": "2"
          },
          {
              "id": "370",
              "parentId": "31",
              "value": "和田地区",
              "layer": "2"
          },
          {
              "id": "371",
              "parentId": "31",
              "value": "伊犁哈萨克自治州",
              "layer": "2"
          },
          {
              "id": "372",
              "parentId": "31",
              "value": "塔城地区",
              "layer": "2"
          },
          {
              "id": "373",
              "parentId": "31",
              "value": "阿勒泰地区",
              "layer": "2"
          },
          {
              "id": "374",
              "parentId": "31",
              "value": "石河子市",
              "layer": "2"
          },

];

// 区县列表
var iosCountys = [

    /**********北京市********/
    {
            "id": "375",
            "parentId": "35",
            "value": "东城区",
            "layer": "3"
        },
        {
            "id": "376",
            "parentId": "35",
            "value": "西城区",
            "layer": "3"
        },
        {
            "id": "377",
            "parentId": "35",
            "value": "崇文区",
            "layer": "3"
        },
        {
            "id": "378",
            "parentId": "35",
            "value": "宣武区",
            "layer": "3"
        },
        {
            "id": "379",
            "parentId": "35",
            "value": "朝阳区",
            "layer": "3"
        },
        {
            "id": "380",
            "parentId": "35",
            "value": "丰台区",
            "layer": "3"
        },
        {
            "id": "381",
            "parentId": "35",
            "value": "石景山区",
            "layer": "3"
        },
        {
            "id": "382",
            "parentId": "35",
            "value": "海淀区",
            "layer": "3"
        },
        {
            "id": "383",
            "parentId": "35",
            "value": "门头沟区",
            "layer": "3"
        },
        {
            "id": "384",
            "parentId": "35",
            "value": "房山区",
            "layer": "3"
        },
        {
            "id": "385",
            "parentId": "35",
            "value": "通州区",
            "layer": "3"
        },
        {
            "id": "386",
            "parentId": "35",
            "value": "顺义区",
            "layer": "3"
        },
        {
            "id": "387",
            "parentId": "35",
            "value": "昌平区",
            "layer": "3"
        },
        {
            "id": "388",
            "parentId": "35",
            "value": "大兴区",
            "layer": "3"
        },
        {
            "id": "389",
            "parentId": "35",
            "value": "怀柔区",
            "layer": "3"
        },
        {
            "id": "390",
            "parentId": "35",
            "value": "平谷区",
            "layer": "3"
        },
        {
            "id": "391",
            "parentId": "35",
            "value": "密云县",
            "layer": "3"
        },
        {
            "id": "392",
            "parentId": "35",
            "value": "延庆县",
            "layer": "3"
        },
        {
            "id": "393",
            "parentId": "36",
            "value": "和平区",
            "layer": "3"
        },
        {
            "id": "394",
            "parentId": "36",
            "value": "河东区",
            "layer": "3"
        },
        {
            "id": "395",
            "parentId": "36",
            "value": "河西区",
            "layer": "3"
        },
        {
            "id": "396",
            "parentId": "36",
            "value": "南开区",
            "layer": "3"
        },
        {
            "id": "397",
            "parentId": "36",
            "value": "河北区",
            "layer": "3"
        },
        {
            "id": "398",
            "parentId": "36",
            "value": "红桥区",
            "layer": "3"
        },
        {
            "id": "399",
            "parentId": "36",
            "value": "塘沽区",
            "layer": "3"
        },
        {
            "id": "400",
            "parentId": "36",
            "value": "汉沽区",
            "layer": "3"
        },
        {
            "id": "401",
            "parentId": "36",
            "value": "大港区",
            "layer": "3"
        },
        {
            "id": "402",
            "parentId": "36",
            "value": "东丽区",
            "layer": "3"
        },
        {
            "id": "403",
            "parentId": "36",
            "value": "西青区",
            "layer": "3"
        },
        {
            "id": "404",
            "parentId": "36",
            "value": "津南区",
            "layer": "3"
        },
        {
            "id": "405",
            "parentId": "36",
            "value": "北辰区",
            "layer": "3"
        },
        {
            "id": "406",
            "parentId": "36",
            "value": "武清区",
            "layer": "3"
        },
        {
            "id": "407",
            "parentId": "36",
            "value": "宝坻区",
            "layer": "3"
        },
        {
            "id": "408",
            "parentId": "36",
            "value": "宁河县",
            "layer": "3"
        },
        {
            "id": "409",
            "parentId": "36",
            "value": "静海县",
            "layer": "3"
        },
        {
            "id": "410",
            "parentId": "36",
            "value": "蓟　县",
            "layer": "3"
        },
        {
            "id": "411",
            "parentId": "37",
            "value": "长安区",
            "layer": "3"
        },
        {
            "id": "412",
            "parentId": "37",
            "value": "桥东区",
            "layer": "3"
        },
        {
            "id": "413",
            "parentId": "37",
            "value": "桥西区",
            "layer": "3"
        },
        {
            "id": "414",
            "parentId": "37",
            "value": "新华区",
            "layer": "3"
        },
        {
            "id": "415",
            "parentId": "37",
            "value": "井陉矿区",
            "layer": "3"
        },
        {
            "id": "416",
            "parentId": "37",
            "value": "裕华区",
            "layer": "3"
        },
        {
            "id": "417",
            "parentId": "37",
            "value": "井陉县",
            "layer": "3"
        },
        {
            "id": "418",
            "parentId": "37",
            "value": "正定县",
            "layer": "3"
        },
        {
            "id": "419",
            "parentId": "37",
            "value": "栾城县",
            "layer": "3"
        },
        {
            "id": "420",
            "parentId": "37",
            "value": "行唐县",
            "layer": "3"
        },
        {
            "id": "421",
            "parentId": "37",
            "value": "灵寿县",
            "layer": "3"
        },
        {
            "id": "422",
            "parentId": "37",
            "value": "高邑县",
            "layer": "3"
        },
        {
            "id": "423",
            "parentId": "37",
            "value": "深泽县",
            "layer": "3"
        },
        {
            "id": "424",
            "parentId": "37",
            "value": "赞皇县",
            "layer": "3"
        },
        {
            "id": "425",
            "parentId": "37",
            "value": "无极县",
            "layer": "3"
        },
        {
            "id": "426",
            "parentId": "37",
            "value": "平山县",
            "layer": "3"
        },
        {
            "id": "427",
            "parentId": "37",
            "value": "元氏县",
            "layer": "3"
        },
        {
            "id": "428",
            "parentId": "37",
            "value": "赵　县",
            "layer": "3"
        },
        {
            "id": "429",
            "parentId": "37",
            "value": "辛集市",
            "layer": "3"
        },
        {
            "id": "430",
            "parentId": "37",
            "value": "藁城市",
            "layer": "3"
        },
        {
            "id": "431",
            "parentId": "37",
            "value": "晋州市",
            "layer": "3"
        },
        {
            "id": "432",
            "parentId": "37",
            "value": "新乐市",
            "layer": "3"
        },
        {
            "id": "433",
            "parentId": "37",
            "value": "鹿泉市",
            "layer": "3"
        },
        {
            "id": "434",
            "parentId": "38",
            "value": "路南区",
            "layer": "3"
        },
        {
            "id": "435",
            "parentId": "38",
            "value": "路北区",
            "layer": "3"
        },
        {
            "id": "436",
            "parentId": "38",
            "value": "古冶区",
            "layer": "3"
        },
        {
            "id": "437",
            "parentId": "38",
            "value": "开平区",
            "layer": "3"
        },
        {
            "id": "438",
            "parentId": "38",
            "value": "丰南区",
            "layer": "3"
        },
        {
            "id": "439",
            "parentId": "38",
            "value": "丰润区",
            "layer": "3"
        },
        {
            "id": "440",
            "parentId": "38",
            "value": "滦　县",
            "layer": "3"
        },
        {
            "id": "441",
            "parentId": "38",
            "value": "滦南县",
            "layer": "3"
        },
        {
            "id": "442",
            "parentId": "38",
            "value": "乐亭县",
            "layer": "3"
        },
        {
            "id": "443",
            "parentId": "38",
            "value": "迁西县",
            "layer": "3"
        },
        {
            "id": "444",
            "parentId": "38",
            "value": "玉田县",
            "layer": "3"
        },
        {
            "id": "445",
            "parentId": "38",
            "value": "唐海县",
            "layer": "3"
        },
        {
            "id": "446",
            "parentId": "38",
            "value": "遵化市",
            "layer": "3"
        },
        {
            "id": "447",
            "parentId": "38",
            "value": "迁安市",
            "layer": "3"
        },
        {
            "id": "448",
            "parentId": "39",
            "value": "海港区",
            "layer": "3"
        },
        {
            "id": "449",
            "parentId": "39",
            "value": "山海关区",
            "layer": "3"
        },
        {
            "id": "450",
            "parentId": "39",
            "value": "北戴河区",
            "layer": "3"
        },
        {
            "id": "451",
            "parentId": "39",
            "value": "青龙满族自治县",
            "layer": "3"
        },
        {
            "id": "452",
            "parentId": "39",
            "value": "昌黎县",
            "layer": "3"
        },
        {
            "id": "453",
            "parentId": "39",
            "value": "抚宁县",
            "layer": "3"
        },
        {
            "id": "454",
            "parentId": "39",
            "value": "卢龙县",
            "layer": "3"
        },
        {
            "id": "455",
            "parentId": "40",
            "value": "邯山区",
            "layer": "3"
        },
        {
            "id": "456",
            "parentId": "40",
            "value": "丛台区",
            "layer": "3"
        },
        {
            "id": "457",
            "parentId": "40",
            "value": "复兴区",
            "layer": "3"
        },
        {
            "id": "458",
            "parentId": "40",
            "value": "峰峰矿区",
            "layer": "3"
        },
        {
            "id": "459",
            "parentId": "40",
            "value": "邯郸县",
            "layer": "3"
        },
        {
            "id": "460",
            "parentId": "40",
            "value": "临漳县",
            "layer": "3"
        },
        {
            "id": "461",
            "parentId": "40",
            "value": "成安县",
            "layer": "3"
        },
        {
            "id": "462",
            "parentId": "40",
            "value": "大名县",
            "layer": "3"
        },
        {
            "id": "463",
            "parentId": "40",
            "value": "涉　县",
            "layer": "3"
        },
        {
            "id": "464",
            "parentId": "40",
            "value": "磁　县",
            "layer": "3"
        },
        {
            "id": "465",
            "parentId": "40",
            "value": "肥乡县",
            "layer": "3"
        },
        {
            "id": "466",
            "parentId": "40",
            "value": "永年县",
            "layer": "3"
        },
        {
            "id": "467",
            "parentId": "40",
            "value": "邱　县",
            "layer": "3"
        },
        {
            "id": "468",
            "parentId": "40",
            "value": "鸡泽县",
            "layer": "3"
        },
        {
            "id": "469",
            "parentId": "40",
            "value": "广平县",
            "layer": "3"
        },
        {
            "id": "470",
            "parentId": "40",
            "value": "馆陶县",
            "layer": "3"
        },
        {
            "id": "471",
            "parentId": "40",
            "value": "魏　县",
            "layer": "3"
        },
        {
            "id": "472",
            "parentId": "40",
            "value": "曲周县",
            "layer": "3"
        },
        {
            "id": "473",
            "parentId": "40",
            "value": "武安市",
            "layer": "3"
        },
        {
            "id": "474",
            "parentId": "41",
            "value": "桥东区",
            "layer": "3"
        },
        {
            "id": "475",
            "parentId": "41",
            "value": "桥西区",
            "layer": "3"
        },
        {
            "id": "476",
            "parentId": "41",
            "value": "邢台县",
            "layer": "3"
        },
        {
            "id": "477",
            "parentId": "41",
            "value": "临城县",
            "layer": "3"
        },
        {
            "id": "478",
            "parentId": "41",
            "value": "内丘县",
            "layer": "3"
        },
        {
            "id": "479",
            "parentId": "41",
            "value": "柏乡县",
            "layer": "3"
        },
        {
            "id": "480",
            "parentId": "41",
            "value": "隆尧县",
            "layer": "3"
        },
        {
            "id": "481",
            "parentId": "41",
            "value": "任　县",
            "layer": "3"
        },
        {
            "id": "482",
            "parentId": "41",
            "value": "南和县",
            "layer": "3"
        },
        {
            "id": "483",
            "parentId": "41",
            "value": "宁晋县",
            "layer": "3"
        },
        {
            "id": "484",
            "parentId": "41",
            "value": "巨鹿县",
            "layer": "3"
        },
        {
            "id": "485",
            "parentId": "41",
            "value": "新河县",
            "layer": "3"
        },
        {
            "id": "486",
            "parentId": "41",
            "value": "广宗县",
            "layer": "3"
        },
        {
            "id": "487",
            "parentId": "41",
            "value": "平乡县",
            "layer": "3"
        },
        {
            "id": "488",
            "parentId": "41",
            "value": "威　县",
            "layer": "3"
        },
        {
            "id": "489",
            "parentId": "41",
            "value": "清河县",
            "layer": "3"
        },
        {
            "id": "490",
            "parentId": "41",
            "value": "临西县",
            "layer": "3"
        },
        {
            "id": "491",
            "parentId": "41",
            "value": "南宫市",
            "layer": "3"
        },
        {
            "id": "492",
            "parentId": "41",
            "value": "沙河市",
            "layer": "3"
        },
        {
            "id": "493",
            "parentId": "42",
            "value": "新市区",
            "layer": "3"
        },
        {
            "id": "494",
            "parentId": "42",
            "value": "北市区",
            "layer": "3"
        },
        {
            "id": "495",
            "parentId": "42",
            "value": "南市区",
            "layer": "3"
        },
        {
            "id": "496",
            "parentId": "42",
            "value": "满城县",
            "layer": "3"
        },
        {
            "id": "497",
            "parentId": "42",
            "value": "清苑县",
            "layer": "3"
        },
        {
            "id": "498",
            "parentId": "42",
            "value": "涞水县",
            "layer": "3"
        },
        {
            "id": "499",
            "parentId": "42",
            "value": "阜平县",
            "layer": "3"
        },
        {
            "id": "500",
            "parentId": "42",
            "value": "徐水县",
            "layer": "3"
        },
        {
            "id": "501",
            "parentId": "42",
            "value": "定兴县",
            "layer": "3"
        },
        {
            "id": "502",
            "parentId": "42",
            "value": "唐　县",
            "layer": "3"
        },
        {
            "id": "503",
            "parentId": "42",
            "value": "高阳县",
            "layer": "3"
        },
        {
            "id": "504",
            "parentId": "42",
            "value": "容城县",
            "layer": "3"
        },
        {
            "id": "505",
            "parentId": "42",
            "value": "涞源县",
            "layer": "3"
        },
        {
            "id": "506",
            "parentId": "42",
            "value": "望都县",
            "layer": "3"
        },
        {
            "id": "507",
            "parentId": "42",
            "value": "安新县",
            "layer": "3"
        },
        {
            "id": "508",
            "parentId": "42",
            "value": "易　县",
            "layer": "3"
        },
        {
            "id": "509",
            "parentId": "42",
            "value": "曲阳县",
            "layer": "3"
        },
        {
            "id": "510",
            "parentId": "42",
            "value": "蠡　县",
            "layer": "3"
        },
        {
            "id": "511",
            "parentId": "42",
            "value": "顺平县",
            "layer": "3"
        },
        {
            "id": "512",
            "parentId": "42",
            "value": "博野县",
            "layer": "3"
        },
        {
            "id": "513",
            "parentId": "42",
            "value": "雄　县",
            "layer": "3"
        },
        {
            "id": "514",
            "parentId": "42",
            "value": "涿州市",
            "layer": "3"
        },
        {
            "id": "515",
            "parentId": "42",
            "value": "定州市",
            "layer": "3"
        },
        {
            "id": "516",
            "parentId": "42",
            "value": "安国市",
            "layer": "3"
        },
        {
            "id": "517",
            "parentId": "42",
            "value": "高碑店市",
            "layer": "3"
        },
        {
            "id": "518",
            "parentId": "43",
            "value": "桥东区",
            "layer": "3"
        },
        {
            "id": "519",
            "parentId": "43",
            "value": "桥西区",
            "layer": "3"
        },
        {
            "id": "520",
            "parentId": "43",
            "value": "宣化区",
            "layer": "3"
        },
        {
            "id": "521",
            "parentId": "43",
            "value": "下花园区",
            "layer": "3"
        },
        {
            "id": "522",
            "parentId": "43",
            "value": "宣化县",
            "layer": "3"
        },
        {
            "id": "523",
            "parentId": "43",
            "value": "张北县",
            "layer": "3"
        },
        {
            "id": "524",
            "parentId": "43",
            "value": "康保县",
            "layer": "3"
        },
        {
            "id": "525",
            "parentId": "43",
            "value": "沽源县",
            "layer": "3"
        },
        {
            "id": "526",
            "parentId": "43",
            "value": "尚义县",
            "layer": "3"
        },
        {
            "id": "527",
            "parentId": "43",
            "value": "蔚　县",
            "layer": "3"
        },
        {
            "id": "528",
            "parentId": "43",
            "value": "阳原县",
            "layer": "3"
        },
        {
            "id": "529",
            "parentId": "43",
            "value": "怀安县",
            "layer": "3"
        },
        {
            "id": "530",
            "parentId": "43",
            "value": "万全县",
            "layer": "3"
        },
        {
            "id": "531",
            "parentId": "43",
            "value": "怀来县",
            "layer": "3"
        },
        {
            "id": "532",
            "parentId": "43",
            "value": "涿鹿县",
            "layer": "3"
        },
        {
            "id": "533",
            "parentId": "43",
            "value": "赤城县",
            "layer": "3"
        },
        {
            "id": "534",
            "parentId": "43",
            "value": "崇礼县",
            "layer": "3"
        },
        {
            "id": "535",
            "parentId": "44",
            "value": "双桥区",
            "layer": "3"
        },
        {
            "id": "536",
            "parentId": "44",
            "value": "双滦区",
            "layer": "3"
        },
        {
            "id": "537",
            "parentId": "44",
            "value": "鹰手营子矿区",
            "layer": "3"
        },
        {
            "id": "538",
            "parentId": "44",
            "value": "承德县",
            "layer": "3"
        },
        {
            "id": "539",
            "parentId": "44",
            "value": "兴隆县",
            "layer": "3"
        },
        {
            "id": "540",
            "parentId": "44",
            "value": "平泉县",
            "layer": "3"
        },
        {
            "id": "541",
            "parentId": "44",
            "value": "滦平县",
            "layer": "3"
        },
        {
            "id": "542",
            "parentId": "44",
            "value": "隆化县",
            "layer": "3"
        },
        {
            "id": "543",
            "parentId": "44",
            "value": "丰宁满族自治县",
            "layer": "3"
        },
        {
            "id": "544",
            "parentId": "44",
            "value": "宽城满族自治县",
            "layer": "3"
        },
        {
            "id": "545",
            "parentId": "44",
            "value": "围场满族蒙古族自治县",
            "layer": "3"
        },
        {
            "id": "546",
            "parentId": "45",
            "value": "新华区",
            "layer": "3"
        },
        {
            "id": "547",
            "parentId": "45",
            "value": "运河区",
            "layer": "3"
        },
        {
            "id": "548",
            "parentId": "45",
            "value": "沧　县",
            "layer": "3"
        },
        {
            "id": "549",
            "parentId": "45",
            "value": "青　县",
            "layer": "3"
        },
        {
            "id": "550",
            "parentId": "45",
            "value": "东光县",
            "layer": "3"
        },
        {
            "id": "551",
            "parentId": "45",
            "value": "海兴县",
            "layer": "3"
        },
        {
            "id": "552",
            "parentId": "45",
            "value": "盐山县",
            "layer": "3"
        },
        {
            "id": "553",
            "parentId": "45",
            "value": "肃宁县",
            "layer": "3"
        },
        {
            "id": "554",
            "parentId": "45",
            "value": "南皮县",
            "layer": "3"
        },
        {
            "id": "555",
            "parentId": "45",
            "value": "吴桥县",
            "layer": "3"
        },
        {
            "id": "556",
            "parentId": "45",
            "value": "献　县",
            "layer": "3"
        },
        {
            "id": "557",
            "parentId": "45",
            "value": "孟村回族自治县",
            "layer": "3"
        },
        {
            "id": "558",
            "parentId": "45",
            "value": "泊头市",
            "layer": "3"
        },
        {
            "id": "559",
            "parentId": "45",
            "value": "任丘市",
            "layer": "3"
        },
        {
            "id": "560",
            "parentId": "45",
            "value": "黄骅市",
            "layer": "3"
        },
        {
            "id": "561",
            "parentId": "45",
            "value": "河间市",
            "layer": "3"
        },
        {
            "id": "562",
            "parentId": "46",
            "value": "安次区",
            "layer": "3"
        },
        {
            "id": "563",
            "parentId": "46",
            "value": "广阳区",
            "layer": "3"
        },
        {
            "id": "564",
            "parentId": "46",
            "value": "固安县",
            "layer": "3"
        },
        {
            "id": "565",
            "parentId": "46",
            "value": "永清县",
            "layer": "3"
        },
        {
            "id": "566",
            "parentId": "46",
            "value": "香河县",
            "layer": "3"
        },
        {
            "id": "567",
            "parentId": "46",
            "value": "大城县",
            "layer": "3"
        },
        {
            "id": "568",
            "parentId": "46",
            "value": "文安县",
            "layer": "3"
        },
        {
            "id": "569",
            "parentId": "46",
            "value": "大厂回族自治县",
            "layer": "3"
        },
        {
            "id": "570",
            "parentId": "46",
            "value": "霸州市",
            "layer": "3"
        },
        {
            "id": "571",
            "parentId": "46",
            "value": "三河市",
            "layer": "3"
        },
        {
            "id": "572",
            "parentId": "47",
            "value": "桃城区",
            "layer": "3"
        },
        {
            "id": "573",
            "parentId": "47",
            "value": "枣强县",
            "layer": "3"
        },
        {
            "id": "574",
            "parentId": "47",
            "value": "武邑县",
            "layer": "3"
        },
        {
            "id": "575",
            "parentId": "47",
            "value": "武强县",
            "layer": "3"
        },
        {
            "id": "576",
            "parentId": "47",
            "value": "饶阳县",
            "layer": "3"
        },
        {
            "id": "577",
            "parentId": "47",
            "value": "安平县",
            "layer": "3"
        },
        {
            "id": "578",
            "parentId": "47",
            "value": "故城县",
            "layer": "3"
        },
        {
            "id": "579",
            "parentId": "47",
            "value": "景　县",
            "layer": "3"
        },
        {
            "id": "580",
            "parentId": "47",
            "value": "阜城县",
            "layer": "3"
        },
        {
            "id": "581",
            "parentId": "47",
            "value": "冀州市",
            "layer": "3"
        },
        {
            "id": "582",
            "parentId": "47",
            "value": "深州市",
            "layer": "3"
        },
        {
            "id": "583",
            "parentId": "48",
            "value": "小店区",
            "layer": "3"
        },
        {
            "id": "584",
            "parentId": "48",
            "value": "迎泽区",
            "layer": "3"
        },
        {
            "id": "585",
            "parentId": "48",
            "value": "杏花岭区",
            "layer": "3"
        },
        {
            "id": "586",
            "parentId": "48",
            "value": "尖草坪区",
            "layer": "3"
        },
        {
            "id": "587",
            "parentId": "48",
            "value": "万柏林区",
            "layer": "3"
        },
        {
            "id": "588",
            "parentId": "48",
            "value": "晋源区",
            "layer": "3"
        },
        {
            "id": "589",
            "parentId": "48",
            "value": "清徐县",
            "layer": "3"
        },
        {
            "id": "590",
            "parentId": "48",
            "value": "阳曲县",
            "layer": "3"
        },
        {
            "id": "591",
            "parentId": "48",
            "value": "娄烦县",
            "layer": "3"
        },
        {
            "id": "592",
            "parentId": "48",
            "value": "古交市",
            "layer": "3"
        },
        {
            "id": "593",
            "parentId": "49",
            "value": "城　区",
            "layer": "3"
        },
        {
            "id": "594",
            "parentId": "49",
            "value": "矿　区",
            "layer": "3"
        },
        {
            "id": "595",
            "parentId": "49",
            "value": "南郊区",
            "layer": "3"
        },
        {
            "id": "596",
            "parentId": "49",
            "value": "新荣区",
            "layer": "3"
        },
        {
            "id": "597",
            "parentId": "49",
            "value": "阳高县",
            "layer": "3"
        },
        {
            "id": "598",
            "parentId": "49",
            "value": "天镇县",
            "layer": "3"
        },
        {
            "id": "599",
            "parentId": "49",
            "value": "广灵县",
            "layer": "3"
        },
        {
            "id": "600",
            "parentId": "49",
            "value": "灵丘县",
            "layer": "3"
        },
        {
            "id": "601",
            "parentId": "49",
            "value": "浑源县",
            "layer": "3"
        },
        {
            "id": "602",
            "parentId": "49",
            "value": "左云县",
            "layer": "3"
        },
        {
            "id": "603",
            "parentId": "49",
            "value": "大同县",
            "layer": "3"
        },
        {
            "id": "604",
            "parentId": "50",
            "value": "城　区",
            "layer": "3"
        },
        {
            "id": "605",
            "parentId": "50",
            "value": "矿　区",
            "layer": "3"
        },
        {
            "id": "606",
            "parentId": "50",
            "value": "郊　区",
            "layer": "3"
        },
        {
            "id": "607",
            "parentId": "50",
            "value": "平定县",
            "layer": "3"
        },
        {
            "id": "608",
            "parentId": "50",
            "value": "盂　县",
            "layer": "3"
        },
        {
            "id": "609",
            "parentId": "51",
            "value": "城　区",
            "layer": "3"
        },
        {
            "id": "610",
            "parentId": "51",
            "value": "郊　区",
            "layer": "3"
        },
        {
            "id": "611",
            "parentId": "51",
            "value": "长治县",
            "layer": "3"
        },
        {
            "id": "612",
            "parentId": "51",
            "value": "襄垣县",
            "layer": "3"
        },
        {
            "id": "613",
            "parentId": "51",
            "value": "屯留县",
            "layer": "3"
        },
        {
            "id": "614",
            "parentId": "51",
            "value": "平顺县",
            "layer": "3"
        },
        {
            "id": "615",
            "parentId": "51",
            "value": "黎城县",
            "layer": "3"
        },
        {
            "id": "616",
            "parentId": "51",
            "value": "壶关县",
            "layer": "3"
        },
        {
            "id": "617",
            "parentId": "51",
            "value": "长子县",
            "layer": "3"
        },
        {
            "id": "618",
            "parentId": "51",
            "value": "武乡县",
            "layer": "3"
        },
        {
            "id": "619",
            "parentId": "51",
            "value": "沁　县",
            "layer": "3"
        },
        {
            "id": "620",
            "parentId": "51",
            "value": "沁源县",
            "layer": "3"
        },
        {
            "id": "621",
            "parentId": "51",
            "value": "潞城市",
            "layer": "3"
        },
        {
            "id": "622",
            "parentId": "52",
            "value": "城　区",
            "layer": "3"
        },
        {
            "id": "623",
            "parentId": "52",
            "value": "沁水县",
            "layer": "3"
        },
        {
            "id": "624",
            "parentId": "52",
            "value": "阳城县",
            "layer": "3"
        },
        {
            "id": "625",
            "parentId": "52",
            "value": "陵川县",
            "layer": "3"
        },
        {
            "id": "626",
            "parentId": "52",
            "value": "泽州县",
            "layer": "3"
        },
        {
            "id": "627",
            "parentId": "52",
            "value": "高平市",
            "layer": "3"
        },
        {
            "id": "628",
            "parentId": "53",
            "value": "朔城区",
            "layer": "3"
        },
        {
            "id": "629",
            "parentId": "53",
            "value": "平鲁区",
            "layer": "3"
        },
        {
            "id": "630",
            "parentId": "53",
            "value": "山阴县",
            "layer": "3"
        },
        {
            "id": "631",
            "parentId": "53",
            "value": "应　县",
            "layer": "3"
        },
        {
            "id": "632",
            "parentId": "53",
            "value": "右玉县",
            "layer": "3"
        },
        {
            "id": "633",
            "parentId": "53",
            "value": "怀仁县",
            "layer": "3"
        },
        {
            "id": "634",
            "parentId": "54",
            "value": "榆次区",
            "layer": "3"
        },
        {
            "id": "635",
            "parentId": "54",
            "value": "榆社县",
            "layer": "3"
        },
        {
            "id": "636",
            "parentId": "54",
            "value": "左权县",
            "layer": "3"
        },
        {
            "id": "637",
            "parentId": "54",
            "value": "和顺县",
            "layer": "3"
        },
        {
            "id": "638",
            "parentId": "54",
            "value": "昔阳县",
            "layer": "3"
        },
        {
            "id": "639",
            "parentId": "54",
            "value": "寿阳县",
            "layer": "3"
        },
        {
            "id": "640",
            "parentId": "54",
            "value": "太谷县",
            "layer": "3"
        },
        {
            "id": "641",
            "parentId": "54",
            "value": "祁　县",
            "layer": "3"
        },
        {
            "id": "642",
            "parentId": "54",
            "value": "平遥县",
            "layer": "3"
        },
        {
            "id": "643",
            "parentId": "54",
            "value": "灵石县",
            "layer": "3"
        },
        {
            "id": "644",
            "parentId": "54",
            "value": "介休市",
            "layer": "3"
        },
        {
            "id": "645",
            "parentId": "55",
            "value": "盐湖区",
            "layer": "3"
        },
        {
            "id": "646",
            "parentId": "55",
            "value": "临猗县",
            "layer": "3"
        },
        {
            "id": "647",
            "parentId": "55",
            "value": "万荣县",
            "layer": "3"
        },
        {
            "id": "648",
            "parentId": "55",
            "value": "闻喜县",
            "layer": "3"
        },
        {
            "id": "649",
            "parentId": "55",
            "value": "稷山县",
            "layer": "3"
        },
        {
            "id": "650",
            "parentId": "55",
            "value": "新绛县",
            "layer": "3"
        },
        {
            "id": "651",
            "parentId": "55",
            "value": "绛　县",
            "layer": "3"
        },
        {
            "id": "652",
            "parentId": "55",
            "value": "垣曲县",
            "layer": "3"
        },
        {
            "id": "653",
            "parentId": "55",
            "value": "夏　县",
            "layer": "3"
        },
        {
            "id": "654",
            "parentId": "55",
            "value": "平陆县",
            "layer": "3"
        },
        {
            "id": "655",
            "parentId": "55",
            "value": "芮城县",
            "layer": "3"
        },
        {
            "id": "656",
            "parentId": "55",
            "value": "永济市",
            "layer": "3"
        },
        {
            "id": "657",
            "parentId": "55",
            "value": "河津市",
            "layer": "3"
        },
        {
            "id": "658",
            "parentId": "56",
            "value": "忻府区",
            "layer": "3"
        },
        {
            "id": "659",
            "parentId": "56",
            "value": "定襄县",
            "layer": "3"
        },
        {
            "id": "660",
            "parentId": "56",
            "value": "五台县",
            "layer": "3"
        },
        {
            "id": "661",
            "parentId": "56",
            "value": "代　县",
            "layer": "3"
        },
        {
            "id": "662",
            "parentId": "56",
            "value": "繁峙县",
            "layer": "3"
        },
        {
            "id": "663",
            "parentId": "56",
            "value": "宁武县",
            "layer": "3"
        },
        {
            "id": "664",
            "parentId": "56",
            "value": "静乐县",
            "layer": "3"
        },
        {
            "id": "665",
            "parentId": "56",
            "value": "神池县",
            "layer": "3"
        },
        {
            "id": "666",
            "parentId": "56",
            "value": "五寨县",
            "layer": "3"
        },
        {
            "id": "667",
            "parentId": "56",
            "value": "岢岚县",
            "layer": "3"
        },
        {
            "id": "668",
            "parentId": "56",
            "value": "河曲县",
            "layer": "3"
        },
        {
            "id": "669",
            "parentId": "56",
            "value": "保德县",
            "layer": "3"
        },
        {
            "id": "670",
            "parentId": "56",
            "value": "偏关县",
            "layer": "3"
        },
        {
            "id": "671",
            "parentId": "56",
            "value": "原平市",
            "layer": "3"
        },
        {
            "id": "672",
            "parentId": "57",
            "value": "尧都区",
            "layer": "3"
        },
        {
            "id": "673",
            "parentId": "57",
            "value": "曲沃县",
            "layer": "3"
        },
        {
            "id": "674",
            "parentId": "57",
            "value": "翼城县",
            "layer": "3"
        },
        {
            "id": "675",
            "parentId": "57",
            "value": "襄汾县",
            "layer": "3"
        },
        {
            "id": "676",
            "parentId": "57",
            "value": "洪洞县",
            "layer": "3"
        },
        {
            "id": "677",
            "parentId": "57",
            "value": "古　县",
            "layer": "3"
        },
        {
            "id": "678",
            "parentId": "57",
            "value": "安泽县",
            "layer": "3"
        },
        {
            "id": "679",
            "parentId": "57",
            "value": "浮山县",
            "layer": "3"
        },
        {
            "id": "680",
            "parentId": "57",
            "value": "吉　县",
            "layer": "3"
        },
        {
            "id": "681",
            "parentId": "57",
            "value": "乡宁县",
            "layer": "3"
        },
        {
            "id": "682",
            "parentId": "57",
            "value": "大宁县",
            "layer": "3"
        },
        {
            "id": "683",
            "parentId": "57",
            "value": "隰　县",
            "layer": "3"
        },
        {
            "id": "684",
            "parentId": "57",
            "value": "永和县",
            "layer": "3"
        },
        {
            "id": "685",
            "parentId": "57",
            "value": "蒲　县",
            "layer": "3"
        },
        {
            "id": "686",
            "parentId": "57",
            "value": "汾西县",
            "layer": "3"
        },
        {
            "id": "687",
            "parentId": "57",
            "value": "侯马市",
            "layer": "3"
        },
        {
            "id": "688",
            "parentId": "57",
            "value": "霍州市",
            "layer": "3"
        },
        {
            "id": "689",
            "parentId": "58",
            "value": "离石区",
            "layer": "3"
        },
        {
            "id": "690",
            "parentId": "58",
            "value": "文水县",
            "layer": "3"
        },
        {
            "id": "691",
            "parentId": "58",
            "value": "交城县",
            "layer": "3"
        },
        {
            "id": "692",
            "parentId": "58",
            "value": "兴　县",
            "layer": "3"
        },
        {
            "id": "693",
            "parentId": "58",
            "value": "临　县",
            "layer": "3"
        },
        {
            "id": "694",
            "parentId": "58",
            "value": "柳林县",
            "layer": "3"
        },
        {
            "id": "695",
            "parentId": "58",
            "value": "石楼县",
            "layer": "3"
        },
        {
            "id": "696",
            "parentId": "58",
            "value": "岚　县",
            "layer": "3"
        },
        {
            "id": "697",
            "parentId": "58",
            "value": "方山县",
            "layer": "3"
        },
        {
            "id": "698",
            "parentId": "58",
            "value": "中阳县",
            "layer": "3"
        },
        {
            "id": "699",
            "parentId": "58",
            "value": "交口县",
            "layer": "3"
        },
        {
            "id": "700",
            "parentId": "58",
            "value": "孝义市",
            "layer": "3"
        },
        {
            "id": "701",
            "parentId": "58",
            "value": "汾阳市",
            "layer": "3"
        },
        {
            "id": "702",
            "parentId": "59",
            "value": "新城区",
            "layer": "3"
        },
        {
            "id": "703",
            "parentId": "59",
            "value": "回民区",
            "layer": "3"
        },
        {
            "id": "704",
            "parentId": "59",
            "value": "玉泉区",
            "layer": "3"
        },
        {
            "id": "705",
            "parentId": "59",
            "value": "赛罕区",
            "layer": "3"
        },
        {
            "id": "706",
            "parentId": "59",
            "value": "土默特左旗",
            "layer": "3"
        },
        {
            "id": "707",
            "parentId": "59",
            "value": "托克托县",
            "layer": "3"
        },
        {
            "id": "708",
            "parentId": "59",
            "value": "和林格尔县",
            "layer": "3"
        },
        {
            "id": "709",
            "parentId": "59",
            "value": "清水河县",
            "layer": "3"
        },
        {
            "id": "710",
            "parentId": "59",
            "value": "武川县",
            "layer": "3"
        },
        {
            "id": "711",
            "parentId": "60",
            "value": "东河区",
            "layer": "3"
        },
        {
            "id": "712",
            "parentId": "60",
            "value": "昆都仑区",
            "layer": "3"
        },
        {
            "id": "713",
            "parentId": "60",
            "value": "青山区",
            "layer": "3"
        },
        {
            "id": "714",
            "parentId": "60",
            "value": "石拐区",
            "layer": "3"
        },
        {
            "id": "715",
            "parentId": "60",
            "value": "白云矿区",
            "layer": "3"
        },
        {
            "id": "716",
            "parentId": "60",
            "value": "九原区",
            "layer": "3"
        },
        {
            "id": "717",
            "parentId": "60",
            "value": "土默特右旗",
            "layer": "3"
        },
        {
            "id": "718",
            "parentId": "60",
            "value": "固阳县",
            "layer": "3"
        },
        {
            "id": "719",
            "parentId": "60",
            "value": "达尔罕茂明安联合旗",
            "layer": "3"
        },
        {
            "id": "720",
            "parentId": "61",
            "value": "海勃湾区",
            "layer": "3"
        },
        {
            "id": "721",
            "parentId": "61",
            "value": "海南区",
            "layer": "3"
        },
        {
            "id": "722",
            "parentId": "61",
            "value": "乌达区",
            "layer": "3"
        },
        {
            "id": "723",
            "parentId": "62",
            "value": "红山区",
            "layer": "3"
        },
        {
            "id": "724",
            "parentId": "62",
            "value": "元宝山区",
            "layer": "3"
        },
        {
            "id": "725",
            "parentId": "62",
            "value": "松山区",
            "layer": "3"
        },
        {
            "id": "726",
            "parentId": "62",
            "value": "阿鲁科尔沁旗",
            "layer": "3"
        },
        {
            "id": "727",
            "parentId": "62",
            "value": "巴林左旗",
            "layer": "3"
        },
        {
            "id": "728",
            "parentId": "62",
            "value": "巴林右旗",
            "layer": "3"
        },
        {
            "id": "729",
            "parentId": "62",
            "value": "林西县",
            "layer": "3"
        },
        {
            "id": "730",
            "parentId": "62",
            "value": "克什克腾旗",
            "layer": "3"
        },
        {
            "id": "731",
            "parentId": "62",
            "value": "翁牛特旗",
            "layer": "3"
        },
        {
            "id": "732",
            "parentId": "62",
            "value": "喀喇沁旗",
            "layer": "3"
        },
        {
            "id": "733",
            "parentId": "62",
            "value": "宁城县",
            "layer": "3"
        },
        {
            "id": "734",
            "parentId": "62",
            "value": "敖汉旗",
            "layer": "3"
        },
        {
            "id": "735",
            "parentId": "63",
            "value": "科尔沁区",
            "layer": "3"
        },
        {
            "id": "736",
            "parentId": "63",
            "value": "科尔沁左翼中旗",
            "layer": "3"
        },
        {
            "id": "737",
            "parentId": "63",
            "value": "科尔沁左翼后旗",
            "layer": "3"
        },
        {
            "id": "738",
            "parentId": "63",
            "value": "开鲁县",
            "layer": "3"
        },
        {
            "id": "739",
            "parentId": "63",
            "value": "库伦旗",
            "layer": "3"
        },
        {
            "id": "740",
            "parentId": "63",
            "value": "奈曼旗",
            "layer": "3"
        },
        {
            "id": "741",
            "parentId": "63",
            "value": "扎鲁特旗",
            "layer": "3"
        },
        {
            "id": "742",
            "parentId": "63",
            "value": "霍林郭勒市",
            "layer": "3"
        },
        {
            "id": "743",
            "parentId": "64",
            "value": "东胜区",
            "layer": "3"
        },
        {
            "id": "744",
            "parentId": "64",
            "value": "达拉特旗",
            "layer": "3"
        },
        {
            "id": "745",
            "parentId": "64",
            "value": "准格尔旗",
            "layer": "3"
        },
        {
            "id": "746",
            "parentId": "64",
            "value": "鄂托克前旗",
            "layer": "3"
        },
        {
            "id": "747",
            "parentId": "64",
            "value": "鄂托克旗",
            "layer": "3"
        },
        {
            "id": "748",
            "parentId": "64",
            "value": "杭锦旗",
            "layer": "3"
        },
        {
            "id": "749",
            "parentId": "64",
            "value": "乌审旗",
            "layer": "3"
        },
        {
            "id": "750",
            "parentId": "64",
            "value": "伊金霍洛旗",
            "layer": "3"
        },
        {
            "id": "751",
            "parentId": "65",
            "value": "海拉尔区",
            "layer": "3"
        },
        {
            "id": "752",
            "parentId": "65",
            "value": "阿荣旗",
            "layer": "3"
        },
        {
            "id": "753",
            "parentId": "65",
            "value": "莫力达瓦达斡尔族自治旗",
            "layer": "3"
        },
        {
            "id": "754",
            "parentId": "65",
            "value": "鄂伦春自治旗",
            "layer": "3"
        },
        {
            "id": "755",
            "parentId": "65",
            "value": "鄂温克族自治旗",
            "layer": "3"
        },
        {
            "id": "756",
            "parentId": "65",
            "value": "陈巴尔虎旗",
            "layer": "3"
        },
        {
            "id": "757",
            "parentId": "65",
            "value": "新巴尔虎左旗",
            "layer": "3"
        },
        {
            "id": "758",
            "parentId": "65",
            "value": "新巴尔虎右旗",
            "layer": "3"
        },
        {
            "id": "759",
            "parentId": "65",
            "value": "满洲里市",
            "layer": "3"
        },
        {
            "id": "760",
            "parentId": "65",
            "value": "牙克石市",
            "layer": "3"
        },
        {
            "id": "761",
            "parentId": "65",
            "value": "扎兰屯市",
            "layer": "3"
        },
        {
            "id": "762",
            "parentId": "65",
            "value": "额尔古纳市",
            "layer": "3"
        },
        {
            "id": "763",
            "parentId": "65",
            "value": "根河市",
            "layer": "3"
        },
        {
            "id": "764",
            "parentId": "66",
            "value": "临河区",
            "layer": "3"
        },
        {
            "id": "765",
            "parentId": "66",
            "value": "五原县",
            "layer": "3"
        },
        {
            "id": "766",
            "parentId": "66",
            "value": "磴口县",
            "layer": "3"
        },
        {
            "id": "767",
            "parentId": "66",
            "value": "乌拉特前旗",
            "layer": "3"
        },
        {
            "id": "768",
            "parentId": "66",
            "value": "乌拉特中旗",
            "layer": "3"
        },
        {
            "id": "769",
            "parentId": "66",
            "value": "乌拉特后旗",
            "layer": "3"
        },
        {
            "id": "770",
            "parentId": "66",
            "value": "杭锦后旗",
            "layer": "3"
        },
        {
            "id": "771",
            "parentId": "67",
            "value": "集宁区",
            "layer": "3"
        },
        {
            "id": "772",
            "parentId": "67",
            "value": "卓资县",
            "layer": "3"
        },
        {
            "id": "773",
            "parentId": "67",
            "value": "化德县",
            "layer": "3"
        },
        {
            "id": "774",
            "parentId": "67",
            "value": "商都县",
            "layer": "3"
        },
        {
            "id": "775",
            "parentId": "67",
            "value": "兴和县",
            "layer": "3"
        },
        {
            "id": "776",
            "parentId": "67",
            "value": "凉城县",
            "layer": "3"
        },
        {
            "id": "777",
            "parentId": "67",
            "value": "察哈尔右翼前旗",
            "layer": "3"
        },
        {
            "id": "778",
            "parentId": "67",
            "value": "察哈尔右翼中旗",
            "layer": "3"
        },
        {
            "id": "779",
            "parentId": "67",
            "value": "察哈尔右翼后旗",
            "layer": "3"
        },
        {
            "id": "780",
            "parentId": "67",
            "value": "四子王旗",
            "layer": "3"
        },
        {
            "id": "781",
            "parentId": "67",
            "value": "丰镇市",
            "layer": "3"
        },
        {
            "id": "782",
            "parentId": "68",
            "value": "乌兰浩特市",
            "layer": "3"
        },
        {
            "id": "783",
            "parentId": "68",
            "value": "阿尔山市",
            "layer": "3"
        },
        {
            "id": "784",
            "parentId": "68",
            "value": "科尔沁右翼前旗",
            "layer": "3"
        },
        {
            "id": "785",
            "parentId": "68",
            "value": "科尔沁右翼中旗",
            "layer": "3"
        },
        {
            "id": "786",
            "parentId": "68",
            "value": "扎赉特旗",
            "layer": "3"
        },
        {
            "id": "787",
            "parentId": "68",
            "value": "突泉县",
            "layer": "3"
        },
        {
            "id": "788",
            "parentId": "69",
            "value": "二连浩特市",
            "layer": "3"
        },
        {
            "id": "789",
            "parentId": "69",
            "value": "锡林浩特市",
            "layer": "3"
        },
        {
            "id": "790",
            "parentId": "69",
            "value": "阿巴嘎旗",
            "layer": "3"
        },
        {
            "id": "791",
            "parentId": "69",
            "value": "苏尼特左旗",
            "layer": "3"
        },
        {
            "id": "792",
            "parentId": "69",
            "value": "苏尼特右旗",
            "layer": "3"
        },
        {
            "id": "793",
            "parentId": "69",
            "value": "东乌珠穆沁旗",
            "layer": "3"
        },
        {
            "id": "794",
            "parentId": "69",
            "value": "西乌珠穆沁旗",
            "layer": "3"
        },
        {
            "id": "795",
            "parentId": "69",
            "value": "太仆寺旗",
            "layer": "3"
        },
        {
            "id": "796",
            "parentId": "69",
            "value": "镶黄旗",
            "layer": "3"
        },
        {
            "id": "797",
            "parentId": "69",
            "value": "正镶白旗",
            "layer": "3"
        },
        {
            "id": "798",
            "parentId": "69",
            "value": "正蓝旗",
            "layer": "3"
        },
        {
            "id": "799",
            "parentId": "69",
            "value": "多伦县",
            "layer": "3"
        },
        {
            "id": "800",
            "parentId": "70",
            "value": "阿拉善左旗",
            "layer": "3"
        },
        {
            "id": "801",
            "parentId": "70",
            "value": "阿拉善右旗",
            "layer": "3"
        },
        {
            "id": "802",
            "parentId": "70",
            "value": "额济纳旗",
            "layer": "3"
        },
        {
            "id": "803",
            "parentId": "71",
            "value": "和平区",
            "layer": "3"
        },
        {
            "id": "804",
            "parentId": "71",
            "value": "沈河区",
            "layer": "3"
        },
        {
            "id": "805",
            "parentId": "71",
            "value": "大东区",
            "layer": "3"
        },
        {
            "id": "806",
            "parentId": "71",
            "value": "皇姑区",
            "layer": "3"
        },
        {
            "id": "807",
            "parentId": "71",
            "value": "铁西区",
            "layer": "3"
        },
        {
            "id": "808",
            "parentId": "71",
            "value": "苏家屯区",
            "layer": "3"
        },
        {
            "id": "809",
            "parentId": "71",
            "value": "东陵区",
            "layer": "3"
        },
        {
            "id": "810",
            "parentId": "71",
            "value": "新城子区",
            "layer": "3"
        },
        {
            "id": "811",
            "parentId": "71",
            "value": "于洪区",
            "layer": "3"
        },
        {
            "id": "812",
            "parentId": "71",
            "value": "辽中县",
            "layer": "3"
        },
        {
            "id": "813",
            "parentId": "71",
            "value": "康平县",
            "layer": "3"
        },
        {
            "id": "814",
            "parentId": "71",
            "value": "法库县",
            "layer": "3"
        },
        {
            "id": "815",
            "parentId": "71",
            "value": "新民市",
            "layer": "3"
        },
        {
            "id": "816",
            "parentId": "72",
            "value": "中山区",
            "layer": "3"
        },
        {
            "id": "817",
            "parentId": "72",
            "value": "西岗区",
            "layer": "3"
        },
        {
            "id": "818",
            "parentId": "72",
            "value": "沙河口区",
            "layer": "3"
        },
        {
            "id": "819",
            "parentId": "72",
            "value": "甘井子区",
            "layer": "3"
        },
        {
            "id": "820",
            "parentId": "72",
            "value": "旅顺口区",
            "layer": "3"
        },
        {
            "id": "821",
            "parentId": "72",
            "value": "金州区",
            "layer": "3"
        },
        {
            "id": "822",
            "parentId": "72",
            "value": "长海县",
            "layer": "3"
        },
        {
            "id": "823",
            "parentId": "72",
            "value": "瓦房店市",
            "layer": "3"
        },
        {
            "id": "824",
            "parentId": "72",
            "value": "普兰店市",
            "layer": "3"
        },
        {
            "id": "825",
            "parentId": "72",
            "value": "庄河市",
            "layer": "3"
        },
        {
            "id": "826",
            "parentId": "73",
            "value": "铁东区",
            "layer": "3"
        },
        {
            "id": "827",
            "parentId": "73",
            "value": "铁西区",
            "layer": "3"
        },
        {
            "id": "828",
            "parentId": "73",
            "value": "立山区",
            "layer": "3"
        },
        {
            "id": "829",
            "parentId": "73",
            "value": "千山区",
            "layer": "3"
        },
        {
            "id": "830",
            "parentId": "73",
            "value": "台安县",
            "layer": "3"
        },
        {
            "id": "831",
            "parentId": "73",
            "value": "岫岩满族自治县",
            "layer": "3"
        },
        {
            "id": "832",
            "parentId": "73",
            "value": "海城市",
            "layer": "3"
        },
        {
            "id": "833",
            "parentId": "74",
            "value": "新抚区",
            "layer": "3"
        },
        {
            "id": "834",
            "parentId": "74",
            "value": "东洲区",
            "layer": "3"
        },
        {
            "id": "835",
            "parentId": "74",
            "value": "望花区",
            "layer": "3"
        },
        {
            "id": "836",
            "parentId": "74",
            "value": "顺城区",
            "layer": "3"
        },
        {
            "id": "837",
            "parentId": "74",
            "value": "抚顺县",
            "layer": "3"
        },
        {
            "id": "838",
            "parentId": "74",
            "value": "新宾满族自治县",
            "layer": "3"
        },
        {
            "id": "839",
            "parentId": "74",
            "value": "清原满族自治县",
            "layer": "3"
        },
        {
            "id": "840",
            "parentId": "75",
            "value": "平山区",
            "layer": "3"
        },
        {
            "id": "841",
            "parentId": "75",
            "value": "溪湖区",
            "layer": "3"
        },
        {
            "id": "842",
            "parentId": "75",
            "value": "明山区",
            "layer": "3"
        },
        {
            "id": "843",
            "parentId": "75",
            "value": "南芬区",
            "layer": "3"
        },
        {
            "id": "844",
            "parentId": "75",
            "value": "本溪满族自治县",
            "layer": "3"
        },
        {
            "id": "845",
            "parentId": "75",
            "value": "桓仁满族自治县",
            "layer": "3"
        },
        {
            "id": "846",
            "parentId": "76",
            "value": "元宝区",
            "layer": "3"
        },
        {
            "id": "847",
            "parentId": "76",
            "value": "振兴区",
            "layer": "3"
        },
        {
            "id": "848",
            "parentId": "76",
            "value": "振安区",
            "layer": "3"
        },
        {
            "id": "849",
            "parentId": "76",
            "value": "宽甸满族自治县",
            "layer": "3"
        },
        {
            "id": "850",
            "parentId": "76",
            "value": "东港市",
            "layer": "3"
        },
        {
            "id": "851",
            "parentId": "76",
            "value": "凤城市",
            "layer": "3"
        },
        {
            "id": "852",
            "parentId": "77",
            "value": "古塔区",
            "layer": "3"
        },
        {
            "id": "853",
            "parentId": "77",
            "value": "凌河区",
            "layer": "3"
        },
        {
            "id": "854",
            "parentId": "77",
            "value": "太和区",
            "layer": "3"
        },
        {
            "id": "855",
            "parentId": "77",
            "value": "黑山县",
            "layer": "3"
        },
        {
            "id": "856",
            "parentId": "77",
            "value": "义　县",
            "layer": "3"
        },
        {
            "id": "857",
            "parentId": "77",
            "value": "凌海市",
            "layer": "3"
        },
        {
            "id": "858",
            "parentId": "77",
            "value": "北宁市",
            "layer": "3"
        },
        {
            "id": "859",
            "parentId": "78",
            "value": "站前区",
            "layer": "3"
        },
        {
            "id": "860",
            "parentId": "78",
            "value": "西市区",
            "layer": "3"
        },
        {
            "id": "861",
            "parentId": "78",
            "value": "鲅鱼圈区",
            "layer": "3"
        },
        {
            "id": "862",
            "parentId": "78",
            "value": "老边区",
            "layer": "3"
        },
        {
            "id": "863",
            "parentId": "78",
            "value": "盖州市",
            "layer": "3"
        },
        {
            "id": "864",
            "parentId": "78",
            "value": "大石桥市",
            "layer": "3"
        },
        {
            "id": "865",
            "parentId": "79",
            "value": "海州区",
            "layer": "3"
        },
        {
            "id": "866",
            "parentId": "79",
            "value": "新邱区",
            "layer": "3"
        },
        {
            "id": "867",
            "parentId": "79",
            "value": "太平区",
            "layer": "3"
        },
        {
            "id": "868",
            "parentId": "79",
            "value": "清河门区",
            "layer": "3"
        },
        {
            "id": "869",
            "parentId": "79",
            "value": "细河区",
            "layer": "3"
        },
        {
            "id": "870",
            "parentId": "79",
            "value": "阜新蒙古族自治县",
            "layer": "3"
        },
        {
            "id": "871",
            "parentId": "79",
            "value": "彰武县",
            "layer": "3"
        },
        {
            "id": "872",
            "parentId": "80",
            "value": "白塔区",
            "layer": "3"
        },
        {
            "id": "873",
            "parentId": "80",
            "value": "文圣区",
            "layer": "3"
        },
        {
            "id": "874",
            "parentId": "80",
            "value": "宏伟区",
            "layer": "3"
        },
        {
            "id": "875",
            "parentId": "80",
            "value": "弓长岭区",
            "layer": "3"
        },
        {
            "id": "876",
            "parentId": "80",
            "value": "太子河区",
            "layer": "3"
        },
        {
            "id": "877",
            "parentId": "80",
            "value": "辽阳县",
            "layer": "3"
        },
        {
            "id": "878",
            "parentId": "80",
            "value": "灯塔市",
            "layer": "3"
        },
        {
            "id": "879",
            "parentId": "81",
            "value": "双台子区",
            "layer": "3"
        },
        {
            "id": "880",
            "parentId": "81",
            "value": "兴隆台区",
            "layer": "3"
        },
        {
            "id": "881",
            "parentId": "81",
            "value": "大洼县",
            "layer": "3"
        },
        {
            "id": "882",
            "parentId": "81",
            "value": "盘山县",
            "layer": "3"
        },
        {
            "id": "883",
            "parentId": "82",
            "value": "银州区",
            "layer": "3"
        },
        {
            "id": "884",
            "parentId": "82",
            "value": "清河区",
            "layer": "3"
        },
        {
            "id": "885",
            "parentId": "82",
            "value": "铁岭县",
            "layer": "3"
        },
        {
            "id": "886",
            "parentId": "82",
            "value": "西丰县",
            "layer": "3"
        },
        {
            "id": "887",
            "parentId": "82",
            "value": "昌图县",
            "layer": "3"
        },
        {
            "id": "888",
            "parentId": "82",
            "value": "调兵山市",
            "layer": "3"
        },
        {
            "id": "889",
            "parentId": "82",
            "value": "开原市",
            "layer": "3"
        },
        {
            "id": "890",
            "parentId": "83",
            "value": "双塔区",
            "layer": "3"
        },
        {
            "id": "891",
            "parentId": "83",
            "value": "龙城区",
            "layer": "3"
        },
        {
            "id": "892",
            "parentId": "83",
            "value": "朝阳县",
            "layer": "3"
        },
        {
            "id": "893",
            "parentId": "83",
            "value": "建平县",
            "layer": "3"
        },
        {
            "id": "894",
            "parentId": "83",
            "value": "喀喇沁左翼蒙古族自治县",
            "layer": "3"
        },
        {
            "id": "895",
            "parentId": "83",
            "value": "北票市",
            "layer": "3"
        },
        {
            "id": "896",
            "parentId": "83",
            "value": "凌源市",
            "layer": "3"
        },
        {
            "id": "897",
            "parentId": "84",
            "value": "连山区",
            "layer": "3"
        },
        {
            "id": "898",
            "parentId": "84",
            "value": "龙港区",
            "layer": "3"
        },
        {
            "id": "899",
            "parentId": "84",
            "value": "南票区",
            "layer": "3"
        },
        {
            "id": "900",
            "parentId": "84",
            "value": "绥中县",
            "layer": "3"
        },
        {
            "id": "901",
            "parentId": "84",
            "value": "建昌县",
            "layer": "3"
        },
        {
            "id": "902",
            "parentId": "84",
            "value": "兴城市",
            "layer": "3"
        },
        {
            "id": "903",
            "parentId": "85",
            "value": "南关区",
            "layer": "3"
        },
        {
            "id": "904",
            "parentId": "85",
            "value": "宽城区",
            "layer": "3"
        },
        {
            "id": "905",
            "parentId": "85",
            "value": "朝阳区",
            "layer": "3"
        },
        {
            "id": "906",
            "parentId": "85",
            "value": "二道区",
            "layer": "3"
        },
        {
            "id": "907",
            "parentId": "85",
            "value": "绿园区",
            "layer": "3"
        },
        {
            "id": "908",
            "parentId": "85",
            "value": "双阳区",
            "layer": "3"
        },
        {
            "id": "909",
            "parentId": "85",
            "value": "农安县",
            "layer": "3"
        },
        {
            "id": "910",
            "parentId": "85",
            "value": "九台市",
            "layer": "3"
        },
        {
            "id": "911",
            "parentId": "85",
            "value": "榆树市",
            "layer": "3"
        },
        {
            "id": "912",
            "parentId": "85",
            "value": "德惠市",
            "layer": "3"
        },
        {
            "id": "913",
            "parentId": "86",
            "value": "昌邑区",
            "layer": "3"
        },
        {
            "id": "914",
            "parentId": "86",
            "value": "龙潭区",
            "layer": "3"
        },
        {
            "id": "915",
            "parentId": "86",
            "value": "船营区",
            "layer": "3"
        },
        {
            "id": "916",
            "parentId": "86",
            "value": "丰满区",
            "layer": "3"
        },
        {
            "id": "917",
            "parentId": "86",
            "value": "永吉县",
            "layer": "3"
        },
        {
            "id": "918",
            "parentId": "86",
            "value": "蛟河市",
            "layer": "3"
        },
        {
            "id": "919",
            "parentId": "86",
            "value": "桦甸市",
            "layer": "3"
        },
        {
            "id": "920",
            "parentId": "86",
            "value": "舒兰市",
            "layer": "3"
        },
        {
            "id": "921",
            "parentId": "86",
            "value": "磐石市",
            "layer": "3"
        },
        {
            "id": "922",
            "parentId": "87",
            "value": "铁西区",
            "layer": "3"
        },
        {
            "id": "923",
            "parentId": "87",
            "value": "铁东区",
            "layer": "3"
        },
        {
            "id": "924",
            "parentId": "87",
            "value": "梨树县",
            "layer": "3"
        },
        {
            "id": "925",
            "parentId": "87",
            "value": "伊通满族自治县",
            "layer": "3"
        },
        {
            "id": "926",
            "parentId": "87",
            "value": "公主岭市",
            "layer": "3"
        },
        {
            "id": "927",
            "parentId": "87",
            "value": "双辽市",
            "layer": "3"
        },
        {
            "id": "928",
            "parentId": "88",
            "value": "龙山区",
            "layer": "3"
        },
        {
            "id": "929",
            "parentId": "88",
            "value": "西安区",
            "layer": "3"
        },
        {
            "id": "930",
            "parentId": "88",
            "value": "东丰县",
            "layer": "3"
        },
        {
            "id": "931",
            "parentId": "88",
            "value": "东辽县",
            "layer": "3"
        },
        {
            "id": "932",
            "parentId": "89",
            "value": "东昌区",
            "layer": "3"
        },
        {
            "id": "933",
            "parentId": "89",
            "value": "二道江区",
            "layer": "3"
        },
        {
            "id": "934",
            "parentId": "89",
            "value": "通化县",
            "layer": "3"
        },
        {
            "id": "935",
            "parentId": "89",
            "value": "辉南县",
            "layer": "3"
        },
        {
            "id": "936",
            "parentId": "89",
            "value": "柳河县",
            "layer": "3"
        },
        {
            "id": "937",
            "parentId": "89",
            "value": "梅河口市",
            "layer": "3"
        },
        {
            "id": "938",
            "parentId": "89",
            "value": "集安市",
            "layer": "3"
        },
        {
            "id": "939",
            "parentId": "90",
            "value": "八道江区",
            "layer": "3"
        },
        {
            "id": "940",
            "parentId": "90",
            "value": "抚松县",
            "layer": "3"
        },
        {
            "id": "941",
            "parentId": "90",
            "value": "靖宇县",
            "layer": "3"
        },
        {
            "id": "942",
            "parentId": "90",
            "value": "长白朝鲜族自治县",
            "layer": "3"
        },
        {
            "id": "943",
            "parentId": "90",
            "value": "江源县",
            "layer": "3"
        },
        {
            "id": "944",
            "parentId": "90",
            "value": "临江市",
            "layer": "3"
        },
        {
            "id": "945",
            "parentId": "91",
            "value": "宁江区",
            "layer": "3"
        },
        {
            "id": "946",
            "parentId": "91",
            "value": "前郭尔罗斯蒙古族自治县",
            "layer": "3"
        },
        {
            "id": "947",
            "parentId": "91",
            "value": "长岭县",
            "layer": "3"
        },
        {
            "id": "948",
            "parentId": "91",
            "value": "乾安县",
            "layer": "3"
        },
        {
            "id": "949",
            "parentId": "91",
            "value": "扶余县",
            "layer": "3"
        },
        {
            "id": "950",
            "parentId": "92",
            "value": "洮北区",
            "layer": "3"
        },
        {
            "id": "951",
            "parentId": "92",
            "value": "镇赉县",
            "layer": "3"
        },
        {
            "id": "952",
            "parentId": "92",
            "value": "通榆县",
            "layer": "3"
        },
        {
            "id": "953",
            "parentId": "92",
            "value": "洮南市",
            "layer": "3"
        },
        {
            "id": "954",
            "parentId": "92",
            "value": "大安市",
            "layer": "3"
        },
        {
            "id": "955",
            "parentId": "93",
            "value": "延吉市",
            "layer": "3"
        },
        {
            "id": "956",
            "parentId": "93",
            "value": "图们市",
            "layer": "3"
        },
        {
            "id": "957",
            "parentId": "93",
            "value": "敦化市",
            "layer": "3"
        },
        {
            "id": "958",
            "parentId": "93",
            "value": "珲春市",
            "layer": "3"
        },
        {
            "id": "959",
            "parentId": "93",
            "value": "龙井市",
            "layer": "3"
        },
        {
            "id": "960",
            "parentId": "93",
            "value": "和龙市",
            "layer": "3"
        },
        {
            "id": "961",
            "parentId": "93",
            "value": "汪清县",
            "layer": "3"
        },
        {
            "id": "962",
            "parentId": "93",
            "value": "安图县",
            "layer": "3"
        },
        {
            "id": "963",
            "parentId": "94",
            "value": "道里区",
            "layer": "3"
        },
        {
            "id": "964",
            "parentId": "94",
            "value": "南岗区",
            "layer": "3"
        },
        {
            "id": "965",
            "parentId": "94",
            "value": "道外区",
            "layer": "3"
        },
        {
            "id": "966",
            "parentId": "94",
            "value": "香坊区",
            "layer": "3"
        },
        {
            "id": "967",
            "parentId": "94",
            "value": "动力区",
            "layer": "3"
        },
        {
            "id": "968",
            "parentId": "94",
            "value": "平房区",
            "layer": "3"
        },
        {
            "id": "969",
            "parentId": "94",
            "value": "松北区",
            "layer": "3"
        },
        {
            "id": "970",
            "parentId": "94",
            "value": "呼兰区",
            "layer": "3"
        },
        {
            "id": "971",
            "parentId": "94",
            "value": "依兰县",
            "layer": "3"
        },
        {
            "id": "972",
            "parentId": "94",
            "value": "方正县",
            "layer": "3"
        },
        {
            "id": "973",
            "parentId": "94",
            "value": "宾　县",
            "layer": "3"
        },
        {
            "id": "974",
            "parentId": "94",
            "value": "巴彦县",
            "layer": "3"
        },
        {
            "id": "975",
            "parentId": "94",
            "value": "木兰县",
            "layer": "3"
        },
        {
            "id": "976",
            "parentId": "94",
            "value": "通河县",
            "layer": "3"
        },
        {
            "id": "977",
            "parentId": "94",
            "value": "延寿县",
            "layer": "3"
        },
        {
            "id": "978",
            "parentId": "94",
            "value": "阿城市",
            "layer": "3"
        },
        {
            "id": "979",
            "parentId": "94",
            "value": "双城市",
            "layer": "3"
        },
        {
            "id": "980",
            "parentId": "94",
            "value": "尚志市",
            "layer": "3"
        },
        {
            "id": "981",
            "parentId": "94",
            "value": "五常市",
            "layer": "3"
        },
        {
            "id": "982",
            "parentId": "95",
            "value": "龙沙区",
            "layer": "3"
        },
        {
            "id": "983",
            "parentId": "95",
            "value": "建华区",
            "layer": "3"
        },
        {
            "id": "984",
            "parentId": "95",
            "value": "铁锋区",
            "layer": "3"
        },
        {
            "id": "985",
            "parentId": "95",
            "value": "昂昂溪区",
            "layer": "3"
        },
        {
            "id": "986",
            "parentId": "95",
            "value": "富拉尔基区",
            "layer": "3"
        },
        {
            "id": "987",
            "parentId": "95",
            "value": "碾子山区",
            "layer": "3"
        },
        {
            "id": "988",
            "parentId": "95",
            "value": "梅里斯达斡尔族区",
            "layer": "3"
        },
        {
            "id": "989",
            "parentId": "95",
            "value": "龙江县",
            "layer": "3"
        },
        {
            "id": "990",
            "parentId": "95",
            "value": "依安县",
            "layer": "3"
        },
        {
            "id": "991",
            "parentId": "95",
            "value": "泰来县",
            "layer": "3"
        },
        {
            "id": "992",
            "parentId": "95",
            "value": "甘南县",
            "layer": "3"
        },
        {
            "id": "993",
            "parentId": "95",
            "value": "富裕县",
            "layer": "3"
        },
        {
            "id": "994",
            "parentId": "95",
            "value": "克山县",
            "layer": "3"
        },
        {
            "id": "995",
            "parentId": "95",
            "value": "克东县",
            "layer": "3"
        },
        {
            "id": "996",
            "parentId": "95",
            "value": "拜泉县",
            "layer": "3"
        },
        {
            "id": "997",
            "parentId": "95",
            "value": "讷河市",
            "layer": "3"
        },
        {
            "id": "998",
            "parentId": "96",
            "value": "鸡冠区",
            "layer": "3"
        },
        {
            "id": "999",
            "parentId": "96",
            "value": "恒山区",
            "layer": "3"
        },
        {
            "id": "1000",
            "parentId": "96",
            "value": "滴道区",
            "layer": "3"
        },
        {
            "id": "1001",
            "parentId": "96",
            "value": "梨树区",
            "layer": "3"
        },
        {
            "id": "1002",
            "parentId": "96",
            "value": "城子河区",
            "layer": "3"
        },
        {
            "id": "1003",
            "parentId": "96",
            "value": "麻山区",
            "layer": "3"
        },
        {
            "id": "1004",
            "parentId": "96",
            "value": "鸡东县",
            "layer": "3"
        },
        {
            "id": "1005",
            "parentId": "96",
            "value": "虎林市",
            "layer": "3"
        },
        {
            "id": "1006",
            "parentId": "96",
            "value": "密山市",
            "layer": "3"
        },
        {
            "id": "1007",
            "parentId": "97",
            "value": "向阳区",
            "layer": "3"
        },
        {
            "id": "1008",
            "parentId": "97",
            "value": "工农区",
            "layer": "3"
        },
        {
            "id": "1009",
            "parentId": "97",
            "value": "南山区",
            "layer": "3"
        },
        {
            "id": "1010",
            "parentId": "97",
            "value": "兴安区",
            "layer": "3"
        },
        {
            "id": "1011",
            "parentId": "97",
            "value": "东山区",
            "layer": "3"
        },
        {
            "id": "1012",
            "parentId": "97",
            "value": "兴山区",
            "layer": "3"
        },
        {
            "id": "1013",
            "parentId": "97",
            "value": "萝北县",
            "layer": "3"
        },
        {
            "id": "1014",
            "parentId": "97",
            "value": "绥滨县",
            "layer": "3"
        },
        {
            "id": "1015",
            "parentId": "98",
            "value": "尖山区",
            "layer": "3"
        },
        {
            "id": "1016",
            "parentId": "98",
            "value": "岭东区",
            "layer": "3"
        },
        {
            "id": "1017",
            "parentId": "98",
            "value": "四方台区",
            "layer": "3"
        },
        {
            "id": "1018",
            "parentId": "98",
            "value": "宝山区",
            "layer": "3"
        },
        {
            "id": "1019",
            "parentId": "98",
            "value": "集贤县",
            "layer": "3"
        },
        {
            "id": "1020",
            "parentId": "98",
            "value": "友谊县",
            "layer": "3"
        },
        {
            "id": "1021",
            "parentId": "98",
            "value": "宝清县",
            "layer": "3"
        },
        {
            "id": "1022",
            "parentId": "98",
            "value": "饶河县",
            "layer": "3"
        },
        {
            "id": "1023",
            "parentId": "99",
            "value": "萨尔图区",
            "layer": "3"
        },
        {
            "id": "1024",
            "parentId": "99",
            "value": "龙凤区",
            "layer": "3"
        },
        {
            "id": "1025",
            "parentId": "99",
            "value": "让胡路区",
            "layer": "3"
        },
        {
            "id": "1026",
            "parentId": "99",
            "value": "红岗区",
            "layer": "3"
        },
        {
            "id": "1027",
            "parentId": "99",
            "value": "大同区",
            "layer": "3"
        },
        {
            "id": "1028",
            "parentId": "99",
            "value": "肇州县",
            "layer": "3"
        },
        {
            "id": "1029",
            "parentId": "99",
            "value": "肇源县",
            "layer": "3"
        },
        {
            "id": "1030",
            "parentId": "99",
            "value": "林甸县",
            "layer": "3"
        },
        {
            "id": "1031",
            "parentId": "99",
            "value": "杜尔伯特蒙古族自治县",
            "layer": "3"
        },
        {
            "id": "1032",
            "parentId": "100",
            "value": "伊春区",
            "layer": "3"
        },
        {
            "id": "1033",
            "parentId": "100",
            "value": "南岔区",
            "layer": "3"
        },
        {
            "id": "1034",
            "parentId": "100",
            "value": "友好区",
            "layer": "3"
        },
        {
            "id": "1035",
            "parentId": "100",
            "value": "西林区",
            "layer": "3"
        },
        {
            "id": "1036",
            "parentId": "100",
            "value": "翠峦区",
            "layer": "3"
        },
        {
            "id": "1037",
            "parentId": "100",
            "value": "新青区",
            "layer": "3"
        },
        {
            "id": "1038",
            "parentId": "100",
            "value": "美溪区",
            "layer": "3"
        },
        {
            "id": "1039",
            "parentId": "100",
            "value": "金山屯区",
            "layer": "3"
        },
        {
            "id": "1040",
            "parentId": "100",
            "value": "五营区",
            "layer": "3"
        },
        {
            "id": "1041",
            "parentId": "100",
            "value": "乌马河区",
            "layer": "3"
        },
        {
            "id": "1042",
            "parentId": "100",
            "value": "汤旺河区",
            "layer": "3"
        },
        {
            "id": "1043",
            "parentId": "100",
            "value": "带岭区",
            "layer": "3"
        },
        {
            "id": "1044",
            "parentId": "100",
            "value": "乌伊岭区",
            "layer": "3"
        },
        {
            "id": "1045",
            "parentId": "100",
            "value": "红星区",
            "layer": "3"
        },
        {
            "id": "1046",
            "parentId": "100",
            "value": "上甘岭区",
            "layer": "3"
        },
        {
            "id": "1047",
            "parentId": "100",
            "value": "嘉荫县",
            "layer": "3"
        },
        {
            "id": "1048",
            "parentId": "100",
            "value": "铁力市",
            "layer": "3"
        },
        {
            "id": "1049",
            "parentId": "101",
            "value": "永红区",
            "layer": "3"
        },
        {
            "id": "1050",
            "parentId": "101",
            "value": "向阳区",
            "layer": "3"
        },
        {
            "id": "1051",
            "parentId": "101",
            "value": "前进区",
            "layer": "3"
        },
        {
            "id": "1052",
            "parentId": "101",
            "value": "东风区",
            "layer": "3"
        },
        {
            "id": "1053",
            "parentId": "101",
            "value": "郊　区",
            "layer": "3"
        },
        {
            "id": "1054",
            "parentId": "101",
            "value": "桦南县",
            "layer": "3"
        },
        {
            "id": "1055",
            "parentId": "101",
            "value": "桦川县",
            "layer": "3"
        },
        {
            "id": "1056",
            "parentId": "101",
            "value": "汤原县",
            "layer": "3"
        },
        {
            "id": "1057",
            "parentId": "101",
            "value": "抚远县",
            "layer": "3"
        },
        {
            "id": "1058",
            "parentId": "101",
            "value": "同江市",
            "layer": "3"
        },
        {
            "id": "1059",
            "parentId": "101",
            "value": "富锦市",
            "layer": "3"
        },
        {
            "id": "1060",
            "parentId": "102",
            "value": "新兴区",
            "layer": "3"
        },
        {
            "id": "1061",
            "parentId": "102",
            "value": "桃山区",
            "layer": "3"
        },
        {
            "id": "1062",
            "parentId": "102",
            "value": "茄子河区",
            "layer": "3"
        },
        {
            "id": "1063",
            "parentId": "102",
            "value": "勃利县",
            "layer": "3"
        },
        {
            "id": "1064",
            "parentId": "103",
            "value": "东安区",
            "layer": "3"
        },
        {
            "id": "1065",
            "parentId": "103",
            "value": "阳明区",
            "layer": "3"
        },
        {
            "id": "1066",
            "parentId": "103",
            "value": "爱民区",
            "layer": "3"
        },
        {
            "id": "1067",
            "parentId": "103",
            "value": "西安区",
            "layer": "3"
        },
        {
            "id": "1068",
            "parentId": "103",
            "value": "东宁县",
            "layer": "3"
        },
        {
            "id": "1069",
            "parentId": "103",
            "value": "林口县",
            "layer": "3"
        },
        {
            "id": "1070",
            "parentId": "103",
            "value": "绥芬河市",
            "layer": "3"
        },
        {
            "id": "1071",
            "parentId": "103",
            "value": "海林市",
            "layer": "3"
        },
        {
            "id": "1072",
            "parentId": "103",
            "value": "宁安市",
            "layer": "3"
        },
        {
            "id": "1073",
            "parentId": "103",
            "value": "穆棱市",
            "layer": "3"
        },
        {
            "id": "1074",
            "parentId": "104",
            "value": "爱辉区",
            "layer": "3"
        },
        {
            "id": "1075",
            "parentId": "104",
            "value": "嫩江县",
            "layer": "3"
        },
        {
            "id": "1076",
            "parentId": "104",
            "value": "逊克县",
            "layer": "3"
        },
        {
            "id": "1077",
            "parentId": "104",
            "value": "孙吴县",
            "layer": "3"
        },
        {
            "id": "1078",
            "parentId": "104",
            "value": "北安市",
            "layer": "3"
        },
        {
            "id": "1079",
            "parentId": "104",
            "value": "五大连池市",
            "layer": "3"
        },
        {
            "id": "1080",
            "parentId": "105",
            "value": "北林区",
            "layer": "3"
        },
        {
            "id": "1081",
            "parentId": "105",
            "value": "望奎县",
            "layer": "3"
        },
        {
            "id": "1082",
            "parentId": "105",
            "value": "兰西县",
            "layer": "3"
        },
        {
            "id": "1083",
            "parentId": "105",
            "value": "青冈县",
            "layer": "3"
        },
        {
            "id": "1084",
            "parentId": "105",
            "value": "庆安县",
            "layer": "3"
        },
        {
            "id": "1085",
            "parentId": "105",
            "value": "明水县",
            "layer": "3"
        },
        {
            "id": "1086",
            "parentId": "105",
            "value": "绥棱县",
            "layer": "3"
        },
        {
            "id": "1087",
            "parentId": "105",
            "value": "安达市",
            "layer": "3"
        },
        {
            "id": "1088",
            "parentId": "105",
            "value": "肇东市",
            "layer": "3"
        },
        {
            "id": "1089",
            "parentId": "105",
            "value": "海伦市",
            "layer": "3"
        },
        {
            "id": "1090",
            "parentId": "106",
            "value": "呼玛县",
            "layer": "3"
        },
        {
            "id": "1091",
            "parentId": "106",
            "value": "塔河县",
            "layer": "3"
        },
        {
            "id": "1092",
            "parentId": "106",
            "value": "漠河县",
            "layer": "3"
        },
        {
            "id": "1093",
            "parentId": "107",
            "value": "黄浦区",
            "layer": "3"
        },
        {
            "id": "1094",
            "parentId": "107",
            "value": "卢湾区",
            "layer": "3"
        },
        {
            "id": "1095",
            "parentId": "107",
            "value": "徐汇区",
            "layer": "3"
        },
        {
            "id": "1096",
            "parentId": "107",
            "value": "长宁区",
            "layer": "3"
        },
        {
            "id": "1097",
            "parentId": "107",
            "value": "静安区",
            "layer": "3"
        },
        {
            "id": "1098",
            "parentId": "107",
            "value": "普陀区",
            "layer": "3"
        },
        {
            "id": "1099",
            "parentId": "107",
            "value": "闸北区",
            "layer": "3"
        },
        {
            "id": "1100",
            "parentId": "107",
            "value": "虹口区",
            "layer": "3"
        },
        {
            "id": "1101",
            "parentId": "107",
            "value": "杨浦区",
            "layer": "3"
        },
        {
            "id": "1102",
            "parentId": "107",
            "value": "闵行区",
            "layer": "3"
        },
        {
            "id": "1103",
            "parentId": "107",
            "value": "宝山区",
            "layer": "3"
        },
        {
            "id": "1104",
            "parentId": "107",
            "value": "嘉定区",
            "layer": "3"
        },
        {
            "id": "1105",
            "parentId": "107",
            "value": "浦东新区",
            "layer": "3"
        },
        {
            "id": "1106",
            "parentId": "107",
            "value": "金山区",
            "layer": "3"
        },
        {
            "id": "1107",
            "parentId": "107",
            "value": "松江区",
            "layer": "3"
        },
        {
            "id": "1108",
            "parentId": "107",
            "value": "青浦区",
            "layer": "3"
        },
        {
            "id": "1109",
            "parentId": "107",
            "value": "南汇区",
            "layer": "3"
        },
        {
            "id": "1110",
            "parentId": "107",
            "value": "奉贤区",
            "layer": "3"
        },
        {
            "id": "1111",
            "parentId": "107",
            "value": "崇明县",
            "layer": "3"
        },
        {
            "id": "1112",
            "parentId": "108",
            "value": "玄武区",
            "layer": "3"
        },
        {
            "id": "1113",
            "parentId": "108",
            "value": "白下区",
            "layer": "3"
        },
        {
            "id": "1114",
            "parentId": "108",
            "value": "秦淮区",
            "layer": "3"
        },
        {
            "id": "1115",
            "parentId": "108",
            "value": "建邺区",
            "layer": "3"
        },
        {
            "id": "1116",
            "parentId": "108",
            "value": "鼓楼区",
            "layer": "3"
        },
        {
            "id": "1117",
            "parentId": "108",
            "value": "下关区",
            "layer": "3"
        },
        {
            "id": "1118",
            "parentId": "108",
            "value": "浦口区",
            "layer": "3"
        },
        {
            "id": "1119",
            "parentId": "108",
            "value": "栖霞区",
            "layer": "3"
        },
        {
            "id": "1120",
            "parentId": "108",
            "value": "雨花台区",
            "layer": "3"
        },
        {
            "id": "1121",
            "parentId": "108",
            "value": "江宁区",
            "layer": "3"
        },
        {
            "id": "1122",
            "parentId": "108",
            "value": "六合区",
            "layer": "3"
        },
        {
            "id": "1123",
            "parentId": "108",
            "value": "溧水县",
            "layer": "3"
        },
        {
            "id": "1124",
            "parentId": "108",
            "value": "高淳县",
            "layer": "3"
        },
        {
            "id": "1125",
            "parentId": "109",
            "value": "崇安区",
            "layer": "3"
        },
        {
            "id": "1126",
            "parentId": "109",
            "value": "南长区",
            "layer": "3"
        },
        {
            "id": "1127",
            "parentId": "109",
            "value": "北塘区",
            "layer": "3"
        },
        {
            "id": "1128",
            "parentId": "109",
            "value": "锡山区",
            "layer": "3"
        },
        {
            "id": "1129",
            "parentId": "109",
            "value": "惠山区",
            "layer": "3"
        },
        {
            "id": "1130",
            "parentId": "109",
            "value": "滨湖区",
            "layer": "3"
        },
        {
            "id": "1131",
            "parentId": "109",
            "value": "江阴市",
            "layer": "3"
        },
        {
            "id": "1132",
            "parentId": "109",
            "value": "宜兴市",
            "layer": "3"
        },
        {
            "id": "1133",
            "parentId": "110",
            "value": "鼓楼区",
            "layer": "3"
        },
        {
            "id": "1134",
            "parentId": "110",
            "value": "云龙区",
            "layer": "3"
        },
        {
            "id": "1135",
            "parentId": "110",
            "value": "九里区",
            "layer": "3"
        },
        {
            "id": "1136",
            "parentId": "110",
            "value": "贾汪区",
            "layer": "3"
        },
        {
            "id": "1137",
            "parentId": "110",
            "value": "泉山区",
            "layer": "3"
        },
        {
            "id": "1138",
            "parentId": "110",
            "value": "丰　县",
            "layer": "3"
        },
        {
            "id": "1139",
            "parentId": "110",
            "value": "沛　县",
            "layer": "3"
        },
        {
            "id": "1140",
            "parentId": "110",
            "value": "铜山县",
            "layer": "3"
        },
        {
            "id": "1141",
            "parentId": "110",
            "value": "睢宁县",
            "layer": "3"
        },
        {
            "id": "1142",
            "parentId": "110",
            "value": "新沂市",
            "layer": "3"
        },
        {
            "id": "1143",
            "parentId": "110",
            "value": "邳州市",
            "layer": "3"
        },
        {
            "id": "1144",
            "parentId": "111",
            "value": "天宁区",
            "layer": "3"
        },
        {
            "id": "1145",
            "parentId": "111",
            "value": "钟楼区",
            "layer": "3"
        },
        {
            "id": "1146",
            "parentId": "111",
            "value": "戚墅堰区",
            "layer": "3"
        },
        {
            "id": "1147",
            "parentId": "111",
            "value": "新北区",
            "layer": "3"
        },
        {
            "id": "1148",
            "parentId": "111",
            "value": "武进区",
            "layer": "3"
        },
        {
            "id": "1149",
            "parentId": "111",
            "value": "溧阳市",
            "layer": "3"
        },
        {
            "id": "1150",
            "parentId": "111",
            "value": "金坛市",
            "layer": "3"
        },
        {
            "id": "1151",
            "parentId": "112",
            "value": "沧浪区",
            "layer": "3"
        },
        {
            "id": "1152",
            "parentId": "112",
            "value": "平江区",
            "layer": "3"
        },
        {
            "id": "1153",
            "parentId": "112",
            "value": "金阊区",
            "layer": "3"
        },
        {
            "id": "1154",
            "parentId": "112",
            "value": "虎丘区",
            "layer": "3"
        },
        {
            "id": "1155",
            "parentId": "112",
            "value": "吴中区",
            "layer": "3"
        },
        {
            "id": "1156",
            "parentId": "112",
            "value": "相城区",
            "layer": "3"
        },
        {
            "id": "1157",
            "parentId": "112",
            "value": "常熟市",
            "layer": "3"
        },
        {
            "id": "1158",
            "parentId": "112",
            "value": "张家港市",
            "layer": "3"
        },
        {
            "id": "1159",
            "parentId": "112",
            "value": "昆山市",
            "layer": "3"
        },
        {
            "id": "1160",
            "parentId": "112",
            "value": "吴江市",
            "layer": "3"
        },
        {
            "id": "1161",
            "parentId": "112",
            "value": "太仓市",
            "layer": "3"
        },
        {
            "id": "1162",
            "parentId": "113",
            "value": "崇川区",
            "layer": "3"
        },
        {
            "id": "1163",
            "parentId": "113",
            "value": "港闸区",
            "layer": "3"
        },
        {
            "id": "1164",
            "parentId": "113",
            "value": "海安县",
            "layer": "3"
        },
        {
            "id": "1165",
            "parentId": "113",
            "value": "如东县",
            "layer": "3"
        },
        {
            "id": "1166",
            "parentId": "113",
            "value": "启东市",
            "layer": "3"
        },
        {
            "id": "1167",
            "parentId": "113",
            "value": "如皋市",
            "layer": "3"
        },
        {
            "id": "1168",
            "parentId": "113",
            "value": "通州市",
            "layer": "3"
        },
        {
            "id": "1169",
            "parentId": "113",
            "value": "海门市",
            "layer": "3"
        },
        {
            "id": "1170",
            "parentId": "114",
            "value": "连云区",
            "layer": "3"
        },
        {
            "id": "1171",
            "parentId": "114",
            "value": "新浦区",
            "layer": "3"
        },
        {
            "id": "1172",
            "parentId": "114",
            "value": "海州区",
            "layer": "3"
        },
        {
            "id": "1173",
            "parentId": "114",
            "value": "赣榆县",
            "layer": "3"
        },
        {
            "id": "1174",
            "parentId": "114",
            "value": "东海县",
            "layer": "3"
        },
        {
            "id": "1175",
            "parentId": "114",
            "value": "灌云县",
            "layer": "3"
        },
        {
            "id": "1176",
            "parentId": "114",
            "value": "灌南县",
            "layer": "3"
        },
        {
            "id": "1177",
            "parentId": "115",
            "value": "清河区",
            "layer": "3"
        },
        {
            "id": "1178",
            "parentId": "115",
            "value": "楚州区",
            "layer": "3"
        },
        {
            "id": "1179",
            "parentId": "115",
            "value": "淮阴区",
            "layer": "3"
        },
        {
            "id": "1180",
            "parentId": "115",
            "value": "清浦区",
            "layer": "3"
        },
        {
            "id": "1181",
            "parentId": "115",
            "value": "涟水县",
            "layer": "3"
        },
        {
            "id": "1182",
            "parentId": "115",
            "value": "洪泽县",
            "layer": "3"
        },
        {
            "id": "1183",
            "parentId": "115",
            "value": "盱眙县",
            "layer": "3"
        },
        {
            "id": "1184",
            "parentId": "115",
            "value": "金湖县",
            "layer": "3"
        },
        {
            "id": "1185",
            "parentId": "116",
            "value": "亭湖区",
            "layer": "3"
        },
        {
            "id": "1186",
            "parentId": "116",
            "value": "盐都区",
            "layer": "3"
        },
        {
            "id": "1187",
            "parentId": "116",
            "value": "响水县",
            "layer": "3"
        },
        {
            "id": "1188",
            "parentId": "116",
            "value": "滨海县",
            "layer": "3"
        },
        {
            "id": "1189",
            "parentId": "116",
            "value": "阜宁县",
            "layer": "3"
        },
        {
            "id": "1190",
            "parentId": "116",
            "value": "射阳县",
            "layer": "3"
        },
        {
            "id": "1191",
            "parentId": "116",
            "value": "建湖县",
            "layer": "3"
        },
        {
            "id": "1192",
            "parentId": "116",
            "value": "东台市",
            "layer": "3"
        },
        {
            "id": "1193",
            "parentId": "116",
            "value": "大丰市",
            "layer": "3"
        },
        {
            "id": "1194",
            "parentId": "117",
            "value": "广陵区",
            "layer": "3"
        },
        {
            "id": "1195",
            "parentId": "117",
            "value": "邗江区",
            "layer": "3"
        },
        {
            "id": "1196",
            "parentId": "117",
            "value": "郊　区",
            "layer": "3"
        },
        {
            "id": "1197",
            "parentId": "117",
            "value": "宝应县",
            "layer": "3"
        },
        {
            "id": "1198",
            "parentId": "117",
            "value": "仪征市",
            "layer": "3"
        },
        {
            "id": "1199",
            "parentId": "117",
            "value": "高邮市",
            "layer": "3"
        },
        {
            "id": "1200",
            "parentId": "117",
            "value": "江都市",
            "layer": "3"
        },
        {
            "id": "1201",
            "parentId": "118",
            "value": "京口区",
            "layer": "3"
        },
        {
            "id": "1202",
            "parentId": "118",
            "value": "润州区",
            "layer": "3"
        },
        {
            "id": "1203",
            "parentId": "118",
            "value": "丹徒区",
            "layer": "3"
        },
        {
            "id": "1204",
            "parentId": "118",
            "value": "丹阳市",
            "layer": "3"
        },
        {
            "id": "1205",
            "parentId": "118",
            "value": "扬中市",
            "layer": "3"
        },
        {
            "id": "1206",
            "parentId": "118",
            "value": "句容市",
            "layer": "3"
        },
        {
            "id": "1207",
            "parentId": "119",
            "value": "海陵区",
            "layer": "3"
        },
        {
            "id": "1208",
            "parentId": "119",
            "value": "高港区",
            "layer": "3"
        },
        {
            "id": "1209",
            "parentId": "119",
            "value": "兴化市",
            "layer": "3"
        },
        {
            "id": "1210",
            "parentId": "119",
            "value": "靖江市",
            "layer": "3"
        },
        {
            "id": "1211",
            "parentId": "119",
            "value": "泰兴市",
            "layer": "3"
        },
        {
            "id": "1212",
            "parentId": "119",
            "value": "姜堰市",
            "layer": "3"
        },
        {
            "id": "1213",
            "parentId": "120",
            "value": "宿城区",
            "layer": "3"
        },
        {
            "id": "1214",
            "parentId": "120",
            "value": "宿豫区",
            "layer": "3"
        },
        {
            "id": "1215",
            "parentId": "120",
            "value": "沭阳县",
            "layer": "3"
        },
        {
            "id": "1216",
            "parentId": "120",
            "value": "泗阳县",
            "layer": "3"
        },
        {
            "id": "1217",
            "parentId": "120",
            "value": "泗洪县",
            "layer": "3"
        },
        {
            "id": "1218",
            "parentId": "121",
            "value": "上城区",
            "layer": "3"
        },
        {
            "id": "1219",
            "parentId": "121",
            "value": "下城区",
            "layer": "3"
        },
        {
            "id": "1220",
            "parentId": "121",
            "value": "江干区",
            "layer": "3"
        },
        {
            "id": "1221",
            "parentId": "121",
            "value": "拱墅区",
            "layer": "3"
        },
        {
            "id": "1222",
            "parentId": "121",
            "value": "西湖区",
            "layer": "3"
        },
        {
            "id": "1223",
            "parentId": "121",
            "value": "滨江区",
            "layer": "3"
        },
        {
            "id": "1224",
            "parentId": "121",
            "value": "萧山区",
            "layer": "3"
        },
        {
            "id": "1225",
            "parentId": "121",
            "value": "余杭区",
            "layer": "3"
        },
        {
            "id": "1226",
            "parentId": "121",
            "value": "桐庐县",
            "layer": "3"
        },
        {
            "id": "1227",
            "parentId": "121",
            "value": "淳安县",
            "layer": "3"
        },
        {
            "id": "1228",
            "parentId": "121",
            "value": "建德市",
            "layer": "3"
        },
        {
            "id": "1229",
            "parentId": "121",
            "value": "富阳市",
            "layer": "3"
        },
        {
            "id": "1230",
            "parentId": "121",
            "value": "临安市",
            "layer": "3"
        },
        {
            "id": "1231",
            "parentId": "122",
            "value": "海曙区",
            "layer": "3"
        },
        {
            "id": "1232",
            "parentId": "122",
            "value": "江东区",
            "layer": "3"
        },
        {
            "id": "1233",
            "parentId": "122",
            "value": "江北区",
            "layer": "3"
        },
        {
            "id": "1234",
            "parentId": "122",
            "value": "北仑区",
            "layer": "3"
        },
        {
            "id": "1235",
            "parentId": "122",
            "value": "镇海区",
            "layer": "3"
        },
        {
            "id": "1236",
            "parentId": "122",
            "value": "鄞州区",
            "layer": "3"
        },
        {
            "id": "1237",
            "parentId": "122",
            "value": "象山县",
            "layer": "3"
        },
        {
            "id": "1238",
            "parentId": "122",
            "value": "宁海县",
            "layer": "3"
        },
        {
            "id": "1239",
            "parentId": "122",
            "value": "余姚市",
            "layer": "3"
        },
        {
            "id": "1240",
            "parentId": "122",
            "value": "慈溪市",
            "layer": "3"
        },
        {
            "id": "1241",
            "parentId": "122",
            "value": "奉化市",
            "layer": "3"
        },
        {
            "id": "1242",
            "parentId": "123",
            "value": "鹿城区",
            "layer": "3"
        },
        {
            "id": "1243",
            "parentId": "123",
            "value": "龙湾区",
            "layer": "3"
        },
        {
            "id": "1244",
            "parentId": "123",
            "value": "瓯海区",
            "layer": "3"
        },
        {
            "id": "1245",
            "parentId": "123",
            "value": "洞头县",
            "layer": "3"
        },
        {
            "id": "1246",
            "parentId": "123",
            "value": "永嘉县",
            "layer": "3"
        },
        {
            "id": "1247",
            "parentId": "123",
            "value": "平阳县",
            "layer": "3"
        },
        {
            "id": "1248",
            "parentId": "123",
            "value": "苍南县",
            "layer": "3"
        },
        {
            "id": "1249",
            "parentId": "123",
            "value": "文成县",
            "layer": "3"
        },
        {
            "id": "1250",
            "parentId": "123",
            "value": "泰顺县",
            "layer": "3"
        },
        {
            "id": "1251",
            "parentId": "123",
            "value": "瑞安市",
            "layer": "3"
        },
        {
            "id": "1252",
            "parentId": "123",
            "value": "乐清市",
            "layer": "3"
        },
        {
            "id": "1253",
            "parentId": "124",
            "value": "秀城区",
            "layer": "3"
        },
        {
            "id": "1254",
            "parentId": "124",
            "value": "秀洲区",
            "layer": "3"
        },
        {
            "id": "1255",
            "parentId": "124",
            "value": "嘉善县",
            "layer": "3"
        },
        {
            "id": "1256",
            "parentId": "124",
            "value": "海盐县",
            "layer": "3"
        },
        {
            "id": "1257",
            "parentId": "124",
            "value": "海宁市",
            "layer": "3"
        },
        {
            "id": "1258",
            "parentId": "124",
            "value": "平湖市",
            "layer": "3"
        },
        {
            "id": "1259",
            "parentId": "124",
            "value": "桐乡市",
            "layer": "3"
        },
        {
            "id": "1260",
            "parentId": "125",
            "value": "吴兴区",
            "layer": "3"
        },
        {
            "id": "1261",
            "parentId": "125",
            "value": "南浔区",
            "layer": "3"
        },
        {
            "id": "1262",
            "parentId": "125",
            "value": "德清县",
            "layer": "3"
        },
        {
            "id": "1263",
            "parentId": "125",
            "value": "长兴县",
            "layer": "3"
        },
        {
            "id": "1264",
            "parentId": "125",
            "value": "安吉县",
            "layer": "3"
        },
        {
            "id": "1265",
            "parentId": "126",
            "value": "越城区",
            "layer": "3"
        },
        {
            "id": "1266",
            "parentId": "126",
            "value": "绍兴县",
            "layer": "3"
        },
        {
            "id": "1267",
            "parentId": "126",
            "value": "新昌县",
            "layer": "3"
        },
        {
            "id": "1268",
            "parentId": "126",
            "value": "诸暨市",
            "layer": "3"
        },
        {
            "id": "1269",
            "parentId": "126",
            "value": "上虞市",
            "layer": "3"
        },
        {
            "id": "1270",
            "parentId": "126",
            "value": "嵊州市",
            "layer": "3"
        },
        {
            "id": "1271",
            "parentId": "127",
            "value": "婺城区",
            "layer": "3"
        },
        {
            "id": "1272",
            "parentId": "127",
            "value": "金东区",
            "layer": "3"
        },
        {
            "id": "1273",
            "parentId": "127",
            "value": "武义县",
            "layer": "3"
        },
        {
            "id": "1274",
            "parentId": "127",
            "value": "浦江县",
            "layer": "3"
        },
        {
            "id": "1275",
            "parentId": "127",
            "value": "磐安县",
            "layer": "3"
        },
        {
            "id": "1276",
            "parentId": "127",
            "value": "兰溪市",
            "layer": "3"
        },
        {
            "id": "1277",
            "parentId": "127",
            "value": "义乌市",
            "layer": "3"
        },
        {
            "id": "1278",
            "parentId": "127",
            "value": "东阳市",
            "layer": "3"
        },
        {
            "id": "1279",
            "parentId": "127",
            "value": "永康市",
            "layer": "3"
        },
        {
            "id": "1280",
            "parentId": "128",
            "value": "柯城区",
            "layer": "3"
        },
        {
            "id": "1281",
            "parentId": "128",
            "value": "衢江区",
            "layer": "3"
        },
        {
            "id": "1282",
            "parentId": "128",
            "value": "常山县",
            "layer": "3"
        },
        {
            "id": "1283",
            "parentId": "128",
            "value": "开化县",
            "layer": "3"
        },
        {
            "id": "1284",
            "parentId": "128",
            "value": "龙游县",
            "layer": "3"
        },
        {
            "id": "1285",
            "parentId": "128",
            "value": "江山市",
            "layer": "3"
        },
        {
            "id": "1286",
            "parentId": "129",
            "value": "定海区",
            "layer": "3"
        },
        {
            "id": "1287",
            "parentId": "129",
            "value": "普陀区",
            "layer": "3"
        },
        {
            "id": "1288",
            "parentId": "129",
            "value": "岱山县",
            "layer": "3"
        },
        {
            "id": "1289",
            "parentId": "129",
            "value": "嵊泗县",
            "layer": "3"
        },
        {
            "id": "1290",
            "parentId": "130",
            "value": "椒江区",
            "layer": "3"
        },
        {
            "id": "1291",
            "parentId": "130",
            "value": "黄岩区",
            "layer": "3"
        },
        {
            "id": "1292",
            "parentId": "130",
            "value": "路桥区",
            "layer": "3"
        },
        {
            "id": "1293",
            "parentId": "130",
            "value": "玉环县",
            "layer": "3"
        },
        {
            "id": "1294",
            "parentId": "130",
            "value": "三门县",
            "layer": "3"
        },
        {
            "id": "1295",
            "parentId": "130",
            "value": "天台县",
            "layer": "3"
        },
        {
            "id": "1296",
            "parentId": "130",
            "value": "仙居县",
            "layer": "3"
        },
        {
            "id": "1297",
            "parentId": "130",
            "value": "温岭市",
            "layer": "3"
        },
        {
            "id": "1298",
            "parentId": "130",
            "value": "临海市",
            "layer": "3"
        },
        {
            "id": "1299",
            "parentId": "131",
            "value": "莲都区",
            "layer": "3"
        },
        {
            "id": "1300",
            "parentId": "131",
            "value": "青田县",
            "layer": "3"
        },
        {
            "id": "1301",
            "parentId": "131",
            "value": "缙云县",
            "layer": "3"
        },
        {
            "id": "1302",
            "parentId": "131",
            "value": "遂昌县",
            "layer": "3"
        },
        {
            "id": "1303",
            "parentId": "131",
            "value": "松阳县",
            "layer": "3"
        },
        {
            "id": "1304",
            "parentId": "131",
            "value": "云和县",
            "layer": "3"
        },
        {
            "id": "1305",
            "parentId": "131",
            "value": "庆元县",
            "layer": "3"
        },
        {
            "id": "1306",
            "parentId": "131",
            "value": "景宁畲族自治县",
            "layer": "3"
        },
        {
            "id": "1307",
            "parentId": "131",
            "value": "龙泉市",
            "layer": "3"
        },
        {
            "id": "1308",
            "parentId": "132",
            "value": "瑶海区",
            "layer": "3"
        },
        {
            "id": "1309",
            "parentId": "132",
            "value": "庐阳区",
            "layer": "3"
        },
        {
            "id": "1310",
            "parentId": "132",
            "value": "蜀山区",
            "layer": "3"
        },
        {
            "id": "1311",
            "parentId": "132",
            "value": "包河区",
            "layer": "3"
        },
        {
            "id": "1312",
            "parentId": "132",
            "value": "长丰县",
            "layer": "3"
        },
        {
            "id": "1313",
            "parentId": "132",
            "value": "肥东县",
            "layer": "3"
        },
        {
            "id": "1314",
            "parentId": "132",
            "value": "肥西县",
            "layer": "3"
        },
        {
            "id": "1315",
            "parentId": "133",
            "value": "镜湖区",
            "layer": "3"
        },
        {
            "id": "1316",
            "parentId": "133",
            "value": "马塘区",
            "layer": "3"
        },
        {
            "id": "1317",
            "parentId": "133",
            "value": "新芜区",
            "layer": "3"
        },
        {
            "id": "1318",
            "parentId": "133",
            "value": "鸠江区",
            "layer": "3"
        },
        {
            "id": "1319",
            "parentId": "133",
            "value": "芜湖县",
            "layer": "3"
        },
        {
            "id": "1320",
            "parentId": "133",
            "value": "繁昌县",
            "layer": "3"
        },
        {
            "id": "1321",
            "parentId": "133",
            "value": "南陵县",
            "layer": "3"
        },
        {
            "id": "1322",
            "parentId": "134",
            "value": "龙子湖区",
            "layer": "3"
        },
        {
            "id": "1323",
            "parentId": "134",
            "value": "蚌山区",
            "layer": "3"
        },
        {
            "id": "1324",
            "parentId": "134",
            "value": "禹会区",
            "layer": "3"
        },
        {
            "id": "1325",
            "parentId": "134",
            "value": "淮上区",
            "layer": "3"
        },
        {
            "id": "1326",
            "parentId": "134",
            "value": "怀远县",
            "layer": "3"
        },
        {
            "id": "1327",
            "parentId": "134",
            "value": "五河县",
            "layer": "3"
        },
        {
            "id": "1328",
            "parentId": "134",
            "value": "固镇县",
            "layer": "3"
        },
        {
            "id": "1329",
            "parentId": "135",
            "value": "大通区",
            "layer": "3"
        },
        {
            "id": "1330",
            "parentId": "135",
            "value": "田家庵区",
            "layer": "3"
        },
        {
            "id": "1331",
            "parentId": "135",
            "value": "谢家集区",
            "layer": "3"
        },
        {
            "id": "1332",
            "parentId": "135",
            "value": "八公山区",
            "layer": "3"
        },
        {
            "id": "1333",
            "parentId": "135",
            "value": "潘集区",
            "layer": "3"
        },
        {
            "id": "1334",
            "parentId": "135",
            "value": "凤台县",
            "layer": "3"
        },
        {
            "id": "1335",
            "parentId": "136",
            "value": "金家庄区",
            "layer": "3"
        },
        {
            "id": "1336",
            "parentId": "136",
            "value": "花山区",
            "layer": "3"
        },
        {
            "id": "1337",
            "parentId": "136",
            "value": "雨山区",
            "layer": "3"
        },
        {
            "id": "1338",
            "parentId": "136",
            "value": "当涂县",
            "layer": "3"
        },
        {
            "id": "1339",
            "parentId": "137",
            "value": "杜集区",
            "layer": "3"
        },
        {
            "id": "1340",
            "parentId": "137",
            "value": "相山区",
            "layer": "3"
        },
        {
            "id": "1341",
            "parentId": "137",
            "value": "烈山区",
            "layer": "3"
        },
        {
            "id": "1342",
            "parentId": "137",
            "value": "濉溪县",
            "layer": "3"
        },
        {
            "id": "1343",
            "parentId": "138",
            "value": "铜官山区",
            "layer": "3"
        },
        {
            "id": "1344",
            "parentId": "138",
            "value": "狮子山区",
            "layer": "3"
        },
        {
            "id": "1345",
            "parentId": "138",
            "value": "郊　区",
            "layer": "3"
        },
        {
            "id": "1346",
            "parentId": "138",
            "value": "铜陵县",
            "layer": "3"
        },
        {
            "id": "1347",
            "parentId": "139",
            "value": "迎江区",
            "layer": "3"
        },
        {
            "id": "1348",
            "parentId": "139",
            "value": "大观区",
            "layer": "3"
        },
        {
            "id": "1349",
            "parentId": "139",
            "value": "郊　区",
            "layer": "3"
        },
        {
            "id": "1350",
            "parentId": "139",
            "value": "怀宁县",
            "layer": "3"
        },
        {
            "id": "1351",
            "parentId": "139",
            "value": "枞阳县",
            "layer": "3"
        },
        {
            "id": "1352",
            "parentId": "139",
            "value": "潜山县",
            "layer": "3"
        },
        {
            "id": "1353",
            "parentId": "139",
            "value": "太湖县",
            "layer": "3"
        },
        {
            "id": "1354",
            "parentId": "139",
            "value": "宿松县",
            "layer": "3"
        },
        {
            "id": "1355",
            "parentId": "139",
            "value": "望江县",
            "layer": "3"
        },
        {
            "id": "1356",
            "parentId": "139",
            "value": "岳西县",
            "layer": "3"
        },
        {
            "id": "1357",
            "parentId": "139",
            "value": "桐城市",
            "layer": "3"
        },
        {
            "id": "1358",
            "parentId": "140",
            "value": "屯溪区",
            "layer": "3"
        },
        {
            "id": "1359",
            "parentId": "140",
            "value": "黄山区",
            "layer": "3"
        },
        {
            "id": "1360",
            "parentId": "140",
            "value": "徽州区",
            "layer": "3"
        },
        {
            "id": "1361",
            "parentId": "140",
            "value": "歙　县",
            "layer": "3"
        },
        {
            "id": "1362",
            "parentId": "140",
            "value": "休宁县",
            "layer": "3"
        },
        {
            "id": "1363",
            "parentId": "140",
            "value": "黟　县",
            "layer": "3"
        },
        {
            "id": "1364",
            "parentId": "140",
            "value": "祁门县",
            "layer": "3"
        },
        {
            "id": "1365",
            "parentId": "141",
            "value": "琅琊区",
            "layer": "3"
        },
        {
            "id": "1366",
            "parentId": "141",
            "value": "南谯区",
            "layer": "3"
        },
        {
            "id": "1367",
            "parentId": "141",
            "value": "来安县",
            "layer": "3"
        },
        {
            "id": "1368",
            "parentId": "141",
            "value": "全椒县",
            "layer": "3"
        },
        {
            "id": "1369",
            "parentId": "141",
            "value": "定远县",
            "layer": "3"
        },
        {
            "id": "1370",
            "parentId": "141",
            "value": "凤阳县",
            "layer": "3"
        },
        {
            "id": "1371",
            "parentId": "141",
            "value": "天长市",
            "layer": "3"
        },
        {
            "id": "1372",
            "parentId": "141",
            "value": "明光市",
            "layer": "3"
        },
        {
            "id": "1373",
            "parentId": "142",
            "value": "颍州区",
            "layer": "3"
        },
        {
            "id": "1374",
            "parentId": "142",
            "value": "颍东区",
            "layer": "3"
        },
        {
            "id": "1375",
            "parentId": "142",
            "value": "颍泉区",
            "layer": "3"
        },
        {
            "id": "1376",
            "parentId": "142",
            "value": "临泉县",
            "layer": "3"
        },
        {
            "id": "1377",
            "parentId": "142",
            "value": "太和县",
            "layer": "3"
        },
        {
            "id": "1378",
            "parentId": "142",
            "value": "阜南县",
            "layer": "3"
        },
        {
            "id": "1379",
            "parentId": "142",
            "value": "颍上县",
            "layer": "3"
        },
        {
            "id": "1380",
            "parentId": "142",
            "value": "界首市",
            "layer": "3"
        },
        {
            "id": "1381",
            "parentId": "143",
            "value": "墉桥区",
            "layer": "3"
        },
        {
            "id": "1382",
            "parentId": "143",
            "value": "砀山县",
            "layer": "3"
        },
        {
            "id": "1383",
            "parentId": "143",
            "value": "萧　县",
            "layer": "3"
        },
        {
            "id": "1384",
            "parentId": "143",
            "value": "灵璧县",
            "layer": "3"
        },
        {
            "id": "1385",
            "parentId": "143",
            "value": "泗　县",
            "layer": "3"
        },
        {
            "id": "1386",
            "parentId": "144",
            "value": "居巢区",
            "layer": "3"
        },
        {
            "id": "1387",
            "parentId": "144",
            "value": "庐江县",
            "layer": "3"
        },
        {
            "id": "1388",
            "parentId": "144",
            "value": "无为县",
            "layer": "3"
        },
        {
            "id": "1389",
            "parentId": "144",
            "value": "含山县",
            "layer": "3"
        },
        {
            "id": "1390",
            "parentId": "144",
            "value": "和　县",
            "layer": "3"
        },
        {
            "id": "1391",
            "parentId": "145",
            "value": "金安区",
            "layer": "3"
        },
        {
            "id": "1392",
            "parentId": "145",
            "value": "裕安区",
            "layer": "3"
        },
        {
            "id": "1393",
            "parentId": "145",
            "value": "寿　县",
            "layer": "3"
        },
        {
            "id": "1394",
            "parentId": "145",
            "value": "霍邱县",
            "layer": "3"
        },
        {
            "id": "1395",
            "parentId": "145",
            "value": "舒城县",
            "layer": "3"
        },
        {
            "id": "1396",
            "parentId": "145",
            "value": "金寨县",
            "layer": "3"
        },
        {
            "id": "1397",
            "parentId": "145",
            "value": "霍山县",
            "layer": "3"
        },
        {
            "id": "1398",
            "parentId": "146",
            "value": "谯城区",
            "layer": "3"
        },
        {
            "id": "1399",
            "parentId": "146",
            "value": "涡阳县",
            "layer": "3"
        },
        {
            "id": "1400",
            "parentId": "146",
            "value": "蒙城县",
            "layer": "3"
        },
        {
            "id": "1401",
            "parentId": "146",
            "value": "利辛县",
            "layer": "3"
        },
        {
            "id": "1402",
            "parentId": "147",
            "value": "贵池区",
            "layer": "3"
        },
        {
            "id": "1403",
            "parentId": "147",
            "value": "东至县",
            "layer": "3"
        },
        {
            "id": "1404",
            "parentId": "147",
            "value": "石台县",
            "layer": "3"
        },
        {
            "id": "1405",
            "parentId": "147",
            "value": "青阳县",
            "layer": "3"
        },
        {
            "id": "1406",
            "parentId": "148",
            "value": "宣州区",
            "layer": "3"
        },
        {
            "id": "1407",
            "parentId": "148",
            "value": "郎溪县",
            "layer": "3"
        },
        {
            "id": "1408",
            "parentId": "148",
            "value": "广德县",
            "layer": "3"
        },
        {
            "id": "1409",
            "parentId": "148",
            "value": "泾　县",
            "layer": "3"
        },
        {
            "id": "1410",
            "parentId": "148",
            "value": "绩溪县",
            "layer": "3"
        },
        {
            "id": "1411",
            "parentId": "148",
            "value": "旌德县",
            "layer": "3"
        },
        {
            "id": "1412",
            "parentId": "148",
            "value": "宁国市",
            "layer": "3"
        },
        {
            "id": "1413",
            "parentId": "149",
            "value": "鼓楼区",
            "layer": "3"
        },
        {
            "id": "1414",
            "parentId": "149",
            "value": "台江区",
            "layer": "3"
        },
        {
            "id": "1415",
            "parentId": "149",
            "value": "仓山区",
            "layer": "3"
        },
        {
            "id": "1416",
            "parentId": "149",
            "value": "马尾区",
            "layer": "3"
        },
        {
            "id": "1417",
            "parentId": "149",
            "value": "晋安区",
            "layer": "3"
        },
        {
            "id": "1418",
            "parentId": "149",
            "value": "闽侯县",
            "layer": "3"
        },
        {
            "id": "1419",
            "parentId": "149",
            "value": "连江县",
            "layer": "3"
        },
        {
            "id": "1420",
            "parentId": "149",
            "value": "罗源县",
            "layer": "3"
        },
        {
            "id": "1421",
            "parentId": "149",
            "value": "闽清县",
            "layer": "3"
        },
        {
            "id": "1422",
            "parentId": "149",
            "value": "永泰县",
            "layer": "3"
        },
        {
            "id": "1423",
            "parentId": "149",
            "value": "平潭县",
            "layer": "3"
        },
        {
            "id": "1424",
            "parentId": "149",
            "value": "福清市",
            "layer": "3"
        },
        {
            "id": "1425",
            "parentId": "149",
            "value": "长乐市",
            "layer": "3"
        },
        {
            "id": "1426",
            "parentId": "150",
            "value": "思明区",
            "layer": "3"
        },
        {
            "id": "1427",
            "parentId": "150",
            "value": "海沧区",
            "layer": "3"
        },
        {
            "id": "1428",
            "parentId": "150",
            "value": "湖里区",
            "layer": "3"
        },
        {
            "id": "1429",
            "parentId": "150",
            "value": "集美区",
            "layer": "3"
        },
        {
            "id": "1430",
            "parentId": "150",
            "value": "同安区",
            "layer": "3"
        },
        {
            "id": "1431",
            "parentId": "150",
            "value": "翔安区",
            "layer": "3"
        },
        {
            "id": "1432",
            "parentId": "151",
            "value": "城厢区",
            "layer": "3"
        },
        {
            "id": "1433",
            "parentId": "151",
            "value": "涵江区",
            "layer": "3"
        },
        {
            "id": "1434",
            "parentId": "151",
            "value": "荔城区",
            "layer": "3"
        },
        {
            "id": "1435",
            "parentId": "151",
            "value": "秀屿区",
            "layer": "3"
        },
        {
            "id": "1436",
            "parentId": "151",
            "value": "仙游县",
            "layer": "3"
        },
        {
            "id": "1437",
            "parentId": "152",
            "value": "梅列区",
            "layer": "3"
        },
        {
            "id": "1438",
            "parentId": "152",
            "value": "三元区",
            "layer": "3"
        },
        {
            "id": "1439",
            "parentId": "152",
            "value": "明溪县",
            "layer": "3"
        },
        {
            "id": "1440",
            "parentId": "152",
            "value": "清流县",
            "layer": "3"
        },
        {
            "id": "1441",
            "parentId": "152",
            "value": "宁化县",
            "layer": "3"
        },
        {
            "id": "1442",
            "parentId": "152",
            "value": "大田县",
            "layer": "3"
        },
        {
            "id": "1443",
            "parentId": "152",
            "value": "尤溪县",
            "layer": "3"
        },
        {
            "id": "1444",
            "parentId": "152",
            "value": "沙　县",
            "layer": "3"
        },
        {
            "id": "1445",
            "parentId": "152",
            "value": "将乐县",
            "layer": "3"
        },
        {
            "id": "1446",
            "parentId": "152",
            "value": "泰宁县",
            "layer": "3"
        },
        {
            "id": "1447",
            "parentId": "152",
            "value": "建宁县",
            "layer": "3"
        },
        {
            "id": "1448",
            "parentId": "152",
            "value": "永安市",
            "layer": "3"
        },
        {
            "id": "1449",
            "parentId": "153",
            "value": "鲤城区",
            "layer": "3"
        },
        {
            "id": "1450",
            "parentId": "153",
            "value": "丰泽区",
            "layer": "3"
        },
        {
            "id": "1451",
            "parentId": "153",
            "value": "洛江区",
            "layer": "3"
        },
        {
            "id": "1452",
            "parentId": "153",
            "value": "泉港区",
            "layer": "3"
        },
        {
            "id": "1453",
            "parentId": "153",
            "value": "惠安县",
            "layer": "3"
        },
        {
            "id": "1454",
            "parentId": "153",
            "value": "安溪县",
            "layer": "3"
        },
        {
            "id": "1455",
            "parentId": "153",
            "value": "永春县",
            "layer": "3"
        },
        {
            "id": "1456",
            "parentId": "153",
            "value": "德化县",
            "layer": "3"
        },
        {
            "id": "1457",
            "parentId": "153",
            "value": "金门县",
            "layer": "3"
        },
        {
            "id": "1458",
            "parentId": "153",
            "value": "石狮市",
            "layer": "3"
        },
        {
            "id": "1459",
            "parentId": "153",
            "value": "晋江市",
            "layer": "3"
        },
        {
            "id": "1460",
            "parentId": "153",
            "value": "南安市",
            "layer": "3"
        },
        {
            "id": "1461",
            "parentId": "154",
            "value": "芗城区",
            "layer": "3"
        },
        {
            "id": "1462",
            "parentId": "154",
            "value": "龙文区",
            "layer": "3"
        },
        {
            "id": "1463",
            "parentId": "154",
            "value": "云霄县",
            "layer": "3"
        },
        {
            "id": "1464",
            "parentId": "154",
            "value": "漳浦县",
            "layer": "3"
        },
        {
            "id": "1465",
            "parentId": "154",
            "value": "诏安县",
            "layer": "3"
        },
        {
            "id": "1466",
            "parentId": "154",
            "value": "长泰县",
            "layer": "3"
        },
        {
            "id": "1467",
            "parentId": "154",
            "value": "东山县",
            "layer": "3"
        },
        {
            "id": "1468",
            "parentId": "154",
            "value": "南靖县",
            "layer": "3"
        },
        {
            "id": "1469",
            "parentId": "154",
            "value": "平和县",
            "layer": "3"
        },
        {
            "id": "1470",
            "parentId": "154",
            "value": "华安县",
            "layer": "3"
        },
        {
            "id": "1471",
            "parentId": "154",
            "value": "龙海市",
            "layer": "3"
        },
        {
            "id": "1472",
            "parentId": "155",
            "value": "延平区",
            "layer": "3"
        },
        {
            "id": "1473",
            "parentId": "155",
            "value": "顺昌县",
            "layer": "3"
        },
        {
            "id": "1474",
            "parentId": "155",
            "value": "浦城县",
            "layer": "3"
        },
        {
            "id": "1475",
            "parentId": "155",
            "value": "光泽县",
            "layer": "3"
        },
        {
            "id": "1476",
            "parentId": "155",
            "value": "松溪县",
            "layer": "3"
        },
        {
            "id": "1477",
            "parentId": "155",
            "value": "政和县",
            "layer": "3"
        },
        {
            "id": "1478",
            "parentId": "155",
            "value": "邵武市",
            "layer": "3"
        },
        {
            "id": "1479",
            "parentId": "155",
            "value": "武夷山市",
            "layer": "3"
        },
        {
            "id": "1480",
            "parentId": "155",
            "value": "建瓯市",
            "layer": "3"
        },
        {
            "id": "1481",
            "parentId": "155",
            "value": "建阳市",
            "layer": "3"
        },
        {
            "id": "1482",
            "parentId": "156",
            "value": "新罗区",
            "layer": "3"
        },
        {
            "id": "1483",
            "parentId": "156",
            "value": "长汀县",
            "layer": "3"
        },
        {
            "id": "1484",
            "parentId": "156",
            "value": "永定县",
            "layer": "3"
        },
        {
            "id": "1485",
            "parentId": "156",
            "value": "上杭县",
            "layer": "3"
        },
        {
            "id": "1486",
            "parentId": "156",
            "value": "武平县",
            "layer": "3"
        },
        {
            "id": "1487",
            "parentId": "156",
            "value": "连城县",
            "layer": "3"
        },
        {
            "id": "1488",
            "parentId": "156",
            "value": "漳平市",
            "layer": "3"
        },
        {
            "id": "1489",
            "parentId": "157",
            "value": "蕉城区",
            "layer": "3"
        },
        {
            "id": "1490",
            "parentId": "157",
            "value": "霞浦县",
            "layer": "3"
        },
        {
            "id": "1491",
            "parentId": "157",
            "value": "古田县",
            "layer": "3"
        },
        {
            "id": "1492",
            "parentId": "157",
            "value": "屏南县",
            "layer": "3"
        },
        {
            "id": "1493",
            "parentId": "157",
            "value": "寿宁县",
            "layer": "3"
        },
        {
            "id": "1494",
            "parentId": "157",
            "value": "周宁县",
            "layer": "3"
        },
        {
            "id": "1495",
            "parentId": "157",
            "value": "柘荣县",
            "layer": "3"
        },
        {
            "id": "1496",
            "parentId": "157",
            "value": "福安市",
            "layer": "3"
        },
        {
            "id": "1497",
            "parentId": "157",
            "value": "福鼎市",
            "layer": "3"
        },
        {
            "id": "1498",
            "parentId": "158",
            "value": "东湖区",
            "layer": "3"
        },
        {
            "id": "1499",
            "parentId": "158",
            "value": "西湖区",
            "layer": "3"
        },
        {
            "id": "1500",
            "parentId": "158",
            "value": "青云谱区",
            "layer": "3"
        },
        {
            "id": "1501",
            "parentId": "158",
            "value": "湾里区",
            "layer": "3"
        },
        {
            "id": "1502",
            "parentId": "158",
            "value": "青山湖区",
            "layer": "3"
        },
        {
            "id": "1503",
            "parentId": "158",
            "value": "南昌县",
            "layer": "3"
        },
        {
            "id": "1504",
            "parentId": "158",
            "value": "新建县",
            "layer": "3"
        },
        {
            "id": "1505",
            "parentId": "158",
            "value": "安义县",
            "layer": "3"
        },
        {
            "id": "1506",
            "parentId": "158",
            "value": "进贤县",
            "layer": "3"
        },
        {
            "id": "1507",
            "parentId": "159",
            "value": "昌江区",
            "layer": "3"
        },
        {
            "id": "1508",
            "parentId": "159",
            "value": "珠山区",
            "layer": "3"
        },
        {
            "id": "1509",
            "parentId": "159",
            "value": "浮梁县",
            "layer": "3"
        },
        {
            "id": "1510",
            "parentId": "159",
            "value": "乐平市",
            "layer": "3"
        },
        {
            "id": "1511",
            "parentId": "160",
            "value": "安源区",
            "layer": "3"
        },
        {
            "id": "1512",
            "parentId": "160",
            "value": "湘东区",
            "layer": "3"
        },
        {
            "id": "1513",
            "parentId": "160",
            "value": "莲花县",
            "layer": "3"
        },
        {
            "id": "1514",
            "parentId": "160",
            "value": "上栗县",
            "layer": "3"
        },
        {
            "id": "1515",
            "parentId": "160",
            "value": "芦溪县",
            "layer": "3"
        },
        {
            "id": "1516",
            "parentId": "161",
            "value": "庐山区",
            "layer": "3"
        },
        {
            "id": "1517",
            "parentId": "161",
            "value": "浔阳区",
            "layer": "3"
        },
        {
            "id": "1518",
            "parentId": "161",
            "value": "九江县",
            "layer": "3"
        },
        {
            "id": "1519",
            "parentId": "161",
            "value": "武宁县",
            "layer": "3"
        },
        {
            "id": "1520",
            "parentId": "161",
            "value": "修水县",
            "layer": "3"
        },
        {
            "id": "1521",
            "parentId": "161",
            "value": "永修县",
            "layer": "3"
        },
        {
            "id": "1522",
            "parentId": "161",
            "value": "德安县",
            "layer": "3"
        },
        {
            "id": "1523",
            "parentId": "161",
            "value": "星子县",
            "layer": "3"
        },
        {
            "id": "1524",
            "parentId": "161",
            "value": "都昌县",
            "layer": "3"
        },
        {
            "id": "1525",
            "parentId": "161",
            "value": "湖口县",
            "layer": "3"
        },
        {
            "id": "1526",
            "parentId": "161",
            "value": "彭泽县",
            "layer": "3"
        },
        {
            "id": "1527",
            "parentId": "161",
            "value": "瑞昌市",
            "layer": "3"
        },
        {
            "id": "1528",
            "parentId": "162",
            "value": "渝水区",
            "layer": "3"
        },
        {
            "id": "1529",
            "parentId": "162",
            "value": "分宜县",
            "layer": "3"
        },
        {
            "id": "1530",
            "parentId": "163",
            "value": "月湖区",
            "layer": "3"
        },
        {
            "id": "1531",
            "parentId": "163",
            "value": "余江县",
            "layer": "3"
        },
        {
            "id": "1532",
            "parentId": "163",
            "value": "贵溪市",
            "layer": "3"
        },
        {
            "id": "1533",
            "parentId": "164",
            "value": "章贡区",
            "layer": "3"
        },
        {
            "id": "1534",
            "parentId": "164",
            "value": "赣　县",
            "layer": "3"
        },
        {
            "id": "1535",
            "parentId": "164",
            "value": "信丰县",
            "layer": "3"
        },
        {
            "id": "1536",
            "parentId": "164",
            "value": "大余县",
            "layer": "3"
        },
        {
            "id": "1537",
            "parentId": "164",
            "value": "上犹县",
            "layer": "3"
        },
        {
            "id": "1538",
            "parentId": "164",
            "value": "崇义县",
            "layer": "3"
        },
        {
            "id": "1539",
            "parentId": "164",
            "value": "安远县",
            "layer": "3"
        },
        {
            "id": "1540",
            "parentId": "164",
            "value": "龙南县",
            "layer": "3"
        },
        {
            "id": "1541",
            "parentId": "164",
            "value": "定南县",
            "layer": "3"
        },
        {
            "id": "1542",
            "parentId": "164",
            "value": "全南县",
            "layer": "3"
        },
        {
            "id": "1543",
            "parentId": "164",
            "value": "宁都县",
            "layer": "3"
        },
        {
            "id": "1544",
            "parentId": "164",
            "value": "于都县",
            "layer": "3"
        },
        {
            "id": "1545",
            "parentId": "164",
            "value": "兴国县",
            "layer": "3"
        },
        {
            "id": "1546",
            "parentId": "164",
            "value": "会昌县",
            "layer": "3"
        },
        {
            "id": "1547",
            "parentId": "164",
            "value": "寻乌县",
            "layer": "3"
        },
        {
            "id": "1548",
            "parentId": "164",
            "value": "石城县",
            "layer": "3"
        },
        {
            "id": "1549",
            "parentId": "164",
            "value": "瑞金市",
            "layer": "3"
        },
        {
            "id": "1550",
            "parentId": "164",
            "value": "南康市",
            "layer": "3"
        },
        {
            "id": "1551",
            "parentId": "165",
            "value": "吉州区",
            "layer": "3"
        },
        {
            "id": "1552",
            "parentId": "165",
            "value": "青原区",
            "layer": "3"
        },
        {
            "id": "1553",
            "parentId": "165",
            "value": "吉安县",
            "layer": "3"
        },
        {
            "id": "1554",
            "parentId": "165",
            "value": "吉水县",
            "layer": "3"
        },
        {
            "id": "1555",
            "parentId": "165",
            "value": "峡江县",
            "layer": "3"
        },
        {
            "id": "1556",
            "parentId": "165",
            "value": "新干县",
            "layer": "3"
        },
        {
            "id": "1557",
            "parentId": "165",
            "value": "永丰县",
            "layer": "3"
        },
        {
            "id": "1558",
            "parentId": "165",
            "value": "泰和县",
            "layer": "3"
        },
        {
            "id": "1559",
            "parentId": "165",
            "value": "遂川县",
            "layer": "3"
        },
        {
            "id": "1560",
            "parentId": "165",
            "value": "万安县",
            "layer": "3"
        },
        {
            "id": "1561",
            "parentId": "165",
            "value": "安福县",
            "layer": "3"
        },
        {
            "id": "1562",
            "parentId": "165",
            "value": "永新县",
            "layer": "3"
        },
        {
            "id": "1563",
            "parentId": "165",
            "value": "井冈山市",
            "layer": "3"
        },
        {
            "id": "1564",
            "parentId": "166",
            "value": "袁州区",
            "layer": "3"
        },
        {
            "id": "1565",
            "parentId": "166",
            "value": "奉新县",
            "layer": "3"
        },
        {
            "id": "1566",
            "parentId": "166",
            "value": "万载县",
            "layer": "3"
        },
        {
            "id": "1567",
            "parentId": "166",
            "value": "上高县",
            "layer": "3"
        },
        {
            "id": "1568",
            "parentId": "166",
            "value": "宜丰县",
            "layer": "3"
        },
        {
            "id": "1569",
            "parentId": "166",
            "value": "靖安县",
            "layer": "3"
        },
        {
            "id": "1570",
            "parentId": "166",
            "value": "铜鼓县",
            "layer": "3"
        },
        {
            "id": "1571",
            "parentId": "166",
            "value": "丰城市",
            "layer": "3"
        },
        {
            "id": "1572",
            "parentId": "166",
            "value": "樟树市",
            "layer": "3"
        },
        {
            "id": "1573",
            "parentId": "166",
            "value": "高安市",
            "layer": "3"
        },
        {
            "id": "1574",
            "parentId": "167",
            "value": "临川区",
            "layer": "3"
        },
        {
            "id": "1575",
            "parentId": "167",
            "value": "南城县",
            "layer": "3"
        },
        {
            "id": "1576",
            "parentId": "167",
            "value": "黎川县",
            "layer": "3"
        },
        {
            "id": "1577",
            "parentId": "167",
            "value": "南丰县",
            "layer": "3"
        },
        {
            "id": "1578",
            "parentId": "167",
            "value": "崇仁县",
            "layer": "3"
        },
        {
            "id": "1579",
            "parentId": "167",
            "value": "乐安县",
            "layer": "3"
        },
        {
            "id": "1580",
            "parentId": "167",
            "value": "宜黄县",
            "layer": "3"
        },
        {
            "id": "1581",
            "parentId": "167",
            "value": "金溪县",
            "layer": "3"
        },
        {
            "id": "1582",
            "parentId": "167",
            "value": "资溪县",
            "layer": "3"
        },
        {
            "id": "1583",
            "parentId": "167",
            "value": "东乡县",
            "layer": "3"
        },
        {
            "id": "1584",
            "parentId": "167",
            "value": "广昌县",
            "layer": "3"
        },
        {
            "id": "1585",
            "parentId": "168",
            "value": "信州区",
            "layer": "3"
        },
        {
            "id": "1586",
            "parentId": "168",
            "value": "上饶县",
            "layer": "3"
        },
        {
            "id": "1587",
            "parentId": "168",
            "value": "广丰县",
            "layer": "3"
        },
        {
            "id": "1588",
            "parentId": "168",
            "value": "玉山县",
            "layer": "3"
        },
        {
            "id": "1589",
            "parentId": "168",
            "value": "铅山县",
            "layer": "3"
        },
        {
            "id": "1590",
            "parentId": "168",
            "value": "横峰县",
            "layer": "3"
        },
        {
            "id": "1591",
            "parentId": "168",
            "value": "弋阳县",
            "layer": "3"
        },
        {
            "id": "1592",
            "parentId": "168",
            "value": "余干县",
            "layer": "3"
        },
        {
            "id": "1593",
            "parentId": "168",
            "value": "鄱阳县",
            "layer": "3"
        },
        {
            "id": "1594",
            "parentId": "168",
            "value": "万年县",
            "layer": "3"
        },
        {
            "id": "1595",
            "parentId": "168",
            "value": "婺源县",
            "layer": "3"
        },
        {
            "id": "1596",
            "parentId": "168",
            "value": "德兴市",
            "layer": "3"
        },
        {
            "id": "1597",
            "parentId": "169",
            "value": "历下区",
            "layer": "3"
        },
        {
            "id": "1598",
            "parentId": "169",
            "value": "市中区",
            "layer": "3"
        },
        {
            "id": "1599",
            "parentId": "169",
            "value": "槐荫区",
            "layer": "3"
        },
        {
            "id": "1600",
            "parentId": "169",
            "value": "天桥区",
            "layer": "3"
        },
        {
            "id": "1601",
            "parentId": "169",
            "value": "历城区",
            "layer": "3"
        },
        {
            "id": "1602",
            "parentId": "169",
            "value": "长清区",
            "layer": "3"
        },
        {
            "id": "1603",
            "parentId": "169",
            "value": "平阴县",
            "layer": "3"
        },
        {
            "id": "1604",
            "parentId": "169",
            "value": "济阳县",
            "layer": "3"
        },
        {
            "id": "1605",
            "parentId": "169",
            "value": "商河县",
            "layer": "3"
        },
        {
            "id": "1606",
            "parentId": "169",
            "value": "章丘市",
            "layer": "3"
        },
        {
            "id": "1607",
            "parentId": "170",
            "value": "市南区",
            "layer": "3"
        },
        {
            "id": "1608",
            "parentId": "170",
            "value": "市北区",
            "layer": "3"
        },
        {
            "id": "1609",
            "parentId": "170",
            "value": "四方区",
            "layer": "3"
        },
        {
            "id": "1610",
            "parentId": "170",
            "value": "黄岛区",
            "layer": "3"
        },
        {
            "id": "1611",
            "parentId": "170",
            "value": "崂山区",
            "layer": "3"
        },
        {
            "id": "1612",
            "parentId": "170",
            "value": "李沧区",
            "layer": "3"
        },
        {
            "id": "1613",
            "parentId": "170",
            "value": "城阳区",
            "layer": "3"
        },
        {
            "id": "1614",
            "parentId": "170",
            "value": "胶州市",
            "layer": "3"
        },
        {
            "id": "1615",
            "parentId": "170",
            "value": "即墨市",
            "layer": "3"
        },
        {
            "id": "1616",
            "parentId": "170",
            "value": "平度市",
            "layer": "3"
        },
        {
            "id": "1617",
            "parentId": "170",
            "value": "胶南市",
            "layer": "3"
        },
        {
            "id": "1618",
            "parentId": "170",
            "value": "莱西市",
            "layer": "3"
        },
        {
            "id": "1619",
            "parentId": "171",
            "value": "淄川区",
            "layer": "3"
        },
        {
            "id": "1620",
            "parentId": "171",
            "value": "张店区",
            "layer": "3"
        },
        {
            "id": "1621",
            "parentId": "171",
            "value": "博山区",
            "layer": "3"
        },
        {
            "id": "1622",
            "parentId": "171",
            "value": "临淄区",
            "layer": "3"
        },
        {
            "id": "1623",
            "parentId": "171",
            "value": "周村区",
            "layer": "3"
        },
        {
            "id": "1624",
            "parentId": "171",
            "value": "桓台县",
            "layer": "3"
        },
        {
            "id": "1625",
            "parentId": "171",
            "value": "高青县",
            "layer": "3"
        },
        {
            "id": "1626",
            "parentId": "171",
            "value": "沂源县",
            "layer": "3"
        },
        {
            "id": "1627",
            "parentId": "172",
            "value": "市中区",
            "layer": "3"
        },
        {
            "id": "1628",
            "parentId": "172",
            "value": "薛城区",
            "layer": "3"
        },
        {
            "id": "1629",
            "parentId": "172",
            "value": "峄城区",
            "layer": "3"
        },
        {
            "id": "1630",
            "parentId": "172",
            "value": "台儿庄区",
            "layer": "3"
        },
        {
            "id": "1631",
            "parentId": "172",
            "value": "山亭区",
            "layer": "3"
        },
        {
            "id": "1632",
            "parentId": "172",
            "value": "滕州市",
            "layer": "3"
        },
        {
            "id": "1633",
            "parentId": "173",
            "value": "东营区",
            "layer": "3"
        },
        {
            "id": "1634",
            "parentId": "173",
            "value": "河口区",
            "layer": "3"
        },
        {
            "id": "1635",
            "parentId": "173",
            "value": "垦利县",
            "layer": "3"
        },
        {
            "id": "1636",
            "parentId": "173",
            "value": "利津县",
            "layer": "3"
        },
        {
            "id": "1637",
            "parentId": "173",
            "value": "广饶县",
            "layer": "3"
        },
        {
            "id": "1638",
            "parentId": "174",
            "value": "芝罘区",
            "layer": "3"
        },
        {
            "id": "1639",
            "parentId": "174",
            "value": "福山区",
            "layer": "3"
        },
        {
            "id": "1640",
            "parentId": "174",
            "value": "牟平区",
            "layer": "3"
        },
        {
            "id": "1641",
            "parentId": "174",
            "value": "莱山区",
            "layer": "3"
        },
        {
            "id": "1642",
            "parentId": "174",
            "value": "长岛县",
            "layer": "3"
        },
        {
            "id": "1643",
            "parentId": "174",
            "value": "龙口市",
            "layer": "3"
        },
        {
            "id": "1644",
            "parentId": "174",
            "value": "莱阳市",
            "layer": "3"
        },
        {
            "id": "1645",
            "parentId": "174",
            "value": "莱州市",
            "layer": "3"
        },
        {
            "id": "1646",
            "parentId": "174",
            "value": "蓬莱市",
            "layer": "3"
        },
        {
            "id": "1647",
            "parentId": "174",
            "value": "招远市",
            "layer": "3"
        },
        {
            "id": "1648",
            "parentId": "174",
            "value": "栖霞市",
            "layer": "3"
        },
        {
            "id": "1649",
            "parentId": "174",
            "value": "海阳市",
            "layer": "3"
        },
        {
            "id": "1650",
            "parentId": "175",
            "value": "潍城区",
            "layer": "3"
        },
        {
            "id": "1651",
            "parentId": "175",
            "value": "寒亭区",
            "layer": "3"
        },
        {
            "id": "1652",
            "parentId": "175",
            "value": "坊子区",
            "layer": "3"
        },
        {
            "id": "1653",
            "parentId": "175",
            "value": "奎文区",
            "layer": "3"
        },
        {
            "id": "1654",
            "parentId": "175",
            "value": "临朐县",
            "layer": "3"
        },
        {
            "id": "1655",
            "parentId": "175",
            "value": "昌乐县",
            "layer": "3"
        },
        {
            "id": "1656",
            "parentId": "175",
            "value": "青州市",
            "layer": "3"
        },
        {
            "id": "1657",
            "parentId": "175",
            "value": "诸城市",
            "layer": "3"
        },
        {
            "id": "1658",
            "parentId": "175",
            "value": "寿光市",
            "layer": "3"
        },
        {
            "id": "1659",
            "parentId": "175",
            "value": "安丘市",
            "layer": "3"
        },
        {
            "id": "1660",
            "parentId": "175",
            "value": "高密市",
            "layer": "3"
        },
        {
            "id": "1661",
            "parentId": "175",
            "value": "昌邑市",
            "layer": "3"
        },
        {
            "id": "1662",
            "parentId": "176",
            "value": "市中区",
            "layer": "3"
        },
        {
            "id": "1663",
            "parentId": "176",
            "value": "任城区",
            "layer": "3"
        },
        {
            "id": "1664",
            "parentId": "176",
            "value": "微山县",
            "layer": "3"
        },
        {
            "id": "1665",
            "parentId": "176",
            "value": "鱼台县",
            "layer": "3"
        },
        {
            "id": "1666",
            "parentId": "176",
            "value": "金乡县",
            "layer": "3"
        },
        {
            "id": "1667",
            "parentId": "176",
            "value": "嘉祥县",
            "layer": "3"
        },
        {
            "id": "1668",
            "parentId": "176",
            "value": "汶上县",
            "layer": "3"
        },
        {
            "id": "1669",
            "parentId": "176",
            "value": "泗水县",
            "layer": "3"
        },
        {
            "id": "1670",
            "parentId": "176",
            "value": "梁山县",
            "layer": "3"
        },
        {
            "id": "1671",
            "parentId": "176",
            "value": "曲阜市",
            "layer": "3"
        },
        {
            "id": "1672",
            "parentId": "176",
            "value": "兖州市",
            "layer": "3"
        },
        {
            "id": "1673",
            "parentId": "176",
            "value": "邹城市",
            "layer": "3"
        },
        {
            "id": "1674",
            "parentId": "177",
            "value": "泰山区",
            "layer": "3"
        },
        {
            "id": "1675",
            "parentId": "177",
            "value": "岱岳区",
            "layer": "3"
        },
        {
            "id": "1676",
            "parentId": "177",
            "value": "宁阳县",
            "layer": "3"
        },
        {
            "id": "1677",
            "parentId": "177",
            "value": "东平县",
            "layer": "3"
        },
        {
            "id": "1678",
            "parentId": "177",
            "value": "新泰市",
            "layer": "3"
        },
        {
            "id": "1679",
            "parentId": "177",
            "value": "肥城市",
            "layer": "3"
        },
        {
            "id": "1680",
            "parentId": "178",
            "value": "环翠区",
            "layer": "3"
        },
        {
            "id": "1681",
            "parentId": "178",
            "value": "文登市",
            "layer": "3"
        },
        {
            "id": "1682",
            "parentId": "178",
            "value": "荣成市",
            "layer": "3"
        },
        {
            "id": "1683",
            "parentId": "178",
            "value": "乳山市",
            "layer": "3"
        },
        {
            "id": "1684",
            "parentId": "179",
            "value": "东港区",
            "layer": "3"
        },
        {
            "id": "1685",
            "parentId": "179",
            "value": "岚山区",
            "layer": "3"
        },
        {
            "id": "1686",
            "parentId": "179",
            "value": "五莲县",
            "layer": "3"
        },
        {
            "id": "1687",
            "parentId": "179",
            "value": "莒　县",
            "layer": "3"
        },
        {
            "id": "1688",
            "parentId": "180",
            "value": "莱城区",
            "layer": "3"
        },
        {
            "id": "1689",
            "parentId": "180",
            "value": "钢城区",
            "layer": "3"
        },
        {
            "id": "1690",
            "parentId": "181",
            "value": "兰山区",
            "layer": "3"
        },
        {
            "id": "1691",
            "parentId": "181",
            "value": "罗庄区",
            "layer": "3"
        },
        {
            "id": "1692",
            "parentId": "181",
            "value": "河东区",
            "layer": "3"
        },
        {
            "id": "1693",
            "parentId": "181",
            "value": "沂南县",
            "layer": "3"
        },
        {
            "id": "1694",
            "parentId": "181",
            "value": "郯城县",
            "layer": "3"
        },
        {
            "id": "1695",
            "parentId": "181",
            "value": "沂水县",
            "layer": "3"
        },
        {
            "id": "1696",
            "parentId": "181",
            "value": "苍山县",
            "layer": "3"
        },
        {
            "id": "1697",
            "parentId": "181",
            "value": "费　县",
            "layer": "3"
        },
        {
            "id": "1698",
            "parentId": "181",
            "value": "平邑县",
            "layer": "3"
        },
        {
            "id": "1699",
            "parentId": "181",
            "value": "莒南县",
            "layer": "3"
        },
        {
            "id": "1700",
            "parentId": "181",
            "value": "蒙阴县",
            "layer": "3"
        },
        {
            "id": "1701",
            "parentId": "181",
            "value": "临沭县",
            "layer": "3"
        },
        {
            "id": "1702",
            "parentId": "182",
            "value": "德城区",
            "layer": "3"
        },
        {
            "id": "1703",
            "parentId": "182",
            "value": "陵　县",
            "layer": "3"
        },
        {
            "id": "1704",
            "parentId": "182",
            "value": "宁津县",
            "layer": "3"
        },
        {
            "id": "1705",
            "parentId": "182",
            "value": "庆云县",
            "layer": "3"
        },
        {
            "id": "1706",
            "parentId": "182",
            "value": "临邑县",
            "layer": "3"
        },
        {
            "id": "1707",
            "parentId": "182",
            "value": "齐河县",
            "layer": "3"
        },
        {
            "id": "1708",
            "parentId": "182",
            "value": "平原县",
            "layer": "3"
        },
        {
            "id": "1709",
            "parentId": "182",
            "value": "夏津县",
            "layer": "3"
        },
        {
            "id": "1710",
            "parentId": "182",
            "value": "武城县",
            "layer": "3"
        },
        {
            "id": "1711",
            "parentId": "182",
            "value": "乐陵市",
            "layer": "3"
        },
        {
            "id": "1712",
            "parentId": "182",
            "value": "禹城市",
            "layer": "3"
        },
        {
            "id": "1713",
            "parentId": "183",
            "value": "东昌府区",
            "layer": "3"
        },
        {
            "id": "1714",
            "parentId": "183",
            "value": "阳谷县",
            "layer": "3"
        },
        {
            "id": "1715",
            "parentId": "183",
            "value": "莘　县",
            "layer": "3"
        },
        {
            "id": "1716",
            "parentId": "183",
            "value": "茌平县",
            "layer": "3"
        },
        {
            "id": "1717",
            "parentId": "183",
            "value": "东阿县",
            "layer": "3"
        },
        {
            "id": "1718",
            "parentId": "183",
            "value": "冠　县",
            "layer": "3"
        },
        {
            "id": "1719",
            "parentId": "183",
            "value": "高唐县",
            "layer": "3"
        },
        {
            "id": "1720",
            "parentId": "183",
            "value": "临清市",
            "layer": "3"
        },
        {
            "id": "1721",
            "parentId": "184",
            "value": "滨城区",
            "layer": "3"
        },
        {
            "id": "1722",
            "parentId": "184",
            "value": "惠民县",
            "layer": "3"
        },
        {
            "id": "1723",
            "parentId": "184",
            "value": "阳信县",
            "layer": "3"
        },
        {
            "id": "1724",
            "parentId": "184",
            "value": "无棣县",
            "layer": "3"
        },
        {
            "id": "1725",
            "parentId": "184",
            "value": "沾化县",
            "layer": "3"
        },
        {
            "id": "1726",
            "parentId": "184",
            "value": "博兴县",
            "layer": "3"
        },
        {
            "id": "1727",
            "parentId": "184",
            "value": "邹平县",
            "layer": "3"
        },
        {
            "id": "1728",
            "parentId": "185",
            "value": "牡丹区",
            "layer": "3"
        },
        {
            "id": "1729",
            "parentId": "185",
            "value": "曹　县",
            "layer": "3"
        },
        {
            "id": "1730",
            "parentId": "185",
            "value": "单　县",
            "layer": "3"
        },
        {
            "id": "1731",
            "parentId": "185",
            "value": "成武县",
            "layer": "3"
        },
        {
            "id": "1732",
            "parentId": "185",
            "value": "巨野县",
            "layer": "3"
        },
        {
            "id": "1733",
            "parentId": "185",
            "value": "郓城县",
            "layer": "3"
        },
        {
            "id": "1734",
            "parentId": "185",
            "value": "鄄城县",
            "layer": "3"
        },
        {
            "id": "1735",
            "parentId": "185",
            "value": "定陶县",
            "layer": "3"
        },
        {
            "id": "1736",
            "parentId": "185",
            "value": "东明县",
            "layer": "3"
        },
        {
            "id": "1737",
            "parentId": "186",
            "value": "中原区",
            "layer": "3"
        },
        {
            "id": "1738",
            "parentId": "186",
            "value": "二七区",
            "layer": "3"
        },
        {
            "id": "1739",
            "parentId": "186",
            "value": "管城回族区",
            "layer": "3"
        },
        {
            "id": "1740",
            "parentId": "186",
            "value": "金水区",
            "layer": "3"
        },
        {
            "id": "1741",
            "parentId": "186",
            "value": "上街区",
            "layer": "3"
        },
        {
            "id": "1742",
            "parentId": "186",
            "value": "邙山区",
            "layer": "3"
        },
        {
            "id": "1743",
            "parentId": "186",
            "value": "中牟县",
            "layer": "3"
        },
        {
            "id": "1744",
            "parentId": "186",
            "value": "巩义市",
            "layer": "3"
        },
        {
            "id": "1745",
            "parentId": "186",
            "value": "荥阳市",
            "layer": "3"
        },
        {
            "id": "1746",
            "parentId": "186",
            "value": "新密市",
            "layer": "3"
        },
        {
            "id": "1747",
            "parentId": "186",
            "value": "新郑市",
            "layer": "3"
        },
        {
            "id": "1748",
            "parentId": "186",
            "value": "登封市",
            "layer": "3"
        },
        {
            "id": "1749",
            "parentId": "187",
            "value": "龙亭区",
            "layer": "3"
        },
        {
            "id": "1750",
            "parentId": "187",
            "value": "顺河回族区",
            "layer": "3"
        },
        {
            "id": "1751",
            "parentId": "187",
            "value": "鼓楼区",
            "layer": "3"
        },
        {
            "id": "1752",
            "parentId": "187",
            "value": "南关区",
            "layer": "3"
        },
        {
            "id": "1753",
            "parentId": "187",
            "value": "郊　区",
            "layer": "3"
        },
        {
            "id": "1754",
            "parentId": "187",
            "value": "杞　县",
            "layer": "3"
        },
        {
            "id": "1755",
            "parentId": "187",
            "value": "通许县",
            "layer": "3"
        },
        {
            "id": "1756",
            "parentId": "187",
            "value": "尉氏县",
            "layer": "3"
        },
        {
            "id": "1757",
            "parentId": "187",
            "value": "开封县",
            "layer": "3"
        },
        {
            "id": "1758",
            "parentId": "187",
            "value": "兰考县",
            "layer": "3"
        },
        {
            "id": "1759",
            "parentId": "188",
            "value": "老城区",
            "layer": "3"
        },
        {
            "id": "1760",
            "parentId": "188",
            "value": "西工区",
            "layer": "3"
        },
        {
            "id": "1761",
            "parentId": "188",
            "value": "廛河回族区",
            "layer": "3"
        },
        {
            "id": "1762",
            "parentId": "188",
            "value": "涧西区",
            "layer": "3"
        },
        {
            "id": "1763",
            "parentId": "188",
            "value": "吉利区",
            "layer": "3"
        },
        {
            "id": "1764",
            "parentId": "188",
            "value": "洛龙区",
            "layer": "3"
        },
        {
            "id": "1765",
            "parentId": "188",
            "value": "孟津县",
            "layer": "3"
        },
        {
            "id": "1766",
            "parentId": "188",
            "value": "新安县",
            "layer": "3"
        },
        {
            "id": "1767",
            "parentId": "188",
            "value": "栾川县",
            "layer": "3"
        },
        {
            "id": "1768",
            "parentId": "188",
            "value": "嵩　县",
            "layer": "3"
        },
        {
            "id": "1769",
            "parentId": "188",
            "value": "汝阳县",
            "layer": "3"
        },
        {
            "id": "1770",
            "parentId": "188",
            "value": "宜阳县",
            "layer": "3"
        },
        {
            "id": "1771",
            "parentId": "188",
            "value": "洛宁县",
            "layer": "3"
        },
        {
            "id": "1772",
            "parentId": "188",
            "value": "伊川县",
            "layer": "3"
        },
        {
            "id": "1773",
            "parentId": "188",
            "value": "偃师市",
            "layer": "3"
        },
        {
            "id": "1774",
            "parentId": "189",
            "value": "新华区",
            "layer": "3"
        },
        {
            "id": "1775",
            "parentId": "189",
            "value": "卫东区",
            "layer": "3"
        },
        {
            "id": "1776",
            "parentId": "189",
            "value": "石龙区",
            "layer": "3"
        },
        {
            "id": "1777",
            "parentId": "189",
            "value": "湛河区",
            "layer": "3"
        },
        {
            "id": "1778",
            "parentId": "189",
            "value": "宝丰县",
            "layer": "3"
        },
        {
            "id": "1779",
            "parentId": "189",
            "value": "叶　县",
            "layer": "3"
        },
        {
            "id": "1780",
            "parentId": "189",
            "value": "鲁山县",
            "layer": "3"
        },
        {
            "id": "1781",
            "parentId": "189",
            "value": "郏　县",
            "layer": "3"
        },
        {
            "id": "1782",
            "parentId": "189",
            "value": "舞钢市",
            "layer": "3"
        },
        {
            "id": "1783",
            "parentId": "189",
            "value": "汝州市",
            "layer": "3"
        },
        {
            "id": "1784",
            "parentId": "190",
            "value": "文峰区",
            "layer": "3"
        },
        {
            "id": "1785",
            "parentId": "190",
            "value": "北关区",
            "layer": "3"
        },
        {
            "id": "1786",
            "parentId": "190",
            "value": "殷都区",
            "layer": "3"
        },
        {
            "id": "1787",
            "parentId": "190",
            "value": "龙安区",
            "layer": "3"
        },
        {
            "id": "1788",
            "parentId": "190",
            "value": "安阳县",
            "layer": "3"
        },
        {
            "id": "1789",
            "parentId": "190",
            "value": "汤阴县",
            "layer": "3"
        },
        {
            "id": "1790",
            "parentId": "190",
            "value": "滑　县",
            "layer": "3"
        },
        {
            "id": "1791",
            "parentId": "190",
            "value": "内黄县",
            "layer": "3"
        },
        {
            "id": "1792",
            "parentId": "190",
            "value": "林州市",
            "layer": "3"
        },
        {
            "id": "1793",
            "parentId": "191",
            "value": "鹤山区",
            "layer": "3"
        },
        {
            "id": "1794",
            "parentId": "191",
            "value": "山城区",
            "layer": "3"
        },
        {
            "id": "1795",
            "parentId": "191",
            "value": "淇滨区",
            "layer": "3"
        },
        {
            "id": "1796",
            "parentId": "191",
            "value": "浚　县",
            "layer": "3"
        },
        {
            "id": "1797",
            "parentId": "191",
            "value": "淇　县",
            "layer": "3"
        },
        {
            "id": "1798",
            "parentId": "192",
            "value": "红旗区",
            "layer": "3"
        },
        {
            "id": "1799",
            "parentId": "192",
            "value": "卫滨区",
            "layer": "3"
        },
        {
            "id": "1800",
            "parentId": "192",
            "value": "凤泉区",
            "layer": "3"
        },
        {
            "id": "1801",
            "parentId": "192",
            "value": "牧野区",
            "layer": "3"
        },
        {
            "id": "1802",
            "parentId": "192",
            "value": "新乡县",
            "layer": "3"
        },
        {
            "id": "1803",
            "parentId": "192",
            "value": "获嘉县",
            "layer": "3"
        },
        {
            "id": "1804",
            "parentId": "192",
            "value": "原阳县",
            "layer": "3"
        },
        {
            "id": "1805",
            "parentId": "192",
            "value": "延津县",
            "layer": "3"
        },
        {
            "id": "1806",
            "parentId": "192",
            "value": "封丘县",
            "layer": "3"
        },
        {
            "id": "1807",
            "parentId": "192",
            "value": "长垣县",
            "layer": "3"
        },
        {
            "id": "1808",
            "parentId": "192",
            "value": "卫辉市",
            "layer": "3"
        },
        {
            "id": "1809",
            "parentId": "192",
            "value": "辉县市",
            "layer": "3"
        },
        {
            "id": "1810",
            "parentId": "193",
            "value": "解放区",
            "layer": "3"
        },
        {
            "id": "1811",
            "parentId": "193",
            "value": "中站区",
            "layer": "3"
        },
        {
            "id": "1812",
            "parentId": "193",
            "value": "马村区",
            "layer": "3"
        },
        {
            "id": "1813",
            "parentId": "193",
            "value": "山阳区",
            "layer": "3"
        },
        {
            "id": "1814",
            "parentId": "193",
            "value": "修武县",
            "layer": "3"
        },
        {
            "id": "1815",
            "parentId": "193",
            "value": "博爱县",
            "layer": "3"
        },
        {
            "id": "1816",
            "parentId": "193",
            "value": "武陟县",
            "layer": "3"
        },
        {
            "id": "1817",
            "parentId": "193",
            "value": "温　县",
            "layer": "3"
        },
        {
            "id": "1818",
            "parentId": "193",
            "value": "济源市",
            "layer": "3"
        },
        {
            "id": "1819",
            "parentId": "193",
            "value": "沁阳市",
            "layer": "3"
        },
        {
            "id": "1820",
            "parentId": "193",
            "value": "孟州市",
            "layer": "3"
        },
        {
            "id": "1821",
            "parentId": "194",
            "value": "华龙区",
            "layer": "3"
        },
        {
            "id": "1822",
            "parentId": "194",
            "value": "清丰县",
            "layer": "3"
        },
        {
            "id": "1823",
            "parentId": "194",
            "value": "南乐县",
            "layer": "3"
        },
        {
            "id": "1824",
            "parentId": "194",
            "value": "范　县",
            "layer": "3"
        },
        {
            "id": "1825",
            "parentId": "194",
            "value": "台前县",
            "layer": "3"
        },
        {
            "id": "1826",
            "parentId": "194",
            "value": "濮阳县",
            "layer": "3"
        },
        {
            "id": "1827",
            "parentId": "195",
            "value": "魏都区",
            "layer": "3"
        },
        {
            "id": "1828",
            "parentId": "195",
            "value": "许昌县",
            "layer": "3"
        },
        {
            "id": "1829",
            "parentId": "195",
            "value": "鄢陵县",
            "layer": "3"
        },
        {
            "id": "1830",
            "parentId": "195",
            "value": "襄城县",
            "layer": "3"
        },
        {
            "id": "1831",
            "parentId": "195",
            "value": "禹州市",
            "layer": "3"
        },
        {
            "id": "1832",
            "parentId": "195",
            "value": "长葛市",
            "layer": "3"
        },
        {
            "id": "1833",
            "parentId": "196",
            "value": "源汇区",
            "layer": "3"
        },
        {
            "id": "1834",
            "parentId": "196",
            "value": "郾城区",
            "layer": "3"
        },
        {
            "id": "1835",
            "parentId": "196",
            "value": "召陵区",
            "layer": "3"
        },
        {
            "id": "1836",
            "parentId": "196",
            "value": "舞阳县",
            "layer": "3"
        },
        {
            "id": "1837",
            "parentId": "196",
            "value": "临颍县",
            "layer": "3"
        },
        {
            "id": "1838",
            "parentId": "197",
            "value": "湖滨区",
            "layer": "3"
        },
        {
            "id": "1839",
            "parentId": "197",
            "value": "渑池县",
            "layer": "3"
        },
        {
            "id": "1840",
            "parentId": "197",
            "value": "陕　县",
            "layer": "3"
        },
        {
            "id": "1841",
            "parentId": "197",
            "value": "卢氏县",
            "layer": "3"
        },
        {
            "id": "1842",
            "parentId": "197",
            "value": "义马市",
            "layer": "3"
        },
        {
            "id": "1843",
            "parentId": "197",
            "value": "灵宝市",
            "layer": "3"
        },
        {
            "id": "1844",
            "parentId": "198",
            "value": "宛城区",
            "layer": "3"
        },
        {
            "id": "1845",
            "parentId": "198",
            "value": "卧龙区",
            "layer": "3"
        },
        {
            "id": "1846",
            "parentId": "198",
            "value": "南召县",
            "layer": "3"
        },
        {
            "id": "1847",
            "parentId": "198",
            "value": "方城县",
            "layer": "3"
        },
        {
            "id": "1848",
            "parentId": "198",
            "value": "西峡县",
            "layer": "3"
        },
        {
            "id": "1849",
            "parentId": "198",
            "value": "镇平县",
            "layer": "3"
        },
        {
            "id": "1850",
            "parentId": "198",
            "value": "内乡县",
            "layer": "3"
        },
        {
            "id": "1851",
            "parentId": "198",
            "value": "淅川县",
            "layer": "3"
        },
        {
            "id": "1852",
            "parentId": "198",
            "value": "社旗县",
            "layer": "3"
        },
        {
            "id": "1853",
            "parentId": "198",
            "value": "唐河县",
            "layer": "3"
        },
        {
            "id": "1854",
            "parentId": "198",
            "value": "新野县",
            "layer": "3"
        },
        {
            "id": "1855",
            "parentId": "198",
            "value": "桐柏县",
            "layer": "3"
        },
        {
            "id": "1856",
            "parentId": "198",
            "value": "邓州市",
            "layer": "3"
        },
        {
            "id": "1857",
            "parentId": "199",
            "value": "梁园区",
            "layer": "3"
        },
        {
            "id": "1858",
            "parentId": "199",
            "value": "睢阳区",
            "layer": "3"
        },
        {
            "id": "1859",
            "parentId": "199",
            "value": "民权县",
            "layer": "3"
        },
        {
            "id": "1860",
            "parentId": "199",
            "value": "睢　县",
            "layer": "3"
        },
        {
            "id": "1861",
            "parentId": "199",
            "value": "宁陵县",
            "layer": "3"
        },
        {
            "id": "1862",
            "parentId": "199",
            "value": "柘城县",
            "layer": "3"
        },
        {
            "id": "1863",
            "parentId": "199",
            "value": "虞城县",
            "layer": "3"
        },
        {
            "id": "1864",
            "parentId": "199",
            "value": "夏邑县",
            "layer": "3"
        },
        {
            "id": "1865",
            "parentId": "199",
            "value": "永城市",
            "layer": "3"
        },
        {
            "id": "1866",
            "parentId": "200",
            "value": "师河区",
            "layer": "3"
        },
        {
            "id": "1867",
            "parentId": "200",
            "value": "平桥区",
            "layer": "3"
        },
        {
            "id": "1868",
            "parentId": "200",
            "value": "罗山县",
            "layer": "3"
        },
        {
            "id": "1869",
            "parentId": "200",
            "value": "光山县",
            "layer": "3"
        },
        {
            "id": "1870",
            "parentId": "200",
            "value": "新　县",
            "layer": "3"
        },
        {
            "id": "1871",
            "parentId": "200",
            "value": "商城县",
            "layer": "3"
        },
        {
            "id": "1872",
            "parentId": "200",
            "value": "固始县",
            "layer": "3"
        },
        {
            "id": "1873",
            "parentId": "200",
            "value": "潢川县",
            "layer": "3"
        },
        {
            "id": "1874",
            "parentId": "200",
            "value": "淮滨县",
            "layer": "3"
        },
        {
            "id": "1875",
            "parentId": "200",
            "value": "息　县",
            "layer": "3"
        },
        {
            "id": "1876",
            "parentId": "201",
            "value": "川汇区",
            "layer": "3"
        },
        {
            "id": "1877",
            "parentId": "201",
            "value": "扶沟县",
            "layer": "3"
        },
        {
            "id": "1878",
            "parentId": "201",
            "value": "西华县",
            "layer": "3"
        },
        {
            "id": "1879",
            "parentId": "201",
            "value": "商水县",
            "layer": "3"
        },
        {
            "id": "1880",
            "parentId": "201",
            "value": "沈丘县",
            "layer": "3"
        },
        {
            "id": "1881",
            "parentId": "201",
            "value": "郸城县",
            "layer": "3"
        },
        {
            "id": "1882",
            "parentId": "201",
            "value": "淮阳县",
            "layer": "3"
        },
        {
            "id": "1883",
            "parentId": "201",
            "value": "太康县",
            "layer": "3"
        },
        {
            "id": "1884",
            "parentId": "201",
            "value": "鹿邑县",
            "layer": "3"
        },
        {
            "id": "1885",
            "parentId": "201",
            "value": "项城市",
            "layer": "3"
        },
        {
            "id": "1886",
            "parentId": "202",
            "value": "驿城区",
            "layer": "3"
        },
        {
            "id": "1887",
            "parentId": "202",
            "value": "西平县",
            "layer": "3"
        },
        {
            "id": "1888",
            "parentId": "202",
            "value": "上蔡县",
            "layer": "3"
        },
        {
            "id": "1889",
            "parentId": "202",
            "value": "平舆县",
            "layer": "3"
        },
        {
            "id": "1890",
            "parentId": "202",
            "value": "正阳县",
            "layer": "3"
        },
        {
            "id": "1891",
            "parentId": "202",
            "value": "确山县",
            "layer": "3"
        },
        {
            "id": "1892",
            "parentId": "202",
            "value": "泌阳县",
            "layer": "3"
        },
        {
            "id": "1893",
            "parentId": "202",
            "value": "汝南县",
            "layer": "3"
        },
        {
            "id": "1894",
            "parentId": "202",
            "value": "遂平县",
            "layer": "3"
        },
        {
            "id": "1895",
            "parentId": "202",
            "value": "新蔡县",
            "layer": "3"
        },
        {
            "id": "1896",
            "parentId": "203",
            "value": "江岸区",
            "layer": "3"
        },
        {
            "id": "1897",
            "parentId": "203",
            "value": "江汉区",
            "layer": "3"
        },
        {
            "id": "1898",
            "parentId": "203",
            "value": "乔口区",
            "layer": "3"
        },
        {
            "id": "1899",
            "parentId": "203",
            "value": "汉阳区",
            "layer": "3"
        },
        {
            "id": "1900",
            "parentId": "203",
            "value": "武昌区",
            "layer": "3"
        },
        {
            "id": "1901",
            "parentId": "203",
            "value": "青山区",
            "layer": "3"
        },
        {
            "id": "1902",
            "parentId": "203",
            "value": "洪山区",
            "layer": "3"
        },
        {
            "id": "1903",
            "parentId": "203",
            "value": "东西湖区",
            "layer": "3"
        },
        {
            "id": "1904",
            "parentId": "203",
            "value": "汉南区",
            "layer": "3"
        },
        {
            "id": "1905",
            "parentId": "203",
            "value": "蔡甸区",
            "layer": "3"
        },
        {
            "id": "1906",
            "parentId": "203",
            "value": "江夏区",
            "layer": "3"
        },
        {
            "id": "1907",
            "parentId": "203",
            "value": "黄陂区",
            "layer": "3"
        },
        {
            "id": "1908",
            "parentId": "203",
            "value": "新洲区",
            "layer": "3"
        },
        {
            "id": "1909",
            "parentId": "204",
            "value": "黄石港区",
            "layer": "3"
        },
        {
            "id": "1910",
            "parentId": "204",
            "value": "西塞山区",
            "layer": "3"
        },
        {
            "id": "1911",
            "parentId": "204",
            "value": "下陆区",
            "layer": "3"
        },
        {
            "id": "1912",
            "parentId": "204",
            "value": "铁山区",
            "layer": "3"
        },
        {
            "id": "1913",
            "parentId": "204",
            "value": "阳新县",
            "layer": "3"
        },
        {
            "id": "1914",
            "parentId": "204",
            "value": "大冶市",
            "layer": "3"
        },
        {
            "id": "1915",
            "parentId": "205",
            "value": "茅箭区",
            "layer": "3"
        },
        {
            "id": "1916",
            "parentId": "205",
            "value": "张湾区",
            "layer": "3"
        },
        {
            "id": "1917",
            "parentId": "205",
            "value": "郧　县",
            "layer": "3"
        },
        {
            "id": "1918",
            "parentId": "205",
            "value": "郧西县",
            "layer": "3"
        },
        {
            "id": "1919",
            "parentId": "205",
            "value": "竹山县",
            "layer": "3"
        },
        {
            "id": "1920",
            "parentId": "205",
            "value": "竹溪县",
            "layer": "3"
        },
        {
            "id": "1921",
            "parentId": "205",
            "value": "房　县",
            "layer": "3"
        },
        {
            "id": "1922",
            "parentId": "205",
            "value": "丹江口市",
            "layer": "3"
        },
        {
            "id": "1923",
            "parentId": "206",
            "value": "西陵区",
            "layer": "3"
        },
        {
            "id": "1924",
            "parentId": "206",
            "value": "伍家岗区",
            "layer": "3"
        },
        {
            "id": "1925",
            "parentId": "206",
            "value": "点军区",
            "layer": "3"
        },
        {
            "id": "1926",
            "parentId": "206",
            "value": "猇亭区",
            "layer": "3"
        },
        {
            "id": "1927",
            "parentId": "206",
            "value": "夷陵区",
            "layer": "3"
        },
        {
            "id": "1928",
            "parentId": "206",
            "value": "远安县",
            "layer": "3"
        },
        {
            "id": "1929",
            "parentId": "206",
            "value": "兴山县",
            "layer": "3"
        },
        {
            "id": "1930",
            "parentId": "206",
            "value": "秭归县",
            "layer": "3"
        },
        {
            "id": "1931",
            "parentId": "206",
            "value": "长阳土家族自治县",
            "layer": "3"
        },
        {
            "id": "1932",
            "parentId": "206",
            "value": "五峰土家族自治县",
            "layer": "3"
        },
        {
            "id": "1933",
            "parentId": "206",
            "value": "宜都市",
            "layer": "3"
        },
        {
            "id": "1934",
            "parentId": "206",
            "value": "当阳市",
            "layer": "3"
        },
        {
            "id": "1935",
            "parentId": "206",
            "value": "枝江市",
            "layer": "3"
        },
        {
            "id": "1936",
            "parentId": "207",
            "value": "襄城区",
            "layer": "3"
        },
        {
            "id": "1937",
            "parentId": "207",
            "value": "樊城区",
            "layer": "3"
        },
        {
            "id": "1938",
            "parentId": "207",
            "value": "襄阳区",
            "layer": "3"
        },
        {
            "id": "1939",
            "parentId": "207",
            "value": "南漳县",
            "layer": "3"
        },
        {
            "id": "1940",
            "parentId": "207",
            "value": "谷城县",
            "layer": "3"
        },
        {
            "id": "1941",
            "parentId": "207",
            "value": "保康县",
            "layer": "3"
        },
        {
            "id": "1942",
            "parentId": "207",
            "value": "老河口市",
            "layer": "3"
        },
        {
            "id": "1943",
            "parentId": "207",
            "value": "枣阳市",
            "layer": "3"
        },
        {
            "id": "1944",
            "parentId": "207",
            "value": "宜城市",
            "layer": "3"
        },
        {
            "id": "1945",
            "parentId": "208",
            "value": "梁子湖区",
            "layer": "3"
        },
        {
            "id": "1946",
            "parentId": "208",
            "value": "华容区",
            "layer": "3"
        },
        {
            "id": "1947",
            "parentId": "208",
            "value": "鄂城区",
            "layer": "3"
        },
        {
            "id": "1948",
            "parentId": "209",
            "value": "东宝区",
            "layer": "3"
        },
        {
            "id": "1949",
            "parentId": "209",
            "value": "掇刀区",
            "layer": "3"
        },
        {
            "id": "1950",
            "parentId": "209",
            "value": "京山县",
            "layer": "3"
        },
        {
            "id": "1951",
            "parentId": "209",
            "value": "沙洋县",
            "layer": "3"
        },
        {
            "id": "1952",
            "parentId": "209",
            "value": "钟祥市",
            "layer": "3"
        },
        {
            "id": "1953",
            "parentId": "210",
            "value": "孝南区",
            "layer": "3"
        },
        {
            "id": "1954",
            "parentId": "210",
            "value": "孝昌县",
            "layer": "3"
        },
        {
            "id": "1955",
            "parentId": "210",
            "value": "大悟县",
            "layer": "3"
        },
        {
            "id": "1956",
            "parentId": "210",
            "value": "云梦县",
            "layer": "3"
        },
        {
            "id": "1957",
            "parentId": "210",
            "value": "应城市",
            "layer": "3"
        },
        {
            "id": "1958",
            "parentId": "210",
            "value": "安陆市",
            "layer": "3"
        },
        {
            "id": "1959",
            "parentId": "210",
            "value": "汉川市",
            "layer": "3"
        },
        {
            "id": "1960",
            "parentId": "211",
            "value": "沙市区",
            "layer": "3"
        },
        {
            "id": "1961",
            "parentId": "211",
            "value": "荆州区",
            "layer": "3"
        },
        {
            "id": "1962",
            "parentId": "211",
            "value": "公安县",
            "layer": "3"
        },
        {
            "id": "1963",
            "parentId": "211",
            "value": "监利县",
            "layer": "3"
        },
        {
            "id": "1964",
            "parentId": "211",
            "value": "江陵县",
            "layer": "3"
        },
        {
            "id": "1965",
            "parentId": "211",
            "value": "石首市",
            "layer": "3"
        },
        {
            "id": "1966",
            "parentId": "211",
            "value": "洪湖市",
            "layer": "3"
        },
        {
            "id": "1967",
            "parentId": "211",
            "value": "松滋市",
            "layer": "3"
        },
        {
            "id": "1968",
            "parentId": "212",
            "value": "黄州区",
            "layer": "3"
        },
        {
            "id": "1969",
            "parentId": "212",
            "value": "团风县",
            "layer": "3"
        },
        {
            "id": "1970",
            "parentId": "212",
            "value": "红安县",
            "layer": "3"
        },
        {
            "id": "1971",
            "parentId": "212",
            "value": "罗田县",
            "layer": "3"
        },
        {
            "id": "1972",
            "parentId": "212",
            "value": "英山县",
            "layer": "3"
        },
        {
            "id": "1973",
            "parentId": "212",
            "value": "浠水县",
            "layer": "3"
        },
        {
            "id": "1974",
            "parentId": "212",
            "value": "蕲春县",
            "layer": "3"
        },
        {
            "id": "1975",
            "parentId": "212",
            "value": "黄梅县",
            "layer": "3"
        },
        {
            "id": "1976",
            "parentId": "212",
            "value": "麻城市",
            "layer": "3"
        },
        {
            "id": "1977",
            "parentId": "212",
            "value": "武穴市",
            "layer": "3"
        },
        {
            "id": "1978",
            "parentId": "213",
            "value": "咸安区",
            "layer": "3"
        },
        {
            "id": "1979",
            "parentId": "213",
            "value": "嘉鱼县",
            "layer": "3"
        },
        {
            "id": "1980",
            "parentId": "213",
            "value": "通城县",
            "layer": "3"
        },
        {
            "id": "1981",
            "parentId": "213",
            "value": "崇阳县",
            "layer": "3"
        },
        {
            "id": "1982",
            "parentId": "213",
            "value": "通山县",
            "layer": "3"
        },
        {
            "id": "1983",
            "parentId": "213",
            "value": "赤壁市",
            "layer": "3"
        },
        {
            "id": "1984",
            "parentId": "214",
            "value": "曾都区",
            "layer": "3"
        },
        {
            "id": "1985",
            "parentId": "214",
            "value": "广水市",
            "layer": "3"
        },
        {
            "id": "1986",
            "parentId": "215",
            "value": "恩施市",
            "layer": "3"
        },
        {
            "id": "1987",
            "parentId": "215",
            "value": "利川市",
            "layer": "3"
        },
        {
            "id": "1988",
            "parentId": "215",
            "value": "建始县",
            "layer": "3"
        },
        {
            "id": "1989",
            "parentId": "215",
            "value": "巴东县",
            "layer": "3"
        },
        {
            "id": "1990",
            "parentId": "215",
            "value": "宣恩县",
            "layer": "3"
        },
        {
            "id": "1991",
            "parentId": "215",
            "value": "咸丰县",
            "layer": "3"
        },
        {
            "id": "1992",
            "parentId": "215",
            "value": "来凤县",
            "layer": "3"
        },
        {
            "id": "1993",
            "parentId": "215",
            "value": "鹤峰县",
            "layer": "3"
        },
        {
            "id": "1994",
            "parentId": "216",
            "value": "仙桃市",
            "layer": "3"
        },
        {
            "id": "1995",
            "parentId": "17",
            "value": "天门市",
            "layer": "2"
        },
        {
            "id": "1996",
            "parentId": "17",
            "value": "潜江市",
            "layer": "2"
        },
        {
            "id": "1997",
            "parentId": "17",
            "value": "神农架林区",
            "layer": "2"
        },
        {
            "id": "1998",
            "parentId": "217",
            "value": "芙蓉区",
            "layer": "3"
        },
        {
            "id": "1999",
            "parentId": "217",
            "value": "天心区",
            "layer": "3"
        },
        {
            "id": "2000",
            "parentId": "217",
            "value": "岳麓区",
            "layer": "3"
        },
        {
            "id": "2001",
            "parentId": "217",
            "value": "开福区",
            "layer": "3"
        },
        {
            "id": "2002",
            "parentId": "217",
            "value": "雨花区",
            "layer": "3"
        },
        {
            "id": "2003",
            "parentId": "217",
            "value": "长沙县",
            "layer": "3"
        },
        {
            "id": "2004",
            "parentId": "217",
            "value": "望城县",
            "layer": "3"
        },
        {
            "id": "2005",
            "parentId": "217",
            "value": "宁乡县",
            "layer": "3"
        },
        {
            "id": "2006",
            "parentId": "217",
            "value": "浏阳市",
            "layer": "3"
        },
        {
            "id": "2007",
            "parentId": "218",
            "value": "荷塘区",
            "layer": "3"
        },
        {
            "id": "2008",
            "parentId": "218",
            "value": "芦淞区",
            "layer": "3"
        },
        {
            "id": "2009",
            "parentId": "218",
            "value": "石峰区",
            "layer": "3"
        },
        {
            "id": "2010",
            "parentId": "218",
            "value": "天元区",
            "layer": "3"
        },
        {
            "id": "2011",
            "parentId": "218",
            "value": "株洲县",
            "layer": "3"
        },
        {
            "id": "2012",
            "parentId": "218",
            "value": "攸　县",
            "layer": "3"
        },
        {
            "id": "2013",
            "parentId": "218",
            "value": "茶陵县",
            "layer": "3"
        },
        {
            "id": "2014",
            "parentId": "218",
            "value": "炎陵县",
            "layer": "3"
        },
        {
            "id": "2015",
            "parentId": "218",
            "value": "醴陵市",
            "layer": "3"
        },
        {
            "id": "2016",
            "parentId": "219",
            "value": "雨湖区",
            "layer": "3"
        },
        {
            "id": "2017",
            "parentId": "219",
            "value": "岳塘区",
            "layer": "3"
        },
        {
            "id": "2018",
            "parentId": "219",
            "value": "湘潭县",
            "layer": "3"
        },
        {
            "id": "2019",
            "parentId": "219",
            "value": "湘乡市",
            "layer": "3"
        },
        {
            "id": "2020",
            "parentId": "219",
            "value": "韶山市",
            "layer": "3"
        },
        {
            "id": "2021",
            "parentId": "220",
            "value": "珠晖区",
            "layer": "3"
        },
        {
            "id": "2022",
            "parentId": "220",
            "value": "雁峰区",
            "layer": "3"
        },
        {
            "id": "2023",
            "parentId": "220",
            "value": "石鼓区",
            "layer": "3"
        },
        {
            "id": "2024",
            "parentId": "220",
            "value": "蒸湘区",
            "layer": "3"
        },
        {
            "id": "2025",
            "parentId": "220",
            "value": "南岳区",
            "layer": "3"
        },
        {
            "id": "2026",
            "parentId": "220",
            "value": "衡阳县",
            "layer": "3"
        },
        {
            "id": "2027",
            "parentId": "220",
            "value": "衡南县",
            "layer": "3"
        },
        {
            "id": "2028",
            "parentId": "220",
            "value": "衡山县",
            "layer": "3"
        },
        {
            "id": "2029",
            "parentId": "220",
            "value": "衡东县",
            "layer": "3"
        },
        {
            "id": "2030",
            "parentId": "220",
            "value": "祁东县",
            "layer": "3"
        },
        {
            "id": "2031",
            "parentId": "220",
            "value": "耒阳市",
            "layer": "3"
        },
        {
            "id": "2032",
            "parentId": "220",
            "value": "常宁市",
            "layer": "3"
        },
        {
            "id": "2033",
            "parentId": "221",
            "value": "双清区",
            "layer": "3"
        },
        {
            "id": "2034",
            "parentId": "221",
            "value": "大祥区",
            "layer": "3"
        },
        {
            "id": "2035",
            "parentId": "221",
            "value": "北塔区",
            "layer": "3"
        },
        {
            "id": "2036",
            "parentId": "221",
            "value": "邵东县",
            "layer": "3"
        },
        {
            "id": "2037",
            "parentId": "221",
            "value": "新邵县",
            "layer": "3"
        },
        {
            "id": "2038",
            "parentId": "221",
            "value": "邵阳县",
            "layer": "3"
        },
        {
            "id": "2039",
            "parentId": "221",
            "value": "隆回县",
            "layer": "3"
        },
        {
            "id": "2040",
            "parentId": "221",
            "value": "洞口县",
            "layer": "3"
        },
        {
            "id": "2041",
            "parentId": "221",
            "value": "绥宁县",
            "layer": "3"
        },
        {
            "id": "2042",
            "parentId": "221",
            "value": "新宁县",
            "layer": "3"
        },
        {
            "id": "2043",
            "parentId": "221",
            "value": "城步苗族自治县",
            "layer": "3"
        },
        {
            "id": "2044",
            "parentId": "221",
            "value": "武冈市",
            "layer": "3"
        },
        {
            "id": "2045",
            "parentId": "222",
            "value": "岳阳楼区",
            "layer": "3"
        },
        {
            "id": "2046",
            "parentId": "222",
            "value": "云溪区",
            "layer": "3"
        },
        {
            "id": "2047",
            "parentId": "222",
            "value": "君山区",
            "layer": "3"
        },
        {
            "id": "2048",
            "parentId": "222",
            "value": "岳阳县",
            "layer": "3"
        },
        {
            "id": "2049",
            "parentId": "222",
            "value": "华容县",
            "layer": "3"
        },
        {
            "id": "2050",
            "parentId": "222",
            "value": "湘阴县",
            "layer": "3"
        },
        {
            "id": "2051",
            "parentId": "222",
            "value": "平江县",
            "layer": "3"
        },
        {
            "id": "2052",
            "parentId": "222",
            "value": "汨罗市",
            "layer": "3"
        },
        {
            "id": "2053",
            "parentId": "222",
            "value": "临湘市",
            "layer": "3"
        },
        {
            "id": "2054",
            "parentId": "223",
            "value": "武陵区",
            "layer": "3"
        },
        {
            "id": "2055",
            "parentId": "223",
            "value": "鼎城区",
            "layer": "3"
        },
        {
            "id": "2056",
            "parentId": "223",
            "value": "安乡县",
            "layer": "3"
        },
        {
            "id": "2057",
            "parentId": "223",
            "value": "汉寿县",
            "layer": "3"
        },
        {
            "id": "2058",
            "parentId": "223",
            "value": "澧　县",
            "layer": "3"
        },
        {
            "id": "2059",
            "parentId": "223",
            "value": "临澧县",
            "layer": "3"
        },
        {
            "id": "2060",
            "parentId": "223",
            "value": "桃源县",
            "layer": "3"
        },
        {
            "id": "2061",
            "parentId": "223",
            "value": "石门县",
            "layer": "3"
        },
        {
            "id": "2062",
            "parentId": "223",
            "value": "津市市",
            "layer": "3"
        },
        {
            "id": "2063",
            "parentId": "224",
            "value": "永定区",
            "layer": "3"
        },
        {
            "id": "2064",
            "parentId": "224",
            "value": "武陵源区",
            "layer": "3"
        },
        {
            "id": "2065",
            "parentId": "224",
            "value": "慈利县",
            "layer": "3"
        },
        {
            "id": "2066",
            "parentId": "224",
            "value": "桑植县",
            "layer": "3"
        },
        {
            "id": "2067",
            "parentId": "225",
            "value": "资阳区",
            "layer": "3"
        },
        {
            "id": "2068",
            "parentId": "225",
            "value": "赫山区",
            "layer": "3"
        },
        {
            "id": "2069",
            "parentId": "225",
            "value": "南　县",
            "layer": "3"
        },
        {
            "id": "2070",
            "parentId": "225",
            "value": "桃江县",
            "layer": "3"
        },
        {
            "id": "2071",
            "parentId": "225",
            "value": "安化县",
            "layer": "3"
        },
        {
            "id": "2072",
            "parentId": "225",
            "value": "沅江市",
            "layer": "3"
        },
        {
            "id": "2073",
            "parentId": "226",
            "value": "北湖区",
            "layer": "3"
        },
        {
            "id": "2074",
            "parentId": "226",
            "value": "苏仙区",
            "layer": "3"
        },
        {
            "id": "2075",
            "parentId": "226",
            "value": "桂阳县",
            "layer": "3"
        },
        {
            "id": "2076",
            "parentId": "226",
            "value": "宜章县",
            "layer": "3"
        },
        {
            "id": "2077",
            "parentId": "226",
            "value": "永兴县",
            "layer": "3"
        },
        {
            "id": "2078",
            "parentId": "226",
            "value": "嘉禾县",
            "layer": "3"
        },
        {
            "id": "2079",
            "parentId": "226",
            "value": "临武县",
            "layer": "3"
        },
        {
            "id": "2080",
            "parentId": "226",
            "value": "汝城县",
            "layer": "3"
        },
        {
            "id": "2081",
            "parentId": "226",
            "value": "桂东县",
            "layer": "3"
        },
        {
            "id": "2082",
            "parentId": "226",
            "value": "安仁县",
            "layer": "3"
        },
        {
            "id": "2083",
            "parentId": "226",
            "value": "资兴市",
            "layer": "3"
        },
        {
            "id": "2084",
            "parentId": "227",
            "value": "芝山区",
            "layer": "3"
        },
        {
            "id": "2085",
            "parentId": "227",
            "value": "冷水滩区",
            "layer": "3"
        },
        {
            "id": "2086",
            "parentId": "227",
            "value": "祁阳县",
            "layer": "3"
        },
        {
            "id": "2087",
            "parentId": "227",
            "value": "东安县",
            "layer": "3"
        },
        {
            "id": "2088",
            "parentId": "227",
            "value": "双牌县",
            "layer": "3"
        },
        {
            "id": "2089",
            "parentId": "227",
            "value": "道　县",
            "layer": "3"
        },
        {
            "id": "2090",
            "parentId": "227",
            "value": "江永县",
            "layer": "3"
        },
        {
            "id": "2091",
            "parentId": "227",
            "value": "宁远县",
            "layer": "3"
        },
        {
            "id": "2092",
            "parentId": "227",
            "value": "蓝山县",
            "layer": "3"
        },
        {
            "id": "2093",
            "parentId": "227",
            "value": "新田县",
            "layer": "3"
        },
        {
            "id": "2094",
            "parentId": "227",
            "value": "江华瑶族自治县",
            "layer": "3"
        },
        {
            "id": "2095",
            "parentId": "228",
            "value": "鹤城区",
            "layer": "3"
        },
        {
            "id": "2096",
            "parentId": "228",
            "value": "中方县",
            "layer": "3"
        },
        {
            "id": "2097",
            "parentId": "228",
            "value": "沅陵县",
            "layer": "3"
        },
        {
            "id": "2098",
            "parentId": "228",
            "value": "辰溪县",
            "layer": "3"
        },
        {
            "id": "2099",
            "parentId": "228",
            "value": "溆浦县",
            "layer": "3"
        },
        {
            "id": "2100",
            "parentId": "228",
            "value": "会同县",
            "layer": "3"
        },
        {
            "id": "2101",
            "parentId": "228",
            "value": "麻阳苗族自治县",
            "layer": "3"
        },
        {
            "id": "2102",
            "parentId": "228",
            "value": "新晃侗族自治县",
            "layer": "3"
        },
        {
            "id": "2103",
            "parentId": "228",
            "value": "芷江侗族自治县",
            "layer": "3"
        },
        {
            "id": "2104",
            "parentId": "228",
            "value": "靖州苗族侗族自治县",
            "layer": "3"
        },
        {
            "id": "2105",
            "parentId": "228",
            "value": "通道侗族自治县",
            "layer": "3"
        },
        {
            "id": "2106",
            "parentId": "228",
            "value": "洪江市",
            "layer": "3"
        },
        {
            "id": "2107",
            "parentId": "229",
            "value": "娄星区",
            "layer": "3"
        },
        {
            "id": "2108",
            "parentId": "229",
            "value": "双峰县",
            "layer": "3"
        },
        {
            "id": "2109",
            "parentId": "229",
            "value": "新化县",
            "layer": "3"
        },
        {
            "id": "2110",
            "parentId": "229",
            "value": "冷水江市",
            "layer": "3"
        },
        {
            "id": "2111",
            "parentId": "229",
            "value": "涟源市",
            "layer": "3"
        },
        {
            "id": "2112",
            "parentId": "230",
            "value": "吉首市",
            "layer": "3"
        },
        {
            "id": "2113",
            "parentId": "230",
            "value": "泸溪县",
            "layer": "3"
        },
        {
            "id": "2114",
            "parentId": "230",
            "value": "凤凰县",
            "layer": "3"
        },
        {
            "id": "2115",
            "parentId": "230",
            "value": "花垣县",
            "layer": "3"
        },
        {
            "id": "2116",
            "parentId": "230",
            "value": "保靖县",
            "layer": "3"
        },
        {
            "id": "2117",
            "parentId": "230",
            "value": "古丈县",
            "layer": "3"
        },
        {
            "id": "2118",
            "parentId": "230",
            "value": "永顺县",
            "layer": "3"
        },
        {
            "id": "2119",
            "parentId": "230",
            "value": "龙山县",
            "layer": "3"
        },
        {
            "id": "2120",
            "parentId": "231",
            "value": "东山区",
            "layer": "3"
        },
        {
            "id": "2121",
            "parentId": "231",
            "value": "荔湾区",
            "layer": "3"
        },
        {
            "id": "2122",
            "parentId": "231",
            "value": "越秀区",
            "layer": "3"
        },
        {
            "id": "2123",
            "parentId": "231",
            "value": "海珠区",
            "layer": "3"
        },
        {
            "id": "2124",
            "parentId": "231",
            "value": "天河区",
            "layer": "3"
        },
        {
            "id": "2125",
            "parentId": "231",
            "value": "芳村区",
            "layer": "3"
        },
        {
            "id": "2126",
            "parentId": "231",
            "value": "白云区",
            "layer": "3"
        },
        {
            "id": "2127",
            "parentId": "231",
            "value": "黄埔区",
            "layer": "3"
        },
        {
            "id": "2128",
            "parentId": "231",
            "value": "番禺区",
            "layer": "3"
        },
        {
            "id": "2129",
            "parentId": "231",
            "value": "花都区",
            "layer": "3"
        },
        {
            "id": "2130",
            "parentId": "231",
            "value": "增城市",
            "layer": "3"
        },
        {
            "id": "2131",
            "parentId": "231",
            "value": "从化市",
            "layer": "3"
        },
        {
            "id": "2132",
            "parentId": "232",
            "value": "武江区",
            "layer": "3"
        },
        {
            "id": "2133",
            "parentId": "232",
            "value": "浈江区",
            "layer": "3"
        },
        {
            "id": "2134",
            "parentId": "232",
            "value": "曲江区",
            "layer": "3"
        },
        {
            "id": "2135",
            "parentId": "232",
            "value": "始兴县",
            "layer": "3"
        },
        {
            "id": "2136",
            "parentId": "232",
            "value": "仁化县",
            "layer": "3"
        },
        {
            "id": "2137",
            "parentId": "232",
            "value": "翁源县",
            "layer": "3"
        },
        {
            "id": "2138",
            "parentId": "232",
            "value": "乳源瑶族自治县",
            "layer": "3"
        },
        {
            "id": "2139",
            "parentId": "232",
            "value": "新丰县",
            "layer": "3"
        },
        {
            "id": "2140",
            "parentId": "232",
            "value": "乐昌市",
            "layer": "3"
        },
        {
            "id": "2141",
            "parentId": "232",
            "value": "南雄市",
            "layer": "3"
        },
        {
            "id": "2142",
            "parentId": "233",
            "value": "罗湖区",
            "layer": "3"
        },
        {
            "id": "2143",
            "parentId": "233",
            "value": "福田区",
            "layer": "3"
        },
        {
            "id": "2144",
            "parentId": "233",
            "value": "南山区",
            "layer": "3"
        },
        {
            "id": "2145",
            "parentId": "233",
            "value": "宝安区",
            "layer": "3"
        },
        {
            "id": "2146",
            "parentId": "233",
            "value": "龙岗区",
            "layer": "3"
        },
        {
            "id": "2147",
            "parentId": "233",
            "value": "盐田区",
            "layer": "3"
        },
        {
            "id": "2148",
            "parentId": "234",
            "value": "香洲区",
            "layer": "3"
        },
        {
            "id": "2149",
            "parentId": "234",
            "value": "斗门区",
            "layer": "3"
        },
        {
            "id": "2150",
            "parentId": "234",
            "value": "金湾区",
            "layer": "3"
        },
        {
            "id": "2151",
            "parentId": "235",
            "value": "龙湖区",
            "layer": "3"
        },
        {
            "id": "2152",
            "parentId": "235",
            "value": "金平区",
            "layer": "3"
        },
        {
            "id": "2153",
            "parentId": "235",
            "value": "濠江区",
            "layer": "3"
        },
        {
            "id": "2154",
            "parentId": "235",
            "value": "潮阳区",
            "layer": "3"
        },
        {
            "id": "2155",
            "parentId": "235",
            "value": "潮南区",
            "layer": "3"
        },
        {
            "id": "2156",
            "parentId": "235",
            "value": "澄海区",
            "layer": "3"
        },
        {
            "id": "2157",
            "parentId": "235",
            "value": "南澳县",
            "layer": "3"
        },
        {
            "id": "2158",
            "parentId": "236",
            "value": "禅城区",
            "layer": "3"
        },
        {
            "id": "2159",
            "parentId": "236",
            "value": "南海区",
            "layer": "3"
        },
        {
            "id": "2160",
            "parentId": "236",
            "value": "顺德区",
            "layer": "3"
        },
        {
            "id": "2161",
            "parentId": "236",
            "value": "三水区",
            "layer": "3"
        },
        {
            "id": "2162",
            "parentId": "236",
            "value": "高明区",
            "layer": "3"
        },
        {
            "id": "2163",
            "parentId": "237",
            "value": "蓬江区",
            "layer": "3"
        },
        {
            "id": "2164",
            "parentId": "237",
            "value": "江海区",
            "layer": "3"
        },
        {
            "id": "2165",
            "parentId": "237",
            "value": "新会区",
            "layer": "3"
        },
        {
            "id": "2166",
            "parentId": "237",
            "value": "台山市",
            "layer": "3"
        },
        {
            "id": "2167",
            "parentId": "237",
            "value": "开平市",
            "layer": "3"
        },
        {
            "id": "2168",
            "parentId": "237",
            "value": "鹤山市",
            "layer": "3"
        },
        {
            "id": "2169",
            "parentId": "237",
            "value": "恩平市",
            "layer": "3"
        },
        {
            "id": "2170",
            "parentId": "238",
            "value": "赤坎区",
            "layer": "3"
        },
        {
            "id": "2171",
            "parentId": "238",
            "value": "霞山区",
            "layer": "3"
        },
        {
            "id": "2172",
            "parentId": "238",
            "value": "坡头区",
            "layer": "3"
        },
        {
            "id": "2173",
            "parentId": "238",
            "value": "麻章区",
            "layer": "3"
        },
        {
            "id": "2174",
            "parentId": "238",
            "value": "遂溪县",
            "layer": "3"
        },
        {
            "id": "2175",
            "parentId": "238",
            "value": "徐闻县",
            "layer": "3"
        },
        {
            "id": "2176",
            "parentId": "238",
            "value": "廉江市",
            "layer": "3"
        },
        {
            "id": "2177",
            "parentId": "238",
            "value": "雷州市",
            "layer": "3"
        },
        {
            "id": "2178",
            "parentId": "238",
            "value": "吴川市",
            "layer": "3"
        },
        {
            "id": "2179",
            "parentId": "239",
            "value": "茂南区",
            "layer": "3"
        },
        {
            "id": "2180",
            "parentId": "239",
            "value": "茂港区",
            "layer": "3"
        },
        {
            "id": "2181",
            "parentId": "239",
            "value": "电白县",
            "layer": "3"
        },
        {
            "id": "2182",
            "parentId": "239",
            "value": "高州市",
            "layer": "3"
        },
        {
            "id": "2183",
            "parentId": "239",
            "value": "化州市",
            "layer": "3"
        },
        {
            "id": "2184",
            "parentId": "239",
            "value": "信宜市",
            "layer": "3"
        },
        {
            "id": "2185",
            "parentId": "240",
            "value": "端州区",
            "layer": "3"
        },
        {
            "id": "2186",
            "parentId": "240",
            "value": "鼎湖区",
            "layer": "3"
        },
        {
            "id": "2187",
            "parentId": "240",
            "value": "广宁县",
            "layer": "3"
        },
        {
            "id": "2188",
            "parentId": "240",
            "value": "怀集县",
            "layer": "3"
        },
        {
            "id": "2189",
            "parentId": "240",
            "value": "封开县",
            "layer": "3"
        },
        {
            "id": "2190",
            "parentId": "240",
            "value": "德庆县",
            "layer": "3"
        },
        {
            "id": "2191",
            "parentId": "240",
            "value": "高要市",
            "layer": "3"
        },
        {
            "id": "2192",
            "parentId": "240",
            "value": "四会市",
            "layer": "3"
        },
        {
            "id": "2193",
            "parentId": "241",
            "value": "惠城区",
            "layer": "3"
        },
        {
            "id": "2194",
            "parentId": "241",
            "value": "惠阳区",
            "layer": "3"
        },
        {
            "id": "2195",
            "parentId": "241",
            "value": "博罗县",
            "layer": "3"
        },
        {
            "id": "2196",
            "parentId": "241",
            "value": "惠东县",
            "layer": "3"
        },
        {
            "id": "2197",
            "parentId": "241",
            "value": "龙门县",
            "layer": "3"
        },
        {
            "id": "2198",
            "parentId": "242",
            "value": "梅江区",
            "layer": "3"
        },
        {
            "id": "2199",
            "parentId": "242",
            "value": "梅　县",
            "layer": "3"
        },
        {
            "id": "2200",
            "parentId": "242",
            "value": "大埔县",
            "layer": "3"
        },
        {
            "id": "2201",
            "parentId": "242",
            "value": "丰顺县",
            "layer": "3"
        },
        {
            "id": "2202",
            "parentId": "242",
            "value": "五华县",
            "layer": "3"
        },
        {
            "id": "2203",
            "parentId": "242",
            "value": "平远县",
            "layer": "3"
        },
        {
            "id": "2204",
            "parentId": "242",
            "value": "蕉岭县",
            "layer": "3"
        },
        {
            "id": "2205",
            "parentId": "242",
            "value": "兴宁市",
            "layer": "3"
        },
        {
            "id": "2206",
            "parentId": "243",
            "value": "城　区",
            "layer": "3"
        },
        {
            "id": "2207",
            "parentId": "243",
            "value": "海丰县",
            "layer": "3"
        },
        {
            "id": "2208",
            "parentId": "243",
            "value": "陆河县",
            "layer": "3"
        },
        {
            "id": "2209",
            "parentId": "243",
            "value": "陆丰市",
            "layer": "3"
        },
        {
            "id": "2210",
            "parentId": "244",
            "value": "源城区",
            "layer": "3"
        },
        {
            "id": "2211",
            "parentId": "244",
            "value": "紫金县",
            "layer": "3"
        },
        {
            "id": "2212",
            "parentId": "244",
            "value": "龙川县",
            "layer": "3"
        },
        {
            "id": "2213",
            "parentId": "244",
            "value": "连平县",
            "layer": "3"
        },
        {
            "id": "2214",
            "parentId": "244",
            "value": "和平县",
            "layer": "3"
        },
        {
            "id": "2215",
            "parentId": "244",
            "value": "东源县",
            "layer": "3"
        },
        {
            "id": "2216",
            "parentId": "245",
            "value": "江城区",
            "layer": "3"
        },
        {
            "id": "2217",
            "parentId": "245",
            "value": "阳西县",
            "layer": "3"
        },
        {
            "id": "2218",
            "parentId": "245",
            "value": "阳东县",
            "layer": "3"
        },
        {
            "id": "2219",
            "parentId": "245",
            "value": "阳春市",
            "layer": "3"
        },
        {
            "id": "2220",
            "parentId": "246",
            "value": "清城区",
            "layer": "3"
        },
        {
            "id": "2221",
            "parentId": "246",
            "value": "佛冈县",
            "layer": "3"
        },
        {
            "id": "2222",
            "parentId": "246",
            "value": "阳山县",
            "layer": "3"
        },
        {
            "id": "2223",
            "parentId": "246",
            "value": "连山壮族瑶族自治县",
            "layer": "3"
        },
        {
            "id": "2224",
            "parentId": "246",
            "value": "连南瑶族自治县",
            "layer": "3"
        },
        {
            "id": "2225",
            "parentId": "246",
            "value": "清新县",
            "layer": "3"
        },
        {
            "id": "2226",
            "parentId": "246",
            "value": "英德市",
            "layer": "3"
        },
        {
            "id": "2227",
            "parentId": "246",
            "value": "连州市",
            "layer": "3"
        },
        {
            "id": "2228",
            "parentId": "249",
            "value": "湘桥区",
            "layer": "3"
        },
        {
            "id": "2229",
            "parentId": "249",
            "value": "潮安县",
            "layer": "3"
        },
        {
            "id": "2230",
            "parentId": "249",
            "value": "饶平县",
            "layer": "3"
        },
        {
            "id": "2231",
            "parentId": "250",
            "value": "榕城区",
            "layer": "3"
        },
        {
            "id": "2232",
            "parentId": "250",
            "value": "揭东县",
            "layer": "3"
        },
        {
            "id": "2233",
            "parentId": "250",
            "value": "揭西县",
            "layer": "3"
        },
        {
            "id": "2234",
            "parentId": "250",
            "value": "惠来县",
            "layer": "3"
        },
        {
            "id": "2235",
            "parentId": "250",
            "value": "普宁市",
            "layer": "3"
        },
        {
            "id": "2236",
            "parentId": "251",
            "value": "云城区",
            "layer": "3"
        },
        {
            "id": "2237",
            "parentId": "251",
            "value": "新兴县",
            "layer": "3"
        },
        {
            "id": "2238",
            "parentId": "251",
            "value": "郁南县",
            "layer": "3"
        },
        {
            "id": "2239",
            "parentId": "251",
            "value": "云安县",
            "layer": "3"
        },
        {
            "id": "2240",
            "parentId": "251",
            "value": "罗定市",
            "layer": "3"
        },
        {
            "id": "2241",
            "parentId": "252",
            "value": "兴宁区",
            "layer": "3"
        },
        {
            "id": "2242",
            "parentId": "252",
            "value": "青秀区",
            "layer": "3"
        },
        {
            "id": "2243",
            "parentId": "252",
            "value": "江南区",
            "layer": "3"
        },
        {
            "id": "2244",
            "parentId": "252",
            "value": "西乡塘区",
            "layer": "3"
        },
        {
            "id": "2245",
            "parentId": "252",
            "value": "良庆区",
            "layer": "3"
        },
        {
            "id": "2246",
            "parentId": "252",
            "value": "邕宁区",
            "layer": "3"
        },
        {
            "id": "2247",
            "parentId": "252",
            "value": "武鸣县",
            "layer": "3"
        },
        {
            "id": "2248",
            "parentId": "252",
            "value": "隆安县",
            "layer": "3"
        },
        {
            "id": "2249",
            "parentId": "252",
            "value": "马山县",
            "layer": "3"
        },
        {
            "id": "2250",
            "parentId": "252",
            "value": "上林县",
            "layer": "3"
        },
        {
            "id": "2251",
            "parentId": "252",
            "value": "宾阳县",
            "layer": "3"
        },
        {
            "id": "2252",
            "parentId": "252",
            "value": "横　县",
            "layer": "3"
        },
        {
            "id": "2253",
            "parentId": "253",
            "value": "城中区",
            "layer": "3"
        },
        {
            "id": "2254",
            "parentId": "253",
            "value": "鱼峰区",
            "layer": "3"
        },
        {
            "id": "2255",
            "parentId": "253",
            "value": "柳南区",
            "layer": "3"
        },
        {
            "id": "2256",
            "parentId": "253",
            "value": "柳北区",
            "layer": "3"
        },
        {
            "id": "2257",
            "parentId": "253",
            "value": "柳江县",
            "layer": "3"
        },
        {
            "id": "2258",
            "parentId": "253",
            "value": "柳城县",
            "layer": "3"
        },
        {
            "id": "2259",
            "parentId": "253",
            "value": "鹿寨县",
            "layer": "3"
        },
        {
            "id": "2260",
            "parentId": "253",
            "value": "融安县",
            "layer": "3"
        },
        {
            "id": "2261",
            "parentId": "253",
            "value": "融水苗族自治县",
            "layer": "3"
        },
        {
            "id": "2262",
            "parentId": "253",
            "value": "三江侗族自治县",
            "layer": "3"
        },
        {
            "id": "2263",
            "parentId": "254",
            "value": "秀峰区",
            "layer": "3"
        },
        {
            "id": "2264",
            "parentId": "254",
            "value": "叠彩区",
            "layer": "3"
        },
        {
            "id": "2265",
            "parentId": "254",
            "value": "象山区",
            "layer": "3"
        },
        {
            "id": "2266",
            "parentId": "254",
            "value": "七星区",
            "layer": "3"
        },
        {
            "id": "2267",
            "parentId": "254",
            "value": "雁山区",
            "layer": "3"
        },
        {
            "id": "2268",
            "parentId": "254",
            "value": "阳朔县",
            "layer": "3"
        },
        {
            "id": "2269",
            "parentId": "254",
            "value": "临桂县",
            "layer": "3"
        },
        {
            "id": "2270",
            "parentId": "254",
            "value": "灵川县",
            "layer": "3"
        },
        {
            "id": "2271",
            "parentId": "254",
            "value": "全州县",
            "layer": "3"
        },
        {
            "id": "2272",
            "parentId": "254",
            "value": "兴安县",
            "layer": "3"
        },
        {
            "id": "2273",
            "parentId": "254",
            "value": "永福县",
            "layer": "3"
        },
        {
            "id": "2274",
            "parentId": "254",
            "value": "灌阳县",
            "layer": "3"
        },
        {
            "id": "2275",
            "parentId": "254",
            "value": "龙胜各族自治县",
            "layer": "3"
        },
        {
            "id": "2276",
            "parentId": "254",
            "value": "资源县",
            "layer": "3"
        },
        {
            "id": "2277",
            "parentId": "254",
            "value": "平乐县",
            "layer": "3"
        },
        {
            "id": "2278",
            "parentId": "254",
            "value": "荔蒲县",
            "layer": "3"
        },
        {
            "id": "2279",
            "parentId": "254",
            "value": "恭城瑶族自治县",
            "layer": "3"
        },
        {
            "id": "2280",
            "parentId": "255",
            "value": "万秀区",
            "layer": "3"
        },
        {
            "id": "2281",
            "parentId": "255",
            "value": "蝶山区",
            "layer": "3"
        },
        {
            "id": "2282",
            "parentId": "255",
            "value": "长洲区",
            "layer": "3"
        },
        {
            "id": "2283",
            "parentId": "255",
            "value": "苍梧县",
            "layer": "3"
        },
        {
            "id": "2284",
            "parentId": "255",
            "value": "藤　县",
            "layer": "3"
        },
        {
            "id": "2285",
            "parentId": "255",
            "value": "蒙山县",
            "layer": "3"
        },
        {
            "id": "2286",
            "parentId": "255",
            "value": "岑溪市",
            "layer": "3"
        },
        {
            "id": "2287",
            "parentId": "256",
            "value": "海城区",
            "layer": "3"
        },
        {
            "id": "2288",
            "parentId": "256",
            "value": "银海区",
            "layer": "3"
        },
        {
            "id": "2289",
            "parentId": "256",
            "value": "铁山港区",
            "layer": "3"
        },
        {
            "id": "2290",
            "parentId": "256",
            "value": "合浦县",
            "layer": "3"
        },
        {
            "id": "2291",
            "parentId": "257",
            "value": "港口区",
            "layer": "3"
        },
        {
            "id": "2292",
            "parentId": "257",
            "value": "防城区",
            "layer": "3"
        },
        {
            "id": "2293",
            "parentId": "257",
            "value": "上思县",
            "layer": "3"
        },
        {
            "id": "2294",
            "parentId": "257",
            "value": "东兴市",
            "layer": "3"
        },
        {
            "id": "2295",
            "parentId": "258",
            "value": "钦南区",
            "layer": "3"
        },
        {
            "id": "2296",
            "parentId": "258",
            "value": "钦北区",
            "layer": "3"
        },
        {
            "id": "2297",
            "parentId": "258",
            "value": "灵山县",
            "layer": "3"
        },
        {
            "id": "2298",
            "parentId": "258",
            "value": "浦北县",
            "layer": "3"
        },
        {
            "id": "2299",
            "parentId": "259",
            "value": "港北区",
            "layer": "3"
        },
        {
            "id": "2300",
            "parentId": "259",
            "value": "港南区",
            "layer": "3"
        },
        {
            "id": "2301",
            "parentId": "259",
            "value": "覃塘区",
            "layer": "3"
        },
        {
            "id": "2302",
            "parentId": "259",
            "value": "平南县",
            "layer": "3"
        },
        {
            "id": "2303",
            "parentId": "259",
            "value": "桂平市",
            "layer": "3"
        },
        {
            "id": "2304",
            "parentId": "260",
            "value": "玉州区",
            "layer": "3"
        },
        {
            "id": "2305",
            "parentId": "260",
            "value": "容　县",
            "layer": "3"
        },
        {
            "id": "2306",
            "parentId": "260",
            "value": "陆川县",
            "layer": "3"
        },
        {
            "id": "2307",
            "parentId": "260",
            "value": "博白县",
            "layer": "3"
        },
        {
            "id": "2308",
            "parentId": "260",
            "value": "兴业县",
            "layer": "3"
        },
        {
            "id": "2309",
            "parentId": "260",
            "value": "北流市",
            "layer": "3"
        },
        {
            "id": "2310",
            "parentId": "261",
            "value": "右江区",
            "layer": "3"
        },
        {
            "id": "2311",
            "parentId": "261",
            "value": "田阳县",
            "layer": "3"
        },
        {
            "id": "2312",
            "parentId": "261",
            "value": "田东县",
            "layer": "3"
        },
        {
            "id": "2313",
            "parentId": "261",
            "value": "平果县",
            "layer": "3"
        },
        {
            "id": "2314",
            "parentId": "261",
            "value": "德保县",
            "layer": "3"
        },
        {
            "id": "2315",
            "parentId": "261",
            "value": "靖西县",
            "layer": "3"
        },
        {
            "id": "2316",
            "parentId": "261",
            "value": "那坡县",
            "layer": "3"
        },
        {
            "id": "2317",
            "parentId": "261",
            "value": "凌云县",
            "layer": "3"
        },
        {
            "id": "2318",
            "parentId": "261",
            "value": "乐业县",
            "layer": "3"
        },
        {
            "id": "2319",
            "parentId": "261",
            "value": "田林县",
            "layer": "3"
        },
        {
            "id": "2320",
            "parentId": "261",
            "value": "西林县",
            "layer": "3"
        },
        {
            "id": "2321",
            "parentId": "261",
            "value": "隆林各族自治县",
            "layer": "3"
        },
        {
            "id": "2322",
            "parentId": "262",
            "value": "八步区",
            "layer": "3"
        },
        {
            "id": "2323",
            "parentId": "262",
            "value": "昭平县",
            "layer": "3"
        },
        {
            "id": "2324",
            "parentId": "262",
            "value": "钟山县",
            "layer": "3"
        },
        {
            "id": "2325",
            "parentId": "262",
            "value": "富川瑶族自治县",
            "layer": "3"
        },
        {
            "id": "2326",
            "parentId": "263",
            "value": "金城江区",
            "layer": "3"
        },
        {
            "id": "2327",
            "parentId": "263",
            "value": "南丹县",
            "layer": "3"
        },
        {
            "id": "2328",
            "parentId": "263",
            "value": "天峨县",
            "layer": "3"
        },
        {
            "id": "2329",
            "parentId": "263",
            "value": "凤山县",
            "layer": "3"
        },
        {
            "id": "2330",
            "parentId": "263",
            "value": "东兰县",
            "layer": "3"
        },
        {
            "id": "2331",
            "parentId": "263",
            "value": "罗城仫佬族自治县",
            "layer": "3"
        },
        {
            "id": "2332",
            "parentId": "263",
            "value": "环江毛南族自治县",
            "layer": "3"
        },
        {
            "id": "2333",
            "parentId": "263",
            "value": "巴马瑶族自治县",
            "layer": "3"
        },
        {
            "id": "2334",
            "parentId": "263",
            "value": "都安瑶族自治县",
            "layer": "3"
        },
        {
            "id": "2335",
            "parentId": "263",
            "value": "大化瑶族自治县",
            "layer": "3"
        },
        {
            "id": "2336",
            "parentId": "263",
            "value": "宜州市",
            "layer": "3"
        },
        {
            "id": "2337",
            "parentId": "264",
            "value": "兴宾区",
            "layer": "3"
        },
        {
            "id": "2338",
            "parentId": "264",
            "value": "忻城县",
            "layer": "3"
        },
        {
            "id": "2339",
            "parentId": "264",
            "value": "象州县",
            "layer": "3"
        },
        {
            "id": "2340",
            "parentId": "264",
            "value": "武宣县",
            "layer": "3"
        },
        {
            "id": "2341",
            "parentId": "264",
            "value": "金秀瑶族自治县",
            "layer": "3"
        },
        {
            "id": "2342",
            "parentId": "264",
            "value": "合山市",
            "layer": "3"
        },
        {
            "id": "2343",
            "parentId": "265",
            "value": "江洲区",
            "layer": "3"
        },
        {
            "id": "2344",
            "parentId": "265",
            "value": "扶绥县",
            "layer": "3"
        },
        {
            "id": "2345",
            "parentId": "265",
            "value": "宁明县",
            "layer": "3"
        },
        {
            "id": "2346",
            "parentId": "265",
            "value": "龙州县",
            "layer": "3"
        },
        {
            "id": "2347",
            "parentId": "265",
            "value": "大新县",
            "layer": "3"
        },
        {
            "id": "2348",
            "parentId": "265",
            "value": "天等县",
            "layer": "3"
        },
        {
            "id": "2349",
            "parentId": "265",
            "value": "凭祥市",
            "layer": "3"
        },
        {
            "id": "2350",
            "parentId": "266",
            "value": "秀英区",
            "layer": "3"
        },
        {
            "id": "2351",
            "parentId": "266",
            "value": "龙华区",
            "layer": "3"
        },
        {
            "id": "2352",
            "parentId": "266",
            "value": "琼山区",
            "layer": "3"
        },
        {
            "id": "2353",
            "parentId": "266",
            "value": "美兰区",
            "layer": "3"
        },
        {
            "id": "2354",
            "parentId": "268",
            "value": "五指山市",
            "layer": "3"
        },
        {
            "id": "2355",
            "parentId": "268",
            "value": "琼海市",
            "layer": "3"
        },
        {
            "id": "2356",
            "parentId": "268",
            "value": "儋州市",
            "layer": "3"
        },
        {
            "id": "2357",
            "parentId": "268",
            "value": "文昌市",
            "layer": "3"
        },
        {
            "id": "2358",
            "parentId": "268",
            "value": "万宁市",
            "layer": "3"
        },
        {
            "id": "2359",
            "parentId": "268",
            "value": "东方市",
            "layer": "3"
        },
        {
            "id": "2360",
            "parentId": "268",
            "value": "定安县",
            "layer": "3"
        },
        {
            "id": "2361",
            "parentId": "268",
            "value": "屯昌县",
            "layer": "3"
        },
        {
            "id": "2362",
            "parentId": "268",
            "value": "澄迈县",
            "layer": "3"
        },
        {
            "id": "2363",
            "parentId": "268",
            "value": "临高县",
            "layer": "3"
        },
        {
            "id": "2364",
            "parentId": "268",
            "value": "白沙黎族自治县",
            "layer": "3"
        },
        {
            "id": "2365",
            "parentId": "268",
            "value": "昌江黎族自治县",
            "layer": "3"
        },
        {
            "id": "2366",
            "parentId": "268",
            "value": "乐东黎族自治县",
            "layer": "3"
        },
        {
            "id": "2367",
            "parentId": "268",
            "value": "陵水黎族自治县",
            "layer": "3"
        },
        {
            "id": "2368",
            "parentId": "268",
            "value": "保亭黎族苗族自治县",
            "layer": "3"
        },
        {
            "id": "2369",
            "parentId": "268",
            "value": "琼中黎族苗族自治县",
            "layer": "3"
        },
        {
            "id": "2370",
            "parentId": "268",
            "value": "西沙群岛",
            "layer": "3"
        },
        {
            "id": "2371",
            "parentId": "268",
            "value": "南沙群岛",
            "layer": "3"
        },
        {
            "id": "2372",
            "parentId": "268",
            "value": "中沙群岛的岛礁及其海域",
            "layer": "3"
        },
        {
            "id": "2373",
            "parentId": "269",
            "value": "万州区",
            "layer": "3"
        },
        {
            "id": "2374",
            "parentId": "269",
            "value": "涪陵区",
            "layer": "3"
        },
        {
            "id": "2375",
            "parentId": "269",
            "value": "渝中区",
            "layer": "3"
        },
        {
            "id": "2376",
            "parentId": "269",
            "value": "大渡口区",
            "layer": "3"
        },
        {
            "id": "2377",
            "parentId": "269",
            "value": "江北区",
            "layer": "3"
        },
        {
            "id": "2378",
            "parentId": "269",
            "value": "沙坪坝区",
            "layer": "3"
        },
        {
            "id": "2379",
            "parentId": "269",
            "value": "九龙坡区",
            "layer": "3"
        },
        {
            "id": "2380",
            "parentId": "269",
            "value": "南岸区",
            "layer": "3"
        },
        {
            "id": "2381",
            "parentId": "269",
            "value": "北碚区",
            "layer": "3"
        },
        {
            "id": "2382",
            "parentId": "269",
            "value": "万盛区",
            "layer": "3"
        },
        {
            "id": "2383",
            "parentId": "269",
            "value": "双桥区",
            "layer": "3"
        },
        {
            "id": "2384",
            "parentId": "269",
            "value": "渝北区",
            "layer": "3"
        },
        {
            "id": "2385",
            "parentId": "269",
            "value": "巴南区",
            "layer": "3"
        },
        {
            "id": "2386",
            "parentId": "269",
            "value": "黔江区",
            "layer": "3"
        },
        {
            "id": "2387",
            "parentId": "269",
            "value": "长寿区",
            "layer": "3"
        },
        {
            "id": "2388",
            "parentId": "269",
            "value": "綦江县",
            "layer": "3"
        },
        {
            "id": "2389",
            "parentId": "269",
            "value": "潼南县",
            "layer": "3"
        },
        {
            "id": "2390",
            "parentId": "269",
            "value": "铜梁县",
            "layer": "3"
        },
        {
            "id": "2391",
            "parentId": "269",
            "value": "大足县",
            "layer": "3"
        },
        {
            "id": "2392",
            "parentId": "269",
            "value": "荣昌县",
            "layer": "3"
        },
        {
            "id": "2393",
            "parentId": "269",
            "value": "璧山县",
            "layer": "3"
        },
        {
            "id": "2394",
            "parentId": "269",
            "value": "梁平县",
            "layer": "3"
        },
        {
            "id": "2395",
            "parentId": "269",
            "value": "城口县",
            "layer": "3"
        },
        {
            "id": "2396",
            "parentId": "269",
            "value": "丰都县",
            "layer": "3"
        },
        {
            "id": "2397",
            "parentId": "269",
            "value": "垫江县",
            "layer": "3"
        },
        {
            "id": "2398",
            "parentId": "269",
            "value": "武隆县",
            "layer": "3"
        },
        {
            "id": "2399",
            "parentId": "269",
            "value": "忠　县",
            "layer": "3"
        },
        {
            "id": "2400",
            "parentId": "269",
            "value": "开　县",
            "layer": "3"
        },
        {
            "id": "2401",
            "parentId": "269",
            "value": "云阳县",
            "layer": "3"
        },
        {
            "id": "2402",
            "parentId": "269",
            "value": "奉节县",
            "layer": "3"
        },
        {
            "id": "2403",
            "parentId": "269",
            "value": "巫山县",
            "layer": "3"
        },
        {
            "id": "2404",
            "parentId": "269",
            "value": "巫溪县",
            "layer": "3"
        },
        {
            "id": "2405",
            "parentId": "269",
            "value": "石柱土家族自治县",
            "layer": "3"
        },
        {
            "id": "2406",
            "parentId": "269",
            "value": "秀山土家族苗族自治县",
            "layer": "3"
        },
        {
            "id": "2407",
            "parentId": "269",
            "value": "酉阳土家族苗族自治县",
            "layer": "3"
        },
        {
            "id": "2408",
            "parentId": "269",
            "value": "彭水苗族土家族自治县",
            "layer": "3"
        },
        {
            "id": "2409",
            "parentId": "269",
            "value": "江津市",
            "layer": "3"
        },
        {
            "id": "2410",
            "parentId": "269",
            "value": "合川市",
            "layer": "3"
        },
        {
            "id": "2411",
            "parentId": "269",
            "value": "永川市",
            "layer": "3"
        },
        {
            "id": "2412",
            "parentId": "269",
            "value": "南川市",
            "layer": "3"
        },
        {
            "id": "2413",
            "parentId": "270",
            "value": "锦江区",
            "layer": "3"
        },
        {
            "id": "2414",
            "parentId": "270",
            "value": "青羊区",
            "layer": "3"
        },
        {
            "id": "2415",
            "parentId": "270",
            "value": "金牛区",
            "layer": "3"
        },
        {
            "id": "2416",
            "parentId": "270",
            "value": "武侯区",
            "layer": "3"
        },
        {
            "id": "2417",
            "parentId": "270",
            "value": "成华区",
            "layer": "3"
        },
        {
            "id": "2418",
            "parentId": "270",
            "value": "龙泉驿区",
            "layer": "3"
        },
        {
            "id": "2419",
            "parentId": "270",
            "value": "青白江区",
            "layer": "3"
        },
        {
            "id": "2420",
            "parentId": "270",
            "value": "新都区",
            "layer": "3"
        },
        {
            "id": "2421",
            "parentId": "270",
            "value": "温江区",
            "layer": "3"
        },
        {
            "id": "2422",
            "parentId": "270",
            "value": "金堂县",
            "layer": "3"
        },
        {
            "id": "2423",
            "parentId": "270",
            "value": "双流县",
            "layer": "3"
        },
        {
            "id": "2424",
            "parentId": "270",
            "value": "郫　县",
            "layer": "3"
        },
        {
            "id": "2425",
            "parentId": "270",
            "value": "大邑县",
            "layer": "3"
        },
        {
            "id": "2426",
            "parentId": "270",
            "value": "蒲江县",
            "layer": "3"
        },
        {
            "id": "2427",
            "parentId": "270",
            "value": "新津县",
            "layer": "3"
        },
        {
            "id": "2428",
            "parentId": "270",
            "value": "都江堰市",
            "layer": "3"
        },
        {
            "id": "2429",
            "parentId": "270",
            "value": "彭州市",
            "layer": "3"
        },
        {
            "id": "2430",
            "parentId": "270",
            "value": "邛崃市",
            "layer": "3"
        },
        {
            "id": "2431",
            "parentId": "270",
            "value": "崇州市",
            "layer": "3"
        },
        {
            "id": "2432",
            "parentId": "271",
            "value": "自流井区",
            "layer": "3"
        },
        {
            "id": "2433",
            "parentId": "271",
            "value": "贡井区",
            "layer": "3"
        },
        {
            "id": "2434",
            "parentId": "271",
            "value": "大安区",
            "layer": "3"
        },
        {
            "id": "2435",
            "parentId": "271",
            "value": "沿滩区",
            "layer": "3"
        },
        {
            "id": "2436",
            "parentId": "271",
            "value": "荣　县",
            "layer": "3"
        },
        {
            "id": "2437",
            "parentId": "271",
            "value": "富顺县",
            "layer": "3"
        },
        {
            "id": "2438",
            "parentId": "272",
            "value": "东　区",
            "layer": "3"
        },
        {
            "id": "2439",
            "parentId": "272",
            "value": "西　区",
            "layer": "3"
        },
        {
            "id": "2440",
            "parentId": "272",
            "value": "仁和区",
            "layer": "3"
        },
        {
            "id": "2441",
            "parentId": "272",
            "value": "米易县",
            "layer": "3"
        },
        {
            "id": "2442",
            "parentId": "272",
            "value": "盐边县",
            "layer": "3"
        },
        {
            "id": "2443",
            "parentId": "273",
            "value": "江阳区",
            "layer": "3"
        },
        {
            "id": "2444",
            "parentId": "273",
            "value": "纳溪区",
            "layer": "3"
        },
        {
            "id": "2445",
            "parentId": "273",
            "value": "龙马潭区",
            "layer": "3"
        },
        {
            "id": "2446",
            "parentId": "273",
            "value": "泸　县",
            "layer": "3"
        },
        {
            "id": "2447",
            "parentId": "273",
            "value": "合江县",
            "layer": "3"
        },
        {
            "id": "2448",
            "parentId": "273",
            "value": "叙永县",
            "layer": "3"
        },
        {
            "id": "2449",
            "parentId": "273",
            "value": "古蔺县",
            "layer": "3"
        },
        {
            "id": "2450",
            "parentId": "274",
            "value": "旌阳区",
            "layer": "3"
        },
        {
            "id": "2451",
            "parentId": "274",
            "value": "中江县",
            "layer": "3"
        },
        {
            "id": "2452",
            "parentId": "274",
            "value": "罗江县",
            "layer": "3"
        },
        {
            "id": "2453",
            "parentId": "274",
            "value": "广汉市",
            "layer": "3"
        },
        {
            "id": "2454",
            "parentId": "274",
            "value": "什邡市",
            "layer": "3"
        },
        {
            "id": "2455",
            "parentId": "274",
            "value": "绵竹市",
            "layer": "3"
        },
        {
            "id": "2456",
            "parentId": "275",
            "value": "涪城区",
            "layer": "3"
        },
        {
            "id": "2457",
            "parentId": "275",
            "value": "游仙区",
            "layer": "3"
        },
        {
            "id": "2458",
            "parentId": "275",
            "value": "三台县",
            "layer": "3"
        },
        {
            "id": "2459",
            "parentId": "275",
            "value": "盐亭县",
            "layer": "3"
        },
        {
            "id": "2460",
            "parentId": "275",
            "value": "安　县",
            "layer": "3"
        },
        {
            "id": "2461",
            "parentId": "275",
            "value": "梓潼县",
            "layer": "3"
        },
        {
            "id": "2462",
            "parentId": "275",
            "value": "北川羌族自治县",
            "layer": "3"
        },
        {
            "id": "2463",
            "parentId": "275",
            "value": "平武县",
            "layer": "3"
        },
        {
            "id": "2464",
            "parentId": "275",
            "value": "江油市",
            "layer": "3"
        },
        {
            "id": "2465",
            "parentId": "276",
            "value": "市中区",
            "layer": "3"
        },
        {
            "id": "2466",
            "parentId": "276",
            "value": "元坝区",
            "layer": "3"
        },
        {
            "id": "2467",
            "parentId": "276",
            "value": "朝天区",
            "layer": "3"
        },
        {
            "id": "2468",
            "parentId": "276",
            "value": "旺苍县",
            "layer": "3"
        },
        {
            "id": "2469",
            "parentId": "276",
            "value": "青川县",
            "layer": "3"
        },
        {
            "id": "2470",
            "parentId": "276",
            "value": "剑阁县",
            "layer": "3"
        },
        {
            "id": "2471",
            "parentId": "276",
            "value": "苍溪县",
            "layer": "3"
        },
        {
            "id": "2472",
            "parentId": "277",
            "value": "船山区",
            "layer": "3"
        },
        {
            "id": "2473",
            "parentId": "277",
            "value": "安居区",
            "layer": "3"
        },
        {
            "id": "2474",
            "parentId": "277",
            "value": "蓬溪县",
            "layer": "3"
        },
        {
            "id": "2475",
            "parentId": "277",
            "value": "射洪县",
            "layer": "3"
        },
        {
            "id": "2476",
            "parentId": "277",
            "value": "大英县",
            "layer": "3"
        },
        {
            "id": "2477",
            "parentId": "278",
            "value": "市中区",
            "layer": "3"
        },
        {
            "id": "2478",
            "parentId": "278",
            "value": "东兴区",
            "layer": "3"
        },
        {
            "id": "2479",
            "parentId": "278",
            "value": "威远县",
            "layer": "3"
        },
        {
            "id": "2480",
            "parentId": "278",
            "value": "资中县",
            "layer": "3"
        },
        {
            "id": "2481",
            "parentId": "278",
            "value": "隆昌县",
            "layer": "3"
        },
        {
            "id": "2482",
            "parentId": "279",
            "value": "市中区",
            "layer": "3"
        },
        {
            "id": "2483",
            "parentId": "279",
            "value": "沙湾区",
            "layer": "3"
        },
        {
            "id": "2484",
            "parentId": "279",
            "value": "五通桥区",
            "layer": "3"
        },
        {
            "id": "2485",
            "parentId": "279",
            "value": "金口河区",
            "layer": "3"
        },
        {
            "id": "2486",
            "parentId": "279",
            "value": "犍为县",
            "layer": "3"
        },
        {
            "id": "2487",
            "parentId": "279",
            "value": "井研县",
            "layer": "3"
        },
        {
            "id": "2488",
            "parentId": "279",
            "value": "夹江县",
            "layer": "3"
        },
        {
            "id": "2489",
            "parentId": "279",
            "value": "沐川县",
            "layer": "3"
        },
        {
            "id": "2490",
            "parentId": "279",
            "value": "峨边彝族自治县",
            "layer": "3"
        },
        {
            "id": "2491",
            "parentId": "279",
            "value": "马边彝族自治县",
            "layer": "3"
        },
        {
            "id": "2492",
            "parentId": "279",
            "value": "峨眉山市",
            "layer": "3"
        },
        {
            "id": "2493",
            "parentId": "280",
            "value": "顺庆区",
            "layer": "3"
        },
        {
            "id": "2494",
            "parentId": "280",
            "value": "高坪区",
            "layer": "3"
        },
        {
            "id": "2495",
            "parentId": "280",
            "value": "嘉陵区",
            "layer": "3"
        },
        {
            "id": "2496",
            "parentId": "280",
            "value": "南部县",
            "layer": "3"
        },
        {
            "id": "2497",
            "parentId": "280",
            "value": "营山县",
            "layer": "3"
        },
        {
            "id": "2498",
            "parentId": "280",
            "value": "蓬安县",
            "layer": "3"
        },
        {
            "id": "2499",
            "parentId": "280",
            "value": "仪陇县",
            "layer": "3"
        },
        {
            "id": "2500",
            "parentId": "280",
            "value": "西充县",
            "layer": "3"
        },
        {
            "id": "2501",
            "parentId": "280",
            "value": "阆中市",
            "layer": "3"
        },
        {
            "id": "2502",
            "parentId": "281",
            "value": "东坡区",
            "layer": "3"
        },
        {
            "id": "2503",
            "parentId": "281",
            "value": "仁寿县",
            "layer": "3"
        },
        {
            "id": "2504",
            "parentId": "281",
            "value": "彭山县",
            "layer": "3"
        },
        {
            "id": "2505",
            "parentId": "281",
            "value": "洪雅县",
            "layer": "3"
        },
        {
            "id": "2506",
            "parentId": "281",
            "value": "丹棱县",
            "layer": "3"
        },
        {
            "id": "2507",
            "parentId": "281",
            "value": "青神县",
            "layer": "3"
        },
        {
            "id": "2508",
            "parentId": "282",
            "value": "翠屏区",
            "layer": "3"
        },
        {
            "id": "2509",
            "parentId": "282",
            "value": "宜宾县",
            "layer": "3"
        },
        {
            "id": "2510",
            "parentId": "282",
            "value": "南溪县",
            "layer": "3"
        },
        {
            "id": "2511",
            "parentId": "282",
            "value": "江安县",
            "layer": "3"
        },
        {
            "id": "2512",
            "parentId": "282",
            "value": "长宁县",
            "layer": "3"
        },
        {
            "id": "2513",
            "parentId": "282",
            "value": "高　县",
            "layer": "3"
        },
        {
            "id": "2514",
            "parentId": "282",
            "value": "珙　县",
            "layer": "3"
        },
        {
            "id": "2515",
            "parentId": "282",
            "value": "筠连县",
            "layer": "3"
        },
        {
            "id": "2516",
            "parentId": "282",
            "value": "兴文县",
            "layer": "3"
        },
        {
            "id": "2517",
            "parentId": "282",
            "value": "屏山县",
            "layer": "3"
        },
        {
            "id": "2518",
            "parentId": "283",
            "value": "广安区",
            "layer": "3"
        },
        {
            "id": "2519",
            "parentId": "283",
            "value": "岳池县",
            "layer": "3"
        },
        {
            "id": "2520",
            "parentId": "283",
            "value": "武胜县",
            "layer": "3"
        },
        {
            "id": "2521",
            "parentId": "283",
            "value": "邻水县",
            "layer": "3"
        },
        {
            "id": "2522",
            "parentId": "283",
            "value": "华莹市",
            "layer": "3"
        },
        {
            "id": "2523",
            "parentId": "284",
            "value": "通川区",
            "layer": "3"
        },
        {
            "id": "2524",
            "parentId": "284",
            "value": "达　县",
            "layer": "3"
        },
        {
            "id": "2525",
            "parentId": "284",
            "value": "宣汉县",
            "layer": "3"
        },
        {
            "id": "2526",
            "parentId": "284",
            "value": "开江县",
            "layer": "3"
        },
        {
            "id": "2527",
            "parentId": "284",
            "value": "大竹县",
            "layer": "3"
        },
        {
            "id": "2528",
            "parentId": "284",
            "value": "渠　县",
            "layer": "3"
        },
        {
            "id": "2529",
            "parentId": "284",
            "value": "万源市",
            "layer": "3"
        },
        {
            "id": "2530",
            "parentId": "285",
            "value": "雨城区",
            "layer": "3"
        },
        {
            "id": "2531",
            "parentId": "285",
            "value": "名山县",
            "layer": "3"
        },
        {
            "id": "2532",
            "parentId": "285",
            "value": "荥经县",
            "layer": "3"
        },
        {
            "id": "2533",
            "parentId": "285",
            "value": "汉源县",
            "layer": "3"
        },
        {
            "id": "2534",
            "parentId": "285",
            "value": "石棉县",
            "layer": "3"
        },
        {
            "id": "2535",
            "parentId": "285",
            "value": "天全县",
            "layer": "3"
        },
        {
            "id": "2536",
            "parentId": "285",
            "value": "芦山县",
            "layer": "3"
        },
        {
            "id": "2537",
            "parentId": "285",
            "value": "宝兴县",
            "layer": "3"
        },
        {
            "id": "2538",
            "parentId": "286",
            "value": "巴州区",
            "layer": "3"
        },
        {
            "id": "2539",
            "parentId": "286",
            "value": "通江县",
            "layer": "3"
        },
        {
            "id": "2540",
            "parentId": "286",
            "value": "南江县",
            "layer": "3"
        },
        {
            "id": "2541",
            "parentId": "286",
            "value": "平昌县",
            "layer": "3"
        },
        {
            "id": "2542",
            "parentId": "287",
            "value": "雁江区",
            "layer": "3"
        },
        {
            "id": "2543",
            "parentId": "287",
            "value": "安岳县",
            "layer": "3"
        },
        {
            "id": "2544",
            "parentId": "287",
            "value": "乐至县",
            "layer": "3"
        },
        {
            "id": "2545",
            "parentId": "287",
            "value": "简阳市",
            "layer": "3"
        },
        {
            "id": "2546",
            "parentId": "288",
            "value": "汶川县",
            "layer": "3"
        },
        {
            "id": "2547",
            "parentId": "288",
            "value": "理　县",
            "layer": "3"
        },
        {
            "id": "2548",
            "parentId": "288",
            "value": "茂　县",
            "layer": "3"
        },
        {
            "id": "2549",
            "parentId": "288",
            "value": "松潘县",
            "layer": "3"
        },
        {
            "id": "2550",
            "parentId": "288",
            "value": "九寨沟县",
            "layer": "3"
        },
        {
            "id": "2551",
            "parentId": "288",
            "value": "金川县",
            "layer": "3"
        },
        {
            "id": "2552",
            "parentId": "288",
            "value": "小金县",
            "layer": "3"
        },
        {
            "id": "2553",
            "parentId": "288",
            "value": "黑水县",
            "layer": "3"
        },
        {
            "id": "2554",
            "parentId": "288",
            "value": "马尔康县",
            "layer": "3"
        },
        {
            "id": "2555",
            "parentId": "288",
            "value": "壤塘县",
            "layer": "3"
        },
        {
            "id": "2556",
            "parentId": "288",
            "value": "阿坝县",
            "layer": "3"
        },
        {
            "id": "2557",
            "parentId": "288",
            "value": "若尔盖县",
            "layer": "3"
        },
        {
            "id": "2558",
            "parentId": "288",
            "value": "红原县",
            "layer": "3"
        },
        {
            "id": "2559",
            "parentId": "289",
            "value": "康定县",
            "layer": "3"
        },
        {
            "id": "2560",
            "parentId": "289",
            "value": "泸定县",
            "layer": "3"
        },
        {
            "id": "2561",
            "parentId": "289",
            "value": "丹巴县",
            "layer": "3"
        },
        {
            "id": "2562",
            "parentId": "289",
            "value": "九龙县",
            "layer": "3"
        },
        {
            "id": "2563",
            "parentId": "289",
            "value": "雅江县",
            "layer": "3"
        },
        {
            "id": "2564",
            "parentId": "289",
            "value": "道孚县",
            "layer": "3"
        },
        {
            "id": "2565",
            "parentId": "289",
            "value": "炉霍县",
            "layer": "3"
        },
        {
            "id": "2566",
            "parentId": "289",
            "value": "甘孜县",
            "layer": "3"
        },
        {
            "id": "2567",
            "parentId": "289",
            "value": "新龙县",
            "layer": "3"
        },
        {
            "id": "2568",
            "parentId": "289",
            "value": "德格县",
            "layer": "3"
        },
        {
            "id": "2569",
            "parentId": "289",
            "value": "白玉县",
            "layer": "3"
        },
        {
            "id": "2570",
            "parentId": "289",
            "value": "石渠县",
            "layer": "3"
        },
        {
            "id": "2571",
            "parentId": "289",
            "value": "色达县",
            "layer": "3"
        },
        {
            "id": "2572",
            "parentId": "289",
            "value": "理塘县",
            "layer": "3"
        },
        {
            "id": "2573",
            "parentId": "289",
            "value": "巴塘县",
            "layer": "3"
        },
        {
            "id": "2574",
            "parentId": "289",
            "value": "乡城县",
            "layer": "3"
        },
        {
            "id": "2575",
            "parentId": "289",
            "value": "稻城县",
            "layer": "3"
        },
        {
            "id": "2576",
            "parentId": "289",
            "value": "得荣县",
            "layer": "3"
        },
        {
            "id": "2577",
            "parentId": "290",
            "value": "西昌市",
            "layer": "3"
        },
        {
            "id": "2578",
            "parentId": "290",
            "value": "木里藏族自治县",
            "layer": "3"
        },
        {
            "id": "2579",
            "parentId": "290",
            "value": "盐源县",
            "layer": "3"
        },
        {
            "id": "2580",
            "parentId": "290",
            "value": "德昌县",
            "layer": "3"
        },
        {
            "id": "2581",
            "parentId": "290",
            "value": "会理县",
            "layer": "3"
        },
        {
            "id": "2582",
            "parentId": "290",
            "value": "会东县",
            "layer": "3"
        },
        {
            "id": "2583",
            "parentId": "290",
            "value": "宁南县",
            "layer": "3"
        },
        {
            "id": "2584",
            "parentId": "290",
            "value": "普格县",
            "layer": "3"
        },
        {
            "id": "2585",
            "parentId": "290",
            "value": "布拖县",
            "layer": "3"
        },
        {
            "id": "2586",
            "parentId": "290",
            "value": "金阳县",
            "layer": "3"
        },
        {
            "id": "2587",
            "parentId": "290",
            "value": "昭觉县",
            "layer": "3"
        },
        {
            "id": "2588",
            "parentId": "290",
            "value": "喜德县",
            "layer": "3"
        },
        {
            "id": "2589",
            "parentId": "290",
            "value": "冕宁县",
            "layer": "3"
        },
        {
            "id": "2590",
            "parentId": "290",
            "value": "越西县",
            "layer": "3"
        },
        {
            "id": "2591",
            "parentId": "290",
            "value": "甘洛县",
            "layer": "3"
        },
        {
            "id": "2592",
            "parentId": "290",
            "value": "美姑县",
            "layer": "3"
        },
        {
            "id": "2593",
            "parentId": "290",
            "value": "雷波县",
            "layer": "3"
        },
        {
            "id": "2594",
            "parentId": "291",
            "value": "南明区",
            "layer": "3"
        },
        {
            "id": "2595",
            "parentId": "291",
            "value": "云岩区",
            "layer": "3"
        },
        {
            "id": "2596",
            "parentId": "291",
            "value": "花溪区",
            "layer": "3"
        },
        {
            "id": "2597",
            "parentId": "291",
            "value": "乌当区",
            "layer": "3"
        },
        {
            "id": "2598",
            "parentId": "291",
            "value": "白云区",
            "layer": "3"
        },
        {
            "id": "2599",
            "parentId": "291",
            "value": "小河区",
            "layer": "3"
        },
        {
            "id": "2600",
            "parentId": "291",
            "value": "开阳县",
            "layer": "3"
        },
        {
            "id": "2601",
            "parentId": "291",
            "value": "息烽县",
            "layer": "3"
        },
        {
            "id": "2602",
            "parentId": "291",
            "value": "修文县",
            "layer": "3"
        },
        {
            "id": "2603",
            "parentId": "291",
            "value": "清镇市",
            "layer": "3"
        },
        {
            "id": "2604",
            "parentId": "292",
            "value": "钟山区",
            "layer": "3"
        },
        {
            "id": "2605",
            "parentId": "292",
            "value": "六枝特区",
            "layer": "3"
        },
        {
            "id": "2606",
            "parentId": "292",
            "value": "水城县",
            "layer": "3"
        },
        {
            "id": "2607",
            "parentId": "292",
            "value": "盘　县",
            "layer": "3"
        },
        {
            "id": "2608",
            "parentId": "293",
            "value": "红花岗区",
            "layer": "3"
        },
        {
            "id": "2609",
            "parentId": "293",
            "value": "汇川区",
            "layer": "3"
        },
        {
            "id": "2610",
            "parentId": "293",
            "value": "遵义县",
            "layer": "3"
        },
        {
            "id": "2611",
            "parentId": "293",
            "value": "桐梓县",
            "layer": "3"
        },
        {
            "id": "2612",
            "parentId": "293",
            "value": "绥阳县",
            "layer": "3"
        },
        {
            "id": "2613",
            "parentId": "293",
            "value": "正安县",
            "layer": "3"
        },
        {
            "id": "2614",
            "parentId": "293",
            "value": "道真仡佬族苗族自治县",
            "layer": "3"
        },
        {
            "id": "2615",
            "parentId": "293",
            "value": "务川仡佬族苗族自治县",
            "layer": "3"
        },
        {
            "id": "2616",
            "parentId": "293",
            "value": "凤冈县",
            "layer": "3"
        },
        {
            "id": "2617",
            "parentId": "293",
            "value": "湄潭县",
            "layer": "3"
        },
        {
            "id": "2618",
            "parentId": "293",
            "value": "余庆县",
            "layer": "3"
        },
        {
            "id": "2619",
            "parentId": "293",
            "value": "习水县",
            "layer": "3"
        },
        {
            "id": "2620",
            "parentId": "293",
            "value": "赤水市",
            "layer": "3"
        },
        {
            "id": "2621",
            "parentId": "293",
            "value": "仁怀市",
            "layer": "3"
        },
        {
            "id": "2622",
            "parentId": "294",
            "value": "西秀区",
            "layer": "3"
        },
        {
            "id": "2623",
            "parentId": "294",
            "value": "平坝县",
            "layer": "3"
        },
        {
            "id": "2624",
            "parentId": "294",
            "value": "普定县",
            "layer": "3"
        },
        {
            "id": "2625",
            "parentId": "294",
            "value": "镇宁布依族苗族自治县",
            "layer": "3"
        },
        {
            "id": "2626",
            "parentId": "294",
            "value": "关岭布依族苗族自治县",
            "layer": "3"
        },
        {
            "id": "2627",
            "parentId": "294",
            "value": "紫云苗族布依族自治县",
            "layer": "3"
        },
        {
            "id": "2628",
            "parentId": "295",
            "value": "铜仁市",
            "layer": "3"
        },
        {
            "id": "2629",
            "parentId": "295",
            "value": "铜仁市",
            "layer": "3"
        },
        {
            "id": "2630",
            "parentId": "295",
            "value": "铜仁市",
            "layer": "3"
        },
        {
            "id": "2631",
            "parentId": "295",
            "value": "铜仁市",
            "layer": "3"
        },
        {
            "id": "2632",
            "parentId": "295",
            "value": "铜仁市",
            "layer": "3"
        },
        {
            "id": "2633",
            "parentId": "295",
            "value": "铜仁市",
            "layer": "3"
        },
        {
            "id": "2634",
            "parentId": "295",
            "value": "铜仁市",
            "layer": "3"
        },
        {
            "id": "2635",
            "parentId": "295",
            "value": "铜仁市",
            "layer": "3"
        },
        {
            "id": "2636",
            "parentId": "295",
            "value": "铜仁市",
            "layer": "3"
        },
        {
            "id": "2637",
            "parentId": "295",
            "value": "铜仁市",
            "layer": "3"
        },
        {
            "id": "2638",
            "parentId": "296",
            "value": "兴义市",
            "layer": "3"
        },
        {
            "id": "2639",
            "parentId": "296",
            "value": "兴仁县",
            "layer": "3"
        },
        {
            "id": "2640",
            "parentId": "296",
            "value": "普安县",
            "layer": "3"
        },
        {
            "id": "2641",
            "parentId": "296",
            "value": "晴隆县",
            "layer": "3"
        },
        {
            "id": "2642",
            "parentId": "296",
            "value": "贞丰县",
            "layer": "3"
        },
        {
            "id": "2643",
            "parentId": "296",
            "value": "望谟县",
            "layer": "3"
        },
        {
            "id": "2644",
            "parentId": "296",
            "value": "册亨县",
            "layer": "3"
        },
        {
            "id": "2645",
            "parentId": "296",
            "value": "安龙县",
            "layer": "3"
        },
        {
            "id": "2646",
            "parentId": "297",
            "value": "毕节市",
            "layer": "3"
        },
        {
            "id": "2647",
            "parentId": "297",
            "value": "毕节市",
            "layer": "3"
        },
        {
            "id": "2648",
            "parentId": "297",
            "value": "毕节市",
            "layer": "3"
        },
        {
            "id": "2649",
            "parentId": "297",
            "value": "毕节市",
            "layer": "3"
        },
        {
            "id": "2650",
            "parentId": "297",
            "value": "毕节市",
            "layer": "3"
        },
        {
            "id": "2651",
            "parentId": "297",
            "value": "毕节市",
            "layer": "3"
        },
        {
            "id": "2652",
            "parentId": "297",
            "value": "毕节市",
            "layer": "3"
        },
        {
            "id": "2653",
            "parentId": "297",
            "value": "毕节市",
            "layer": "3"
        },
        {
            "id": "2654",
            "parentId": "298",
            "value": "凯里市",
            "layer": "3"
        },
        {
            "id": "2655",
            "parentId": "298",
            "value": "黄平县",
            "layer": "3"
        },
        {
            "id": "2656",
            "parentId": "298",
            "value": "施秉县",
            "layer": "3"
        },
        {
            "id": "2657",
            "parentId": "298",
            "value": "三穗县",
            "layer": "3"
        },
        {
            "id": "2658",
            "parentId": "298",
            "value": "镇远县",
            "layer": "3"
        },
        {
            "id": "2659",
            "parentId": "298",
            "value": "岑巩县",
            "layer": "3"
        },
        {
            "id": "2660",
            "parentId": "298",
            "value": "天柱县",
            "layer": "3"
        },
        {
            "id": "2661",
            "parentId": "298",
            "value": "锦屏县",
            "layer": "3"
        },
        {
            "id": "2662",
            "parentId": "298",
            "value": "剑河县",
            "layer": "3"
        },
        {
            "id": "2663",
            "parentId": "298",
            "value": "台江县",
            "layer": "3"
        },
        {
            "id": "2664",
            "parentId": "298",
            "value": "黎平县",
            "layer": "3"
        },
        {
            "id": "2665",
            "parentId": "298",
            "value": "榕江县",
            "layer": "3"
        },
        {
            "id": "2666",
            "parentId": "298",
            "value": "从江县",
            "layer": "3"
        },
        {
            "id": "2667",
            "parentId": "298",
            "value": "雷山县",
            "layer": "3"
        },
        {
            "id": "2668",
            "parentId": "298",
            "value": "麻江县",
            "layer": "3"
        },
        {
            "id": "2669",
            "parentId": "298",
            "value": "丹寨县",
            "layer": "3"
        },
        {
            "id": "2670",
            "parentId": "299",
            "value": "都匀市",
            "layer": "3"
        },
        {
            "id": "2671",
            "parentId": "299",
            "value": "福泉市",
            "layer": "3"
        },
        {
            "id": "2672",
            "parentId": "299",
            "value": "荔波县",
            "layer": "3"
        },
        {
            "id": "2673",
            "parentId": "299",
            "value": "贵定县",
            "layer": "3"
        },
        {
            "id": "2674",
            "parentId": "299",
            "value": "瓮安县",
            "layer": "3"
        },
        {
            "id": "2675",
            "parentId": "299",
            "value": "独山县",
            "layer": "3"
        },
        {
            "id": "2676",
            "parentId": "299",
            "value": "平塘县",
            "layer": "3"
        },
        {
            "id": "2677",
            "parentId": "299",
            "value": "罗甸县",
            "layer": "3"
        },
        {
            "id": "2678",
            "parentId": "299",
            "value": "长顺县",
            "layer": "3"
        },
        {
            "id": "2679",
            "parentId": "299",
            "value": "龙里县",
            "layer": "3"
        },
        {
            "id": "2680",
            "parentId": "299",
            "value": "惠水县",
            "layer": "3"
        },
        {
            "id": "2681",
            "parentId": "299",
            "value": "三都水族自治县",
            "layer": "3"
        },
        {
            "id": "2682",
            "parentId": "300",
            "value": "五华区",
            "layer": "3"
        },
        {
            "id": "2683",
            "parentId": "300",
            "value": "盘龙区",
            "layer": "3"
        },
        {
            "id": "2684",
            "parentId": "300",
            "value": "官渡区",
            "layer": "3"
        },
        {
            "id": "2685",
            "parentId": "300",
            "value": "西山区",
            "layer": "3"
        },
        {
            "id": "2686",
            "parentId": "300",
            "value": "东川区",
            "layer": "3"
        },
        {
            "id": "2687",
            "parentId": "300",
            "value": "呈贡县",
            "layer": "3"
        },
        {
            "id": "2688",
            "parentId": "300",
            "value": "晋宁县",
            "layer": "3"
        },
        {
            "id": "2689",
            "parentId": "300",
            "value": "富民县",
            "layer": "3"
        },
        {
            "id": "2690",
            "parentId": "300",
            "value": "宜良县",
            "layer": "3"
        },
        {
            "id": "2691",
            "parentId": "300",
            "value": "石林彝族自治县",
            "layer": "3"
        },
        {
            "id": "2692",
            "parentId": "300",
            "value": "嵩明县",
            "layer": "3"
        },
        {
            "id": "2693",
            "parentId": "300",
            "value": "禄劝彝族苗族自治县",
            "layer": "3"
        },
        {
            "id": "2694",
            "parentId": "300",
            "value": "寻甸回族彝族自治县",
            "layer": "3"
        },
        {
            "id": "2695",
            "parentId": "300",
            "value": "安宁市",
            "layer": "3"
        },
        {
            "id": "2696",
            "parentId": "301",
            "value": "麒麟区",
            "layer": "3"
        },
        {
            "id": "2697",
            "parentId": "301",
            "value": "马龙县",
            "layer": "3"
        },
        {
            "id": "2698",
            "parentId": "301",
            "value": "陆良县",
            "layer": "3"
        },
        {
            "id": "2699",
            "parentId": "301",
            "value": "师宗县",
            "layer": "3"
        },
        {
            "id": "2700",
            "parentId": "301",
            "value": "罗平县",
            "layer": "3"
        },
        {
            "id": "2701",
            "parentId": "301",
            "value": "富源县",
            "layer": "3"
        },
        {
            "id": "2702",
            "parentId": "301",
            "value": "会泽县",
            "layer": "3"
        },
        {
            "id": "2703",
            "parentId": "301",
            "value": "沾益县",
            "layer": "3"
        },
        {
            "id": "2704",
            "parentId": "301",
            "value": "宣威市",
            "layer": "3"
        },
        {
            "id": "2705",
            "parentId": "302",
            "value": "红塔区",
            "layer": "3"
        },
        {
            "id": "2706",
            "parentId": "302",
            "value": "江川县",
            "layer": "3"
        },
        {
            "id": "2707",
            "parentId": "302",
            "value": "澄江县",
            "layer": "3"
        },
        {
            "id": "2708",
            "parentId": "302",
            "value": "通海县",
            "layer": "3"
        },
        {
            "id": "2709",
            "parentId": "302",
            "value": "华宁县",
            "layer": "3"
        },
        {
            "id": "2710",
            "parentId": "302",
            "value": "易门县",
            "layer": "3"
        },
        {
            "id": "2711",
            "parentId": "302",
            "value": "峨山彝族自治县",
            "layer": "3"
        },
        {
            "id": "2712",
            "parentId": "302",
            "value": "新平彝族傣族自治县",
            "layer": "3"
        },
        {
            "id": "2713",
            "parentId": "302",
            "value": "元江哈尼族彝族傣族自治县",
            "layer": "3"
        },
        {
            "id": "2714",
            "parentId": "303",
            "value": "隆阳区",
            "layer": "3"
        },
        {
            "id": "2715",
            "parentId": "303",
            "value": "施甸县",
            "layer": "3"
        },
        {
            "id": "2716",
            "parentId": "303",
            "value": "腾冲县",
            "layer": "3"
        },
        {
            "id": "2717",
            "parentId": "303",
            "value": "龙陵县",
            "layer": "3"
        },
        {
            "id": "2718",
            "parentId": "303",
            "value": "昌宁县",
            "layer": "3"
        },
        {
            "id": "2719",
            "parentId": "304",
            "value": "昭阳区",
            "layer": "3"
        },
        {
            "id": "2720",
            "parentId": "304",
            "value": "鲁甸县",
            "layer": "3"
        },
        {
            "id": "2721",
            "parentId": "304",
            "value": "巧家县",
            "layer": "3"
        },
        {
            "id": "2722",
            "parentId": "304",
            "value": "盐津县",
            "layer": "3"
        },
        {
            "id": "2723",
            "parentId": "304",
            "value": "大关县",
            "layer": "3"
        },
        {
            "id": "2724",
            "parentId": "304",
            "value": "永善县",
            "layer": "3"
        },
        {
            "id": "2725",
            "parentId": "304",
            "value": "绥江县",
            "layer": "3"
        },
        {
            "id": "2726",
            "parentId": "304",
            "value": "镇雄县",
            "layer": "3"
        },
        {
            "id": "2727",
            "parentId": "304",
            "value": "彝良县",
            "layer": "3"
        },
        {
            "id": "2728",
            "parentId": "304",
            "value": "威信县",
            "layer": "3"
        },
        {
            "id": "2729",
            "parentId": "304",
            "value": "水富县",
            "layer": "3"
        },
        {
            "id": "2730",
            "parentId": "305",
            "value": "古城区",
            "layer": "3"
        },
        {
            "id": "2731",
            "parentId": "305",
            "value": "玉龙纳西族自治县",
            "layer": "3"
        },
        {
            "id": "2732",
            "parentId": "305",
            "value": "永胜县",
            "layer": "3"
        },
        {
            "id": "2733",
            "parentId": "305",
            "value": "华坪县",
            "layer": "3"
        },
        {
            "id": "2734",
            "parentId": "305",
            "value": "宁蒗彝族自治县",
            "layer": "3"
        },
        {
            "id": "2735",
            "parentId": "306",
            "value": "翠云区",
            "layer": "3"
        },
        {
            "id": "2736",
            "parentId": "306",
            "value": "普洱哈尼族彝族自治县",
            "layer": "3"
        },
        {
            "id": "2737",
            "parentId": "306",
            "value": "墨江哈尼族自治县",
            "layer": "3"
        },
        {
            "id": "2738",
            "parentId": "306",
            "value": "景东彝族自治县",
            "layer": "3"
        },
        {
            "id": "2739",
            "parentId": "306",
            "value": "景谷傣族彝族自治县",
            "layer": "3"
        },
        {
            "id": "2740",
            "parentId": "306",
            "value": "镇沅彝族哈尼族拉祜族自治县",
            "layer": "3"
        },
        {
            "id": "2741",
            "parentId": "306",
            "value": "江城哈尼族彝族自治县",
            "layer": "3"
        },
        {
            "id": "2742",
            "parentId": "306",
            "value": "孟连傣族拉祜族佤族自治县",
            "layer": "3"
        },
        {
            "id": "2743",
            "parentId": "306",
            "value": "澜沧拉祜族自治县",
            "layer": "3"
        },
        {
            "id": "2744",
            "parentId": "306",
            "value": "西盟佤族自治县",
            "layer": "3"
        },
        {
            "id": "2745",
            "parentId": "307",
            "value": "临翔区",
            "layer": "3"
        },
        {
            "id": "2746",
            "parentId": "307",
            "value": "凤庆县",
            "layer": "3"
        },
        {
            "id": "2747",
            "parentId": "307",
            "value": "云　县",
            "layer": "3"
        },
        {
            "id": "2748",
            "parentId": "307",
            "value": "永德县",
            "layer": "3"
        },
        {
            "id": "2749",
            "parentId": "307",
            "value": "镇康县",
            "layer": "3"
        },
        {
            "id": "2750",
            "parentId": "307",
            "value": "双江拉祜族佤族布朗族傣族自治县",
            "layer": "3"
        },
        {
            "id": "2751",
            "parentId": "307",
            "value": "耿马傣族佤族自治县",
            "layer": "3"
        },
        {
            "id": "2752",
            "parentId": "307",
            "value": "沧源佤族自治县",
            "layer": "3"
        },
        {
            "id": "2753",
            "parentId": "308",
            "value": "楚雄市",
            "layer": "3"
        },
        {
            "id": "2754",
            "parentId": "308",
            "value": "双柏县",
            "layer": "3"
        },
        {
            "id": "2755",
            "parentId": "308",
            "value": "牟定县",
            "layer": "3"
        },
        {
            "id": "2756",
            "parentId": "308",
            "value": "南华县",
            "layer": "3"
        },
        {
            "id": "2757",
            "parentId": "308",
            "value": "姚安县",
            "layer": "3"
        },
        {
            "id": "2758",
            "parentId": "308",
            "value": "大姚县",
            "layer": "3"
        },
        {
            "id": "2759",
            "parentId": "308",
            "value": "永仁县",
            "layer": "3"
        },
        {
            "id": "2760",
            "parentId": "308",
            "value": "元谋县",
            "layer": "3"
        },
        {
            "id": "2761",
            "parentId": "308",
            "value": "武定县",
            "layer": "3"
        },
        {
            "id": "2762",
            "parentId": "308",
            "value": "禄丰县",
            "layer": "3"
        },
        {
            "id": "2763",
            "parentId": "309",
            "value": "个旧市",
            "layer": "3"
        },
        {
            "id": "2764",
            "parentId": "309",
            "value": "开远市",
            "layer": "3"
        },
        {
            "id": "2765",
            "parentId": "309",
            "value": "蒙自县",
            "layer": "3"
        },
        {
            "id": "2766",
            "parentId": "309",
            "value": "屏边苗族自治县",
            "layer": "3"
        },
        {
            "id": "2767",
            "parentId": "309",
            "value": "建水县",
            "layer": "3"
        },
        {
            "id": "2768",
            "parentId": "309",
            "value": "石屏县",
            "layer": "3"
        },
        {
            "id": "2769",
            "parentId": "309",
            "value": "弥勒县",
            "layer": "3"
        },
        {
            "id": "2770",
            "parentId": "309",
            "value": "泸西县",
            "layer": "3"
        },
        {
            "id": "2771",
            "parentId": "309",
            "value": "元阳县",
            "layer": "3"
        },
        {
            "id": "2772",
            "parentId": "309",
            "value": "红河县",
            "layer": "3"
        },
        {
            "id": "2773",
            "parentId": "309",
            "value": "金平苗族瑶族傣族自治县",
            "layer": "3"
        },
        {
            "id": "2774",
            "parentId": "309",
            "value": "绿春县",
            "layer": "3"
        },
        {
            "id": "2775",
            "parentId": "309",
            "value": "河口瑶族自治县",
            "layer": "3"
        },
        {
            "id": "2776",
            "parentId": "310",
            "value": "文山县",
            "layer": "3"
        },
        {
            "id": "2777",
            "parentId": "310",
            "value": "砚山县",
            "layer": "3"
        },
        {
            "id": "2778",
            "parentId": "310",
            "value": "西畴县",
            "layer": "3"
        },
        {
            "id": "2779",
            "parentId": "310",
            "value": "麻栗坡县",
            "layer": "3"
        },
        {
            "id": "2780",
            "parentId": "310",
            "value": "马关县",
            "layer": "3"
        },
        {
            "id": "2781",
            "parentId": "310",
            "value": "丘北县",
            "layer": "3"
        },
        {
            "id": "2782",
            "parentId": "310",
            "value": "广南县",
            "layer": "3"
        },
        {
            "id": "2783",
            "parentId": "310",
            "value": "富宁县",
            "layer": "3"
        },
        {
            "id": "2784",
            "parentId": "311",
            "value": "景洪市",
            "layer": "3"
        },
        {
            "id": "2785",
            "parentId": "311",
            "value": "勐海县",
            "layer": "3"
        },
        {
            "id": "2786",
            "parentId": "311",
            "value": "勐腊县",
            "layer": "3"
        },
        {
            "id": "2787",
            "parentId": "312",
            "value": "大理市",
            "layer": "3"
        },
        {
            "id": "2788",
            "parentId": "312",
            "value": "漾濞彝族自治县",
            "layer": "3"
        },
        {
            "id": "2789",
            "parentId": "312",
            "value": "祥云县",
            "layer": "3"
        },
        {
            "id": "2790",
            "parentId": "312",
            "value": "宾川县",
            "layer": "3"
        },
        {
            "id": "2791",
            "parentId": "312",
            "value": "弥渡县",
            "layer": "3"
        },
        {
            "id": "2792",
            "parentId": "312",
            "value": "南涧彝族自治县",
            "layer": "3"
        },
        {
            "id": "2793",
            "parentId": "312",
            "value": "巍山彝族回族自治县",
            "layer": "3"
        },
        {
            "id": "2794",
            "parentId": "312",
            "value": "永平县",
            "layer": "3"
        },
        {
            "id": "2795",
            "parentId": "312",
            "value": "云龙县",
            "layer": "3"
        },
        {
            "id": "2796",
            "parentId": "312",
            "value": "洱源县",
            "layer": "3"
        },
        {
            "id": "2797",
            "parentId": "312",
            "value": "剑川县",
            "layer": "3"
        },
        {
            "id": "2798",
            "parentId": "312",
            "value": "鹤庆县",
            "layer": "3"
        },
        {
            "id": "2799",
            "parentId": "313",
            "value": "瑞丽市",
            "layer": "3"
        },
        {
            "id": "2800",
            "parentId": "313",
            "value": "潞西市",
            "layer": "3"
        },
        {
            "id": "2801",
            "parentId": "313",
            "value": "梁河县",
            "layer": "3"
        },
        {
            "id": "2802",
            "parentId": "313",
            "value": "盈江县",
            "layer": "3"
        },
        {
            "id": "2803",
            "parentId": "313",
            "value": "陇川县",
            "layer": "3"
        },
        {
            "id": "2804",
            "parentId": "314",
            "value": "泸水县",
            "layer": "3"
        },
        {
            "id": "2805",
            "parentId": "314",
            "value": "福贡县",
            "layer": "3"
        },
        {
            "id": "2806",
            "parentId": "314",
            "value": "贡山独龙族怒族自治县",
            "layer": "3"
        },
        {
            "id": "2807",
            "parentId": "314",
            "value": "兰坪白族普米族自治县",
            "layer": "3"
        },
        {
            "id": "2808",
            "parentId": "315",
            "value": "香格里拉县",
            "layer": "3"
        },
        {
            "id": "2809",
            "parentId": "315",
            "value": "德钦县",
            "layer": "3"
        },
        {
            "id": "2810",
            "parentId": "315",
            "value": "维西傈僳族自治县",
            "layer": "3"
        },
        {
            "id": "2811",
            "parentId": "316",
            "value": "城关区",
            "layer": "3"
        },
        {
            "id": "2812",
            "parentId": "316",
            "value": "林周县",
            "layer": "3"
        },
        {
            "id": "2813",
            "parentId": "316",
            "value": "当雄县",
            "layer": "3"
        },
        {
            "id": "2814",
            "parentId": "316",
            "value": "尼木县",
            "layer": "3"
        },
        {
            "id": "2815",
            "parentId": "316",
            "value": "曲水县",
            "layer": "3"
        },
        {
            "id": "2816",
            "parentId": "316",
            "value": "堆龙德庆县",
            "layer": "3"
        },
        {
            "id": "2817",
            "parentId": "316",
            "value": "达孜县",
            "layer": "3"
        },
        {
            "id": "2818",
            "parentId": "316",
            "value": "墨竹工卡县",
            "layer": "3"
        },
        {
            "id": "2819",
            "parentId": "317",
            "value": "昌都县",
            "layer": "3"
        },
        {
            "id": "2820",
            "parentId": "317",
            "value": "江达县",
            "layer": "3"
        },
        {
            "id": "2821",
            "parentId": "317",
            "value": "贡觉县",
            "layer": "3"
        },
        {
            "id": "2822",
            "parentId": "317",
            "value": "类乌齐县",
            "layer": "3"
        },
        {
            "id": "2823",
            "parentId": "317",
            "value": "丁青县",
            "layer": "3"
        },
        {
            "id": "2824",
            "parentId": "317",
            "value": "察雅县",
            "layer": "3"
        },
        {
            "id": "2825",
            "parentId": "317",
            "value": "八宿县",
            "layer": "3"
        },
        {
            "id": "2826",
            "parentId": "317",
            "value": "左贡县",
            "layer": "3"
        },
        {
            "id": "2827",
            "parentId": "317",
            "value": "芒康县",
            "layer": "3"
        },
        {
            "id": "2828",
            "parentId": "317",
            "value": "洛隆县",
            "layer": "3"
        },
        {
            "id": "2829",
            "parentId": "317",
            "value": "边坝县",
            "layer": "3"
        },
        {
            "id": "2830",
            "parentId": "318",
            "value": "乃东县",
            "layer": "3"
        },
        {
            "id": "2831",
            "parentId": "318",
            "value": "扎囊县",
            "layer": "3"
        },
        {
            "id": "2832",
            "parentId": "318",
            "value": "贡嘎县",
            "layer": "3"
        },
        {
            "id": "2833",
            "parentId": "318",
            "value": "桑日县",
            "layer": "3"
        },
        {
            "id": "2834",
            "parentId": "318",
            "value": "琼结县",
            "layer": "3"
        },
        {
            "id": "2835",
            "parentId": "318",
            "value": "曲松县",
            "layer": "3"
        },
        {
            "id": "2836",
            "parentId": "318",
            "value": "措美县",
            "layer": "3"
        },
        {
            "id": "2837",
            "parentId": "318",
            "value": "洛扎县",
            "layer": "3"
        },
        {
            "id": "2838",
            "parentId": "318",
            "value": "加查县",
            "layer": "3"
        },
        {
            "id": "2839",
            "parentId": "318",
            "value": "隆子县",
            "layer": "3"
        },
        {
            "id": "2840",
            "parentId": "318",
            "value": "错那县",
            "layer": "3"
        },
        {
            "id": "2841",
            "parentId": "318",
            "value": "浪卡子县",
            "layer": "3"
        },
        {
            "id": "2842",
            "parentId": "319",
            "value": "日喀则市",
            "layer": "3"
        },
        {
            "id": "2843",
            "parentId": "319",
            "value": "南木林县",
            "layer": "3"
        },
        {
            "id": "2844",
            "parentId": "319",
            "value": "江孜县",
            "layer": "3"
        },
        {
            "id": "2845",
            "parentId": "319",
            "value": "定日县",
            "layer": "3"
        },
        {
            "id": "2846",
            "parentId": "319",
            "value": "萨迦县",
            "layer": "3"
        },
        {
            "id": "2847",
            "parentId": "319",
            "value": "拉孜县",
            "layer": "3"
        },
        {
            "id": "2848",
            "parentId": "319",
            "value": "昂仁县",
            "layer": "3"
        },
        {
            "id": "2849",
            "parentId": "319",
            "value": "谢通门县",
            "layer": "3"
        },
        {
            "id": "2850",
            "parentId": "319",
            "value": "白朗县",
            "layer": "3"
        },
        {
            "id": "2851",
            "parentId": "319",
            "value": "仁布县",
            "layer": "3"
        },
        {
            "id": "2852",
            "parentId": "319",
            "value": "康马县",
            "layer": "3"
        },
        {
            "id": "2853",
            "parentId": "319",
            "value": "定结县",
            "layer": "3"
        },
        {
            "id": "2854",
            "parentId": "319",
            "value": "仲巴县",
            "layer": "3"
        },
        {
            "id": "2855",
            "parentId": "319",
            "value": "亚东县",
            "layer": "3"
        },
        {
            "id": "2856",
            "parentId": "319",
            "value": "吉隆县",
            "layer": "3"
        },
        {
            "id": "2857",
            "parentId": "319",
            "value": "聂拉木县",
            "layer": "3"
        },
        {
            "id": "2858",
            "parentId": "319",
            "value": "萨嘎县",
            "layer": "3"
        },
        {
            "id": "2859",
            "parentId": "319",
            "value": "岗巴县",
            "layer": "3"
        },
        {
            "id": "2860",
            "parentId": "320",
            "value": "那曲县",
            "layer": "3"
        },
        {
            "id": "2861",
            "parentId": "320",
            "value": "嘉黎县",
            "layer": "3"
        },
        {
            "id": "2862",
            "parentId": "320",
            "value": "比如县",
            "layer": "3"
        },
        {
            "id": "2863",
            "parentId": "320",
            "value": "聂荣县",
            "layer": "3"
        },
        {
            "id": "2864",
            "parentId": "320",
            "value": "安多县",
            "layer": "3"
        },
        {
            "id": "2865",
            "parentId": "320",
            "value": "申扎县",
            "layer": "3"
        },
        {
            "id": "2866",
            "parentId": "320",
            "value": "索　县",
            "layer": "3"
        },
        {
            "id": "2867",
            "parentId": "320",
            "value": "班戈县",
            "layer": "3"
        },
        {
            "id": "2868",
            "parentId": "320",
            "value": "巴青县",
            "layer": "3"
        },
        {
            "id": "2869",
            "parentId": "320",
            "value": "尼玛县",
            "layer": "3"
        },
        {
            "id": "2870",
            "parentId": "321",
            "value": "普兰县",
            "layer": "3"
        },
        {
            "id": "2871",
            "parentId": "321",
            "value": "札达县",
            "layer": "3"
        },
        {
            "id": "2872",
            "parentId": "321",
            "value": "噶尔县",
            "layer": "3"
        },
        {
            "id": "2873",
            "parentId": "321",
            "value": "日土县",
            "layer": "3"
        },
        {
            "id": "2874",
            "parentId": "321",
            "value": "革吉县",
            "layer": "3"
        },
        {
            "id": "2875",
            "parentId": "321",
            "value": "改则县",
            "layer": "3"
        },
        {
            "id": "2876",
            "parentId": "321",
            "value": "措勤县",
            "layer": "3"
        },
        {
            "id": "2877",
            "parentId": "322",
            "value": "林芝县",
            "layer": "3"
        },
        {
            "id": "2878",
            "parentId": "322",
            "value": "工布江达县",
            "layer": "3"
        },
        {
            "id": "2879",
            "parentId": "322",
            "value": "米林县",
            "layer": "3"
        },
        {
            "id": "2880",
            "parentId": "322",
            "value": "墨脱县",
            "layer": "3"
        },
        {
            "id": "2881",
            "parentId": "322",
            "value": "波密县",
            "layer": "3"
        },
        {
            "id": "2882",
            "parentId": "322",
            "value": "察隅县",
            "layer": "3"
        },
        {
            "id": "2883",
            "parentId": "322",
            "value": "朗　县",
            "layer": "3"
        },
        {
            "id": "2884",
            "parentId": "323",
            "value": "新城区",
            "layer": "3"
        },
        {
            "id": "2885",
            "parentId": "323",
            "value": "碑林区",
            "layer": "3"
        },
        {
            "id": "2886",
            "parentId": "323",
            "value": "莲湖区",
            "layer": "3"
        },
        {
            "id": "2887",
            "parentId": "323",
            "value": "灞桥区",
            "layer": "3"
        },
        {
            "id": "2888",
            "parentId": "323",
            "value": "未央区",
            "layer": "3"
        },
        {
            "id": "2889",
            "parentId": "323",
            "value": "雁塔区",
            "layer": "3"
        },
        {
            "id": "2890",
            "parentId": "323",
            "value": "阎良区",
            "layer": "3"
        },
        {
            "id": "2891",
            "parentId": "323",
            "value": "临潼区",
            "layer": "3"
        },
        {
            "id": "2892",
            "parentId": "323",
            "value": "长安区",
            "layer": "3"
        },
        {
            "id": "2893",
            "parentId": "323",
            "value": "蓝田县",
            "layer": "3"
        },
        {
            "id": "2894",
            "parentId": "323",
            "value": "周至县",
            "layer": "3"
        },
        {
            "id": "2895",
            "parentId": "323",
            "value": "户　县",
            "layer": "3"
        },
        {
            "id": "2896",
            "parentId": "323",
            "value": "高陵县",
            "layer": "3"
        },
        {
            "id": "2897",
            "parentId": "324",
            "value": "王益区",
            "layer": "3"
        },
        {
            "id": "2898",
            "parentId": "324",
            "value": "印台区",
            "layer": "3"
        },
        {
            "id": "2899",
            "parentId": "324",
            "value": "耀州区",
            "layer": "3"
        },
        {
            "id": "2900",
            "parentId": "324",
            "value": "宜君县",
            "layer": "3"
        },
        {
            "id": "2901",
            "parentId": "325",
            "value": "渭滨区",
            "layer": "3"
        },
        {
            "id": "2902",
            "parentId": "325",
            "value": "金台区",
            "layer": "3"
        },
        {
            "id": "2903",
            "parentId": "325",
            "value": "陈仓区",
            "layer": "3"
        },
        {
            "id": "2904",
            "parentId": "325",
            "value": "凤翔县",
            "layer": "3"
        },
        {
            "id": "2905",
            "parentId": "325",
            "value": "岐山县",
            "layer": "3"
        },
        {
            "id": "2906",
            "parentId": "325",
            "value": "扶风县",
            "layer": "3"
        },
        {
            "id": "2907",
            "parentId": "325",
            "value": "眉　县",
            "layer": "3"
        },
        {
            "id": "2908",
            "parentId": "325",
            "value": "陇　县",
            "layer": "3"
        },
        {
            "id": "2909",
            "parentId": "325",
            "value": "千阳县",
            "layer": "3"
        },
        {
            "id": "2910",
            "parentId": "325",
            "value": "麟游县",
            "layer": "3"
        },
        {
            "id": "2911",
            "parentId": "325",
            "value": "凤　县",
            "layer": "3"
        },
        {
            "id": "2912",
            "parentId": "325",
            "value": "太白县",
            "layer": "3"
        },
        {
            "id": "2913",
            "parentId": "326",
            "value": "秦都区",
            "layer": "3"
        },
        {
            "id": "2914",
            "parentId": "326",
            "value": "杨凌区",
            "layer": "3"
        },
        {
            "id": "2915",
            "parentId": "326",
            "value": "渭城区",
            "layer": "3"
        },
        {
            "id": "2916",
            "parentId": "326",
            "value": "三原县",
            "layer": "3"
        },
        {
            "id": "2917",
            "parentId": "326",
            "value": "泾阳县",
            "layer": "3"
        },
        {
            "id": "2918",
            "parentId": "326",
            "value": "乾　县",
            "layer": "3"
        },
        {
            "id": "2919",
            "parentId": "326",
            "value": "礼泉县",
            "layer": "3"
        },
        {
            "id": "2920",
            "parentId": "326",
            "value": "永寿县",
            "layer": "3"
        },
        {
            "id": "2921",
            "parentId": "326",
            "value": "彬　县",
            "layer": "3"
        },
        {
            "id": "2922",
            "parentId": "326",
            "value": "长武县",
            "layer": "3"
        },
        {
            "id": "2923",
            "parentId": "326",
            "value": "旬邑县",
            "layer": "3"
        },
        {
            "id": "2924",
            "parentId": "326",
            "value": "淳化县",
            "layer": "3"
        },
        {
            "id": "2925",
            "parentId": "326",
            "value": "武功县",
            "layer": "3"
        },
        {
            "id": "2926",
            "parentId": "326",
            "value": "兴平市",
            "layer": "3"
        },
        {
            "id": "2927",
            "parentId": "327",
            "value": "临渭区",
            "layer": "3"
        },
        {
            "id": "2928",
            "parentId": "327",
            "value": "华　县",
            "layer": "3"
        },
        {
            "id": "2929",
            "parentId": "327",
            "value": "潼关县",
            "layer": "3"
        },
        {
            "id": "2930",
            "parentId": "327",
            "value": "大荔县",
            "layer": "3"
        },
        {
            "id": "2931",
            "parentId": "327",
            "value": "合阳县",
            "layer": "3"
        },
        {
            "id": "2932",
            "parentId": "327",
            "value": "澄城县",
            "layer": "3"
        },
        {
            "id": "2933",
            "parentId": "327",
            "value": "蒲城县",
            "layer": "3"
        },
        {
            "id": "2934",
            "parentId": "327",
            "value": "白水县",
            "layer": "3"
        },
        {
            "id": "2935",
            "parentId": "327",
            "value": "富平县",
            "layer": "3"
        },
        {
            "id": "2936",
            "parentId": "327",
            "value": "韩城市",
            "layer": "3"
        },
        {
            "id": "2937",
            "parentId": "327",
            "value": "华阴市",
            "layer": "3"
        },
        {
            "id": "2938",
            "parentId": "328",
            "value": "宝塔区",
            "layer": "3"
        },
        {
            "id": "2939",
            "parentId": "328",
            "value": "延长县",
            "layer": "3"
        },
        {
            "id": "2940",
            "parentId": "328",
            "value": "延川县",
            "layer": "3"
        },
        {
            "id": "2941",
            "parentId": "328",
            "value": "子长县",
            "layer": "3"
        },
        {
            "id": "2942",
            "parentId": "328",
            "value": "安塞县",
            "layer": "3"
        },
        {
            "id": "2943",
            "parentId": "328",
            "value": "志丹县",
            "layer": "3"
        },
        {
            "id": "2944",
            "parentId": "328",
            "value": "吴旗县",
            "layer": "3"
        },
        {
            "id": "2945",
            "parentId": "328",
            "value": "甘泉县",
            "layer": "3"
        },
        {
            "id": "2946",
            "parentId": "328",
            "value": "富　县",
            "layer": "3"
        },
        {
            "id": "2947",
            "parentId": "328",
            "value": "洛川县",
            "layer": "3"
        },
        {
            "id": "2948",
            "parentId": "328",
            "value": "宜川县",
            "layer": "3"
        },
        {
            "id": "2949",
            "parentId": "328",
            "value": "黄龙县",
            "layer": "3"
        },
        {
            "id": "2950",
            "parentId": "328",
            "value": "黄陵县",
            "layer": "3"
        },
        {
            "id": "2951",
            "parentId": "329",
            "value": "汉台区",
            "layer": "3"
        },
        {
            "id": "2952",
            "parentId": "329",
            "value": "南郑县",
            "layer": "3"
        },
        {
            "id": "2953",
            "parentId": "329",
            "value": "城固县",
            "layer": "3"
        },
        {
            "id": "2954",
            "parentId": "329",
            "value": "洋　县",
            "layer": "3"
        },
        {
            "id": "2955",
            "parentId": "329",
            "value": "西乡县",
            "layer": "3"
        },
        {
            "id": "2956",
            "parentId": "329",
            "value": "勉　县",
            "layer": "3"
        },
        {
            "id": "2957",
            "parentId": "329",
            "value": "宁强县",
            "layer": "3"
        },
        {
            "id": "2958",
            "parentId": "329",
            "value": "略阳县",
            "layer": "3"
        },
        {
            "id": "2959",
            "parentId": "329",
            "value": "镇巴县",
            "layer": "3"
        },
        {
            "id": "2960",
            "parentId": "329",
            "value": "留坝县",
            "layer": "3"
        },
        {
            "id": "2961",
            "parentId": "329",
            "value": "佛坪县",
            "layer": "3"
        },
        {
            "id": "2962",
            "parentId": "330",
            "value": "榆阳区",
            "layer": "3"
        },
        {
            "id": "2963",
            "parentId": "330",
            "value": "神木县",
            "layer": "3"
        },
        {
            "id": "2964",
            "parentId": "330",
            "value": "府谷县",
            "layer": "3"
        },
        {
            "id": "2965",
            "parentId": "330",
            "value": "横山县",
            "layer": "3"
        },
        {
            "id": "2966",
            "parentId": "330",
            "value": "靖边县",
            "layer": "3"
        },
        {
            "id": "2967",
            "parentId": "330",
            "value": "定边县",
            "layer": "3"
        },
        {
            "id": "2968",
            "parentId": "330",
            "value": "绥德县",
            "layer": "3"
        },
        {
            "id": "2969",
            "parentId": "330",
            "value": "米脂县",
            "layer": "3"
        },
        {
            "id": "2970",
            "parentId": "330",
            "value": "佳　县",
            "layer": "3"
        },
        {
            "id": "2971",
            "parentId": "330",
            "value": "吴堡县",
            "layer": "3"
        },
        {
            "id": "2972",
            "parentId": "330",
            "value": "清涧县",
            "layer": "3"
        },
        {
            "id": "2973",
            "parentId": "330",
            "value": "子洲县",
            "layer": "3"
        },
        {
            "id": "2974",
            "parentId": "331",
            "value": "汉滨区",
            "layer": "3"
        },
        {
            "id": "2975",
            "parentId": "331",
            "value": "汉阴县",
            "layer": "3"
        },
        {
            "id": "2976",
            "parentId": "331",
            "value": "石泉县",
            "layer": "3"
        },
        {
            "id": "2977",
            "parentId": "331",
            "value": "宁陕县",
            "layer": "3"
        },
        {
            "id": "2978",
            "parentId": "331",
            "value": "紫阳县",
            "layer": "3"
        },
        {
            "id": "2979",
            "parentId": "331",
            "value": "岚皋县",
            "layer": "3"
        },
        {
            "id": "2980",
            "parentId": "331",
            "value": "平利县",
            "layer": "3"
        },
        {
            "id": "2981",
            "parentId": "331",
            "value": "镇坪县",
            "layer": "3"
        },
        {
            "id": "2982",
            "parentId": "331",
            "value": "旬阳县",
            "layer": "3"
        },
        {
            "id": "2983",
            "parentId": "331",
            "value": "白河县",
            "layer": "3"
        },
        {
            "id": "2984",
            "parentId": "332",
            "value": "商州区",
            "layer": "3"
        },
        {
            "id": "2985",
            "parentId": "332",
            "value": "洛南县",
            "layer": "3"
        },
        {
            "id": "2986",
            "parentId": "332",
            "value": "丹凤县",
            "layer": "3"
        },
        {
            "id": "2987",
            "parentId": "332",
            "value": "商南县",
            "layer": "3"
        },
        {
            "id": "2988",
            "parentId": "332",
            "value": "山阳县",
            "layer": "3"
        },
        {
            "id": "2989",
            "parentId": "332",
            "value": "镇安县",
            "layer": "3"
        },
        {
            "id": "2990",
            "parentId": "332",
            "value": "柞水县",
            "layer": "3"
        },
        {
            "id": "2991",
            "parentId": "333",
            "value": "城关区",
            "layer": "3"
        },
        {
            "id": "2992",
            "parentId": "333",
            "value": "七里河区",
            "layer": "3"
        },
        {
            "id": "2993",
            "parentId": "333",
            "value": "西固区",
            "layer": "3"
        },
        {
            "id": "2994",
            "parentId": "333",
            "value": "安宁区",
            "layer": "3"
        },
        {
            "id": "2995",
            "parentId": "333",
            "value": "红古区",
            "layer": "3"
        },
        {
            "id": "2996",
            "parentId": "333",
            "value": "永登县",
            "layer": "3"
        },
        {
            "id": "2997",
            "parentId": "333",
            "value": "皋兰县",
            "layer": "3"
        },
        {
            "id": "2998",
            "parentId": "333",
            "value": "榆中县",
            "layer": "3"
        },
        {
            "id": "2999",
            "parentId": "335",
            "value": "金川区",
            "layer": "3"
        },
        {
            "id": "3000",
            "parentId": "335",
            "value": "永昌县",
            "layer": "3"
        },
        {
            "id": "3001",
            "parentId": "336",
            "value": "白银区",
            "layer": "3"
        },
        {
            "id": "3002",
            "parentId": "336",
            "value": "平川区",
            "layer": "3"
        },
        {
            "id": "3003",
            "parentId": "336",
            "value": "靖远县",
            "layer": "3"
        },
        {
            "id": "3004",
            "parentId": "336",
            "value": "会宁县",
            "layer": "3"
        },
        {
            "id": "3005",
            "parentId": "336",
            "value": "景泰县",
            "layer": "3"
        },
        {
            "id": "3006",
            "parentId": "337",
            "value": "秦城区",
            "layer": "3"
        },
        {
            "id": "3007",
            "parentId": "337",
            "value": "北道区",
            "layer": "3"
        },
        {
            "id": "3008",
            "parentId": "337",
            "value": "清水县",
            "layer": "3"
        },
        {
            "id": "3009",
            "parentId": "337",
            "value": "秦安县",
            "layer": "3"
        },
        {
            "id": "3010",
            "parentId": "337",
            "value": "甘谷县",
            "layer": "3"
        },
        {
            "id": "3011",
            "parentId": "337",
            "value": "武山县",
            "layer": "3"
        },
        {
            "id": "3012",
            "parentId": "337",
            "value": "张家川回族自治县",
            "layer": "3"
        },
        {
            "id": "3013",
            "parentId": "338",
            "value": "凉州区",
            "layer": "3"
        },
        {
            "id": "3014",
            "parentId": "338",
            "value": "民勤县",
            "layer": "3"
        },
        {
            "id": "3015",
            "parentId": "338",
            "value": "古浪县",
            "layer": "3"
        },
        {
            "id": "3016",
            "parentId": "338",
            "value": "天祝藏族自治县",
            "layer": "3"
        },
        {
            "id": "3017",
            "parentId": "339",
            "value": "甘州区",
            "layer": "3"
        },
        {
            "id": "3018",
            "parentId": "339",
            "value": "肃南裕固族自治县",
            "layer": "3"
        },
        {
            "id": "3019",
            "parentId": "339",
            "value": "民乐县",
            "layer": "3"
        },
        {
            "id": "3020",
            "parentId": "339",
            "value": "临泽县",
            "layer": "3"
        },
        {
            "id": "3021",
            "parentId": "339",
            "value": "高台县",
            "layer": "3"
        },
        {
            "id": "3022",
            "parentId": "339",
            "value": "山丹县",
            "layer": "3"
        },
        {
            "id": "3023",
            "parentId": "340",
            "value": "崆峒区",
            "layer": "3"
        },
        {
            "id": "3024",
            "parentId": "340",
            "value": "泾川县",
            "layer": "3"
        },
        {
            "id": "3025",
            "parentId": "340",
            "value": "灵台县",
            "layer": "3"
        },
        {
            "id": "3026",
            "parentId": "340",
            "value": "崇信县",
            "layer": "3"
        },
        {
            "id": "3027",
            "parentId": "340",
            "value": "华亭县",
            "layer": "3"
        },
        {
            "id": "3028",
            "parentId": "340",
            "value": "庄浪县",
            "layer": "3"
        },
        {
            "id": "3029",
            "parentId": "340",
            "value": "静宁县",
            "layer": "3"
        },
        {
            "id": "3030",
            "parentId": "341",
            "value": "肃州区",
            "layer": "3"
        },
        {
            "id": "3031",
            "parentId": "341",
            "value": "金塔县",
            "layer": "3"
        },
        {
            "id": "3032",
            "parentId": "341",
            "value": "安西县",
            "layer": "3"
        },
        {
            "id": "3033",
            "parentId": "341",
            "value": "肃北蒙古族自治县",
            "layer": "3"
        },
        {
            "id": "3034",
            "parentId": "341",
            "value": "阿克塞哈萨克族自治县",
            "layer": "3"
        },
        {
            "id": "3035",
            "parentId": "341",
            "value": "玉门市",
            "layer": "3"
        },
        {
            "id": "3036",
            "parentId": "341",
            "value": "敦煌市",
            "layer": "3"
        },
        {
            "id": "3037",
            "parentId": "342",
            "value": "西峰区",
            "layer": "3"
        },
        {
            "id": "3038",
            "parentId": "342",
            "value": "庆城县",
            "layer": "3"
        },
        {
            "id": "3039",
            "parentId": "342",
            "value": "环　县",
            "layer": "3"
        },
        {
            "id": "3040",
            "parentId": "342",
            "value": "华池县",
            "layer": "3"
        },
        {
            "id": "3041",
            "parentId": "342",
            "value": "合水县",
            "layer": "3"
        },
        {
            "id": "3042",
            "parentId": "342",
            "value": "正宁县",
            "layer": "3"
        },
        {
            "id": "3043",
            "parentId": "342",
            "value": "宁　县",
            "layer": "3"
        },
        {
            "id": "3044",
            "parentId": "342",
            "value": "镇原县",
            "layer": "3"
        },
        {
            "id": "3045",
            "parentId": "343",
            "value": "安定区",
            "layer": "3"
        },
        {
            "id": "3046",
            "parentId": "343",
            "value": "通渭县",
            "layer": "3"
        },
        {
            "id": "3047",
            "parentId": "343",
            "value": "陇西县",
            "layer": "3"
        },
        {
            "id": "3048",
            "parentId": "343",
            "value": "渭源县",
            "layer": "3"
        },
        {
            "id": "3049",
            "parentId": "343",
            "value": "临洮县",
            "layer": "3"
        },
        {
            "id": "3050",
            "parentId": "343",
            "value": "漳　县",
            "layer": "3"
        },
        {
            "id": "3051",
            "parentId": "343",
            "value": "岷　县",
            "layer": "3"
        },
        {
            "id": "3052",
            "parentId": "344",
            "value": "武都区",
            "layer": "3"
        },
        {
            "id": "3053",
            "parentId": "344",
            "value": "成　县",
            "layer": "3"
        },
        {
            "id": "3054",
            "parentId": "344",
            "value": "文　县",
            "layer": "3"
        },
        {
            "id": "3055",
            "parentId": "344",
            "value": "宕昌县",
            "layer": "3"
        },
        {
            "id": "3056",
            "parentId": "344",
            "value": "康　县",
            "layer": "3"
        },
        {
            "id": "3057",
            "parentId": "344",
            "value": "西和县",
            "layer": "3"
        },
        {
            "id": "3058",
            "parentId": "344",
            "value": "礼　县",
            "layer": "3"
        },
        {
            "id": "3059",
            "parentId": "344",
            "value": "徽　县",
            "layer": "3"
        },
        {
            "id": "3060",
            "parentId": "344",
            "value": "两当县",
            "layer": "3"
        },
        {
            "id": "3061",
            "parentId": "345",
            "value": "临夏市",
            "layer": "3"
        },
        {
            "id": "3062",
            "parentId": "345",
            "value": "临夏县",
            "layer": "3"
        },
        {
            "id": "3063",
            "parentId": "345",
            "value": "康乐县",
            "layer": "3"
        },
        {
            "id": "3064",
            "parentId": "345",
            "value": "永靖县",
            "layer": "3"
        },
        {
            "id": "3065",
            "parentId": "345",
            "value": "广河县",
            "layer": "3"
        },
        {
            "id": "3066",
            "parentId": "345",
            "value": "和政县",
            "layer": "3"
        },
        {
            "id": "3067",
            "parentId": "345",
            "value": "东乡族自治县",
            "layer": "3"
        },
        {
            "id": "3068",
            "parentId": "345",
            "value": "积石山保安族东乡族撒拉族自治县",
            "layer": "3"
        },
        {
            "id": "3069",
            "parentId": "346",
            "value": "合作市",
            "layer": "3"
        },
        {
            "id": "3070",
            "parentId": "346",
            "value": "临潭县",
            "layer": "3"
        },
        {
            "id": "3071",
            "parentId": "346",
            "value": "卓尼县",
            "layer": "3"
        },
        {
            "id": "3072",
            "parentId": "346",
            "value": "舟曲县",
            "layer": "3"
        },
        {
            "id": "3073",
            "parentId": "346",
            "value": "迭部县",
            "layer": "3"
        },
        {
            "id": "3074",
            "parentId": "346",
            "value": "玛曲县",
            "layer": "3"
        },
        {
            "id": "3075",
            "parentId": "346",
            "value": "碌曲县",
            "layer": "3"
        },
        {
            "id": "3076",
            "parentId": "346",
            "value": "夏河县",
            "layer": "3"
        },
        {
            "id": "3077",
            "parentId": "347",
            "value": "城东区",
            "layer": "3"
        },
        {
            "id": "3078",
            "parentId": "347",
            "value": "城中区",
            "layer": "3"
        },
        {
            "id": "3079",
            "parentId": "347",
            "value": "城西区",
            "layer": "3"
        },
        {
            "id": "3080",
            "parentId": "347",
            "value": "城北区",
            "layer": "3"
        },
        {
            "id": "3081",
            "parentId": "347",
            "value": "大通回族土族自治县",
            "layer": "3"
        },
        {
            "id": "3082",
            "parentId": "347",
            "value": "湟中县",
            "layer": "3"
        },
        {
            "id": "3083",
            "parentId": "347",
            "value": "湟源县",
            "layer": "3"
        },
        {
            "id": "3084",
            "parentId": "348",
            "value": "海东市",
            "layer": "3"
        },
        {
            "id": "3085",
            "parentId": "348",
            "value": "海东市",
            "layer": "3"
        },
        {
            "id": "3086",
            "parentId": "348",
            "value": "海东市",
            "layer": "3"
        },
        {
            "id": "3087",
            "parentId": "348",
            "value": "海东市",
            "layer": "3"
        },
        {
            "id": "3088",
            "parentId": "348",
            "value": "海东市",
            "layer": "3"
        },
        {
            "id": "3089",
            "parentId": "348",
            "value": "海东市",
            "layer": "3"
        },
        {
            "id": "3090",
            "parentId": "349",
            "value": "门源回族自治县",
            "layer": "3"
        },
        {
            "id": "3091",
            "parentId": "349",
            "value": "祁连县",
            "layer": "3"
        },
        {
            "id": "3092",
            "parentId": "349",
            "value": "海晏县",
            "layer": "3"
        },
        {
            "id": "3093",
            "parentId": "349",
            "value": "刚察县",
            "layer": "3"
        },
        {
            "id": "3094",
            "parentId": "350",
            "value": "同仁县",
            "layer": "3"
        },
        {
            "id": "3095",
            "parentId": "350",
            "value": "尖扎县",
            "layer": "3"
        },
        {
            "id": "3096",
            "parentId": "350",
            "value": "泽库县",
            "layer": "3"
        },
        {
            "id": "3097",
            "parentId": "350",
            "value": "河南蒙古族自治县",
            "layer": "3"
        },
        {
            "id": "3098",
            "parentId": "351",
            "value": "共和县",
            "layer": "3"
        },
        {
            "id": "3099",
            "parentId": "351",
            "value": "同德县",
            "layer": "3"
        },
        {
            "id": "3100",
            "parentId": "351",
            "value": "贵德县",
            "layer": "3"
        },
        {
            "id": "3101",
            "parentId": "351",
            "value": "兴海县",
            "layer": "3"
        },
        {
            "id": "3102",
            "parentId": "351",
            "value": "贵南县",
            "layer": "3"
        },
        {
            "id": "3103",
            "parentId": "352",
            "value": "玛沁县",
            "layer": "3"
        },
        {
            "id": "3104",
            "parentId": "352",
            "value": "班玛县",
            "layer": "3"
        },
        {
            "id": "3105",
            "parentId": "352",
            "value": "甘德县",
            "layer": "3"
        },
        {
            "id": "3106",
            "parentId": "352",
            "value": "达日县",
            "layer": "3"
        },
        {
            "id": "3107",
            "parentId": "352",
            "value": "久治县",
            "layer": "3"
        },
        {
            "id": "3108",
            "parentId": "352",
            "value": "玛多县",
            "layer": "3"
        },
        {
            "id": "3109",
            "parentId": "353",
            "value": "玉树县",
            "layer": "3"
        },
        {
            "id": "3110",
            "parentId": "353",
            "value": "杂多县",
            "layer": "3"
        },
        {
            "id": "3111",
            "parentId": "353",
            "value": "称多县",
            "layer": "3"
        },
        {
            "id": "3112",
            "parentId": "353",
            "value": "治多县",
            "layer": "3"
        },
        {
            "id": "3113",
            "parentId": "353",
            "value": "囊谦县",
            "layer": "3"
        },
        {
            "id": "3114",
            "parentId": "353",
            "value": "曲麻莱县",
            "layer": "3"
        },
        {
            "id": "3115",
            "parentId": "354",
            "value": "格尔木市",
            "layer": "3"
        },
        {
            "id": "3116",
            "parentId": "354",
            "value": "德令哈市",
            "layer": "3"
        },
        {
            "id": "3117",
            "parentId": "354",
            "value": "乌兰县",
            "layer": "3"
        },
        {
            "id": "3118",
            "parentId": "354",
            "value": "都兰县",
            "layer": "3"
        },
        {
            "id": "3119",
            "parentId": "354",
            "value": "天峻县",
            "layer": "3"
        },
        {
            "id": "3120",
            "parentId": "355",
            "value": "兴庆区",
            "layer": "3"
        },
        {
            "id": "3121",
            "parentId": "355",
            "value": "西夏区",
            "layer": "3"
        },
        {
            "id": "3122",
            "parentId": "355",
            "value": "金凤区",
            "layer": "3"
        },
        {
            "id": "3123",
            "parentId": "355",
            "value": "永宁县",
            "layer": "3"
        },
        {
            "id": "3124",
            "parentId": "355",
            "value": "贺兰县",
            "layer": "3"
        },
        {
            "id": "3125",
            "parentId": "355",
            "value": "灵武市",
            "layer": "3"
        },
        {
            "id": "3126",
            "parentId": "356",
            "value": "大武口区",
            "layer": "3"
        },
        {
            "id": "3127",
            "parentId": "356",
            "value": "惠农区",
            "layer": "3"
        },
        {
            "id": "3128",
            "parentId": "356",
            "value": "平罗县",
            "layer": "3"
        },
        {
            "id": "3129",
            "parentId": "357",
            "value": "利通区",
            "layer": "3"
        },
        {
            "id": "3130",
            "parentId": "357",
            "value": "盐池县",
            "layer": "3"
        },
        {
            "id": "3131",
            "parentId": "357",
            "value": "同心县",
            "layer": "3"
        },
        {
            "id": "3132",
            "parentId": "357",
            "value": "青铜峡市",
            "layer": "3"
        },
        {
            "id": "3133",
            "parentId": "358",
            "value": "原州区",
            "layer": "3"
        },
        {
            "id": "3134",
            "parentId": "358",
            "value": "西吉县",
            "layer": "3"
        },
        {
            "id": "3135",
            "parentId": "358",
            "value": "隆德县",
            "layer": "3"
        },
        {
            "id": "3136",
            "parentId": "358",
            "value": "泾源县",
            "layer": "3"
        },
        {
            "id": "3137",
            "parentId": "358",
            "value": "彭阳县",
            "layer": "3"
        },
        {
            "id": "3138",
            "parentId": "359",
            "value": "沙坡头区",
            "layer": "3"
        },
        {
            "id": "3139",
            "parentId": "359",
            "value": "中宁县",
            "layer": "3"
        },
        {
            "id": "3140",
            "parentId": "359",
            "value": "海原县",
            "layer": "3"
        },
        {
            "id": "3141",
            "parentId": "360",
            "value": "天山区",
            "layer": "3"
        },
        {
            "id": "3142",
            "parentId": "360",
            "value": "沙依巴克区",
            "layer": "3"
        },
        {
            "id": "3143",
            "parentId": "360",
            "value": "新市区",
            "layer": "3"
        },
        {
            "id": "3144",
            "parentId": "360",
            "value": "水磨沟区",
            "layer": "3"
        },
        {
            "id": "3145",
            "parentId": "360",
            "value": "头屯河区",
            "layer": "3"
        },
        {
            "id": "3146",
            "parentId": "360",
            "value": "达坂城区",
            "layer": "3"
        },
        {
            "id": "3147",
            "parentId": "360",
            "value": "东山区",
            "layer": "3"
        },
        {
            "id": "3148",
            "parentId": "360",
            "value": "乌鲁木齐县",
            "layer": "3"
        },
        {
            "id": "3149",
            "parentId": "361",
            "value": "独山子区",
            "layer": "3"
        },
        {
            "id": "3150",
            "parentId": "361",
            "value": "克拉玛依区",
            "layer": "3"
        },
        {
            "id": "3151",
            "parentId": "361",
            "value": "白碱滩区",
            "layer": "3"
        },
        {
            "id": "3152",
            "parentId": "361",
            "value": "乌尔禾区",
            "layer": "3"
        },
        {
            "id": "3153",
            "parentId": "362",
            "value": "吐鲁番市",
            "layer": "3"
        },
        {
            "id": "3154",
            "parentId": "362",
            "value": "鄯善县",
            "layer": "3"
        },
        {
            "id": "3155",
            "parentId": "362",
            "value": "托克逊县",
            "layer": "3"
        },
        {
            "id": "3156",
            "parentId": "363",
            "value": "哈密市",
            "layer": "3"
        },
        {
            "id": "3157",
            "parentId": "363",
            "value": "巴里坤哈萨克自治县",
            "layer": "3"
        },
        {
            "id": "3158",
            "parentId": "363",
            "value": "伊吾县",
            "layer": "3"
        },
        {
            "id": "3159",
            "parentId": "364",
            "value": "昌吉市",
            "layer": "3"
        },
        {
            "id": "3160",
            "parentId": "364",
            "value": "阜康市",
            "layer": "3"
        },
        {
            "id": "3161",
            "parentId": "364",
            "value": "米泉市",
            "layer": "3"
        },
        {
            "id": "3162",
            "parentId": "364",
            "value": "呼图壁县",
            "layer": "3"
        },
        {
            "id": "3163",
            "parentId": "364",
            "value": "玛纳斯县",
            "layer": "3"
        },
        {
            "id": "3164",
            "parentId": "364",
            "value": "奇台县",
            "layer": "3"
        },
        {
            "id": "3165",
            "parentId": "364",
            "value": "吉木萨尔县",
            "layer": "3"
        },
        {
            "id": "3166",
            "parentId": "364",
            "value": "木垒哈萨克自治县",
            "layer": "3"
        },
        {
            "id": "3167",
            "parentId": "365",
            "value": "博乐市",
            "layer": "3"
        },
        {
            "id": "3168",
            "parentId": "365",
            "value": "精河县",
            "layer": "3"
        },
        {
            "id": "3169",
            "parentId": "365",
            "value": "温泉县",
            "layer": "3"
        },
        {
            "id": "3170",
            "parentId": "366",
            "value": "库尔勒市",
            "layer": "3"
        },
        {
            "id": "3171",
            "parentId": "366",
            "value": "轮台县",
            "layer": "3"
        },
        {
            "id": "3172",
            "parentId": "366",
            "value": "尉犁县",
            "layer": "3"
        },
        {
            "id": "3173",
            "parentId": "366",
            "value": "若羌县",
            "layer": "3"
        },
        {
            "id": "3174",
            "parentId": "366",
            "value": "且末县",
            "layer": "3"
        },
        {
            "id": "3175",
            "parentId": "366",
            "value": "焉耆回族自治县",
            "layer": "3"
        },
        {
            "id": "3176",
            "parentId": "366",
            "value": "和静县",
            "layer": "3"
        },
        {
            "id": "3177",
            "parentId": "366",
            "value": "和硕县",
            "layer": "3"
        },
        {
            "id": "3178",
            "parentId": "366",
            "value": "博湖县",
            "layer": "3"
        },
        {
            "id": "3179",
            "parentId": "367",
            "value": "阿克苏市",
            "layer": "3"
        },
        {
            "id": "3180",
            "parentId": "367",
            "value": "温宿县",
            "layer": "3"
        },
        {
            "id": "3181",
            "parentId": "367",
            "value": "库车县",
            "layer": "3"
        },
        {
            "id": "3182",
            "parentId": "367",
            "value": "沙雅县",
            "layer": "3"
        },
        {
            "id": "3183",
            "parentId": "367",
            "value": "新和县",
            "layer": "3"
        },
        {
            "id": "3184",
            "parentId": "367",
            "value": "拜城县",
            "layer": "3"
        },
        {
            "id": "3185",
            "parentId": "367",
            "value": "乌什县",
            "layer": "3"
        },
        {
            "id": "3186",
            "parentId": "367",
            "value": "阿瓦提县",
            "layer": "3"
        },
        {
            "id": "3187",
            "parentId": "367",
            "value": "柯坪县",
            "layer": "3"
        },
        {
            "id": "3188",
            "parentId": "368",
            "value": "阿图什市",
            "layer": "3"
        },
        {
            "id": "3189",
            "parentId": "368",
            "value": "阿克陶县",
            "layer": "3"
        },
        {
            "id": "3190",
            "parentId": "368",
            "value": "阿合奇县",
            "layer": "3"
        },
        {
            "id": "3191",
            "parentId": "368",
            "value": "乌恰县",
            "layer": "3"
        },
        {
            "id": "3192",
            "parentId": "369",
            "value": "喀什市",
            "layer": "3"
        },
        {
            "id": "3193",
            "parentId": "369",
            "value": "疏附县",
            "layer": "3"
        },
        {
            "id": "3194",
            "parentId": "369",
            "value": "疏勒县",
            "layer": "3"
        },
        {
            "id": "3195",
            "parentId": "369",
            "value": "英吉沙县",
            "layer": "3"
        },
        {
            "id": "3196",
            "parentId": "369",
            "value": "泽普县",
            "layer": "3"
        },
        {
            "id": "3197",
            "parentId": "369",
            "value": "莎车县",
            "layer": "3"
        },
        {
            "id": "3198",
            "parentId": "369",
            "value": "叶城县",
            "layer": "3"
        },
        {
            "id": "3199",
            "parentId": "369",
            "value": "麦盖提县",
            "layer": "3"
        },
        {
            "id": "3200",
            "parentId": "369",
            "value": "岳普湖县",
            "layer": "3"
        },
        {
            "id": "3201",
            "parentId": "369",
            "value": "伽师县",
            "layer": "3"
        },
        {
            "id": "3202",
            "parentId": "369",
            "value": "巴楚县",
            "layer": "3"
        },
        {
            "id": "3203",
            "parentId": "369",
            "value": "塔什库尔干塔吉克自治县",
            "layer": "3"
        },
        {
            "id": "3204",
            "parentId": "370",
            "value": "和田市",
            "layer": "3"
        },
        {
            "id": "3205",
            "parentId": "370",
            "value": "和田县",
            "layer": "3"
        },
        {
            "id": "3206",
            "parentId": "370",
            "value": "墨玉县",
            "layer": "3"
        },
        {
            "id": "3207",
            "parentId": "370",
            "value": "皮山县",
            "layer": "3"
        },
        {
            "id": "3208",
            "parentId": "370",
            "value": "洛浦县",
            "layer": "3"
        },
        {
            "id": "3209",
            "parentId": "370",
            "value": "策勒县",
            "layer": "3"
        },
        {
            "id": "3210",
            "parentId": "370",
            "value": "于田县",
            "layer": "3"
        },
        {
            "id": "3211",
            "parentId": "370",
            "value": "民丰县",
            "layer": "3"
        },
        {
            "id": "3212",
            "parentId": "371",
            "value": "伊宁市",
            "layer": "3"
        },
        {
            "id": "3213",
            "parentId": "371",
            "value": "奎屯市",
            "layer": "3"
        },
        {
            "id": "3214",
            "parentId": "371",
            "value": "伊宁县",
            "layer": "3"
        },
        {
            "id": "3215",
            "parentId": "371",
            "value": "察布查尔锡伯自治县",
            "layer": "3"
        },
        {
            "id": "3216",
            "parentId": "371",
            "value": "霍城县",
            "layer": "3"
        },
        {
            "id": "3217",
            "parentId": "371",
            "value": "巩留县",
            "layer": "3"
        },
        {
            "id": "3218",
            "parentId": "371",
            "value": "新源县",
            "layer": "3"
        },
        {
            "id": "3219",
            "parentId": "371",
            "value": "昭苏县",
            "layer": "3"
        },
        {
            "id": "3220",
            "parentId": "371",
            "value": "特克斯县",
            "layer": "3"
        },
        {
            "id": "3221",
            "parentId": "371",
            "value": "尼勒克县",
            "layer": "3"
        },
        {
            "id": "3222",
            "parentId": "372",
            "value": "塔城市",
            "layer": "3"
        },
        {
            "id": "3223",
            "parentId": "372",
            "value": "乌苏市",
            "layer": "3"
        },
        {
            "id": "3224",
            "parentId": "372",
            "value": "额敏县",
            "layer": "3"
        },
        {
            "id": "3225",
            "parentId": "372",
            "value": "沙湾县",
            "layer": "3"
        },
        {
            "id": "3226",
            "parentId": "372",
            "value": "托里县",
            "layer": "3"
        },
        {
            "id": "3227",
            "parentId": "372",
            "value": "裕民县",
            "layer": "3"
        },
        {
            "id": "3228",
            "parentId": "372",
            "value": "和布克赛尔蒙古自治县",
            "layer": "3"
        },
        {
            "id": "3229",
            "parentId": "373",
            "value": "阿勒泰市",
            "layer": "3"
        },
        {
            "id": "3230",
            "parentId": "373",
            "value": "布尔津县",
            "layer": "3"
        },
        {
            "id": "3231",
            "parentId": "373",
            "value": "富蕴县",
            "layer": "3"
        },
        {
            "id": "3232",
            "parentId": "373",
            "value": "福海县",
            "layer": "3"
        },
        {
            "id": "3233",
            "parentId": "373",
            "value": "哈巴河县",
            "layer": "3"
        },
        {
            "id": "3234",
            "parentId": "373",
            "value": "青河县",
            "layer": "3"
        },
        {
            "id": "3235",
            "parentId": "373",
            "value": "吉木乃县",
            "layer": "3"
        },
        {
            "id": "3236",
            "parentId": "374",
            "value": "石河子市",
            "layer": "3"
        },
        {
            "id": "3237",
            "parentId": "31",
            "value": "阿拉尔市",
            "layer": "2"
        },
        {
            "id": "3238",
            "parentId": "31",
            "value": "图木舒克市",
            "layer": "2"
        },
        {
            "id": "3239",
            "parentId": "31",
            "value": "五家渠市",
            "layer": "2"
        },
        {
            "id": "3241",
            "parentId": "33",
            "value": "九龙",
            "layer": "2"
        },
        {
            "id": "3244",
            "parentId": "3241",
            "value": "中西区",
            "layer": "3"
        },
        {
            "id": "3246",
            "parentId": "1995",
            "value": "天门市",
            "layer": "3"
        },
        {
            "id": "3247",
            "parentId": "1996",
            "value": "潜江市",
            "layer": "3"
        },
        {
            "id": "3248",
            "parentId": "1997",
            "value": "神农架林区",
            "layer": "3"
        },
        {
            "id": "3249",
            "parentId": "3237",
            "value": "阿拉尔市",
            "layer": "3"
        },
        {
            "id": "3250",
            "parentId": "3238",
            "value": "图木舒克市",
            "layer": "3"
        },
        {
            "id": "3251",
            "parentId": "3239",
            "value": "五家渠市",
            "layer": "3"
        },
        {
            "id": "3252",
            "parentId": "3241",
            "value": "观塘",
            "layer": "3"
        },
        {
            "id": "3253",
            "parentId": "3241",
            "value": "黄大仙",
            "layer": "3"
        },
        {
            "id": "3254",
            "parentId": "3241",
            "value": "九龙城",
            "layer": "3"
        },
        {
            "id": "3255",
            "parentId": "3241",
            "value": "深水埗",
            "layer": "3"
        },
        {
            "id": "3256",
            "parentId": "3241",
            "value": "油尖旺",
            "layer": "3"
        },
        {
            "id": "3257",
            "parentId": "3269",
            "value": "东区",
            "layer": "3"
        },
        {
            "id": "3258",
            "parentId": "3269",
            "value": "南区",
            "layer": "3"
        },
        {
            "id": "3259",
            "parentId": "3269",
            "value": "湾仔",
            "layer": "3"
        },
        {
            "id": "3260",
            "parentId": "3269",
            "value": "中西",
            "layer": "3"
        },
        {
            "id": "3261",
            "parentId": "3270",
            "value": "北区",
            "layer": "3"
        },
        {
            "id": "3262",
            "parentId": "3270",
            "value": "大埔",
            "layer": "3"
        },
        {
            "id": "3263",
            "parentId": "3270",
            "value": "葵青",
            "layer": "3"
        },
        {
            "id": "3264",
            "parentId": "3270",
            "value": "离岛",
            "layer": "3"
        },
        {
            "id": "3265",
            "parentId": "3270",
            "value": "荃湾",
            "layer": "3"
        },
        {
            "id": "3266",
            "parentId": "3270",
            "value": "沙田",
            "layer": "3"
        },
        {
            "id": "3267",
            "parentId": "3270",
            "value": "屯门",
            "layer": "3"
        },
        {
            "id": "3268",
            "parentId": "3270",
            "value": "西贡",
            "layer": "3"
        },

        {
            "id": "3270",
            "parentId": "33",
            "value": "新界",
            "layer": "2"
        },
        {
            "id": "3271",
            "parentId": "3270",
            "value": "元朗",
            "layer": "3"
        },
        {
            "id": "3272",
            "parentId": "3242",
            "value": "离岛",
            "layer": "3"
        },
        {
            "id": "3288",
            "parentId": "124",
            "value": "南湖区",
            "layer": "3"
        },
        {
            "id": "3289",
            "parentId": "11",
            "value": "义乌市",
            "layer": "2"
        }
];
