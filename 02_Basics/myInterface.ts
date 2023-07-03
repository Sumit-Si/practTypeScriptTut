interface MyUser {
    readonly dbId: number
    email: string;
    userId: number;
    goggleId?: string;
    // myFun: () => string;     // your preference choose this or down way to write function
    myFun(): string;
    getCoupon(couponname: string, value: number): number;
}

interface MyUser {      // 
    githubToken: string;
}

interface Admin extends MyUser {
    role: "admin" | "ta" | "learner";
}

const sumit: Admin = {
    dbId: 22,
    email: "sum@gmail.com",
    userId: 112,
    githubToken: "github",
    role: "admin",
    myFun: () => {
        return "sumit";
    },
    getCoupon: (name: "sumit10", off: 10) => {      // just a reference in function name
        return 10;
    }
}

// sumit.dbId = 34;     // it shows error as it is readonly property