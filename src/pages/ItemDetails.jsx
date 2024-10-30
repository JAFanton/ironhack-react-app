import { useParams } from "react-router-dom";
import recipes from "../data/recipes.json";
import { Link } from "react-router-dom";

function ItemDetails() {
  const { recipeId } = useParams();

  const recipeDetails = recipes.find((recipe) => recipe.id === parseInt(recipeId)); 
  
  if (!recipeDetails) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <div className="item-detail-page">
      <>
        <img src={recipeDetails.image} alt="Image of food" />

        <h1>{recipeDetails.name}</h1>

        <p>Calories: {recipeDetails.calories}</p>

        <p>Serving(s): {recipeDetails.servings}</p>
      </>
      <button>
        <Link to="/" className="btn btn-primary">
          Back
        </Link>
      </button>
    </div>
  );
}

export default ItemDetails;