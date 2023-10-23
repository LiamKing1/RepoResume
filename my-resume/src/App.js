import { Route, Routes } from "react-router-dom";
import React from "react";

import Resume from "./pages/Resume";
import AboutMe from "./pages/AboutMe";
import PortfolioHome from "./pages/PortfolioHome";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <div>
      <Routes>
      <Route
        exact path="/"
        element={<HomePage />}
        ></Route>
        <Route
        exact path="/Portfolio"
        element={<PortfolioHome />}
        ></Route>
        <Route 
        exact path="/Resume"
        element={<Resume />}
        >
        </Route>
        <Route exaxt path="/AboutMe"
        element={<AboutMe />}
        >
        </Route>
      </Routes>
    </div>
  );
}

export default App;
