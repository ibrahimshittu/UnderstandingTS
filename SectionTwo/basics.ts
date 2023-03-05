
function addNumber(n1: number, n2: number, printResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (printResult) {
        console.log(phrase + result);
    } else {
        return n1 + n2
    }
}

// let number1: number;

const number = 1;
const number2 = 2.8;
const showResult = true;

const result = addNumber(number, number2, showResult, 'Result is: ');
console.log(result);