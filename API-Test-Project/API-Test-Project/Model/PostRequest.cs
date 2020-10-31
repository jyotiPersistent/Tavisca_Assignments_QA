using System;
using System.Collections.Generic;
using System.Text;

namespace API_Test_Project.Model
{
    // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse); 

    public class PostRequest
    {
        public Agent agent { get; set; }
        public Client client { get; set; }
        public string userId { get; set; }
        public ProgramCurrency programCurrency { get; set; }
        public string transitCode { get; set; }
        public Profile profile { get; set; }
        public AdditionalInfo additionalInfo { get; set; }
    }

    public class Name
    {
        public string first { get; set; }
        public string last { get; set; }
        public string middle { get; set; }
        public string title { get; set; }
    }

    public class Agent
    {
        public string email { get; set; }
        public string id { get; set; }
        public Name name { get; set; }
    }

    public class Client
    {
        public string id { get; set; }
        public string name { get; set; }
        public string programGroupId { get; set; }
        public string programId { get; set; }
        public string programName { get; set; }
        public string culture { get; set; }
        public string posId { get; set; }
        public string cnxTenantId { get; set; }
    }

    public class ProgramCurrency
    {
        public string type { get; set; }
        public int value { get; set; }
    }

    public class Name2
    {
        public string title { get; set; }
        public string first { get; set; }
        public string middle { get; set; }
        public string last { get; set; }
    }

    public class BasicInfo
    {
        public Name2 name { get; set; }
        public string gender { get; set; }
        public string dob { get; set; }
        public string email { get; set; }
    }

    public class City
    {
        public string code { get; set; }
        public string name { get; set; }
    }

    public class State
    {
        public string code { get; set; }
        public string name { get; set; }
    }

    public class Address
    {
        public string type { get; set; }
        public string line1 { get; set; }
        public string line2 { get; set; }
        public City city { get; set; }
        public State state { get; set; }
        public string countryCode { get; set; }
        public string postalCode { get; set; }
    }

    public class Phone
    {
        public string areaCode { get; set; }
        public string type { get; set; }
        public string countryCode { get; set; }
        public string ext { get; set; }
        public string num { get; set; }
    }

    public class Email
    {
        public string type { get; set; }
        public string value { get; set; }
    }

    public class Profile
    {
        public BasicInfo basicInfo { get; set; }
        public List<Address> addresses { get; set; }
        public List<Phone> phones { get; set; }
        public List<Email> emails { get; set; }
    }

    public class AdditionalInfo
    {
        public string Key1 { get; set; }
        public string Key2 { get; set; }
    }




}
