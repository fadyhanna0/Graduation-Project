using Graduation_Project.core.Interfaces;
using Graduation_Project.core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Graduation_Project.EF.Repositories
{
    public class ProductRepository: BaseRebository<Products>,IProductRepository
    {
        private  readonly AppDbContext _context;
        public ProductRepository(AppDbContext context) :base(context)
        {
            _context= context;
        }
       public IEnumerable<Products> GetallProducts()
        {
            return _context.Products;
        }

       
    }
}
