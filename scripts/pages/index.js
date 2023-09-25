// +---------------------------------+
// | MAIN SEARCH BAR : Erase Toggler |
// +---------------------------------+
let buttonErase = document.getElementById('button-erase');
let mainInput = document.getElementById('main-input');
buttonErase.addEventListener("click", function () {
  mainInput.value = "";
  buttonErase.style.display = "none";
});

// +------------------------------------------------------+
// | MAIN SEARCH BAR : Erase Button IF +3 Lettres Saisies |
// +------------------------------------------------------+
mainInput.addEventListener("input", function () {
  if (mainInput.value == "") {
    buttonErase.style.display = "none";
  } else if (mainInput.value.length >= 3) {
    buttonErase.style.display = "block";
  }
});

// +-----------------------------+
// | ARRAYS BOUTONS FILTRES INIT |
// +-----------------------------+
let allIngredients = [];
let allAppareils = [];
let allUstensils = [];

// +----------------------+
// | ARRAYS MENUS FILTRES |
// +----------------------+
let listTagIng = [];
let listTagUst = [];
let listTagApp = [];

// +-------------+
// | MAIN INIT() |
// +-------------+
function init() {
  updateGlobalView(recipes);
}

// +--------------------+
// | UPDATE GLOBAL VIEW |
// +--------------------+
function updateGlobalView(ListRecipe) {
  // INITIALISATION DES ARRAYS
  allIngredients = [];
  allAppareils = [];
  allUstensils = [];
  // NB TOTAL RECETTES
  let totalRecipes = document.getElementById('nb-recettes');
  totalRecipes.innerHTML = `${ListRecipe.length} recettes`;
  // SETUP WRAPPER
  let wrapper = document.getElementById('wrapper');
  wrapper.innerHTML = "";
  // CARTES & ALL BUTTON-ELEMENTS
  ListRecipe.forEach(recipe => {
    // CREATION CARTES + AFFICHAGE SUR LE DOM
    const card = getRecipesCardDOM(recipe);
    wrapper.appendChild(card);
    // RECUPERATION ELEMENTS VERS ARRAYS : Ingredients, Appareils & Ustensils
    getAllItemFilters(recipe);
  });
  // ELIMINATION DES DOUBLONS
  allIngredients = [...new Set(allIngredients)];
  allAppareils = [...new Set(allAppareils)];
  allUstensils = [...new Set(allUstensils)];
  // REMPLIR LISTE DES TAGS POUR CHAQUE MENU DEROULANT :
  // 1- SETUP BOUTONS-MENUS : INGREDIENTS
  fillTags(document.getElementById('all-items-ingredients'), allIngredients, "item-filtre-ingredients");
  // 2- SETUP BOUTONS-MENUS : APPAREILS
  fillTags(document.getElementById('all-items-appareils'), allAppareils, "item-filtre-appareils");
  // 3- SETUP BOUTONS-MENUS : USTENSILS
  fillTags(document.getElementById('all-items-ustensils'), allUstensils, "item-filtre-ustensils");
}

// +----------------------------------------------------+
// | FUNCTION REGROUPE INGREDIENTS/APPAREILS/USTENSILES |
// +----------------------------------------------------+
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

// +-------------------------------------+
// | FUNCTION REMPLIR LES TAGS DES MENUS |
// +-------------------------------------+
function fillTags(tagDomElement, listElement, classCss){
  tagDomElement.innerHTML = "";
  listElement.forEach(element => {
    let div = document.createElement('div');
    tagDomElement.appendChild(div);
    div.innerHTML = element;
    div.setAttribute("class", classCss);
    // EVENT LISTENER : ONCLICK
    div.addEventListener("click", function(e) {
      e.preventDefault();
      let tagDomSelection = "";
      div.style.display = "none"; // MARCHE PLUS
      // FILTRE CHAQUE ARRAY (Ingrédients/Appareils/Ustensils) VERS LEUR NEW ARRAY
      switch (listElement) {
        case allIngredients:
          listTagIng.push(element.toLowerCase());
          tagDomSelection = "selected-ingredients";
          break;
        case allAppareils:
          listTagApp.push(element.toLowerCase());
          tagDomSelection = "selected-appareils";
          break;
        case allUstensils:
          listTagUst.push(element.toLowerCase());
          tagDomSelection = "selected-ustensils";
          break;
        default:
        console.log("Unknown");
      }
      // SETUP : MENU FILTERS + SECTION DOM FILTERS (AVEC NEW VALUES)
      createMenuSelected(document.getElementById(tagDomSelection), element, div);
      // FUNCTION FILTREE AVEC LES ARRAYS QU'ON VIENT DE PASSER
      let filtredRecipes = advancedSearch(listTagIng, listTagUst, listTagApp);
      console.log(filtredRecipes);
      // FUNCTION UPDATEGLOBAL AVEC TOTAL DES 3 ARRAYS
      updateGlobalView(filtredRecipes);
    });
  });
}

// +------------------------------------+
// | CREATION DES CARTES-RECETTES (DOM) |
// +------------------------------------+
function getRecipesCardDOM(recipe) {
  // CARTE DE RECETTE
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
  // AFFICHAGE DES DONNEES DE CHAQUE INGREDIENT DE RECIPES.INGREDIENTS
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
  // ASSEMBLAGE DES BALISES
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