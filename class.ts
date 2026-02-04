class User{
    protected name: string;
    protected lastName: string;
    protected age: number;

    constructor(name: string,  lastName: string, age: number){
        this.name = name;        
        this.lastName = lastName;
        this.age = age;
    }

    // Method to get full name
    getFullName(): string {
        return `${this.name} ${this.lastName}`;
    }
}

let user1 = new User("Andre", "Veigas", 40);
// console.log(user1);
console.log(user1.getFullName());

export { User };

class Admin extends User {
    public getFullName(): string {
        return `Admin: ${this.name} ${this.lastName}`; 
    }
}

let admin1 = new Admin("Andre", "Veigas", 40);
console.log(admin1.getFullName());

export { Admin };