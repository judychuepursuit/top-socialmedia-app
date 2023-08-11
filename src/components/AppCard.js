import noLogo from "./no-logo.jpg";
import { Link } from "react-router-dom";

function AppCard({ app }) {
  return (
    <div className="app-card">
      <div>
        <img src={app.logo_link ? app.logo_link : noLogo}/>
      </div>
      <div>
        <h3>
          <Link to={`/apps/${app.id}`} >{app.is_favorite ? "❤️" : "🩶"} {app.name}</Link>
        </h3>
      </div>
    </div>
  );
}

export default AppCard;
