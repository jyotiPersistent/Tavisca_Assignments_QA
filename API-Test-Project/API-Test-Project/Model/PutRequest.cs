using System;
using System.Collections.Generic;
using System.Text;

namespace API_Test_Project.Model
{
    public class PutRequest
    {
        public Name3 Name { get; set; }
        public string gender { get; set; }
        public string dob { get; set; }
        public string email { get; set; }
    }

    public class Name3
    {
        public string first { get; set; }
        public string last { get; set; }
        public string middle { get; set; }
        public string title { get; set; }
    }
    
}
