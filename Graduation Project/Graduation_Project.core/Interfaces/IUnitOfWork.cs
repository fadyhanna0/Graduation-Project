using Graduation_Project.core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Graduation_Project.core.Interfaces
{
    public interface IUnitOfWork
    {
        public IBaseRepository<Products> Products { get; }
        public IBaseRepository<Category> Category { get; }

        public IAuthorizeService AuthModel { get; }
        int Complete();
    }
}
