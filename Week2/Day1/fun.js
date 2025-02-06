
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






const person1 = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};



const personFirstName = person1.firstName;
const personLastNAme = person1.lastName;
const personUserNAme = person1.username;
console.log(personFirstName, " ", personLastNAme, " ", personUserNAme)

const { firstName, lastName, username } = person1

console.log(firstName, " ", lastName, " ", username)


// ----------------0----------1---------2---------3----------4
const animals = ['horse🐎', 'dog🐕', 'fish🐟', 'cat🐈', 'bird🐦'];
const firstAnimal = animals[1]
const secondeAnimal = animals[3]
const thirdAnimal = animals[4]
console.log(firstAnimal, " ", secondeAnimal, " ", thirdAnimal)

const [, firstAni, , secondeAni, thirdAni] = animals

console.log(firstAni, " ", secondeAni, " ", thirdAni)


// pass by reference and pass by value
//         0X0014Fzs
const a = [10, 20, 30]
const b = [45, ...a, 1000, 4]



console.log("a", a)
console.log("b", b)




function HelloMERNStackNinjas(par) {
    return "hello " + par
}

console.log(HelloMERNStackNinjas("ahmed"))


const HelloMERNArrow = (par) => {
    return "hello " + par
}

console.log(HelloMERNArrow("yaya"))

const ArrowFn = (par) => "hello " + par

var age = 20

if (age < 18) {
    console.log("you can't enter our place ")
} else {
    console.log("welcome home")
}


age < 18 ? console.log("you can't enter our place ") : console.log("welcome home")







