import { useState } from "react";

function CreateItem(props) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");
  const [servings, setServings] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //Array of details for form entry
    const itemDetails = {
      name: name,
      calories: calories,
      image: image,
      servings: servings,
    };
    
    props.callBackToCreate(itemDetails);
    
    //Clear form
    setName("");
    setCalories("");
    setImage("");
    setServings("");
  }

  return (
    <div className="create-recipe">
        <h2>Add your own recipe!</h2>

        <form onSubmit={handleSubmit}>

        {/*Image*/}
        <label>Image:
          <input
            type="URL"
            name="image"
            placeholder="https://i.imgur.com/DupGBz5.jpg"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </label>

        {/*Name of the recipe*/}
        <label>Name:
          <input
            type="text"
            name="name"
            placeholder="input text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>

        {/*Calories*/}
        <label>Calories:
          <input
            type="text"
            name="calories"
            placeholder="input text"
            value={calories}
            onChange={(e) => {
              setCalories(e.target.value);
            }}
          />
        </label>

        {/*Servings*/}
        <label>Servings:
          <input
            type="text"
            name="servings"
            placeholder="input text"
            value={servings}
            onChange={(e) => {
              setServings(e.target.value);
            }}
          />
        </label>

        <button type="submit">Create recipe</button>
      </form>
    </div>
  )
}

export default CreateItem;
