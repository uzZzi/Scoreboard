let homeCounter = 0
let guestCounter = 0
let homeTotalScore = document.getElementById("homeTotalScore")
let guestTotalScore = document.getElementById("guestTotalScore")

function homePlusOne(){
    
    homeCounter += 1
    homeTotalScore.textContent = homeCounter
    
    
}
function homePlusTwo(){
    homeCounter += 2
    homeTotalScore.textContent = homeCounter
    
}
function homePlusThree(){
    homeCounter += 3
    homeTotalScore.textContent = homeCounter

}
function guestPlusOne(){
    
    guestCounter += 1
    guestTotalScore.textContent = guestCounter
    
    
}
function guestPlusTwo(){
    guestCounter += 2
    guestTotalScore.textContent = guestCounter
    
}
function guestPlusThree(){
    guestCounter += 3
    guestTotalScore.textContent = guestCounter
}