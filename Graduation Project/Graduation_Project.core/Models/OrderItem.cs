using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Graduation_Project.core.Models
{
    public class OrderItem
    {
        [ForeignKey("Order")]
        public int Order_Id { get; set; }
        [ForeignKey("Food")]
        public int Food_Id { get; set; }
        public int quantity { get; set; }
        [Column(TypeName = "money")]

        public decimal Total_item_price { get; set; }
        public Order Order { get; set; }
        public Products Products { get; set; }

    }
}
