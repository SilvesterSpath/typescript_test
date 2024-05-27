// 1. calculate total price for available products
// 2. group products based on category
import { products } from './products.service';

interface Product {
  name: string;
  category: string;
  price: number;
}

export const calculateTotal = (products: Product[]) => {
  const total = products.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  return total;
};

console.log(calculateTotal(products));

const producsByCategory = () => null;
