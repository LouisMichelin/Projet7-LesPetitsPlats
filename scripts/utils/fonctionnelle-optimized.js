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
}
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
}

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
}

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
}
// RECHERCHE DANS RECIPES AVEC NOM/DESCRIPTION/INGREDIENTS
function searchByNameDescriptionIngredients(searchString) {
  let allFiltersRegrouped = recipes.filter(card => (
    card.name.toLowerCase().includes(searchString) ||
    card.description.toLowerCase().includes(searchString) ||
    card.ingredients.some(element => element.ingredient.toLowerCase().includes(searchString))
  ));
  return allFiltersRegrouped;
}
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
}

// +-----------------------------------+
// | TOGGLER : "ENTRER" / BOUTON LOUPE |
// +-----------------------------------+
mainSearchBar.addEventListener("keydown", function(e) {
  if (e.code === "Enter") {
    e.preventDefault();
    mainSearchFunction();
    allTotalRecipes();
  }
});
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
// RESET FILTERS WHEN SEARCH BAR = EMPTY
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
// +-----------------------------------+
// | BUTTONS-MENUS : Listing des Items |
// +-----------------------------------+
// SECTION FILTERS : Filtres choisis
let sectionFilters = document.getElementById('filters-selected');
// MENU INGREDIENTS
const ingredientsSelected = document.getElementById('selected-ingredients');
// MENU APPAREILS
const appareilsSelected = document.getElementById('selected-appareils');
// MENU USTENSILS
const ustensilsSelected = document.getElementById('selected-ustensils');


console.log(allIngredients);
console.log(allAppareils);
console.log(allUstensils);


// FUNCTION INGREDIENTS SEARCH
function ingredientSearchFunction() {
  const ingredientSearchInput = document.getElementById('ingredients-input').value.toLowerCase().trim();

}
function searchByIngredients(searchString) {
  let filteredIngredients = x;
}


// FUNCTION APPAREILS SEARCH
function appareilSearchFunction() {
  const appareilsSearchInput = document.getElementById('appareils-input').value.toLowerCase().trim();

}
function searchByAppareils(searchString) {
  let filteredAppareils = x;
}


// FUNCTION USTENSILS SEARCH
function ustensilSearchFunction() {
  const ustensilsSearchInput = document.getElementById('ustensils-input').value.toLowerCase().trim();

}
function searchByUstensils(searchString) {
  let filteredUstensils = x;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// !!!!!!!!!!!!!!!!!!!!! MAYBE GOOD, IDK !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//
// // BARRE DE RECHERCHE : Press Enter
// inputIngredients.addEventListener("keydown", function(e) {
//   if (e.code === "Enter") {
//     e.preventDefault();
//     menuIngredients.style.overflow = "hidden";
//     let itemFiltre = document.querySelectorAll('.item-filtre');
//     let itemFiltreArray = [...new Set(itemFiltre)];
//     itemFiltreArray.forEach(recipe => {
//       let recette = recipe.innerHTML.toLowerCase();
//       if (!recette.includes(inputIngredients.value.toLowerCase().trim())) {
//         console.log("NOPE.....", recipe);
//         recipe.style.display = "none";
//       } else {
//         console.log("YES!", recipe);
//         recipe.style.display = "block";
//       }
//     });
//   }
// });
// // BARRE DE RECHERCHE : Loupe Button
// document.getElementById('search-filter-button1').addEventListener("click", function(e) {
//   if (inputIngredients.value != "") {
//     e.preventDefault();
//     menuIngredients.style.overflow = "hidden";
//     let itemFiltre = document.querySelectorAll('.item-filtre');
//     let itemFiltreArray = [...new Set(itemFiltre)];
//     itemFiltreArray.forEach(recipe => {
//       let recette = recipe.innerHTML.toLowerCase();
//       if (!recette.includes(inputIngredients.value.toLowerCase().trim())) {
//         console.log("NOPE.....", recipe);
//         recipe.style.display = "none";
//       } else {
//         console.log("YES!", recipe);
//         recipe.style.display = "block";
//       }
//     });
//   }
// });
// // RESET IF SEARCH BAR = EMPTY
// inputIngredients.addEventListener("input", function() {
//   let itemFiltre = document.querySelectorAll('.item-filtre');
//   let itemFiltreArray = [...new Set(itemFiltre)];
//   if (!inputIngredients.value.length) {
//     itemFiltreArray.forEach(recipe => {
//       recipe.style.display = "block";
//       menuIngredients.style.overflowY = "scroll";
//     })
//   }
// });