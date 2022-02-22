using Graduation_Project.core.Interfaces;
using Graduation_Project.core.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace Graduation_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        // This controller is for admin to see,add,edit and delete his Products
        private readonly IUnitOfWork _unitOfWork;
        public ProductController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        //this method retun all Categories
        [HttpGet(template: "{Categories}")]
        public List<Category> GeCategories()
        {
            List<Category> categories = _unitOfWork.Category.GetAll().ToList();
            return categories;
        }
        [HttpGet]
        public IActionResult GetFoodList()
        {

            var list = _unitOfWork.Products.Find(includes:new[] {"Category"}).ToList();
          
            return Ok(list);
        }

    }
}
