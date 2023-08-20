// +-----------------------------------+
// | EFFACER LE TEXTE DE LA BARRE MAIN |
// +-----------------------------------+
let buttonErase = document.getElementById('button-erase');
let mainInput = document.getElementById('main-input');
buttonErase.addEventListener("click", function () {
  mainInput.value = "";
  buttonErase.style.display = "none";
});

// +-----------------------------------------------------------+
// | AFFICHER LA CROIX DE SUPPRESSION SI SEARCHBAR >= 3lettres |
// +-----------------------------------------------------------+
mainInput.addEventListener("input", function () {
  if (mainInput.value == "") {
    buttonErase.style.display = "none";
  } else if (mainInput.value.length >= 3) {
    buttonErase.style.display = "block";
  }
});

// +----------------------------+
// | LISTES DES BOUTONS FILTRES |
// +----------------------------+
let allIngredients = [];
let allAppareils = [];
let allUstensils = [];

function init() {
  // TOTAL DES RECETTES
  let totalRecipes = document.getElementById('nb-recettes');
  totalRecipes.innerHTML = `${recipes.length} recettes`;

  // +---------------------------+
  // | Programme principale  |
  // +---------------------------+
  let wrapper = document.getElementById('wrapper');
  wrapper.innerHTML = "";
  recipes.forEach(recipe => {
    // creation des cartes et leurs affichage sur le dom 
    const card = getRecipesCardDOM(recipe);
    wrapper.appendChild(card);

    getAllItemFilters(recipe);

  });
  //Eliminer les doublons
  convertToSet();
}

// creer les 3 tableaux allIngredients, allUnstuncils et allAppareils.
function getAllItemFilters(recipe) {
  // REGROUPE LES INGREDIENTS/APPAREILS/USTENSILES
  let ingredientConsole = recipe.ingredients;
  let ustensilsConsole = recipe.ustensils;

  allAppareils.push(recipe.appliance);

  // REGROUPE TOUS LES ITEMS DE CHAQUE CATEGORIE
  for (let z = 0; z < ustensilsConsole.length; z++) {
    allUstensils.push(recipe.ustensils[z]);
  }
  // REGROUPE TOUS LES ITEMS DE CHAQUE CATEGORIE
  for (let z = 0; z < ingredientConsole.length; z++) {
    allIngredients.push(recipe.ingredients[z].ingredient);
  }

}

function convertToSet() {
  // ELIMINE LES DOUBLONS DES LISTES
  allIngredients = [...new Set(allIngredients)];
  allAppareils = [...new Set(allAppareils)];
  allUstensils = [...new Set(allUstensils)];
}

// +---------------------------------+
// | CREATION DES CARTES DE RECETTES |
// +---------------------------------+
function getRecipesCardDOM(recipe) {
  // 1 CARTE DE RECETTE
  let recipeCard = document.createElement('div');
  recipeCard.setAttribute("class", "card");
  // PHOTO ET DUREE
  let recipeEntete = document.createElement('div');
  recipeEntete.setAttribute("class", "recipe-entete");
  let recipeDuree = document.createElement('div');
  recipeDuree.setAttribute("class", "recipe-duree");
  recipeDuree.innerHTML = `${recipe.time}min`;
  let recipePhoto = document.createElement('img');
  recipePhoto.setAttribute("class", "recipe-photo");
  recipePhoto.setAttribute("alt", "Photo de la recette");
  recipePhoto.setAttribute("src", `./assets/images/photos/${recipe.image}`);
  // TITRE ET INGREDIENTS
  let recipeComplete = document.createElement('div');
  recipeComplete.setAttribute("class", "recipe-complete");
  let titreRecette = document.createElement('h3');
  titreRecette.innerHTML = recipe.name;
  let recipeRecette = document.createElement('div');
  recipeRecette.setAttribute("class", "recipe-recette");
  let partieRecette = document.createElement('h4');
  partieRecette.innerHTML = "RECETTE";
  let descriptionRecette = document.createElement('p');
  descriptionRecette.setAttribute("class", "description-recette");
  descriptionRecette.innerHTML = recipe.description;
  let recipeIngredients = document.createElement('div');
  recipeIngredients.setAttribute("class", "recipe-ingredients");
  // LISTE DES INGREDIENTS DE LA RECETTE
  let partieIngredients = document.createElement('h4');
  partieIngredients.innerHTML = "INGREDIENTS";
  let listeIngredients = document.createElement('div');
  listeIngredients.setAttribute("class", "liste-ingredients");
  // CARTE D'UN INGREDIENT
  let ingredientRecette = document.createElement('div');
  ingredientRecette.setAttribute("class", "ingredient");
  let ingredientNom = document.createElement('h5');
  ingredientNom.setAttribute("class", "ingredient-nom");
  let ingredientQuantite = document.createElement('div');
  ingredientQuantite.setAttribute("class", "ingredient-quantite");

  // 
  // AFFICHAGE DES DONNEES DE CHAQUE INGREDIENT DE RECIPES.INGREDIENTS
  //
  let ingredientConsole = recipe.ingredients;
  for (let y = 0; y < ingredientConsole.length; y++) {
    if (ingredientConsole[y].quantity && ingredientConsole[y].unit) {
      ingredientRecette.appendChild(ingredientNom);
      ingredientNom.innerHTML = ingredientConsole[y].ingredient;
      ingredientRecette.appendChild(ingredientQuantite);
      ingredientQuantite.innerHTML = `${ingredientConsole[y].quantity}${ingredientConsole[y].unit}`;
    } else if (ingredientConsole[y].quantity) {
      ingredientRecette.appendChild(ingredientNom);
      ingredientNom.innerHTML = ingredientConsole[y].ingredient;
      ingredientRecette.appendChild(ingredientQuantite);
      ingredientQuantite.innerHTML = `${ingredientConsole[y].quantity}`;
    } else {
      ingredientRecette.appendChild(ingredientNom);
      ingredientNom.innerHTML = ingredientConsole[y].ingredient;
      ingredientQuantite.innerHTML = "";
    }
    listeIngredients.appendChild(ingredientRecette.cloneNode(true));
  }

  // 
  // ASSEMBLAGE DES BALISES
  // 
  recipeCard.appendChild(recipeEntete);
  recipeEntete.appendChild(recipeDuree);
  recipeEntete.appendChild(recipePhoto);
  recipeCard.appendChild(recipeComplete);
  recipeComplete.appendChild(titreRecette);
  recipeComplete.appendChild(recipeRecette);
  recipeRecette.appendChild(partieRecette);
  recipeRecette.appendChild(descriptionRecette);
  recipeComplete.appendChild(recipeIngredients);
  recipeIngredients.appendChild(partieIngredients);
  recipeIngredients.appendChild(listeIngredients);

  return recipeCard;
}

init();