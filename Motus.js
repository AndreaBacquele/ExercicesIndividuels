
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
  // 3 conditions possibles : 
  // si le caractére est à la même place et au même index : il est bien placé 
  // si le caractére est dans le tableau mais pas au même index : il est mal placé 
  // si le caractére n'est pas dans le tableau : il n'est pas ka
		for (let i = 0; i < arrayBase.length-1; i++) {
    	if (arrayBase[i] === arrayWord[i]) {
      	wellPlaced.push(arrayWord[i]);
      }	else if (arrayBase[i] != arrayWord[i]){
        
        


        missplaced.push(arrayWord[i])
      }
    }
    
    for (const char of arrayWord) {
    	if (arrayBase.includes(char) === false) {
      	notInWord.push(char)
      }
    }
    console.log(arrayBase)
    console.log(arrayWord)
    return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }
  }
}

function guess() {
	let base = 'dictionnaire'
	let word = document.getElementById("word").value
	let result = tryWord(word, base)
  if (result === true) {
   document.getElementById("word").value = ""
	 document.getElementById("win").innerText = 'Vous avez gagné'
  } else {
  document.getElementById("word").value = ''
 	document.getElementById("try").innerText = word
  document.getElementById("well").innerText = 'Bien placé: '+result.wellPlaced.join(',')
  document.getElementById("miss").innerText = 'Mal placé: '+result.missplaced.join(',')
  document.getElementById("not").innerText = 'Pas dans le mot: '+result.notInWord.join(',') 
  }
}
