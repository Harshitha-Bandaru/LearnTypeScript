var SeatChoice;
(function (SeatChoice) {
    // by default the first value will have 0 and incrementally going
    SeatChoice[SeatChoice["AISLE"] = 11] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 22] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 23] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
var RainBow;
(function (RainBow) {
    RainBow["VIOLET"] = "hELLO";
    RainBow[RainBow["INDIGO"] = 2] = "INDIGO";
    RainBow[RainBow["GREEN"] = 3] = "GREEN";
})(RainBow || (RainBow = {}));
var anotherExample;
(function (anotherExample) {
    anotherExample["A"] = "A";
    anotherExample["B"] = "B";
    anotherExample["C"] = "C";
})(anotherExample || (anotherExample = {}));
var mySeat = SeatChoice.AISLE;
