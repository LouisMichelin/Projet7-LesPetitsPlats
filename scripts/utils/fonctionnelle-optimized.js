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
let totalCards = 0;
function allTotalRecipes() {
  totalCards = 0;
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
    document.getElementById('nb-recettes').innerHTML = `${totalCards} recettes`;
  }
});
loupe.addEventListener("click", function(event) {
  event.preventDefault();
  mainSearchFunction();
  allTotalRecipes();
  document.getElementById('nb-recettes').innerHTML = `${totalCards} recettes`;
});