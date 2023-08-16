import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NewApp() {
  let navigate = useNavigate();
  const [submitError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  let currentYear = new Date().toJSON().slice(0, 4);

  const [app, setApp] = useState({
    name: "",
    rating: "",
    launched: "",
    ma_users: "",
    website: "",
    logo_link: "",
    is_favorite: false,
  });

  const addApp = (newApp) => {
    axios
      .post(`${API}/apps`, newApp)
      .then(
        (res) => {
          navigate(`/apps/${res.data.id}`);
          setError(false);
        },
        (error) => {
          console.error(error);
          setError(true);
          setErrorMessage(error);
        }
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setApp({ ...app, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setApp({ ...app, [event.target.id]: Number(event.target.value) });
  };

  const handleCheckboxChange = () => {
    setApp({ ...app, is_favorite: !app.is_favorite });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addApp(app);
  };

  const checkLength = (event) => {
    if (event.target.value.length > 4) {
        event.target.value = event.target.value.slice(0,4); 
    }
  };

  return (
    <div className="NewEdit">
      {submitError ? <h2>There was an error : {errorMessage.Error}</h2> : null}
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
          type="number"
          min="1"
          max="5"
          step="0.1"
          value={app.rating}
          placeholder="From 1 to 5"
          onChange={handleNumberChange}
        />
        <label htmlFor="launched">Launched Year:</label>
        <input
          id="launched"
          type="number"
          name="launched"
          min="1990"
          max={currentYear}
          onInput={checkLength}
          value={app.launched}
          placeholder="Launch Year"
          onChange={handleNumberChange}
        />
        <label htmlFor="ma_users">Monthly Users:</label>
        <input
          id="ma_users"
          name="ma_users"
          type="text"
          value={app.ma_users}
          onChange={handleTextChange}
          placeholder="Approx. Monthly Users"
        />
        <label htmlFor="website">Website:</label>
        <input
          id="website"
          name="website"
          type="url"
          value={app.website}
          onChange={handleTextChange}
          placeholder="https://"
          required
        />
        <label htmlFor="logo_link">Logo Link:</label>
        <input
          id="logo_link"
          name="logo_link"
          type="url"
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
        <input type="submit"  value="SUBMIT"/>
      </form>
      <Link to={`/apps`}>
        <button>BACK</button>
      </Link>
    </div>
  );
}

export default NewApp;
