// const hasName = (name) => {
//     return {name}
// }

// const canSayHi = (name) => {
//     return {
//         sayHi: () => `Hello, ${name}`
//     }
// }

// const Person = (name) => {
//     return {
//         ...hasName(name),
//         ...canSayHi(name)
//     }
// } 


// const tomer = Person('Tomer')

// console.log(tomer.sayHi())

const obj1 = {
    name: "Tomer"
}

const obj2 = {
    lastName: "Lev"
}

const obj3 = {
    name: "King Tomer"
}

console.log({...obj1, ...obj2, ...obj3})