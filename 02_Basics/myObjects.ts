// const User = {
//     name: "sumit",
//     email: "sumit@gmail.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}) {

// }

// createUser({name: 'sumit',isPaid: true});



// function createCourse(): {name: string, price: number} {
//     return {name: "reactjs", price: 399};
// }  



// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// // type myString = string;

// function createUser(user: User): User {
//     return {name: '',email: '',isActive: true};
// }

// createUser({name: '',email: '',isActive: true});


type User = { 
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credcardDetails?: number;
}

const myUser: User = {
    _id: "12345",
    name: "sumit",
    email: 'sumit@gmail.com',
    isActive: true
}

type cardNumber = {
    cardnumber: string;
}

type cardDate = {
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & {    // {} not a good practice
    cvv: number;
}

myUser.email = 'sumit@gmail.com';
// myUser._id = '3456';        // it is not changing as it is readonly
