// document.addEventListener('input', search);

// const cities = ['Berlin', 'Paris', 'Bucharest', 'Munich', 'Amsterdam', 'Milan'];
// // const cities = allIngredients;

// function search(e) {
//   const input = e.target.value.toLowerCase().trim();
//   console.log("input", input);
//   const filteredArray = cities.filter(x => {
//     const c = x.toLowerCase();
//     console.log("c", c);
//     let m = 0;
//     for (let l of input) {
//       console.log("L", l);
//       const i = c.substring(m).indexOf(l);
//       console.log("c", c);
//       console.log("i", i);
//       if (i < m) return false;
//       m = i;
//       console.log("m", m);
//     }
//     return true;
//   });
//   console.log(filteredArray);
// }