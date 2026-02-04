"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = exports.User = void 0;
class User {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    // Method to get full name
    getFullName() {
        return `${this.name} ${this.lastName}`;
    }
}
exports.User = User;
let user1 = new User("Andre", "Veigas", 40);
// console.log(user1);
console.log(user1.getFullName());
class Admin extends User {
    getFullName() {
        return `Admin: ${this.name} ${this.lastName}`;
    }
}
exports.Admin = Admin;
let admin1 = new Admin("Andre", "Veigas", 40);
console.log(admin1.getFullName());
//# sourceMappingURL=class.js.map