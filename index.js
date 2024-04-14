let deckId

const getDeckBtn = document.getElementById("new-deck")
const drawCardsBtn = document.getElementById("draw-cards")

getDeckBtn.addEventListener("click", getDeck)
drawCardsBtn.addEventListener("click", draw2)

function getDeck(e) {
    e.preventDefault()
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/", {
        method: "GET"
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id
            console.log(deckId)

        })
}

function draw2() {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`, {
        method: "GET"
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const cards = data.cards
        renderCards(cards)
        findWinner(cards)
        cards.forEach(card => {
            
            console.log(card.value+card.suit)
        });
    })
}

function renderCards(cardsArray) {
    if(cardsArray) {
        const card1Div = document.getElementById("card1")
        const card2Div = document.getElementById("card2")
        card1Div.innerHTML = ""
        card2Div.innerHTML = ""
        const card1Img = document.createElement("img")
        const card2Img = document.createElement("img")
        card1Img.src = cardsArray[0].images.png
        card2Img.src = cardsArray[1].images.png
        card1Div.appendChild(card1Img)
        card2Div.appendChild(card2Img)
        
    }
}

function findWinner(cardsArray) {
    cardsArray.forEach(card => {
        card.numericVal = cardValues.find(function(item) {
            if(item.name === card.value) {
                console.log(item.value)
                return item.value
            }
        }).value
        
    });
    console.log(cardsArray)
    if (cardsArray[0].numericVal > cardsArray[1].numericVal) {
        console.log("Computer Wins")
    } else if (cardsArray[0].value < cardsArray[1].numericVal) {
        console.log("Player Wins")
    } else {
        console.log("tie")
    }
}

const cardValues = [
    { name: "1", value: 1 },
    { name: "2", value: 2 },
    { name: "3", value: 3 },
    { name: "4", value: 4 },
    { name: "5", value: 5 },
    { name: "6", value: 6 },
    { name: "7", value: 7 },
    { name: "8", value: 8 },
    { name: "9", value: 9 },
    { name: "10", value: 10},
    { name: "JACK", value: 11},
    { name: "QUEEN", value: 12},
    { name: "KING", value: 13},
    { name: "ACE", value: 14}
]
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