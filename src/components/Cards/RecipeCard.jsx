import { Card } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { idMeal, strMeal, strCategory, strMealThumb } = recipe;
  return (
    <Card sx={{ width: "480px", height: "auto", boxShadow: 2 }}>
      <img src={strMealThumb} alt={strMeal} style={{ height: "300px", width: "100%", objectFit: "cover" }} />
      <div>
        <span>{strCategory}</span>
        <h3>{strMeal}</h3>

        <NavLink to={`/store/${idMeal}`}>More</NavLink>
      </div>
    </Card>
  );
};

export default RecipeCard;
