const obj = { name: "Harshi", age: 12, email: "harshi@gmail.com" };

function CreateUser({ name: string, age: number }): { id: number } {
  return { id: 1 };
}

// This doesn't allow email property
CreateUser({ name: "Harshi", age: "13" });

// This allows email propery - doesn't exist in function declaration
let user = { name: "Harshi", age: 12, email: "a@b.com" };
CreateUser(user);

function CreateUserS({ name: string, age: number }): {} {
  return "hI";
}
