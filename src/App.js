// import './App.css';

// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import FourOFour from "./pages/FourOFour";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Show from "./pages/Show";
import New from "./pages/New";


function App() {
  return (
    <div className="App">
          Top Social Media App
          <Router>
        <Home />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<Index />} />
            <Route path="/apps/new" element={<New />} />
            <Route path="/apps/:index" element={<Show />} />
            <Route path="/apps/:index/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
