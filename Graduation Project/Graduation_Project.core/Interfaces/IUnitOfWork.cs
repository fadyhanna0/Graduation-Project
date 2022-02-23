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
        public IBaseRepository<Order> Order { get; }
        public IBaseRepository<OrderItem> OrderItem { get;  }
        public IBaseRepository<Payment> Payment { get; }


        public IAuthorizeService AuthModel { get; }
        int Complete();
    }
}
