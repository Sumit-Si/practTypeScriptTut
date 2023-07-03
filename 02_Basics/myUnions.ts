let score: number | string = '33';

score = 44;


type Person = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    readonly id: number;
}

let sumit: Person | Admin = {name: "sumit", id: 334};

sumit = {username: 'hc', id: 334};



// function getDbId(id: number | string) {
//     // making some API calls
//     console.log(`DB id is: ${id}`);
// }

getDbId(3);
getDbId("33");

function getDbId(id: number | string) {
    if(typeof id === 'string') {
        id.toLowerCase(); 
    } else {
        id + 2;
    }
}



// array

const data: number[] = [1,2,3];
const data2: string[] = ["1","2","3"];
const data3: (string | number | boolean)[] = ["1","2",3,true];     // better code


let seatAllotment: "aisle" | "middle" | "window";

// seatAllotment = "crew"; // it shows error as it is not defined in seatAllotment type



