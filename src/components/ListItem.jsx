import React from "react";
import { Link } from "react-router-dom";


const ListItem = ({ item, onDelete }) => {
  const allValuesTruthy = Object.values(item).every((value) => Boolean(value));

  return (
    <div className="recipe-item">
      <Link to={`/List/${item.id}`}>
        <img src={item.image} alt={item.name} className="recipe-img" />
      </Link>
      <div className="recipe-text">
        <h3>
          <Link to={`/List/${item.id}`}>{item.name}</Link>
        </h3>
        <p>Calories: {item.calories}</p>
        <p>Servings: {item.servings}</p>
        <p>Status: {allValuesTruthy ? "✅" : "❌"}</p>
        <button onClick={() => onDelete(item.id)} className="recipe-button">
          Delete Recipe
        </button>
      </div>
    </div>
  );
};

export default ListItem;