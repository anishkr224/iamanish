import { Link } from "react-router-dom";
import "../css/my-navbar.css"; // Make sure to include your custom CSS

function MyNavbar() {
  return (
    <nav className="custom-navbar">
      <div className="navbar-brand">
        <Link to="/" title="Home">Anish</Link>
      </div>
      <div className="navbar-links">
        <Link to="/contacts">Contact</Link>
      </div>
    </nav>
  );
}

export default MyNavbar;
