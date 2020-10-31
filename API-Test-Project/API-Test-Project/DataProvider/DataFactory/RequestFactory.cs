using API_Test_Project.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace API_Test_Project.DataProvider.DataFactory
{
    public static class RequestFactory
    {

        #region POST REQUEST
          
        public static PostRequest SetupPostRequest()
        {
            PostRequest postRequest = new PostRequest();
            postRequest.agent = SetupAgent();
            postRequest.client = SetupClient();
            postRequest.userId = "5_3022929897";
            postRequest.programCurrency = SetupProgramCurrency();
            postRequest.transitCode = "437fd575-d320-45d6-b761-e4ad439123b1";
            postRequest.profile = SetupProfile();
            postRequest.additionalInfo = SetupAdditionalInfo();

            return postRequest;
        }

        public static Agent SetupAgent()
        {
            Agent agent = new Agent();
            agent.email = "johndoe@gmail.com";
            agent.id = "1234";
            agent.name = SetupName();
            return agent;
        }

        public static Name SetupName()
        {
            Name name = new Name();
            name.first = "John";
            name.middle = "C";
            name.last = "Doe";
            name.title = "Mr";
            return name;
        }
        
        public static Client SetupClient()
        {
            Client client = new Client();
            client.id = "5";
            client.name = "CapitalOne";
            client.programGroupId = "115";
            client.programId = "1116";
            client.programName = "VM1 program";
            client.culture = "en-US";
            client.posId = "61";
            client.cnxTenantId = "2oa4yayo000";

            return client;
        }

        public static ProgramCurrency SetupProgramCurrency()
        {
            ProgramCurrency programCurrency = new ProgramCurrency();
            programCurrency.type = "Points";
            programCurrency.value = 50000;
            return programCurrency;
        }

        public static Profile SetupProfile()
        {
            Profile profile = new Profile();
            profile.basicInfo = SetupBasicInfo();
            profile.addresses = SetupAddresses();
            profile.phones = SetupPhones();
            profile.emails = SetupEmails();

            return profile;
        }

        public static BasicInfo SetupBasicInfo()
        {
            BasicInfo basicInfo = new BasicInfo();
            basicInfo.name = SetupBasicInfoName();
            basicInfo.gender = "Male";
            basicInfo.dob = "1990-07-13";
            basicInfo.email="jsmith@gmail.com";
            return basicInfo;
        }

        public static Name2 SetupBasicInfoName()
        {
            Name2 name2 = new Name2();
            name2.first = "John";
            name2.middle = "P";
            name2.last = "Smith";
            name2.title = "Mr";
            return name2;
        }               

        public static City SetupCity()
        {
            City city = new City();
            city.code = "AUS";
            city.name = "Austin";
            return city;
        }

        public static State SetupState()
        {
            State state = new State();
            state.code = "Tx";
            state.name = "Texas";
            return state;

        }

        public static List<Address> SetupAddresses()
        {
            List<Address> addresses = new List<Address>()
            {
                new Address(){ type = "Home", line1 = "1010 South connexions loyalty Boulevard",line2 = "South Northern Ireland MS 110001",city = SetupCity(),state = SetupState(),countryCode = "United States",postalCode = "73301"},
            };

            return addresses;
        }

        public static List<Phone> SetupPhones()
        {
            List<Phone> phones = new List<Phone>()
            {
                new Phone(){ areaCode = "200",type = "Office",countryCode = "+1",ext = "123",num = "5556136635"},
            };
           
            return phones;
        }

        public static List<Email> SetupEmails()
        {
            List<Email> emails = new List<Email>()   {
                new Email(){ type = "Personal",value = "jsmith@gmail.com"},
                new Email(){ type = "Business",value = "johnsmith@gmail.com"}
            };

            return emails;
        }

        public static AdditionalInfo SetupAdditionalInfo()
        {
            AdditionalInfo additionalInfo = new AdditionalInfo();
            additionalInfo.Key1 = "Value1";
            additionalInfo.Key2 = "Value2";
            return additionalInfo;
        }

        #endregion POST REQUEST

        #region PUT REQUEST

        public static PutRequest SetuPutRequest()
        {
            PutRequest putRequest = new PutRequest();
            putRequest.gender= "Male";
            putRequest.dob = "1990-07-13";
            putRequest.email = "jsmith@gmail.com";
            putRequest.Name = SetupNameForPutRequest();

            return putRequest;
        }

        public static Name3 SetupNameForPutRequest()
        {
            Name3 name = new Name3();
            name.title = "Mr";
            name.first = "John";
            name.middle = "P";
            name.last = "Smith";
            return name;
        }


        #endregion  PUT REQUEST

    }
}
