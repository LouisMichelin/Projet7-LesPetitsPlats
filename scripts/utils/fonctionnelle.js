// +------------------------------------+
// | INPUTS & FILTRES - MAIN SEARCH BAR |
// +------------------------------------+
const mainSearchBar = document.getElementById('main-input');
const loupe = document.getElementById('button-loupe');

//le filtrage sera effectué sur le tableau des recipes globale
//recipes.filter(y => {y.name == chaine || y.secription== chaine || y.ingredients.some(chaine) })
// filtrerles recipes 
// if titre ou description ou un element des ingredient == à la chaine saisie 
// donc on stock l'element recipe dans le tableau mainArray 
loupe.addEventListener("click", function(event) {
  event.preventDefault();
  const mainResearch = mainSearchBar.value.toLowerCase().trim();
  console.log(mainResearch);
  // -----------------------------------------------------------
  
  // DISPLAY: NONE CHAQUE RECETTE
  const card = document.querySelectorAll('.card');
  card.forEach(y => {
    y.style.display = "none";
  });

  // const card = document.querySelectorAll('.card');
  // console.log(card[1])
  // console.log(card[40])


  

  
    
  recipes.forEach(e => {
    // NAME
    const name = e.name.toLowerCase();
    // console.log(name.includes(mainResearch), "NameID= ", e.id);
    if (name.includes(mainResearch)) {
      console.log(e.name, "NameID= ", e.id);
      card.style.display = "block";
    }



    // INGREDIENTS
    e.ingredients.forEach(y => {
      const ingredient = y.ingredient.toLowerCase();
      // console.log(ingredient.includes(mainResearch), "IngredientID= ", e.id);
    });


    // DESCRIPTION
    const description = e.description.toLowerCase();
    // console.log(description.includes(mainResearch), "DescriptionID= ", e.id);

    
  
  });
  



  
});
  

// for(let l of input1) {
//   // console.log("Mot que l'on saisit dans Input1: ", l);
//   let m = 0;
//   const c = y.toLowerCase();
//   // console.log("Ingrédient comparé: ", c);
//   const i = c.substring(m).indexOf(l)
//   // console.log("Index 'i' de la valeur saisie: ", i);
//   if(i < m) return false;
//   m = i;
// }
// return true;









// +--------------------------------------------+
// | INPUTS & LISTES DES ITEMS DE CHAQUE BOUTON |
// +--------------------------------------------+
let inputIngredient = document.getElementById('ingredients-input');
let inputAppareils = document.getElementById('appareils-input');
let inputUstensils = document.getElementById('ustensils-input');
//
let allItemsIngredients = document.getElementById('all-items-ingredients');
let input1 = [];
let allItemsAppareils = document.getElementById('all-items-appareils');
let input2 = [];
let allItemsUstensils = document.getElementById('all-items-ustensils');
let input3 = [];
// CONSOLE.LOG CHECK
// console.log(allIngredients);
// console.log(allAppareils);
// console.log(allUstensils);
// MISE EN PLACE DES INGREDIENTS : FONCTIONNELLE
allIngredients.forEach(ingredient => {
  let div = document.createElement('div');
  div.setAttribute("class", "item-filtre");
  allItemsIngredients.appendChild(div);
  div.innerHTML = ingredient;
});
// MISE EN PLACE DES APPAREILS : FONCTIONNELLE
allAppareils.forEach(appareil => {
  let div = document.createElement('div');
  div.setAttribute("class", "item-filtre");
  allItemsAppareils.appendChild(div);
  div.innerHTML = appareil;
});
// MISE EN PLACE DES USTENSILES : FONCTIONNELLE
allUstensils.forEach(ustensil => {
  let div = document.createElement('div');
  div.setAttribute("class", "item-filtre");
  allItemsUstensils.appendChild(div);
  div.innerHTML = ustensil;
});

// +-------------------------------------------------------------+
// | FUNCTION CREATE SVG : "DELETE BUTTON FROM FILTERS SELECTED" |
// +-------------------------------------------------------------+
// ROUNDED CROSS
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

// +--------------------+
// | FILTRE INGREDIENTS |
// +--------------------+
inputIngredient.addEventListener("input", x => {
  input1.pop(); // REMOVE [x-1]
  input1.push(x.target.value.toLowerCase().trim()); // ADD SEARCH LETTER TO : input1
  const filteredIngredients = allIngredients.filter(y => {
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
  });
  chosenIngredient(); // EVENTLISTENER DES INGREDIENTS - FILTERED
});
chosenIngredient(); // EVENTLISTENER DES INGREDIENTS - NOT FILTERED

// +-------------------------------------------------+
// | EVENT LISTENER INGREDIENTS + CREATE/REMOVE ITEM |
// +-------------------------------------------------+
function chosenIngredient() {
  const ingredientArray = [];
  const ingredientList = document.querySelector('#all-items-ingredients');
  const chosenIngredient = ingredientList.querySelectorAll('div.item-filtre');
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
  });
  chosenAppareil(); // EVENTLISTENER DES APPAREILS - FILTERED
});
chosenAppareil(); // EVENTLISTENER DES APPAREILS - NOT FILTERED

// +-----------------------------------------------+
// | EVENT LISTENER APPAREILS + CREATE/REMOVE ITEM |
// +-----------------------------------------------+
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
  });
  chosenUstensil(); // EVENTLISTENER DES USTENSILES - FILTERED
});
chosenUstensil(); // EVENTLISTENER DES USTENSILES - NOT FILTERED

// +------------------------------------------------+
// | EVENT LISTENER USTENSILES + CREATE/REMOVE ITEM |
// +------------------------------------------------+
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