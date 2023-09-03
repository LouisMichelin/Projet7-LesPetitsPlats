// +---------------+
// | DOM VARIABLES |
// ----------------+
// MAIN SEARCH BAR
const mainSearchBar = document.getElementById('main-input');
const loupe = document.getElementById('button-loupe');
// WRAPPER + CARD DOM
let wrapper = document.getElementById('wrapper').children;
wrapper = Array.from(wrapper);

// +----------------------+
// | NB TOTAL DE RECETTES |
// +----------------------+
let totalCards = 0;
function allTotalRecipes() {
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
  // ID DE CHAQUE RECIPE
  // recipes.forEach(recipe => {
  //   console.log(recipe.id);
  // });
  
  // INDEX ATTRIBUTE 
  // wrapper.forEach(card => {
  //   console.log(card.getAttribute('index'));
  // });


    


};


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



