import readlineSync from "readline-sync";
let produits = [{nom:"cd",prix:"4€",quantite:"5"}];

function ajouterProduit(){
    console.log("Ajout d'un produit");
    let nom = lireNom();
    let prix = lirePrix();
    let quantite = lireQuantite();
    produits.push({nom:nom,prix:prix,quantite:quantite});
}

function lireNom(){
    let nom="";
    while(nom=="" ){
        nom=readlineSync.question("Entrez un nom de produit");
    }
    return nom;
}

function lirePrix(){
    let prix=0;
    while(isNaN(prix) || prix <=0){
        prix = Number(readlineSync.question("Entrez le prix du produit, celui-ci doit etre positif"));
    }
    return prix;
}

function lireQuantite(){
    let quantite =-1;
    while(isNaN(quantite) || quantite<=0){
        quantite = parseInt(readlineSync.question("Entrez la quantite prix du produit, celle-ci doit etre positive"));
    } 
}

function retirerProduit(){
    console.log("retirer produit");
    let nom = lireNom();
    let index = findIndex(nom);
    if(index !=-1){
        produits.splice(index,1);
    }
}

function findIndex(nom){
   let index =-1
   let iteration=0;
   while(iteration<produits.length && index ==-1){
    if(produits[iteration].nom == nom){
        index= iteration;
    }
    iteration++;

   }
   return index;
}

function miseAjourProduit(){
    console.log("mise à jour produit");
    let nom = lireNom();
    let index = findIndex(nom);
    if(index !=-1){
        let choix = majPrixOuQuantite();
        if(choix == "p"){
            produits[index].prix= lirePrix(); 
        }
        else{
            produits[index].quantite = lireQuantite();
        }
    }
}

function majPrixOuQuantite(){
    let choix = "";
    while(choix.toLowerCase() !="p" && choix.toLowerCase()!="q"){
        choix = readlineSync.question("Entrez 'p' si vous voulez changer le prix, si vous voulez changer la quantite entrez 'q'");
    }
    return choix.toLowerCase();
}

export default {ajouterProduit,retirerProduit,miseAjourProduit}