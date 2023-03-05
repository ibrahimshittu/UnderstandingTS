let userInput: unknown;
// let userInput: any; this does not offer any type checking 
let username: string;

userInput = 5;
userInput = 'Ibrahim';
if (typeof userInput === 'string') {
    username = userInput
}

// a function that will never return anything, be it undefined or null
function generateError(message: string, code: number): never {
    throw {
        message: message,
        errorCode: code
    }
}

generateError('An Error occurred', 500)