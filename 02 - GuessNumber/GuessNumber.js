function giveMeANumber (){
    let givenNumber = prompt("Donnez moi un nombre")
    return givenNumber
}

//Indique au joueur s'il a gagné ou lui donne des indications sur le chiffre à deviner
function didIWin(givenNumber,numberToGuess){
    if (givenNumber == numberToGuess){
        alert("Bravo ! Vous avez deviné le nombre")
        return 
    } else {
        while(givenNumber != numberToGuess){
            if (givenNumber > numberToGuess){
                alert("Plus petit")
            } else {
                alert("Plus grand")
            }
            return didIWin(giveMeANumber(), numberToGuess)
        }              
    }
}
//didIWin(giveMeANumber(),30)

function playerOne(numberToGuess){
    let number = giveMeANumber()
    while((number < 0) || (number > 50)){
        alert("Vous n'êtes pas dans la tranche autorisé")
        didIWin(giveMeANumber(), numberToGuess)
        }
}

// playerOne(30)