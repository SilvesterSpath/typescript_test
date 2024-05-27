import { calculateTotal } from './index';
import { products } from './products.service';

describe('calculateTotal', () => {
  it('calculateTotal should be a function', () => {
    expect(typeof calculateTotal).toBe('function');
  });

  it('calculateTotal should return a number', () => {
    expect(typeof calculateTotal(products)).toBe('number');
  });

  it('calculateTotal should return a total of 3300', () => {
    expect(calculateTotal(products)).toBe(2600);
  });
});
