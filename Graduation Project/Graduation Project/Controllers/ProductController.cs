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
       
        [HttpGet]
        public IActionResult GetFoodList()
        {

            var list = _unitOfWork.Products.Find(includes:new[] {"Category"}).ToList();
          
            return Ok(list);
        }
        //this method to add product
        [HttpPost]
        public IActionResult Addproduct(Products products)
        {
                _unitOfWork.Products.Add(products);
                _unitOfWork.Complete();
                return Ok(products);
            
        }
        //this method to add some products
        [HttpPost(template: "Addsomeproducts")]
        public IActionResult Addsomeproducts(List<Products> products)
        {
            _unitOfWork.Products.AddRange(products);
            _unitOfWork.Complete();
            return Ok(products);

        }
        /////Edit product
        [HttpGet]
        [Route("Editproducts/{id}")]
        public IActionResult Editproduct(int id)
        {
            Products products = _unitOfWork.Products.GetById(id);
            return Ok(products);
        }
        [HttpPut(template:"{id}")]

        public IActionResult Editproduct(int id, [FromBody] Products products)
        {
            if (products.Id == id)
            {
                Products product = _unitOfWork.Products.GetById(id);
                if (product == null)
                {
                    return NotFound("No Product Found");
                }
                product.Name = products.Name;
                product.Description = products.Description;
                product.Category_Id = products.Category_Id;
                product.Price = products.Price;
                product.Image=products.Image;
               // _unitOfWork.Products.Update(products);
                _unitOfWork.Complete();
                return Ok();
            }
            else
                return NotFound("No  Found");
        }
        [HttpDelete]
        public IActionResult DeleteFood(int id)
        {
            Products product = _unitOfWork.Products.GetById(id);
            _unitOfWork.Products.Delete(product);
            _unitOfWork.Complete();
            return Ok();
        }


    }
}
