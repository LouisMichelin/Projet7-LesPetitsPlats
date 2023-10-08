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



// NATIVE FILTER par name, desc et ingredients
function nativeFilterNameDescIngs(listElements, searchedItem) {
  let filtredElements = [];
  for (let i = 0; i < listElements.length; i++) {
    //Mettre la condition de filtrage 
    //exp: filtrer
    if(listElements[i].name.toLowerCase().includes(searchedItem) ||
    listElements[i].description.toLowerCase().includes(searchedItem) ||
    nativeSomeIng(listElements[i].ingredients, searchedItem)
    )
    {
      filtredElements.push(listElements[i])
    }
  }
  return filtredElements;
}


// +--------------------------+
// | FONCTION NATIVE : SOME   |
// +--------------------------+
function nativeSomeIng(ingredients, searchedIgredient) {
  for (let index = 0; index < ingredients.length; index++) {
    if( ingredients[index].ingredient.toLowerCase().includes(searchedIgredient)){
      return true;
    }
  }
  return false;
}
