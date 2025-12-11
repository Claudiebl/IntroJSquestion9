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
    tentativeMax: 9,
    tentativeCourante: 0,
    victoire: false,
};
 
  // ======== SÉLECTEURS DOM ========
  const mesImages = document.getElementById("mesImages");
  const saisieUser = document.getElementById("saisieUser");
  const msgTentative = document.getElementById("nbTentative");
  const msgPlusOuMoins = document.getElementById("plusOUmoins");
  const boutonValider = document.getElementById("boutonValide");
  const boutonRejouer = document.getElementById("boutonRejouer");
  const overlay = document.getElementById("overlay");
  const overlayContent = document.getElementById("overlay-content");