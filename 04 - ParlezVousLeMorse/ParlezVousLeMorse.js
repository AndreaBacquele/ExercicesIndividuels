
let word = "Hello, world"

function getLatinCharacterList(texte){
   let result = Array.from(texte)
 return result
}

console.log(getLatinCharacterList(word))

const latinToMorse = {
	'A':'.−',
	'B':'−...',
	'C':'−.−.',
	'D':'−..',
	'E':'.',
	'F':'..−.',
	'G':'−−.',
	'H':'....',
	'I':'..',
	'J':'.−−−',
	'K':'−.−',
	'L':'.−..',
	'M':'−−',
	'N':'−.',
	'O':'−−−',
	'P':'.−−.',
	'Q':'−−.−',
	'R':'.−.',
	'S':'...',
	'T':'−',
	'U':'..−',
	'V':'...−',
	'W':'.−−',
	'X':'−..−',
	'Y':'−.−−',
	'Z':'−−..',
	' ': ' ',
	',':'−−··−−',
	'.':'·−·−·−',
	'0':'−−−−−',
	'1':'·−−−−',
	'2':'··−−−',
	'3':'···−−',
	'4':'····−',
	'5':'·····',
	'6':'−····',
	'7':'−−···',
	'8':'−−−··',
	'9':'−−−−·',
}

console.log(typeof(latinToMorse))
let map1 = new Map(Object.entries(latinToMorse))

function translateLatinCharacter(caractere) {
   let valeur = map1.get(caractere)
    return valeur
}

console.log(translateLatinCharacter('A'))

function encode(phrase) {
    let majuscule = phrase.toUpperCase()
    let caractere = getLatinCharacterList(majuscule)
    let traduction = '' 
	for (const element of caractere){
    	traduction += translateLatinCharacter(element) + ' ' 
	}
	
    return traduction
}

let test = "Hello, 42 worlds"
console.log(encode(test))

const morseToLatin = {
	'-': "T",
	'--': "M",
	'---': "O",
	'--.': "G",
	'--.-': "Q",
	'--..': "Z",
	'-.': "N",
	'-.-': "K",
	'-.--': "Y",
	'-.-.': "C",
	'-..': "D",
	'-..-': "X",
	'-...': "B",
	'.': "E",
	'.-': "A",
	'.--': "W",
	'.---': "J",
	'.--.': "P",
	'.-.': "R",
	'.-..': "L",
	'..': "I",
	'..-': "U",
	'..-.': "F",
	'...': "S",
	'...-': "V",
	'....': "H",
	'/' : " ",
	' ' : " "
  }

let map2 = new Map(Object.entries(morseToLatin))

let phraseTest = "...- .. ...- . / .- -.. .-"

function getMorseCharacterList(phraseMorse){
 	let letters = phraseMorse.split(' ')
return letters
}

console.log(getMorseCharacterList(phraseTest))


function transleteMorseCharacter(characters) {
	let traductMorse = map2.get(characters)
	return traductMorse
}

function decode(morse){
	let characters = getMorseCharacterList(morse)
	let traduc = ''
	for (const element of characters){
		traduc += transleteMorseCharacter(element)
	}
	return traduc
}

console.log(decode(phraseTest))