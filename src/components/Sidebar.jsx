import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    
    <div class="sidebar">

        <button><NavLink to="/">Home</NavLink></button>

          <button><a href=""><NavLink to="/About">About</NavLink></a></button>

    </div>
  );
}

export default Sidebar;