let allumettes = 50

function getBackAllumette(nbr) {
    allumettes = allumettes - nbr
    console.log(allumettes);
}

function ask_player() {
    let reponse = parseInt(window.prompt("Combien d'allumettes ..."))
    console.log(reponse);
    while (reponse == "" || isNaN(reponse) == true) {
        reponse = window.prompt("Combien d'allumettes ...")
    }
    getBackAllumette(reponse)
}
ask_player()