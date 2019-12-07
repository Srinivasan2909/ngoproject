namespace NgoPArt.Models
{
    using System;
    using System.Data.Entity;
    using System.Linq;
    using System.Web;
    

    public class MyContext : DbContext
    {
       
        public MyContext() : base("name=MyConnection")
        {

        }
        public DbSet <Ngo> Ngos { get; set; }
        public DbSet <User> Users { get; set; }
        public DbSet <Request> Requests { get; set; }
        public DbSet <Donation> Donations { get; set; }


        
    }

    //public class MyEntity
    //{
    //    public int Id { get; set; }
    //    public string Name { get; set; }
    //}
}