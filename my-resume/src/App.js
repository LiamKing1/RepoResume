import { Route, Routes } from "react-router-dom";
import React from "react";

import Resume from "./pages/Resume";
import AboutMe from "./pages/AboutMe";
import PortfolioHome from "./pages/PortfolioHome";

function App() {
  return (
    <div>
      <h1> LIAM KING'S RESUME </h1>
      <Routes>
        <Route
        exact path="/"
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
