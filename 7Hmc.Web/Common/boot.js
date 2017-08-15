__CreateJSPath = function (js) {
    var scripts = document.getElementsByTagName("script");
    var path = "";
    for (var i = 0, l = scripts.length; i < l; i++) {
        var src = scripts[i].src;
        if (src.indexOf(js) != -1) {
            var ss = src.split(js);
            path = ss[0];
            break;
        }
    }
    var href = location.href;
    href = href.split("#")[0];
    href = href.split("?")[0];
    var ss = href.split("/");
    ss.length = ss.length - 1;
    href = ss.join("/");
    if (path.indexOf("https:") == -1 && path.indexOf("http:") == -1 && path.indexOf("file:") == -1 && path.indexOf("\/") != 0) {
        path = href + "/" + path;
    }
    return path;
}

var bootPATH = __CreateJSPath("boot.js");

mini_debugger = false;

//miniui
document.write('<script src="' + bootPATH + 'jquery-1.9.1.min.js" type="text/javascript"></sc' + 'ript>');
document.write('<script src="' + bootPATH + 'miniui/miniui.js" type="text/javascript" ></sc' + 'ript>');
document.write('<link href="' + bootPATH + 'miniui/themes/default/miniui.css" rel="stylesheet" type="text/css" />');
document.write('<link href="' + bootPATH + 'miniui/themes/icons.css" rel="stylesheet" type="text/css" />');
//document.write('<link href="' + bootPATH + 'miniui/themes/blue/skin.css" rel="stylesheet" type="text/css" />');


//skin
var skin = getCookie("miniuiSkin");
if (skin) {
    document.write('<link href="' + bootPATH + 'miniui/themes/' + skin + '/skin.css" rel="stylesheet" type="text/css" />');
}

//document.write('<link href="' + bootPATH + 'miniui/themes/bootstrap/skin.css" rel="stylesheet" type="text/css" />');


///////////////////////////////////////屏蔽左键复制粘贴/////////////////////////////////////////////////

// document.oncontextmenu = new Function("event.returnValue=false;");
// document.onselectstart = new Function("event.returnValue=false;");


/////////////验证证件号不匹配两次输入///////////////////////////////////////////////
var onValidatezjhmb = function (e) {
    var length = e.sender.getValue().length;
    var ddl = mini.get("IDCardType").getValue();
    if (length == "0") {
        e.errorText = "不能为空";
        e.isValid = false;
    } else if (ddl == "1") {
        if (length != "18") {
            e.errorText = "身份证的的长度为18位字符";
            e.isValid = false;
        }
    } else if (ddl == "2") {
        if (length != "9") {
            e.errorText = "护照的的长度为9位字符";
            e.isValid = false;
        }
    } else if (ddl == "3") {
        if (length != "8") {
            e.errorText = "军官证的的长度为8位字符";
            e.isValid = false;
        }
    } else if (ddl == "0") {
        if (length != "18") {
            e.errorText = "营业执照的的长度为18位字符";
            e.isValid = false;
        }
    } else {
        e.errorText = "请选择证件类型！";
        e.isValid = false;

    }
};

/////////////验证证件号匹配两次输入///////////////////////////////////////////////
var onValidatezjhm = function (e) {
    var length = e.sender.getValue().length;
    var ddl = mini.get("IDCardType").getValue();
    if (length == "0") {
        e.errorText = "不能为空";
        e.isValid = false;
    } else if (ddl == "1") {
        if (length != "18") {
            e.errorText = "身份证的的长度为18位字符";
            e.isValid = false;
        }
    } else if (ddl == "2") {
        if (length != "9") {
            e.errorText = "护照的的长度为9位字符";
            e.isValid = false;
        }
    } else if (ddl == "3") {
        if (length != "8") {
            e.errorText = "军官证的的长度为8位字符";
            e.isValid = false;
        }
    } else if (ddl == "0") {
        if (length != "18") {
            e.errorText = "营业执照的的长度为18位字符";
            e.isValid = false;
        }
    } else {
        if (e.value != ridno.value) {
            e.errorText = "两次输入的号码不一致！";
            e.isValid = false;
        }
    }
};

function ValidValue(e) {
    if (e.isValid) {
        var str = e.value
        str = str.replace(/(^\s*)|(\s*$)/g, "");
        if (str == "" || str == null) {
            e.errorText = "不能为空";
            e.isValid = false;
         } else {
            if (isValilue(str) == false) {
                e.errorText = "不能输入特殊字符";
                e.isValid = false;
            } 
        }
    }
}

function isValilue(textbox) {
    var IllegalString = "[`~!#$^&*@()=|{}':;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘’";
    var textboxvalue = textbox;
    var index = textboxvalue.length - 1;

    var s = textbox.charAt(index);

    if (IllegalString.indexOf(s) >= 0) {
        return false;
    } else {
        return true;
    }

}


//JS函数用于获取url参数:
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}


////////////////////////////////////////////////////////////////////////////////////////
function getCookie(sName) {
    var aCookie = document.cookie.split("; ");
    var lastMatch = null;
    for (var i = 0; i < aCookie.length; i++) {
        var aCrumb = aCookie[i].split("=");
        if (sName == aCrumb[0]) {
            lastMatch = aCrumb;
        }
    }
    if (lastMatch) {
        var v = lastMatch[1];
        if (v === undefined) return v;
        return unescape(v);
    }
    return null;
}

//js日期转换成yyyy-MM-dd
function Todate(num) { //Fri Oct 31 18:00:00 UTC+0800 2008
    if (num != "" && num != null) {
        num = num + "";
        var date = "";
        var month = new Array();
        month["Jan"] = "01"; month["Feb"] = "02"; month["Mar"] = "03"; month["Apr"] = "04"; month["May"] = "05"; month["Jun"] = "06";
        month["Jul"] = "07"; month["Aug"] = "08"; month["Sep"] = "09"; month["Oct"] = "10"; month["Nov"] = "11"; month["Dec"] = "12";
        var week = new Array();
        week["Mon"] = "一"; week["Tue"] = "二"; week["Wed"] = "三"; week["Thu"] = "四"; week["Fri"] = "五"; week["Sat"] = "六"; week["Sun"] = "日";
        str = num.split(" ");
        date = str[5] + "-";
        if (str[5] == undefined) {
            date = "";
        } else {
            if (str[5] == "GMT+0800") {
                date = str[3] + "-" + month[str[1]] + "-" + str[2];
            }
            else {
                date = date + month[str[1]] + "-" + str[2];
            }
        }
        return date;
    }
}


//日期增加N天  yyyy-MM-dd
function getNewDay(days) { //Fri Oct 31 18:00:00 UTC+0800 2008

    var ss = (new Date()).getTime() + (days * 24 * 60 * 60 * 1000);
    var newTime = new Date(ss); //就得到普通的时间了

    var s = Todate(newTime);
    return s;
}

//日期增加N天  yyyy-MM-dd
function getNewDay(num, days) { //Fri Oct 31 18:00:00 UTC+0800 2008

    var ss = num.getTime() + (days * 24 * 60 * 60 * 1000);
    var newTime = new Date(ss); //就得到普通的时间了

    var s = Todate(newTime);
    return s;
}

function stringToDate(str) {
    var arr = str.split(/\s|-|:/);
    var year = parseInt(arr[0]);
    var month = parseInt(arr[1].charAt(0)) * 10 + parseInt(arr[1].charAt(1));
    var date = parseInt(arr[2].charAt(0)) * 10 + parseInt(arr[2].charAt(1));

    var hour = parseInt(arr[3].charAt(0)) * 10 + parseInt(arr[3].charAt(1));
    var minute = parseInt(arr[4].charAt(0)) * 10 + parseInt(arr[4].charAt(1));
    var second = parseInt(arr[5].charAt(0)) * 10 + parseInt(arr[5].charAt(1));

    return new Date(year, month - 1, date, hour, minute, second);
}

//js日期转换成yyyy-MM-dd HH:mm:ss
function Todates(num) { //Fri Oct 31 18:00:00 UTC+0800 2008
    if (num != "" && num != null) {
        num = num + "";
        var date = "";
        var month = new Array();
        month["Jan"] = "01"; month["Feb"] = "02"; month["Mar"] = "03"; month["Apr"] = "04"; month["May"] = "05"; month["Jun"] = "06";
        month["Jul"] = "07"; month["Aug"] = "08"; month["Sep"] = "09"; month["Oct"] = "10"; month["Nov"] = "11"; month["Dec"] = "12";
        var week = new Array();
        week["Mon"] = "一"; week["Tue"] = "二"; week["Wed"] = "三"; week["Thu"] = "四"; week["Fri"] = "五"; week["Sat"] = "六"; week["Sun"] = "日";
        str = num.split(" ");
        date = str[5] + "-";
        if (str[5] == undefined) {
            date = "";
        } else {
            if (str[5] == "GMT+0800") {
                date = str[3] + "-" + month[str[1]] + "-" + str[2] + " " + str[4];
            }
            else {
                date = date + month[str[1]] + "-" + str[2] + " " + str[3];
            }
        }
        return date;
    }
}

//将2016-12-12T00:00:00+08:00格式时间转换为2016-12-12时间
function BackToDate(num) {
    if (num != "" && num != null && num != undefined && num != NaN) {
        num = num + "";
        var sp = num.split("T");
        return sp[0];
    }
}

//将秒转换成 时分秒
function formatSeconds(value) {
    var theTime = parseInt(value); // 秒
    var theTime1 = 0; // 分
    var theTime2 = 0; // 小时
    if (theTime > 60) {
        theTime1 = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (theTime1 > 60) {
            theTime2 = parseInt(theTime1 / 60);
            theTime1 = parseInt(theTime1 % 60);
        }
    }
    var result = "" + parseInt(theTime) + "秒";
    if (theTime1 > 0) {
        result = "" + parseInt(theTime1) + "分" + result;
    }
    if (theTime2 > 0) {
        result = "" + parseInt(theTime2) + "时" + result;
    }
    return result;
}

//+---------------------------------------------------  
//| 字符串转成日期类型   
//| 格式 MM/dd/YYYY MM-dd-YYYY YYYY/MM/dd YYYY-MM-dd  
//+---------------------------------------------------  
function StringToDate(DateStr) {

    var converted = Date.parse(DateStr);
    var myDate = new Date(converted);
    if (isNaN(myDate)) {
        //var delimCahar = DateStr.indexOf('/')!=-1?'/':'-';  
        var arys = DateStr.split('-');
        myDate = new Date(arys[0], --arys[1], arys[2]);
    }
    return myDate;
}

//金额格式00,000,000.00
function fmoney(s, n) {
    if (s == null || s == "") {
        return "0.00";
    } else {
        n = n > 0 && n <= 20 ? n : 2;
        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        var l = s.split(".")[0].split("").reverse(),
   r = s.split(".")[1];
        t = "";
        for (i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
        }
        return (t.split("").reverse().join("") + "." + r).replace("-,", "-");
    }
}


function CmycurD(num)// 转换人民币大小金额  ￥
{

    var snm = parseFloat(num);
    if (snm < 10) {
        num = "0.0" + snm;
    } else if (snm >= 10 && snm < 100) {
        num = "0." + snm;
    } else {
        num = snm / 100;
    }

    var str1 = "零壹贰叁肆伍陆柒捌玖";            //0-9所对应的汉字 
    var str2 = "万仟佰拾亿仟佰拾万仟佰拾元角分"; //数字位所对应的汉字 
    var str3 = "";    //从原num值中取出的值 
    var str4 = "";    //数字的字符串形式 
    var str5 = "";  //人民币大写金额形式 
    var i = 0;    //循环变量 
    var j = 0;    //num的值乘以100的字符串长度 
    var ch1 = "";    //数字的汉语读法 
    var ch2 = "";    //数字位的汉字读法 
    var nzero = 0;  //用来计算连续的零值是几个 
    var temp;            //从原num值中取出的值 

    str4 = (parseInt(Math.round(Math.abs((parseFloat(num)).toFixed(2) * 100)))).toString();        //将num乘100并转换成字符串形式 
    j = str4.length;      //找出最高位 
    if (j > 15) { return ""; }
    str2 = str2.substr(15 - j);   //取出对应位数的str2的值。如：200.55,j为5所以str2=佰拾元角分 

    //循环取出每一位需要转换的值 
    for (i = 0; i < j; i++) {
        str3 = str4.substr(i, 1);          //取出需转换的某一位的值 
        temp = parseInt(str3);      //转换为数字 
        if (i != (j - 3) && i != (j - 7) && i != (j - 11) && i != (j - 15)) {
            //当所取位数不为元、万、亿、万亿上的数字时 
            if (str3 == "0") {
                ch1 = "";
                ch2 = "";
                nzero = nzero + 1;
            }
            else {
                if (str3 != "0" && nzero != 0) {
                    ch1 = "零" + str1.substr(temp * 1, 1);
                    ch2 = str2.substr(i, 1);
                    nzero = 0;
                }
                else {
                    ch1 = str1.substr(temp * 1, 1);
                    ch2 = str2.substr(i, 1);
                    nzero = 0;
                }
            }
        }
        else {
            //该位是万亿，亿，万，元位等关键位 
            if (str3 != "0" && nzero != 0) {
                ch1 = "零" + str1.substr(temp * 1, 1);
                ch2 = str2.substr(i, 1);
                nzero = 0;
            }
            else {
                if (str3 != "0" && nzero == 0) {
                    ch1 = str1.substr(temp * 1, 1);
                    ch2 = str2.substr(i, 1);
                    nzero = 0;
                }
                else {
                    if (str3 == "0" && nzero >= 3) {
                        ch1 = "";
                        ch2 = "";
                        nzero = nzero + 1;
                    }
                    else {
                        if (j >= 11) {
                            ch1 = "";
                            nzero = nzero + 1;
                        }
                        else {
                            ch1 = "";
                            ch2 = str2.substr(i, 1);
                            nzero = nzero + 1;
                        }
                    }
                }
            }
        }
        if (i == (j - 11) || i == (j - 3)) {
            //如果该位是亿位或元位，则必须写上
            ch2 = str2.substr(i, 1);
        }
        str5 = str5 + ch1 + ch2;

        if (i == j - 1 && str3 == "0") {
            //最后一位（分）为0时，加上“整” 
            str5 = str5 + '整';
        }
    }
    if (num == 0) {
        str5 = "零元整";
    }
    return str5;
}


//替换富文本框中特殊符号
function toTxt(str) {
    if (str != null && str != "") {
        var RexStr = /\<|\>|\"|\'|\&/g
        str = str.replace(RexStr, function (MatchStr) {
            switch (MatchStr) {
                case "<":
                    return "&lt;";
                    break;
                case ">":
                    return "&gt;";
                    break;
                case "\"":
                    return "&quot;";
                    break;
                case "'":
                    return "&#39;";
                    break;
                case "&":
                    return "&amp;";
                    break;
                default:
                    break;
            }
        })
        return str;
    }
}
//把数据库中替换过的特殊符号替换回来
function toHtml(str) {
    if (str != null && str != "") {
        var RexStr = /\&lt;|\&gt;|\&quot;|\&#39;|\&amp;/g
        str = str.replace(RexStr, function (MatchStr) {
            switch (MatchStr) {
                case "&lt;":
                    return "<";
                    break;
                case "&gt;":
                    return ">";
                    break;
                case "&quot;":
                    return "\"";
                    break;
                case "&#39;":
                    return "'";
                    break;
                case "&amp;":
                    return "&";
                    break;
                default:
                    break;
            }
        })
        return str;
    }
}

//验证身份证是否合法
function isCardID(sId) {
    var iSum = 0;
    var info = "1";
    if (!/^\d{17}(\d|x)$/i.test(sId))
        info = "您输入的身份证长度或格式错误";
    sId = sId.replace(/x$/i, "a");
    sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
    var d = new Date(sBirthday.replace(/-/g, "/"));
    if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) {
        info = "身份证上的出生日期非法";
    }
    else {
        var sYear = Number(sId.substr(6, 4));
        if (sYear < 1900) {
            info = "身份证上的出生日期必须小于1900年";
        }
    }
    return info;
}

//验证身份证是否合法
function isCardIDs(sId) {
    var aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" }
    var iSum = 0;
    var info = "1";
    if (!/^\d{17}(\d|x)$/i.test(sId))
        info = "你输入的身份证长度或格式错误";
    sId = sId.replace(/x$/i, "a");
    if (aCity[parseInt(sId.substr(0, 2))] == null)
        info = "你的身份证地区非法";
    sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
    var d = new Date(sBirthday.replace(/-/g, "/"));
    if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()))
        info = "身份证上的出生日期非法";
    for (var i = 17; i >= 0; i--)
        iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
    if (iSum % 11 != 1)
        info = "你输入的身份证号非法";
    return info;
}

//去空格类
String.prototype.trim = function () {
    if (this.replace != undefined) {
        return this.replace(/(^\s*)|(\s*$)/g, "");
    }
}
