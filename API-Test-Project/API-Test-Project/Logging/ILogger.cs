using System;
using System.Collections.Generic;
using System.Text;

namespace API_Test_Project.Logging
{
    interface ILogger
    {
        public void HandleError(Exception ex);
    }
}
