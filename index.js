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
        winningCard(cards[0].value, cards[1].value)
        cards.forEach(card => {
            console.log(card.value+card.suit)
        });
    })
}

function winningCard(card1, card2) {
    //We assume that the cards at this point
    //are just text, not actual numbers, so
    //we need to get the numeric equivalent
    const c1Number = cardEquivalents.find(x => x.name===card1).number
    const c2Number = cardEquivalents.find(x => x.name===card2).number
    if(c1Number>c2Number) {
        console.log("Card1 wins")
    } else if(c2Number>c1Number) {
        console.log("Card2 wins")
    } else {
        console.log("It's a tie")
    }
    
}

const cardEquivalents = [
    {name: "2", number: 2 },
    {name: "3", number: 3 },
    {name: "4", number: 4 },
    {name: "5", number: 5 },
    {name: "6", number: 6 },
    {name: "7", number: 7 },
    {name: "8", number: 8 },
    {name: "9", number: 9 },
    {name: "10", number: 10 },
    {name: "JACK", number: 11 },
    {name: "QUEEN", number: 12 },
    {name: "KING", number: 13 },
    {name: "ACE", number: 14 },

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
 * Challenge:
 * 
 * Try to determine which of the 2 cards is the "winner" (has higher value)
 * Aces are the card with the highest "score"
 * 
 * In parts:
 * 
 * 1. Create a function that takes 2 card objects as parameters, 
 * `card1` and `card2`. These card objects have a property called
 * `value`, which can be any one of the following strings, in
 * order of rising "score":
 * 
 * "2", "3", "4", "5", "6", "7", "8", "9", 
 * "10", "JACK", "QUEEN", "KING", "ACE"
 * 
 * I.e. "2" is the lowest score and "ACE" is the highest.
 * 
 * The function should determine which of the 2 cards (`card1`
 * or `card2`) has the higher score, or if they have the same score.
 * 
 * Log which card wins (or "It's a tie!" 
 * if they're the same) to the console
 */