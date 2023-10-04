// -----------------------------------------------------------------
// ICI, ON CREE TOUTES LES FONCTIONS : "FILTER", "SOME", "INCLUDES"
// QU'ON UTILISAIT EN FONCTIONNELLE
// SOUS LES NOMS :
// .filter()
// .some()
// .includes()
// -----------------------------------------------------------------
// NEW ARRAY
let newArray = [];
// +----------------------------+
// | FONCTION NATIVE : INCLUDES |
// +----------------------------+
let test2 = "Limonade de Coco";
let test3 = test2.toLowerCase();
let searchFilterIncludes = "coco";
// ------------------------------
function nativeIncludes() {
  // LOWERCASE ARRAY
  // for (let i = 0; i < recipesToFilter.length; i++) {
  //   recipesToFilter[i] = recipesToFilter[i].toLowerCase();
  // }
  test2 = test2.toLowerCase();
  test2 = test2.split(" ");
  console.log(test2);
  for (let i = 0; i < test2.length; i++) {
    if (test2[i] === searchFilterIncludes) {
      newArray.push(test2[i]);
      console.log("yes", newArray);
    } else {
      console.log("nope", test2[i]);
    }
  }
}
// nativeIncludes();


// +--------------------------+
// | FONCTION NATIVE : FILTER |
// +--------------------------+
let recipesToFilter = ["Limonade de Coco", "Burger de Dinde", "Poulet Fermier"];
let searchFilter = "limonade";
let filteredArray = [];
// ------------------------------
function nativeFilter() {
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