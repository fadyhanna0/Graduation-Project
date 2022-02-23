using Graduation_Project.core.Interfaces;
using Graduation_Project.core.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Graduation_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        // This controller is for customer to see the Products and make orders
        public CustomerController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        [HttpPost]
        public IActionResult AddInBasket([FromRoute] int id, int quantity)
        {
            string CustomerId = "1"/*Request.Cookies["CustomerId"].ToString()*/;
            var OldOrder = _unitOfWork.Order.Find(s => s.Customer_Id == CustomerId && s.Accepted == false);
            if (OldOrder == null)
            {
                Order neworder = new();
                neworder.Customer_Id = CustomerId;
                neworder.Accepted = false;
                neworder.DateTime = DateTime.Now.ToString();
                _unitOfWork.Order.Add(neworder);
                _unitOfWork.Complete();
                OldOrder = _unitOfWork.Order.Find(s => s.Customer_Id == CustomerId && s.Accepted == false);
            }
            var OldOrderItem = _unitOfWork.OrderItem.Find(s => s.Order_Id == OldOrder.Id && s.Product_Id == id);

            if (OldOrderItem == null)
            {
                Products products = _unitOfWork.Products.GetById(id);
                OrderItem orderitem = new();
                orderitem.Product_Id = id;
                orderitem.Order_Id = OldOrder.Id;
                orderitem.quantity = quantity;
                orderitem.Total_item_price = quantity * products.Price;
                _unitOfWork.OrderItem.Add(orderitem);
                _unitOfWork.Complete();
            }
            return Ok();
        }
        [HttpGet]
        public IActionResult getBasket()
        {
            decimal TotalPrice = 0;
            string CustomerId = "1"/*Request.Cookies["CustomerId"].ToString();*/;
            var OldOrder = _unitOfWork.Order.Find(s => s.Customer_Id == CustomerId && s.Accepted == false);
            List<OrderItem> OrderItem = new List<OrderItem>();
            if (OldOrder != null)
            {
                OrderItem = _unitOfWork.OrderItem.GetAll(s => s.Order_Id == OldOrder.Id).ToList();
            }
            foreach (var item in OrderItem)
            {
                TotalPrice += item.Total_item_price;
            }
           
            var Payment = _unitOfWork.Payment.GetAll();
        


            return Ok(new { OrderItem, TotalPrice, Payment });
        }

    }
}
