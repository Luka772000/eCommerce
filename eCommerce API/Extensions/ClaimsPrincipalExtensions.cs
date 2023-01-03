using System.Security.Claims;

namespace eCommerce_API.Extensions
{
    public static class ClaimsPrincipalExtensions
    {
        public static string RetrieveFromEmailPrincipal(this ClaimsPrincipal user)
        {
            return user.FindFirstValue(ClaimTypes.Email);
        }
        }
    }
