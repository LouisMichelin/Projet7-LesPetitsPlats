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
// +----------------------------------------------+
// | EVENT LISTENER DES INGREDIENTS + CREATE ITEM |
// +----------------------------------------------+
function chosenIngredient() {
  const ingredientList = document.querySelector('#all-items-ingredients');
  const chosenIngredient = ingredientList.querySelectorAll('div.item-filtre');
  const selectedIngredients = document.getElementById('selected-ingredients');
  chosenIngredient.forEach(ingredient => {
    ingredient.addEventListener("click", function() {
      // console.log("Je fonctionne !!!", ingredient.innerHTML);
      let div = document.createElement('div');
      div.setAttribute('class', 'item-selected-style');
      let divTitle = document.createElement('div');
      divTitle.setAttribute('class', 'item-selected');
      divTitle.innerHTML = ingredient.innerHTML;
      let button = document.createElement('button');
      button.setAttribute('class', 'delete-filter');
      // APPENDCHILDS
      selectedIngredients.appendChild(div);
      div.appendChild(divTitle);
      div.appendChild(button);
      renderSVGIcon(button);
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
// +--------------------------------------------+
// | EVENT LISTENER DES APPAREILS + CREATE ITEM |
// +--------------------------------------------+
function chosenAppareil() {
  const appareilList = document.querySelector('#all-items-appareils');
  const chosenAppareil = appareilList.querySelectorAll('div.item-filtre');
  const selectedAppareils = document.getElementById('selected-appareils');
  chosenAppareil.forEach(appareil => {
    appareil.addEventListener("click", function() {
      let div = document.createElement('div');
      div.setAttribute('class', 'item-selected-style');
      let divTitle = document.createElement('div');
      divTitle.setAttribute('class', 'item-selected');
      divTitle.innerHTML = appareil.innerHTML;
      let button = document.createElement('button');
      button.setAttribute('class', 'delete-filter');
      // APPENDCHILDS
      selectedAppareils.appendChild(div);
      div.appendChild(divTitle);
      div.appendChild(button);
      renderSVGIcon(button);
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
// +---------------------------------------------+
// | EVENT LISTENER DES USTENSILES + CREATE ITEM |
// +---------------------------------------------+
function chosenUstensil() {
  const ustensilList = document.querySelector('#all-items-ustensils');
  const chosenUstensil = ustensilList.querySelectorAll('div.item-filtre');
  const selectedUstensils = document.getElementById('selected-ustensils');
  chosenUstensil.forEach(ustensil => {
    ustensil.addEventListener("click", function() {
      let div = document.createElement('div');
      div.setAttribute('class', 'item-selected-style');
      let divTitle = document.createElement('div');
      divTitle.setAttribute('class', 'item-selected');
      divTitle.innerHTML = ustensil.innerHTML;
      let button = document.createElement('button');
      button.setAttribute('class', 'delete-filter');
      // APPENDCHILDS
      selectedUstensils.appendChild(div);
      div.appendChild(divTitle);
      div.appendChild(button);
      renderSVGIcon(button);
    });
  });
};