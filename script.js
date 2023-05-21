/////////////////////////////////////////////////////////////////////
//ETAPE 0
//Déclarer les Variables 

//let firstCard = 10
//let firstCard = getRandomCard()
//let secondCard = 4
//let secondCard = getRandomCard()

//Créer un tableau pour regrouper les cartes
let cards = [] // Array order  list of items

//Variable pour calculer la somme des cartes initialis" à zéro
let sum = 0

//Variables Bool
let hasBlackjack = false
let isAlive = false

//Déclarer une variable message 
//pour réindexer les messages de consol.log dans un seul message

let message = ""
//console.log(message)=> un message vide s'affiche

///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
//ETAPE 4

//  Pour modifier les éléments HTML dans le JavaScript

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

//Autre façon de procéder en créant un sélécteur de requête (mode plus dynamique)
//let sumEl = document.querySelector("#sum-el")

//  Pour vérifier si les éléments HTML sont pris en compte

// console.log(messageEl)
// console.log(sumEl)
// console.log(cardsEl)

// Ajouter le nom et le credit du joueur
// Créer un objet

let player = {

    name : "Per",
    credit : 145 
}
//let playerName = "Per" Mettre ces 2 valeur dans l'objet ci dessus
//let playerCredit = 145

let playerEl = document.getElementById("player-el")

///////////////////////////////////////////////////////////////////////
//ETAPE 0
//Déclarer les Variables
///////////////////////////////////////////////////////////////////////
//ETAPE 1
//Créer les Conditions
///////////////////////////////////////////////////////////////////////
//ETAPE 2
//Créer une Variable Bool hasBlackjack qui précise si le joueur à le blackjack ou non
//Créer une variable Bool isAlive qui précise si le joueur est toujours en jeu ou non
//Ces variables conserveront une trace des données de l'état
///////////////////////////////////////////////////////////////////////
//ETAPE 3
//Créer les Fonctions
///////////////////////////////////////////////////////////////////////
//ETAPE 4
//Modifier les éléments HTML pour afficher le message dans l'interface
///////////////////////////////////////////////////////////////////////
//ETAPE 5
//Créer un bouton pour tirer une 3eme Carte
///////////////////////////////////////////////////////////////////////
//ETAPE 6.1 et 6.2
//Changer le nom de la fonction startGame et recréer cette fonction
//Mettre les variables dans un tableau et afficher celles ci avec une boucle
///////////////////////////////////////////////////////////////////////
//ETAPE 7
//Rendre le tirage des cartes aléatoire
///////////////////////////////////////////////////////////////////////

//DEBUT//

///////////////////////////////////////////////////////////////////////
//ETAPE 7
//Créer une fonction getRandomCard() qui renvoi un nombre aléatoire
//Changer la valeur des variables des 3 cartes en remplaçant les chiffres par la fonction

function getRandomCard() {

    //Créer une variable avec la fonction ci dessous 
    //pour générer des nombres aléatoires entre 1 et 13

    //Conditions L'AS vaut 11 et les Têtes (Valet-Dames-Rois) valent 10

    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11

    } else if (randomNumber > 10) {
        return 10

    } else {
        return randomNumber
    }
}
//console.log(cards)

///////////////////////////////////////////////////////////////////////
//ETAPE 3
///////////////////////////////////////////////////////////////////////
//ETAPE 6.1

//Créer une nouvelle fonction startGame() qui initialise les paramêtres du jeu
//et qui appelle renderGame()

function startGame() {

    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    playerEl.textContent = player.name + ": $ " + player.credit
    renderGame()
}

function renderGame() {

    ///////////////////////////////////////////////////////////////////////
    //ETAPE 6.2

    //cardsEl.innerText = "Cards: " + firstCard + " - " + secondCard Afficher les valeurs
    //cardsEl.innerText = "Cards: " + cards[0]  + " - " + cards[1] Afficher les valeurs dans un tableau

    cardsEl.textContent = "Cards: "

    //Créer une boucle pour afficher l'ensemble des valeurs du tableau
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "

    }

    //Afficher le message dans l'interface en cliquant sur le bouton
    sumEl.innerText = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You have got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You are out the game"
        isAlive = false
    }
    //Afficher le message dans l'interface en cliquant sur le bouton
    messageEl.textContent = message

    //console.log(message)
}

function newCard() {

    ///////////////////////////////////////////////////////////////////////
    //ETAPE 5

    //Ajouter une condition autorisant le jooueur à tirer une seule carte

    if (isAlive === true && hasBlackjack === false) {

        //let card = 6
        let card = getRandomCard()
        sum += card

        cards.push(card)
        //console.log(cards)

        renderGame()
    }

    //Dans la condition Déclarer une nouvelle carte
    //Ajouter cette carte à la somme
    //Push la troisième carte dans le tableau
    //Faire appel à la fonction renderGame

}

///////////////////////////////////////////////////////////////////////
//ETAPE 1

// if (sum <= 20) {
//     message = "Do you want to draw a new card?😉"

// } else if (sum === 21){
//     message = "You have got Blackjack!😍"

//     //La variable se déclenche si cette condition est remplie
//     hasBlackjack = true

// } else {
//     message = "You are out the game😭"
//     isAlive = false
// }
///////////////////////////////////////////////////////////////////////

// console.log(hasBlackjack)
// console.log(isAlive)
// console.log(message)//=>un message s'affiche en fonction de la condition remplie








///////////////////////////////////////////////////////////////////////
//FIN//

///////////////////////////////////////////////////////////////////////
//Règles du Balckjack//

//Les cartes doivent sortir aléatoirement (entre 2 et 11)
//Le joueur possède au départ 2 cartes

//Le joueur doit tirer une carte pour disposer d'une main

//3 scénarios possible DONC 3 CONDITIONS
// 1 main < 21 -> PERDU
// 1 main = 21 -> GAGNE
// 1 main > 21 -> PERDU
///////////////////////////////////////////////////////////////////////
