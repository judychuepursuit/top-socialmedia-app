import { Link } from "react-router-dom";
import AllApps from "../components/AllApps";

function Index() {
  return (
    <div className="Index">
      <div className="inner">
        <h2>Apps List</h2>
        <Link to="/apps/new" className="header-link">
          <button className="new-btn">New App</button>
        </Link>
      </div>
      <AllApps />
    </div>
  );
}

export default Index;
