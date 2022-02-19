using Graduation_Project.core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Graduation_Project.core.Interfaces
{
    public interface IProductRepository:IBaseRepository<Products>
    {
        //special method for Products model  
        IEnumerable<Products> GetallProducts();
    }
}
