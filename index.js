/**
 * Challenge: Define our anonymous callback function as a separate function, then
 * pass it as the 2nd parameter to our `addEventListener`
 */

//I did it this way to start

const getDeckBtn = document.getElementById("new-deck")

getDeckBtn.addEventListener("click", getDeck)

async function getDeck(e) {
    e.preventDefault()
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/", {
        method: "GET"
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

/**
 * Challenge: 
 * 
 * Part 1: write a `setTimeout` command. Have it wait for 2000 ms before logging "I finally ran!" to the console
 * 
 * Part 2: Upcoming...
 */

// setTimeout(cLogSomething, 2000);

// function cLogSomething() {
//     console.log("I finally ran")
// }

/**
 * Challenge: 
 * 
 * Part 1: Given the array of objects below, create a new array with the `.filter()` array method that contains only the objects where "hasPet" is true
 * 
 * 
 * Part 2: Move the anonymous in-line function to its own, named function
 */
const people = [
    { name: "Jack", hasPet: true, age: 12 },
    { name: "Jill", hasPet: false, age: 18 },
    { name: "Alice", hasPet: true, age: 22 },
    { name: "Bob", hasPet: false, age: 32 },
]

const petPeople = people.filter(peopleTest)

function peopleTest(person){
    return person.hasPet === true
}
console.log(petPeople)

// https://www.javascripttutorial.net/javascript-array-filter

/**
 * Extra challenge to practice array.filter:
 * 
 * Using .filter, create a new array of people who are 18 and older
 * (should be Jill, Alice, and Bob)
 */

function ageTest(person) {
    return person.age>17
}
const adults = people.filter(ageTest)
console.log(adults)