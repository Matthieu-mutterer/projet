var tab = [];
function ajouterBiere(formulaire){
    tab.push( [[formulaire.nom.value, formulaire.style.value,
        formulaire.type.value, formulaire.alcool.value, formulaire.creation.value, formulaire.perimer.value]] );
    console.log(tab);
}
