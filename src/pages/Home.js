import { Link } from "react-router-dom";
import logo from "../components/app_logo.png";

function Home() {
  return (
    <div className="Home">
      <div>
        <img src={logo} alt="App Logo"/>
      </div>
      <div>
        <h1>Welcome To The Top Social Media App</h1>
        <h3><Link to="/apps">{`>> Click Here to See the Apps List <<`}</Link></h3>
      </div>
    </div>
  );
}
  
export default Home;
  