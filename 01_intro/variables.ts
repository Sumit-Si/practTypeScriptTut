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
    return "krishna";
    // return true;
}

hero = getHero();