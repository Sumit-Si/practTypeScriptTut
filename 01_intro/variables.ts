let greetings: string = 'Hello Sumit';
// greetings = 12;
console.log(greetings);

// number

let userId:number = 34.543;     // it's not a good practice as typescript automatically detect the type you have given to variables
console.log(userId);


// Boolean

let isLoggedIn: boolean = false;
console.log(isLoggedIn);


// any

let hero:string;

function getHero() {
    return "Jai Shri Krishna";
    // return true;
}

hero = getHero();


interface GetNum
{
    Number: number
}

const number =
{
    number: 5
}

console.log(number.number);