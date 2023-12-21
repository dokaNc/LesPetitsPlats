function recipeFactory() {
  // Append DOM Recipe Card
  function recipeCardDOM(recipes) {
    const { image, name, description } = recipes;

    // Get Element
    const sectionRecipe = document.getElementById("recipe");

    // Create Element
    const cardItem = document.createElement("div");
    const cardImageItem = document.createElement("img");
    const cardContentItem = document.createElement("div");
    const cardTitleItem = document.createElement("h3");
    const cardRecipeTitleItem = document.createElement("h6");
    const cardSubContentItem = document.createElement("p");
    const cardIngredientTitleItem = document.createElement("h6");
    const ingredientWrapperItem = document.createElement("div");
    const ingredientWrapperInfoItem = document.createElement("div");
    const ingredientWrapperTitleItem = document.createElement("div");
    const ingredientWrapperUnityItem = document.createElement("div");

    // Add Class
    cardItem.classList.add(
      "card",
      "w-80",
      "flex",
      "flex-col",
      "overflow-hidden",
      "rounded-2xl",
      "bg-white"
    );
    cardImageItem.classList.add("h-64", "object-cover");
    cardContentItem.classList.add("card-content", "p-6");
    cardTitleItem.classList.add("mb-6");
    cardRecipeTitleItem.classList.add(
      "uppercase",
      "tracking-widest",
      "font-bold",
      "mb-3"
    );
    cardSubContentItem.classList.add("mb-6");
    cardIngredientTitleItem.classList.add(
      "uppercase",
      "tracking-widest",
      "font-bold",
      "mb-3"
    );
    ingredientWrapperItem.classList.add("ingredient-wrapper");
    ingredientWrapperInfoItem.classList.add("ingredient-wrapper-info");
    ingredientWrapperTitleItem.classList.add("ingredient-wrapper-info__title");
    ingredientWrapperUnityItem.classList.add("ingredient-wrapper-info__unity");

    // Add Data (valeur en dur pour test le visuel)
    cardImageItem.setAttribute("src", `./assets/image/recette/${image}`);
    cardTitleItem.innerText = name;
    cardRecipeTitleItem.innerText = "Recette";
    cardSubContentItem.innerHTML = description;
    cardIngredientTitleItem.innerText = "Ingrédients";
    ingredientWrapperTitleItem.innerText = "Sucre";
    ingredientWrapperUnityItem.innerText = "30 g";

    // Append DOM
    cardItem.appendChild(cardImageItem);
    cardItem.appendChild(cardContentItem);
    cardContentItem.appendChild(cardTitleItem);
    cardContentItem.appendChild(cardRecipeTitleItem);
    cardContentItem.appendChild(cardSubContentItem);
    cardContentItem.appendChild(cardIngredientTitleItem);
    cardContentItem.appendChild(ingredientWrapperItem);
    // Surement à être implémenter dans une boucle par la suite (à voir)
    // C'est le titre des unités + valeur des unités (ex: Lait de coco - 400 ml)
    ingredientWrapperItem.appendChild(ingredientWrapperInfoItem);
    ingredientWrapperInfoItem.appendChild(ingredientWrapperTitleItem);
    ingredientWrapperInfoItem.appendChild(ingredientWrapperUnityItem);
    ////////////////////////////////////////////////////////////////////////////
    sectionRecipe.appendChild(cardItem);
  }

  function removeCardDOM() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((element) => {
      element.remove();
    });
  }

  return { recipeCardDOM, removeCardDOM };
}

export default recipeFactory();
