using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using NgoPArt.Models;

namespace NgoPArt.Controllers.Api
{
    public class RequestsController : ApiController
    {
        private MyContext context;
        public RequestsController()
        {
            context = new MyContext();
        }
        [HttpGet]
        public IEnumerable<Request> GetRequest()
        {
            return context.Requests.ToList();
        }

        [HttpPost]
        public string createRequests(Request req)
        {
            
            context.Requests.Add(req);
            context.SaveChanges();
            return "Request submitted";
        }
    }
}
