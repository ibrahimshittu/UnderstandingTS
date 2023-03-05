function add(n1: number, n2: number): number {
    return n1 + n2
}

// void return type has no return statement
function printResult(num: number): void {
    console.log("result: " + num)

}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2
    cb(result)
}

printResult(add(5, 12))

// combines values should take a function that accepts two numbers, and return a number
let combinedValues: (a: number, b: number) => number;

combinedValues = add;

console.log(combinedValues(8, 8))

addAndHandle(2, 7, (result) => console.log(result))