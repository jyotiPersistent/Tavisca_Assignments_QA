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
    public static class APIRequest
    {
        private static RestClient client;
        private static RestRequest request;
        
        public static void ExecutePOSTAPIRequest(ref IRestResponse response, ref string responseToken, ref string tenantId)
        {
            GenerateAPIRequest.GenerateRequest(ref client, ref request, "CLIENT_POST_URL", Method.POST);
          
            RestAPIHeaders.AddPOSTRequestHeaders(ref request);

            RestAPIRequestData.AddPOSTRequestData(ref request);
        
            response = client.Execute(request);

            ClientResponse clientResponse = new JsonDeserializer().Deserialize<ClientResponse>(response);

            responseToken = clientResponse.Token;

            tenantId = clientResponse.CnxTenantId;

        }

        public static void ExecuteGETAPIRequest(ref IRestResponse response, string responseToken, string tenantId)
        {
            GenerateAPIRequest.GenerateRequest(ref client, ref request, "CLIENT_GET_URL", Method.GET);

            RestAPIHeaders.AddGETRequestHeaders(ref request, responseToken, tenantId);

            response = client.Execute(request);
        }

        public static void ExecutePUTAPIRequest(ref IRestResponse response, string responseToken, string tenantId)
        {
            GenerateAPIRequest.GenerateRequest(ref client, ref request, "CLIENT_PUT_URL", Method.PUT);

            RestAPIHeaders.AddPUTRequestHeaders(ref request, responseToken, tenantId);

            RestAPIRequestData.AddPUTRequestData(ref request);
           
            response = client.Execute(request);
        }
    }
}
