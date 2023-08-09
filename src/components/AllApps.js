import axios from "axios";
import { useState, useEffect } from "react";
import OneApp from "./AppCard";

const API = process.env.REACT_APP_API_URL;
// console.log(API)

function AllApps() {
  const [allApps, setAllApps] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/apps`)
      .then((response) => setAllApps(response.data))
      .catch((e) => console.error("catch", e));
  }, []);


  return (
    <div className="apps">
      <section>
        
      </section>
    </div>
  );
}

export default AllApps;