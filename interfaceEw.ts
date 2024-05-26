interface User {
  readonly id: number;
  name: string;
  // this is one type of declaring functions
  getInfo: () => string;
  // this is one type of declaring functions
  getPrice(): string;
  funcWithParams(param1: string, param2: number): number;
}

const myUser: User = {
  id: 1,
  name: "Harshi",
  gmailLogin: true,
  getInfo: () => {
    return "hi";
  },
  getPrice() {
    return "Hi";
  },
  // it doesn't complain even if you don't pass params
  funcWithParams(a: "hello", b: 1) {
    return 1;
  },
};
// you can reopen an interface
interface User {
  gmailLogin: boolean;
  freeTrail?: boolean;
}

// inheritance in interface
interface Admin extends User {
  role: "Admin" | "Normal";
}

const myAdmin: Admin = {
  role: "Admin",
  name: "Harshi",
  id: 1,
  gmailLogin: true,
  getInfo: () => {
    return "hi";
  },
  getPrice() {
    return "Hi";
  },
  // it doesn't complain even if you don't pass params
  funcWithParams(a: "hello", b: 1) {
    return 1;
  },
};
