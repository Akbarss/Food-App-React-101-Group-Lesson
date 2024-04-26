import React, { useEffect, useState } from "react";
import RecipeCard from "./components/RecipeCard";
import SearchBar from "./components/SearchBar";
import Layout from "./components/layout/layout";

const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  // search for the recipe
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  };
  return (
    <Layout>
      <div className="container">
        <h2>Our Food Recipes</h2>
        <SearchBar isLoading={isLoading} query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
        <div className="recipes">
          {recipes ? recipes.map((recipe) => <RecipeCard key={recipe.idMeal} recipe={recipe} />) : "No Results."}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
