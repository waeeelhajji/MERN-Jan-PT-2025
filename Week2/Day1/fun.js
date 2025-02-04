
var name = "bob"


function sayHi() {
    name = "alice"
    console.log("1.", name)
}

sayHi()//?
console.log(sayHi)
console.log("2.", name)//?


//! -- HOISTING --

console.log("what is x ?", x)
const x = 5
console.log("what is x ?", x)




const nums = [1, 2, 3, 4, 5]
nums = 5
console.log(nums)

const str = "hello"
str = 5


// primitive datatype
// string
// number
// Boolean
// Null / undefined

// complex data type
// array
// objects 
const person = {
    name: "bob",
    favFood: "🍝"
}

person.favFood = "🍇"
console.log(person)

for (let index = 0; index < 5; index++) {
    console.log("5");

}

console.log(index)





