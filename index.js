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
            cardCount(data)
            console.log(data)
            deckId = data.deck_id
            console.log(deckId)

        })
}
/**
 * Challenge:
 * 
 * Disable the Draw button when we have no more cards to draw from
 * in the deck.
 * 
 * Disable both the functionality of the button (i.e. change
 * `disabled` to true on the button) AND the styling (i.e. add
 * a `disabled` CSS class to make it look unclickable)
 */

async function draw2() {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`, {
        method: "GET"
    })
    .then(res => res.json())
    .then(data => {
        const cards = data.cards
        console.log(data)
        const cardsDiv = document.getElementById("cards")
        let cardDivs = document.querySelectorAll("#cards > div")

        for(let i = 0; i < cardDivs.length; i++) {
            cardDivs[i].innerHTML = `<img src="${cards[i].images.png}">`
        }
        document.getElementById("winner-text").innerHTML = winningCard(cards[0].value, cards[1].value)
        cardCount(data)
    })
}

function winningCard(card1, card2) {
    //We assume that the cards at this point
    //are just text, not actual numbers, so
    //we need to get the numeric equivalent
    const c1Number = cardEquivalents.find(x => x.name===card1).number
    const c2Number = cardEquivalents.find(x => x.name===card2).number
    if(c1Number>c2Number) {
        return "Computer wins!"
    } else if(c2Number>c1Number) {
        return "You win!"
    } else {
        return "War"
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

function cardCount(cardData) {
    document.getElementById('remaining-cards').innerHTML = cardData.remaining + " Cards Left"
    if(cardData.remaining <= 0) {
        disableDraw()
    } else {
        enableDraw()
        
    }
}

function disableDraw() {
    const drawBtn = document.getElementById("draw-cards")
    drawBtn.disabled = true;
    drawBtn.classList.add('disabled')
}

function enableDraw() {
    const drawBtn = document.getElementById("draw-cards")
    drawBtn.disabled = false;
    drawBtn.classList.remove('disabled')
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
 * Try to determine which of the 2 cards is the "winner" (has higher value)
 * Aces are the card with the highest "score"
 * 
 * Part 2:
 * Instead of logging the winner to the console, 
 * display an `h2` on the screen above the 2 cards 
 * that declares who the winner is.
 * 
 * If card1 is the higher card, display "Computer wins!"
 * If card2 is the higher card, display "You win!"
 * If they're equal, display "War!"
 */