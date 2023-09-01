const str = "J'utilise les expressions regulière pour retrouver des schémas de text au sein d'une chaine de caractères."

// Etape 1 : Trouver les occurences de 'de'
const exp1 = / de /g;
console.log('Occurences de' + ' : ' + str.match(exp1).length)

// Etape 2 : Trouver les occurences de 'de' + 'des'
const exp2 = / de | des /g;
console.log('Occurences de/des' + ' : ' +str.match(exp2).length)

// Etape 3 : Trouver les occurences de 'de' + 'des' + 'les'
const exp3 = / (d|l)es? /g;
console.log('Occurences de/des/les' + ' : ' + str.match(exp3).length)

// Etape 4 : Retourner le nombre de caractères alphabétiques dans la chaine
const exp4 = /[a-z]|[A-Z]/g;
console.log('Nombre de caractéres' + ' : ' + str.match(exp4).length)

// Etape 5 : Renvoie le nombre de caractéres spéciaux dans la chaine
const exp5 = /[^a-zA-Z ]/g;
// Autre solution /[^a-zA-Z\s]/g
console.log('Nombre de caractéres spéciaux' + ' : ' + str.match(exp5).length)