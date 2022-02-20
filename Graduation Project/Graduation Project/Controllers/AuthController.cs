using Graduation_Project.core.Interfaces;
using Graduation_Project.core.Models;

using Graduation_Project.EF;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Graduation_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork ;
            public AuthController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
       
        [HttpPost("register")]
        public async Task<IActionResult> RegisterAsync([FromBody] RegisterModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
        
            var result = await _unitOfWork.AuthModel.RegisterAsync(model);
            
            if (!result.IsAuthenticated)
                return BadRequest(result.Message);

            return Ok(result);
            //if i dont want to return full result 
           // return Ok(new { result.Token, result.ExpiresOn });
        }
        [HttpPost("token")]
        public async Task<IActionResult> GetTokenAsync([FromBody] TokenRequestModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await _unitOfWork.AuthModel.GetTokenAsync(model);
        
            if (!result.IsAuthenticated)
                return BadRequest(result.Message);

            return Ok(result);
            
        }
        [Authorize]
        [HttpPost("addrole")]
        
        public async Task<IActionResult> AddRoleAsync([FromBody] AddRoleModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await _unitOfWork.AuthModel.AddRoleAsync(model);

            //if (result is not null)
            if(!string.IsNullOrEmpty(result))
            return BadRequest(result);

            return Ok(model);
            
        }




    }
}
