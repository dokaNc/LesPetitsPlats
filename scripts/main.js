import recipesList from "../data/recipes.js";
import recipeFactory from "./factories/recipeFactory.js";
// console.log(recipesList);

async function init() {
  console.log(recipesList);
  recipeFactory.recipeCardDOM();
}

// Input Recherche
const input = document.querySelector('input[id="filter"]');
input.addEventListener("input", (e) => {
  console.log(e.target.value);
});
// Une barre principale permettant de rechercher des mots ou groupes de lettres dans le titre, les ingrédients ou la description.
// 2. Recherche par tag
// Recherche par mots clés dans les ingrédients, les ustensiles ou les appareils.

init();
