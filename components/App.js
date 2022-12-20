import React, { useState, useEffect } from "react";
import "./CSS/app.css";
import Home from "./Home";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";
import Topbar from "./TopBar";
import MobileNav from "./MobileNav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [media, setMedia] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 700px)");
    query.matches ? setMedia(true) : setMedia(false);
  }, []);

  return (
    <Router>
      <div className="app-main">
        {media ? <MobileNav /> : <Topbar />}

        <Routes>
          <Route path="/" index element={<Home />} />

          <Route path="/destination" element={<Destination />} />

          <Route path="/crew" element={<Crew />} />

          <Route path="/technology" element={<Technology />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
