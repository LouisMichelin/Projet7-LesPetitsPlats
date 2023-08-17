// 
// LISTES DES BOUTONS FILTRES
// 
let allIngredients = [];
let allAppareils = [];
let allUstensils = [];

function recipesFactory() {
  // TOTAL DES RECETTES
  let totalRecipes = document.getElementById('nb-recettes');
  totalRecipes.innerHTML = `${recipes.length} recettes`;

  // +---------------------------------+
  // | CREATION DES CARTES DE RECETTES |
  // +---------------------------------+
  function getRecipesCardDOM(i) {
    let wrapper = document.getElementById('wrapper');
    // 1 CARTE DE RECETTE
    let recipeCard = document.createElement('div');
    recipeCard.setAttribute("class", "card");
    // PHOTO ET DUREE
    let recipeEntete = document.createElement('div');
    recipeEntete.setAttribute("class", "recipe-entete");
    let recipeDuree = document.createElement('div');
    recipeDuree.setAttribute("class", "recipe-duree");
    recipeDuree.innerHTML = `${recipes[i].time}min`;
    let recipePhoto = document.createElement('img');
    recipePhoto.setAttribute("class", "recipe-photo");
    recipePhoto.setAttribute("alt", "Photo de la recette");
    recipePhoto.setAttribute("src", `./assets/images/photos/${recipes[i].image}`);
    // TITRE ET INGREDIENTS
    let recipeComplete = document.createElement('div');
    recipeComplete.setAttribute("class", "recipe-complete");
    let titreRecette = document.createElement('h3');
    titreRecette.innerHTML = recipes[i].name;
    let recipeRecette = document.createElement('div');
    recipeRecette.setAttribute("class", "recipe-recette");
    let partieRecette = document.createElement('h4');
    partieRecette.innerHTML = "RECETTE";
    let descriptionRecette = document.createElement('p');
    descriptionRecette.setAttribute("class", "description-recette");
    descriptionRecette.innerHTML = recipes[i].description;
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
    // ASSEMBLAGE DES BALISES
    // 
    wrapper.appendChild(recipeCard);
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
    // 
    // AFFICHAGE DES DONNEES DE CHAQUE INGREDIENT DE RECIPES.INGREDIENTS
    //
    let ingredientConsole = recipes[i].ingredients;
    for(let y=0; y<ingredientConsole.length; y++) {
      if(ingredientConsole[y].quantity && ingredientConsole[y].unit) {
        ingredientRecette.appendChild(ingredientNom);
        ingredientNom.innerHTML = ingredientConsole[y].ingredient;
        ingredientRecette.appendChild(ingredientQuantite);
        ingredientQuantite.innerHTML = `${ingredientConsole[y].quantity}${ingredientConsole[y].unit}`;
      } else if(ingredientConsole[y].quantity) {
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
  }

  // +---------------------------+
  // | MENUS DES BOUTONS FILTRES |
  // +---------------------------+
  function getMenusDOM(i) {
    let ingredientConsole = recipes[i].ingredients;
    let appareilsConsole = recipes[i].appliance;
    let ustensilsConsole = recipes[i].ustensils;
    // 
    // REGROUPE LES INGREDIENTS/APPAREILS/USTENSILES
    //
    let z = 0;
    let regroupIngredients = ingredientConsole[z].ingredient
    let regroupAppareils = appareilsConsole
    let regroupUstensils = ustensilsConsole[z]

    for(z=0; z<ingredientConsole.length; z++) {
      allIngredients.push(regroupIngredients);
      allAppareils.push(regroupAppareils);
      allUstensils.push(regroupUstensils);
    }
    // ELIMINE LES DOUBLONS DES LISTES
    allIngredients = [...new Set(allIngredients)];
    allAppareils = [...new Set(allAppareils)];
    allUstensils = [...new Set(allUstensils)];

    // 
    // CREATION + ASSEMBLAGE DES BALISES "ITEM FILTRE"
    // 
    let itemFiltre1 = document.createElement('div');
    itemFiltre1.setAttribute("class", "item-filtre");
    let itemFiltre2 = document.createElement('div');
    itemFiltre2.setAttribute("class", "item-filtre");
    let itemFiltre3 = document.createElement('div');
    itemFiltre3.setAttribute("class", "item-filtre");
    // INSERTION DES INGREDIENTS DANS LE BOUTON
    let allItemsIngredients = document.getElementById('all-items-ingredients');
    for(let e=0; e<allIngredients.length; e++) {
      allItemsIngredients.appendChild(itemFiltre1);
      itemFiltre1.innerHTML = allIngredients[e];
    }
    // INSERTION DES APPAREILS DANS LE BOUTON
    let allItemsAppareils = document.getElementById('all-items-appareils');
    for(let a=0; a<allAppareils.length; a++) {
      allItemsAppareils.appendChild(itemFiltre2);
      itemFiltre2.innerHTML = allAppareils[a];
    }
    // INSERTION DES USTENSILES DANS LE BOUTON
    let allItemsUstensils = document.getElementById('all-items-ustensils');
    for(let h=0; h<allUstensils.length; h++) {
      allItemsUstensils.appendChild(itemFiltre3);
      itemFiltre3.innerHTML = allUstensils[h];
    }
  }
  // +---------------------------+
  // | APPLICATION DES FONCTIONS |
  // +---------------------------+
  for(let i=0; i<recipes.length; i++) {
    getMenusDOM(i);
    getRecipesCardDOM(i);
  }
}
recipesFactory();


// +-----------------------------------+
// | EFFACER LE TEXTE DE LA BARRE MAIN |
// +-----------------------------------+
let buttonErase = document.getElementById('button-erase');
let mainInput = document.getElementById('main-input');
buttonErase.addEventListener("click", function() {
  mainInput.value = "";
  buttonErase.style.display = "none";
});
// +-----------------------------------------------------------+
// | AFFICHER LA CROIX DE SUPPRESSION SI SEARCHBAR >= 3lettres |
// +-----------------------------------------------------------+
mainInput.addEventListener("input", function() {
  if(mainInput.value == "") {
    buttonErase.style.display = "none";
  } else if(mainInput.value.length >= 3) {
    buttonErase.style.display = "block";
  }
});


// +---------------------------------+
// | FILTRES DES BOUTONS DE FILTRAGE |
// +---------------------------------+
let inputIngredient = document.getElementById('ingredients-input');
let inputAppareils = document.getElementById('appareils-input');
let inputUstensils = document.getElementById('ustensils-input');
// 
let allIngredientsReset = document.getElementById('all-items-ingredients');
let input1 = [];
let allAppareilsReset = document.getElementById('all-items-appareils');
let input2 = [];
let allUstensilsReset = document.getElementById('all-items-ustensils');
let input3 = [];
//
inputIngredient.addEventListener("input", x => {
  input1.pop(); /* REMOVE [x-1] */
  input1.push(x.target.value.toLowerCase().trim()); /* ADD SEARCH LETTER TO : input1 */
  const filteredIngredient = allIngredients.filter(y => {
    for (let l of input1) {
      console.log("Mot que l'on saisit dans Input1: ", l);
      let m = 0;
      const c = y.toLowerCase();
      console.log("Ingrédient comparé, en minuscule: ", c);
      const i = c.substring(m).indexOf(l)
      console.log("Index 'i' de la valeur saisie: ", i);
      if(i < m) return false;
      m = i;
    }
    return true;
  });
  
  // allIngredientsReset.innerHTML = filteredIngredient;
  // filteredIngredient.setAttribute("class", "item-filtre");
  // allIngredientsReset.replace(/\n/g, '<br>');
  // allIngredientsReset.style.display = "flex";
  // allIngredientsReset.style.flexDirection = "column";
  console.log(filteredIngredient);
  allIngredientsReset.innerHTML = filteredIngredient;
});