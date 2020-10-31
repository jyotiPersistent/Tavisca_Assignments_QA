using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace API_Test_Project.JSONResponse
{
    public class ClientResponse
    {
        [JsonProperty("token")]
        public string Token { get; set; }

        [JsonProperty("cnxTenantId")]
        public string CnxTenantId { get; set; }
    }
}
