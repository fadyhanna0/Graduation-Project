using Microsoft.AspNetCore.Mvc;

namespace Graduation_Project.Controllers
{
    public class ProductController : Controller
    {
        // This controller is for admin to see,add,edit and delete his Products
        public IActionResult Index()
        {
            return View();
        }
    }
}
