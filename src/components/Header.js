import { Link } from "react-router-dom";
// import Index.css from "../Pages/";

export default function Header() {
  return (
    <nav>
      <h1>

<Link to="/apps" className="header-link">Social Media Apps</Link>
      </h1>
      <button className="new-btn">
        <Link to="/apps/new" className="header-link">New App</Link>
      </button>
    </nav>
  );
}