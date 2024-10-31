import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditItem({recipes, callBackToEdit}) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");
  const [servings, setServings] = useState("");

  const { recipeId } = useParams();

  useEffect(() => {
    const recipeToEdit = recipes && recipes.find((recipe) => recipe.id === Number(recipeId));
    if (recipeToEdit) {
      setName(recipeToEdit.name);
      setCalories(recipeToEdit.calories);
      setImage(recipeToEdit.image);
      setServings(recipeToEdit.servings);
    }
  }, [recipeId, recipes]);

  //Activate navigation hook
  const navigate = useNavigate();

  //Function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    //Array of details for edit form entry
    const updatedRecipe = {
      id: Number(recipeId),
      name: name,
      calories: calories,
      image: image,
      servings: servings,
    };

    //Passes on the updated recipe to the update function
    callBackToEdit(updatedRecipe);

    //Clear form
    setName("");
    setCalories("");
    setImage("");
    setServings("");

    //Allow for navigation back to home screen after submittion
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <div className="create-recipe">
      <h2>Edit Recipe</h2>

      <form onSubmit={handleSubmit}>
        {/*Image*/}
        <label>
          Image:
          <input
            type="URL"
            name="image"
            placeholder="https://i.imgur.com/DupGBz5.jpg"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>

        {/*Name of the recipe*/}
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="input text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        {/*Calories*/}
        <label>
          Calories:
          <input
            type="number"
            name="calories"
            placeholder="input text"
            min='1'
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </label>

        {/*Servings*/}
        <label>
          Servings:
          <input
            type="number"
            name="servings"
            placeholder="input text"
            min='1'
            max='20'
            value={servings}
            onChange={(e) => setServings(e.target.value)}
          />
        </label>

        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}

export default EditItem;
