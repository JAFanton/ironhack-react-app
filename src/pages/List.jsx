import React from "react";
import { NavLink } from "react-router-dom";

function List({ recipes, onDelete }) {
  return (
    <div className="recipe">
      <ul className="recipes-list">
        {recipes.map((recipeObj) => {
          const allValuesTruthy = Object.values(recipeObj).every((value) =>
            Boolean(value)
          );

          return (
            <li key={recipeObj.id} className="recipe-item">
              <img
                src={recipeObj.image}
                alt={`${recipeObj.name}`}
                className="recipe-img"
              />
              <div className="recipe-text">
                <h2>{recipeObj.name}</h2>
                <p>{recipeObj.calories} Calories</p>
                <p>{recipeObj.servings} Serving(s)</p>
                <p>
                  Recipe {allValuesTruthy ? "completed" : "missing components"}
                </p>
              </div>
              <div className="recipe-buttons">
                <>
                  <button onClick={() => onDelete(recipeObj.id)}>Delete</button>
                </>

                <>
                  <button className="button">
                    <NavLink
                      to={`/recipe/${recipeObj.id}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      More Details
                    </NavLink>
                  </button>
                </>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
