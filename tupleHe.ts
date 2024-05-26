//  Tuples are part of only typescript only not javasscript
// Tuples makes sure that you will always follow order

const user: [string, number] = ["abac@gmail.com", 1];
// the above declaration won't allow you to give number first and then string

const rgb: [number, number, number] = [255, 0, 34];

type myUser = [number, string, boolean];

const har: myUser = [1, "Harshi", true];
har[1] = "Sowmy"; //allows me to override the value
har.push("hehe"); //it allows us to use all array methods like this hence not following the declaed type
