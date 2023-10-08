// +----------------------------+
// | FONCTION NATIVE : INCLUDES |
// +----------------------------+
function nativeIncludes(menuElements, selectedItem) {
  for (let i = 0; i < menuElements.length; i++) {
    if(menuElements[i].toLowerCase().includes(selectedItem)) {
      return true;
    }
  }
  return false;
}
// -----------------------------------------------------------------------------------

// +------------------------------------------------------------+
// | FONCTION NATIVE : FILTER (Name, Description & Ingredients) |
// +------------------------------------------------------------+
function nativeFilterNameDescIng(listElements, searchedItem) {
  let filtredElements = [];
  for (let i = 0; i < listElements.length; i++) {
    if (listElements[i].name.toLowerCase().includes(searchedItem) ||
    listElements[i].description.toLowerCase().includes(searchedItem) ||
    nativeSomeIng(listElements[i].ingredients, searchedItem))
    {
      filtredElements.push(listElements[i]);
    }
  }
  return filtredElements;
}
// +----------------------------------------+
// | FONCTION NATIVE : FILTER (Ingredients) |
// +----------------------------------------+
function nativeFilterIng(listElements, searchedItem) {
  let filtredElements = [];
  for (let i = 0; i < listElements.length; i++) {
    if (nativeSomeIng(listElements[i].ingredients, searchedItem)) {
      filtredElements.push(listElements[i]);
    }
  }
  return filtredElements;
}
// +--------------------------------------+
// | FONCTION NATIVE : FILTER (Appareils) |
// +--------------------------------------+
function nativeFilterApp(listElements, searchedItem) {
  let filtredElements = [];
  for (let i = 0; i < listElements.length; i++) {
    if (listElements[i].appliance.toLowerCase().includes(searchedItem)) {
      filtredElements.push(listElements[i]);
    }
  }
  return filtredElements;
}
// +--------------------------------------+
// | FONCTION NATIVE : FILTER (Ustensils) |
// +--------------------------------------+
function nativeFilterUst(listElements, searchedItem) {
  let filtredElements = [];
  for (let i = 0; i < listElements.length; i++) {
    if (nativeSomeUst(listElements[i].ustensils, searchedItem)) {
      filtredElements.push(listElements[i]);
    }
  }
  return filtredElements;
}
// -----------------------------------------------------------------------------------

// +---------------------------------------+
// | FONCTION NATIVE : SOME (Ingredients)  |
// +---------------------------------------+
function nativeSomeIng(ingredients, searchedIngredient) {
  for (let i = 0; i < ingredients.length; i++) {
    if (ingredients[i].ingredient.toLowerCase().includes(searchedIngredient)) {
      return true;
    }
  }
  return false;
}
// +-------------------------------------+
// | FONCTION NATIVE : SOME (Ustensils)  |
// +-------------------------------------+
function nativeSomeUst(ustensils, searchedIngredient) {
  for (let i = 0; i < ustensils.length; i++) {
    if (ustensils[i].toLowerCase().includes(searchedIngredient)) {
      return true;
    }
  }
  return false;
}
// -----------------------------------------------------------------------------------