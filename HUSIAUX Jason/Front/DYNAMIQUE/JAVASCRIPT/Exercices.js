
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

// Exercice 10.2






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
