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



// +--------------------------------------------------+
// | INGREDIENTS/APPAREILS/USTENSILS MENUS DEROULANTS |
// +--------------------------------------------------+
// ALL ITEMS (HTML)
const ingredientsListe = document.querySelectorAll('.item-filtre-ingredients');
const appareilsListe = document.querySelectorAll('.item-filtre-appareils');
const ustensilsListe = document.querySelectorAll('.item-filtre-ustensils');
// SEARCH BARS INPUTS
const ingredientSearchBar = document.getElementById('ingredients-input');
const appareilsSearchBar = document.getElementById('appareils-input');
const ustensilsSearchBar = document.getElementById('ustensils-input');

// +--------------------------------------------------+
// | RESEARCH TOGGLERS : "Enter Key" + "Loupe Button" |
// +--------------------------------------------------+
ingredientSearchBar.addEventListener("keydown", function(e) {
  if (e.code === "Enter") {
    e.preventDefault();
    searchByItem();
  }
});
document.getElementById("search-filter-button1").addEventListener("click", function() {
  searchByItem();
});
//
appareilsSearchBar.addEventListener("keydown", function(e) {
  if (e.code === "Enter") {
    e.preventDefault();
    searchByItem();
  }
});
document.getElementById("search-filter-button2").addEventListener("click", function() {
  searchByItem();
});
//
ustensilsSearchBar.addEventListener("keydown", function(e) {
  if (e.code === "Enter") {
    e.preventDefault();
    searchByItem();
  }
});
document.getElementById("search-filter-button3").addEventListener("click", function() {
  searchByItem();
});

// +----------------------------------+
// | RECHERCHE DANS MENUS' SEARCHBARS |
// +----------------------------------+
function searchByItem() {
  if (ingredientSearchBar.value.length > 0) {
    ingredientsListe.forEach(ingredient => {
      if (ingredient.innerHTML.toLocaleLowerCase().trim().includes(ingredientSearchBar.value.toLocaleLowerCase().trim())) {
        ingredient.style.display = "block";
      } else {
        ingredient.style.display = "none";
      }
    });
  }
  if (appareilsSearchBar.value.length > 0) {
    appareilsListe.forEach(appareil => {
      if (appareil.innerHTML.toLocaleLowerCase().trim().includes(appareilsSearchBar.value.toLocaleLowerCase().trim())) {
        appareil.style.display = "block";
      } else {
        appareil.style.display = "none";
      }
    });
  }
  if (ustensilsSearchBar.value.length > 0) {
    ustensilsListe.forEach(ustensil => {
      if (ustensil.innerHTML.toLocaleLowerCase().trim().includes(ustensilsSearchBar.value.toLocaleLowerCase().trim())) {
        ustensil.style.display = "block";
      } else {
        ustensil.style.display = "none";
      }
    });
  }
}

// +----------------------------+
// | RESET SEARCH BARS IF EMPTY |
// +----------------------------+
ingredientSearchBar.addEventListener("input", (e) => {
  if (e.currentTarget.value == "") {
    ingredientsListe.forEach(e => {
      e.style.display = "block";
    });
  }
});
appareilsSearchBar.addEventListener("input", (e) => {
  if (e.currentTarget.value == "") {
    appareilsListe.forEach(e => {
      e.style.display = "block";
    });
  }
});
ustensilsSearchBar.addEventListener("input", (e) => {
  if (e.currentTarget.value == "") {
    ustensilsListe.forEach(e => {
      e.style.display = "block";
    });
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// MENU INGREDIENTS : ITEMS CHOISIS
const ingredientsSelected = document.getElementById('selected-ingredients');
const appareilsSelected = document.getElementById('selected-appareils');
const ustensilsSelected = document.getElementById('selected-ustensils');
// SECTION FILTRES : ITEMS CHOISIS
const sectionFilters = document.getElementById('filters-selected');


ingredientsListe.forEach(ingredient => {
  ingredient.addEventListener("click", function() {
    console.log(ingredient.innerHTML);
    let div = document.createElement("div");



  });
});
//
appareilsListe.forEach(appareil => {
  appareil.addEventListener("click", function() {
    console.log(appareil.innerHTML);
    let div = document.createElement("div");



  });
});
//
ustensilsListe.forEach(ustensil => {
  ustensil.addEventListener("click", function() {
    console.log(ustensil.innerHTML);
    let div = document.createElement("div");



  });
});