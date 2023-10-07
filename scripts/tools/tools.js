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
function nativeFilter(listElements, searchedItem) {
  for (let i = 0; i < listElements.length; i++) {
    if (nativeIncludes(recipes[i].name.toLowerCase()) === searchedItem.toLowerCase() ||
    nativeIncludes(recipes[i].description.toLowerCase()) === searchedItem.toLowerCase() ||
    nativeIncludes(recipes[i].ingredients.toLowerCase()) === searchedItem.toLowerCase()) {
      console.log("yes")
    }
  }
  
  // switch (cardDetails) {
  //   case listElements.name:
  //     console.log("NAME, wouhou");
  //     break;
  //   case listElements.description:
  //     console.log("DESC, wouhou");
  //     break;
  //   case listElements.ingredients:
  //     console.log("ING, wouhou");
  //     break;
  //   default:
  //     console.log("Error Switch NativeFilter()");
  // }


  // for (let i = 0; i < listElements.length; i++) {
  //   let lowercaseName = listElements[i].name.toLowerCase().split(" ");
  //   for (let y = 0; y < lowercaseName.length; y++) {
  //     if (lowercaseName[y] !== searchedItem.toLowerCase()) {
  //       listElements.splice(listElements.indexOf([i]), 1);
  //     }
  //   }
  // }


  // console.log(listElements);
}



// +--------------------------+
// | FONCTION NATIVE : SOME   |
// +--------------------------+
function nativeSome(arrayLooped, searchedItem) {
  // FILTRAGE SOME
  for (let i = 0; i < arrayLooped.length; i++) {
    let filteredItem = arrayLooped[i].toLowerCase().split(" ");

    for (let y = 0; y < filteredItem.length; y++) {
      if (filteredItem[y] === searchedItem) {
        console.log("Yes", filteredItem[i], true);
        return true;
      }
    }

  }
  return false;
}