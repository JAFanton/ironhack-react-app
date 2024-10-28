import logo from "../logo.png"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="image of logo" className="logo" />
      </div>
      <div className="title-container">
        <h1>[The Spice is Right]</h1>
      </div>
    </nav>
  );
}

export default Navbar;