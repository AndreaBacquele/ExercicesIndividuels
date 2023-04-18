const colors = ['blue','red','yellow','green'] // Couleurs valides
const proposition = ['blue','red']

// Je demande les couleurs au joueur
function askColor(){
let array = []
    for (let i = 0; i<2; i++) {
        let colour = prompt(`Color n°${i + 1} :`)
        while (!checkColor(colour)) {
            colour = prompt("A valid colour plz")
        }
        array.push(colour)
    }
    return array
}

// Est ce que les couleurs rentrées par le joueur sont bonnes ? 
function checkColor(color){
    let except = colors.includes(color)
    return except
}


// Limiter le nombre d'essai à 12



function codeOk(proposition){
    let response = code === proposition
    return response
}

askColor()