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
console.log(allIngredients);
console.log(allAppareils);
console.log(allUstensils);
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
    div.setAttribute("class", "item-filtre");
    allItemsIngredients.appendChild(div);
    div.innerHTML = ingredient;
    
  });
  chosenIngredient(); // EVENTLISTENER DES INGREDIENTS - FILTRES
});
chosenIngredient(); // EVENTLISTENER DES INGREDIENTS - NON FILTRES
// +--------------------------------+
// | EVENT LISTENER DES INGREDIENTS |
// +--------------------------------+
function chosenIngredient() {
  const ingredientList = document.querySelector("#all-items-ingredients");
  const chosenIngredient = ingredientList.querySelectorAll("div.item-filtre");
  const selectedIngredients = document.
  chosenIngredient.forEach(ingredient => {
    ingredient.addEventListener("click", function() {
      console.log("Je fonctionne !!!", ingredient.innerHTML);





    });
  });
}






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
});

// +---------------------+
// | SELECTED APPAREILS |
// +---------------------+
















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
});

// +---------------------+
// | SELECTED USTENSILES |
// +---------------------+
