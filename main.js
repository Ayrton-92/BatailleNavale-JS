jeu.initialisation();
jeu.afficherGrille();
// while(true){
//     if(jouer()) return;//J1
//     if(jouer()) return;//J2
// }

function jouer(){
    var saisieLigne = toolbox.saisirEntier("Jouer en quelle ligne ? : ");
    var saisieColonne = toolbox.saisirEntier("Jouer en quelle colonne ? : ");
    var isOver = jeu.jouerCase(saisieLigne,saisieColonne);
    jeu.afficherGrille();
    return isOver;
}