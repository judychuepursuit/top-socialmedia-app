import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";    
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;

function EditApp() {
  let { index } = useParams();

  const navigate = useNavigate();
  const [lapp, setapp] = useState({
    captainName: "",
    title: "",
    post: "",
    daysSinceLastCrisis: 0,
    mistakesWereMadeToday: false,
  });

  const updateapp = () => {
    axios
      .put(`${API}/apps/${index}`, app)
      .then((response) => {
        setlog(response.data);
        navigate(`/logs/${index}`);
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setapp({ ...app, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setapp({ ...app, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        setlog(response.data);
      })
      .catch((e) => console.error(e));
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateapp();
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="socialmedia"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of App"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          required
          value={app.title}
          placeholder="Title"
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          type="text"
          name="post"
          required
          value={log.post}
          placeholder="Quote"
          onChange={handleTextChange}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          name="daysSinceLastCrisis"
          type="number"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="Days Since Last Crisis"
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/logs/${index}`}>
        <button>Cancel Log!</button>
      </Link>
      <Link to={`/logs/`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default EditApp;