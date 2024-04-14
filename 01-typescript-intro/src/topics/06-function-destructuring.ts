export interface Product{
    description: string;
    price: number;
}

const phone: Product = {
    description: "Samsung",
    price: 300.0
}

const {description:sm, price:p1} = phone;

console.log(sm,p1);

const tablet: Product = {
    description: "Apple",
    price: 900.0
};

const {description: app, price: p2} = tablet;

console.log(app,p2);

interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}

export function taxCalculation (options: TaxCalculationOptions):number[]{
    let total = 0;

    options.products.forEach( product => {
        total += product.price;
    })
    return [total, total * options.tax]
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const result = taxCalculation({products: shoppingCart, tax: tax});

console.log('Total', result[0]);
console.log('Tax', result[1]);