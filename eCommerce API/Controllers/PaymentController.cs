using Core.Entities;
using Core.Interfaces;
using eCommerce_API.Errors;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace eCommerce_API.Controllers
{
    public class PaymentController : BaseApiController
    {
        private readonly IPaymentService _paymentService;
        public PaymentController(IPaymentService paymentService)
        {
            _paymentService = paymentService;
        }
        [Authorize]
        [HttpPost("{basketId}")]
        public async Task<ActionResult<CustomerBasket>> CreateOrUpdatePaymentIntent(string basketId)
        {
            var basket = await _paymentService.CreateOrUpdatePaymentIntent(basketId);
            if (basket == null) return BadRequest(new ApiResponse(400, "Problem with your basket"));
            return basket;
        }
    }
}
