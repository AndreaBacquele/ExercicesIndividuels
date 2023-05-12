function giveMeANumber (){
    let givenNumber = prompt("Donnez moi un nombre")
    return givenNumber
}
giveMeANumber()

function didIWin(givenNumber){
    while(givenNumber!=22){
        if (givenNumber < 22){
            alert("Plus grand")
            giveMeANumber()
        } else if (givenNumber > 22){
            alert("Plus petit")
            giveMeANumber()}
        alert("Bravo! vous avez deviné le nombre.")
        }
}

didIWin(giveMeANumber())