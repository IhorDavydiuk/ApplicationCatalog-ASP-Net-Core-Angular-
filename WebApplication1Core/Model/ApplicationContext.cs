using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace WebApplication1Core.Model
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> dbContOption) : base(dbContOption)
        {
        }
        public DbSet<Application> Applications { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}
