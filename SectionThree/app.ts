
function addNumber(n1: number, n2: number, printResult: boolean) {
    if (printResult) {
        console.log(n1 + n2);
    } else {
        return n1 + n2
    }
}

const number = 1;
const number2 = 2.8;
const showResult = true;

const result = addNumber(number, number2, showResult);
console.log(result);