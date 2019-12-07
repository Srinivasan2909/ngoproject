using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using NgoPArt.Models;
using System.Data.Entity;

namespace NgoPArt.Controllers.Api
{
    public class LoginController : ApiController
    {
        private MyContext context;

        public LoginController()
        {
            context = new MyContext();

        }

        [HttpPost]

        public Ngo Login(Ngo ngo)
        {
            Ngo element = context.Ngos.FirstOrDefault(u => u.Username == ngo.Username && u.Password == ngo.Password);
            if (element == null)
            {
                return null;
            }
            return element;
        }
    }
}
