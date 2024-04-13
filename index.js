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

setTimeout(cLogSomething, 2000);

function cLogSomething() {
    console.log("I finally ran")
}

