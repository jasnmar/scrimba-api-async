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
        const cards = data.cards
        const cardsDiv = document.getElementById("cards")
        let cardDivs = document.querySelectorAll("#cards > div")

        for(let i = 0; i < cardDivs.length; i++) {
            cardDivs[i].innerHTML = `<img src="${cards[i].images.png}">`
        }
        
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
 * Place each of the cards we draw into its respective card-slot
 * Hint: consider using element.children in the DOM instead of
 * giving each card-slot its own unique ID
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/children
 */
//From the beginning I started with a div for each card.
//The instructor did not, so this might will be a bit of a
//dumb refactor.