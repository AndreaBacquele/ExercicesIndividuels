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

console.log(decritChaine("ab"))   // renvoie "1a1b"
console.log(decritChaine("aabbca"))  // renvoie "2a2b1c1a"
