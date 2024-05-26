const arr = [];
// This won't let you push into arr of type never
// arr.push("g");
const arra: [] = [];
// arra.push("g");

const newArr: string[] = [];
newArr.push("Harshi");

const numArray: Array<Number> = [];
numArray.push(2);

type user = { name: string };
const userArray: user[] = [];
// figure why ?
const twoDArr: number[][] = [[1]];

export {};
