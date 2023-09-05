// +------------------------------------+
// | INPUTS & FILTRES - MAIN SEARCH BAR |
// +------------------------------------+
// const mainSearchBar = document.getElementById('main-input');
// const loupe = document.getElementById('button-loupe');
// WRAPPER
// let filteredRecipes = Array.from(document.getElementById('wrapper'));
// SELECTED FILTERS
let selectedIngredients = Array.from(document.getElementById('selected-ingredients'));
let selectedAppareils = Array.from(document.getElementById('selected-appareils'));
let selectedUstensils = Array.from(document.getElementById('selected-ustensils'));
// // CREATE ARRAY OF CARDS
// let card = document.querySelectorAll('.card');
// card = [...new Set(card)];


// // +----------------------+
// // | NB TOTAL DE RECETTES |
// // +----------------------+
// let wrapperAll = Array.from(document.getElementById('wrapper').children);
// wrapperAll.forEach(carte => {
//   carte.style.display = "block";
// });
// //
// let total = 0;
// //
// function totalRecipes() {
//   wrapperAll.forEach(carte => {
//     if (carte.style.display == "block") {
//       total++;
//       console.log("OUI, c'est du BLOCK");
//     }
//   });
//   console.log("TOTAL=", total);
// }
// totalRecipes();


// // +------------------------+
// // | EVENT LISTENER : LOUPE |
// // +------------------------+
// function loupeFunction() {
//   loupe.addEventListener("click", function(event) {
//     // event.preventDefault();
//     // const mainResearch = mainSearchBar.value.toLowerCase().trim();
//     // +-------------------------+
//     // | DISPLAY: NONE ALL CARDS |
//     // +-------------------------+
//     // card.forEach(e => {
//     //   e.style.display = "none";
//     // });
//     // +------------------------+
//     // | DISPLAY: BLOCK IF TRUE |
//     // +------------------------+
//     recipes.forEach(e => {
//       let cardID = (e.id - 1);
//       // NAME
//       const name = e.name.toLowerCase();
//       if (name.includes(mainResearch) && card[cardID].style != "block") {
//         card[cardID].style.display = "block";
//         // console.log(e.name, "NameID: ", cardID);
//       }
//       // INGREDIENTS
//       e.ingredients.forEach(y => {
//         const ingredient = y.ingredient.toLowerCase();
//         if (ingredient.includes(mainResearch) && card[cardID].style != "block") {
//           card[cardID].style.display = "block";
//           // console.log(ingredient, "IngredientID: ", cardID);
//         }
//       });
//       // DESCRIPTION
//       const description = e.description.toLowerCase();
//       if (description.includes(mainResearch) && card[cardID].style != "block") {
//         card[cardID].style.display = "block";
//         // console.log(description, "DescriptionID: ", cardID);
//       }
//     });
//     // +--------------------+
//     // | UPDATE NB RECETTES |
//     // +--------------------+
//     total = 0;
//     totalRecipes();
//     document.getElementById('nb-recettes').innerHTML = `${total} recettes`;
//   });
// };
// loupeFunction()

// // +-------------------------------------------+
// // | RESET RECIPES ONCLICK - MAIN ERASE BUTTON |
// // +-------------------------------------------+
// const delMainSearch = document.getElementById('button-erase');
// delMainSearch.addEventListener("click", function() {
//   card.forEach(e => {
//     e.style.display = "block";
//   });
//   total = 0;
//   totalRecipes();
//   document.getElementById('nb-recettes').innerHTML = `${total} recettes`;
// });


// +--------------------------------------------+
// | INPUTS & LISTES DES ITEMS DE CHAQUE BOUTON |
// +--------------------------------------------+
// let inputIngredient = document.getElementById('ingredients-input');
// let inputAppareils = document.getElementById('appareils-input');
// let inputUstensils = document.getElementById('ustensils-input');
// let allItemsIngredients = document.getElementById('all-items-ingredients');
// let input1 = [];
// let allItemsAppareils = document.getElementById('all-items-appareils');
// let input2 = [];
// let allItemsUstensils = document.getElementById('all-items-ustensils');
// let input3 = [];
// // MISE EN PLACE DES INGREDIENTS : FONCTIONNELLE
// function setupAllIngredients() {
//   allIngredients.forEach(ingredient => {
//     let div = document.createElement('div');
//     div.setAttribute("class", "item-filtre");
//     allItemsIngredients.appendChild(div);
//     div.innerHTML = ingredient;
//   });
// }
// setupAllIngredients();
// // MISE EN PLACE DES APPAREILS : FONCTIONNELLE
// function setupAllAppareils() {
//   allAppareils.forEach(appareil => {
//     let div = document.createElement('div');
//     div.setAttribute("class", "item-filtre");
//     allItemsAppareils.appendChild(div);
//     div.innerHTML = appareil;
//   });
// }
// setupAllAppareils();
// // MISE EN PLACE DES USTENSILES : FONCTIONNELLE
// function setupAllUstensils() {
//   allUstensils.forEach(ustensil => {
//     let div = document.createElement('div');
//     div.setAttribute("class", "item-filtre");
//     allItemsUstensils.appendChild(div);
//     div.innerHTML = ustensil;
//   });
// }
// setupAllUstensils();


// // +-------------------------------------------------------------+
// // | FUNCTION CREATE SVG : "DELETE BUTTON FROM FILTERS SELECTED" |
// // +-------------------------------------------------------------+
// // ROUNDED CROSS
// function renderSVGIcon(Node) {
//   let iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//   iconSvg.setAttribute('width', '17');
//   iconSvg.setAttribute('height', '17');
//   iconSvg.setAttribute('viewBox', '0 0 17 17');
//   iconSvg.setAttribute('fill', 'none');
//   let iconCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
//   iconCircle.setAttribute('cx', '8.5');
//   iconCircle.setAttribute('cy', '8.5');
//   iconCircle.setAttribute('r', '8.5');
//   iconCircle.setAttribute('fill', 'black');
//   let iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//   iconPath.setAttribute('d', 'M11 11L8.5 8.5M8.5 8.5L6 6M8.5 8.5L11 6M8.5 8.5L6 11');
//   iconPath.setAttribute('stroke', '#FFD15B');
//   iconPath.setAttribute('stroke-linecap', 'round');
//   iconPath.setAttribute('stroke-linejoin', 'round');
//   // APPENDCHILD'S
//   iconSvg.appendChild(iconCircle);
//   iconSvg.appendChild(iconPath);
  
//   return Node.appendChild(iconSvg);
// };
// // CROSS
// function renderSVGCross(Node) {
//   let iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//   iconSvg.setAttribute('width', '17');
//   iconSvg.setAttribute('height', '17');
//   iconSvg.setAttribute('viewBox', '0 0 17 17');
//   iconSvg.setAttribute('fill', '#FFD15B');
//   let iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//   iconPath.setAttribute('d', 'M15 15L8.5 8.5M8.5 8.5L2 2M8.5 8.5L15 2M8.5 8.5L2 15');
//   iconPath.setAttribute('stroke', '#1B1B1B');
//   iconPath.setAttribute('stroke-width', '2.16667');
//   iconPath.setAttribute('stroke-linecap', 'round');
//   iconPath.setAttribute('stroke-linejoin', 'round');
//   // APPENDCHILD'S
//   iconSvg.appendChild(iconPath);
  
//   return Node.appendChild(iconSvg);
// };



// +--------------------+
// | FILTRE INGREDIENTS |
// +--------------------+
let filteredIngredients;
inputIngredient.addEventListener("input", x => {
  input1.pop(); // REMOVE [x-1]
  input1.push(x.target.value.toLowerCase().trim()); // ADD SEARCH LETTER TO : input1
  filteredIngredients = allIngredients.filter(y => {
    for(let l of input1) {
      // console.log("Mot que l'on saisit dans Input1: ", l);
      let m = 0;
      const c = y.toLowerCase();
      // console.log("Ingrédient comparé: ", c);
      const i = c.substring(m).indexOf(l)
      // console.log("Index 'i' de la valeur saisie: ", i);
      if(i < m) return false;
      m = i;
    }
    return true;
  });
  console.log(filteredIngredients);
  allItemsIngredients.innerHTML = "";
  // NEW DISPLAY
  filteredIngredients.forEach(ingredient => {
    let div = document.createElement('div');
    div.setAttribute('class', 'item-filtre');
    allItemsIngredients.appendChild(div);
    div.innerHTML = ingredient;
    div.addEventListener("click", function() {});
    // ----------------------------------------------------------
    //
    // INSERTION DE FONCTION JUSTE APRES ELEMENT FILTERED DU MENU
    //
    // ----------------------------------------------------------
    function monFiltreDesIngredients() {
      let blockRecipesID = [];
      let filteredRecipes = document.getElementById('wrapper');
      filteredRecipes = Array.from(filteredRecipes.children);
      // EVENT LISTENER
      div.addEventListener("click", function() {
        selectedIngredients.push(div.innerText.toLowerCase());
        let wrapper = document.getElementById('wrapper');
        wrapper = Array.from(wrapper.children);
        // FILTERING EACH INGREDIENT
        selectedIngredients.forEach(e => {
          let i = 0;
          let id = 1;
          filteredRecipes.forEach(recipe => {
            if (recipe.style.display === "block") {
              // console.log("BLOCK", recipe);
              blockRecipesID.push(id);
              i++;
              id++;
            } else if (recipe.style.display === "none") {
              // console.log("NONE", recipe);
              i++;
              id++;
            }
          });
          // ARRAY DES INGREDIENTS FILTERED
          blockRecipesID.forEach(itemID => {
            recipes.forEach(y => {
              if (y.id === itemID) {
                recipesFiltered.push(y);
              }
            });
          });
          console.log(recipesFiltered);
          // FILTERING
          recipesFiltered.forEach(item => {
            const ingredients = item.ingredients;
            let totalYes = 0;
            // COMPARAISON DE CHAQUE INGREDIENT
            ingredients.forEach(y => {
              const ingredient = y.ingredient.toLowerCase();
              if (ingredient.includes(div.innerText.toLowerCase())) {
                console.log(ingredient," VS : ", div.innerText.toLowerCase());
                totalYes++;
              }
            });
            if (totalYes === 0) {
              let elemID = (item.id - 1);
              console.log("TEST card[elemID]", card[elemID]);
              card[elemID].style.setProperty('display', 'none');
            }
          });
          total = 0;
          totalRecipes();
          document.getElementById('nb-recettes').innerHTML = `${total} recettes`;
        });
      });
    };
    monFiltreDesIngredients();
  });
  chosenIngredient(); // EVENTLISTENER DES INGREDIENTS - FILTERED
});
chosenIngredient(); // EVENTLISTENER DES INGREDIENTS - NOT FILTERED
// +---------------------------------------------------+
// | INGREDIENTS : EVENT LISTENER + CREATE/REMOVE ITEM |
// +---------------------------------------------------+
function chosenIngredient() {
  const ingredientArray = [];
  const ingredientList = document.querySelector('#all-items-ingredients');
  //const chosenIngredient = ingredientList.querySelectorAll('div.item-filtre');
  const selectedIngredients = document.getElementById('selected-ingredients');
  const sectionFilters = document.getElementById('filters-selected');
  // FONCTION ADD/REMOVE FILTERS
  chosenIngredient.forEach(ingredient => {
    ingredient.addEventListener("click", function() {
      if (ingredientArray.includes(ingredient.innerHTML) === false) {
        // MENU FILTER'S CREATION
        ingredientArray.push(ingredient.innerHTML);
        let div = document.createElement('div');
        div.setAttribute('class', 'item-selected-style');
        let divTitle = document.createElement('div');
        divTitle.setAttribute('class', 'item-selected');
        divTitle.innerHTML = ingredient.innerHTML;
        let button = document.createElement('button');
        button.setAttribute('class', 'delete-filter');
        // DELETE SELECTED FILTER
        button.addEventListener("click", function() {
          div.remove();
          filter.remove();
          ingredientArray.pop();
        });
        // APPENDCHILDS MENU DEROULANT
        selectedIngredients.appendChild(div);
        div.appendChild(divTitle);
        div.appendChild(button);
        renderSVGIcon(button);
        // SECTION FILTERS' CREATION
        let filter = document.createElement('div');
        filter.setAttribute('class', 'filter');
        let removeFilter = document.createElement('button');
        // DELETE SELECTED FILTER
        removeFilter.addEventListener("click", function() {
          filter.remove();
          div.remove();
          ingredientArray.pop();
          card.forEach(e => {
            e.style.display = "block";
          });
          document.getElementById('ingredients-input').value = "";
          total = 0;
          totalRecipes();
          document.getElementById('nb-recettes').innerHTML = `${total} recettes`;
        });
        // DELETE WITH FILTER-MENU SCROLLING DELETE BUTTON
        document.querySelector('.delete-filter').addEventListener("click", function() {
          filter.remove();
          div.remove();
          ingredientArray.pop();
          card.forEach(e => {
            e.style.display = "block";
          });
          document.getElementById('ingredients-input').value = "";
          document.getElementById()
          setupAllIngredients();
          total = 0;
          totalRecipes();
          document.getElementById('nb-recettes').innerHTML = `${total} recettes`;
        });
        // APPENDCHILDS SECTION FILTERS
        sectionFilters.appendChild(filter);
        filter.innerHTML = ingredient.innerHTML;
        filter.appendChild(removeFilter);
        renderSVGCross(removeFilter);
      }
    });
  });
};


// +------------------+
// | FILTRE APPAREILS |
// +------------------+
inputAppareils.addEventListener("input", x => {
  input2.pop(); // REMOVE [x-1]
  input2.push(x.target.value.toLowerCase().trim()); // ADD SEARCH LETTER TO : input1
  const filteredAppareils = allAppareils.filter(y => {
    for(let l of input2) {
      // console.log("Mot que l'on saisit dans Input1: ", l);
      let m = 0;
      const c = y.toLowerCase();
      // console.log("Appareil comparé: ", c);
      const i = c.substring(m).indexOf(l)
      // console.log("Index 'i' de la valeur saisie: ", i);
      if(i < m) return false;
      m = i;
    }
    return true;
  });
  console.log(filteredAppareils);
  allItemsAppareils.innerHTML = "";
  // NEW DISPLAY
  filteredAppareils.forEach(appareil => {
    let div = document.createElement('div');
    div.setAttribute("class", "item-filtre");
    allItemsAppareils.appendChild(div);
    div.innerHTML = appareil;
    // ----------------------------------------------------------
    //
    // INSERTION DE FONCTION JUSTE APRES ELEMENT FILTERED DU MENU
    //
    // ----------------------------------------------------------
    function monFiltreDesAppareils() {
      let blockRecipesID = [];
      let filteredRecipes = document.getElementById('wrapper');
      filteredRecipes = Array.from(filteredRecipes.children);
      // EVENT LISTENER
      div.addEventListener("click", function() {
        selectedAppareils.push(div.innerText.toLowerCase());
        let wrapper = document.getElementById('wrapper');
        wrapper = Array.from(wrapper.children);
        // FILTERING EACH INGREDIENT
        selectedAppareils.forEach(e => {
          let i = 0;
          let id = 1;
          filteredRecipes.forEach(recipe => {
            if (recipe.style.display === "block") {
              // console.log("BLOCK", recipe);
              blockRecipesID.push(id);
              i++;
              id++;
            } else if (recipe.style.display === "none") {
              // console.log("NONE", recipe);
              i++;
              id++;
            }
          });
          // ARRAY DES INGREDIENTS FILTERED
          blockRecipesID.forEach(itemID => {
            recipes.forEach(y => {
              if (y.id === itemID) {
                recipesFiltered.push(y);
              }
            });
          });
          console.log(recipesFiltered);
          // FILTERING
          recipesFiltered.forEach(item => {
            const appareil = item.appliance.toLowerCase();
            let totalYes = 0;
            // COMPARAISON DE CHAQUE APPAREIL
            if (appareil.includes(div.innerText.toLowerCase())) {
              console.log(appareil," VS : ", div.innerText.toLowerCase());
              totalYes++;
            }
            if (totalYes === 0) {
              let elemID = (item.id - 1);
              console.log("TEST card[elemID]", card[elemID]);
              card[elemID].style.setProperty('display', 'none');
            }
          });
          total = 0;
          totalRecipes();
          document.getElementById('nb-recettes').innerHTML = `${total} recettes`;
        });
      });
    };
    monFiltreDesAppareils();
  });
  chosenAppareil(); // EVENTLISTENER DES APPAREILS - FILTERED
});
chosenAppareil(); // EVENTLISTENER DES APPAREILS - NOT FILTERED
// +-------------------------------------------------+
// | APPAREILS : EVENT LISTENER + CREATE/REMOVE ITEM |
// +-------------------------------------------------+
function chosenAppareil() {
  const appareilArray = [];
  const appareilList = document.querySelector('#all-items-appareils');
  const chosenAppareil = appareilList.querySelectorAll('div.item-filtre');
  const selectedAppareils = document.getElementById('selected-appareils');
  const sectionFilters = document.getElementById('filters-selected');
  chosenAppareil.forEach(appareil => {
    appareil.addEventListener("click", function() {
      if (appareilArray.includes(appareil.innerHTML) === false) {
        // MENU FILTER'S CREATION
        appareilArray.push(appareil.innerHTML);
        let div = document.createElement('div');
        div.setAttribute('class', 'item-selected-style');
        let divTitle = document.createElement('div');
        divTitle.setAttribute('class', 'item-selected');
        divTitle.innerHTML = appareil.innerHTML;
        let button = document.createElement('button');
        button.setAttribute('class', 'delete-filter');
        // DELETE SELECTED FILTER
        button.addEventListener("click", function() {
          div.remove();
          filter.remove();
          appareilArray.pop();
        });
        // APPENDCHILDS MENU DEROULANT
        selectedAppareils.appendChild(div);
        div.appendChild(divTitle);
        div.appendChild(button);
        renderSVGIcon(button);
        // SECTION FILTERS' CREATION
        let filter = document.createElement('div');
        filter.setAttribute('class', 'filter');
        let removeFilter = document.createElement('button');
        // DELETE SELECTED FILTER
        removeFilter.addEventListener("click", function() {
          filter.remove();
          div.remove();
          appareilArray.pop();
          card.forEach(e => {
            e.style.display = "block";
          });
          document.getElementById('appareils-input').value = "";
          setupAllAppareils();
          total = 0;
          totalRecipes();
          document.getElementById('nb-recettes').innerHTML = `${total} recettes`;
        });
        // DELETE WITH FILTER-MENU SCROLLING DELETE BUTTON
        document.querySelector('.delete-filter').addEventListener("click", function() {
          filter.remove();
          div.remove();
          appareilArray.pop();
          card.forEach(e => {
            e.style.display = "block";
          });
          document.getElementById('appareils-input').value = "";
          setupAllAppareils();
          total = 0;
          totalRecipes();
          document.getElementById('nb-recettes').innerHTML = `${total} recettes`;
        });
        // APPENDCHILDS SECTION FILTERS
        sectionFilters.appendChild(filter);
        filter.innerHTML = appareil.innerHTML;
        filter.appendChild(removeFilter);
        renderSVGCross(removeFilter);
      }
    });
  });
};


// +-------------------+
// | FILTRE USTENSILES |
// +-------------------+
inputUstensils.addEventListener("input", x => {
  input3.pop(); // REMOVE [x-1]
  input3.push(x.target.value.toLowerCase().trim()); // ADD SEARCH LETTER TO : input1
  const filteredUstensils = allUstensils.filter(y => {
    for(let l of input3) {
      // console.log("Mot que l'on saisit dans Input1: ", l);
      let m = 0;
      const c = y.toLowerCase();
      // console.log("Ustensile comparé: ", c);
      const i = c.substring(m).indexOf(l)
      // console.log("Index 'i' de la valeur saisie: ", i);
      if(i < m) return false;
      m = i;
    }
    return true;
  });
  console.log(filteredUstensils);
  allItemsUstensils.innerHTML = "";
  // NEW DISPLAY
  filteredUstensils.forEach(ustensil => {
    let div = document.createElement('div');
    div.setAttribute("class", "item-filtre");
    allItemsUstensils.appendChild(div);
    div.innerHTML = ustensil;
    // ----------------------------------------------------------
    //
    // INSERTION DE FONCTION JUSTE APRES ELEMENT FILTERED DU MENU
    //
    // ----------------------------------------------------------
    function monFiltreDesUstensiles() {
      let blockRecipesID = [];
      let filteredRecipes = document.getElementById('wrapper');
      filteredRecipes = Array.from(filteredRecipes.children);
      // EVENT LISTENER
      div.addEventListener("click", function() {
        selectedUstensils.push(div.innerText.toLowerCase());
        let wrapper = document.getElementById('wrapper');
        wrapper = Array.from(wrapper.children);
        // FILTERING EACH INGREDIENT
        selectedUstensils.forEach(e => {
          let i = 0;
          let id = 1;
          filteredRecipes.forEach(recipe => {
            if (recipe.style.display === "block") {
              // console.log("BLOCK", recipe);
              blockRecipesID.push(id);
              i++;
              id++;
            } else if (recipe.style.display === "none") {
              // console.log("NONE", recipe);
              i++;
              id++;
            }
          });
          // ARRAY DES INGREDIENTS FILTERED
          blockRecipesID.forEach(itemID => {
            recipes.forEach(y => {
              if (y.id === itemID) {
                recipesFiltered.push(y);
              }
            });
          });
          console.log(recipesFiltered);
          // FILTERING
          recipesFiltered.forEach(item => {
            const ustensils = item.ustensils;
            let totalYes = 0;
            // COMPARAISON DE CHAQUE INGREDIENT
            ustensils.forEach(y => {
              const ustensil = y.toLowerCase();
              if (ustensil.includes(div.innerText.toLowerCase())) {
                console.log(ustensil," VS : ", div.innerText.toLowerCase());
                totalYes++;
              }
            });
            if (totalYes === 0) {
              let elemID = (item.id - 1);
              console.log("TEST card[elemID]", card[elemID]);
              card[elemID].style.setProperty('display', 'none');
            }
          });
          total = 0;
          totalRecipes();
          document.getElementById('nb-recettes').innerHTML = `${total} recettes`;
        });
      });
    };
    monFiltreDesUstensiles()
  });
  chosenUstensil(); // EVENTLISTENER DES USTENSILES - FILTERED
});
chosenUstensil(); // EVENTLISTENER DES USTENSILES - NOT FILTERED
// +--------------------------------------------------+
// | USTENSILES : EVENT LISTENER + CREATE/REMOVE ITEM |
// +--------------------------------------------------+
function chosenUstensil() {
  const ustensilArray = [];
  const ustensilList = document.querySelector('#all-items-ustensils');
  const chosenUstensil = ustensilList.querySelectorAll('div.item-filtre');
  const selectedUstensils = document.getElementById('selected-ustensils');
  const sectionFilters = document.getElementById('filters-selected');
  chosenUstensil.forEach(ustensil => {
    ustensil.addEventListener("click", function() {
      if (ustensilArray.includes(ustensil.innerHTML) === false) {
        // MENU FILTER'S CREATION
        ustensilArray.push(ustensil.innerHTML);
        let div = document.createElement('div');
        div.setAttribute('class', 'item-selected-style');
        let divTitle = document.createElement('div');
        divTitle.setAttribute('class', 'item-selected');
        divTitle.innerHTML = ustensil.innerHTML;
        let button = document.createElement('button');
        button.setAttribute('class', 'delete-filter');
        // DELETE SELECTED FILTER
        button.addEventListener("click", function() {
          div.remove();
          filter.remove();
          ustensilArray.pop();
        });
        // APPENDCHILDS MENU DEROULANT
        selectedUstensils.appendChild(div);
        div.appendChild(divTitle);
        div.appendChild(button);
        renderSVGIcon(button);
        // SECTION FILTERS' CREATION
        let filter = document.createElement('div');
        filter.setAttribute('class', 'filter');
        let removeFilter = document.createElement('button');
        // DELETE SELECTED FILTER
        removeFilter.addEventListener("click", function() {
          filter.remove();
          div.remove();
          ustensilArray.pop();
          card.forEach(e => {
            e.style.display = "block";
          });
          document.getElementById('ustensils-input').value = "";
          setupAllUstensils();
          total = 0;
          totalRecipes();
          document.getElementById('nb-recettes').innerHTML = `${total} recettes`;
        });
        // DELETE WITH FILTER-MENU SCROLLING DELETE BUTTON
        document.querySelector('.delete-filter').addEventListener("click", function() {
          filter.remove();
          div.remove();
          ustensilArray.pop();
          card.forEach(e => {
            e.style.display = "block";
          });
          document.getElementById('ustensils-input').value = "";
          setupAllUstensils();
          total = 0;
          totalRecipes();
          document.getElementById('nb-recettes').innerHTML = `${total} recettes`;
        });
        // APPENDCHILDS SECTION FILTERS
        sectionFilters.appendChild(filter);
        filter.innerHTML = ustensil.innerHTML;
        filter.appendChild(removeFilter);
        renderSVGCross(removeFilter);
      }
    });
  });
};


// +----------------------+
// | APPLY FILTER BUTTONS |
// +----------------------+
let recipesFiltered = []; // NEW ARRAY FILTERED
function applyFilterButtons() {
  let blockRecipesID = [] // STOCKE LES RECIPES.ID IF(DISPLAY === "BLOCK");
  //
  let filteredRecipes = document.getElementById('wrapper');
  filteredRecipes = Array.from(filteredRecipes.children);
  //
  let allIngredients = document.getElementById('all-items-ingredients');
  allIngredients = Array.from(allIngredients.children);
  // let selectedIngredients = document.getElementById('selected-ingredients');
  // selectedIngredients = Array.from(selectedIngredients.children);
  //
  let allAppareils = document.getElementById('all-items-appareils');
  allAppareils = Array.from(allAppareils.children);
  
  //
  let allUstensils = document.getElementById('all-items-ustensils');
  allUstensils = Array.from(allUstensils.children);
  

  // +----------------------------------+
  // | DECLENCHEUR : FILTRE INGREDIENTS |
  // +----------------------------------+
  allIngredients.forEach(e => {
    e.addEventListener("click", function() {
      let i = 0;
      let id = 1;
      filteredRecipes.forEach(recipe => {
        if (recipe.style.display === "block") {
          // console.log("BLOCK", recipe);
          blockRecipesID.push(id);
          i++;
          id++;
        } else if (recipe.style.display === "none") {
          // console.log("NONE", recipe);
          i++;
          id++;
        }
      });
      // +------------------------------+
      // | POUR CHAQUE BLOCK FILTERED : |
      // +------------------------------+
      blockRecipesID.forEach(itemID => {
        recipes.forEach(y => {
          if (y.id === itemID) {
            recipesFiltered.push(y);
          }
        });
      });

      console.log("NEW ARRAY : ", recipesFiltered);

      recipesFiltered.forEach(item => {
        const ingredients = item.ingredients;
        let totalYes = 0;
        // COMPARAISON DE CHAQUE INGREDIENT
        ingredients.forEach(y => {
          const ingredient = y.ingredient.toLowerCase();
          if (ingredient.includes(e.innerHTML.toLowerCase())) {
            console.log(ingredient," VS : ", e.innerHTML.toLowerCase());
            totalYes++;
          }
        });
        if (totalYes === 0) {
          let elemID = (item.id - 1);
          console.log("TEST card[elemID]", card[elemID]);
          card[elemID].style.setProperty('display', 'none');
        }  
      });
      total = 0;
      totalRecipes();
      document.getElementById('nb-recettes').innerHTML = `${total} recettes`;
    });
  });
  // FOREACH : POUR CHAQUE FILTRE RECHERCHé DANS LA BARRE DES INGREDIENTS
  // selectedIngredients.forEach(e => {
  //   console.log(e)
  //   e.addEventListener("click", function() {
  //     console.log("click")
  //     let i = 0;
  //     let id = 1;
  //     filteredRecipes.forEach(recipe => {
  //       if (recipe.style.display === "block") {
  //         // console.log("BLOCK", recipe);
  //         blockRecipesID.push(id);
  //         i++;
  //         id++;
  //       } else if (recipe.style.display === "none") {
  //         // console.log("NONE", recipe);
  //         i++;
  //         id++;
  //       }
  //     });
  //     // +------------------------------+
  //     // | POUR CHAQUE BLOCK FILTERED : |
  //     // +------------------------------+
  //     blockRecipesID.forEach(itemID => {
  //       recipes.forEach(y => {
  //         if (y.id === itemID) {
  //           recipesFiltered.push(y);
  //         }
  //       });
  //     });

  //     console.log("NEW ARRAY : ", recipesFiltered);

  //     recipesFiltered.forEach(item => {
  //       const ingredients = item.ingredients;
  //       let totalYes = 0;
  //       // COMPARAISON DE CHAQUE INGREDIENT
  //       ingredients.forEach(y => {
  //         const ingredient = y.ingredient.toLowerCase();
  //         if (ingredient.includes(e.innerHTML.toLowerCase())) {
  //           console.log(ingredient," VS : ", e.innerHTML.toLowerCase());
  //           totalYes++;
  //         }
  //       });
  //       if (totalYes === 0) {
  //         let elemID = (item.id - 1);
  //         console.log("TEST card[elemID]", card[elemID]);
  //         card[elemID].style.setProperty('display', 'none');
  //       }
  //     });
  //   });
  // });
  // +--------------------------------+
  // | DECLENCHEUR : FILTRE APPAREILS |
  // +--------------------------------+
  allAppareils.forEach(e => {
    e.addEventListener("click", function() {
      let i = 0;
      let id = 1;
      filteredRecipes.forEach(recipe => {
        if (recipe.style.display === "block") {
          // console.log("BLOCK", recipe);
          blockRecipesID.push(id);
          i++;
          id++;
        } else if (recipe.style.display === "none") {
          // console.log("NONE", recipe);
          i++;
          id++;
        }
      });
      // +------------------------------+
      // | POUR CHAQUE BLOCK FILTERED : |
      // +------------------------------+
      blockRecipesID.forEach(itemID => {
        recipes.forEach(y => {
          if (y.id === itemID) {
            recipesFiltered.push(y);
          }
        });
      });

      console.log("NEW ARRAY : ", recipesFiltered);

      recipesFiltered.forEach(item => {
        let totalYes = 0;
        if (item.appliance.toLowerCase() === e.innerHTML.toLowerCase()) {
          console.log(item.appliance," VS : ", e.innerHTML.toLowerCase());
          totalYes++;
        }
        if (totalYes === 0) {
          let elemID = (item.id - 1);
          console.log("TEST card[elemID]", card[elemID]);
          card[elemID].style.setProperty('display', 'none');
          total = 0;
          totalRecipes();
          document.getElementById('nb-recettes').innerHTML = `${total} recettes`;
        }
      });
    });
  });
  // FOREACH : POUR CHAQUE FILTRE RECHERCHé DANS LA BARRE DES APPAREILS
  // selectedAppareils.forEach(e => {
  //   e.addEventListener("click", function() {
  //     let i = 0;
  //     let id = 1;
  //     filteredRecipes.forEach(recipe => {
  //       if (recipe.style.display === "block") {
  //         // console.log("BLOCK", recipe);
  //         blockRecipesID.push(id);
  //         i++;
  //         id++;
  //       } else if (recipe.style.display === "none") {
  //         // console.log("NONE", recipe);
  //         i++;
  //         id++;
  //       }
  //     });
  //     // +------------------------------+
  //     // | POUR CHAQUE BLOCK FILTERED : |
  //     // +------------------------------+
  //     blockRecipesID.forEach(itemID => {
  //       recipes.forEach(y => {
  //         if (y.id === itemID) {
  //           recipesFiltered.push(y);
  //         }
  //       });
  //     });

  //     console.log("NEW ARRAY : ", recipesFiltered);

  //     recipesFiltered.forEach(item => {
  //       let totalYes = 0;
  //       if (item.appliance.toLowerCase() === e.innerHTML.toLowerCase()) {
  //         console.log(item.appliance," VS : ", e.innerHTML.toLowerCase());
  //         totalYes++;
  //       }
  //       if (totalYes === 0) {
  //         let elemID = (item.id - 1);
  //         console.log("TEST card[elemID]", card[elemID]);
  //         card[elemID].style.setProperty('display', 'none');
  //         total = 0;
  //         totalRecipes();
  //         document.getElementById('nb-recettes').innerHTML = `${total} recettes`;
  //       }
  //     });
  //   });
  // });
  // +---------------------------------+
  // | DECLENCHEUR : FILTRE USTENSILES |
  // +---------------------------------+
  allUstensils.forEach(e => {
    e.addEventListener("click", function() {
      let i = 0;
      let id = 1;
      filteredRecipes.forEach(recipe => {
        if (recipe.style.display === "block") {
          // console.log("BLOCK", recipe);
          blockRecipesID.push(id);
          i++;
          id++;
        } else if (recipe.style.display === "none") {
          // console.log("NONE", recipe);
          i++;
          id++;
        }
      });
      // +------------------------------+
      // | POUR CHAQUE BLOCK FILTERED : |
      // +------------------------------+
      blockRecipesID.forEach(itemID => {
        recipes.forEach(y => {
          if (y.id === itemID) {
            recipesFiltered.push(y);
          }
        });
      });

      console.log("NEW ARRAY : ", recipesFiltered);

      recipesFiltered.forEach(item => {
        const ustensils = item.ustensils;
        let totalYes = 0;
        // COMPARAISON DE CHAQUE USTENSILE
        ustensils.forEach(ustensil => {
          if (ustensil = ustensil.toLowerCase() === e.innerHTML.toLowerCase()) {
            console.log(ustensil," VS : ", e.innerHTML.toLowerCase());
            totalYes++;
          }
        });
        if (totalYes === 0) {
          let elemID = (item.id - 1);
          console.log("TEST card[elemID]", card[elemID]);
          card[elemID].style.setProperty('display', 'none');
          total = 0;
          totalRecipes();
          document.getElementById('nb-recettes').innerHTML = `${total} recettes`;
        }
      });
    });
  });
  // FOREACH : POUR CHAQUE FILTRE RECHERCHé DANS LA BARRE DES USTENSILES
  // selectedUstensils.forEach(e => {
  //   e.addEventListener("click", function() {
  //     let i = 0;
  //     let id = 1;
  //     filteredRecipes.forEach(recipe => {
  //       if (recipe.style.display === "block") {
  //         // console.log("BLOCK", recipe);
  //         blockRecipesID.push(id);
  //         i++;
  //         id++;
  //       } else if (recipe.style.display === "none") {
  //         // console.log("NONE", recipe);
  //         i++;
  //         id++;
  //       }
  //     });
  //     // +------------------------------+
  //     // | POUR CHAQUE BLOCK FILTERED : |
  //     // +------------------------------+
  //     blockRecipesID.forEach(itemID => {
  //       recipes.forEach(y => {
  //         if (y.id === itemID) {
  //           recipesFiltered.push(y);
  //         }
  //       });
  //     });

  //     console.log("NEW ARRAY : ", recipesFiltered);

  //     recipesFiltered.forEach(item => {
  //       const ustensils = item.ustensils;
  //       let totalYes = 0;
  //       // COMPARAISON DE CHAQUE USTENSILE
  //       ustensils.forEach(ustensil => {
  //         if (ustensil = ustensil.toLowerCase() === e.innerHTML.toLowerCase()) {
  //           console.log(ustensil," VS : ", e.innerHTML.toLowerCase());
  //           totalYes++;
  //         }
  //       });
  //       if (totalYes === 0) {
  //         let elemID = (item.id - 1);
  //         console.log("TEST card[elemID]", card[elemID]);
  //         card[elemID].style.setProperty('display', 'none');
  //         total = 0;
  //         totalRecipes();
  //         document.getElementById('nb-recettes').innerHTML = `${total} recettes`;
  //       }
  //     });
  //   });
  // });
};
applyFilterButtons();