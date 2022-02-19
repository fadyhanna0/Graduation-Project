using Graduation_Project.core.Interfaces;
using Graduation_Project.core.Models;
using Graduation_Project.EF.Repositories;
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
        public UnitOfWork(AppDbContext Context)
        {
            _Context = Context;
            Products = new BaseRebository<Products>(_Context);
        }

        public int Complete()
        {
           return _Context.SaveChanges();
        }
    }
}
