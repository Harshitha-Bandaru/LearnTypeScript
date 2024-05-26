type user = {
  readonly _id: string;
  name: string;
  age: number;
};

let userDetails: user = { _id: "1", name: "g", age: 12 };
userDetails = { _id: "2", name: "g", age: 12 };

// you can not assign a value to readonly property
// userDetails._id = "2";

type cardNumber = { cardNumber: string };
type cvv = { cvv: number };

type cardDetails = cardNumber & cvv & { cardDate: string };

const hCard: cardDetails = { cardNumber: "1", cvv: 2, cardDate: "1" };
const myNu: cardNumber = { cardNumber: "2" };
