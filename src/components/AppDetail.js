import { Link, useParams, withRouter, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function AppDetail() {
    const [app, setApp] = useState([]);
    let navigate = useNavigate();
    let { id } = useParams();
  
    useEffect(() => {
      axios
        .get(`${API}/apps/${id}`)
        .then(response => setApp(response.data))
        .catch(() => navigate("/not-found"));
    }, [id, navigate]);
  
    const handleDelete = () => {
      axios
        .delete(`${API}/apps/${id}`)
        .then(() => navigate(`/apps`))
        .catch((e) => console.error(e));
    };
    
    return (
      <article className="app-page">
        <div className="app-detail">
          <img src={app.logo_link}/>
          <h2>{app.name} {app.is_favorite ? "❤️" : "🩶"}</h2>
          <p>Aprox. Monthly Users: {app.ma_users}</p>
          <p>Launch Year: {app.launched}</p>
          <p>Official Website: <a href={app.website} target="_blank">{app.website}</a>
          </p>
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
            <Link to={`/apps/${id}/edit`}>
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