// +-----------------------------------+
// | EFFACER LE TEXTE DE LA BARRE MAIN |
// +-----------------------------------+
let buttonErase = document.getElementById('button-erase');
let mainInput = document.getElementById('main-input');
buttonErase.addEventListener("click", function () {
  mainInput.value = "";
  buttonErase.style.display = "none";
});

// +------------------------------------------------+
// | AFFICHER DELETE BUTTON SI >= 3 LETTRES SAISIES |
// +------------------------------------------------+
mainInput.addEventListener("input", function () {
  if (mainInput.value == "") {
    buttonErase.style.display = "none";
  } else if (mainInput.value.length >= 3) {
    buttonErase.style.display = "block";
  }
});
  // +----------------------------+
  // | ARRAYS DES BOUTONS FILTRES |
  // +----------------------------+
  let allIngredients = [];
  let allAppareils = [];
  let allUstensils = [];

// +---------------------+
// | PROGRAMME PRINCIPAL |
// +---------------------+
function init() {
  updateGlobalView(recipes);
}

function updateGlobalView(ListRecipe){
   // initialisation
  allIngredients = [];
  allAppareils = [];
  allUstensils = [];

  // TOTAL RECETTES
  let totalRecipes = document.getElementById('nb-recettes');
  totalRecipes.innerHTML = `${ListRecipe.length} recettes`;
  // SETUP WRAPPER

  let wrapper = document.getElementById('wrapper');
  wrapper.innerHTML = "";

  ListRecipe.forEach(recipe => {
    // CREATION DES CARTES ET DE LEUR AFFICHAGE SUR LE DOM
    const card = getRecipesCardDOM(recipe);
    wrapper.appendChild(card);
    // Recuperation de tous les elements de ingredients, ustinciles et appareils
    getAllItemFilters(recipe);
  });
  //Elimination des doublons
  allIngredients = [...new Set(allIngredients)];
  allAppareils = [...new Set(allAppareils)];
  allUstensils = [...new Set(allUstensils)];
  
  // remlir la liste des tag pour chaque element

  // SETUP BOUTONS-MENUS : INGREDIENTS
  fillTags(document.getElementById('all-items-ingredients'), allIngredients,  "item-filtre-ingredients");
  
  // SETUP BOUTONS-MENUS : APPAREILS
  fillTags(document.getElementById('all-items-appareils'), allAppareils, "item-filtre-appareils");
  
  // SETUP BOUTONS-MENUS : USTENSILS
  fillTags(document.getElementById('all-items-ustensils'), allUstensils, "item-filtre-ustensils");
 
}
//fonction pour remplir les tags
function fillTags(tagDomElement, listElement, classCss){
  tagDomElement.innerHTML="";
  listElement.forEach(element => {
    let div = document.createElement('div');
    tagDomElement.appendChild(div);
    div.innerHTML = element;
    div.setAttribute("class", classCss);
    div.addEventListener("click", function(e){
      e.preventDefault();
      console.log(element);
    });
  });
}
// +-----------------------------------------------+
// | REGROUPE LES INGREDIENTS/APPAREILS/USTENSILES |
// +-----------------------------------------------+
function getAllItemFilters(recipe) {
  // INGREDIENTS
 recipe.ingredients.forEach(element => {
    allIngredients.push(element.ingredient);
  });
  // APPAREILS
  allAppareils.push(recipe.appliance);
  // USTENSILS
  recipe.ustensils.forEach(ustensil => {
    allUstensils.push(ustensil);
  });
}

// +---------------------------------+
// | CREATION DES CARTES DE RECETTES |
// +---------------------------------+

function getRecipesCardDOM(recipe) {
  // 1 CARTE DE RECETTE
  let recipeCard = document.createElement('div');
  recipeCard.setAttribute("class", "card");
  recipeCard.style.display = 'block';
  recipeCard.setAttribute("id", `${recipe.id}`);

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
  ingredientConsole.forEach(recipe => {
    if (recipe.quantity && recipe.unit) {
      ingredientRecette.appendChild(ingredientNom);
      ingredientNom.innerHTML = recipe.ingredient;
      ingredientRecette.appendChild(ingredientQuantite);
      ingredientQuantite.innerHTML = `${recipe.quantity}${recipe.unit}`;
    } else if (recipe.quantity) {
      ingredientRecette.appendChild(ingredientNom);
      ingredientNom.innerHTML = recipe.ingredient;
      ingredientRecette.appendChild(ingredientQuantite);
      ingredientQuantite.innerHTML = `${recipe.quantity}`;
    } else {
      ingredientRecette.appendChild(ingredientNom);
      ingredientNom.innerHTML = recipe.ingredient;
      ingredientQuantite.innerHTML = "";
    }
    listeIngredients.appendChild(ingredientRecette.cloneNode(true));
  });
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