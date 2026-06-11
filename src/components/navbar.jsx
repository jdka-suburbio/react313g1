import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";

function Navbar() {
  return (
    <nav className="navbar">
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </nav>
  );
}

export default Navbar;
