import { Link } from "react-router-dom";
import AllApps from "../components/AllApps";

function Index() {
  return (
    <div className="Index">
      <div className="index-inner">
        <h2>Index</h2>
        <Link to="/apps/new" className="header-link">
          <button className="new-btn">New App</button>
        </Link>
      </div>
      <AllApps />
    </div>
  );
}

export default Index;
