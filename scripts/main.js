import recipesList from "../data/recipes.js";
import recipeFactory from "./factories/recipeFactory.js";
// console.log(recipesList);

// Input Recherche
const input = document.querySelector('input[id="filter"]');
let numb = 0;
input.addEventListener("input", (e) => {
  if (e.target.value != "") {
    recipeFactory.removeCardDOM();

    const filter = recipesList.filter((x) =>
      x.name.match(new RegExp(e.target.value, "i"))
    );

    if (filter.length > 0) {
      filter.forEach((value) => {
        recipeFactory.recipeCardDOM(value);
      });
    }

    // recipeFactory.removeCardDOM(e.target.value);
  }
});

// async function init(data) {
//   if (data) {
//     data.forEach((value) => {
//       recipeFactory.recipeCardDOM(value);
//     });
//   }
// }

// Une barre principale permettant de rechercher des mots ou groupes de lettres dans le titre, les ingrédients ou la description.
// 2. Recherche par tag
// Recherche par mots clés dans les ingrédients, les ustensiles ou les appareils.

// A NOTER: Les tags doivent se mettre à jour en fonction du mots écrit dans le input de recherche et inversement.
//

// init();
