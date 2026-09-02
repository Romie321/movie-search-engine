import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { useTheme } from "../contexts/ThemeContext";

function NavBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Movie App
      </Link>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/favorites" className="navbar-link">
          Favorites
        </Link>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
