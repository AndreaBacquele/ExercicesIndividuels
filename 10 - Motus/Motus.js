
function tryWord(word, base) {
	// TODO: fix jeu sensible à la casse.
	if (word === base) {
		return true
  } else {
  	let wellPlaced = [];
    let notInWord = [];
    let missplaced = [];
    
  	let arrayBase = base.split('');
    let arrayWord = word.split('');
 
		for (let i = 0; i < arrayBase.length; i++) {
    	if (arrayBase[i] === arrayWord[i]) {
      	wellPlaced.push(arrayWord[i])
      } else if (arrayBase.includes(arrayWord[i])){
        missplaced.push(arrayWord[i])
      }
    } 
        for (const char of arrayWord){
          if (arrayBase.includes(char)===false)
            notInWord.push(char)
      
    }
    console.log(wellPlaced)
    console.log(missplaced)
    console.log(notInWord)
    
    // à droite : valeur - permet de récuperer les 3 tableaux dans la fonction guess 
    return {wellPlaced: wellPlaced, 
            missplaced: missplaced, 
            notInWord: notInWord }
  }
}

function guess() {
	let base = 'dictionnaire'
	let word = document.getElementById("word").value
	let result = tryWord(word, base)
  if (result === true) {
   document.getElementById("word").value = ''
   document.getElementById("try").innerText = word
   document.getElementById("well").innerText = ""
   document.getElementById("miss").innerText = ""
   document.getElementById("not").innerText = ""
	 document.getElementById("win").innerText = 'Vous avez gagné'
  } else {
  document.getElementById("word").value = '' // vide le champ d'input
 	document.getElementById("try").innerText = word
  document.getElementById("well").innerText = 'Bien placé: '+result.wellPlaced.join(',')
  document.getElementById("miss").innerText = 'Mal placé: '+result.missplaced.join(',')
  document.getElementById("not").innerText = 'Pas dans le mot: '+result.notInWord.join(',') 
  }
}
