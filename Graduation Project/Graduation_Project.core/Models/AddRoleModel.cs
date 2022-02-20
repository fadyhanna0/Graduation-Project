using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace Graduation_Project.core.Models
{
    public class AddRoleModel
    {
        [Required]
        public string UserId { get; set; }
        [Required]
        public string Role { get; set; }
    }
}
