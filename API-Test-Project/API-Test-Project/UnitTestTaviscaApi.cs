using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using RestSharp;
using RestSharp.Serialization.Json;
using System.IO;
using API_Test_Project.JSONResponse;
using System.Net;
using System.Web;
using FluentAssertions;
using Xbehave;
using API_Test_Project.Utilities;
using API_Test_Project.Service;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using API_Test_Project.Configuration;

namespace API_Test_Project
{
    public class UnitTestTaviscaApi
    {
        private static string responseToken;
        private static string tenantId;
        private IRestResponse response;
     
        [SetUp]
        public void Setup()
        {
        }

        [Test,Order(1)]
        public void PostAPIContentTest()
        {
            //Act
   
            APIRequest.ExecutePOSTAPIRequest(ref response, ref responseToken, ref tenantId);

            //FluentAssertions 
            response.StatusCode.Should().Be(HttpStatusCode.OK);

            // assert      
            Assert.AreEqual(response.StatusCode, HttpStatusCode.OK);  
        }

        [Test, Order(2)]
        public void GetAPIContentTest()
        {
          
            APIRequest.ExecuteGETAPIRequest(ref response, responseToken,tenantId);

            //FluentAssertions 
            response.StatusCode.Should().Be(HttpStatusCode.OK);

            // assert
            Assert.AreEqual(response.StatusCode, HttpStatusCode.OK);
        }

        [Test, Order(3)]
        public void PutAPIContentTest()
        {

            APIRequest.ExecutePUTAPIRequest(ref response, responseToken, tenantId);

            //FluentAssertions 
            response.StatusCode.Should().Be(HttpStatusCode.OK);

            // assert
            Assert.AreEqual(response.StatusCode, HttpStatusCode.OK);
        }

        [Test, Order(4)]
        public void DeleteAPIContentTest()
        {

        }

    }
}
