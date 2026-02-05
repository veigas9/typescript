interface UserInterface {
    name: string;
    lastName: string;
    age: number;   
}

const getUser = (user: UserInterface): string => {
    return `Name: ${user.name} ${user.lastName}, Age: ${user.age}`;
}

let user = {
    name: "Andre",
    lastName: "Veigas",
    age: 40
}

console.log(getUser(user));

export { UserInterface, getUser };