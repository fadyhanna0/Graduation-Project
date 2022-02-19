using Graduation_Project.core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Graduation_Project.core.Services
{
    public interface IAuthorizeService
    {
        Task<AuthModel> RegisterAsync(RegisterModel Model);
    }
}
