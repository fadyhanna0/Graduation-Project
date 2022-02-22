using Microsoft.AspNetCore.Mvc;

namespace Graduation_Project.Controllers
{
    public class CustomerController : Controller
    {
        // This controller is for customer to see the Products and make orders

        public IActionResult Index()
        {
            return View();
        }
    }
}
