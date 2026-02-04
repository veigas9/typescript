//Function to add two numbers and return number
// function add(a: number, b: number): number {
//     return a + b;
// }

//Arrow function to add two numbers and return number
const add = (a: number, b: number): number => a + b;

// console.log(add(3, 4));

export { add };

const addWithOptionalTax = function(a: number, b: number, tax: number): number {
    return (a + b) - tax
}

    
const applyDiscount = (price: number, discount: number = 5): number => {
    return price - (price * (discount / 100));
}
// console.log(applyDiscount(100)); // Uses default discount of 5%
// console.log(applyDiscount(100, 10)); // Uses provided discount of 10%

const calcTotal = (...numbers: number[]): number => {
    let total = 0;
    numbers.forEach(num => total += num)
    return total;
}

console.log(calcTotal(10, 20, 30)); // Outputs: 60

export { addWithOptionalTax, applyDiscount, calcTotal };
