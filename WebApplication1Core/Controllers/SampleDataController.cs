using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication1Core.Model;
using Microsoft.EntityFrameworkCore;


namespace WebApplication1Core.Controllers
{

    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        ApplicationContext db;
        public SampleDataController(ApplicationContext context)
        {
            db = context;

        }
       
        [HttpGet("[action]")]
        public IEnumerable<Application> GetApplicaton()
        {
            IEnumerable<Application> application = db.Applications.Include(app => app.Category).ToList();
            return application;
        }
        [HttpGet("[action]")]
        public IEnumerable<string> GetApplicatonCategory()
        {
            IEnumerable<string> applicationCategory = db.Categories.Select(catName=>catName.Name).Distinct().ToList();
            return applicationCategory;
        }

        [HttpPost("[action]")]
        public void CreateApplicaton([FromBody]JsonParameter json)
        {
            try
            {
                Category category = db.Categories.First(catName => catName.Name == json.Category);
                Application application = new Application() { Name = json.Name, Category = category };
                db.Entry<Application>(application).State = EntityState.Added;
                db.SaveChanges();
                IEnumerable<Application> application2 = db.Applications.ToList();
            }
            catch (Exception ex)
            {
                var mess = ex.Message;
            }
        }
        [HttpPost("[action]")]
        public void CreateCategory([FromBody]JsonParameter json)
        {
            if (db.Categories.Where(catName => catName.Name == json.Category).Count() == 0)
            {
                Category category = new Category() { Name = json.Category };
                db.Entry<Category>(category).State = EntityState.Added;
                db.SaveChanges();
                IEnumerable<Application> application2 = db.Applications.ToList();
            }
        }

        [HttpPost("[action]")]
        public IEnumerable<Application> SearchAppByName([FromBody]JsonParameter json)
        {
            if (!String.IsNullOrWhiteSpace(json.Name))
            {
                return db.Applications.Where(app => string.Equals(app.Name, json.Name, StringComparison.CurrentCultureIgnoreCase)).Include(app => app.Category).ToList();
            }
            else
            {
                return db.Applications.Include(app => app.Category).ToList();
            }
        }

        [HttpPost("[action]")]
        public IEnumerable<Application> SearchAppByCategory([FromBody]JsonParameter json)
        {
            var v = db.Applications.Include(app => app.Category).Where(app => string.Equals(app.Category.Name, json.Category, StringComparison.CurrentCultureIgnoreCase)).ToList();
            return v;

        }
    }
}
