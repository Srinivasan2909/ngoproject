using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using NgoPArt.Models;

namespace NgoPArt.Controllers.Api
{
    public class DonationController : ApiController
    {
        private MyContext context;

        public DonationController()
        {
            context = new MyContext();
        }
        [HttpPost]
        public object GetDonations(Request req)
        {
            var obj = from d in context.Donations.ToList()
                      group d by new { d.Request_Id } into g
                      select new { g.Key.Request_Id, V = g.Sum(x => x.Number_of_items_Donated) };

            //return obj.FirstOrDefault(x => x.Request_Id == req.RequestId);
            return "inside";
        }
    }
}
