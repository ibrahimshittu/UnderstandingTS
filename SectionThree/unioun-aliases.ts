type stringNumberUnion = string | number; // type alias
type conversionDescriptor = "as-number" | "as-text";

function combinen(input1: number | string, input2: stringNumberUnion, resultCOnversion: "as-number" | "as-text") {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultCOnversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}


type User = {
    name: string;
    age: number,
    hobbies: string[]
};

function greet(user: User) {
    console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
    return checkAge > user.age;
}