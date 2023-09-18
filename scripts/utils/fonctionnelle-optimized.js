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

// +--------------------------+
// | FONCTION MAIN SEARCH BAR |
// +--------------------------+
function mainSearchFunction() {
  // MAIN INPUT
  const mainSearchInput = document.getElementById("main-input").value.toLowerCase().trim();
  // APPLIQUE LA FONCTION AVEC MAIN INPUT
  let allFiltersRegrouped =  searchByNameDescriptionIngredients(mainSearchInput);
  // UPDATE GLOBAL VIEW AVEC LA NOUVELLE ARRAY FILTREE !
  updateGlobalView(allFiltersRegrouped);
}

// +---------------------------------------------------------+
// | RECHERCHE DANS RECIPES AVEC NOM/DESCRIPTION/INGREDIENTS |
// +---------------------------------------------------------+
function searchByNameDescriptionIngredients(searchString) {
  let allFiltersRegrouped = recipes.filter(card => (
    card.name.toLowerCase().includes(searchString) ||
    card.description.toLowerCase().includes(searchString) ||
    card.ingredients.some(element => element.ingredient.toLowerCase().includes(searchString))
  ));
  return allFiltersRegrouped;
}

// +----------------------------------------------------+
// | TOGGLERS MAIN SEARCH BAR : "ENTRER" / BOUTON LOUPE |
// +----------------------------------------------------+
mainSearchBar.addEventListener("keydown", function(e) {
  if (e.code === "Enter") {
    e.preventDefault();
    mainSearchFunction();
  }
});
loupe.addEventListener("click", function(event) {
  event.preventDefault();
  mainSearchFunction();
});

// +-----------------------------------------------------------+
// | INPUTS MENUS DEROULANTS : INGREDIENTS/APPAREILS/USTENSILS |
// +-----------------------------------------------------------+
const ingredientSearchBar = document.getElementById('ingredients-input');
const appareilsSearchBar = document.getElementById('appareils-input');
const ustensilsSearchBar = document.getElementById('ustensils-input');

// +---------------------------------------------------------+
// | RESEARCH TOGGLERS POUR CHAQUE MENU : Listener = "input" |
// +---------------------------------------------------------+
ingredientSearchBar.addEventListener("input", function(e) {
  e.preventDefault();
  const ingredientsListe = document.querySelectorAll('.item-filtre-ingredients');
  searchByItem(ingredientSearchBar.value, ingredientsListe) ;
});
appareilsSearchBar.addEventListener("input", function(e) {
    e.preventDefault();
    const appareilsListe = document.querySelectorAll('.item-filtre-appareils');
    searchByItem(appareilsSearchBar.value, appareilsListe) ;
});
ustensilsSearchBar.addEventListener("input", function(e) { 
    e.preventDefault();
    const ustensilsListe = document.querySelectorAll('.item-filtre-ustensils');
    searchByItem(ustensilsSearchBar.value, ustensilsListe) ;
});

// +------------------------------------------------------+
// | FUNCTION SEARCH BY ITEM : Recherche Pour Chaque Menu |
// +------------------------------------------------------+
function searchByItem(searchTag, allTags) {
  // searchTag = Chaîne de caractères saisie
  searchTag = searchTag.toLocaleLowerCase().trim();
  if (searchTag.length > 0) {
    // allTags = Tous les elements-tags de même classe (Ingrédients/Appareils/Ustensils)
    allTags.forEach(element => {
      if (element.innerHTML.toLocaleLowerCase().trim().includes(searchTag)) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// +----------------------------------------------------------------------------------------------+
// | OBJECTIF : FUNCTION TOGGLE CSS DE L'ELEMENT CLICKED &&& TOGGLE FILTERS DE L'ELEMENT CLICKED  |
// +----------------------------------------------------------------------------------------------+
function filterWithSelectedElement() {
  console.log("je fonctionne ahahaha")
}