let tab = [[1, "Jupiler", "bouteille", "P", 5.5, "1966-10-5" ], [2, "Tripel Karmeliet", "fût", "T", 8.4,  "1996-11-7"], [3, "Guinness", "bouteille", "S", 4.2,  "1759-9-15"]];
let string = "";
function ajouterBiere(formulaire){
    tab.push( [Number(formulaire.ide.value), formulaire.nom.value, formulaire.style.value,
        formulaire.type.value, Number(formulaire.alcool.value), formulaire.creation.value] );
return false;
}
function afficherLesBier(table){
    string += "<table>";
    for(let i = 0; i < table.length; i++) {
        string += " <tr><th>ID: " + table[i][0] + "</th></tr>";
        for (let j = 0; j < table[i].length; j++) {
            string += "<tr><td>" + table[i][j] + "</td></tr>";
        }
    }
    string += "</table>";
    document.getElementById('affiche').innerHTML = string;

}

