import "./App.css";
import { Routes, Route } from "react-router-dom";

import MyNavbar from "./components/MyNavbar.jsx";
import Home from "./components/Home.jsx";
import Contacts from "./components/Contacts.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import Social from "./components/Social.jsx";
import Bio from "./components/Bio.jsx";
import Projects from "./components/Projects.jsx";

function App() {
  return (
    <div>
      <MyNavbar />
      <div className="social">
        <Social />
      </div>
      <div className="home">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
