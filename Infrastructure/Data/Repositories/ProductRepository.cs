using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly StoreContext _context;
        public ProductRepository(StoreContext context)
        {
            _context = context;

        }

        public async Task<IReadOnlyList<ProductBrand>> GetBrandAsync()
        {
            return await _context.ProductBrands.ToListAsync();
        }

        public async Task<Product> GetProductById(int id)
        {
            return await _context.Products.Include(b => b.ProductBrand).Include(t => t.ProductType).FirstOrDefaultAsync(i => i.Id == id);
        }

        public async Task<IReadOnlyList<Product>> GetProductsAsync()
        {
            return await _context.Products.Include(b => b.ProductBrand).Include(t => t.ProductType).ToListAsync();
        }

        public async Task<IReadOnlyList<ProductType>> GetTypeAsync()
        {
            return await _context.ProductTypes.ToListAsync();
        }
    }
}
