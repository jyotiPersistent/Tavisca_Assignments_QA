using API_Test_Project.Configuration;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace API_Test_Project.Utilities
{
    public static class RestAPIUrl
    {

        public static string GetClientURL(string operationUrl)
        {
           //create dependency
            UrlConfigurationSetup urlConfigurationSetup = new UrlConfigurationSetup();
            urlConfigurationSetup.OperationUrl = operationUrl;

            //inject dependency
            Startup startup = new Startup(urlConfigurationSetup);
           
            string url= startup.Configure();

            return url;
        }
    }
}
