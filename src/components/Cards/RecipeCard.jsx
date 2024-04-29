import React from "react";
import { NavLink } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { idMeal, strMeal, strCategory, strMealThumb } = recipe;
  return (
    <div>
      <img src={strMealThumb} alt={strMeal} />
      <div>
        <span>{strCategory}</span>
        <h3>{strMeal}</h3>

        <NavLink to={`/about/${idMeal}`}>More</NavLink>
      </div>
    </div>
  );
};

export default RecipeCard;
