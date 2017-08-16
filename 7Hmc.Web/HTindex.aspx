<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="HTindex.aspx.cs" Inherits="_7Hmc.Web.HTindex" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">
    <title>互联网金融虚拟运营平台</title>
    <link rel="Shortcut Icon" href="../img/favicon.ico" type="image/x-icon" />
    <script src="Common/jquery-1.9.1.min.js" type="text/javascript"></script>
    <script src="Common/miniui/miniui.js" type="text/javascript"></script>
    <link href="Common/miniui/themes/default/miniui.css" rel="stylesheet" type="text/css" />
    <link href="Common/miniui/themes/icons.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript">
        function loginOut() {
            if (self.location != top.location) {
                window.top.location = 'Default.aspx';
            }
        }
        var bigImg = function (obj) {
            obj.src = "img/anniudj_js.png";
        }
        var normalImg = function (obj) {
            obj.src = "img/anniu_js.png";
        }

        $(document).ready(function () {
            $("input[name=txtUserName]").focus();
        });


    </script>
    <style type="text/css">
        body {
            margin: 0px auto;
            margin-right: 0px;
            padding: 0px;
            width: 100%;
            padding-top: 0px;
            height: 100%;
        }

        .inpForm {
            width: 200px;
            height: 20px;
            border: 0px;
            border-radius: 2px;
            color: #000;
            font-family: Verdana, 微软雅黑, 宋体;
            font-size: 18px;
            font-weight: normal;
            padding: 6px 3px 6px 2px;
        }

        .inpFocus {
            border-color: #0078a3 !important;
            box-shadow: 0 0 5px #0078a3;
        }

        .btnForm {
            background: url(img/anniu.png);
            border: 0px;
            font-family: 'Microsoft YaHei', 微软雅黑, 宋体;
            font-weight: bold;
            font-size: 16px;
            height: 40px;
            line-height: 38px;
            width: 260px;
        }

        .btnLogin1 {
            color: #fff;
            background-position: 0px 0px;
        }

        .login_foot {
            color: #90a0b7;
            width: 100%;
            height: 40px;
            line-height: 40px;
        }

        .error {
            color: #ff3232;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    </style>
</head>
<body onload="loginOut()">
    <div style="width: 100%; height: 100%; position: absolute; padding-top: 0px;">
        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; height: 100%">
            <tr style="height: 100px;">
                <td>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td width="100" height="70">&nbsp;
                            </td>
                            <td align="left" style="padding-top: 30px;">

                                <a style="color: #666666; font-size: 30px; font-family: 'Microsoft YaHei', 微软雅黑, 宋体;">
                                    <img alt="7HMC" title="7号名宠" src="img/Shangbiao.png" style="width: 50px; height: 50px; padding-right: 5px; vertical-align: middle;" />7号名宠网络商城后台系统</a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr style="background-color: #9fd4c4;">
                <td align="center">
                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tr>
                            <td align="center">
                                <table width="1088" border="0" cellpadding="0" cellspacing="0" align="center" height="418">
                                    <tr>
                                        <td align="left" valign="middle">
                                            <table width="100%" background="img/HTdenglu.jpg" border="0" cellspacing="0"
                                                cellpadding="0" height="418">
                                                <tr>
                                                    <td valign="top">
                                                        <table width="100%" border="0" align="right">
                                                            <tr style="height: 143px;">
                                                                <td style="width: 460px;">&nbsp;
                                                                </td>
                                                                <td style="width: 100px;">&nbsp;
                                                                </td>
                                                                <td style="width: 153px;">&nbsp;
                                                                </td>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr style="height: 60px;">
                                                                <td>&nbsp;
                                                                </td>
                                                                <td>&nbsp;
                                                                </td>
                                                                <td>&nbsp;
                                                                </td>
                                                                <td valign="middle" align="center">
                                                                    <input id="txtUserName" name="txtUserName" class="inpForm" type="text" maxlength="10"
                                                                        autocomplete="off" style="background-color: transparent;" value="" />
                                                                    &nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr style="height: 65px;">
                                                                <td>&nbsp;
                                                                </td>
                                                                <td>&nbsp;
                                                                </td>
                                                                <td>&nbsp;
                                                                </td>
                                                                <td valign="middle" align="center">
                                                                    <input id="txtUserPass" class="inpForm" type="password" maxlength="20" autocomplete="off"
                                                                        style="background-color: transparent;" />
                                                                    &nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr style="height: 74px;">
                                                                <td>&nbsp;
                                                                </td>
                                                                <td>&nbsp;
                                                                </td>
                                                                <td>&nbsp;
                                                                </td>
                                                                <td valign="bottom" style="padding-left: 35px;">
                                                                    <img src="img/anniu_js.png" id="btnLogin" style="cursor: pointer;" onmouseover="bigImg(this)"
                                                                        onmouseout="normalImg(this)" />
                                                                </td>
                                                            </tr>
                                                            <tr style="height: 20px; color: Red;">
                                                                <td>&nbsp;
                                                                </td>
                                                                <td>&nbsp;
                                                                </td>
                                                                <td>&nbsp;
                                                                </td>
                                                                <td style="padding-left: 131px; padding-top: 10px;">
                                                                    <div id="msgError" class="error">
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr style="height: 100px;">
                <td>
                    <table style="width: 35%; float: left;">
                        <tr align="right">
                            <td></td>
                        </tr>
                    </table>
                    <table width="63%" style="font-size: 12px;">
                        <tr>
                            <td align="center" valign="top"></td>
                        </tr>
                        <tr valign="middle">
                            <td height="35" valign="middle">
                                <span
                                    style="color: #272a2a;">版本号：</span><span style="color: #2da7c7;">V1.0</span>
                            </td>
                        </tr>
                        <tr valign="middle" height="10px">
                            <td>版权所有©深圳7号名宠网络有限公司&nbsp;&nbsp;&nbsp;&nbsp;咨询电话：<span style="color: #2da7c7;">13726292413</span>&nbsp;&nbsp;&nbsp;&nbsp;咨询QQ：<span
                                style="color: #2da7c7;">851623506</span><%--Copyright
                                <%=DateTime.Now.Year %>
                                ShenZhen Witsoft Information Technology Co., Ltd. All Rights Reserved--%>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
    <form id="form1" runat="server" style="display: none;">
    </form>
    <script type="text/jscript">

        mini.parse();

        $(function () {

            $('input.inpForm').bind('mousemove', function () { if (document.activeElement.id != this.id) { $(this).addClass('inpOver'); $(this).removeClass('inpFocus'); } });
            $('input.inpForm').bind('mouseout', function () { if (document.activeElement.id != this.id) { $(this).removeClass('inpOver'); $(this).removeClass('inpFocus'); } });
            $('input.inpForm').bind('focus', function () { $(this).removeClass('inpOver'); $(this).addClass('inpFocus'); });
            $('input.inpForm').bind('blur', function () { $(this).removeClass('inpOver inpFocus'); });
            $('input.inpForm').bind('keydown', function (e) { if (e.keyCode == 13) { if (this.id == 'txtUserPass') { $(this).trigger('blur'); $('#btnLogin').trigger('click'); } else if (this.id == 'txtUserName') { $('#txtUserPass').focus(); $('#txtUserPass').trigger('select'); } } });

            $('#btnLogin').bind('mouseover', function () { $(this).removeClass(); $(this).addClass('btnForm btnLogin2'); });
            $('#btnLogin').bind('mousedown', function () { $(this).removeClass(); $(this).addClass('btnForm btnLogin3'); });
            $('#btnLogin').bind('mouseout', function () { $(this).removeClass(); $(this).addClass('btnForm btnLogin1'); });



            $('#btnLogin').bind('click', function () {
                $('#msgError').html('&nbsp;');
                var strUser = $.trim($('#txtUserName').val());
                if (null === strUser || '' === strUser) { $('#msgError').text('账号不能为空'); $('#txtUserName').trigger('select'); return; }

                var strPass = $.trim($('#txtUserPass').val());
                if (null === strPass || '' === strPass) { $('#msgError').text('密码不能为空'); $('#txtUserPass').trigger('select'); return; }

                mini.mask({ el: document.body, cls: 'mini-mask-loading', html: '正在登录中...' });
                $.ajax({
                    url: 'HouTai/DengLuData.aspx',
                    type: 'post',
                    data: { App: 'LG', Anum: strUser, Pnum: strPass },
                    error: function (jqXHR, textStatus, errorThrown) { mini.unmask(document.body); mini.alert(jqXHR.responseText, '错误信息'); },
                    success: function (text) {
                        if (text != "") {
                            alert("登陆成功：" + text.split(',')[0] + "  " + text.split(',')[1] + "  " + text.split(',')[2]);
                            mini.unmask(document.body);
                        }
                        else {
                            mini.unmask(document.body);
                            $('#msgError').text(text.substr(1));
                        }
                    }
                });
            });
        });
    </script>
</body>
</html>
