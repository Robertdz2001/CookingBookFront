import classes from "./App.module.css";

import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import AllRecipesPage from "./AllRecipesPage/AllRecipesPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<AllRecipesPage />} />
      </Routes>
    </div>
  );
}

export default App;
