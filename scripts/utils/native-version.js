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
// Liste des recipes deja filtrés
let allFiltersRegrouped = recipes;
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
  iconSvg.setAttribute('fill', 'none');
  let iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  iconPath.setAttribute('d', 'M15 15L8.5 8.5M8.5 8.5L2 2M8.5 8.5L15 2M8.5 8.5L2 15');
  iconPath.setAttribute('stroke', '#000000');
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
  allFiltersRegrouped = searchByNameDescriptionIngredients(mainSearchInput);
  // UPDATE GLOBAL VIEW AVEC LA NOUVELLE ARRAY FILTREE !
  updateGlobalView(allFiltersRegrouped);
}

// +---------------------------------------------------------+
// | RECHERCHE DANS RECIPES AVEC NOM/DESCRIPTION/INGREDIENTS |
// +---------------------------------------------------------+
function searchByNameDescriptionIngredients(searchString) {
  let result = nativeFilterNameDescIng(allFiltersRegrouped, searchString);
  return result;
}

// +----------------------------------------------------------------+
// | RECHERCHE DANS RECIPES AVEC INGREDIENTS, APPAREILS & USTENSILS |
// +----------------------------------------------------------------+
function advancedSearch(listRecipes, listTagIngredients, listTagUstensils, listTagAppliances) {
  // INITIALISE VARIABLE "result"
  result = listRecipes;
  // FILTRES APPLIQUES 1 PAR 1, DE "INGREDIENTS" A "USTENSILS"
  for (let i = 0; i < listTagIngredients.length; i++) {
    result = searchByIngredients(listTagIngredients[i], result);
  }
  for (let y = 0; y < listTagAppliances.length; y++) {
    result = searchByAppliances(listTagAppliances[y], result);
  }
  for (let z = 0; z < listTagUstensils.length; z++) {
    result = searchByUstensils(listTagUstensils[z], result);
  }
  return result;
}

// FONCTION SEARCH: INGREDIENTS
function searchByIngredients(searchString, listRecipes) {
  let allFiltersRegrouped = nativeFilterIng(listRecipes, searchString);
  return allFiltersRegrouped;
}
// FONCTION SEARCH: APPAREILS 
function searchByAppliances(searchString, listRecipes) {
  let allFiltersRegrouped = nativeFilterApp(listRecipes, searchString);
  return allFiltersRegrouped;
}
// FONCTION SEARCH: USTENSILS
function searchByUstensils(searchString, listRecipes) {
  let allFiltersRegrouped = nativeFilterUst(listRecipes, searchString);
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
  searchByItem(ingredientSearchBar.value, ingredientsListe);
});
appareilsSearchBar.addEventListener("input", function(e) {
    e.preventDefault();
    const appareilsListe = document.querySelectorAll('.item-filtre-appareils');
    searchByItem(appareilsSearchBar.value, appareilsListe);
});
ustensilsSearchBar.addEventListener("input", function(e) { 
    e.preventDefault();
    const ustensilsListe = document.querySelectorAll('.item-filtre-ustensils');
    searchByItem(ustensilsSearchBar.value, ustensilsListe);
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
  } else {
    // Reset allTags lorsque suppression "brute" de la searchbar (ctrl+A & Suppr)
    allTags.forEach(element => {
      element.style.display = "block";
    });
  }
}

// +--------------------------------------------------------------+
// | FUNCTION MENU & SECTION DOM : CREATE/REMOVE SELECTED FILTERS |
// +--------------------------------------------------------------+
function createMenuSelected(tagDomSelection, elementTag, domDiv) {
  ////////////////////////
  // PARTIE MENU FILTER //
  ////////////////////////
  // DOM MISE EN PAGE
  const itemSelectedStyle = document.createElement("div");
  itemSelectedStyle.setAttribute("class", "item-selected-style");
  // ITEM SELECTED
  const itemSelectedName = document.createElement("div");
  itemSelectedName.setAttribute("class", "item-selected");
  itemSelectedName.innerHTML = elementTag;
  // BOUTON DELETE
  const deleteFilter = document.createElement("div");
  deleteFilter.setAttribute("class", "delete-filter");
  renderSVGIcon(deleteFilter);
  // APPENDCHILD'S
  tagDomSelection.appendChild(itemSelectedStyle);
  itemSelectedStyle.appendChild(itemSelectedName);
  itemSelectedStyle.appendChild(deleteFilter);
  // REMOVE SELECTED ITEM
  deleteFilter.addEventListener("click", function() {
    removeSelectedItem(deleteSectionFilter);
    removeSelectedItem(deleteFilter);
    domDiv.removeAttribute("style");
    resetSelectedElement(elementTag);
  });
  ////////////////////////////
  // PARTIE SECTION FILTERS //
  ////////////////////////////
  const sectionFilters = document.getElementById("filters-selected");
  // DOM MISE EN PAGE
  const filter = document.createElement("div");
  filter.setAttribute("class", "filter");
  // ITEM SELECTED
  const filterSelectedName = document.createElement("div");
  filterSelectedName.setAttribute("class", "element-name");
  filterSelectedName.innerHTML = elementTag;
  // BOUTON DELETE
  const deleteSectionFilter = document.createElement("div");
  deleteSectionFilter.setAttribute("class", "delete-filter-section");
  renderSVGCross(deleteSectionFilter);
  // APPENDCHILD'S
  sectionFilters.appendChild(filter);
  filter.appendChild(filterSelectedName);
  filter.appendChild(deleteSectionFilter);
  // REMOVE SELECTED ITEM
  deleteSectionFilter.addEventListener("click", function() {
    removeSelectedItem(deleteSectionFilter);
    removeSelectedItem(deleteFilter);
    domDiv.removeAttribute("style");
    resetSelectedElement(elementTag);
  });
}
// FUNCTION REMOVE ITEM (POUR L.190-244)
function removeSelectedItem(deleteButton) {
  deleteButton.parentNode.remove();
}

// +------------------------------------+
// | REVERSE EFFECT OF SELECTED FILTERS |
// +------------------------------------+
function resetSelectedElement(tagValue) {
  if (listTagIng.includes(tagValue.toLowerCase())) {
    let indexRemove = listTagIng.indexOf(tagValue.toLowerCase());
    listTagIng.splice(indexRemove, 1);
    console.log(listTagIng);
  } else if (listTagApp.includes(tagValue.toLowerCase())) {
    let indexRemove = listTagApp.indexOf(tagValue.toLowerCase());
    listTagApp.splice(indexRemove, 1);
    console.log(listTagApp);
  } else if (listTagUst.includes(tagValue.toLowerCase())) {
    let indexRemove = listTagUst.indexOf(tagValue.toLowerCase());
    listTagUst.splice(indexRemove, 1);
    console.log(listTagUst);
  }
  let filtredFinalRecipes = advancedSearch(allFiltersRegrouped, listTagIng, listTagUst, listTagApp);
  updateGlobalView(filtredFinalRecipes);
}