using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;
using _7Hmc.DAL;
using _7Hmc.BLL;

using _7Hmc.BLL.HouTai;
namespace _7Hmc.Web.HouTai
{
    public partial class DengLuData : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                try
                {
                    switch (Request["App"])
                    {
                        case "LG":
                            Logining();
                            break;
                        default:
                            break;
                    }
                }
                catch (Exception ex)
                {
                    Response.Clear();
                    Response.Write(ex.Message);
                }
            }
        }

        #region 登录
        public void Logining()
        {
            string Anum = Request["Anum"];
            string Pnum = Request["Pnum"];
            T_Aduser Tadu = new T_Aduser();
            Tadu = new AduserBLL().GetAduData(Anum, Pnum);
            if (Tadu != null)
            {
                Response.Write(Tadu.Adusername + "," + Tadu.Adueraccountnum + "," + Tadu.Aduerphonenum);
            }
            else
            {
                Response.Write("");
            }
        }
        #endregion

        #region JM
        //++
        public static string JM7hmc0(string Miwen)
        {
            byte[] bytIn = System.Text.Encoding.Default.GetBytes(Miwen);
            byte[] iv = { 1, 2, 3, 4, 5, 6, 7, 8 }; //定义偏移量
            byte[] key = { 8, 7, 6, 5, 4, 3, 2, 1 }; //定义密钥
            //实例DES加密类         
            DESCryptoServiceProvider mobjCryptoService = new DESCryptoServiceProvider();
            mobjCryptoService.Key = iv;
            mobjCryptoService.IV = key;
            ICryptoTransform encrypto = mobjCryptoService.CreateEncryptor();
            //实例MemoryStream流加密密文件
            System.IO.MemoryStream ms = new System.IO.MemoryStream();
            CryptoStream cs = new CryptoStream(ms, encrypto, CryptoStreamMode.Write);
            cs.Write(bytIn, 0, bytIn.Length);
            cs.FlushFinalBlock();
            return System.Convert.ToBase64String(ms.ToArray());
        }

        //--
        public static string JM7hmc1(string Source)
        {
            //将解密字符串转换成字节数组         
            byte[] bytIn = System.Convert.FromBase64String(Source);
            //给出解密的密钥和偏移量，密钥和偏移量必须与加密时的密钥和偏移量相同     
            byte[] iv = { 1, 2, 3, 4, 5, 6, 7, 8 }; //定义偏移量
            byte[] key = { 8, 7, 6, 5, 4, 3, 2, 1 }; //定义密钥      
            DESCryptoServiceProvider mobjCryptoService = new DESCryptoServiceProvider();
            mobjCryptoService.Key = iv;
            mobjCryptoService.IV = key;
            //实例流进行解密     
            System.IO.MemoryStream ms = new System.IO.MemoryStream(bytIn, 0, bytIn.Length);
            ICryptoTransform encrypto = mobjCryptoService.CreateDecryptor();
            CryptoStream cs = new CryptoStream(ms, encrypto, CryptoStreamMode.Read);
            StreamReader strd = new StreamReader(cs);
            return strd.ReadToEnd();
        }
        #endregion
    }
}