using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApplication1Core.Model;

namespace WebApplication1Core.Helper
{
    static public class InitializationDatabase
    {
        static public void Initialization(ApplicationContext context)
        {

            foreach (var id in context.Applications.Select(e => e.Id))
            {
                var entity = new Application { Id = id };
                context.Applications.Attach(entity);
                context.Applications.Remove(entity);
            }
            context.SaveChanges();

            Category action = new Category() { Name = "Action" };
            context.Add(action);
            Category adventure = new Category() { Name = "Adventure" };
            context.Add(adventure);
            Category rpg = new Category() { Name = "RPG" };
            context.Add(rpg);
            context.SaveChanges();
           
            context.AddRange(
               new Application() { Name = "ELEX", Category = rpg },
               new Application() { Name = "Little Nightmares", Category = adventure },
               new Application() { Name = "The Bunker", Category = adventure },
               new Application() { Name = "Fortnight", Category = action },
               new Application() { Name = "Nioh", Category = action });
            context.SaveChanges();
        }
    }
}
