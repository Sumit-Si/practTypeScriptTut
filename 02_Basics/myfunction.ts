function addTwo(num: number): number {
    return num + 2;
    // return false;
}


function getUpper(val:string) {     // inside function we have to define type (compulsory)
    return val.toUpperCase();
}


function signUpUser(name: string,email: string,isPaid: boolean) {
    return `Welcome ${name}, your email is ${email} and you have earned the subscription ${isPaid}`;
}

signUpUser('sumit','sumit@gmail.com',true);

const loginUser = (name: string, email: string, isPaid: boolean = false) => {
    return `${name} ${email} ${isPaid}`;
}

loginUser('sumit','sumit@gmail.com');


addTwo(5);

getUpper('hello');


// function getValues(myVal: number) {
//     if(myVal > 5) {
//         return true;
//     }
//     return "200 OK";
// }


const getHello = (s: string): string => {
    return "Hello Sumit";
}

const heroes = ['thor','ironman','spiderman','sumit'];

heroes.map((hero):string => {
    return `hero is ${hero}`;
})


function  consoleError(errMsg: string): void {
    console.log(errMsg);
}

function handleError(errMsg: string): never {
    // console.log(errMsg);
    throw new Error(errMsg);
}

