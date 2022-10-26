var IA = {
    getCellule : function(){
        var celullesPossible = this.getAllCellulePossible();
        var randomCel = Math.floor(Math.random() * celullesPossible.length);
        return celullesPossible[randomCel];
    },

    getAllCellulePossible : function(){
        var celVide = [];
        for (var i=0; i < jeu.nbLigne;i++){
            for (var j=0; j < jeu.nbColonne;j++){
                if(jeu.grille[i][j] === 0 || jeu.grille[i][j] === 1){
                    var cel = {
                        ligne : i,
                        colonne : j
                    }
                    celVide.push(cel);
                }
            }
        }
        return celVide;
    }
}