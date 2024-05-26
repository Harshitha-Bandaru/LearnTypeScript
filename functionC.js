"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hello(name) {
    return "Hello ".concat(name);
}
hello("2");
function signup(name, email, isMad) {
    if (isMad === void 0) { isMad = true; }
    return "HI";
}
signup("Harshi", "2", true);
// void, that returns nothing
function printErrors(error) {
    console.log("error", error);
    // return "hi";
}
printErrors("err");
// never - never type represents values that are never observed, this means function throws an exception or terminates execution of program
function fail(msg) {
    throw new Error(msg);
}
