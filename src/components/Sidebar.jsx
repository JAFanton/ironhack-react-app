import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div class="sidebar">
      <button>
        <NavLink to="/" style={isActive => ({
    color: isActive ? "black" : "blue", textDecoration: "none"
  })}>Home</NavLink>
      </button>

      <button>
          <NavLink to="/About" style={isActive => ({
    color: isActive ? "black" : "blue", textDecoration: "none"
  })}>About</NavLink>
      </button>

      <button>
          <NavLink to="/Create" style={isActive => ({
    color: isActive ? "black" : "blue", textDecoration: "none"
  })}>Add Recipe</NavLink>
      </button>

    </div>
  );
}

export default Sidebar;
