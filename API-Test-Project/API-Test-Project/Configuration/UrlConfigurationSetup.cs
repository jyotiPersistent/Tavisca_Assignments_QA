using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Linq;

namespace API_Test_Project.Configuration
{
    public class UrlConfigurationSetup: IConfigurationSetup
    {
        public IConfigurationRoot configurationBuilder { get; }
        public string BaseUrl { get; }
        public string OperationUrl { get; set; }
        
        public UrlConfigurationSetup()
        {
              configurationBuilder = new ConfigurationBuilder()
                             .AddJsonFile(Path.GetFullPath("appsettings.json"))
                             .Build();

            BaseUrl = configurationBuilder["CLIENT_BASE_URL"];
        }
       
        public string ConfigureServices()
        {            
            string apiUrl = configurationBuilder[OperationUrl];

            string url = BaseUrl + apiUrl;

            return url;
        }

    }
}

