// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; tuple
// } = {
//     name: 'Maximilian',
//     age: 30
// };

enum Role { ADMIN = 3, READ_ONLY = "READ_ONLY", AUTHOR = 7 };

const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 1, true],
    role: Role.ADMIN
};

console.log(person.age)

for (let i = 0; i < person.hobbies.length; i++) {
    console.log(person.hobbies[i]);
}

for (const hobby of person.hobbies) {
    console.log(hobby);
}