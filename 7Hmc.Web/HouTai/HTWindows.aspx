<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="HTWindows.aspx.cs" Inherits="_7Hmc.Web.HouTai.HTWindows" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>后台桌面</title>
    <style type="text/css">
        .D {
            border: 1px solid #9fd4c4;
        }

            .D:hover {
                cursor: pointer;
                border: 2px solid white;
            }
    </style>
</head>
<body style="background-color: #9fd4c4; font-family: 'Microsoft YaHei', 微软雅黑, 宋体;">
    <div style="height: 50px;">&nbsp;</div>
    <div style="width: 520px; height: 30px; margin-left: 100px; color: white; font-size: 14px; margin-top: 40px;">
        <a style="font-weight: bold;">管理员：<label id="Aduname" style="font-weight: normal;">吴彦祖</label></a>
    </div>
    <div style="width: 520px; height: 233px; margin-left: 100px; color: white;">
        <div style="width: 105px; height: 210px; float: left;">
            <div id="D1" class="D" style="width: 215px; height: 106px; float: left; background: url(Images/1.png)">
                <a style="font-size: 20px; line-height: 60px; margin-left: 25px;">商品管理</a>
            </div>
            <div id="D5" class="D" style="width: 215px; height: 106px; float: left; margin-top: 10px; background: url(Images/2.png)">
            </div>
        </div>
        <div style="width: 292px; height: 210px; float: right;">
            <div id="D2" class="D" style="width: 138px; height: 68px; float: left; background: url(Images/3.png)">
            </div>
            <div id="D3" class="D" style="width: 138px; height: 68px; float: left; margin-left: 10px; background: url(Images/4.png)">
            </div>
            <div id="D4" class="D" style="width: 288px; height: 144px; float: left; margin-top: 10px; background: url(Images/5.png)">
            </div>
        </div>
    </div>
    <div style="width: 506px; height: 161px; margin-left: 100px;">
        <div style="width: 336px; float: left;">
            <div id="D6" class="D" style="width: 331px; height: 162px; background: url(Images/7.png)">
            </div>
        </div>
        <div style="width: 162px; float: right;">
            <div id="D7" class="D" style="width: 172px; height: 76px; float: left; background: url(Images/11.png)">
            </div>
            <div id="D8" class="D" style="width: 172px; height: 76px; float: left; margin-top: 10px; background: url(Images/12.png)">
            </div>
        </div>
    </div>
</body>
</html>
