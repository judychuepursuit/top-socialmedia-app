import { Link } from "react-router-dom";
// import Index.css from "../Pages/";

export default function Header() {
  return (
    <nav>
      <h1>
        <Link to="/" className="header-link">Social Media Apps</Link>
      </h1>
    </nav>
  );
}