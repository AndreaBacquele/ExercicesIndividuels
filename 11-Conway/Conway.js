// Etape 1
//Prend en paramétre une string et renvoie la même string dans laquelle les caractéres successifs non identiques sont séparés par un espace
function decoupeChaine(string){
    let string2 = string[0]
    for (let i=0; i<string.length-1; i++){
        if (string[i] == string[i+1]){
            string2 += string[(i+1)]
        } else {
            string2 += " " + string[(i+1)]
        }
    }
    return string2
}

//console.log(decoupeChaine("aaaabcabbbc"))

//Etape 2
//Créer une fonction decritChaine, inspirée de decoupeChaine, qui prend en paramètre une string et renvoie une string qui décrit, tel qu'expliqué ci-dessus, les caractères qui constituent la chaîne en paramètre.

function decritChaine(string) {
    let compteur = 1;
    let string2 = "";
  
    for (let i = 0; i < string.length - 1; i++) {
      if (string[i] !== string[i + 1]) {
        string2 += compteur + string[i];
        compteur = 1;
      } else {
        compteur++;
      }
    }
    string2 += compteur + string[string.length - 1];
  
    return string2;
  }

// console.log(decritChaine("ab"))   // renvoie "1a1b"
// console.log(decritChaine("aabbca"))  // renvoie "2a2b1c1a"


//Etape 3
//Créer une fonction suiteConway qui donne les n premiers termes de la suite qui commence par le caractère carac. n et carac sont passés en paramètres de la fonction.

function suiteConway(carac,n){
    console.log(carac)
    //let liste = document.getElementById("liste")
    for (let i = 1; i<n; i++){
    carac = decritChaine(carac)
    //liste.innerHTML += carac
    console.log(carac);
}
}
suiteConway('a', 3)
// a
// 1a
// 111a

suiteConway('1', 3)  
// 1
// 11
// 21
