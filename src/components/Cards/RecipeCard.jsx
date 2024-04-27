import React from "react";

const RecipeCard = ({ recipe }) => {
  const { idMeal, strMeal, strCategory, strMealThumb } = recipe;
  return (
    <div>
      <img src={strMealThumb} alt={strMeal} />
      <div>
        <span>{strCategory}</span>
        <h3>{strMeal}</h3>
        <a href="">More Info</a>
      </div>
    </div>
  );
};

export default RecipeCard;
