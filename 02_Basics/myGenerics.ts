const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {     // // not recommended
    return val;
}


function identityTwo(val: any): any {       // not recommended
    return val;
}       

function identityThree<Type>(val: Type): Type {     // same as any but it locks what you have given to val and return the same datatype value.
    return val;
}

identityThree(true);

// example

// function identityFour<>