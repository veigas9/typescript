"use strict";
//Function to add two numbers and return number
// function add(a: number, b: number): number {
//     return a + b;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcTotal = exports.applyDiscount = exports.addWithOptionalTax = exports.add = void 0;
//Arrow function to add two numbers and return number
const add = (a, b) => a + b;
exports.add = add;
const addWithOptionalTax = function (a, b, tax) {
    return (a + b) - tax;
};
exports.addWithOptionalTax = addWithOptionalTax;
const applyDiscount = (price, discount = 5) => {
    return price - (price * (discount / 100));
};
exports.applyDiscount = applyDiscount;
// console.log(applyDiscount(100)); // Uses default discount of 5%
// console.log(applyDiscount(100, 10)); // Uses provided discount of 10%
const calcTotal = (...numbers) => {
    let total = 0;
    numbers.forEach(num => total += num);
    return total;
};
exports.calcTotal = calcTotal;
console.log(calcTotal(10, 20, 30)); // Outputs: 60
//# sourceMappingURL=function.js.map