// +---------------+
// | DOM VARIABLES |
// ----------------+
// MAIN SEARCH BAR
const mainSearchBar = document.getElementById('main-input');
const loupe = document.getElementById('button-loupe');
// WRAPPER + CARD DOM
let wrapper = document.getElementById('wrapper').children;
wrapper = Array.from(wrapper);
let card = document.querySelectorAll('.card');


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


// +----------------------------------+
// | FONCTION LOUPE : Main Search Bar |
// +----------------------------------+
function mainSearchFunction() {
  const mainSearchInput = document.getElementById("main-input").value.toLowerCase().trim();
  let allFiltersRegrouped = [];
  // FILTRE NOM
  let nameFilter = recipes.filter(card => card.name.toLowerCase().includes(mainSearchInput));
  nameFilter.forEach(x => {
    allFiltersRegrouped.push(x.id);
  });
  // FILTRE DESCRIPTION
  let descriptionFilter = recipes.filter(card => card.description.toLowerCase().includes(mainSearchInput));
  descriptionFilter.forEach(x => {
    allFiltersRegrouped.push(x.id);
  });
  // FILTRE INGREDIENTS
  recipes.forEach(x => {
    const allStackedIngredients = x.ingredients;
    allStackedIngredients.forEach(card => {
      const ingredient = card.ingredient.toLowerCase();
      if (ingredient.includes(mainSearchInput)) {
        allFiltersRegrouped.push(x.id);
      }
    });
  });
  // SUPPRIME LES DOUBLONS && SORT BY RECIPE.ID
  allFiltersRegrouped = [...new Set(allFiltersRegrouped)];
  allFiltersRegrouped.sort((a, b) => a - b);
  console.log(allFiltersRegrouped);
  // DISPLAY: NONE FOR ALL CARDS
  card.forEach(e => {
    e.style.display = "none";
  });
  // FILTERING
  let i = 0;
  recipes.forEach(recipe => {
    allFiltersRegrouped.forEach(index => {
      if (index == recipe.id) {
        console.log(recipe.name);
        card[i].style.display = "block";
      }
    });
    i++;
  });
};
// TOGGLERS : Loupe + "Enter"
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
  card.forEach(e => {
    e.style.display = "block";
  });
  allTotalRecipes();
});
mainSearchBar.addEventListener("input", (e) => {
  if (e.currentTarget.value == "" && totalCards < 50) {
    card.forEach(e => {
      e.style.display = "block";
    });
    allTotalRecipes();
  }
});


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
    
    console.log("avant", ingredientArray)
    if (!ingredientArray.includes(ingredient)) {
      div.style.display = "none";
      ingredientArray.push(ingredient);
      // let arrayID = ingredientArray.indexOf(ingredient);
      
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
        console.log(ingredientArray.indexOf(ingredient))
        ingredientArray.splice(ingredientArray.indexOf(ingredient), 1);
        card.forEach(e => {
          e.style.display = "block";
        });
        inputIngredients.value = "";
        allTotalRecipes();
        console.log(ingredientArray)
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
          e.style.display = "block";
        });
        inputIngredients.value = "";
        allTotalRecipes();
        console.log(ingredientArray);
      });
      // APPENDCHILDS
      sectionFilters.appendChild(filter);
      filter.innerHTML = ingredient;
      filter.appendChild(removeFilter);
      renderSVGCross(removeFilter);
      // ingredientArray.forEach(recipe => {
      //   sectionFilters.appendChild(filter);
      //   filter.innerHTML = recipe;
      //   filter.appendChild(removeFilter);
      // });
      // renderSVGCross(removeFilter);
      
      console.log("after", ingredientArray)


    }
  });
});
















// +-----------+
// | APPAREILS |
// +-----------+
const appareilsArray = [];
allAppareils.forEach(appareil => {
  // SETUP
  let div = document.createElement('div');
  div.setAttribute("class", "item-filtre");
  div.setAttribute("display", "block");
  menuAppareils.appendChild(div);
  div.innerHTML = appareil;
  // MENU : ONCLICK EVENT
  div.addEventListener("click", function() {
    if (!appareilsArray.includes(appareil)) {
      appareilsArray.push(appareil);
      // +----------------+
      // | MENU DEROULANT |
      // +----------------+
      let divMenuItem = document.createElement('div');
      divMenuItem.setAttribute('class', 'item-selected-style');
      let divMenuTitle = document.createElement('div');
      divMenuTitle.setAttribute('class', 'item-selected');
      divMenuTitle.innerHTML = appareil;
      // DELETE FILTER : MENU
      let divButton = document.createElement('button');
      divButton.setAttribute('class', 'delete-filter');
      divButton.addEventListener("click", function() {
        divMenuItem.remove();
        filter.remove();
        appareilsArray.pop();
        card.forEach(e => {
          e.style.display = "block";
        });
        inputAppareils.value = "";
        allTotalRecipes();
      });
      // APPENDCHILDS
      selectedAppareils.appendChild(divMenuItem);
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
        divMenuItem.remove();
        filter.remove();
        appareilsArray.pop();
        card.forEach(e => {
          e.style.display = "block";
        });
        inputAppareils.value = "";
        allTotalRecipes();
      });
      // APPENDCHILDS
      sectionFilters.appendChild(filter);
      filter.innerHTML = appareil;
      filter.appendChild(removeFilter);
      renderSVGCross(removeFilter);
    }
  });
});
// +-----------+
// | USTENSILS |
// +-----------+
const ustensilsArray = [];
allUstensils.forEach(ustensil => {
  // SETUP
  let div = document.createElement('div');
  div.setAttribute("class", "item-filtre");
  div.setAttribute("display", "block");
  menuUstensils.appendChild(div);
  div.innerHTML = ustensil;
  // MENU : ONCLICK EVENT
  div.addEventListener("click", function() {
    if (!ustensilsArray.includes(ustensil)) {
      ustensilsArray.push(ustensil);
      // +----------------+
      // | MENU DEROULANT |
      // +----------------+
      let divMenuItem = document.createElement('div');
      divMenuItem.setAttribute('class', 'item-selected-style');
      let divMenuTitle = document.createElement('div');
      divMenuTitle.setAttribute('class', 'item-selected');
      divMenuTitle.innerHTML = ustensil;
      // DELETE FILTER : MENU
      let divButton = document.createElement('button');
      divButton.setAttribute('class', 'delete-filter');
      divButton.addEventListener("click", function() {
        divMenuItem.remove();
        filter.remove();
        ustensilsArray.pop();
        card.forEach(e => {
          e.style.display = "block";
        });
        inputUstensils.value = "";
        allTotalRecipes();
      });
      // APPENDCHILDS
      selectedUstensils.appendChild(divMenuItem);
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
        divMenuItem.remove();
        filter.remove();
        ustensilsArray.pop();
        card.forEach(e => {
          e.style.display = "block";
        });
        inputUstensils.value = "";
        allTotalRecipes();
      });
      // APPENDCHILDS
      sectionFilters.appendChild(filter);
      filter.innerHTML = ustensil;
      filter.appendChild(removeFilter);
      renderSVGCross(removeFilter);
    }
  });
});