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


// +----------------------+
// | NB TOTAL DE RECETTES |
// +----------------------+
function allTotalRecipes() {
  let totalCards = 0;
  wrapper.forEach(card => {
    if (card.style.display == "block") {
      totalCards++;
    }
  });
  console.log("Total Recipes = ", totalCards);
}
allTotalRecipes();


// +----------------------------------+
// | FONCTION LOUPE : Main Search Bar |
// +----------------------------------+
function mainSearchFunction() {
  const mainSearchInput = document.getElementById("main-input").value.toLowerCase().trim();
  let allFiltersRegrouped = [];
  // FILTRE NOM
  let nameFilter = recipes.filter(card => card.name.toLowerCase().includes(mainSearchInput));
  nameFilter.forEach(x => {
    allFiltersRegrouped.push(x);
  });
  // FILTRE DESCRIPTION
  let descriptionFilter = recipes.filter(card => card.description.toLowerCase().includes(mainSearchInput));
  descriptionFilter.forEach(x => {
    allFiltersRegrouped.push(x);
  });
  // FILTRE INGREDIENTS
  recipes.forEach(x => {
    const allStackedIngredients = x.ingredients;
    allStackedIngredients.forEach(card => {
      const ingredient = card.ingredient.toLowerCase();
      if (ingredient.includes(mainSearchInput)) {
        allFiltersRegrouped.push(x);
      }
    });
  });
  // SUPPRIME LES DOUBLONS
  allFiltersRegrouped = [...new Set(allFiltersRegrouped)];
  // SORT BY RECIPE.ID
  allFiltersRegrouped.sort((a, b) => a.id - b.id);
  console.log(allFiltersRegrouped);


  for (let z = 0; z < 50; z++) {
    console.log(recipes[z].id);
    console.log(allFiltersRegrouped[z].id);
  }
  
  




  
};
// TOGGLERS : Loupe + "Enter"
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