using Core.Entities;
using System.ComponentModel.DataAnnotations;

namespace eCommerce_API.DTOs
{
    public class CustomerBasketDto
    {
        [Required]
        public string Id { get; set; }
        public List<BasketItemDto> Items { get; set; } = new List<BasketItemDto>();
    }
}
