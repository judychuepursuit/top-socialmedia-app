import { Link } from "react-router-dom";
import logo from "../components/app_logo.png";

function Home() {
  return (
    <div className="Home">
      <div>
        <img src={logo} alt="App Logo"/>
      </div>
      <div>
        <h2>Welcome To The Top Social Media App</h2>
        <h3 className="All App Links"><Link to="/apps">{`‣ Click here for All Apps`}</Link></h3>
      </div>
      {/* <div>
        <h2>Welcome To The Top Social Media App</h2>
        <h3><Link to="/apps">{`‣ Click here for All Apps`}</Link></h3>
      </div> */}
    </div>
  );
}
  
export default Home;
  