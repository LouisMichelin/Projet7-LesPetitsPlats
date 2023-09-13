// +---------------+
// | DOM VARIABLES |
// ----------------+
// MAIN SEARCH BAR
const mainSearchBar = document.getElementById('main-input');
const loupe = document.getElementById('button-loupe');
// WRAPPER + CARD DOM
let wrapper = document.getElementById('wrapper').children;
wrapper = Array.from(wrapper);
let cards = document.querySelectorAll('.card');



// +---------------------------------------------------+
// | SVG CREATORS : "DELETE CROSS FROM FILTERS BUTTON" |
// +---------------------------------------------------+
// CIRCLED CROSS
function renderSVGIcon(Node) {
  let iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  iconSvg.setAttribute('width', '17');
  iconSvg.setAttribute('height', '17');
  iconSvg.setAttribute('viewBox', '0 0 17 17');
  iconSvg.setAttribute('fill', 'none');
  let iconCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  iconCircle.setAttribute('cx', '8.5');
  iconCircle.setAttribute('cy', '8.5');
  iconCircle.setAttribute('r', '8.5');
  iconCircle.setAttribute('fill', 'black');
  let iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  iconPath.setAttribute('d', 'M11 11L8.5 8.5M8.5 8.5L6 6M8.5 8.5L11 6M8.5 8.5L6 11');
  iconPath.setAttribute('stroke', '#FFD15B');
  iconPath.setAttribute('stroke-linecap', 'round');
  iconPath.setAttribute('stroke-linejoin', 'round');
  // APPENDCHILD'S
  iconSvg.appendChild(iconCircle);
  iconSvg.appendChild(iconPath);
  
  return Node.appendChild(iconSvg);
};
// CROSS
function renderSVGCross(Node) {
  let iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  iconSvg.setAttribute('width', '17');
  iconSvg.setAttribute('height', '17');
  iconSvg.setAttribute('viewBox', '0 0 17 17');
  iconSvg.setAttribute('fill', '#FFD15B');
  let iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  iconPath.setAttribute('d', 'M15 15L8.5 8.5M8.5 8.5L2 2M8.5 8.5L15 2M8.5 8.5L2 15');
  iconPath.setAttribute('stroke', '#1B1B1B');
  iconPath.setAttribute('stroke-width', '2.16667');
  iconPath.setAttribute('stroke-linecap', 'round');
  iconPath.setAttribute('stroke-linejoin', 'round');
  // APPENDCHILD'S
  iconSvg.appendChild(iconPath);
  
  return Node.appendChild(iconSvg);
};



// +----------------------+
// | NB TOTAL DE RECETTES |
// +----------------------+
let totalCards;
function allTotalRecipes() {
  totalCards = 0;
  wrapper.forEach(card => {
    if (card.style.display == "block") {
      totalCards++;
    }
  });
  console.log("Total Recipes = ", totalCards);
  document.getElementById('nb-recettes').innerHTML = `${totalCards} recettes`;
};



// +--------------------------+
// | FONCTION MAIN SEARCH BAR |
// +--------------------------+
function mainSearchFunction() {
  // MAIN INPUT
  const mainSearchInput = document.getElementById("main-input").value.toLowerCase().trim();
  // APPLIQUE LA FONCTION AVEC MAIN INPUT
  let allFiltersRegrouped =  searchByNameDescriptionIngredients(mainSearchInput);
  console.log(allFiltersRegrouped);
  // DISPLAY CARDS : BLOCK || NONE
  displayFiltredRecipes(allFiltersRegrouped);
};
// RECHERCHE DANS RECIPES AVEC NOM/DESCRIPTION/INGREDIENTS
function searchByNameDescriptionIngredients(searchString){
  let allFiltersRegrouped = recipes.filter(card => (
    card.name.toLowerCase().includes(searchString) ||
    card.description.toLowerCase().includes(searchString) ||
    card.ingredients.some(element => element.ingredient.toLowerCase().includes(searchString))
  ));
  return allFiltersRegrouped;
};
// DISPLAY : BLOCK || NONE
function displayFiltredRecipes(filtredTable) {
  cards.forEach(card => {
    if (filtredTable.find(element => (element.id == card.id))) {
      card.style.display = "block";
    }
    else {
      card.style.display = "none";
    }
  });
};



// +--------------------+
// | TOGGLER : "ENTRER" |
// +--------------------+
mainSearchBar.addEventListener("keydown", function(e) {
  if (e.code === "Enter") {
    e.preventDefault();
    mainSearchFunction();
    allTotalRecipes();
  }
});
// +-------------------+
// | TOGGLER : "LOUPE" |
// +-------------------+
loupe.addEventListener("click", function(event) {
  event.preventDefault();
  mainSearchFunction();
  allTotalRecipes();
});



// +----------------------------------------------+
// | MAIN SEARCH BAR : Erase Button & Empty Input |
// +----------------------------------------------+
const delMainSearch = document.getElementById('button-erase');
delMainSearch.addEventListener("click", function() {
  cards.forEach(e => {
    e.style.display = "block";
  });
  allTotalRecipes();
});
mainSearchBar.addEventListener("input", (e) => {
  if (e.currentTarget.value == "" && totalCards < 50) {
    cards.forEach(e => {
      e.style.display = "block";
    });
    allTotalRecipes();
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////




// +--------------------------------------------+
// | BUTTONS-MENUS : Listing des Items + Init() |
// +--------------------------------------------+
// SECTION FILTERS
let sectionFilters = document.getElementById('filters-selected');
// MENU INGREDIENTS
let menuIngredients = document.getElementById('all-items-ingredients');
let inputIngredients = document.getElementById('ingredients-input');
let selectedIngredients = document.getElementById('selected-ingredients');
// MENU APPAREILS
let menuAppareils = document.getElementById('all-items-appareils');
let inputAppareils = document.getElementById('appareils-input');
let selectedAppareils = document.getElementById('selected-appareils');
// MENU USTENSILS
let menuUstensils = document.getElementById('all-items-ustensils');
let inputUstensils = document.getElementById('ustensils-input');
let selectedUstensils = document.getElementById('selected-ustensils');


// +-------------+
// | INGREDIENTS |
// +-------------+
const ingredientArray = [];
allIngredients.forEach(ingredient => {
  // SETUP
  let div = document.createElement('div');
  div.setAttribute("class", "item-filtre");
  div.setAttribute("display", "block");
  menuIngredients.appendChild(div);
  div.innerHTML = ingredient;
  // MENU : ONCLICK EVENT
  div.addEventListener("click", function() {
    if (!ingredientArray.includes(ingredient)) {
      ingredientArray.push(ingredient);
      div.style.display = "none";
      // +----------------+
      // | MENU DEROULANT |
      // +----------------+
      let divMenuItem = document.createElement('div');
      divMenuItem.setAttribute('class', 'item-selected-style');
      let divMenuTitle = document.createElement('div');
      divMenuTitle.setAttribute('class', 'item-selected');
      divMenuTitle.innerHTML = ingredient;
      // DELETE FILTER : MENU
      let divButton = document.createElement('button');
      divButton.setAttribute('class', 'delete-filter');
      divButton.addEventListener("click", function() {
        div.style.display = "block";
        divMenuItem.remove();
        filter.remove();
        console.log(ingredientArray.indexOf(ingredient));
        ingredientArray.splice(ingredientArray.indexOf(ingredient), 1);
        card.forEach(e => {
          if (e.style.display == "none") {
            e.style.display = "block";
          }
        });
        // inputIngredients.value = "";
        allTotalRecipes();
        console.log("INGREDIENT ARRAY: ", ingredientArray);
        // RESET LES FILTRES RECHERCHES SI (SECTION FILTRE = VIDE)
        let itemFiltre = document.querySelectorAll('.item-filtre');
        let itemFiltreArray = [...new Set(itemFiltre)];
        if (sectionFilters.childNodes.length == 0) {
          itemFiltreArray.forEach(recipe => {
            recipe.style.display = "block";
            menuIngredients.style.overflowY = "scroll";
          });
        }
      });
      // APPENDCHILDS
      selectedIngredients.appendChild(divMenuItem);
      divMenuItem.appendChild(divMenuTitle);
      divMenuItem.appendChild(divButton);
      renderSVGIcon(divButton);
      // +-------------------+
      // | SECTION : FILTERS |
      // +-------------------+
      let filter = document.createElement('div');
      filter.setAttribute('class', 'filter');
      // DELETE FILTER : SECTION
      let removeFilter = document.createElement('button');
      removeFilter.addEventListener("click", function() {
        div.style.display = "block";
        divMenuItem.remove();
        filter.remove();
        console.log(ingredientArray.indexOf(ingredient));
        ingredientArray.splice(ingredientArray.indexOf(ingredient), 1);
        card.forEach(e => {
          if (e.style.display == "none") {
            e.style.display = "block";
          }
        });
        // inputIngredients.value = "";
        allTotalRecipes();
        console.log("INGREDIENT ARRAY: ", ingredientArray);
        // RESET LES FILTRES RECHERCHES SI (SECTION FILTRE = VIDE)
        let itemFiltre = document.querySelectorAll('.item-filtre');
        let itemFiltreArray = [...new Set(itemFiltre)];
        if (sectionFilters.childNodes.length == 0) {
          itemFiltreArray.forEach(recipe => {
            recipe.style.display = "block";
            menuIngredients.style.overflowY = "scroll";
          });
        }
      });
      // APPENDCHILDS
      sectionFilters.appendChild(filter);
      filter.innerHTML = ingredient;
      filter.appendChild(removeFilter);
      renderSVGCross(removeFilter);
      console.log("AFTER: ", ingredientArray);
      //
      //
      // TEST DEVELOPMENT ICI------------
      //
      //
      setupCardsFromIngredients();


    }
  });
});
// BARRE DE RECHERCHE : Press Enter
inputIngredients.addEventListener("keydown", function(e) {
  if (e.code === "Enter") {
    e.preventDefault();
    menuIngredients.style.overflow = "hidden";
    let itemFiltre = document.querySelectorAll('.item-filtre');
    let itemFiltreArray = [...new Set(itemFiltre)];
    itemFiltreArray.forEach(recipe => {
      let recette = recipe.innerHTML.toLowerCase();
      if (!recette.includes(inputIngredients.value.toLowerCase().trim())) {
        console.log("NOPE.....", recipe);
        recipe.style.display = "none";
      } else {
        console.log("YES!", recipe);
        recipe.style.display = "block";
      }
    });
  }
});
// BARRE DE RECHERCHE : Loupe Button
document.getElementById('search-filter-button1').addEventListener("click", function(e) {
  if (inputIngredients.value != "") {
    e.preventDefault();
    menuIngredients.style.overflow = "hidden";
    let itemFiltre = document.querySelectorAll('.item-filtre');
    let itemFiltreArray = [...new Set(itemFiltre)];
    itemFiltreArray.forEach(recipe => {
      let recette = recipe.innerHTML.toLowerCase();
      if (!recette.includes(inputIngredients.value.toLowerCase().trim())) {
        console.log("NOPE.....", recipe);
        recipe.style.display = "none";
      } else {
        console.log("YES!", recipe);
        recipe.style.display = "block";
      }
    });
  }
});
// RESET IF SEARCH BAR = EMPTY
inputIngredients.addEventListener("input", function() {
  let itemFiltre = document.querySelectorAll('.item-filtre');
  let itemFiltreArray = [...new Set(itemFiltre)];
  if (!inputIngredients.value.length) {
    itemFiltreArray.forEach(recipe => {
      recipe.style.display = "block";
      menuIngredients.style.overflowY = "scroll";
    })
  }
});




//
//
// TEST DEVELOPMENT ICI------------
//
//
function setupCardsFromIngredients() {
  console.log("FUNCTION", ingredientArray);
  ingredientArray.forEach(selection => {
    if (allIngredients.includes(selection.toLowerCase())) {
      console.log(allIngredients);
    }
  });
};




















































// // +-----------+
// // | APPAREILS |
// // +-----------+
// const appareilsArray = [];








// // +-----------+
// // | USTENSILS |
// // +-----------+
// const ustensilsArray = [];