jeu.initialisation();
jeu.afficherGrille();

function jouer(ligne,colonne){
    var isOver = jeu.jouerCase(ligne,colonne);
    jeu.afficherGrille();
    return isOver;
}