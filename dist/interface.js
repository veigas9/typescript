"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const getUser = (user) => {
    return `Name: ${user.name} ${user.lastName}, Age: ${user.age}`;
};
exports.getUser = getUser;
let user = {
    name: "Andre",
    lastName: "Veigas",
    age: 40
};
console.log(getUser(user));
//# sourceMappingURL=interface.js.map