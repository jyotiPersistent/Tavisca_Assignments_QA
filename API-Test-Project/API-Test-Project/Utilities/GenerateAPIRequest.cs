using API_Test_Project.JSONResponse;
using API_Test_Project.Utilities;
using Newtonsoft.Json.Linq;
using RestSharp;
using RestSharp.Serialization.Json;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;

namespace API_Test_Project.Service
{
   public class GenerateAPIRequest
    {
   
        public static void GenerateRequest(ref RestClient client, ref RestRequest request, string ClientUrl, RestSharp.Method method)
        {
            client = new RestClient(RestAPIUrl.GetClientURL(ClientUrl));

            request = new RestRequest(method);
        }
    }
}
