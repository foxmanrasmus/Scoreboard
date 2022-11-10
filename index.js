
// Home
let countEl = document.getElementById("home-count-el")
let count = 0

function homeIncrementOne() {
    count = count + 1
    countEl.innerText = count
}

function homeIncrementTwo() {
    count = count + 2
    countEl.innerText = count
}

function homeIncrementThree() {
    count = count + 3
    countEl.innerText = count
}

// Guest
let guestCountEl = document.getElementById("guest-count-el")
let guestCount = 0

function guestIncrementOne() {
    guestCount = guestCount + 1
    guestCountEl.innerText = guestCount
}

function guestIncrementTwo() {
    guestCount = guestCount + 2
    guestCountEl.innerText = guestCount
}

function guestIncrementThree() {
    guestCount = guestCount + 3
    guestCountEl.innerText = guestCount
}
// Reset both scores
function newGame() {
   //Home
   count -= count
   countEl.innerText = count
   //Guest
   guestCount -= guestCount
   guestCountEl.innerText = guestCount
}

function whoIsWinning() { 
    console.log(guestCount > Count);
}

console.log("guestCount" > "Count")