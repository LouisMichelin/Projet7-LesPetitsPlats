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


// +---------------------------+
// | BUTTONS-MENUS : Variables |
// +---------------------------+
// MENU INGREDIENTS
let menuIngredients = document.getElementById('all-items-ingredients');
let inputIngredient = document.getElementById('ingredients-input');
// MENU APPAREILS
let menuAppareils = document.getElementById('all-items-appareils');
let inputAppareils = document.getElementById('appareils-input');
// MENU USTENSILS
let menuUstensils = document.getElementById('all-items-ustensils');
let inputUstensils = document.getElementById('ustensils-input');
// +--------------------------------------------+
// | BUTTONS-MENUS : Listing des Items + Init() |
// +--------------------------------------------+
// INGREDIENTS
allIngredients.forEach(ingredient => {
  let div = document.createElement('div');
  div.setAttribute("class", "item-filtre");
  menuIngredients.appendChild(div);
  div.innerHTML = ingredient;
});
// APPAREILS
allAppareils.forEach(appareil => {
  let div = document.createElement('div');
  div.setAttribute("class", "item-filtre");
  menuAppareils.appendChild(div);
  div.innerHTML = appareil;
});
// USTENSILS
allUstensils.forEach(ustensil => {
  let div = document.createElement('div');
  div.setAttribute("class", "item-filtre");
  menuUstensils.appendChild(div);
  div.innerHTML = ustensil;
});






