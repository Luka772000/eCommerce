using Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace eCommerce_API.Extensions
{
    public static class UserManagerExtensions
    {
        public static async Task<AppUser> FindByClaimsPrincipleWithAddressAsync(this UserManager<AppUser> input,ClaimsPrincipal User)
        {
            var email = User.FindFirstValue(ClaimTypes.Email);
            return await input.Users.Include(i=> i.Address).SingleOrDefaultAsync(i => i.Email == email);
        }
        public static async Task<AppUser> FindByEmailFromClaimsPrinciple(this UserManager<AppUser> input, ClaimsPrincipal User)
        {
            var email = User.FindFirstValue(ClaimTypes.Email);
            return await input.Users.SingleOrDefaultAsync(i => i.Email == email);
        }
    }
}
