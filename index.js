let deckId

const getDeckBtn = document.getElementById("new-deck")
const drawCardsBtn = document.getElementById("draw-cards")

getDeckBtn.addEventListener("click", getDeck)
drawCardsBtn.addEventListener("click", draw2)

async function getDeck(e) {
    if(e) {
        e.preventDefault()
    }
    const res = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/", {
        method: "GET"
    })
    const data = await res.json()
    deckId = data.deck_id
}

async function draw2() {
    if(!deckId) {
        await getDeck()
    }
    const res = await fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`, {
        method: "GET"
    })
    const data = await res.json()
    console.log(data)
    if(data.success) {
        const cards = data.cards
        cards.forEach(card => {
            console.log(card.value+card.suit)
        });
    }
}

/*
{
    "success": true,
    "deck_id": "ggwjlsdycsgn",
    "cards": [
        {
            "code": "6D",
            "image": "https://deckofcardsapi.com/static/img/6D.png",
            "images": {
                "svg": "https://deckofcardsapi.com/static/img/6D.svg",
                "png": "https://deckofcardsapi.com/static/img/6D.png"
            },
            "value": "6",
            "suit": "DIAMONDS"
        },
        {
            "code": "QH",
            "image": "https://deckofcardsapi.com/static/img/QH.png",
            "images": {
                "svg": "https://deckofcardsapi.com/static/img/QH.svg",
                "png": "https://deckofcardsapi.com/static/img/QH.png"
            },
            "value": "QUEEN",
            "suit": "HEARTS"
        }
    ],
    "remaining": 50
}
*/
/**
 * Challenge
 * 
 * Task: Using the saved deckId, draw 2 new cards from the deck
 * 
 * Docs for original Deck of Cards API: https://deckofcardsapi.com/#draw-card
 * BaseUrl you'll use: https://apis.scrimba.com/deckofcards/api/deck/
 * (that will replace the base url of https://deckofcardsapi.com/api/deck/)
 * that you'll see in the deck of cards API docs.
 * 
 * 1. Create a new button that, when clicked, draws 2 cards from the deckId
 * you have saved
 *      Note: you'll need to get a new deck every time you refresh the page,
 *      since you're only saving your deckId in a local variable right now
 * 2. Log those 2 cards to the console
 */