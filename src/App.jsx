import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import recipes from "./data/recipes.json";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import List from "./components/List";
import CreateItem from "./components/CreateItem";

function App() {
  const [recipesToDisplay, setRecipesToDisplay] = useState(recipes);

  const deleteRecipe = (recipeId) => {
    const newRecipes = recipesToDisplay.filter((recipeObj) => {
      return recipeObj.id !== recipeId;
    });
    setRecipesToDisplay(newRecipes);
  };

  const createRecipe = (itemDetails) => {
    const recipeIds = recipesToDisplay.map((recipeObj) => recipeObj.id);
    const maxId = recipeIds.length > 0 ? Math.max(...recipeIds) : 0;
    const nextId = maxId + 1;

    const newRecipe = {
      ...itemDetails,
      id: nextId,
    };

    const newArray = [newRecipe, ...recipesToDisplay];
    setRecipesToDisplay(newArray);
  };

  return (
    <div className="App">
      <Navbar />
      <CreateItem callBackToCreate={createRecipe} />
      <Routes>
        <Route 
        path="/About-us"
        />
        <Route
          path="/"
          element={<List recipes={recipesToDisplay} onDelete={deleteRecipe} />}
        />
      </Routes>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
