using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookShop.API.Models
{
    public class SpecialOffer : BookDecorator
    {
        public SpecialOffer (Book book) : base(book) {}

        public int DiscountPercentage = 25;

        public double PriceInDiscount
        {
            get
            {
                double price = base.Price;
                int percentage = 100 - DiscountPercentage;
                return Math.Round((price * percentage) / 100, 2);
            }
        }
    }
}
