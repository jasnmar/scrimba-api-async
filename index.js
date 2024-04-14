let deckId
let computerScore = 0
let userScore = 0

const getDeckBtn = document.getElementById("new-deck")
const drawCardsBtn = document.getElementById("draw-cards")
const winnerText = document.getElementById("winner-text")

getDeckBtn.addEventListener("click", getDeck)
drawCardsBtn.addEventListener("click", draw2)

async function getDeck(e) {
    e.preventDefault()
    const res = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/", {
        method: "GET"
    })
    const data = await res.json()
    cardCount(data)
    console.log(data)
    deckId = data.deck_id
    console.log(deckId)

    }


async function draw2() {
    const res = await fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`, {
        method: "GET"
    })
    const data = await res.json()

    const cards = data.cards
    console.log(data)
    const cardsDiv = document.getElementById("cards")
    let cardDivs = document.querySelectorAll("#cards > div")

    for(let i = 0; i < cardDivs.length; i++) {
        cardDivs[i].innerHTML = `<img src="${cards[i].images.png}">`
    }
    winnerText.innerHTML = winningCard(cards[0].value, cards[1].value)
    cardCount(data)
}

function winningCard(card1, card2) {
    //We assume that the cards at this point
    //are just text, not actual numbers, so
    //we need to get the numeric equivalent
    const c1Number = cardEquivalents.find(x => x.name===card1).number
    const c2Number = cardEquivalents.find(x => x.name===card2).number
    if(c1Number>c2Number) {
        computerScore++
        document.getElementById("computer-score").textContent = computerScore
        return "Computer wins!"
    } else if(c2Number>c1Number) {
        userScore++
        document.getElementById("user-score").textContent = userScore
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
        if(computerScore>userScore) {
            winnerText.innerHTML = "The Computer Won The Game!"
        } else if(userScore>computerScore) {
            winnerText.innerHTML = "You Won The Game!"
        } else {
            winnerText.innerHTML = "The Game Was a Tie"
        }
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
/**
 * Challenge:
 * 
 * Change async operations below to use async/await instead of .then()
 */