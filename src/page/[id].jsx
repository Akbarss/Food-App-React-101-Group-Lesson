import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/layout";

const FoodById = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [recipe, setRecipe] = useState(null);

  const fetchRecipe = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await res.json();
      if (data.meals && data.meals.length > 0) {
        setRecipe(data.meals[0]);
      } else {
        setRecipe(null);
      }
    } catch (error) {
      console.error("Error fetching recipe:", error);
      setRecipe(null);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRecipe();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!recipe) {
    return <div>Recipe not found</div>;
  }
  return (
    <Layout>
      <div>
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <p>{recipe.strInstructions}</p>
        {/* You can display more details about the recipe here */}
      </div>
    </Layout>
  );
};

export default FoodById;
