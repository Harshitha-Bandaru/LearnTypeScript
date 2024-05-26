type User = {
  name: string;
  age: number;
  isActive: boolean;
};

function createUser(user: User) {}

createUser({ name: "a", age: 12, isActive: true });
let user = { name: "a", age: 12, isActive: true, check: "hehe" };
createUser(user);
export {};
