using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities
{
    public class ProductBrand:BaseEntity
    {
        [Required]
        [Column(TypeName = "varchar(50)")]
        public string Name { get; set; }
    }
}