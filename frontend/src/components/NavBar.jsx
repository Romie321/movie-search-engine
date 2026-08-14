import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Movie App</Link>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
      </div>
    </nav>
  );
}
