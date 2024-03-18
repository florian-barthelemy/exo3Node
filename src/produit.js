import readlineSync from "readline-sync";
let produits = [{nom:"cd",prix:"4€",quantite:"5"}];

function ajouterProduit(){
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

export default {ajouterProduit,retirerProduit}