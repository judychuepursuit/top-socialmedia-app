import axios from "axios";
import { useState, useEffect } from "react";
import AppCard from "./AppCard";

const API = process.env.REACT_APP_API_URL;

function AllApps() {
  const [allApps, setAllApps] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/apps`)
      .then((response) => setAllApps(response.data))
      .catch((e) => console.error("catch", e));
  }, []);


  return (
    <div className="all-apps">
      {allApps.map(app =>
        <AppCard key={app.id} app={app}/>
      )}
    </div>
  );
}

export default AllApps;
