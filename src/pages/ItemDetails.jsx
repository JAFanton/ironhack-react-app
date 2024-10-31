import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ItemDetails({recipes}) {
  const { recipeId } = useParams();

  
  //To ensure the ID we are tracking is indeed a number
  const recipeDetails = recipes.find((recipe) => recipe.id === parseInt(recipeId)); 
  
  //If all properties of the object are filled, it returns as truthy
  const allValuesTruthy = recipeDetails && Object.values(recipeDetails).every((value) => Boolean(value));

  
  //If there is no recipe ID found then return ...
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

        <p>Recipe {allValuesTruthy ? "completed" : "missing components"}</p>
      </>
      <button>
        <Link to="/" className="button">
          Back
        </Link>
      </button>

      <button>
        <Link to={`/edit/${recipeId}`} className="button">
          Edit
        </Link>
      </button>

    </div>
  );
}

export default ItemDetails;