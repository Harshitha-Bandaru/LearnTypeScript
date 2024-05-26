//  Tuples are part of only typescript only not javasscript
// Tuples makes sure that you will always follow order
var user = ["abac@gmail.com", 1];
// the above declaration won't allow you to give number first and then string
var rgb = [255, 0, 34];
var har = [1, "Harshi", true];
har[1] = "Sowmy"; //allows me to override the value
har.push("hehe"); //it allows us to use all array methods like this hence not following the declaed type
