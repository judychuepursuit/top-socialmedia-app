// import './App.css';

// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import FourOFour from "./pages/FourOFour";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Show from "./pages/Show";
import New from "./pages/New";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<Index />} />
            <Route path="/apps/new" element={<New />} />
            <Route path="/apps/:id" element={<Show />} />
            <Route path="/apps/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
            <Route path="/apps/*" element={<FourOFour />} />
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
