import { Link, useParams, withRouter, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;
function AppDetail() {
    const [app, setApp] = useState([]);
    let { index } = useParams();
    let navigate = useNavigate();
  
    useEffect(() => {
      axios
        .get(`${API}/logs/${index}`)
        .then(response => setApp(response.data))
        .catch(() => navigate("/not-found"));
    }, [index, navigate]);
  
    const handleDelete = () => {
      axios
        .delete(`${API}/apps/${index}`)
        .then(() => navigate(`/apps`))
        .catch((e) => console.error(e));
    };
    
    return (
      <article className="app-page">
        <div className="app-detail">
          <h2>{app.title} - By {app.appName}</h2>
          <h4>{app.post}</h4>
          <h5>Days since last crisis: {app.daysSinceLastCrisis}</h5>
        </div>
        <div className="showNavigation">
          <div>
            {" "}
            <Link to={`/apps`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            {" "}
            <Link to={`/apps/${index}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            {" "}
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
    );
  }
  
  export default AppDetail;