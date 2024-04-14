let deckId

const getDeckBtn = document.getElementById("new-deck")
const drawCardsBtn = document.getElementById("draw-cards")

getDeckBtn.addEventListener("click", getDeck)
drawCardsBtn.addEventListener("click", draw2)

async function getDeck(e) {
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

async function draw2() {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`, {
        method: "GET"
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const cards = data.cards
        const card1Div = document.getElementById("card1")
        const card2Div = document.getElementById("card2")
        card1Div.innerHTML = ""
        card2Div.innerHTML = ""
        const card1Img = document.createElement("img")
        const card2Img = document.createElement("img")
        card1Img.src = cards[0].images.png
        card2Img.src = cards[1].images.png
        card1Div.appendChild(card1Img)
        card2Div.appendChild(card2Img)
        
        cards.forEach(card => {
            console.log(card.value+card.suit)
        });
    })
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
 * Challenge:
 * 
 * Start making this look lots nicer :)
 * 
 * 1. Add a card table background with the img/table.png image provided.
 * 2. Move the draw button to the very bottom of the page, full width
 * 3. Add some button styles. You can use the photo on the slides
 * for one option.
 */



