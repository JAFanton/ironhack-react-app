import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import recipes from "./data/recipes.json";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import List from "./pages/List";
import CreateItem from "./pages/CreateItem";
import About from "./pages/About";
import ItemDetails from "./pages/ItemDetails";

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
      <Routes>
        <Route path="/" element={<List recipes={recipesToDisplay} onDelete={deleteRecipe} />} />
        <Route path="/About" element={<About />} />
        <Route path="/create" element={<CreateItem callBackToCreate={createRecipe} />} />
        <Route path="/recipe/:recipeId" element={<ItemDetails />} />
      </Routes>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
