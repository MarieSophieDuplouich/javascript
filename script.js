// console.log("Hello Je suis un script !");


// navigator.geolocation.watchPosition(onPositionReceived);

// function onPositionReceived(position) {
//     console.log("Latitude: " + position.coords.latitude);
//     console.log("Longitude: " + position.coords.longitude);
// }

    /**
     * L'objectif est rechercher et afficher un pokémon en fonction de son nom
     */

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

let tarifsenior_str >= 65;
let tarifmoinsvingtsixans_str  <= 26;
let tarifmineur_str  <=18;
// let tarifnormal_str = 30 ;
let nom_str = "Duplouich";

let prenom = "Marie-Sophie";
let age = 25;

if(age > 18){
    console.log("Bonjour " +prenom+" "+nom_str+ " Vous êtes majeur : "+age+" ans");
} else {
    console.log("Vous êtes mineur");
}


if(tarifsenior_str  >= 65){

  console.log("tu as droit au tarif senior car ton âge est "+tarifsenior_str+"");
} else {
    console.log("tu n'as pas droit au tarif senior");
}

if(tarifmoinsvingtsixans_str <= 26){

  console.log("tu as droit au tarif moins de 26 ans car ton âge est "+tarifmoinsvingtsixans_str+"");
} else {
    console.log("tu n'as pas droit au tarif  moins de 26 ans ");
}

if(tarifmineur_str  <= 18){

  console.log("tu as droit au tarif moins de 18 ans car ton âge est "+tarifmineur_str+"");
} else {
    console.log("tu n'as pas droit au tarif  moins de 18 ans ");
}

function testNum(a) {
  let result;
  if (a > 0) {
    result = "positive";
  } else {
    result = "NOT positive";
  }
  return result;
}

console.log(testNum(-5));
// Expected output: "NOT positive"
