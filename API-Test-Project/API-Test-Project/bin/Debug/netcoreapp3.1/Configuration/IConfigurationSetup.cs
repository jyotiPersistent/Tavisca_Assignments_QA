using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace API_Test_Project.Configuration
{
    interface IConfigurationSetup
    {
        IConfigurationRoot configurationBuilder { get; }
        string ConfigureServices();
    }
}
