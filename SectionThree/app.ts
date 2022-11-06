// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Maximilian',
//     age: 30
// };

const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 1, true]
};

console.log(person.age)

for (let i = 0; i < person.hobbies.length; i++) {
    console.log(person.hobbies[i]);
}