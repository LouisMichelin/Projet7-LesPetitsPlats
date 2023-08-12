function recipesFactory() {
  // TOTAL DES RECETTES
  let totalRecipes = document.getElementById('nb-recettes');
  totalRecipes.innerHTML = `${recipes.length} recettes`;
  // CREATION DES CARTES DE RECETTES
  function getRecipesCardDOM(i) {
    let wrapper = document.getElementById('wrapper');
    // ------------------------------------------------------------
    // -------------------- 1 CARTE DE RECETTE --------------------
    // ------------------------------------------------------------
    let recipeCard = document.createElement('div');
    recipeCard.setAttribute("class", "card");
    // 
    // PHOTO ET DUREE
    // 
    let recipeEntete = document.createElement('div');
    recipeEntete.setAttribute("class", "recipe-entete");
    let recipeDuree = document.createElement('div');
    recipeDuree.setAttribute("class", "recipe-duree");
    recipeDuree.innerHTML = `${recipes[i].time}min`;
    let recipePhoto = document.createElement('img');
    recipePhoto.setAttribute("class", "recipe-photo");
    recipePhoto.setAttribute("alt", "Photo de la recette");
    recipePhoto.setAttribute("src", `./assets/images/photos/${recipes[i].image}`);
    // 
    // TITRE ET INGREDIENTS
    // 
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
    // 
    // LISTE DES INGREDIENTS DE LA RECETTE
    // 
    let partieIngredients = document.createElement('h4');
    partieIngredients.innerHTML = "INGREDIENTS";
    let listeIngredients = document.createElement('div');
    listeIngredients.setAttribute("class", "liste-ingredients");
    //
    // CARTE D'UN INGREDIENT
    // 
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
    //
    recipeComplete.appendChild(recipeRecette);
    recipeRecette.appendChild(partieRecette);
    recipeRecette.appendChild(descriptionRecette);
    //
    recipeComplete.appendChild(recipeIngredients);
    recipeIngredients.appendChild(partieIngredients);
    recipeIngredients.appendChild(listeIngredients);
    // 
    // -------------------------------------------------------------
    //
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
  // APPLICATION DES CARTES DE RECETTES POUR TOUTES LES RECETTES (50)
  for(let i=0; i<recipes.length; i++) {
    getRecipesCardDOM(i)
  }
}
recipesFactory();

let deleteFilter = document.getElementById()