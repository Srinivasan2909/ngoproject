using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using NgoPArt.Models;

namespace NgoPArt.Controllers.Api
{
    public class NgoController : ApiController
    {
        private MyContext db;
        public NgoController()
        {
            db = new MyContext();
        }
        [HttpGet]
        public object GetDonations()
        {
            var obj = from d in db.Donations.ToList()
                      group d by new { d.Request_Id } into g
                      select new { g.Key.Request_Id, V = g.Sum(x => x.Number_of_items_Donated) };

            return obj;
        }
        [HttpPost]
        public IEnumerable<Request> GetRequestsbyID(Ngo ngo)
        {
            return db.Requests.Where(x => x.Ngo_id == ngo.Id);
        }
    }
}
