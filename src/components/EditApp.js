import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";    
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;

function EditApp() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [app, setApp] = useState({
    name: "",
    rating: "",
    launched: "",
    ma_users: "",
    website: "",
    logo_link: "",
    is_favorite: false,
  });

  const updateApp = (updatedApp) => {
    axios
      .put(`${API}/apps/${id}`, updatedApp)
      .then(() => {
          navigate(`/apps/${id}`);
        },
        (error) => console.error(error))
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setApp({ ...app, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setApp({ ...app, is_favorite: !app.is_favorite });
  };

  useEffect(() => {
    axios
      .get(`${API}/apps/${id}`)
      .then(
        (response) => setApp(response.data),
        (error) => navigate(`/not-found`)
      );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateApp(app, id);
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">App's Name:</label>
        <input
          id="name"
          value={app.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of App"
          required
        />
        <label htmlFor="rating">App Rating:</label>
        <input
          id="rating"
          type="text"
          value={app.rating}
          placeholder="rating"
          onChange={handleTextChange}
        />
        <label htmlFor="launched">Launched Year:</label>
        <input
          id="launched"
          type="text"
          name="launched"
          value={app.launched}
          placeholder="Launched Year"
          onChange={handleTextChange}
        />
        <label htmlFor="ma_users">Monthly Users:</label>
        <input
          id="ma_users"
          name="ma_users"
          type="text"
          value={app.ma_users}
          onChange={handleTextChange}
          placeholder="Monthly Users"
        />
        <label htmlFor="website">Website:</label>
        <input
          id="website"
          name="website"
          type="text"
          value={app.website}
          onChange={handleTextChange}
          placeholder="https://"
          required
        />
        <label htmlFor="logo_link">Logo Link:</label>
        <input
          id="logo_link"
          name="logo_link"
          type="text"
          value={app.logo_link}
          onChange={handleTextChange}
          placeholder="https://"
        />
        <label htmlFor="is_favorite">Is Favorite?:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={app.is_favorite}
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/apps/${id}`}>
        <button>Cancel</button>
      </Link>
    </div>
  );
}

export default EditApp;