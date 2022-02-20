using Graduation_Project.core.Interfaces;
using Graduation_Project.core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Graduation_Project.core.Interfaces
{
    public interface IAuthorizeService: IBaseRepository<AuthModel>
    {
        Task<AuthModel> RegisterAsync(RegisterModel Model);
        Task<AuthModel> GetTokenAsync(TokenRequestModel Model);
        Task<string> AddRoleAsync(AddRoleModel model);
    }
}
