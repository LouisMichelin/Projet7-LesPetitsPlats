// +----------------------------+
// | FONCTION NATIVE : INCLUDES |
// +----------------------------+
function nativeIncludes(menuElements, selectedItem) {
  for (let i = 0; i < menuElements.length; i++) {
    menuElements[i].toLowerCase().split(" ");
    if (menuElements[i] === selectedItem) {
      console.log("ça matche")
      return true;
    }
  };
}















// +--------------------------+
// | FONCTION NATIVE : FILTER |
// +--------------------------+
let recipesToFilter = ["Limonade de Coco", "Burger de Dinde", "Poulet Fermier"];
let searchFilter = "limonade";
let filteredArray = [];
// ------------------------------
function nativeFilter(recettes) {
  for (let i = 0; i < recettes.length; i++) {
    recettes[i].name = recettes[i].name.toLowerCase();
  }

  // LOWERCASE ARRAY
  for (let i = 0; i < recipesToFilter.length; i++) {
    recipesToFilter[i] = recipesToFilter[i].toLowerCase();
  }
  console.log(recipesToFilter);
  // FILTRAGE
  for (let i = 0; i < recipesToFilter.length; i++) {
    let filteredItem = recipesToFilter[i].split(" ");
    for (let y = 0; y < filteredItem.length; y++) {
      if (filteredItem[y] === searchFilter) {
        console.log("Yes", filteredItem[y]);
        let index = recipesToFilter.indexOf(recipesToFilter[i]);
        recipesToFilter.splice(index, 1);
      }
    }
  }
}
// nativeFilter();


// +--------------------------+
// | FONCTION NATIVE : SOME |
// +--------------------------+
let recipesToDoSome = ["Limonade de Coco", "Spaghettis Bolognaise", "Frites"];
let searchFilterSome = "bolognaise";
// ------------------------------
function nativeSome() {
  // LOWERCASE ARRAY
  for (let i = 0; i < recipesToDoSome.length; i++) {
    recipesToDoSome[i] = recipesToDoSome[i].toLowerCase();
  }
  console.log(recipesToDoSome);
  // FILTRAGE SOME
  for (let i = 0; i < recipesToDoSome.length; i++) {
    let filteredItem = recipesToDoSome[i].split(" ");
    for (let y = 0; y < filteredItem.length; y++) {
      if (filteredItem[y] === searchFilterSome) {
        console.log("Yes", filteredItem[y], true);
        return true;
      }
    }
  }
  return false;
}
// nativeSome();