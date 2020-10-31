using API_Test_Project.DataProvider.DataFactory;
using API_Test_Project.Model;
using Newtonsoft.Json;
using RestSharp;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace API_Test_Project.Utilities
{
    public static class RestAPIRequestData
    {
        public static void AddPOSTRequestData(ref RestRequest request)
        {
            // string jsonBody = File.ReadAllText(@"D:\API-Test-Project\API-Test-Project\JSONRequest\PosRequest.json");

            PostRequest postRequest = RequestFactory.SetupPostRequest();
            string jsonBody = JsonConvert.SerializeObject(postRequest, Formatting.Indented);

            request.AddJsonBody(jsonBody);
        }

        public static void AddPUTRequestData(ref RestRequest request)
        {
            string jsonBody = File.ReadAllText(@"D:\API-Test-Project\API-Test-Project\JSONRequest\PutRequest.json");

            //PutRequest postRequest = RequestFactory.setupp();
            //string jsonBody = JsonConvert.SerializeObject(postRequest, Formatting.Indented);

            request.AddJsonBody(jsonBody);
        }
    }
}
