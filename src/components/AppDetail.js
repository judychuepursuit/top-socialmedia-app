import noLogo from "./no-logo.jpg";

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
        <div className="image">
          <img src={app.logo_link ? app.logo_link : noLogo}/>
        </div>
        <div className="detail">
          <h2>{app.is_favorite ? "❤️" : "♡"} {app.name}</h2>
          <p><span>App Rating:</span> {app.rating} ⭐️</p>
          <p><span>Aprox. Monthly Users:</span> {app.ma_users}</p>
          <p><span>Launch Year:</span> {app.launched}</p>
          <p><span>Official Website:</span> <a href={app.website} target="_blank">{app.website}</a></p>
        </div>
      </div>
      <div className="navigation">
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
