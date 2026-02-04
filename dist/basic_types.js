"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let active = true;
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
//Enuns
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
//Define um array de strings
let name = ['Andre', 'veigas', 'Soares'];
console.log(name);
//# sourceMappingURL=basic_types.js.map