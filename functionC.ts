function hello(name: string) {
  return `Hello ${name}`;
}

hello("2");

function signup(name: string, email: string, isMad: boolean = true): string {
  return "HI";
}
signup("Harshi", "2", true);

// void, that returns nothing
function printErrors(error: string): void {
  console.log("error", error);
  // return "hi";
}

printErrors("err");

// never - never type represents values that are never observed, this means function throws an exception or terminates execution of program
function fail(msg: string): never {
  throw new Error(msg);
}
// remove this for ugly errors
export {};
