declare class User {
    protected name: string;
    protected lastName: string;
    protected age: number;
    constructor(name: string, lastName: string, age: number);
    getFullName(): string;
}
export { User };
declare class Admin extends User {
    getFullName(): string;
}
export { Admin };
//# sourceMappingURL=class.d.ts.map