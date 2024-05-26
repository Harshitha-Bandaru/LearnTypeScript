enum SeatChoice {
  // by default the first value will have 0 and incrementally going
  AISLE = 11,
  MIDDLE = 22,
  WINDOW,
}

enum RainBow {
  VIOLET = "hELLO",
  INDIGO = 2,
  GREEN,
}

enum anotherExample {
  A = "A",
  B = "B",
  C = "C",
}

// by declaring as const, this won't get converted into js
const enum lessCode {
  a = "a",
}
// you will just see this line in js
const lessCodeVar = lessCode.a;

const mySeat = SeatChoice.AISLE;

export {};
