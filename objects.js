// objects, key value pairs

const person1 = {
    name: "russell",
    height: "tall",
    head: {
        eyeColor: "green",
        hairColor: "brown"
    },
}

// console.log(person1);


// for in loop

const animal = {
    name: "Crocodile",
    head: "Long and wide",
    legs: 4,
    predator: true,
}

for (let key in animal) {

console.log(animal[key]);
}