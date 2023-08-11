import noLogo from "./no-logo.jpg";
import { Link } from "react-router-dom";

function AppCard({ app }) {
  return (
    <div className="app-card">
      <img src={app.logo_link ? app.logo_link : noLogo}/>
      <h2>
        <Link to={`/apps/${app.id}`} >{app.name}</Link>
      </h2>
      <p>{app.is_favorite ? "❤️" : "🩶"}</p>
    </div>
  );
}

export default AppCard;
