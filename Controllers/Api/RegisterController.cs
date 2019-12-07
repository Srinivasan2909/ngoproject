using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;
using NgoPArt.Models;

namespace NgoPArt.Controllers.Api
{
    public class RegisterController : ApiController
    {
        private MyContext context;

        public RegisterController()
        {
            context = new MyContext();
        }

        [HttpGet]
        public IEnumerable<Ngo> GetNgo()
        {
            return context.Ngos.ToList();
        }

        [HttpPost]
        public string Register(Ngo ngo)
        {
            int count = context.Ngos.Count();
            Ngo element = context.Ngos.FirstOrDefault(a => a.Ngo_Name == ngo.Ngo_Name);
            if (element != null && count != 0)
            {
                return "exist";
            }
            context.Ngos.Add(ngo);
            context.SaveChanges();
            return "created";
        }
    }
}
