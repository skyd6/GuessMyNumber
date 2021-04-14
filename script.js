const reponse = document.querySelector("#userAnswer")
const randomNumber = document.querySelector("#randomNumber")
const body = document.querySelector("body")
const infos = document.querySelector("#infos")
const button = document.querySelector("#envoyer")
const tryNumber = document.querySelector("#essais")
const retry = document.querySelector("#retry")


chiffreAleatoire = Math.floor(Math.random() * 1000)
randomNumber.innerHTML = chiffreAleatoire

nombreEssais = 10
tryNumber.innerHTML = nombreEssais


reponse.onkeypress = function(event) {
    if (event.keyCode == 13 && reponse.value == chiffreAleatoire) {
        infos.innerHTML = "Félicitations !"
        infos.style.color = "white"
        randomNumber.classList.toggle("visible")
        nombreEssais = nombreEssais - 1
        tryNumber.innerHTML = nombreEssais
        alert("Vous avez gagné")
        reponse.value = ""
        if (nombreEssais == 0){
            chiffreAleatoire = Math.floor(Math.random() * 1000)
            randomNumber.innerHTML = chiffreAleatoire
            nombreEssais = 10
            tryNumber.innerHTML = nombreEssais
            randomNumber.classList.toggle("visible")
            infos.innerHTML = "C'est parti !"
            infos.style.color = "white"
        }
    }
    else if (event.keyCode == 13 && reponse.value < chiffreAleatoire){
        infos.innerHTML = "C'est plus !"
        infos.style.color = "#AF1E1E"
        reponse.value = ""
        nombreEssais = nombreEssais - 1
        tryNumber.innerHTML = nombreEssais
        if (nombreEssais == 0){
            alert("Vous avez perdu")
            chiffreAleatoire = Math.floor(Math.random() * 1000)
            randomNumber.innerHTML = chiffreAleatoire
            nombreEssais = 10
            tryNumber.innerHTML = nombreEssais
            infos.innerHTML = "C'est parti !"
            infos.style.color = "white"
            reponse.value = ""
        }
    }
    else if (reponse.value > chiffreAleatoire){
    infos.innerHTML = "C'est moins !"
    infos.style.color = "#4CD113"
    reponse.value = ""
    nombreEssais = nombreEssais - 1
    tryNumber.innerHTML = nombreEssais
    if (nombreEssais == 0){
        alert("Vous avez perdu")
            chiffreAleatoire = Math.floor(Math.random() * 1000)
            randomNumber.innerHTML = chiffreAleatoire
            nombreEssais = 10
            tryNumber.innerHTML = nombreEssais
            infos.innerHTML = "C'est parti !"
            infos.style.color = "white"
            reponse.value = ""
    }
    }
    else {
        console.log("defaut")
    }

}