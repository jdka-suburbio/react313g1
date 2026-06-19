import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import UnidadAdministrativa from "../pages/unidadAdministrativa";

function Navbar() {
  return (
    <nav className="navbar">
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/unidad-administrativa">Unidad Administrativa</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
      </nav>
    </nav>
  );
}

export default Navbar;
