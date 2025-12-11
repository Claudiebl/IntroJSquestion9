  // ======== DONNÉES DU JEU ========
const motHasard = words[Math.floor(Math.random() * words.length)];

const jeu = {
    imgPendu : [
    "./images/1.png",
    "./images/2.png",
    "./images/3.png",
    "./images/4.png",
    "./images/5.png",
    "./images/6.png",
    "./images/7.png",
    "./images/8.png",
    "./images/9.png",
    ],

    lettre : [a-z],

    tentativeMax: 6,
    Erreurs: 0,
    victoire: false,
};
 
  // ======== SÉLECTEURS DOM ========
  const afficheImage = document.getElementById("imgPendu");
  const board = document.getElementById("board");
  const lettreSelected = document.getElementById("boutonValide");
  const boutonRejouer = document.getElementById("boutonRejouer");
  const overlay = document.getElementById("overlay");
  const overlayContent = document.getElementById("overlay-content");