import { Product, TaxCalculationOptions, taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
];

const tax: number = 0.15;
const options: TaxCalculationOptions = { tax, products: shoppingCart };

// Tax = 0.15
const [total, taxtTotal] = taxCalculation(options);

console.log('Total', total);
console.log('Tax', taxtTotal);