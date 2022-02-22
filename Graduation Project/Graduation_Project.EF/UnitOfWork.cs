using Graduation_Project.core.Interfaces;
using Graduation_Project.core.Models;
using Graduation_Project.EF.Repositories;
using Graduation_Project.Helpers;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Graduation_Project.EF
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AppDbContext _Context;

        public IBaseRepository<Products> Products { get; private set; }
        public IBaseRepository<Category> Category { get; private set; }


        public IAuthorizeService AuthModel { get; private set; }

        //IBaseRepository<AuthModel> IUnitOfWork.AuthModel => throw new NotImplementedException();

        public UnitOfWork(AppDbContext Context 
            ,UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager,
            IOptions<Jwt> jwt)
        {
            _Context = Context;
             Products = new BaseRebository<Products>(_Context);
             AuthModel = new AuhorizeService(_Context, userManager, roleManager,jwt);
           
        }

        public int Complete()
        {
           return _Context.SaveChanges();
        }
    }
}
