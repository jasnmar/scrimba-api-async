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