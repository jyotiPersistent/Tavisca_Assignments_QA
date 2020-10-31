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
    public class LoggingConfigurationSetup: IConfigurationSetup
    {
        public IConfigurationRoot configurationBuilder { get; }

        public LoggingConfigurationSetup()
        {
            configurationBuilder = new ConfigurationBuilder()
                               .AddJsonFile(Path.GetFullPath("appsettings.json"))
                               .Build();
        }

        public string ConfigureServices()
        {
            return "Logging configuration details";
        }

    }
}
