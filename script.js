// console.log("Hello Je suis un script !");


// navigator.geolocation.watchPosition(onPositionReceived);

// function onPositionReceived(position) {
//     console.log("Latitude: " + position.coords.latitude);
//     console.log("Longitude: " + position.coords.longitude);
// }

    // /**
    //  * L'objectif est rechercher et afficher un pokémon en fonction de son nom
    //  */

    // // 1. Je récupère le formulaire HTML
    // const formPokemon = document.querySelector(".form_pokemon");
    
    // // 2. J'affecte une fonction à l'évenement submit du formulaire
    // //   Cette fonction sera appelée à chaque fois que l'utilisateur soumettra le formulaire (via la touche entrée ou le bouton)
    // formPokemon.onsubmit = searchPokemon;

    // // 3. Je déclare la fonction searchPokemon
    // async function searchPokemon(formEvent){
    //     // Annule le rechargement de la page
    //     formEvent.preventDefault();  
        
    //     // Récupère les données du formulaire via une objet FormData
    //     const formData = new FormData(formPokemon); 

    //     // Grâce à l'objet FormData, je peux récupérer facilement les valeurs des champs du formulaire
    //     const pokemonName = formData.get("pokemon_name"); // Récupère la valeur du champ "pokemon_name"
    //     console.log(pokemonName);

    //     // Envoi de la requête HTTP au serveur pokebuildapi.fr
    //     const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon/"+pokemonName);
    //     // Réponse de la requête HTTP : un objet pokemon au format JSON convertit en objet JS
    //     const pokemon = await response.json();

    //     // Mise à jour de l'affichage
    //     document.querySelector(".pokemon_name").innerText = pokemon.name;
    //     document.querySelector(".pokemon_image").setAttribute("src",pokemon.image);
    // }
              

    

// Déclarez une variable nom contenant votre prénom, puis affichez-le dans la console.
// À partir d'une variable age, écrivez un programme qui affiche :
// "Tarif Senior" si l'âge est supérieur ou égal à 65
// "Tarif -26 ans" si l'âge est inférieur à 26
// "Tarif Mineur" si l'âge est inférieur à 18
// "Tarif Normal" dans les autres cas.




// let tarifnormal_str = 30 ;
// let nom_str = "Duplouich";
// let prenom = "Marie-Sophie";
// let age = 25;

// if(age > 18){
//     console.log("Bonjour " +prenom+" "+nom_str+ " Vous êtes majeur : "+age+" ans");
// } else {
//     console.log("Vous êtes mineur");
// }


// function tarifSenior_func (tarifsenior_func){
// let result_number;
// if(tarifsenior_func  >= 65){


//   result_number = "tu as droit au tarif senior car ton âge est ";
// } else {
//     result_number = "tu n'as pas droit au tarif senior";
// }
// return result_number;
//   }

//   console.log(tarifSenior_func(25));



  
// function tarifMoinsvingtsixans_func ( tarifmoinsvingtsixans_func){
// let  result_number ;

// if(tarifmoinsvingtsixans_func <= 26){
  
//   result_number = "tu as droit au tarif moins de 26 ans car ton âge est ";
// } else {
//     result_number = "tu n'as pas droit au tarif  moins de 26 ans ";
// }
// return result_number;
// }
// console.log(tarifMoinsvingtsixans_func(25));




// function tarifMineur_func (tarifmineur_func){

// let result_str ;
// if(tarifmineur_func  <= 18){

// result_str = "tu as droit au tarif moins de 18 ans";
// } else {
//     result_str = "tu n'as pas droit au tarif  moins de 18 ans ";
// }
// return result_str;
// }

// console.log(tarifMineur_func(25));


// function testNum(a) {
//   let result;
//   if (a > 0) {
//     result = "positive";
//   } else {
//     result = "NOT positive";
//   }
//   return result;
// }

// console.log(testNum(-5));
// Expected output: "NOT positive"

// Créez une fonction nommée saluer_func 
// qui prend un prénom un paramètre et affiche 
// "Bonjour, [prénom] !" dans la console. 
// Appelez cette fonction avec votre prénom. Ensuite, utilisez prompt pour demander le prénom à l'utilisateur.

// function saluer_func(){
// let firstname_str =  prompt("Saisis ton prénom");
//  alert("Bonjour,  " +  firstname_str + "!");
// }
// setInterval(saluer_func, 4000);


// Écrivez une fonction addition_func qui prend deux nombres en paramètres et retourne leur somme. 
// Affichez le résultat dans la console en appelant la fonction avec deux valeurs de votre choix.
// Utilisez setInterval pour afficher "Ceci s'affiche toutes les 2 secondes" dans la console toutes les 2 secondes.

// function addition_func(){
// let addition =  parseInt(prompt("Saisis un premier chiffre"));
// let secondaddition =  parseInt(prompt("Saisis un deuxième chiffre"));
// let firstcalculus = addition + secondaddition;
// let secondsecondcalculus = addition + secondaddition
//  alert("Bonjour, le total est de  " +  secondsecondcalculus + "!");
// }
// setInterval( addition_func, 2000);



// Créez une fonction qui affiche la date 
// et l'heure actuelles dans la console, puis utilisez setInterval pour exécuter cette fonction toutes les secondes.


// function date_func(){
// let now = new Date();
// alert( now );
// }
// setInterval( date_func, 1000);


// Créez un tableau contenant trois prénoms, puis affichez chacun d'eux dans la console à l'aide d'une boucle for.

// Même chose avec la fonction forEach

// const firtsname_arr = ["Paul","Bob","Olivier"];
// for(const name_str of firtsname_arr){
//     console.log(name_str); 
// }


// const firtsname_arr = ["Paul","Bob","Olivier"];
// firtsname_arr.forEach( function(name_str){
//     console.log(name_str);
// } );

// const voiture_obj  = {
//     marque: "Peugeot",
//     modele: 320,
//     annee: "2008",
//    marque: "Citroën",
//     modele: 340,
//     annee: "2008",
//    marque: "Hyundai",
//     modele: 340,
//     annee: "2008",
//     marque: "Skoda",
//     modele: 340,
//     annee: "2008",
//      marque: "Volvo",
//     modele: 340,
//     annee: "2008"
// };

// console.log(  voiture_obj.nom );
// console.log( voiture_obj["marque"] ); // On peut aussi accéder aux propriétés avec des crochets à la manière du PHP.
// console.log( voiture_obj["modele"] );
// // Déclarez un objet voiture_obj avec les propriétés marque, modele et annee, puis affichez la marque et le modèle dans la console.

// Créez une variable ville_str contenant le nom de votre ville, puis affichez-la dans la console.


// Écrivez un programme qui demande à l'utilisateur son âge avec prompt, puis affiche "Vous êtes majeur" si l'âge est supérieur ou égal à 18, sinon affiche "Vous êtes mineur".

// Créez un tableau couleurs_arr contenant les couleurs "rouge", "vert" et "bleu", puis affichez chaque couleur dans la console à l'aide d'une boucle for.


// Ajoutez la couleur "jaune" à la fin du tableau couleurs_arr, puis affichez le tableau mis à jour dans la console.


// Écrivez une fonction multiplier_func qui prend deux nombres en paramètres et retourne leur produit. Affichez le résultat dans la console en appelant la fonction avec deux valeurs de votre choix.


// Utilisez setInterval pour afficher "Ceci s'affiche toutes les 3 secondes" dans la console toutes les 3 secondes.


// Créez un tableau nombres_arr contenant les nombres de 1 à 10, puis utilisez la méthode filter pour créer un nouveau tableau contenant uniquement les nombres pairs. Affichez ce nouveau tableau dans la console.


// Utilisez la méthode map pour créer un nouveau tableau contenant les carrés des nombres du tableau nombres_arr. Affichez ce nouveau tableau dans la console.


// Utilisez la méthode reduce pour calculer la somme des nombres du tableau nombres_arr, puis affichez le résultat dans la console.


// Déclarez un objet livre_obj avec les propriétés titre, auteur et anneePublication, puis affichez le titre et l'auteur dans la console.
// const h1_elem = document.querySelector("h1");    // HTMLElement
// const photoProfil_elem = document.querySelector("#photo_profil"); // HTMLElement
// const produits_arr = document.querySelectorAll(".produit"); // Array of HTMLElement
// h1_elem.style.display = "lightblue";

// Array of HTMLElement


// console.log(produits_arr[0]); // La div des Nike
// console.log(produits_arr[1]); // La div des Adidas
// console.log(produits_arr[2]); // La div des Puma
// // // console.log(produits_arr.length);
// const color =  document.getElementsByClassName(".myH2").style.background = "#ff0000";

// const produits_arr = document.querySelectorAll("#produit"); 
// produits_arr.forEach(produit_elem=>{
//     // Les objet Element possède également la fonction querySelector.
//     console.log(produit_elem.querySelector("p").innerText);
//     produits_arr.forEach(produit_elem=>{
        
//        produit_elem.style.background = "lightblue";

//  }) };


//  produits_arr.forEach(produit_elem=>{


//     console.log(produit_elem.querySelector("p").innerText);

//     // Les objet Element possède également la fonction querySelector.

//   produit_elem.style.background = "lightblue";

// });

// const notes = [10, 12, 18, 19, 15, 8];

// notes.forEach((note)=>{
//     console.log(note);
// });

// produits_arr.forEach(produit_elem=>{
//     // Les objet Element possède également la fonction querySelector.
//     console.log(produit_elem.querySelector("p").innerText);
// });

// const btnHello_elem = document.querySelector(".btn_hello");
// btnHello_elem.addEventListener("click",sayHello_func);
// function sayHello_func(){
//     alert("Hello everyone !");
// }


      // let div = document.getElementById('myDiv');

      // let txt = '';

 

      // if (div.textContent) { // « textContent » existe ? Alors on s'en sert !

      //     txt = div.textContent;

      // } else if(div.innerText) { // « innerText » existe ? Alors on doit être sous IE.

      //     txt = div.innerText + ' [via Internet Explorer]';

      // } else { // Si aucun des deux n'existe, cela est sûrement dû au fait qu'il n'y a pas de texte

      //     txt = ''; // On met une chaîne de caractères vide

      // }

 

      // alert(txt);


// Exercises :

// Créez une barre de recherche qui affiche chaque caractère tapé dans la console à chaque fois que l'utilisateur tape une touche.
// InnerText lié au Text

// InnerHtml lié au balise html
// Quand  je tape un mot dans la barre de recherche ça m'affiche un résultat, ça affiche du texte donc c'est du contenu

function myFunction() {
    let  input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    
    for (i = 0; i < li.length; i++) {

        a = li[i].getElementsByTagName("a")[0];

        
        txtValue = a.textContent || a.innerText;

        
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}



// Créez un formulaire de création de media (titre, description) qui affiche les données du formulaire dans la console lorsque l'utilisateur soumet le formulaire.



