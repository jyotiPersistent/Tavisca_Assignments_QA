
using API_Test_Project.Configuration;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace API_Test_Project
{
    class Startup
    {
        public IConfigurationSetup _config { get; }
     
        public Startup(IConfigurationSetup config)
        {
            this._config = config;
        }

        public string Configure()
        {
           return this._config.ConfigureServices();
        }

    }
}