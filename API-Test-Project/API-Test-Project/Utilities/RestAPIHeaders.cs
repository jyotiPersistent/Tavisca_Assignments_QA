using RestSharp;
using System;
using System.Collections.Generic;
using System.Text;

namespace API_Test_Project.Utilities
{
    public static class RestAPIHeaders
    {
        private static Dictionary<string, string> baseHeaders = new Dictionary<string, string>
        {
            { "content-type", "application/json" },
            { "Accept", "*/*" },
            { "Cache-Control", "no-cache" },
            { "Host", "orxe-api.qa.cnxloyalty.com" },
            { "Connection", "keep-alive" },
            { "accept-encoding", "gzip, deflate"},
            { "accept-language", "en-US,en;q=0.8" }
        };

        public static void AddPOSTRequestHeaders(ref RestRequest request )
        {
            request.AddHeaders(baseHeaders);
        }

        public static void AddGETRequestHeaders(ref RestRequest request, string responseToken, string tenantId)
        {
            Dictionary<string, string> headers = new Dictionary<string, string>
            {
                { "orxe-sessionid", responseToken},
                { "cnx-tenantId", tenantId }
            };

            request.AddHeaders(baseHeaders);
            request.AddHeaders(headers);
        }

        public static void AddPUTRequestHeaders(ref RestRequest request, string responseToken, string tenantId)
        {
            Dictionary<string, string> headers = new Dictionary<string, string>
            {
                { "orxe-sessionid", responseToken},
                { "cnx-tenantId", tenantId }
            };

            request.AddHeaders(baseHeaders);
            request.AddHeaders(headers);
        }

        public static void AddDELETEequestHeaders(ref RestRequest request)
        {

        }

    }
}
