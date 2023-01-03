using AutoMapper;
using AutoMapper.Execution;
using Core.Entities.OrderAggregate;
using eCommerce_API.DTOs;

namespace eCommerce_API.Helpers
{
    public class OrderItemUrlResolver : IValueResolver<OrderItem, OrderItemDto, string>
    {
        public readonly IConfiguration _config;
        public OrderItemUrlResolver( IConfiguration config)
        {
            _config = config;
        }

        public string Resolve(OrderItem source, OrderItemDto destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.ItemOrdered.PictureUrl))
            { 
                return _config["ApiUrl"] + source.ItemOrdered.PictureUrl;
            }
            return null;
        }
    }
}
