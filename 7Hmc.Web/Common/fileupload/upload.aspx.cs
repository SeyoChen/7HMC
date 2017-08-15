using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Witsoft.PFP.Web.Admin;
using Newtonsoft.Json;

namespace Witsoft.BSTP.Web.Common.fileupload
{
    public partial class upload : WitsoftBasePage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // 获得程序路径
            string tempFile = Request.PhysicalApplicationPath;

            //找到目标文件对象
            HttpPostedFile uploadFile = Request.Files["Fdata"];

            //string filename = DateTime.Now.ToString("yyyyMMddHHMMss") + uploadFile.FileName;
            // string filename =  uploadFile.FileName;

            string[] strIdentity = JsonConvert.DeserializeObject<string[]>(User.Identity.Name);

            string fileExt = System.IO.Path.GetExtension(uploadFile.FileName).ToLower();//后缀名

            string filename = "(" + strIdentity[1] + ")" + DateTime.Now.ToString("yyyyMMddHHMMss") + fileExt;

            // 如果有文件, 则保存到一个地址
            if (uploadFile.ContentLength > 0)
            {
                uploadFile.SaveAs(string.Format("{0}{1}{2}", tempFile, "Common\\fileUpload\\upload\\", filename));
            }

            Response.Write(filename);    //可以返回一个JSON字符串, 在客户端做更多处理
        }
    }
}