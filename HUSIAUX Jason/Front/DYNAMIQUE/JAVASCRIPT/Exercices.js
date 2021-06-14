

//--------------------------------------------------------------------------------------
// LES EXERCICES EVALUATION SE TROUVENT A PARTIR DE LA LIGNE 400
//--------------------------------------------------------------------------------------

// //--Exercice 05 Afficher du texte

// // Déclaration des variables
//  var prenom
//  var nom

// // Corps de l'exercice
//  var prenom = window.prompt("Quel est votre nom ?");
//  var nom = window.prompt("Quel est votre prénom ?");
//  if (window.confirm("Etes-vous un homme ?") == true)
// {
//      window.alert("Votre prénom est : "+prenom+"\nVotre nom est : "+nom+"\nVous êtes un homme" )
// }
//      else
// { 
//     window.alert("Votre prénom est : "+prenom+ " \nVotre nom est : "+nom+" \nVous êtes une femme" )
// }

// //********************************************************************************************************

// //Exercice 06 Les opérateurs

// // Déclaration des variables
// var a = "100"
// var b = 100
// var c = 1.00
// var d = true

// // Corps de l'exercice
// window.alert("Ceci est une chaîne de caractères : "+a);
// b--
// c=a
// d=false
// console.log(c,b);

// //*********************************************************************************************************

// // Exercice 07.1 Les conditions

// // Déclaration variables
// var nbre

// // Corps de l'exercice
// nbre=window.prompt("Veuillez entrer un nombre");

// if (nbre%2==0){
//     window.alert("Votre nombre est pair");
// }

// else{
//     window.alert("Votre nombre est impair");
// }

// // **********************************************************************************************************

// // Exercice 07.2 Les conditions

// //Déclaration des variables
// var yearBirth
// var yearOld
// var yearActual

// //Affectations variables
// yearActual = new Date().getFullYear();
// yearBirth = window.prompt("Entrez votre année de naissance") ;
// yearOld = yearActual + yearBirth 

// //Devinner l'age de l'utilisateur et en déduire si il est majeur ou mineur
// if (yearOld>=18) {
//     console.log("Vous êtes majeur");
//     console.log("age " + yearOld)
// }

// else {
//     console.log("Vous êtes mineur");
//     console.log("age " + yearOld)
// }

// *************************************************************************************************************

// // Exercice 07.3 les conditions

// //Déclaration des variables
// var nbr1
// var nbr2
// var operator

// //Affectation des variables
// nbr1 = window.prompt("Entrez un nombre entier");
// nbr2 = window.prompt("Entrez un deuxième nombre entier");
// operator = window.prompt("Entrez un opérateur(+,-,* ou /)"); 
// result = nbr1+operator+nbr2

// //Faire un calcul dont l'utilisateur aura choisit les chiffres et l'opérateur
// if (operator != "+" && operator != "-" && operator != "*" && operator != "/") {
//     window.alert("Saisi incorrect");
//     }
//     else{
//         switch (operator) {
//             case "+":
//                 window.alert(nbr1 + nbr2)
//                 break;
        
//             case "-":
//                 window.alert(nbr1 - nbr2)
//                 break;
            
//             case "*":
//                 window.alert(nbr1 * nbr2)
//                 break;
            
//             case "/":
//                 if ((nbr2 == 0)) {
//                     window.alert("Veuillez choisir un autre chiffre afin de ne pas diviser par 0")
//                 }else{
//                 window.alert(nbr1 / nbr2)
//             }
//         }
//     } 

// ****************************************************************************************************************

// Exercice 08.1 Les boucles

// // Déclaration des variables
// var prenom
// var i = 0

// // L'utilisateur doit rentrer un prénom, tant qu'il rentre quelque chose le programme continue, dès qu'il ne rentre rien, le prog lui affiche le nombre de prénoms qu'il a rentré
// while (prenom!="") {

//     prenom=window.prompt("Veuillez saisir un prénom");
//     if (prenom == "") {
//         break;
//     }
//     i++;
// }

// window.alert("Vous avez rentré "+i+" prénoms")

// //*****************************************************************************************************************

// //Exercice 08.2 Les boucles

// // Déclaration des variables
// var N
// var i 
// N = window.prompt("Ecrivez un nombre")

// //Affichage des nombres inférieurs au nombre déclaré par le user
// while (N>0) {
//     N--
//     document.write(N+"<br>" )
// }

// //******************************************************************************************************************

// //Exercice 08.3

// // Déclaration des valeurs
// var somme = 0 ;
// var moyenne
// var i = 0;
// var entrerNum = parseInt(prompt('entez un nombre :'),10)

// //L'user rentre des nombres jusqu'a rentrer un 0, le programme calcul la somme et la moyenne des nombres rentrés
// while ((entrerNum !==0)) {
//     somme = somme + entrerNum ; 
//     i++;
//     moyenne = somme / i
//     entrerNum = parseInt(prompt('entez un nombre :'),10)
// }
// console.log(somme);
// console.log(moyenne);
// console.log(i);

// //******************************************************************************************************************

// // Exercice 08.4

// // Déclaration des valeurs
// var n = window.prompt("Choisissez un nombre")
// var x = window.prompt("Choisissez un nombre multiplicateur")
// var i
// var produit

// //Le programme va calculer les N premiers multiples d'un nombre entier X, N et X étant entrés au clavier.
// for (let i = 0; i <= n ; i++) {
//     produit = i * x 
//     document.write(i+" x "+x+" = "+produit+"<br>");
// }

// *********************************************************************************************************************

// Exercice 08.5

//// définition des var
// var mot = prompt("Entrez un mot");
// var voyelles = "aeiouyAEIOUY";
// var compteur = 0;

//     for (i=0;i<mot.length;i++) {
//             var lettre = mot.substring(i, i+1);
//             if (voyelles.indexOf(lettre) != -1) 
//             {
//                 compteur++;
//             }
//         }

//         alert("Le nombre de voyelles est de : " + compteur);

// *********************************************************************************************************************

// // Exercice 9.1 Les fonctions
//// définition des var
// x = window.prompt("Entrez un nombre") 
// y = window.prompt("Entrez un multiplicateur")
// var image = "<img src=\"./Image/papillon.jpg\" alt=\"\">"

// function produit(x,y) {  
//     document.write("<br> Le cube de "+x+" est égal a " +x**3) 
//     document.write("<br> Le produit de "+x+ " x "+y+ " est égal a " +x*y)
//     return x*y
// }


// function afficheImg(img) {
//     return document.write(img) ;
// }



// afficheImg(image);
// produit(x,y)


// ****************************************************************************************************************************

// Exercice 9.2

// // Définition des variables
// var str1 = "robert ; dupont ; amiens ; 80000"
// var str2 = ";"
// var n = prompt("Entrez un chiffre entre 0 et 3")

// //Les mots de la chaine de caract str1 sont divisés par le signe ";" de str2 grace à .split, on peut donc isoler mot par mot str1 et demander "n" a l'user pour faire remonter un mot
// function strtok(str1, str2,n){

//     var mot = str1.split(str2)
//     console.log(mot[n]);
//     }
    
// strtok(str1, str2, n);

// ********************************************************************************************************************************

// Exercice 10.1 Les Tableaux

// var taille = parseInt (prompt("Entrez la taille du tableau"))
// var tableau = Array(taille)


 
//     for (let i = 0; i < tableau.length; i++) {
//         tableau[i] =  prompt("Entrez du contenu pour le tableau")
        
//     }

// document.write("Les valeurs contenues dans le tableau sont : "+tableau);

// *************************************************************************************************************************************

// // Exercice 10.2

// //Déclaration des fonctions

// //une fonction GetInteger pour lire un entier au clavier,
// function getInteger(message) {
//     return parseInt(prompt(message))
// }

// // une fonction InitTab pour créer et initialiser l’instance de tableau : le nombre de postes souhaité sera entré au clavier,
// function initTab() {
//     var taille = getInteger("Quelle est la taille du tableau :")
//     var tableau = Array(taille)
//     return tableau
// }

// // une fonction SaisieTab pour permettre la saisie des différents postes du tableau,
// function saisieTab(tableau) {
//     for (i = 0; i < tableau.length; i++) {
//         tableau[i] = getInteger("Entrez du contenu pour le tableau")
//     }
// }
// // une fonction AfficheTab pour afficher tous les postes du tableau,
// function afficheTab(tableau) {
//     document.write("Les éléments du tableau sont :")
//     for (i = 0; i < tableau.length; i++) {
//         if (i == tableau.length-1) {
//             document.write(tableau[i])
//         } else {
//             document.write(tableau[i] + ", ")
//         }
//     }
// }
// // une fonction RechercheTab pour afficher le contenu d’un poste de tableau dont le rang est saisi au clavier
// function rechercheTab(tableau) {
//     var longueurTableau = tableau.length-1
//     var rang = getInteger("Ecrivez un chiffre entre 0 et " + longueurTableau)
//     document.write("La valeur de l'élément est de : " + tableau[rang])
// }
// //une fonction InfoTab qui affichera le maximum et la moyenne des postes.
// function infoTab(tableau) {
//     var somme = 0
    
//     for (i = 0; i < tableau.length; i++) {
//         somme += tableau[i] 
//     }
//     var moyenne = somme / tableau.length


//     document.write("La moyenne des éléments est :" + moyenne)
//     document.write("<br>L'élément avec la plus grande valeur est : " + Math.max(...tableau) )
// }

// //Créer le programme qui fournira un menu permettant de : afficher du contenu de tous les postes du tableau, Affichage du contenu d’un poste dont l’index est saisi au clavier, Affichage du maximum et de la moyenne des postes du tableau

// recette = initTab()

// saisieTab(recette)

// var choix = getInteger("-Si vous voulez afficher tous les éléments du tableau écrivez 1\n-Si vous voulez afficher un élément du tableau écrivez 2\n-Si vous voulez afficher le maximum et la moyenne des éléments écrivez 3")

// if (choix == 1) {
//     afficheTab(recette)
// } else if (choix == 2) {
//     rechercheTab(recette)    
// } else if (choix == 3) {
//     infoTab(recette)
// }

// ***********************************************************************************************************************************

// Exercice 10.3


// var Tableau = new Array(10,7,1,6,2,5,4,3,8);

// for (var ind01 = Tableau.length-1; ind01 >= 0;ind01--) {
//     var temp;
//     for (var ind02 = Tableau.length-1; ind02 >= 0;ind02--) {
//         if (Tableau[ind02] < Tableau[ind01]) {
//             temp = Tableau[ind02];
//             Tableau[ind02] = Tableau[ind01];
//             Tableau[ind01] = temp;
//         }
//     }

// }

// for (var ind01 = 0; ind01 < Tableau.length;ind01++) {
//     document.write(Tableau[ind01])
// }
//
// *******************************************************************************

// // Exercice 13 Les objets natifs

// var tableau = Array()
// var somme = 0

// do {
//     nb = parseInt(prompt("Entrez du contenu pour le tableau"))
//     tableau.push(nb)
// } while (nb != "0");

//  for (i = 0; i < tableau.length; i++) {
//      somme += tableau[i] 
//     }
//     var moyenne = somme / tableau.length



// console.log(tableau);
// console.log(moyenne);
// console.log(somme);

// **************************************************************************************




//--------------------------------------------------------------------------------------
// Evaluation Javascript
//--------------------------------------------------------------------------------------

// Exercice 1 calcul du nombre de jeunes, de moyens et de vieux

// // 3 tableaux pour différencier les tranches d'ages

// var jeunes  = Array()
// var moyens = Array()
// var vieux = Array()

// // Ages entrés par l'User de 1 a infini puis affectation au tableau concernés par la tranche saisie

// do {
//     nb = parseInt(prompt("Entrez des âges de 1 à +100 ans"))
//     if (nb < 20) {
//         jeunes.push(nb)
//     } else if  (nb >= 20 && nb <= 40) {
//         moyens.push(nb)
//     } else {
//         vieux.push(nb) 
//     }
//     } while (nb < "100");

// // Résultats 

// console.log(" Nombre de jeunes : " + jeunes.length + " (" + jeunes + ")");
// console.log("Nombre de moyens : " + moyens.length + " (" + moyens + ")");
// console.log(" Nombre de vieux : " + vieux.length + " (" + vieux + ")");

// ***************************************************************************************

// Exercice 2 table de multiplication

//// Fonction génération table multiplication

// function tableMultiplication(n) {
//     for (let i = 0; i <= 10 ; i++) {
//         var produit = i * n 
//         document.write(i+" x "+n+" = "+produit+"<br>");
//     }    
// }

//// Saisi manuelle du paramètre de la fonction pour générer la table

// tableMultiplication(10)

// ****************************************************************************************

// // Exercice 3

// // Déclarations variables / tableau
// var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
// var recherche = prompt('Saisissez un prénom')

// // Condition qui recherche si le prénom rentré par l'User est dans le tableau, si c'est le cas l'élément est supprimé du tableau et un élément vide est ajouté.

// if (tab.indexOf(recherche)>=0) {
//     var target = tab.indexOf(recherche)
//     tab.splice(target,1)
//     tab.push(" ")
// } else {
//     alert("Le prénom n'est pas dans la liste")
// }

// console.log(tab);

// *********************************************************************************************

// Exercice 4

// // A partir de la saisie du prix unitaire noté PU d'un produit et de la quantité commandée QTECOM, afficher le prix à payer PAP, en détaillant la remise REM et le port PORT
// var PU = parseInt (prompt("Indiquez un prix unitaire"))
// var QTECOM = parseInt (prompt("Indiquez une quantité"))
// var REM
// var PORT
// var TOT = PU * QTECOM

// if (TOT >= "100" && TOT <= "200") {
//     REM = 0.05 * TOT
// } else if (TOT > "200") {
//     REM = 0.10 * TOT
// } else {
//     REM = 0
// }

// if (TOT - REM > "500" ) {
//     PORT = 0
// } else {
//     PORT = 0.02 * (TOT - REM)
// }

// if (PORT < 6) {
//     PORT = 6
// }

// var PAP = TOT + PORT - REM

// console.log("Ceci est le total : " + TOT + "€");
// console.log("Ceci est la remise : " + REM + "€");
// console.log("Ceux ci sont les frais de port : " + PORT + "€");
// console.log("Ceci est le prix total a payer incluant remise et port : " + PAP + "€");

// ********************************************************************************************************
