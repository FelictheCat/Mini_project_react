import logo from "../assets/logo.png"

function Navbar() {
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" height={"200"} />
      <h2>E-commerce Admin</h2>
    </nav>
  );
}

export default Navbar;
