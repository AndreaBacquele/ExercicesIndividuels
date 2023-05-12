


function askName(){
    let user_name = prompt("Quel est votre nom ?")
    let bonjour = "Bonjour " + user_name
    document.body.innerHTML += "<h2>" + bonjour + "</h2>" 
}

function askBirthYear(){
    let age_of_birth = prompt("Quelle est votre année de naissance ?")
    let age = 2023 - age_of_birth
    document.body.innerHTML += "<h3>"+ "Vous avez donc " + age + " " + "ans" + "</h3>"
}


askName()
askBirthYear()
