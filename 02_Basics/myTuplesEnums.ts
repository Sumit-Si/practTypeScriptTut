// Tuples

// const user: (string | number)[] = ["sumit",34];
let tUser: [string,number,boolean];

tUser = ["sumit",345, true];

let rgb: [number,number,number] = [255,255,255];

type Users = [number,string];

const newUser: Users = [112,"sumit@gmail.com"];

newUser[1] = "sumit";
// newUser.push(true);  // shows error 



// Enums -> enum member starts with 0 and increase one to the bottom

// 2. you can also give value to any member to anything and the down member value also changing

// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;


const enum SeatChoice {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = 1,
    FORTH
}

const hcSeat = SeatChoice.AISLE;
const mdSeat = SeatChoice.MIDDLE;