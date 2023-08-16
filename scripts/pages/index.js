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
inputIngredient.addEventListener("input", function(e) {
  // ON AJOUTE LES LETTRES TAPEES DANS "input1" / OU RESET SI VALEUR = null
  // if(e.data === null) {
  //   input1 = [];
  // } else {
  //   input1.push(e.data);
  //   // console.log(input1);
  // }
  // -----------------------------------------------------------------------------
  allIngredientsReset.innerHTML = "";

  // ON ENLEVE LES MAJUSCULES (.toLowerCase) + LES ESPACES (.trim)
  const input = e.target.value.toLowerCase().trim();

  // FILTRAGE DES INGREDIENTS
  const filteredIngredients = allIngredients.filter(x => {
    // INGREDIENT "c" en minuscule
    const c = x.toLowerCase();
    let m = 0;
    for(let l of input) {
      console.log("L=",l)
      const i = c.substring(m).indexOf(l);
      console.log("i=",i);
      if(i < m) return false;
      m = i;
      console.log("M=", m);
    }
    
    return true;
  });
  // REMPLACE LES INGREDIENTS DANS LE BOUTON DE TRI
  input1 = filteredIngredients;
  allIngredientsReset.innerHTML = input1;
  console.log(filteredIngredients);
  // 
  // -----------------------------------------------------------------------------
  // ON SPLIT LA VALEUR "STRING" de "input2" ET ON COMPARE AVEC LES LETTRES TAPEES
  // for(let i=0; i<input1.length; i++) {
  //   let input2Split = input2.split('');
  //   if(input1[i] === input2Split[i]) {
  //     console.log("Oui, c'est la même lettre:", input1[i]);
  //   } else {
  //     console.log("Non, pas la même lettre.")
  //   }
  // }
  // 
  // for(let i=0; i<input1.length; i++) {
  //   if(input1[i] === allIngredients[i].split('')) {
  //     console.log("Oui, c'est la même lettre:", input1[i]);
  //   } else {
  //     console.log("Non, pas la même lettre.")
  //   }
  // 
  // }
  // 
  // console.log(allIngredients[0]);
  // console.log(allAppareils[0]);
  // console.log(allUstensils[0]);
  // -----------------------------------------------------------------------------
});
inputAppareils.addEventListener("input", function(e) {
  allAppareilsReset.innerHTML = "";
  // ON ENLEVE LES MAJUSCULES (.toLowerCase) + LES ESPACES (.trim)
  const input = e.target.value.toLowerCase().trim();
  // FILTRAGE DES INGREDIENTS
  const filteredAppareils = allAppareils.filter(x => {
    // INGREDIENT "c" en minuscule
    const c = x.toLowerCase();
    let m = 0;
    for(let l of input) {
      const i = c.substring(m).indexOf(l);
      if(i < m) return false;
      m = i;
    }
    return true;
  });
  // REMPLACE LES INGREDIENTS DANS LE BOUTON DE TRI
  input2 = filteredAppareils;
  allAppareilsReset.innerHTML = input2;
  console.log(filteredAppareils);
});
inputUstensils.addEventListener("input", function(e) {
  allUstensilsReset.innerHTML = "";
  // ON ENLEVE LES MAJUSCULES (.toLowerCase) + LES ESPACES (.trim)
  const input = e.target.value.toLowerCase().trim();
  // FILTRAGE DES INGREDIENTS
  const filteredUstensils = allUstensils.filter(x => {
    // INGREDIENT "c" en minuscule
    const c = x.toLowerCase();
    let m = 0;
    for(let l of input) {
      const i = c.substring(m).indexOf(l);
      if(i < m) return false;
      m = i;
    }
    return true;
  });
  // REMPLACE LES INGREDIENTS DANS LE BOUTON DE TRI
  input3 = filteredUstensils;
  allUstensilsReset.innerHTML = input3;
  console.log(filteredUstensils);
});