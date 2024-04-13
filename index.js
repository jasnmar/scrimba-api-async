

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

const promise = fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
console.log(promise)
const p = promise.then()
console.log(p)

/**
 * Mini challenge: Figure out what `promise.then()` returns! 
 * Save the result to a variable and log it to the console.
 */
    // .then(data => console.log(data))

    /* 
- Promises are in one of 3 states at any given time
    - Pending
    - Fulfilled
    - Rejected
*/

/**
 * Time to be curious!
 * 
 * What would happen if you didn't return `res.json()` 
 * from the first .then block?
 * 
 * What would the next .then() callback receive as its 
 * parameter if you returned something totally different??
 */

fetch("https://apis.scrimba.com/bored/api/activity")
    .then(function(res) {
        return "res dot jason"
    })
    .then(function(element) {
        console.log(element)
        
    })